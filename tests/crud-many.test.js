import { prismaClient } from "../src/prisma-client";

/* eslint-disable no-undef */
describe("prisma client", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "reyhan05",
          name: "reyhan siddiq",
          email: "reyhansiddiq@gmail.com",
          phone: "08912416931",
        },
        {
          id: "faiz06",
          name: "faiz mecca",
          email: "faizmecca@gmail.com",
          phone: "087612193112",
        },
      ],
    });

    expect(count).toBe(2);
  });
});
