import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tweetId } = req.body;
  if (!req.session.user?.id) return res.status(404).end();
  const tweet = await client.tweet.update({
    where: { id: tweetId },
    data: {
      like: { increment: 1 },
    },
  });

  res.status(200).end();
}

export default withApiSession(withHandler("POST", handler));
