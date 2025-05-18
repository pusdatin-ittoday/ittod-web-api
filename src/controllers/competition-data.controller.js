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
                competition: {
                    select: {
                        title: true
                    }
                },
                members: {
                    select: {
                        user: {
                            select: {
                                full_name: true
                            }
                        }
                    }
                }
            }
        });

        const formattedData = competitionData.map(team => ({
            teamID: team.id,
            teamName: team.team_name,
            competitionName: team.competition?.title ?? 'N/A',
            members: team.members.map(member => member.user.full_name)
        }));

        return res.status(200).json(formattedData);
    } catch (error) {
        console.error('Error fetching competition data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getCompetitionData
};
