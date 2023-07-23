import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password, birthDate } = req.body;
  const user = await client.user.findUnique({
    where: { email },
  });
  if (user) {
    res.status(201).send("have account");
  } else {
    const token = await client.token.create({
      data: {
        user: {
          connectOrCreate: {
            where: { email },
            create: {
              name,
              password,
              birthDate,
              email,
            },
          },
        },
      },
    });
    console.log(token);

    return res.status(200).end();
  }
}

export default withHandler("POST", handler);
