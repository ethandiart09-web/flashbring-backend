-- CreateTable
CREATE TABLE "public"."payment_methods" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "last4" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_default" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."payment_methods" ADD CONSTRAINT "payment_methods_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
