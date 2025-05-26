const { Router } = require("express");
const { checkAdmin } = require("../middleware/adminOnlyMiddleware");
const { syncKtm } = require("../controllers/sync-ktm.controller");
const { isAuthenticated } = require("../middleware/authMiddleware.js");
const passport = require("../strategies/admin-strategy");
const { validateLogin, loginLimiter } = require("../middleware/authMiddleware");
const passportAuthMiddleware = require("../middleware/passportAuthMiddleware");
const { loginAdmin } = require("../controllers/auth.controller");
const preventLoginIfAuthenticated = require("../middleware/preventLoginIfAuthenticated");
const { getCompetitionById } = require("../controllers/adminCompetitionView.controller");

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

//untuk tampilin data kompetisi
adminRouter.get("/api/admin/competition-view/:id",  
    isAuthenticated,
    checkAdmin,
    getCompetitionById
);



module.exports = adminRouter;
