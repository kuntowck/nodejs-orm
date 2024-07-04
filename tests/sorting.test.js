import { prismaClient } from "../src/prisma-client";

/* eslint-disable no-undef */
describe("prisma client", () => {
  it("should can do sorting", async () => {
    const datas = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [{ name: "desc" }, { email: "asc" }],
    });

    console.log(datas);
  });
});
