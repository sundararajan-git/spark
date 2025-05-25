"use client";

import hero0 from "../assets/images/optlasers.jpg";
import hero1 from "../assets/images/optlasers-1.jpg";
import hero2 from "../assets/images/optlasers-2.jpg";
import hero3 from "../assets/images/optlasers-3.jpg";

import core0 from "../assets/images/Laser-Cutting-Machine.webp";
import core1 from "../assets/images/laser-engraver.png";
import core2 from "../assets/images/core-maintence-man.jpg";

import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FaGripfire } from "react-icons/fa6";
import { GiMeepleCircle } from "react-icons/gi";

export const heroSection = [
  {
    title: "Driven by Precision, Built on Trust",
    content:
      "With years of industry experience, we specialize in providing cutting-edge laser machine solutions.Our team is committed to quality, innovation, and long-term customer success.",
    button: "Get started",
    image: hero0,
  },
  {
    title: "End-to-End Laser Machine Support",
    content:
      "From installation to annual maintenance, we offer full-service care to keep your machines running flawlessly.Expert technicians ensure fast, reliable service across all machine types.",
    button: "Our services",
    image: hero1,
  },
  {
    title: "High-Performance Laser Machines for Every Industry",
    content:
      "Discover our range of precision laser cutters, engravers, and marking systems.Engineered to deliver speed, accuracy, and lasting value for your operations.",
    button: "Our products",
    image: hero2,
  },
  {
    title: "Let’s Talk About Your Laser Needs",
    content:
      "Whether you're ready to buy or just exploring options, we’re here to help.Reach out to our team for consultations, quotes, or technical assistance.",
    button: "Contact us",
    image: hero3,
  },
];

export const coreOffering = [
  {
    title: "Laser Cutting Machines",
    heading: "Precision Cutting for Every Material",
    content:
      "Our laser cutting machines deliver clean, sharp cuts on materials like metal, acrylic, wood, and fabric.Ideal for high-speed, high-accuracy production across multiple industries.",
    image: core0,
    button: "View",
    icon: BsStars,
    iconSize: 30,
  },
  {
    title: "Laser Engraving Machines",
    heading: "Detailed Engraving That Tells Your Story",
    content:
      "Create intricate designs, barcodes, logos, or custom artwork on various surfaces. Perfect for jewelry, signage, gifts, electronics, and more.",
    image: core1,
    button: "Explore",
    icon: FaGripfire,
    iconSize: 30,
  },
  {
    title: "Maintenance & Services",
    heading: "Reliable Support. Anytime, Anywhere.",
    content:
      "We provide installation, repair, AMC, and on-site service to ensure your machines stay at peak performance.Our certified team is just a call away.",
    image: core2,
    button: "Book",
    icon: MdOutlineMiscellaneousServices,
    iconSize: 30,
  },
];

export const whyChooseUs = [
  {
    title: "Fast Service",
    list: [
      "24 / 7 support availability for emergency breakdowns",
      "On - time service, backed by experienced technicians",
    ],
    icon: GiMeepleCircle,
  },
  {
    title: "Custom Solutions",
    list: [
      "We tailor machines and software based on your business needs",
      "Special configurations and automation options available",
    ],
    icon: GiMeepleCircle,
  },
  {
    title: "Certified Technicians",
    list: [
      "Our engineers are factory - trained and experienced",
      "We follow strict service protocols and safety standards",
    ],
    icon: GiMeepleCircle,
  },
];
