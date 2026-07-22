const { Router } = require("express");
const { checkAdmin, checkSuperAdmin } = require("../middleware/adminOnlyMiddleware");
const { syncKtm } = require("../controllers/sync-ktm.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const passport = require("../strategies/admin-strategy");
const { validateLogin, loginLimiter } = require("../middleware/authMiddleware");
const passportAuthMiddleware = require("../middleware/passportAuthMiddleware");
const { loginAdmin } = require("../controllers/auth.controller");
const preventLoginIfAuthenticated = require("../middleware/preventLoginIfAuthenticated");
const {
    getCompetitionById,
    getCompetitionList,
} = require("../controllers/adminCompetitionView.controller");
const { initiateDatabase } = require("../controllers/initate-db.controller");
const { createTimeline } = require("../controllers/admin-timeline.controller");
const {
    getTeamsByCompetition,
    getTeamDetail,
    verifyTeam,
    rejectTeam,
    updateMemberStatus,
    deleteTeam,
    removeMemberFromTeam,
    updateTeam,
    addMemberToTeam,
    transferTeamLeadership,
} = require("../controllers/admin-team.controller");
const {
    getUsersList,
    getUserDetail,
    updateUser,
    changeUserRole,
    deleteUser,
} = require("../controllers/admin-user.controller");
const {
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} = require("../controllers/admin-announcement.controller");
const { validateRequest } = require("../middleware/validationMiddleware");
const {
    verifyTeamSchema,
    rejectTeamSchema,
    updateMemberStatusSchema,
    teamDetailSchema,
    teamsByCompetitionSchema,
    deleteTeamSchema,
    removeMemberSchema,
} = require("../validators/adminTeamValidationSchema");

const adminRouter = Router();

// Sync KTM
adminRouter.get("/api/admin/sync-ktm", isAuthenticated, checkAdmin, syncKtm);

// Login Admin
adminRouter.post(
    "/api/admin/login",
    loginLimiter,
    preventLoginIfAuthenticated,
    validateLogin,
    passportAuthMiddleware("admin"),
    loginAdmin
);

// Competition view data
adminRouter.get(
    "/api/admin/competition-view/:id",
    isAuthenticated,
    checkAdmin,
    getCompetitionById
);

adminRouter.get(
    "/api/admin/competition-list",
    isAuthenticated,
    checkAdmin,
    getCompetitionList
);

// Timeline Management
adminRouter.post(
    "/api/admin/create-timeline",
    isAuthenticated,
    checkAdmin,
    createTimeline
);

// ==================== TEAM MANAGEMENT ====================

// Get List Tim Berdasarkan Kompetisi
adminRouter.get(
    "/api/admin/teams",
    isAuthenticated,
    checkAdmin,
    validateRequest(teamsByCompetitionSchema, "query"),
    getTeamsByCompetition
);

// Get Detail Tim dan Anggota
adminRouter.get(
    "/api/admin/teams/:teamId",
    isAuthenticated,
    checkAdmin,
    validateRequest(teamDetailSchema, "params"),
    getTeamDetail
);

// Verifikasi Tim
adminRouter.post(
    "/api/admin/teams/:teamId/verify",
    isAuthenticated,
    checkAdmin,
    validateRequest(verifyTeamSchema, "params"),
    verifyTeam
);

// Reject Tim
adminRouter.post(
    "/api/admin/teams/:teamId/reject",
    isAuthenticated,
    checkAdmin,
    validateRequest(rejectTeamSchema, "combined"),
    rejectTeam
);

// Update Status Complete/Incomplete Anggota Tim
adminRouter.patch(
    "/api/admin/members/:memberId/status",
    isAuthenticated,
    checkAdmin,
    validateRequest(updateMemberStatusSchema, "combined"),
    updateMemberStatus
);

// Update Team Details
adminRouter.patch(
    "/api/admin/teams/:teamId",
    isAuthenticated,
    checkAdmin,
    updateTeam
);

// Add Member to Team
adminRouter.post(
    "/api/admin/teams/:teamId/members",
    isAuthenticated,
    checkAdmin,
    addMemberToTeam
);

// Transfer Team Leadership
adminRouter.patch(
    "/api/admin/teams/:teamId/leader",
    isAuthenticated,
    checkAdmin,
    transferTeamLeadership
);

// Delete Tim Permanently (SUPERADMIN ONLY)
adminRouter.delete(
    "/api/admin/teams/:teamId",
    isAuthenticated,
    checkSuperAdmin,
    validateRequest(deleteTeamSchema, "params"),
    deleteTeam
);

// Remove Member from Team (SUPERADMIN ONLY)
adminRouter.delete(
    "/api/admin/teams/:teamId/members/:memberId",
    isAuthenticated,
    checkSuperAdmin,
    validateRequest(removeMemberSchema, "params"),
    removeMemberFromTeam
);

// ==================== USER MANAGEMENT ====================

// List all users
adminRouter.get(
    "/api/admin/users",
    isAuthenticated,
    checkAdmin,
    getUsersList
);

// Get user detail
adminRouter.get(
    "/api/admin/users/:userId",
    isAuthenticated,
    checkAdmin,
    getUserDetail
);

// Update user profile
adminRouter.patch(
    "/api/admin/users/:userId",
    isAuthenticated,
    checkAdmin,
    updateUser
);

// Change user role (SUPERADMIN ONLY)
adminRouter.patch(
    "/api/admin/users/:userId/role",
    isAuthenticated,
    checkSuperAdmin,
    changeUserRole
);

// Delete user account (SUPERADMIN ONLY)
adminRouter.delete(
    "/api/admin/users/:userId",
    isAuthenticated,
    checkSuperAdmin,
    deleteUser
);

// ==================== ANNOUNCEMENT MANAGEMENT ====================

// Create announcement
adminRouter.post(
    "/api/admin/announcements",
    isAuthenticated,
    checkAdmin,
    createAnnouncement
);

// Update announcement
adminRouter.put(
    "/api/admin/announcements/:announcementId",
    isAuthenticated,
    checkAdmin,
    updateAnnouncement
);

// Delete announcement
adminRouter.delete(
    "/api/admin/announcements/:announcementId",
    isAuthenticated,
    checkAdmin,
    deleteAnnouncement
);

// ONLY RUN ONCE!
adminRouter.get(
    "/api/admin/lets-get-this-bread",
    isAuthenticated,
    checkAdmin,
    initiateDatabase
);

module.exports = adminRouter;
