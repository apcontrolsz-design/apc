"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Location = () => {
  const router = useRouter();
  const content = {
    id: {
      title: "Jangkauan Operasional yang Terintegrasi",
      p: "Memberikan kinerja yang andal di berbagai lingkungan industri, didukung oleh jaringan mitra industri yang luas.",
      img: "https://apcontrols.com.sg/images/be.png",
      imgTitle: "Indonesia | PT AP Controls",
      about: "Tentang Kami",
      region: "Ganti Wilayah",
    },
    sg: {
      title: "Regional Presence. Integrated Execution.",
      p: "With operations in Singapore, Indonesia, and Malaysia, AP Controls supports regional customers through coordinated engineering, project execution, and local availability, via AP Controls Pte Ltd (Singapore), PT AP Controls (Indonesia), and Valve Store (Malaysia).",
      img: "https://apcontrols.com.sg/images/be.png",
      imgTitle: "Singapore | AP Controls Pte Ltd",
      about: "About Us",
      region: "Select Your Region",
    },
  };
  const pathname = usePathname();
  const locale = pathname.split("/").pop();
  const lang = ["id", "sg", "my"].includes(locale || "") ? locale : "sg";
  return (
    <section
      className="
        relative max-w-[1440px] mx-auto
        py-8 sm:py-12 lg:py-0
        px-6
        mt-2 sm:mt-8 lg:mt-18
       
      "
    >
      <div
        className="relative z-10
          w-full
          flex flex-col
          gap-8 lg:gap-10
          text-center lg:text-left"
      >
        {/* TITLE */}
        <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
          {content[lang].title}
        </h2>
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px]">
          {content[lang].p}
        </p>
        <div className="flex flex-row justify-center">
          <div className="flex flex-wrap justify-center gap-15">
            {[
              {
                img: "https://apcontrols.com.sg/images/apc-blue.png",
                title: "Singapore | AP Controls Pte Ltd",
              },
              {
                img: "https://apcontrols.com.sg/images/apc-blue.png",
                title: "Indonesia | PT AP Controls",
              },
              {
                img: "https://apcontrols.com.sg/images/vs.png",
                title: "Malaysia | Valve Store",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
        flex flex-col items-center
        gap-2
        text-center
      "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[294px] h-[65px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[13px] sm:text-[14px] text-gray-600">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-[#3A4E84] text-white w-full sm:w-[240px] h-[56px] rounded-lg cursor-pointer hover:bg-[#fff] hover:border hover:border-[#3A4E84] hover:text-[#3A4E84]">
            {content[lang].about}
          </button>
          <button
            className="border border-[#3A4E84] text-[#3A4E84] w-full sm:w-[240px] h-[56px] rounded-lg hover:bg-[#3A4E84] hover:text-white cursor-pointer"
            onClick={() => router.push("/")}
          >
            {content[lang].region}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;
