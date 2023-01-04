import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      <figure className="grid grid-cols-1 gap-4">
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className="text-center font-serif italic tracking-tight text-slate-500">
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
        {prismicH.isFilled.image(image) && (
          <div className="bg-gray-100 flex justify-center">
            <PrismicNextImage field={image} sizes="100vw" className="w-full" style={{ width: 'auto', height: 300 }} />
          </div>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;
