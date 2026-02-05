"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const History = () => {
  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";
  const content = {
    id: (
      <>
        <strong>28+ tahun berpengalaman</strong>, dipercaya oleh<br></br>
        <strong>500+ pelanggan </strong>
        di Asia-Pasifik, dari<br></br> berbagai skala dan industri
      </>
    ),
    en: (
      <>
        With <strong>+10 years of experience</strong>, PT AP<br></br>
        Controls is trusted by companies of various <br /> sizes across
        Indonesia.
      </>
    ),
    sg: (
      <>
        <strong>28+ years of experience</strong> trusted by <br />
        <strong>500+ customers</strong> across Asia-Pacific,
        <br /> across various scales and industries
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

  const industry = {
    id: {
      oil: "Oil & Gas",
      chemical: "Chemical & Petrochemical",
      water: "Air & Limbah",
      industrial: "Industrial Automation",
      power: "Energi",
      mining: "Pertambangan & Pengolahan Mineral",
      other: "dan sektor industri lainnya",
    },
    sg: {
      oil: "Oil & Gas",
      chemical: "Chemical & Petrochemical",
      water: "Water & Wastewater",
      industrial: "Industrial Automation",
      power: "Power Generation",
      mining: "Mining & Minerals Processing",
      other: "and other industrial sectors",
    },
    my: {
      oil: "Oil & Gas",
      chemical: "Chemical & Petrochemical",
      water: "Water & Wastewater",
      industrial: "Industrial Automation",
      power: "Power Generation",
      mining: "Mining & Minerals Processing",
      other: "and other industrial sectors",
    },
    en: {
      oil: "Oil & Gas",
      chemical: "Chemical & Petrochemical",
      water: "Water & Wastewater",
      industrial: "Industrial Automation",
      power: "Energy",
      mining: "Mining & Mineral Processing",
      other: "and other industrial sectors",
    },
  };

  const industryList = Object.values(industry[lang]);

  return (
    <section
      className="
        relative  overflow-hidden
        h-auto mt-2 sm:mt-8 lg:mt-18
      "
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 py-2 px-6">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px]">
            {content[lang]}
          </h2>

          {/* INDUSTRY LOOP */}
          <p className="text-[14px] sm:text-[15px] lg:text-[16px]">
            {industryList.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {index !== industryList.length - 1 && " | "}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      <div
        className="relative w-full mt-6 w-full
            aspect-[1440/598]"
      >
        <Image
          src="/images/history-bg.webp"
          alt=""
          aria-hidden="true"
          className="
            
            object-cover
            object-center
          "
          fill
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default History;
