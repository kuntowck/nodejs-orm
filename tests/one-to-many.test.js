/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can insert with include one to many", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "kunto01",
        title: "insert title comment",
        description: "insert description commenst",
      },
      include: {
        customer: true,
      },
    });

    console.log(comment);
  });

  it("should can insert with many relation one to many", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "kunto02",
        name: "kunto",
        email: "kuntowicaksono2@gmail.com",
        phone: "0817676621123",
        comments: {
          createMany: {
            data: [
              {
                title: "comment 1",
                description: "description comment 1",
              },
              {
                title: "comment 2",
                description: "description comment 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.log(customer);
  });

  it("should can find many with relaton filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "komen",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.log(customer);
  });
});
