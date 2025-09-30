-- AlterTable
ALTER TABLE "public"."admin_earnings" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "public"."cart_items" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "public"."driver_earnings" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "public"."payment_methods" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "public"."store_earnings" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "public"."user_logs" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(3);
