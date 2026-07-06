/*
  Warnings:

  - You are about to drop the column `bundling` on the `event_participant` table. All the data in the column will be lost.
  - You are about to drop the column `paid_for_user` on the `event_participant` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `expires` on the `sessions` table. All the data in the column will be lost.
  - You are about to alter the column `is_verified` on the `team` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(8))`.
  - The values [mahasiswa,lainnya] on the enum `user_pendidikan` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `last_activity` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payload` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Made the column `role` on table `user_identity` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `competition_submission` DROP FOREIGN KEY `competition_submission_competition_id_fkey`;

-- DropForeignKey
ALTER TABLE `competition_submission` DROP FOREIGN KEY `competition_submission_team_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_announcement` DROP FOREIGN KEY `event_announcement_author_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_announcement` DROP FOREIGN KEY `event_announcement_event_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_participant` DROP FOREIGN KEY `event_participant_event_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_participant` DROP FOREIGN KEY `event_participant_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_timeline` DROP FOREIGN KEY `event_timeline_event_id_fkey`;

-- DropForeignKey
ALTER TABLE `media` DROP FOREIGN KEY `media_uploader_id_fkey`;

-- DropForeignKey
ALTER TABLE `team` DROP FOREIGN KEY `team_competition_id_fkey`;

-- DropForeignKey
ALTER TABLE `team_member` DROP FOREIGN KEY `team_member_team_id_fkey`;

-- DropForeignKey
ALTER TABLE `team_member` DROP FOREIGN KEY `team_member_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_identity` DROP FOREIGN KEY `user_identity_id_fkey`;

-- DropIndex
DROP INDEX `team_payment_proof_id_key` ON `team`;

-- AlterTable
ALTER TABLE `event` ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `logo_url` VARCHAR(255) NULL,
    ADD COLUMN `method` VARCHAR(255) NOT NULL DEFAULT 'offline',
    ADD COLUMN `participation_type` VARCHAR(255) NOT NULL DEFAULT 'team',
    ADD COLUMN `price` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `requires_submission` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `whatsapp_group_link` VARCHAR(255) NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `guide_book_url` TEXT NULL,
    MODIFY `contact_person1` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `event_announcement` MODIFY `event_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `event_participant` DROP COLUMN `bundling`,
    DROP COLUMN `paid_for_user`;

-- AlterTable
ALTER TABLE `sessions` DROP COLUMN `data`,
    DROP COLUMN `expires`,
    ADD COLUMN `ip_address` VARCHAR(45) NULL,
    ADD COLUMN `last_activity` INTEGER NOT NULL,
    ADD COLUMN `payload` LONGTEXT NOT NULL,
    ADD COLUMN `user_agent` TEXT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `team` ADD COLUMN `is_document_verified` ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
    MODIFY `is_verified` ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE `team_member` ADD COLUMN `is_verified` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` MODIFY `pendidikan` ENUM('sma', 's1', 'd3', 'd4') NULL,
    MODIFY `is_registration_complete` TINYINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `user_identity` ADD COLUMN `remember_token` VARCHAR(100) NULL,
    MODIFY `provider` ENUM('google', 'basic', 'github') NOT NULL DEFAULT 'basic',
    MODIFY `is_verified` TINYINT NOT NULL DEFAULT 0,
    MODIFY `verification_token` VARCHAR(191) NULL,
    MODIFY `verification_token_expiration` DATETIME(3) NULL,
    MODIFY `role` ENUM('superadmin', 'admin_keuangan', 'panitia', 'user') NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE `password_reset_tokens` (
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_staff` (
    `event_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    INDEX `event_staff_user_id_foreign`(`user_id`),
    PRIMARY KEY (`event_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cache` (
    `key` VARCHAR(255) NOT NULL,
    `value` MEDIUMTEXT NOT NULL,
    `expiration` INTEGER NOT NULL,

    INDEX `cache_expiration_index`(`expiration`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cache_locks` (
    `key` VARCHAR(255) NOT NULL,
    `owner` VARCHAR(255) NOT NULL,
    `expiration` INTEGER NOT NULL,

    INDEX `cache_locks_expiration_index`(`expiration`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `failed_jobs` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(255) NOT NULL,
    `connection` TEXT NOT NULL,
    `queue` TEXT NOT NULL,
    `payload` LONGTEXT NOT NULL,
    `exception` LONGTEXT NOT NULL,
    `failed_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `job_batches` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `total_jobs` INTEGER NOT NULL,
    `pending_jobs` INTEGER NOT NULL,
    `failed_jobs` INTEGER NOT NULL,
    `failed_job_ids` LONGTEXT NOT NULL,
    `options` MEDIUMTEXT NULL,
    `cancelled_at` INTEGER NULL,
    `created_at` INTEGER NOT NULL,
    `finished_at` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jobs` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `queue` VARCHAR(255) NOT NULL,
    `payload` LONGTEXT NOT NULL,
    `attempts` TINYINT UNSIGNED NOT NULL,
    `reserved_at` INTEGER UNSIGNED NULL,
    `available_at` INTEGER UNSIGNED NOT NULL,
    `created_at` INTEGER UNSIGNED NOT NULL,

    INDEX `jobs_queue_index`(`queue`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `sessions_last_activity_index` ON `sessions`(`last_activity`);

-- CreateIndex
CREATE INDEX `sessions_user_id_index` ON `sessions`(`user_id`);

-- CreateIndex
CREATE INDEX `team_payment_proof_id_foreign` ON `team`(`payment_proof_id`);

-- CreateIndex
CREATE INDEX `team_member_kartu_id_foreign` ON `team_member`(`kartu_id`);

-- AddForeignKey
ALTER TABLE `user_identity` ADD CONSTRAINT `user_identity_id_foreign` FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `media` ADD CONSTRAINT `media_uploader_id_foreign` FOREIGN KEY (`uploader_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team` ADD CONSTRAINT `team_competition_id_foreign` FOREIGN KEY (`competition_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team` ADD CONSTRAINT `team_payment_proof_id_foreign` FOREIGN KEY (`payment_proof_id`) REFERENCES `media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_member` ADD CONSTRAINT `team_member_kartu_id_foreign` FOREIGN KEY (`kartu_id`) REFERENCES `media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_member` ADD CONSTRAINT `team_member_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_member` ADD CONSTRAINT `team_member_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_timeline` ADD CONSTRAINT `event_timeline_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_announcement` ADD CONSTRAINT `event_announcement_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_announcement` ADD CONSTRAINT `event_announcement_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competition_submission` ADD CONSTRAINT `competition_submission_competition_id_foreign` FOREIGN KEY (`competition_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competition_submission` ADD CONSTRAINT `competition_submission_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_staff` ADD CONSTRAINT `event_staff_event_id_foreign` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_staff` ADD CONSTRAINT `event_staff_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user_identity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `competition_submission_competition_id_foreign` ON `competition_submission`(`competition_id`);
DROP INDEX `competition_submission_competition_id_fkey` ON `competition_submission`;

-- RedefineIndex
CREATE INDEX `event_announcement_author_id_foreign` ON `event_announcement`(`author_id`);
DROP INDEX `event_announcement_author_id_fkey` ON `event_announcement`;

-- RedefineIndex
CREATE INDEX `event_announcement_event_id_foreign` ON `event_announcement`(`event_id`);
DROP INDEX `event_announcement_event_id_fkey` ON `event_announcement`;

-- RedefineIndex
CREATE INDEX `event_participant_event_id_foreign` ON `event_participant`(`event_id`);
DROP INDEX `event_participant_event_id_fkey` ON `event_participant`;

-- RedefineIndex
CREATE INDEX `event_timeline_event_id_foreign` ON `event_timeline`(`event_id`);
DROP INDEX `event_timeline_event_id_fkey` ON `event_timeline`;

-- RedefineIndex
CREATE UNIQUE INDEX `media_name_unique` ON `media`(`name`);
DROP INDEX `media_name_key` ON `media`;

-- RedefineIndex
CREATE INDEX `media_uploader_id_foreign` ON `media`(`uploader_id`);
DROP INDEX `media_uploader_id_fkey` ON `media`;

-- RedefineIndex
CREATE INDEX `team_competition_id_foreign` ON `team`(`competition_id`);
DROP INDEX `team_competition_id_fkey` ON `team`;

-- RedefineIndex
CREATE UNIQUE INDEX `team_team_code_unique` ON `team`(`team_code`);
DROP INDEX `team_team_code_key` ON `team`;

-- RedefineIndex
CREATE INDEX `team_member_team_id_foreign` ON `team_member`(`team_id`);
DROP INDEX `team_member_team_id_fkey` ON `team_member`;

-- RedefineIndex
CREATE UNIQUE INDEX `user_email_unique` ON `user`(`email`);
DROP INDEX `user_email_key` ON `user`;

-- RedefineIndex
CREATE UNIQUE INDEX `user_identity_email_unique` ON `user_identity`(`email`);
DROP INDEX `user_identity_email_key` ON `user_identity`;
