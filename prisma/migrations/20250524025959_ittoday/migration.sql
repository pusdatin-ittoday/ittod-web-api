-- CreateTable
CREATE TABLE `event` (
    `id` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `guide_book_url` TEXT NOT NULL,
    `type` ENUM('competition', 'non_competition') NOT NULL,
    `contact_person1` VARCHAR(191) NOT NULL,
    `contact_person2` VARCHAR(191) NULL,
    `max_noncompetition_participant` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_announcement` (
    `id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `author_id` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `competition_submission` (
    `team_id` VARCHAR(191) NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `media_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `competition_submission_media_id_key`(`media_id`),
    PRIMARY KEY (`team_id`, `competition_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_timeline` (
    `id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media` (
    `id` VARCHAR(191) NOT NULL,
    `uploader_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `grouping` ENUM('payments', 'dokum_tahun_lalu', 'competition_submission', 'twibbon') NULL,
    `type` ENUM('image', 'pdf') NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `media_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team` (
    `id` VARCHAR(191) NOT NULL,
    `competition_id` VARCHAR(191) NOT NULL,
    `team_name` TEXT NOT NULL,
    `team_code` VARCHAR(191) NOT NULL,
    `max_member` INTEGER NOT NULL DEFAULT 3,
    `payment_proof_id` VARCHAR(191) NULL,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,
    `verification_error` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `team_team_code_key`(`team_code`),
    UNIQUE INDEX `team_payment_proof_id_key`(`payment_proof_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_participant` (
    `user_id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `date_added` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`user_id`, `event_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_member` (
    `user_id` VARCHAR(191) NOT NULL,
    `team_id` VARCHAR(191) NOT NULL,
    `role` ENUM('leader', 'member') NOT NULL,
    `kartu_id` VARCHAR(191) NULL,
    `verification_error` TEXT NULL,

    PRIMARY KEY (`user_id`, `team_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NULL,
    `pendidikan` ENUM('sma', 's1', 'd3', 'd4') NULL,
    `nama_sekolah` VARCHAR(191) NULL,
    `entry_source` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `id_line` VARCHAR(191) NULL,
    `id_discord` VARCHAR(191) NULL,
    `id_instagram` VARCHAR(191) NULL,
    `ktm_key` VARCHAR(191) NULL,
    `twibbon_key` VARCHAR(191) NULL,
    `jenis_kelamin` ENUM('laki2', 'perempuan') NULL,
    `is_registration_complete` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_identity` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `provider` ENUM('google', 'basic', 'github') NOT NULL,
    `hash` VARCHAR(191) NULL,
    `is_verified` BOOLEAN NOT NULL DEFAULT false,
    `verification_token` VARCHAR(191) NOT NULL,
    `verification_token_expiration` DATETIME(3) NOT NULL,
    `password_recovery_token` VARCHAR(191) NULL,
    `password_recovery_token_expiration` DATETIME(3) NULL,
    `refresh_token` VARCHAR(191) NULL,
    `role` ENUM('admin', 'user') NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `user_identity_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,
    `data` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event_announcement` ADD CONSTRAINT `event_announcement_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_announcement` ADD CONSTRAINT `event_announcement_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competition_submission` ADD CONSTRAINT `competition_submission_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competition_submission` ADD CONSTRAINT `competition_submission_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `competition_submission` ADD CONSTRAINT `competition_submission_media_id_fkey` FOREIGN KEY (`media_id`) REFERENCES `media`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_timeline` ADD CONSTRAINT `event_timeline_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `media` ADD CONSTRAINT `media_uploader_id_fkey` FOREIGN KEY (`uploader_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team` ADD CONSTRAINT `team_competition_id_fkey` FOREIGN KEY (`competition_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `event_participant` ADD CONSTRAINT `event_participant_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_member` ADD CONSTRAINT `team_member_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `team_member` ADD CONSTRAINT `team_member_team_id_fkey` FOREIGN KEY (`team_id`) REFERENCES `team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_identity` ADD CONSTRAINT `user_identity_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
