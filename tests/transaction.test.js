/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can execute sequential transaction", async () => {
    const [data1, data2] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "kunto01",
          name: "kunto wicaksono",
          email: "kuntowck@gmail.com",
          phone: "081291347119",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "fatur04",
          name: "faturrahman",
          email: "faturrahman@gmail.com",
          phone: "08120988614972",
        },
      }),
    ]);

    expect(data1.name).toBe("kunto wicaksono");
    expect(data2.name).toBe("faturrahman");
  });

  it("should can execute interactive transaction", async () => {
    const [data1, data2] = await prismaClient.$transaction(async (prisma) => {
      const data1 = await prisma.customer.create({
        data: {
          id: "kunto001",
          name: "kunto wicaksono",
          email: "kuntow@gmail.com",
          phone: "0812913471190",
        },
      });
      const data2 = await prisma.customer.create({
        data: {
          id: "fatur004",
          name: "faturrahman",
          email: "faturrhmn@gmail.com",
          phone: "0812098861497",
        },
      });

      return [data1, data2];
    });

    expect(data1.name).toBe("kunto wicaksono");
    expect(data2.name).toBe("faturrahman");
  });
});
