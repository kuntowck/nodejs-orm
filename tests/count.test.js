import { prismaClient } from "../src/prisma-client";

/* eslint-disable no-undef */
describe("prisma client", () => {
  it("should can count", async () => {
    // count menghitung total records
    const total = await prismaClient.customer.count({
      where: {
        name: "kunto wicaksono",
      },
    });

    expect(total).toBe(1);
  });
});
