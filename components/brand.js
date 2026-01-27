"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ProductCarousel from "./products";

const Brand = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = ["id", "sg", "my"].includes(segments[1]) ? segments[1] : "sg";

  const content = {
    id: (
      <>
        Berpengalaman dalam produksi bucket elevator, drum pulley, chain
        conveyor, screw conveyor, dan komponen pendukungnya untuk berbagai
        aplikasi industri.
      </>
    ),
    sg: (
      <>
        Established in 1997, AP Controls began as a solenoid valve specialist
        and has evolved into a solutions-oriented engineering partner.<br></br>{" "}
        Today, we partner with established international manufacturers to supply
        proven industrial components supporting reliable performance across
        critical applications.
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
        h-auto
        py-8 sm:py-12 lg:py-0
        px-6
        mt-2 sm:mt-8 lg:mt-18
      "
    >
      {lang == "sg" && (
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          {/* TEXT */}
          <div
            className="
            relative z-10
            w-full 
            flex flex-col justify-items-start
            gap-8 lg:gap-10
            text-center lg:text-left
          "
          >
            <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
              Technology Partners
            </h2>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px]">
              {content[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
              {[
                "metal-work.png",
                "GSR.png",
                "Parker.png",
                "Pentair.png",
                "Konan.png",
              ].map((img) => (
                <img
                  key={img}
                  src={`https://apcontrols.com.sg/images/${img}`}
                  alt={img.replace(".png", "")}
                  className="
                  h-[84px] w-[164px]
                  sm:h-[72px] sm:w-[140px]
                  object-contain
                "
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
            <p>and other established partners.</p>
            <button
              onClick={() => router.push(`/${lang}/product`)}
              className="mt-6 border-2 border-[#3A4E84] text-[#3A4E84] w-full lg:w-[240px] px-6 py-2.5 rounded-lg font-medium hover:bg-[#3A4E84] hover:text-white transition cursor-pointer"
            >
              View Our Partners
            </button>
          </div>
        </div>
      )}
      {lang == "id" && (
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          {/* TEXT */}
          <div
            className="
            relative z-10
            w-full 
            flex flex-col justify-items-start
            gap-8 lg:gap-10
            text-center lg:text-left
          "
          >
            <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
              Spesialis Sistem Conveying Material
            </h2>

            <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px]">
              {content[lang]}
            </p>
            {/* Carousel */}
            <ProductCarousel></ProductCarousel>
          </div>
        </div>
      )}
    </section>
  );
};

export default Brand;
