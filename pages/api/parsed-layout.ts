import { FilledContentRelationshipField } from "@prismicio/types";
import { NextApiHandler } from "next";
import { IMenuItemWithChildren } from "types/types";

import { createClient } from "../../prismicio";

const handler: NextApiHandler = async (_req, res) => {
  const client = createClient();

  const menu = await client.getSingle("menu");

  const customMenuItems = menu.data.slices.map((firstLevelItem) => {
    return {
      text: firstLevelItem.primary.label,
      url:
        "url" in firstLevelItem.primary.link
          ? (firstLevelItem.primary.link as FilledContentRelationshipField).url
          : null,
      items: firstLevelItem.items.map((item) => ({
        text: item.sub_label,
        url:
          "url" in item.sub_link
            ? (item.sub_link as FilledContentRelationshipField).url
            : null,
      })),
    } as IMenuItemWithChildren;
  });

  res.status(200).json({ menu: { items: customMenuItems } });
};

export default handler;
