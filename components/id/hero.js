"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useContactModal } from "../../app/context/ContactModalContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  const content = {
    id: {
      title: (
        <>
          Sistem Conveying Material Terpercaya untuk <br />
          Operasional Industri Anda
        </>
      ),
      p: "Berpengalaman belasan tahun dalam produksi bucket elevator, drum pulley, chain conveyor, screw conveyor, serta berbagai komponen pendukungnya yang dirancang untuk menunjang operasional industri secara andal, efisien, dan berkelanjutan di berbagai sektor aplikasi.",
    },
    en: {
      title: (
        <>
          Trusted Material Conveying Systems <br /> for Your Industrial
          Operations
        </>
      ),
      p: "With decades of experience in manufacturing bucket elevators, drum pulleys, chain conveyors, screw conveyors, and a wide range of supporting components, designed to support reliable, efficient, and sustainable industrial operations across various application sectors.",
    },
  };

  return (
    <section
      className="
        relative max-w-[1440px] mx-auto overflow-hidden
        h-auto 
        px-6 py-16 lg:py-0
      "
    >
      <div className="flex flex-col items-center h-full gap-8 lg:gap-10">
        {/* IMAGE */}
        <div>
          <Image
            src="/images/product-bg.webp"
            alt=""
            aria-hidden="true"
            width={1380}
            height={514}
            className="
          
              object-contain
              object-center

              pointer-events-none
            "
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        {/* TEXT */}
        <div
          className="
            relative z-10
            w-full
            flex flex-col justify-center
            gap-8 lg:gap-10
            text-center lg:text-left
          "
        >
          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
            {content[lang].title}
          </h1>

          <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px]">
            {content[lang].p}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
