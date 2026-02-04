"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const SgProduct = () => {
  const router = useRouter();
  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";
  return (
    <section className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center gap-10">
        {/* HERO IMAGE */}
        <div
          className="
    relative
    w-full
    max-w-[1258px]
    aspect-[1258/322]
    mx-auto
  "
        >
          <Image
            src="/images/sgproduct.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-contain"
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

        {/* CATEGORY */}
        <div className="w-full text-left">
          <h3 className="font-bold text-xl sm:text-2xl">Solenoid Valves</h3>
        </div>

        {/* LOGOS */}
        <div
          className="
          flex flex-wrap justify-center
          gap-x-8 sm:gap-x-14 lg:gap-x-20
          gap-y-8
        "
        >
          {[
            "metal-work.webp",
            "GSR.webp",
            "Parker.webp",
            "Pentair.webp",
            "Konan.webp",
          ].map((img) => (
            <div
              className="h-12 w-28
                sm:h-14 sm:w-36
                lg:h-[84px] lg:w-[164px] relative"
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
          ))}
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
              font-medium
              transition-colors
              hover:bg-[#3A4E84]
              hover:text-white
              cursor-pointer
            "
            onClick={() => router.push(`/${lang}?contact=true`)}
          >
            Discuss Product Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default SgProduct;
