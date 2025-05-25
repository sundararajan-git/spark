"use client";

import Image from "next/image";
import Logo from "@/assets/icons/bolt-svgrepo-com.svg";
import Link from "next/link";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const pagePath = useMemo(() => pathname.split("/")[1], [pathname]);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between sm:px-8 px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={Logo} alt="logo" className=" w-9 h-9 sm:w-10 sm:h-10" />
          <div className={`flex flex-col`}>
            <p className="font-extrabold text-blue-600 text-xl uppercase">
              Spark
            </p>
            <span
              className={`text-md font-bold uppercase ps-4 ${
                scrolled ? "text-black" : "text-white"
              } `}
            >
              Solution
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden sm:flex items-center gap-10 text-md font-semibold ${
            scrolled ? "text-black" : "text-white"
          } `}
        >
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <li
                className={`${
                  pagePath === link.path.slice(1) ? "text-yellow-500" : ""
                } hover:text-blue-600`}
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="cursor-pointer hover:scale-110">
            <FiSun />
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={toggleSidebar}
            className={`text-2xl cursor-pointer ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >
        <div className="flex items-center gap-1 cursor-pointer mt-8">
          <Image src={Logo} alt="logo" className=" w-9 h-9 sm:w-10 sm:h-10" />
          <div className="flex items-center gap-2">
            <p className="font-extrabold text-blue-600 text-lg uppercase">
              Spark
            </p>
            <span className={`text-md font-bold uppercase`}>Solution</span>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-6 mt-6">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} onClick={toggleSidebar}>
              <span
                className={`block text-lg font-medium ${
                  pagePath === link.path.slice(1)
                    ? "text-yellow-500"
                    : "text-gray-800"
                } hover:text-blue-600`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Navbar;
