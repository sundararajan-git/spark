"use client";

import Image from "next/image";
import WhyChooseUsImage from "@/assets/images/aboutus-intro.jpg";
import { whyChooseUs } from "@/constants";
import { Step } from "@/lib/reactBits/AutoStepper";
import AutoStepper from "@/lib/reactBits/AutoStepper";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-full py-8">
      <p className="text-blue-600 uppercase text-center font-bold text-2xl tracking-wide">
        Why Choose Us
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-start gap-12 sm:w-[80%] mx-auto">
        <Image
          src={WhyChooseUsImage}
          className="object-contain w-fit h-[500px] rounded-2xl hidden sm:block"
          alt="why choose us"
        />
        <div className="w-full flex flex-col items-start justify-start gap-4 overflow-hidden">
          <AutoStepper carousel carouselInterval={3000}>
            {whyChooseUs.map((item, index) => {
              return (
                <Step key={index}>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-semibold mb-2 text-2xl flex items-center gap-2 tracking-normal text-blue-600">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out pt-4">
                    {item.list.map((point, key) => {
                      return (
                        <span
                          key={key}
                          className="flex items-center gap-2 text-base"
                        >
                          {point}
                        </span>
                      );
                    })}
                  </div>
                </Step>
              );
            })}
          </AutoStepper>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
