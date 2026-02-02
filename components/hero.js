"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useContactModal } from "../app/context/ContactModalContext";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";
  const { openModal } = useContactModal();

  const button = {
    id: { contact: "Hubungi Kami", product: "Jelajahi Produk Kami" },
    sg: { contact: "Contact Us", product: "Explore Our Products" },
    my: { contact: "Contact Us", product: "Explore Our Products" },
    en: { contact: "Contact Us", product: "Explore Our Products" },
  };

  const content = {
    id: (
      <>
        PT AP Controls memiliki pengalaman lebih dari 10 tahun di bidang
        manufaktur, khususnya dalam sistem <br />
        transport material, untuk mendukung pelaksanaan proyek yang andal dan
        efisien di berbagai sektor industri.
      </>
    ),
    en: (
      <>
        PT AP Controls has over a decade of experience in manufacturing,
        specializing in material handling systems <br /> to support reliable and
        efficient project execution across various industrial sectors.
      </>
    ),
    sg: (
      <>
        Based in Singapore, AP Controls Pte Ltd serves as the Asia-Pacific hub
        for project coordination, <br></br> technical support, and product
        distribution, ensuring seamless execution across the region.
      </>
    ),
    my: (
      <>
        AP Controls has more than 10 years of manufacturing experience,
        especially in material handling systems,
        <br />
        supporting reliable and efficient project execution across various
        industrial sectors.
      </>
    ),
  };

  return (
    <section
      className="
        relative max-w-[1440px] mx-auto overflow-hidden
        h-auto lg:h-[532px] 
        px-6 py-16 lg:py-0
      "
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
        {/* TEXT */}
        <div
          className="
            relative z-10
            w-full lg:w-[825px]
            flex flex-col justify-center
            gap-8 lg:gap-10
            text-center lg:text-left
          "
        >
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
            Your Engineering Solutions Provider
          </h1>

          <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px]">
            {content[lang]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={openModal}
              className="bg-[#3A4E84] text-white w-full sm:w-[240px] h-[56px] rounded-lg cursor-pointer hover:bg-[#fff] hover:border hover:border-[#3A4E84] hover:text-[#3A4E84] font-bold"
            >
              {button[lang].contact}
            </button>
            <button
              onClick={() => router.push(`/${lang}/product`)}
              className="border border-[#3A4E84] text-[#3A4E84] w-full sm:w-[240px] h-[56px] rounded-lg hover:bg-[#3A4E84] hover:text-white cursor-pointer font-bold"
            >
              {button[lang].product}
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <img
          src="https://apcontrols.com.sg/images/apc-grey.png"
          alt=""
          aria-hidden="true"
          className="
            relative lg:absolute

            right-0 lg:right-[-20px]
            top-auto lg:top-1/2
            lg:-translate-y-1/2

            w-full sm:w-[480px] lg:w-[680px]
            h-[280px] sm:h-[360px] lg:h-[480px]

            object-contain
            object-center

            -mt-32 sm:-mt-48 lg:mt-0
            z-0 lg:z-20
            pointer-events-none
          "
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default Hero;
