import { getRandomColor } from "helpers/utils";
import { useMemo, useState } from "react";

interface Props {
  name: string;
  image?: string;
}

const AuthorImage = ({ name, image }: Props) => {
  const color = useMemo(() => getRandomColor(), [name]);

  let names: string[] = [];
  if (name) {
    names = name.split(" ");
  }

  return (
    <>
      {!!image ? (
        <img
          className="mr-4 h-10 w-10 rounded-full object-cover"
          src={image}
          alt={name}
        />
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
