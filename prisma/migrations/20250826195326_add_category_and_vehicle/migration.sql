-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'food';

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "vehicle" TEXT;
