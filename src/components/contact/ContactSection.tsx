import React from "react";
import {
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full sm:w-[90%] mx-auto bg-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Info</h2>
      <p className="mb-4">
        <span className="font-semibold">📍 Address:</span> Spark Solution,
        [Insert Full Company Address Here]
      </p>
      <p className="mb-4">
        <span className="font-semibold">📞 Phone:</span> +91-XXXXXXXXXX
      </p>
      <p className="mb-4">
        <span className="font-semibold">✉️ Email:</span>{" "}
        contact@sparksolution.com
      </p>
      <p className="mb-8">
        <span className="font-semibold">🕘 Working Hours:</span> Monday to
        Saturday – 9:00 AM to 6:00 PM
      </p>

      <h3 className="text-xl font-semibold mb-4">🌐 Follow us on:</h3>
      <div className="flex space-x-5 text-blue-600 text-2xl">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-800 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="hover:text-blue-800 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hover:text-blue-800 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
