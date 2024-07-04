import { prismaClient } from "../src/prisma-client";

/* eslint-disable no-undef */
describe("prisma client", () => {
  // it("should can create many records", async () => {
  //   const { count } = await prismaClient.customer.createMany({
  //     data: [
  //       {
  //         id: "reyhan05",
  //         name: "reyhan siddiq",
  //         email: "reyhansiddiq@gmail.com",
  //         phone: "08912416931",
  //       },
  //       {
  //         id: "faiz06",
  //         name: "faiz mecca",
  //         email: "faizmecca@gmail.com",
  //         phone: "087612193112",
  //       },
  //     ],
  //   });

  //   expect(count).toBe(2);
  // });

  // it("should can update many records", async () => {
  //   // updateMany != update
  //   // update: records yang primary atau unique
  //   // updateMany: semua records
  //   const { count } = await prismaClient.customer.updateMany({
  //     data: {
  //       email: "kuntowicaksono@gmail.com",
  //     },
  //     where: {
  //       name: "kunto wicaksono",
  //     },
  //   });

  //   expect(count).toBe(1);
  // });

  it("should can delete many records", async () => {
    // deleteMany != delete
    // delete: records yang primary atau unique
    // deleteMany: semua records
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "none",
      },
    });

    expect(count).toBe(0);
  });
});
