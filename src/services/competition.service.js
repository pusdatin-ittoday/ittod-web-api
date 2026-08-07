const prisma = require("../prisma.js");
const crypto = require("crypto");
const {
    checkUserCompetitionLimit,
} = require("../helpers/checkUserCompetitionLimit.js");

exports.registerTeamThenInsertLeader = async ({
    competition_id,
    team_name,
    leader_id,
}) => {
    const competitionExists = await prisma.event.findFirst({
        where: { id: competition_id, type: "competition" },
    });
    if (!competitionExists)
        throw { status: 404, message: "competition_id not found" };

    const leaderExists = await prisma.user.findUnique({
        where: { id: leader_id },
    });
    if (!leaderExists) throw { status: 404, message: "Leader ID not found" };

    const isIndividual =
        competitionExists.participation_type === "individual";
    const submittedTeamName =
        typeof team_name === "string" ? team_name.trim() : "";

    if (!isIndividual && !submittedTeamName) {
        throw { status: 400, message: "Team name is required" };
    }

    try {
        await prisma.$transaction(
            async (tx) => {
                const existingRegistration = await tx.team_member.findFirst({
                    where: {
                        user_id: leader_id,
                        team: {
                            competition_id,
                        },
                    },
                });

                if (existingRegistration) {
                    throw {
                        status: 409,
                        message: "You are already registered for this competition",
                    };
                }

                const existingTeamLeadership = !isIndividual
                    ? await tx.team_member.findFirst({
                          where: {
                              user_id: leader_id,
                              role: "leader",
                              team: {
                                  competition: {
                                      participation_type: "team",
                                  },
                              },
                          },
                      })
                    : null;

                if (existingTeamLeadership) {
                    throw {
                        status: 403,
                        message: "You can only register one team as a leader",
                    };
                }

                await checkUserCompetitionLimit(tx, leader_id);

                const random_id = crypto.randomUUID();
                const resolvedTeamName = isIndividual
                    ? `${leaderExists.full_name} - ${competitionExists.title} - ${random_id.slice(0, 8)}`
                    : submittedTeamName;

                const teamExists = await tx.team.findFirst({
                    where: {
                        competition_id,
                        team_name: resolvedTeamName,
                    },
                });
                if (teamExists) {
                    throw { status: 409, message: "Team name already exists" };
                }

                const MAX_RETRIES = 10;
                let retryCount = 0;
                let team_code;
                let existingTeamWithCode;
                // Ensure team code is unique
                do {
                    team_code = crypto.randomBytes(6).toString("base64url");
                    existingTeamWithCode = await tx.team.findUnique({
                        where: { team_code },
                    });
                    retryCount++;
                    if (retryCount >= MAX_RETRIES && existingTeamWithCode) {
                        throw {
                            status: 500,
                            message: "Failed to generate unique team code",
                        };
                    }
                } while (existingTeamWithCode);

                // Create the team
                await tx.team.create({
                    data: {
                        id: random_id,
                        competition_id,
                        team_name: resolvedTeamName,
                        team_code,
                        max_member: isIndividual
                            ? 1
                            : (competitionExists.max_member ?? 3),
                    },
                });

                // Add the leader to the team
                await tx.team_member.create({
                    data: {
                        user_id: leader_id,
                        team_id: random_id,
                        role: "leader",
                    },
                });
            },
            { isolationLevel: "Serializable" }
        );

        return {
            message: isIndividual
                ? "Individual participant successfully registered"
                : "Team successfully registered and leader assigned",
            participation_type: competitionExists.participation_type,
        };
    } catch (error) {
        if (error.status) throw error;
        console.error("Registration error:", error);
        throw { status: 500, message: "Failed to register team" };
    }
};

