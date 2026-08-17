const prisma = require("../prisma.js");
const crypto = require("crypto");

exports.registerUserIntoBootcamp = async ({
    event_id,
    user_id,
    institution_name,
    phone_number,
    bundling,
}) => {
    if (!event_id || !event_id.toLowerCase().includes("bootcamp")) {
        throw {
            status: 400,
            message: "Bootcamp only!",
        };
    }

    // Resolve actual event record from DB (case-insensitive or by slug)
    const targetEvent = await prisma.event.findFirst({
        where: {
            OR: [
                { id: { in: ["Bootcamp", "bootcamp", "BOOTCAMP"] } },
                { slug: { in: ["bootcamp", "Bootcamp"] } },
                { title: { contains: "Bootcamp" } },
            ],
        },
    });

    const resolvedEventId = targetEvent ? targetEvent.id : "Bootcamp";

    const alreadyRegistered = await prisma.event_participant.findFirst({
        where: {
            user_id,
            event_id: resolvedEventId,
        },
    });

    if (alreadyRegistered) {
        // Safe idempotent return if already registered
        return {
            message: "User already registered in the bootcamp!",
            event_participant: alreadyRegistered,
        };
    }

    try {
        return await prisma.$transaction(async tx => {
            // --- INSIDE THE TRANSACTION ---
            const lockedEvent = await tx.event.findUnique({
                where: { id: resolvedEventId },
                select: { max_noncompetition_participant: true },
            });

            const eventParticipantCount = await tx.event_participant.count({
                where: { 
                    event_id: resolvedEventId,
                    payment_verification: { in: ['pending', 'accepted'] }
                },
            });

            const isEventFull =
                lockedEvent?.max_noncompetition_participant !== null &&
                lockedEvent?.max_noncompetition_participant !== undefined &&
                eventParticipantCount >=
                    lockedEvent.max_noncompetition_participant;

            if (isEventFull) {
                throw {
                    status: 403,
                    message: "Bootcamp is full. Registration is not allowed.",
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
                    email: true,
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

            const minetodMember = await tx.team_member.findFirst({
                where: {
                    user_id,
                    team: {
                        OR: [
                            { competition_id: { in: ["MineToday", "minetoday", "mine-today", "MINETODAY"] } },
                            { competition: { slug: { in: ["mine-today", "minetoday"] } } },
                            { competition: { title: { contains: "Mine" } } },
                        ],
                        is_verified: "approved",
                    },
                },
            });
            const isMinetod = !!minetodMember;

            const namaSekolah = userData?.nama_sekolah || "";
            const userEmail = userData?.email || "";
            const isIPB =
                namaSekolah.toLowerCase().includes("ipb") ||
                namaSekolah.toLowerCase().includes("institut pertanian bogor") ||
                /@(apps\.)?ipb\.ac\.id$/i.test(userEmail);
            const canBeFree = isIPB;

            // Check if the user has been verified previously in any team
            const previouslyVerified = await tx.team_member.findFirst({
                where: {
                    user_id,
                    is_verified: true,
                },
            });
            const isAutoVerified = !!previouslyVerified;

            // Check if individual team entry already exists for this bootcamp event and user
            const existingTeam = await tx.team.findFirst({
                where: {
                    competition_id: resolvedEventId,
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

                let tag = "";
                if (canBeFree) {
                    tag = " - IPB";
                } else if (bundling === "minetoday" || isMinetod) {
                    tag = " - MineToday";
                } else if (bundling === "intelligo_gateway") {
                    tag = " - Intelligo Gateway";
                }
                const teamName = userData?.full_name ? `[Bootcamp${tag}] ${userData.full_name}` : `[Bootcamp${tag}] ${user_id}`;

                await tx.team.create({
                    data: {
                        id: teamId,
                        competition_id: resolvedEventId,
                        team_name: teamName,
                        team_code,
                        max_member: 1,
                        is_document_verified: isAutoVerified ? "approved" : "pending",
                        is_verified: isAutoVerified ? (canBeFree ? "approved" : "pending") : "pending",
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

            const newParticipant = await tx.event_participant.create({
                data: {
                    user_id,
                    event_id: resolvedEventId,
                    payment_verification: isAutoVerified ? (canBeFree ? "accepted" : "pending") : "pending",
                    date_added: new Date(),
                },
            });

            return {
                message: "Successfully registered into bootcamp!",
                event_participant: newParticipant,
            };
        });
    } catch (e) {
        console.error("Registration error:", e);
        if (e.status) {
            throw e;
        }
        throw {
            status: 500,
            message: e.message || "Failed to register user into bootcamp.",
        };
    }
};
