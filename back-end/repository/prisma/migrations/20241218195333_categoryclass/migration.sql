/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_eventId_fkey";

-- DropTable
DROP TABLE "Category";

-- CreateTable
CREATE TABLE "CategoryClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "eventId" INTEGER,

    CONSTRAINT "CategoryClass_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryClass" ADD CONSTRAINT "CategoryClass_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
