import Image from "next/image";
import React from "react";
import stroopwafel from "@images/stroopwafel.png";

export const Loading = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen z-50">
      <div className="flex h-screen items-center justify-center">
        <Image
          className="w-1/4 animate-spin"
          src={stroopwafel}
          alt="Stroopwafel"
          style={{ width: 200, height: 'auto' }}
        />
      </div>
    </div>
  );
};
