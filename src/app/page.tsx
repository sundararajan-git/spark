"use client";
import AboutUs from "@/components/home/AboutUs";
import ClientBrands from "@/components/home/ClientBrands";
import CoreOffering from "@/components/home/CoreOffering";
import FeatureProducts from "@/components/home/FeatureProducts";
import FeatureServices from "@/components/home/FeatureServices";
import HeroSection from "@/components/home/HeroSection";
import Reviews from "@/components/home/Reviews";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 w-full min-h-screen relative">
      <HeroSection />
      <AboutUs />
      <CoreOffering />
      <WhyChooseUs />
      <FeatureProducts />
      <FeatureServices />
      <ClientBrands />
      <Reviews />
    </div>
  );
};

export default Home;
