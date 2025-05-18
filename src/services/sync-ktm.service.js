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
                // Check for existing kartu_id to avoid unique constraint violation
                const existing = await tx.team_member.findFirst({
                    where: { kartu_id: user.ktm_key },
                });

                if (!existing) {
                    const result = await tx.team_member.updateMany({
                        where: { user_id: user.id },
                        data: { kartu_id: user.ktm_key },
                    });
                    results.push(result);
                } else {
                    console.warn(
                        `Skipping update for user_id ${user.id}: kartu_id ${user.ktm_key} already exists`
                    );
                }
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
