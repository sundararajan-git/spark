import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactSection";
import HeroSection from "@/components/contact/HeroSection";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <HeroSection />
      <ContactForm />
      <br />
      <ContactInfo />
    </div>
  );
};

export default Contact;
