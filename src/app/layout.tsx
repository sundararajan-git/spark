"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { exo } from "@/styles/fonts";
import "@/styles/globals.css";
import { RootShape } from "@/types";

const RootLayout = ({ children }: RootShape) => {
  return (
    <html lang="en">
      <body
        className={`flex flex-col itemes-center justify-between gap-2 w-full h-screen ${exo.className}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
