import Image from "next/image";
import React from "react";
import stroopwafel from "@images/stroopwafel.jpeg";

export const Loading = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <div className="flex h-full items-center justify-center">
        <Image
          className="w-1/4 animate-spin"
          src={stroopwafel}
          alt="Stroopwafel"
        />
      </div>
    </div>
  );
};