exports.memberJoinWithTeamCode = async ({ user_id, team_code }) => {
    return prisma.$transaction(
        async (tx) => {
            await checkUserCompetitionLimit(tx, user_id);

            const team = await tx.team.findUnique({ where: { team_code } });
            if (!team) throw { status: 404, message: "Invalid team code" };

            const existingCompetitionRegistration = await tx.team_member.findFirst({
                where: {
                    user_id: user_id,
                    team: {
                        competition_id: team.competition_id,
                    },
                },
            });
            if (existingCompetitionRegistration) {
                throw {
                    status: 409,
                    message: "You are already registered for a team in this competition",
                };
            }

            const existingMember = await tx.team_member.findUnique({
                where: { user_id_team_id: { user_id, team_id: team.id } },
            });
            if (existingMember)
                throw {
                    status: 409,
                    message: "User is already a member of this team",
                };

            const teamMemberCount = await tx.team_member.count({
                where: { team_id: team.id },
            });
            // Verify team's competition exists
            const competitionExists = await tx.event.findFirst({
                where: { id: team.competition_id, type: "competition" },
            });
            if (!competitionExists) {
                throw {
                    status: 404,
                    message: "Competition not found for this team",
                };
            }

            if (teamMemberCount >= team.max_member)
                throw {
                    status: 403,
                    message: "Team has reached the maximum member limit",
                };

            await tx.team_member.create({
                data: {
                    user_id,
                    team_id: team.id,
                    role: "member",
                },
            });

            // Reset verifikasi berkas tim ke pending karena ada anggota baru
            // yang berkasnya belum diperiksa panitia.
            // is_verified (pembayaran) tidak diubah.
            await tx.team.update({
                where: { id: team.id },
                data: { is_document_verified: "pending" },
            });

            return { message: "Successfully joined the team" };
        },
        { isolationLevel: "Serializable" }
    );
};

exports.updateTeamName = async ({ team_id, team_name, user_id }) => {
    const trimmedName = typeof team_name === "string" ? team_name.trim() : "";
    if (!trimmedName) {
        throw { status: 400, message: "Nama tim tidak boleh kosong" };
    }
    if (trimmedName.length < 3) {
        throw { status: 400, message: "Nama tim minimal 3 karakter" };
    }
    if (trimmedName.length > 50) {
        throw { status: 400, message: "Nama tim maksimal 50 karakter" };
    }

    return prisma.$transaction(
        async (tx) => {
            const team = await tx.team.findUnique({
                where: { id: team_id },
                include: {
                    competition: true,
                    members: true,
                },
            });

            if (!team) {
                throw { status: 404, message: "Tim tidak ditemukan" };
            }

            if (team.competition?.participation_type === "individual") {
                throw {
                    status: 400,
                    message: "Nama tim untuk kategori individu tidak dapat diubah",
                };
            }

            const leaderMember = team.members.find(
                (m) => m.user_id === user_id && m.role === "leader"
            );
            if (!leaderMember) {
                throw {
                    status: 403,
                    message: "Hanya ketua tim yang dapat mengubah nama tim",
                };
            }

            if (team.is_name_changed) {
                throw {
                    status: 403,
                    message: "Nama tim hanya dapat diubah 1 kali",
                };
            }

            if (team.team_name === trimmedName) {
                throw {
                    status: 400,
                    message: "Nama tim baru sama dengan nama tim saat ini",
                };
            }

            const existingTeamName = await tx.team.findFirst({
                where: {
                    competition_id: team.competition_id,
                    team_name: trimmedName,
                    NOT: { id: team_id },
                },
            });

            if (existingTeamName) {
                throw {
                    status: 409,
                    message: "Nama tim sudah digunakan di kompetisi ini",
                };
            }

            const updatedTeam = await tx.team.update({
                where: { id: team_id },
                data: {
                    team_name: trimmedName,
                    is_name_changed: true,
                    updated_at: new Date(),
                },
            });

            return {
                message: "Nama tim berhasil diubah",
                team_name: updatedTeam.team_name,
                is_name_changed: updatedTeam.is_name_changed,
            };
        },
        { isolationLevel: "Serializable" }
    );
};

