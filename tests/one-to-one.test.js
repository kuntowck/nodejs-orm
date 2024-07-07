/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "kunto01",
        customer_id: "kunto01",
        balance: 100000000,
      },
      include: {
        customer: true,
      },
    });

    console.log(wallet);
  });
});
