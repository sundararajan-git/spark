"use client";

import Image from "next/image";
import companyOverviewImage from "@/assets/images/company_overview.jpg";

const Overview = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Empowering Tomorrow with Spark
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Spark Solution is a technology-driven company dedicated to
            delivering precision engineering, reliable IT solutions, and
            sustainable innovation for businesses. With a skilled team and
            customer-first approach, we aim to simplify complex challenges and
            build digital transformation at scale.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">✓</span>
              <p className="text-gray-700">
                Customized software & ERP solutions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">✓</span>
              <p className="text-gray-700">
                Reliable support and continuous updates
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl font-bold">✓</span>
              <p className="text-gray-700">
                Over 20+ successful enterprise integrations
              </p>
            </div>
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={companyOverviewImage}
            alt="Company Overview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
