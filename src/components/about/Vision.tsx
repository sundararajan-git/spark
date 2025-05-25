"use client";

const Vision = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
          To be a leading force in digital innovation, driving progress and
          impact through powerful technology solutions that shape a smarter,
          more connected future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Empowering Businesses
            </h3>
            <p className="text-gray-600">
              We envision a world where every business, big or small, can unlock
              its true potential with the help of intelligent software.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Building a Better Tomorrow
            </h3>
            <p className="text-gray-600">
              Through sustainability, scalability, and purpose-driven tech, we
              aim to leave a meaningful legacy in every industry we touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
