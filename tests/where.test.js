/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can using or operator", async () => {
    const datas = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: "B",
          },
          {
            name: "C",
          },
        ],
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
    });

    console.log(datas);

    expect(datas.length).toBe(4);
  });
});
