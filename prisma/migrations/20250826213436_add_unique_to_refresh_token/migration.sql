/*
  Warnings:

  - You are about to drop the column `created_at` on the `refresh_tokens` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."refresh_tokens" DROP COLUMN "created_at";
