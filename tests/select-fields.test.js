import { prismaClient } from "../src/prisma-client";

/* eslint-disable no-undef */
describe("prisma client", () => {
  it("should can create and select fields/colomn", async () => {
    const data = await prismaClient.customer.create({
      data: {
        id: "thufail07",
        name: "thufail wafii",
        email: "thufailwafii@gmail.com",
        phone: "081651231917",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(data.id).toBe("thufail07");
    expect(data.name).toBe("thufail wafii");
    expect(data.email).toBeUndefined();
    expect(data.phone).toBeUndefined();
  });

  it("should select fields/colomn", async () => {
    const datas = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const data of datas) {
      expect(data.id).toBeDefined();
      expect(data.name).toBeDefined();
      expect(data.email).toBeUndefined();
      expect(data.phone).toBeUndefined();
    }
  });
});
