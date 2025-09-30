/*
  Warnings:

  - You are about to drop the column `phone` on the `stores` table. All the data in the column will be lost.
  - Made the column `order_id` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `order_items` required. This step will fail if there are existing NULL values in that column.
  - Made the column `store_id` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stock` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `stores` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."order_items" DROP CONSTRAINT "order_items_order_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."order_items" DROP CONSTRAINT "order_items_product_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."products" DROP CONSTRAINT "products_store_id_fkey";

-- AlterTable
ALTER TABLE "public"."order_items" ALTER COLUMN "order_id" SET NOT NULL,
ALTER COLUMN "product_id" SET NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "store_id" SET NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "stock" SET NOT NULL,
ALTER COLUMN "stock" DROP DEFAULT,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."stores" DROP COLUMN "phone",
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
