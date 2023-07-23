import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.session.user?.id) return res.status(404).end();
  res.status(200).end();
}

export default withApiSession(withHandler("GET", handler));
