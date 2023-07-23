import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tweetId } = req.body;
  if (!req.session.user?.id) return res.status(404).end();
  const alreadyExists = await client.fav.findFirst({
    where: {
      tweettId: +tweetId.toString(),
      userId: req.session.user.id,
    },
  });

  if (alreadyExists) {
    await client.fav.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.fav.create({
      data: {
        user: {
          connect: {
            id: req.session.user.id,
          },
        },
        tweet: {
          connect: {
            id: +tweetId.toString(),
          },
        },
      },
    });
  }
  res.json({ ok: true });
}

export default withApiSession(withHandler("POST", handler));
