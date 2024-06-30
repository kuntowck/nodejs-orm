/* eslint-disable no-undef */
import { PrismaClient } from "@prisma/client";

describe("Prisma client", () => {
  it("should be able to connet to database", async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    await prisma.$disconnect();
  });
});
