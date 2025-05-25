"use client";

import { heroSection } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/assets/images/optlasers-1.jpg";

const HeroSection = () => {
  const [slider, setSlider] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlider((prev) => (prev === 3 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Image
        src={img1}
        alt="Background"
        fill
        objectFit="cover"
        priority
        className="h-full w-full object-cover contrast-100 brightness-50"
      />
      <div
        className={`flex flex-col gap-4 py-[60%] sm:py-[18%] px-4 sm:px-24 absolute inset-0 h-full w-full`}
      >
        <h1 className="text-5xl font-semibold tracking-normal text-pretty text-white w-full sm:w-1/2">
          Building the Future of Laser Cutting Technology
        </h1>
        <p className="mt-8 text-lg text-pretty tracking-wide w-full sm:w-1/2 text-white">
          {heroSection[slider].content}
        </p>
        <p className="py-2 text-white tracking-widest uppercase">
          Sales | Services | Support
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
