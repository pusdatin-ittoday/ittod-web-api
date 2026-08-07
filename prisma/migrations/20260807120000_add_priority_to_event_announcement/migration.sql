-- Safe idempotent migration script for adding priority to event_announcement

SET @dbname = DATABASE();
SET @tablename = "event_announcement";
SET @columnname = "priority";

SET @preparedStatement = (SELECT IF(
  (
    SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS
    WHERE
      TABLE_SCHEMA = @dbname
      AND TABLE_NAME = @tablename
      AND COLUMN_NAME = @columnname
  ) > 0,
  "SELECT 'Column priority already exists in event_announcement';",
  "ALTER TABLE `event_announcement` ADD COLUMN `priority` INTEGER NOT NULL DEFAULT 0;"
));
PREPARE stmt FROM @preparedStatement;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
