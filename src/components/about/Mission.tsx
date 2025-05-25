"use client";

const Mission = () => {
  return (
    <section className="w-full bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">Spark Solution</span>
          , our mission is to empower businesses through intelligent digital
          transformation. We strive to deliver precision-driven software,
          efficient automation, and reliable tech solutions that enable our
          clients to thrive in a competitive world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We continuously innovate to deliver cutting-edge solutions
              tailored to evolving needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Integrity
            </h3>
            <p className="text-gray-600">
              We believe in transparency, ethics, and building long-term trust
              with our clients.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              Quality is at the core of everything we do, ensuring scalable and
              reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
