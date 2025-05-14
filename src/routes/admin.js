const { Router } = require("express");
const adminRouter = Router();
const {checkAdmin} = require("../middleware/adminOnlyMiddleware")
const {syncKtm} = require("../controllers/sync-ktm.controller")
const { isAuthenticated } = require("../middleware/authMiddleware.js");

adminRouter.get("/api/admin/sync-ktm", isAuthenticated,checkAdmin, syncKtm)