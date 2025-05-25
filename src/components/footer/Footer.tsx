import Image from "next/image";
import Logo from "@/assets/icons/bolt-svgrepo-com.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={Logo} alt="logo" className="w-10 h-10" />
            <div className={`leading-tight`}>
              <p className="text-xl font-bold text-white">SPARK</p>
              <span className="text-sm text-gray-200 ps-1 uppercase">
                Solution
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-100 max-w-xs">
            Precision You Can Trust, Power You Can Feel
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-lg font-semibold mb-4">Quick Links</p>
          <ul className="flex flex-col gap-3 text-sm text-gray-200">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Projects
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg font-semibold mb-4">Contact Us</p>
          <ul className="flex flex-col gap-3 text-sm text-gray-200">
            <li>#213,214, TNHB, Ayapakkam, Chennai ‐ 77</li>
            <li className="break-all">sparksoluon2025@gmail.com</li>
            <li>8870063017 | 8870063047 | 8870089013</li>
          </ul>
        </div>

        {/* Location Map */}
        <div>
          <p className="text-lg font-semibold mb-4">Location</p>
          <div className="w-full rounded overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
              width="100%"
              height="200"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom footer bar */}
      <div className="mt-12 text-center text-sm text-gray-300 border-t border-blue-500 pt-4">
        &copy; {new Date().getFullYear()} Spark Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
