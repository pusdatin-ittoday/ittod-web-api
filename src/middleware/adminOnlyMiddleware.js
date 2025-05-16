const prisma = require("../prisma")

const checkAdmin = async (req, res, next) => {
    const user = await prisma.user_identity.findUnique({
        where: { id: req.user.id }
    });
    const role = user?.role;
    if (role !== "admin") {
        return res.status(403).json({ message: "Admin Only" });
    }
    next();
}
module.exports = {checkAdmin}