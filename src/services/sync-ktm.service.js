const prisma = require("../prisma.js");
const crypto = require("crypto");

const syncKtmPrisma = async () => {
    const userList = await prisma.user.findMany({
        where: { ktm_key: { not: null } },
        select: { id: true, ktm_key: true },
    });
    try {
        await prisma.$transaction(async tx => {
            for (const user of userList) {
                await tx.team_member.updateMany({
                    where: { user_id: user.id },
                    data: { kartu_media_id: user.ktm_key },
                });
            }
        });
    } catch (err) {
        console.error("Error syncing ktm_key to team_member:", err);
        throw err;
    }
};

module.exports = {syncKtmPrisma}
