-- CreateTable
CREATE TABLE "public"."order_item_supplements" (
    "id" SERIAL NOT NULL,
    "order_item_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DECIMAL(65,30) NOT NULL DEFAULT 0.0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_item_supplements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_item_supplements_order_item_id_product_id_key" ON "public"."order_item_supplements"("order_item_id", "product_id");

-- AddForeignKey
ALTER TABLE "public"."order_item_supplements" ADD CONSTRAINT "order_item_supplements_order_item_id_fkey" FOREIGN KEY ("order_item_id") REFERENCES "public"."order_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."order_item_supplements" ADD CONSTRAINT "order_item_supplements_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
