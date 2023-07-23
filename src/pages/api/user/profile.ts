import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user) return res.status(404);
  const Profile = await client.user.findUnique({
    where: { id: req.session.user.id },
  });

  res.status(200).send({ ok: true, Profile });

  // const user = await client.user.findUnique({
  //   where: { email },
  // });
}

export default withApiSession(withHandler("GET", handler));
