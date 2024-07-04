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
});
