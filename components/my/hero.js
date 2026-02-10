"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useContactModal } from "../../app/context/ContactModalContext";
import Image from "next/image";

const Hero = () => {
  const { openModal } = useContactModal();

  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";

  const button = {
    id: { contact: "Hubungi Kami", product: "Jelajahi Produk Kami" },
    sg: { contact: "Contact Us", product: "Explore Our Products" },
    my: { contact: "Contact Us", product: "Explore Our Products" },
  };

  return (
    <section
      className="
        relative max-w-[1440px] mx-auto 
        h-auto lg:h-[532px] 
        px-6  lg:py-0
      "
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full gap-8">
        {/* TEXT */}
        <div
          className="
            relative z-10
            w-full lg:w-[825px]
            flex flex-col justify-center
            gap-4 lg:gap-6
            text-center lg:text-left
            py-16
            pt-[118px]
          "
        >
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px] max-w-[565px]">
            Leading Valve Store & Industrial Flow Solutions in Malaysia
          </h1>

          <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px] text-justify">
            A subsidiary of AP Controls, Valve Store provides reliable
            industrial valves and flow control solutions to support critical
            operations across multiple industries in Malaysia.
          </p>
          <div className="pl-4">
            <table className="border-collapse text-left text-[14px] sm:text-[15px] lg:text-[16px]">
              <tbody>
                <tr>
                  <td className="pr-6 py-1 align-top">Email</td>
                  <td className="py-1 align-top">: sales@valvestore.com.my</td>
                </tr>
                <tr>
                  <td className="pr-6 py-1 align-top">Phone</td>
                  <td className="py-1 align-top">: +60 73512522</td>
                </tr>
                <tr>
                  <td className="pr-6 py-1 align-top">Address</td>
                  <td className="py-1 align-top">
                    : 52, Jln Rosmerah 2/16, Taman Johor Jaya, 81100 Johor{" "}
                    <br />
                    Bahru, Johor Darul Ta&apos;zim, Malaysia
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={openModal}
              className="bg-[#3A4E84] text-white w-full sm:w-[240px] h-[56px] rounded-lg font-bold cursor-pointer hover:bg-[#fff] hover:border hover:border-[#3A4E84] hover:text-[#3A4E84]"
            >
              Contact Us
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://maps.app.goo.gl/8SGNojC2gyetjLkA9`,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="border border-[#3A4E84] text-[#3A4E84] w-full sm:w-[240px] h-[56px] rounded-lg font-bold cursor-pointer hover:bg-[#3A4E84] hover:text-white"
            >
              Our Address
            </button>
          </div>
        </div>
        {/* Images */}
        <div className="flex items-center ">
          <div
            className="relative
              w-[561px] h-[290px]
              pointer-events-none"
          >
            <Image
              src="/images/vsmy.webp"
              alt=""
              aria-hidden="true"
              fill={true}
              className="
                object-contain
                object-center
                
              "
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
