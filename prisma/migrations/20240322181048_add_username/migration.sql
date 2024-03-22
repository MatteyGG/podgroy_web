/*
  Warnings:

  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(60)`.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "username" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "password" SET DATA TYPE CHAR(60);
