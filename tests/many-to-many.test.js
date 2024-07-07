/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can insert many to many relation", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "kunto02",
        product_id: "2",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.log(like);
  });
});
