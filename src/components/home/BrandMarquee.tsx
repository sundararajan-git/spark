"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = [
  "Bosch",
  "Trumpf",
  "Han's Laser",
  "Epilog",
  "Coherent",
  "Trotec",
  "Bystronic",
  "Amada",
  "LaserStar",
];

export const BrandMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 15,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      tween.kill(); // Clean up on unmount
    };
  }, []);

  return (
    <div className=" w-full overflow-hidden py-6">
      <div
        className="flex gap-12 whitespace-nowrap text-xl md:text-2xl font-semibold uppercase"
        ref={marqueeRef}
      >
        {[...brands, ...brands].map((brand, i) => (
          <span key={i}>{brand}</span>
        ))}
      </div>
    </div>
  );
};
