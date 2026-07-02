const prisma = require("../prisma.js");

/**
 * Controller to get competition data including teams and members
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const getCompetitionData = async (req, res) => {
    try {
        const competitionData = await prisma.team.findMany({
            select: {
                id: true,
                team_name: true,
                team_code: true,
                is_verified: true,
                payment_proof_id: true,
                verification_error: true,
                competition: {
                    select: {
                        title: true,
                        participation_type: true,
                    },
                },
                members: {
                    select: {
                        role: true,
                        verification_error: true, // Include verification error for members
                        user: {
                            select: {
                                full_name: true,
                                is_registration_complete: true,
                            },
                        },
                    },
                },
            },
        });

        const formattedData = competitionData.map(team => ({
            teamID: team.id,
            teamJoinCode: team.team_code,
            teamName: team.team_name,
            isVerified: team.is_verified,
            paymentProofID: team.payment_proof_id,
            verificationError: team.verification_error,
            competitionName: team.competition?.title ?? "N/A",
            participationType: team.competition?.participation_type ?? "team",
            members: team.members
                .sort((a, b) => (a.role === "leader" ? -1 : 1)) // Sort leader to the top
                .map(member => ({
                    fullName: member.user.full_name,
                    isRegistrationComplete:
                        member.user.is_registration_complete,
                    verificationError: member.verification_error, // Include member's verification error
                })),
        }));

        return res.status(200).json(formattedData);
    } catch (error) {
        console.error("Error fetching competition data:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const getUserCompetitionData = async (req, res) => {
    const user_id = req.user.id;
    try {
        const userCompetitionData = await prisma.team.findMany({
            where: {
                members: {
                    some: {
                        user_id: user_id,
                    },
                },
            },
            select: {
                id: true,
                team_name: true,
                team_code: true,
                is_verified: true,
                is_document_verified: true,
                verification_error: true,
                payment_proof_id: true,
                competition: {
                    select: {
                        id: true,
                        title: true,
                        participation_type: true,
                        requires_submission: true,
                        participation_type: true,
                    },
                },
                submissions: true,
                members: {
                    select: {
                        role: true,
                        verification_error: true, // Include verification error for members
                        user: {
                            select: {
                                full_name: true,
                                is_registration_complete: true,
                            },
                        },
                    },
                },
            },
        });

        const formattedData = userCompetitionData.map(team => ({
            teamID: team.id,
            teamJoinCode: team.team_code,
            teamName: team.team_name,
            isVerified: team.is_verified,
            isDocumentVerified: team.is_document_verified,
            paymentProofID: team.payment_proof_id,
            verificationError: team.verification_error,
            competitionId: team.competition?.id,
            competitionName: team.competition?.title ?? "N/A",
            participationType:
                team.competition?.participation_type ?? "team",
            requiresSubmission: team.competition?.requires_submission ?? false,
            participationType: team.competition?.participation_type ?? "team",
            submissionData: team.submissions?.length > 0 ? team.submissions[0] : null,
            members: team.members
                .sort((a, b) => (a.role === "leader" ? -1 : 1)) // Sort leader to the top
                .map(member => ({
                    fullName: member.user.full_name,
                    isRegistrationComplete:
                        member.user.is_registration_complete,
                    verificationError: member.verification_error, // Include member's verification error
                })),
        }));

        return res.status(200).json(formattedData);
    } catch (error) {
        console.error("Error fetching user competition data:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getCompetitionData,
    getUserCompetitionData,
};
