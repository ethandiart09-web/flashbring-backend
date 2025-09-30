-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "last_login" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "public"."user_logs" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."user_logs" ADD CONSTRAINT "user_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
