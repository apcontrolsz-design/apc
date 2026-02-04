"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useContactModal } from "../../app/context/ContactModalContext";
import Image from "next/image";

const Brand = () => {
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

  return (
    <section className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center gap-10">
        {/* HERO IMAGE */}
        <div
          className="w-full
            relative
            max-w-[1258px]
            h-[322px]"
        >
          <Image
            src="/images/my-brand.webp"
            alt=""
            aria-hidden="true"
            className="
            
            object-contain
          "
            fill
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        {/* TITLE */}
        <div className="w-full text-left">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[36px]">
            Product Brands We Represent
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="w-full text-left">
          <p className="text-base sm:text-lg text-gray-700 ">
            We partner with established international manufacturers to deliver
            proven industrial components across critical applications.
          </p>
        </div>

        {/* LOGOS */}
        <div className="flex flex-col justify-start w-full">
          <div
            className="
          flex flex-wrap justify-center lg:justify-start
          gap-x-8 sm:gap-x-14 lg:gap-x-20
          gap-y-8
        "
          >
            {["metal-work.webp", "GSR.webp", "Parker.webp", "SMC.webp"].map(
              (img) => (
                <div
                  className="relative h-12 w-28
                sm:h-14 sm:w-36
                lg:h-[84px] lg:w-[164px]"
                >
                  <Image
                    key={img}
                    src={`/images/${img}`}
                    alt={img.replace(".webp", "")}
                    className=" 
                      object-contain
                    "
                    fill
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ),
            )}
          </div>

          <div
            className="
          flex flex-wrap justify-center lg:justify-start
          gap-x-8 sm:gap-x-14 lg:gap-x-20
          gap-y-8
        "
          >
            {["Coax.webp", "Mecair.webp", "MPM.webp", "stif.webp"].map(
              (img) => (
                <div
                  className="relative h-12 w-28
                sm:h-14 sm:w-36
                lg:h-[84px] lg:w-[164px]"
                >
                  <Image
                    key={img}
                    src={`/images/${img}`}
                    alt={img.replace(".webp", "")}
                    className="
                
                object-contain
              "
                    fill
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* CTA TEXT */}
        <div className="w-full text-left">
          <p className="text-gray-700">
            Can’t find a product from your preferred brand? Get in touch with
            us.
          </p>
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-start">
          <button
            className="
              w-full sm:w-[280px]
              h-[56px]
              border border-[#3A4E84]
              text-[#3A4E84]
              rounded-lg
              font-bold
              transition-colors
              hover:bg-[#3A4E84]
              hover:text-white
              cursor-pointer

            "
            onClick={openModal}
          >
            Discuss Product Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brand;
