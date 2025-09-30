-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "max_dessert" INTEGER DEFAULT 0,
ADD COLUMN     "max_drink" INTEGER DEFAULT 0,
ADD COLUMN     "max_food" INTEGER DEFAULT 0;
