const competitionService = require('../services/admin.services');
const { message } = require('../validators/loginValidationSchema');

const getCompetitionById = async (req, res) => {
    try {
        const { id } = req.params;

        const competition = await competitionService.getCompetitionById(id);

        if(!competition) {
            return res.status(404).json({
                success: false,
                message: 'Competition not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'competition fetched successfully',
            data: competition
        });

    } catch (error) {
        console.error('Error fetching competition', error);
        res.status(500).json({
            success: false,
            message: 'internal server error',
            error: error.message
        });
    }
};

module.exports = { getCompetitionById }