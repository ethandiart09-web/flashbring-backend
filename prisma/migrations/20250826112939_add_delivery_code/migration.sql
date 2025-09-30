/*
  Warnings:

  - Made the column `order_id` on table `deliveries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `deliveries` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `deliveries` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."deliveries" DROP CONSTRAINT "deliveries_order_id_fkey";

-- AlterTable
ALTER TABLE "public"."deliveries" ADD COLUMN     "delivery_code" TEXT,
ALTER COLUMN "order_id" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'waiting',
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "deliveries_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
