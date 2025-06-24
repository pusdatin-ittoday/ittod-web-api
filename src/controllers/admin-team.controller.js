const adminTeamService = require('../services/admin-team.service');

// Get List Tim Berdasarkan Kompetisi
const getTeamsByCompetition = async (req, res) => {
    try {
        const { competition, page, limit } = req.query;
        // Validation is now handled by Joi middleware and the service layer
        const result = await adminTeamService.getTeamsByCompetition(competition, parseInt(page), parseInt(limit));

        res.status(200).json({
            success: true,
            message: 'Teams fetched successfully',
            data: result.teams,
            pagination: result.pagination
        });

    } catch (error) {
        // Log sanitized error for debugging
        console.error('Error fetching teams by competition:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        
        res.status(500).json({
            success: false,
            message: 'Internal server error'
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
        // Log sanitized error for debugging
        console.error('Error fetching team detail:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        
        res.status(500).json({
            success: false,
            message: 'Internal server error'
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
        // Log sanitized error for debugging
        console.error('Error verifying team:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        
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
            message: 'Internal server error'
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
        // Log sanitized error for debugging
        console.error('Error rejecting team:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        
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
            message: 'Internal server error'
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
        // Log sanitized error for debugging
        console.error('Error updating member status:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        
        if (error.status === 404) {
            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
        res.status(500).json({
            success: false,
            message: 'Internal server error'
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