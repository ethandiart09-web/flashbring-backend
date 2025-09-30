-- AlterTable
ALTER TABLE "public"."deliveries" ADD COLUMN     "delivery_option" TEXT,
ADD COLUMN     "instructions" TEXT;

-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "delivery_option" TEXT,
ADD COLUMN     "instructions" TEXT;
