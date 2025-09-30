/*
  Warnings:

  - Added the required column `user_id` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."stores" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."stores" ADD CONSTRAINT "stores_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
