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

    try {
        const eventCols = await prisma.$queryRawUnsafe(
            "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'event' AND COLUMN_NAME = 'finalist_timeline_id'"
        );
        if (!eventCols || eventCols.length === 0) {
            await prisma.$executeRawUnsafe(
                "ALTER TABLE `event` ADD COLUMN `finalist_timeline_id` VARCHAR(36) NULL, ADD COLUMN `winner_timeline_id` VARCHAR(36) NULL"
            );
            console.log("Added missing columns finalist_timeline_id and winner_timeline_id to event table.");
        }
    } catch (e) {
        console.error("Column check error (event.finalist_timeline_id):", e.message);
    }

    // Auto-ensure semnas_participant table
    try {
        const semnasTable = await prisma.$queryRawUnsafe(
            "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'semnas_participant'"
        );
        if (!semnasTable || semnasTable.length === 0) {
            await prisma.$executeRawUnsafe(`
                CREATE TABLE semnas_participant (
                    id VARCHAR(36) NOT NULL PRIMARY KEY,
                    user_id VARCHAR(255) NOT NULL,
                    event_id VARCHAR(255) NOT NULL,
                    kenal_sentral_komputer TINYINT(1) NOT NULL DEFAULT 0,
                    sumber_kenal_sentral VARCHAR(255) NULL,
                    kenal_acer TINYINT(1) NOT NULL DEFAULT 0,
                    kenal_nvidia TINYINT(1) NOT NULL DEFAULT 0,
                    kenal_microsoft TINYINT(1) NOT NULL DEFAULT 0,
                    ig_follow_proof_key VARCHAR(255) NULL,
                    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    UNIQUE KEY semnas_participant_user_event (user_id, event_id),
                    KEY semnas_participant_event_id_foreign (event_id),
                    CONSTRAINT semnas_participant_user_id_foreign FOREIGN KEY (user_id) REFERENCES user(id),
                    CONSTRAINT semnas_participant_event_id_foreign FOREIGN KEY (event_id) REFERENCES event(id)
                )
            `);
            console.log("Created semnas_participant table.");
        }
    } catch (e) {
        console.error("Table check error (semnas_participant):", e.message);
    }
})();

module.exports = prisma;

