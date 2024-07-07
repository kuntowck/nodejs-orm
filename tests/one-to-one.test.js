/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "sri03",
        customer_id: "sri03",
        balance: 500000,
      },
      include: {
        customer: true,
      },
    });

    console.log(wallet);
  });

  it("should can create one to one relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "tito09",
        name: "handitanto",
        email: "handitanto@gmail.com",
        phone: "081912181211",
        wallet: {
          create:
            {
              id: 'tito09',
              balance: 1000000,
            },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.log(customer);
  });
});
