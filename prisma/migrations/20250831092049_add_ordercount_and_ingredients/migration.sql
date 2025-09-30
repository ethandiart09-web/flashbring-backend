/*
  Warnings:

  - You are about to alter the column `image_url` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.

*/
-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "ingredients" TEXT,
ADD COLUMN     "order_count" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "image_url" SET DATA TYPE VARCHAR(500);
