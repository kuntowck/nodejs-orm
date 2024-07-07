/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can insert many to many relation", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "kunto02",
        product_id: "2",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.log(like);
  });

  it("should can find one with many to many relation ", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "kunto02",
      },
      include: {
        likes: true,
      },
    });

    console.log(customer);
  });

  it("should can find many with many to many relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: true,
      },
    });

    console.log(customer);
  });

  it("should create implicit many to many relation", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "kunto01",
      },
      data: {
        loves: {
          connect: [{ id: "1" }, { id: "2" }],
        },
      },
      include: {
        loves: true,
      },
    });

    console.log(customer);
  });
});
