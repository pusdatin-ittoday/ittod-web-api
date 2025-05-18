const prisma = require("../prisma.js");

const syncKtmPrisma = async () => {
    const userList = await prisma.user.findMany({
        where: { ktm_key: { not: null } },
        select: { id: true, ktm_key: true },
    });
    try {
        const updateResults = await prisma.$transaction(async tx => {
            const results = [];
            for (const user of userList) {
                const result = await tx.team_member.updateMany({
                    where: { user_id: user.id },
                    data: { kartu_id: user.ktm_key },
                });
                results.push(result);
            }
            return results;
        });
        console.log("Update results:", updateResults);
        return updateResults;
    } catch (err) {
        console.error("Error syncing ktm_key to team_member:", err);
        throw err;
    }
};

module.exports = { syncKtmPrisma };
