const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Auto-ensure required columns exist in MySQL database
(async () => {
    try {
        const teamCols = await prisma.$queryRawUnsafe(
            "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'team' AND COLUMN_NAME = 'has_bootcamp_addon'"
        );
        if (!teamCols || teamCols.length === 0) {
            await prisma.$executeRawUnsafe(
                "ALTER TABLE `team` ADD COLUMN `has_bootcamp_addon` TINYINT(1) NOT NULL DEFAULT 0"
            );
            console.log("Added missing column has_bootcamp_addon to team table.");
        }
    } catch (e) {
        console.error("Column check error (team.has_bootcamp_addon):", e.message);
    }

    try {
        const timelineCols = await prisma.$queryRawUnsafe(
            "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'event_timeline' AND COLUMN_NAME = 'is_registration'"
        );
        if (!timelineCols || timelineCols.length === 0) {
            await prisma.$executeRawUnsafe(
                "ALTER TABLE `event_timeline` ADD COLUMN `is_registration` TINYINT(1) NOT NULL DEFAULT 0"
            );
            console.log("Added missing column is_registration to event_timeline table.");
        }
    } catch (e) {
        console.error("Column check error (event_timeline.is_registration):", e.message);
    }

    try {
        const finalistCols = await prisma.$queryRawUnsafe(
            "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'team' AND COLUMN_NAME = 'is_finalist'"
        );
        if (!finalistCols || finalistCols.length === 0) {
            await prisma.$executeRawUnsafe(
                "ALTER TABLE `team` ADD COLUMN `is_finalist` TINYINT(1) NOT NULL DEFAULT 0, ADD COLUMN `rank` INT NULL"
            );
            console.log("Added missing column is_finalist and rank to team table.");
        }
    } catch (e) {
        console.error("Column check error (team.is_finalist):", e.message);
    }
})();

module.exports = prisma;

