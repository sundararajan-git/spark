"use client";

import { coreOffering } from "@/constants";
import SpotlightCard from "@/lib/reactBits/SpotlightCard";

const CoreOffering = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-6">
      <p className={`font-bold text-2xl text-blue-600 uppercase `}>
        Core Offering
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {coreOffering.map((core, index) => {
          return (
            <div
              className="max-w-sm rounded-xl overflow-hidden shadow-lg h-[300px] cursor-pointer hover:scale-101 transition duration-100 ease-in-out"
              key={index}
            >
              <SpotlightCard
                className="custom-spotlight-card"
                // spotlightColor="rgba(21, 93, 255, 1)"
                spotlightColor="rgba(255, 255, 255, 0)"
              >
                <div className="px-6 py-4 space-y-8">
                  <span className="text-blue-600">
                    {<core.icon size={core.iconSize} />}
                  </span>
                  <p
                    className={`font-semibold text-xl mt-4 mb-4 text-pretty tracking-normal`}
                  >
                    {core.heading}
                  </p>
                  <p className="text-gray-700 text-md text-pretty tracking-wide">
                    {core.content}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreOffering;
