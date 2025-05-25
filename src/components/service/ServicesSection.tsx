"use client";
import {
  FaTools,
  FaUserGraduate,
  FaHandshake,
  FaWrench,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Machine Installation",
    icon: <FaTools className="text-blue-600 text-3xl" />,
    description: "Efficient and reliable machine setup at your site.",
  },
  {
    title: "Operator Training",
    icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
    description: "Hands-on training to maximize machine performance.",
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    icon: <FaHandshake className="text-blue-600 text-3xl" />,
    description: "Scheduled services to ensure long-term reliability.",
  },
  {
    title: "On-Site Repair & Support",
    icon: <FaWrench className="text-blue-600 text-3xl" />,
    description: "Quick and professional repairs whenever you need.",
  },
  {
    title: "Spare Parts Supply",
    icon: <FaCogs className="text-blue-600 text-3xl" />,
    description: "Genuine parts readily available to minimize downtime.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full px-6 py-16 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We provide a complete range of technical and support services.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
