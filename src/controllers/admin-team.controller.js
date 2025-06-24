const adminTeamService = require('../services/admin-team.service');

// Get List Tim Berdasarkan Kompetisi
const getTeamsByCompetition = async (req, res) => {
    try {
        const { competition } = req.query;
        
        // Validation is now handled by Joi middleware
        const teams = await adminTeamService.getTeamsByCompetition(competition);

        res.status(200).json({
            success: true,
            message: 'Teams fetched successfully',
            data: teams
        });

    } catch (error) {
        console.error('Error fetching teams by competition:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message || error
        });
    }
};

// Get Detail Tim dan Anggota
const getTeamDetail = async (req, res) => {
    try {
        const { teamId } = req.params;

        // Validation is now handled by Joi middleware
        const teamDetail = await adminTeamService.getTeamDetail(teamId);

        if (!teamDetail) {
            return res.status(404).json({
                success: false,
                message: `Team with id: ${teamId} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Team detail fetched successfully',
            data: teamDetail
        });

    } catch (error) {
        console.error('Error fetching team detail:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message || error
        });
    }
};

// Verifikasi Tim
const verifyTeam = async (req, res) => {
    try {
        const { teamId } = req.params;

        // Validation is now handled by Joi middleware
        const result = await adminTeamService.verifyTeam(teamId);

        res.status(200).json({
            success: true,
            message: 'Team verified successfully',
            data: result
        });

    } catch (error) {
        console.error('Error verifying team:', error);
        if (error.status === 404) {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
        if (error.status === 400) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message || error
        });
    }
};

// Reject Tim
const rejectTeam = async (req, res) => {
    try {
        const { teamId } = req.params;
        const { reason } = req.body;

        // Validation is now handled by Joi middleware
        const result = await adminTeamService.rejectTeam(teamId, reason);

        res.status(200).json({
            success: true,
            message: 'Team rejected successfully',
            data: result
        });

    } catch (error) {
        console.error('Error rejecting team:', error);
        if (error.status === 404) {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message || error
        });
    }
};

// Update Status Complete/Incomplete Anggota Tim
const updateMemberStatus = async (req, res) => {
    try {
        const { memberId } = req.params;
        const { is_complete } = req.body;

        // Validation is now handled by Joi middleware
        const result = await adminTeamService.updateMemberStatus(memberId, is_complete);

        res.status(200).json({
            success: true,
            message: 'Member status updated successfully',
            data: result
        });

    } catch (error) {
        console.error('Error updating member status:', error);
        if (error.status === 404) {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message || error
        });
    }
};

module.exports = {
    getTeamsByCompetition,
    getTeamDetail,
    verifyTeam,
    rejectTeam,
    updateMemberStatus
}; 