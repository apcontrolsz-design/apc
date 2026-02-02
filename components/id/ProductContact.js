"use client";
import { title } from "process";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useContactModal } from "../../app/context/ContactModalContext";
const content = {
  title: {
    id: "Tidak menemukan produk yang Anda cari?",
    en: "Can’t find the product you’re looking for?",
  },
  src: "https://apcontrols.com.sg/images/product-contact.png",
  w: 507,
  h: 401,
  p: {
    id: "Silakan hubungi kami untuk solusi yang sesuai dengan kebutuhan Anda.",
    en: "Contact us for solutions tailored to your requirements.",
  },
  button: {
    id: "Hubungi Kami",
    en: "Contact Us",
  },
};

const ProductContact = () => {
  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";
  const { openModal } = useContactModal();

  return (
    <div className="flex flex-row lg:flex-nowrap flex-wrap px-6 py-16 lg:py-0 gap-8 lg:mt-10 mt-2 items-center">
      <img
        src={content.src}
        alt=""
        style={{
          width: `${content.w}px`,
          height: `${content.h}px`,
        }}
        className="
              object-contain
              shrink-0

            "
      />
      <div
        className="
            relative z-10
            w-full lg:w-[825px]
            flex flex-col justify-center
            gap-4 lg:gap-6
            text-center lg:text-left
          "
      >
        <h1 className="font-bold text-[16px] lg:text-[24px] text-justify">
          {content.title[lang]}
        </h1>

        <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] lg:leading-[36px] text-justify">
          {content.p[lang]}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={openModal}
            className="bg-[#3A4E84] text-white w-full sm:w-[240px] h-[56px] rounded-lg font-bold cursor-pointer hover:bg-[#fff] hover:border hover:border-[#3A4E84] hover:text-[#3A4E84]"
          >
            {content.button[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContact;
