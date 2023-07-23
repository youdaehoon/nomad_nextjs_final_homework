import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "sjssmsqkqh1@gmail.com",
      birthDate: "2012-09-23",
      name: "유대훈",
      password: "1234",
    },
  });
  res.json({
    ok: true,
    data: "xx",
  });
}
