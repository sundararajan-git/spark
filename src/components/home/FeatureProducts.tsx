"use clinet";
import img1 from "@/assets/images/featured-machine.jpg";
import Image from "next/image";

const FeatureProducts = () => {
  return (
    <div className="flex flex-col gap-4 w-[90%] mx-auto py-8">
      <p className="text-blue-600 uppercase text-center font-bold text-2xl tracking-wide">
        Featured Products
      </p>
      <br />
      <div className="flex flex-col sm:flex-row gap-12 items-start justify-center w-full">
        {Array.from({ length: 3 }).map((item, index) => {
          return (
            <div
              className="relative w-full h-[500px] overflow-hidden rounded-lg group cursor-pointer"
              key={index}
            >
              <Image
                src={img1}
                alt="Laser Machine"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-65"
              />
              <div className="absolute inset-0 flex items-end group-hover:opacity-0 transition-opacity duration-300 p-8 ">
                <h3 className="text-white text-xl font-semibold">
                  Laser Cutting Machine
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/60    flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 ">
                <div className="flex flex-col gap-4">
                  <h3 className="text-white text-xl font-semibold">
                    Laser Cutting Machine
                  </h3>
                  <br />
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto asperiores eligendi minima ullam possimus molestias
                    optio veniam beatae? Tenetur, deserunt? Voluptas ipsam et
                    quae corporis omnis consectetur atque! Mollitia, voluptas.
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto asperiores eligendi minima ullam possimus molestias
                    optio veniam beatae? Tenetur, deserunt? Voluptas ipsam et
                    quae corporis omnis consectetur atque! Mollitia, voluptas.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
