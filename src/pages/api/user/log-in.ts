import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const auth = await client.user.findUnique({
    where: { email, password },
  });
  if (!auth) return res.status(404).end();
  req.session.user = {
    id: auth.id,
  };
  await req.session.save();
  res.status(200).end();

  // const user = await client.user.findUnique({
  //   where: { email },
  // });
}

export default withApiSession(withHandler("POST", handler));
