-- Idempotent migration script for user_feedback table

CREATE TABLE IF NOT EXISTS `user_feedback` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `media_urls` JSON NULL,
    `status` VARCHAR(50) NOT NULL DEFAULT 'pending',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`),
    INDEX `user_feedback_user_id_foreign`(`user_id`),
    CONSTRAINT `user_feedback_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
