import { prismaClient } from "../src/prisma-client";

/* eslint-disable no-undef */
describe("prisma client", () => {
  it("should can do paging 1", async () => {
    const page1 = await prismaClient.customer.findMany({
      skip: 0,
      take: 1,
    });

    expect(page1.length).toBe(1);
  });

  it("should can do paging 2", async () => {
    const page2 = await prismaClient.customer.findMany({
      skip: 1,
      take: 1,
    });

    expect(page2.length).toBe(1);
  });

  it("should can do paging 3", async () => {
    const page3 = await prismaClient.customer.findMany({
      skip: 2,
      take: 1,
    });

    expect(page3.length).toBe(1);
  });
});
