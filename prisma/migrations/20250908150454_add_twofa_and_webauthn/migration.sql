/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[google_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `role` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('client', 'driver', 'store', 'admin', 'pending_store', 'pending_driver');

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "google_id" TEXT,
ADD COLUMN     "phone" VARCHAR(255),
ADD COLUMN     "twofa_enabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "twofa_method" TEXT,
ADD COLUMN     "twofa_secret" TEXT,
ADD COLUMN     "twofa_temp_code" TEXT,
ADD COLUMN     "webauthn_credentials" JSONB NOT NULL DEFAULT '[]',
DROP COLUMN "role",
ADD COLUMN     "role" "public"."Role" NOT NULL;

-- CreateTable
CREATE TABLE "public"."favorites" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "store_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "favorites_user_id_store_id_key" ON "public"."favorites"("user_id", "store_id");

-- CreateIndex
CREATE INDEX "idx_orders_user_id" ON "public"."orders"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "public"."users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_google_id_key" ON "public"."users"("google_id");

-- AddForeignKey
ALTER TABLE "public"."favorites" ADD CONSTRAINT "favorites_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."favorites" ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
