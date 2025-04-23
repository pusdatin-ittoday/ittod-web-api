-- SQL dump generated using DBML (dbml.dbdiagram.io)
-- Database: MySQL
-- Generated at: 2025-04-23T16:12:22.393Z

CREATE TABLE `user` (
  `id` uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  `email` text UNIQUE NOT NULL,
  `full_name` text,
  `birth_date` date,
  `education` ENUM ('SMA', 'D3', 'S1', 'S2', 'S3', 'Lainnya'),
  `entry_source` text,
  `instance` text,
  `phone_number` text,
  `id_line` text,
  `id_discord` text,
  `id_instagram` text,
  `consent` boolean NOT NULL DEFAULT false,
  `is_registration_complete` boolean NOT NULL DEFAULT false,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp DEFAULT (now())
);

CREATE TABLE `user_identity` (
  `id` uuid PRIMARY KEY DEFAULT (gen_random_uuid()),
  `user_id` uuid NOT NULL,
  `email` text NOT NULL,
  `provider` ENUM ('email', 'google', 'github') NOT NULL,
  `hash` text NOT NULL,
  `is_verified` boolean NOT NULL DEFAULT false,
  `verification_token` text,
  `verification_token_expiration` timestamp,
  `password_recovery_token` text,
  `password_recovery_token_expiration` timestamp,
  `refresh_token` text,
  `role` ENUM ('user', 'admin', 'superadmin') NOT NULL DEFAULT 'user',
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp DEFAULT (now())
);

ALTER TABLE `user_identity` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
