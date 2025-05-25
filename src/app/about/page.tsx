import CompanyStats from "@/components/about/CompanyStats";
import HeroSection from "@/components/about/HeroSection";
import Mission from "@/components/about/Mission";
import Overview from "@/components/about/Overview";
import Values from "@/components/about/Values";
import Vision from "@/components/about/Vision";

const About = () => {
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen relative">
      <HeroSection />
      <Overview />
      <Mission />
      <Vision />
      <CompanyStats />
      <Values />
    </div>
  );
};

export default About;
