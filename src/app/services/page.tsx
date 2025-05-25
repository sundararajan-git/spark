import HeroSection from "@/components/service/HeroSection";
import ServicesSection from "@/components/service/ServicesSection";
import Stats from "@/components/service/Stats";
import Testimonials from "@/components/service/Testimonials";

const Services = () => {
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen relative">
      <HeroSection />
      <ServicesSection />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Services;
