-- CreateTable
CREATE TABLE "public"."driver_earnings" (
    "id" SERIAL NOT NULL,
    "driver_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "driver_earnings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."admin_earnings" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_earnings_pkey" PRIMARY KEY ("id")
);
