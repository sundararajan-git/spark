"use client";

import CountUp from "@/lib/reactBits/CountUp";

const Stats = () => (
  <section className="bg-blue-50 py-12 px-6 text-center">
    <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
      {[
        { label: "Projects Completed", value: 120 },
        { label: "Happy Clients", value: 80 },
        { label: "Machines Installed", value: 150 },
        { label: "Years of Experience", value: 10 },
      ].map((item, idx) => (
        <div key={idx}>
          <p className="text-4xl font-bold text-blue-600">
            <CountUp
              from={0}
              to={item.value}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </p>
          <p className="text-gray-700 mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
