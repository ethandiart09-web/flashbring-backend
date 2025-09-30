/*
  Warnings:

  - You are about to drop the column `supplements` on the `cart_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."cart_items" DROP COLUMN "supplements";

-- CreateTable
CREATE TABLE "public"."cart_supplements" (
    "id" SERIAL NOT NULL,
    "cart_item_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cart_supplements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cart_supplements_cart_item_id_product_id_key" ON "public"."cart_supplements"("cart_item_id", "product_id");

-- AddForeignKey
ALTER TABLE "public"."cart_supplements" ADD CONSTRAINT "cart_supplements_cart_item_id_fkey" FOREIGN KEY ("cart_item_id") REFERENCES "public"."cart_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cart_supplements" ADD CONSTRAINT "cart_supplements_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
