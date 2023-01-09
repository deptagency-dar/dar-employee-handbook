import { NextApiHandler } from "next";

import { createClient } from "../../prismicio";

const handler: NextApiHandler = async (_req, res) => {
  const client = createClient();

  const menu = await client.getSingle("menu");

  res.status(200).json({ menu: menu });
};

export default handler;
