-- Safe idempotent migration script for team table columns

-- 1. Add is_name_changed if not exists
SET @dbname = DATABASE();
SET @tablename = "team";

SET @columnname = "is_name_changed";
SET @preparedStatement = (SELECT IF(
  (
    SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS
    WHERE
      TABLE_SCHEMA = @dbname
      AND TABLE_NAME = @tablename
      AND COLUMN_NAME = @columnname
  ) > 0,
  "SELECT 'Column is_name_changed already exists';",
  "ALTER TABLE `team` ADD COLUMN `is_name_changed` BOOLEAN NOT NULL DEFAULT false;"
));
PREPARE stmt FROM @preparedStatement;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- 2. Add previous_team_name if not exists
SET @columnname = "previous_team_name";
SET @preparedStatement = (SELECT IF(
  (
    SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS
    WHERE
      TABLE_SCHEMA = @dbname
      AND TABLE_NAME = @tablename
      AND COLUMN_NAME = @columnname
  ) > 0,
  "SELECT 'Column previous_team_name already exists';",
  "ALTER TABLE `team` ADD COLUMN `previous_team_name` TEXT NULL;"
));
PREPARE stmt FROM @preparedStatement;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- 3. Add name_changed_at if not exists
SET @columnname = "name_changed_at";
SET @preparedStatement = (SELECT IF(
  (
    SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS
    WHERE
      TABLE_SCHEMA = @dbname
      AND TABLE_NAME = @tablename
      AND COLUMN_NAME = @columnname
  ) > 0,
  "SELECT 'Column name_changed_at already exists';",
  "ALTER TABLE `team` ADD COLUMN `name_changed_at` DATETIME(3) NULL;"
));
PREPARE stmt FROM @preparedStatement;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
