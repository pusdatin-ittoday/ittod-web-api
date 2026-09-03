const prisma = require("../prisma.js");
const crypto = require("crypto");

const registerUserIntoEvent = async (
    user_id,
    event_id,
    institution_name,
    phone_number,
    date_of_birth
) => {
    const eventExists = await prisma.event.findFirst({
        where: {
            OR: [
                { id: event_id },
                { slug: event_id }
            ]
        },
    });

    if (date_of_birth) {
        await prisma.user.update({
            where: { id: user_id },
            data: { birth_date: new Date(date_of_birth) },
        });
    }

    if (!eventExists) {
        throw {
            status: 404,
            message: `There's no event with event_id ${event_id}`,
        };
    }

    const actualEventId = eventExists.id;

    if (!eventExists.is_active) {
        throw {
            status: 400,
            message: "Pendaftaran untuk kegiatan ini telah ditutup.",
        };
    }

    const regTimeline = await prisma.event_timeline.findFirst({
        where: {
            event_id: actualEventId,
            is_registration: true,
        },
    });

    if (regTimeline) {
        const parseLocalDate = (dateStr) => {
            if (!dateStr) return null;
            const str = typeof dateStr === 'string' ? dateStr : dateStr.toISOString();
            return new Date(str.endsWith('Z') ? str.slice(0, -1) : str);
        };
        const deadline = regTimeline.end_date ? parseLocalDate(regTimeline.end_date) : parseLocalDate(regTimeline.date);
        if (deadline && new Date() > deadline) {
            await prisma.event.update({
                where: { id: actualEventId },
                data: { is_active: false }
            }).catch(() => {});
            throw {
                status: 400,
                message: "Batas waktu pendaftaran untuk kegiatan ini telah berakhir.",
            };
        }
    }

    const userAlreadyInEvent = await prisma.event_participant.findFirst({
        where: { user_id, event_id: actualEventId },
    });

    if (userAlreadyInEvent) {
        throw {
            status: 403,
            message: "You already registered in this event!",
        };
    }

    try {
        await prisma.$transaction(async tx => {
            const lockedEvent = await tx.event.findUnique({
                where: { id: actualEventId },
                select: { max_noncompetition_participant: true },
            });

            const maxParticipants = lockedEvent?.max_noncompetition_participant;

            const eventParticipantCount = await tx.event_participant.count({
                where: { 
                    event_id: actualEventId,
                    payment_verification: { in: ['pending', 'accepted'] }
                },
            });

            const isEventFull =
                maxParticipants !== null &&
                eventParticipantCount >= maxParticipants;

            if (isEventFull) {
                throw {
                    status: 403,
                    message: "Event is full. Registration is not allowed.",
                };
            }

            const userData = await tx.user.findFirst({
                where: { id: user_id },
                select: {
                    full_name: true,
                    birth_date: true,
                    phone_number: true,
                    jenis_kelamin: true,
                    id_discord: true,
                    id_instagram: true,
                    pendidikan: true,
                    nama_sekolah: true,
                    ktm_key: true,
                    twibbon_key: true,
                    is_registration_complete: true,
                },
            });

            const isFieldFilled = (val) => val !== null && val !== undefined && String(val).trim() !== "";
            const isComplete = userData?.is_registration_complete === 1 || (
                isFieldFilled(userData?.full_name) &&
                userData?.birth_date &&
                isFieldFilled(userData?.phone_number) &&
                isFieldFilled(userData?.jenis_kelamin) &&
                isFieldFilled(userData?.id_discord) &&
                isFieldFilled(userData?.id_instagram) &&
                isFieldFilled(userData?.pendidikan) &&
                isFieldFilled(userData?.nama_sekolah) &&
                isFieldFilled(userData?.ktm_key) &&
                isFieldFilled(userData?.twibbon_key)
            );

            if (!isComplete) {
                throw {
                    status: 400,
                    message: "Lengkapi data profil dan berkas identitas terlebih dahulu di menu Edit Profil sebelum mendaftar.",
                };
            }

            const updateData = {};
            if (institution_name) updateData.nama_sekolah = institution_name;
            if (phone_number) updateData.phone_number = phone_number;

            if (Object.keys(updateData).length > 0) {
                await tx.user.update({
                    where: { id: user_id },
                    data: updateData,
                });
            }

            // Check if the user has been verified previously in any team
            const previouslyVerified = await tx.team_member.findFirst({
                where: {
                    user_id,
                    is_verified: true,
                },
            });
            const isAutoVerified = !!previouslyVerified;

            const existingTeam = await tx.team.findFirst({
                where: {
                    competition_id: actualEventId,
                    members: {
                        some: { user_id },
                    },
                },
            });

            if (!existingTeam) {
                const teamId = crypto.randomUUID();
                let team_code;
                let existingTeamWithCode;
                do {
                    team_code = crypto.randomBytes(6).toString("base64url");
                    existingTeamWithCode = await tx.team.findUnique({
                        where: { team_code },
                    });
                } while (existingTeamWithCode);

                const eventTitle = lockedEvent?.title || eventExists?.title || "Event";
                const teamName = userData?.full_name ? `[${eventTitle}] ${userData.full_name}` : `[${eventTitle}] ${user_id}`;

                await tx.team.create({
                    data: {
                        id: teamId,
                        competition_id: actualEventId,
                        team_name: teamName,
                        team_code,
                        max_member: 1,
                        is_document_verified: isAutoVerified ? "approved" : "pending",
                        is_verified: isAutoVerified ? (eventExists?.price === 0 ? "approved" : "pending") : "pending",
                        members: {
                            create: {
                                user_id,
                                role: "leader",
                                is_verified: isAutoVerified,
                            },
                        },
                    },
                });
            }

            await tx.event_participant.create({
                data: {
                    user_id,
                    event_id: actualEventId,
                    payment_verification: isAutoVerified ? (eventExists?.price === 0 ? "accepted" : "pending") : "pending",
                    date_added: new Date(),
                },
            });
        });

        return {
            message: `User has been registered into event with id ${actualEventId}`,
        };
    } catch (err) {
        console.error("Registration error:", err);
        throw {
            status: 500,
            message: "Failed to register user into event.",
            error: err.message,
        };
    }
};
module.exports = { registerUserIntoEvent };
