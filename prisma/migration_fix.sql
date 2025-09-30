-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('client', 'driver', 'store', 'admin');

-- AlterTable
ALTER TABLE "public"."admin_earnings" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "public"."deliveries" ADD COLUMN     "delivered_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."driver_earnings" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "total" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "public"."store_earnings" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "phone" TEXT,
ALTER COLUMN "password_hash" SET DATA TYPE VARCHAR(255),
DROP COLUMN "role",
ADD COLUMN     "role" "public"."Role" NOT NULL;

-- CreateIndex
CREATE INDEX "cart_items_user_id_idx" ON "public"."cart_items"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "cart_items_user_id_product_id_key" ON "public"."cart_items"("user_id", "product_id");

-- CreateIndex
CREATE INDEX "orders_user_id_idx" ON "public"."orders"("user_id");

-- CreateIndex
CREATE INDEX "orders_store_id_idx" ON "public"."orders"("store_id");

-- CreateIndex
CREATE INDEX "products_store_id_idx" ON "public"."products"("store_id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_user_id_key" ON "public"."stores"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "public"."users"("phone");

-- AddForeignKey
ALTER TABLE "public"."driver_earnings" ADD CONSTRAINT "driver_earnings_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."driver_earnings" ADD CONSTRAINT "driver_earnings_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."admin_earnings" ADD CONSTRAINT "admin_earnings_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

