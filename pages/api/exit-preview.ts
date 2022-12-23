import * as prismicNext from "@prismicio/next";
import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  prismicNext.exitPreview({ res, req });
}

export default handler;
