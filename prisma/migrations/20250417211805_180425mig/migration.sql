/*
  Warnings:

  - You are about to drop the `users.mjs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "bootcamp" (
    "id_bootcamp" VARCHAR(50) NOT NULL,
    "pertemuan2_date" DATE,
    "pertemuan3_date" DATE,
    "pertemuan4_date" DATE,
    "pertemuan5_date" DATE,
    "event_bootcamp" VARCHAR(50),

    CONSTRAINT "bootcamp_pkey" PRIMARY KEY ("id_bootcamp")
);

-- CreateTable
CREATE TABLE "competition" (
    "id_competition" VARCHAR(50) NOT NULL,
    "title" VARCHAR(50),
    "description" TEXT,
    "registration_start" DATE,
    "registration_end" DATE,
    "submission_deadline" TIMESTAMP(6),
    "guideline_url" VARCHAR(255),
    "contact_person" VARCHAR(50),
    "status" BOOLEAN DEFAULT true,
    "prize_details" JSON,

    CONSTRAINT "competition_pkey" PRIMARY KEY ("id_competition")
);

-- CreateTable
CREATE TABLE "dokum_tahun_lalu" (
    "id_foto" SERIAL NOT NULL,
    "foto_url" TEXT,

    CONSTRAINT "dokum_tahun_lalu_pkey" PRIMARY KEY ("id_foto")
);

-- CreateTable
CREATE TABLE "event" (
    "id_event" VARCHAR(50) NOT NULL,
    "title" VARCHAR(50),
    "description" TEXT,
    "category" VARCHAR(20),
    "regis_date" DATE,
    "pelaksanaan1_date" DATE,
    "available_slot" INTEGER,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id_event")
);

-- CreateTable
CREATE TABLE "event_participant" (
    "id_participant" VARCHAR(50) NOT NULL,
    "event_registered" VARCHAR(50),
    "participant" VARCHAR(50),
    "registered_at" TIMESTAMP(6),

    CONSTRAINT "event_participant_pkey" PRIMARY KEY ("id_participant")
);

-- CreateTable
CREATE TABLE "payment" (
    "id_payment" VARCHAR(50) NOT NULL,
    "payment_team" VARCHAR(50),
    "payment_competition" VARCHAR(50),
    "payment_status" SMALLINT,
    "payment_proof_url" VARCHAR(255),
    "submitted_at" TIMESTAMP(6),
    "verified_by" VARCHAR(50),

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id_payment")
);

-- CreateTable
CREATE TABLE "team" (
    "id_team" VARCHAR(50) NOT NULL,
    "nama_tim" VARCHAR(50),
    "competition_team" VARCHAR(50),
    "anggota" VARCHAR(50),
    "created_by" VARCHAR(50),

    CONSTRAINT "team_pkey" PRIMARY KEY ("id_team")
);

-- CreateTable
CREATE TABLE "user" (
    "id_user" VARCHAR(50) NOT NULL,
    "nama" VARCHAR(100),
    "email" VARCHAR(100),
    "password_hash" TEXT,
    "role" VARCHAR(20),
    "is_verified" BOOLEAN DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- AddForeignKey
ALTER TABLE "bootcamp" ADD CONSTRAINT "bootcamp_event_bootcamp_fkey" FOREIGN KEY ("event_bootcamp") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "event_participant" ADD CONSTRAINT "event_participant_event_registered_fkey" FOREIGN KEY ("event_registered") REFERENCES "event"("id_event") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "event_participant" ADD CONSTRAINT "event_participant_participant_fkey" FOREIGN KEY ("participant") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_payment_competition_fkey" FOREIGN KEY ("payment_competition") REFERENCES "competition"("id_competition") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_payment_team_fkey" FOREIGN KEY ("payment_team") REFERENCES "team"("id_team") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_verified_by_fkey" FOREIGN KEY ("verified_by") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_anggota_fkey" FOREIGN KEY ("anggota") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_competition_team_fkey" FOREIGN KEY ("competition_team") REFERENCES "competition"("id_competition") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
