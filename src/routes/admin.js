const { Router } = require("express");
const { checkAdmin } = require("../middleware/adminOnlyMiddleware");
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
} = require("../controllers/admin-team.controller");
const { validateRequest } = require("../middleware/validationMiddleware");
const {
    verifyTeamSchema,
    rejectTeamSchema,
    updateMemberStatusSchema,
    teamDetailSchema,
    teamsByCompetitionSchema,
} = require("../validators/adminTeamValidationSchema");

const adminRouter = Router();
adminRouter.get("/api/admin/sync-ktm", isAuthenticated, checkAdmin, syncKtm);

adminRouter.post(
    "/api/admin/login",
    loginLimiter,
    preventLoginIfAuthenticated,
    validateLogin,
    passportAuthMiddleware("admin"),
    loginAdmin
);

//json untuk tampilin data kompetisi
adminRouter.get(
    "/api/admin/competition-view/:id",
    isAuthenticated,
    checkAdmin,
    getCompetitionById
);

//json untuk data dropdown
adminRouter.get(
    "/api/admin/competition-list",
    isAuthenticated,
    checkAdmin,
    getCompetitionList
);

// Create new timeline
adminRouter.post(
    "/api/admin/create-timeline",
    isAuthenticated,
    checkAdmin,
    createTimeline
);

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

// ONLY RUN ONCE!
adminRouter.get(
    "/api/admin/lets-get-this-bread",
    isAuthenticated,
    checkAdmin,
    initiateDatabase
);

module.exports = adminRouter;
