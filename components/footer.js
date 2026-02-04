"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";
  const content = {
    id: {
      address:
        "Jl. Ratna Jatibening No. 1A Jatibening, Pondok Gede\nBekasi, 17412",
      phone: "+62 21 8499 6745",
      email: "indo.sales@apcontrols.com.sg",
    },
    en: {
      address:
        "Jl. Ratna Jatibening No. 1A Jatibening, Pondok Gede\nBekasi, 17412",
      phone: "+62 21 8499 6745",
      email: "indo.sales@apcontrols.com.sg",
    },
    sg: {
      address:
        "IMM Building, #04-28K 2 Jurong East Street 21\nSingapore 609601",
      phone: "+65 6563 2098",
      email: "sales@apcontrols.com.sg",
    },
    my: {
      address: (
        <>
          52, Jln Rosmerah 2/16, Taman Johor Jaya, 81100 Johor Bahru, Johor{" "}
          <br />
          Darul Ta'zim, Malaysia
        </>
      ),
      phone: "+60 73512522",
      email: "sales@valvestore.com.my",
    },
  };

  return (
    <section
      className="min-h-[376px]
        bg-black"
    >
      <div
        className="
        relative max-w-[1440px] mx-auto
        
        py-12 sm:py-16 lg:py-20
        px-6
        mt-8

        flex flex-col
      "
      >
        {/* TOP CONTENT */}
        <div className="flex flex-col gap-16">
          <div
            className="
        flex flex-col
        gap-10
        text-center
        sm:text-left
        lg:flex-row
        lg:justify-between
        lg:gap-20
      "
          >
            <div>
              <h4 className="text-white font-medium mb-2">Head Office</h4>
              <p className="text-[#D2D2D2] whitespace-pre-line">
                {content[lang].address}
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Phone</h4>
              <p className="text-[#D2D2D2] whitespace-nowrap">
                {content[lang].phone}
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Email</h4>
              <p className="text-[#D2D2D2] whitespace-nowrap">
                {content[lang].email}
              </p>
            </div>
          </div>

          {/* LOGOS */}
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <div className="relative w-[200px] sm:w-[238px] h-[74px] mx-auto sm:mx-0">
              <Image
                src="/images/apc-white.webp"
                alt="AP Controls"
                className="object-contain"
                loading="lazy"
                decoding="async"
                fill
              />
            </div>
            <div className="relative w-[200px] sm:w-[238px] h-[74px] mx-auto sm:mx-0">
              <Image
                src="/images/vs-white.webp"
                alt="Valve Store"
                fill
                className="object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* COPYRIGHT — NOW IT WORKS */}
        <p className="text-white text-center text-sm mt-auto pt-8">
          ©2026 <strong>AP Controls</strong>
        </p>
      </div>
    </section>
  );
};

export default Footer;
