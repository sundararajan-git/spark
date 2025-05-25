"use client";

const Values = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Our Core Values
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          These values define who we are, guide our decisions, and shape our
          company culture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

const values = [
  {
    title: "Integrity",
    description: "We uphold honesty and transparency in every action we take.",
  },
  {
    title: "Innovation",
    description:
      "We embrace change and continuously push boundaries to solve real problems.",
  },
  {
    title: "Excellence",
    description:
      "We deliver top-notch solutions by paying attention to detail and quality.",
  },
  {
    title: "Customer First",
    description:
      "We listen, understand, and put customer needs at the center of what we build.",
  },
  {
    title: "Collaboration",
    description:
      "We believe great outcomes come from working together as one team.",
  },
  {
    title: "Accountability",
    description: "We take ownership of our work and honor our commitments.",
  },
];
