"use client";

import { heroSection } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        src={heroSection[slider].image.src}
        alt="Background"
        fill
        objectFit="cover"
        priority
        className="h-full w-full object-cover contrast-100 brightness-50"
      />
      <div
        className={`flex flex-col gap-4 py-[60%] sm:py-[18%] px-4 sm:px-24 absolute inset-0 h-full w-full`}
      >
        <h1
          className={`text-5xl font-bold text-pretty text-white w-full sm:w-1/2 tracking-normal`}
        >
          {heroSection[slider].title}
        </h1>
        <p className="mt-2 text-lg text-pretty tracking-wide w-full sm:w-1/2 text-white">
          {heroSection[slider].content}
        </p>
        <p className={`py-2 text-white text-sm uppercase tracking-widest`}>
          Sales | Services | Support
        </p>
        <Link href={"/about"} className="w-fit flex">
          <span
            className={`rounded-[5px] bg-yellow-400 px-3.5 py-2.5 text-sm text-black shadow-xs hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out flex items-center gap-2 font-semibold`}
          >
            {heroSection[slider].button}
          </span>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b h-[0px] from-transparent to-white pointer-events-none" />
    </div>
  );
};

export default HeroSection;
