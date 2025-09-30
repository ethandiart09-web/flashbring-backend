-- DropForeignKey
ALTER TABLE "public"."deliveries" DROP CONSTRAINT "deliveries_driver_id_fkey";

-- AddForeignKey
ALTER TABLE "public"."deliveries" ADD CONSTRAINT "deliveries_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
