/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  // it("should be able to create data customer", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "kuntowck",
  //       email: "kuntowck@gmail.com",
  //       name: "kunto wicaksono",
  //       phone: "085156655677",
  //     },
  //   });

  //   expect(customer.id).toBe("kuntowck");
  //   expect(customer.email).toBe("kuntowck@gmail.com");
  //   expect(customer.name).toBe("kunto wicaksono");
  //   expect(customer.phone).toBe("085156655677");
  // });

  // it("should be able to update data customer", async () => {
  //   const customer = await prismaClient.customer.update({
  //     data: {
  //       id: "kunto01",
  //     },
  //     where: {
  //       id: "kuntowck",
  //     },
  //   });

  //   expect(customer.id).toBe("kunto01");
  //   expect(customer.email).toBe("kuntowck@gmail.com");
  //   expect(customer.name).toBe("kunto wicaksono");
  //   expect(customer.phone).toBe("085156655677");
  // });

  // it("should be able to read data customer", async () => {
  //   const customer = await prismaClient.customer.findUnique({
  //     where: {
  //       email: "kuntowck@gmail.com"
  //     }
  //   });

  //   expect(customer.id).toBe("kunto01");
  //   expect(customer.email).toBe("kuntowck@gmail.com");
  //   expect(customer.name).toBe("kunto wicaksono");
  //   expect(customer.phone).toBe("085156655677");
  // });

  it("should be able to read data customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        email: "kuntowck@gmail.com"
      }
    });

    expect(customer.id).toBe("kunto01");
    expect(customer.email).toBe("kuntowck@gmail.com");
    expect(customer.name).toBe("kunto wicaksono");
    expect(customer.phone).toBe("085156655677");
  });
});
