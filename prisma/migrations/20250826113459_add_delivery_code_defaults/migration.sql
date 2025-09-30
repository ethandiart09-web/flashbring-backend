
-- Corrige les données existantes
UPDATE deliveries SET delivery_code = '0000' WHERE delivery_code IS NULL;
UPDATE users SET delivery_code = '0000' WHERE delivery_code IS NULL;


/*
  Warnings:

  - Made the column `delivery_code` on table `deliveries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `delivery_code` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."deliveries" ALTER COLUMN "status" SET DEFAULT 'pending',
ALTER COLUMN "delivery_code" SET NOT NULL,
ALTER COLUMN "delivery_code" SET DEFAULT '0000';

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "delivery_code" SET NOT NULL,
ALTER COLUMN "delivery_code" SET DEFAULT '0000',
ALTER COLUMN "delivery_code" SET DATA TYPE TEXT;
