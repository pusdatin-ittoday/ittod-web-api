-- AlterTable
ALTER TABLE `event_participant` ADD COLUMN `payment_proof` VARCHAR(191) NULL,
    ADD COLUMN `payment_verification` ENUM('pending', 'accepted', 'rejected') NOT NULL DEFAULT 'pending';
