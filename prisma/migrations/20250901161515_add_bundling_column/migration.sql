/*
  Warnings:

  - You are about to drop the column `media_id` on the `competition_submission` table. All the data in the column will be lost.
  - The values [s1,d3,d4] on the enum `user_pendidikan` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[name]` on the table `media` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `competition_submission` DROP FOREIGN KEY `competition_submission_media_id_fkey`;

-- DropIndex
DROP INDEX `competition_submission_media_id_key` ON `competition_submission`;

-- AlterTable
ALTER TABLE `competition_submission` DROP COLUMN `media_id`,
    ADD COLUMN `submission_object` JSON NULL;

-- AlterTable
ALTER TABLE `event_participant` ADD COLUMN `bundling` ENUM('day1', 'day2', 'day1_day2') NULL,
    ADD COLUMN `paid_for_user` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `pendidikan` ENUM('sma', 'mahasiswa', 'lainnya') NULL;

-- CreateIndex
CREATE UNIQUE INDEX `media_name_key` ON `media`(`name`);
