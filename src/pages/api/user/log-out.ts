import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.status(200).send({ ok: true });
}

export default withApiSession(withHandler("GET", handler));
