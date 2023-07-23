import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tweets = await client.tweet.findMany({ include: { user: true } });

  const formattedTweets = tweets.map((tweet) => ({
    url: tweet.user.avatar,
    name: tweet.user.name,
    date: tweet.createdAt.toISOString(),
    content: tweet.content,
    like: tweet.like,
    id: tweet.id,
  }));
  res.json(formattedTweets);
}

export default withHandler("GET", handler);
