/* eslint-disable no-undef */
import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to query select sql", async () => {
    const id = "1";

    const datas =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    // for (const data of datas) {
    //   console.info(`Result sample id: ${data.id} and name: ${data.name}`);
    // }

    datas.map((e) =>
      console.log(`Result sample id: ${e.id} and name: ${e.name}`)
    );
  });
});
