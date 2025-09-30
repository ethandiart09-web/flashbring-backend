-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "payment_intent_id" TEXT,
ALTER COLUMN "status" SET DEFAULT 'pending';
