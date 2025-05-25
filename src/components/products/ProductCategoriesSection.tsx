"use client";

const ProductCategoriesSection = () => {
  const categories = [
    {
      title: "Fiber Laser Cutting Machines",
      description:
        "Ideal for cutting stainless steel, carbon steel, and other metals.",
      details: ["Available in various power ranges (1kW–12kW)"],
    },
    {
      title: "CO2 Laser Cutting Machines",
      description: "Best suited for acrylic, MDF, wood, fabric, and leather.",
    },
    {
      title: "Customized Laser Solutions",
      description:
        "Designed to match specific industry needs and material types.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        Product Categories
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <ProductCategoryCard
            key={idx}
            title={cat.title}
            description={cat.description}
            details={cat.details}
          />
        ))}
      </div>
      <KeyFeatures />
    </section>
  );
};

export default ProductCategoriesSection;

const KeyFeatures = () => {
  const features = [
    "High cutting accuracy",
    "Low power consumption",
    "Easy-to-use interface",
    "Long machine life with minimal maintenance",
  ];

  return (
    <section className="bg-blue-50 py-10 px-6 rounded-lg max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        Key Features Across Products
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

interface ProductCategoryCardProps {
  title: string;
  description: string;
  details?: string[];
}

const ProductCategoryCard = ({
  title,
  description,
  details,
}: ProductCategoryCardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {details && (
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
