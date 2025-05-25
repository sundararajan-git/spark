"use client";

const CompanyStats = () => {
  const stats = [
    { label: "Projects Completed", value: 120 },
    { label: "Happy Clients", value: 80 },
    { label: "Services Offered", value: 15 },
    { label: "Team Members", value: 25 },
  ];

  return (
    <section className="w-full bg-blue-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          Our Impact in Numbers
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We take pride in the milestones we’ve achieved with our clients and
          team.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-4xl font-bold text-blue-700">{item.value}+</p>
              <p className="text-sm mt-2 text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
