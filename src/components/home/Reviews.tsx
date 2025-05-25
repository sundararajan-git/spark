"use client";

import Masonry from "@/lib/reactBits/Masonry";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-full py-8 px-8">
      <p className="text-blue-600 uppercase text-center font-bold text-2xl tracking-wide">
        User Reviews
      </p>
      <Masonry data={reviews} />
    </div>
  );
};

export default Reviews;

const reviews = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center gap-3 p-4 shadow rounded-lg cursor-pointer hover:scale-105">
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=1"
          alt="User 1"
        />
        <h3 className="font-semibold text-sm">Arun K.</h3>
        <p className="text-gray-600 text-sm text-center">
          Great service! Really loved the user experience.
        </p>
        <div className="text-yellow-400">★★★★★</div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=2"
          alt="User 2"
        />
        <h3 className="font-semibold text-sm">Divya S.</h3>
        <p className="text-gray-600 text-sm text-center">
          Clean interface and super smooth workflow. Highly recommended!
        </p>
        <div className="text-yellow-400">★★★★☆</div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=3"
          alt="User 3"
        />
        <h3 className="font-semibold text-sm">Rahul V.</h3>
        <p className="text-gray-600 text-sm text-center">
          Could improve the speed, but overall good.
        </p>
        <div className="text-yellow-400">★★★☆☆</div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=4"
          alt="User 4"
        />
        <h3 className="font-semibold text-sm">Sneha P.</h3>
        <p className="text-gray-600 text-sm text-center">
          Loved the design and layout. Will use again.
        </p>
        <div className="text-yellow-400">★★★★★</div>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=5"
          alt="User 5"
        />
        <h3 className="font-semibold text-sm">Manoj R.</h3>
        <p className="text-gray-600 text-sm text-center">
          Neat animations and great responsiveness.
        </p>
        <div className="text-yellow-400">★★★★☆</div>
      </div>
    ),
  },
  {
    id: 6,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=6"
          alt="User 6"
        />
        <h3 className="font-semibold text-sm">Lavanya N.</h3>
        <p className="text-gray-600 text-sm text-center">
          Easy to use and very well organized components.
        </p>
        <div className="text-yellow-400">★★★★☆</div>
      </div>
    ),
  },
  {
    id: 7,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=7"
          alt="User 7"
        />
        <h3 className="font-semibold text-sm">Naveen M.</h3>
        <p className="text-gray-600 text-sm text-center">
          Some minor bugs, but nothing serious. Good effort.
        </p>
        <div className="text-yellow-400">★★★☆☆</div>
      </div>
    ),
  },
  {
    id: 8,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=8"
          alt="User 8"
        />
        <h3 className="font-semibold text-sm">Priya R.</h3>
        <p className="text-gray-600 text-sm text-center">
          Highly customizable and easy to plug into projects.
        </p>
        <div className="text-yellow-400">★★★★★</div>
      </div>
    ),
  },
  {
    id: 9,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=9"
          alt="User 9"
        />
        <h3 className="font-semibold text-sm">Ankit J.</h3>
        <p className="text-gray-600 text-sm text-center">
          Good design system and easy integration.
        </p>
        <div className="text-yellow-400">★★★★☆</div>
      </div>
    ),
  },
  {
    id: 10,
    content: (
      <div
        className="flex flex-col items-center gap-3 p-4
      shadow rounded-lg cursor-pointer hover:scale-105
      "
      >
        <Image
          className="w-12 h-12 rounded-full"
          src="https://i.pravatar.cc/150?img=10"
          alt="User 10"
        />
        <h3 className="font-semibold text-sm">Geetha M.</h3>
        <p className="text-gray-600 text-sm text-center">
          Everything worked as expected. Nice support!
        </p>
        <div className="text-yellow-400">★★★★★</div>
      </div>
    ),
  },
];
