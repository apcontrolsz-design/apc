"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Customer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = ["id", "sg", "my"].includes(segments[1]) ? segments[1] : "sg";

  const content = {
    id: {
      title: "Dipercaya Perusahaan Terkemuka",
      p: "Memberikan kinerja yang andal di berbagai lingkungan industri, didukung oleh jaringan mitra industri yang luas.",
    },
    sg: {
      title: "Trusted by Industry Leaders",
      p: "Delivering dependable performance across demanding industrial environments.",
    },
  };

  const logoClass =
    "w-[120px] h-[60px] sm:w-[136px] sm:h-[70px] object-contain";

  const rows = [
    [
      "Japfa.png",
      "STP.png",
      "de-heus.png",
      "MU.png",
      "sido-agung.png",
      "Malindo.png",
    ],
    [
      "Bogasari.png",
      "CJ.png",
      "id_food.png",
      "am.png",
      "SPV.png",
      "kapal-api.png",
    ],
    ["QL.png", "Murti.png", "Bonecom.png", "PCG.png", "CPI.png", "Cargill.png"],
  ];

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
        className="
          relative z-10
          w-full
          flex flex-col
          gap-8 lg:gap-10
          text-center lg:text-left
        "
      >
        {/* TITLE */}
        <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[36px]">
          {content[lang].title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700">{content[lang].p}</p>

        {/* LOGO ROWS */}
        <div className="flex flex-col gap-8">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="
                flex flex-wrap
                justify-center lg:justify-between
                items-center
                gap-x-6 gap-y-6
                w-full
              "
            >
              {row.map((img) => (
                <img
                  key={img}
                  src={`https://apcontrols.com.sg/images/${img}`}
                  alt={img.replace(".png", "")}
                  className={logoClass}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
          <p>dan masih banyak lainnya.</p>

          {/* BUTTON */}
          <button
            onClick={() => router.push(`${lang}/customer`)}
            className="
              mt-8
              border-2 border-[#3A4E84]
              text-[#3A4E84]
              w-[220px] sm:w-[240px]
              h-[56px]
              px-6 py-2.5
              rounded-lg
              font-medium
              hover:bg-[#3A4E84] hover:text-white
              transition
              text-[14px] sm:text-[15px] lg:text-[16px]
              mx-auto lg:mx-0
              w-full
              cursor-pointer
            "
          >
            Lihat Pelanggan Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customer;
