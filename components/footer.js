"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const langMap = {
    id: "id",
    sg: "sg",
    my: "my",
    "id-en": "id_en",
  };
  const lang = langMap[segments[1]] || "sg";
  const content = {
    id: {
      address:
        "Jl. Ratna Jatibening No. 1A Jatibening, Pondok Gede\nBekasi, 17412",
      phone: "+62 21 8499 6745",
      email: "indo.sales@apcontrols.com.sg",
    },
    id_en: {
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
      className="
    relative max-w-[1440px] mx-auto
    min-h-[376px]
    bg-black
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
          <img
            src="https://apcontrols.com.sg/images/apc-white.png"
            alt="AP Controls"
            className="w-[200px] sm:w-[238px] h-[74px] object-contain mx-auto sm:mx-0"
            loading="lazy"
            decoding="async"
          />
          <img
            src="https://apcontrols.com.sg/images/vs-white.png"
            alt="Valve Store"
            className="w-[200px] sm:w-[238px] h-[74px] object-contain mx-auto sm:mx-0"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* COPYRIGHT — NOW IT WORKS */}
      <p className="text-white text-center text-sm mt-auto pt-8">
        ©2026 <strong>AP Controls</strong>
      </p>
    </section>
  );
};

export default Footer;
