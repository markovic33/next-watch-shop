import Image from "next/image";
import React from "react";
import hero from "../../public/hero1.jpg";

export const HeroImage = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-4 shadow-2xl rounded-lg">
      <div className="">
        <Image src={hero} alt="hero" width={500} height={300} className="" />
      </div>
      <h1 className="text-4xl font-bold text-blue-800 md:text-7xl">
        Find Best
        <br /> Watch <br /> For You
      </h1>
    </div>
  );
};
