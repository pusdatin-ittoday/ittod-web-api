const prisma = require("../prisma");

const checkAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user_identity.findUnique({
            where: { id: req.user.id },
        });
        const role = user?.role;
        if (role !== "admin") {
            return res.status(403).json({ message: "Admin Only" });
        }
        next();
    } catch (error) {
        console.error("Error in admin middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { checkAdmin };
