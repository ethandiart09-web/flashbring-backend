/*
  Warnings:

  - You are about to alter the column `total` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - Made the column `user_id` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `store_id` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."orders" DROP CONSTRAINT "orders_store_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."orders" DROP CONSTRAINT "orders_user_id_fkey";

-- DropIndex
DROP INDEX "public"."stores_name_key";

-- AlterTable
ALTER TABLE "public"."deliveries" ALTER COLUMN "status" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."orders" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "store_id" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" DROP DEFAULT,
ALTER COLUMN "total" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "category" DROP DEFAULT;

-- CreateTable
CREATE TABLE "public"."store_earnings" (
    "id" SERIAL NOT NULL,
    "store_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "store_earnings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."store_earnings" ADD CONSTRAINT "store_earnings_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."store_earnings" ADD CONSTRAINT "store_earnings_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
