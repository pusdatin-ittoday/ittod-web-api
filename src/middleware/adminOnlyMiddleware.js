const prisma = require("../prisma");

const checkAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user_identity.findUnique({
            where: { id: req.user.id },
        });
        const role = user?.role;
        const allowedAdminRoles = ["admin", "superadmin", "admin_keuangan", "admin_biasa", "panitia"];
        if (!allowedAdminRoles.includes(role)) {
            return res.status(403).json({ message: "Admin Only" });
        }
        next();
    } catch (error) {
        console.error("Error in admin middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const checkSuperAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user_identity.findUnique({
            where: { id: req.user.id },
        });
        const role = user?.role;
        if (role !== "superadmin") {
            return res.status(403).json({ message: "Superadmin Only" });
        }
        next();
    } catch (error) {
        console.error("Error in superadmin middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { checkAdmin, checkSuperAdmin };
