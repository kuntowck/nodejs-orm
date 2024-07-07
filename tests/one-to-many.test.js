/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can insert with include one to many", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "kunto01",
        title: "insert title comment",
        description: "insert description commenst",
      },
      include: {
        customer: true,
      },
    });

    console.log(comment);
  });
});
