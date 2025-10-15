/*
  Warnings:

  - The `vacunaId` column on the `NotificacionRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `updatedBy` column on the `NotificacionRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `createdBy` on the `NotificacionRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "NotificacionRecord" DROP COLUMN "vacunaId",
ADD COLUMN     "vacunaId" INTEGER,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER NOT NULL,
DROP COLUMN "updatedBy",
ADD COLUMN     "updatedBy" INTEGER;
