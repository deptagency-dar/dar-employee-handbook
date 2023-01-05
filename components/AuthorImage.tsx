import { getRandomColor } from "helpers/utils";
import { useMemo, useState } from "react";
import Image from "next/image";

interface Props {
  name: string;
  image?: string | null;
}

const AuthorImage = ({ name, image }: Props) => {
  const [color] = useState(() => getRandomColor());

  let names: string[] = [];
  if (name) {
    names = name.split(" ");
  }

  return (
    <>
      {!!image ? (
        <div style={{ width: 40, height: 40, position: 'relative' }} className="mr-4">
          <Image src={image} alt={name} fill className="rounded-full object-cover" />
        </div>
      ) : (
        <div
          className={`mr-3 flex h-10 w-10 items-center justify-center rounded-full text-white`}
          style={{ backgroundColor: color }}
        >
          {!!names[0] && names[0][0].toUpperCase()}
          {!!names[1] && names[1][0].toUpperCase()}
        </div>
      )}
    </>
  );
};

export default AuthorImage;
