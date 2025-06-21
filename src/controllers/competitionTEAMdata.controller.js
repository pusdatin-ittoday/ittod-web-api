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
                verification_error: true,
                competition: {
                    select: {
                        title: true
                    }
                },
                members: {
                    select: {
                        role: true, // Include the role column
                        user: {
                            select: {
                                full_name: true,
                                is_registration_complete: true
                            }
                        }
                    }
                }
            }
        });

        const formattedData = competitionData.map(team => ({
            teamID: team.id,
            teamJoinCode: team.team_code,
            teamName: team.team_name,
            isVerified: team.is_verified,
            verificationError: team.verification_error,
            competitionName: team.competition?.title ?? 'N/A',
            members: team.members
                .sort((a, b) => (a.role === "leader" ? -1 : 1)) // Sort leader to the top
                .map(member => ({
                    fullName: member.user.full_name,
                    isRegistrationComplete: member.user.is_registration_complete
                }))
        }));

        return res.status(200).json(formattedData);
    } catch (error) {
        console.error('Error fetching competition data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getUserCompetitionData = async (req, res) => {
    const user_id = req.user.id;
    try {
        const userCompetitionData = await prisma.team.findMany({
            where: {
                members: {
                    some: {
                        user_id: user_id
                    }
                }
            },
            select: {
                id: true,
                team_name: true,
                team_code: true,
                is_verified: true,
                verification_error: true,
                payment_proof_id: true,
                competition: {
                    select: {
                        title: true
                    }
                },
                members: {
                    select: {
                        role: true, // Include the role column
                        user: {
                            select: {
                                full_name: true,
                                is_registration_complete: true
                            }
                        }
                    }
                }
            }
        });

        const formattedData = userCompetitionData.map(team => ({
            teamID: team.id,
            teamJoinCode: team.team_code,
            teamName: team.team_name,
            isVerified: team.is_verified,
            paymentProofID: team.payment_proof_id,
            verificationError: team.verification_error,
            competitionName: team.competition?.title ?? 'N/A',
            members: team.members
                .sort((a, b) => (a.role === "leader" ? -1 : 1)) // Sort leader to the top
                .map(member => ({
                    fullName: member.user.full_name,
                    isRegistrationComplete: member.user.is_registration_complete
                }))
        }));

        return res.status(200).json(formattedData);
    } catch (error) {
        console.error('Error fetching user competition data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getCompetitionData, getUserCompetitionData
};
