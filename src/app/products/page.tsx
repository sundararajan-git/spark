import HeroSection from "@/components/products/HeroSection";
import ProductCategoriesSection from "@/components/products/ProductCategoriesSection";

const Products = () => {
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen relative">
      <HeroSection />
      <ProductCategoriesSection />
    </div>
  );
};

export default Products;
