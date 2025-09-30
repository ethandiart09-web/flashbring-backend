/*
  Warnings:

  - A unique constraint covering the columns `[store_id,name]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "products_store_id_name_key" ON "public"."products"("store_id", "name");
