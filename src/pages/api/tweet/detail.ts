import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { withApiSession } from "@/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tweetId } = req.body;
  console.log(tweetId);
  const tweet = await client.tweet.findUnique({
    where: { id: +tweetId },
    include: { comment: true, user: true, _count: { select: { favs: true } } },
  });
  const result = {
    url: tweet!.user.avatar,
    name: tweet!.user.name,
    date: tweet!.createdAt.toISOString(),
    content: tweet!.content,
    like: tweet!._count.favs,
    id: tweet!.id,
  };

  res.status(200).send({
    ok: true,
    tweet: result,
  });
}

export default withApiSession(withHandler("POST", handler));
