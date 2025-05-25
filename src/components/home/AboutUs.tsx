"use client";

import Image from "next/image";
import aboutUs from "@/assets/images/aboutus-intro.jpg";
import CircularText from "@/lib/reactBits/CircularText";

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-6 sm:flex-row space-x-20 items-start justify-center py-12">
      <div className="w-full sm:w-[30%] h-full flex justify-center relative">
        <Image
          src={aboutUs}
          alt="team"
          className="w-full h-[70vh] object-cover rounded-2xl brightness-90"
        />
        <div className="absolute bottom-10 right-5 ">
          <CircularText
            text="SALES*SERVICES*SUPPORT*"
            onHover="speedUp"
            spinDuration={20}
            className="w-[180px] h-[180px] text-white"
          />
        </div>
      </div>
      <div className="w-full sm:w-[40%] h-full space-y-8">
        <p className="font-bold uppercase text-blue-600 text-2xl">About Us</p>
        <p className="tracking-wide text-pretty text-lg">
          We are a leading manufacturer and supplier of advanced laser cutting
          machines in India. With precision engineering and dedicated support,
          we help industries achieve higher productivity.
        </p>
        <p className="tracking-wide text-pretty text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
          reiciendis magnam, maxime ut possimus numquam, aliquid temporibus
          voluptatem animi expedita necessitatibus? Omnis nulla sed tempore
          possimus ratione nihil temporibus commodi.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
