import * as prismicNext from "@prismicio/next";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { createClient } from "../../prismicio";

const handler: NextApiHandler = async (req, res) => {
  const client = createClient({ req });

  prismicNext.setPreviewData({ req, res });

  await prismicNext.redirectToPreviewURL({ req, res, client });
};

export default handler;
