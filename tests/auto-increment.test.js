/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can auto increment primary key", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "drink",
      },
    });

    console.log(category);
    expect(category).toHaveProperty("id");
  });
});
