"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useContactModal } from "../../app/context/ContactModalContext";
import Image from "next/image";

const Customer = () => {
  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";

  const router = useRouter();

  const content = {
    id: {
      title: (
        <>
          Puluhan Tahun Dipercaya Perusahaan <br className="" /> Terkemuka di
          Seluruh Indonesia
        </>
      ),
      p: (
        <>
          Terbukti di berbagai sektor industri dan dipercaya oleh pelanggan,
          berlandaskan pengalaman puluhan tahun. <br /> Berikut adalah sebagian
          pelanggan yang telah mempercayakan kebutuhan mereka kepada kami.
        </>
      ),
      p2: "dan masih banyak pelanggan lainnya yang menghargai kualitas, presisi, dan respon cepat kami.",
      contact: {
        title: "Mari wujudkan proyek dan rencana Anda bersama kami.",
        p: "Pelajari lebih lanjut tentang kami atau hubungi tim kami hari ini.",
        contact: "Hubungi Kami",
        about: "Tentang Kami",
      },
    },

    en: {
      title: "Trusted by Leading Companies Across Indonesia for Decades",
      p: (
        <>
          Proven across various industrial sectors and trusted by customers,
          built on decades of experience. <br /> Below are some of the customers
          who have entrusted their needs to us.
        </>
      ),
      p2: "And many more customers who value our quality, precision, and fast response.",
      contact: {
        title: "Let’s bring your projects and plans to life with us.",
        p: "Learn more about us or contact our team today.",
        contact: "Contact Us",
        about: "About Us",
      },
    },
  };

  const { openModal } = useContactModal();

  const logoClass = "";

  const rows = [
    [
      "Japfa.webp",
      "STP.webp",
      "de-heus.webp",
      "MU.webp",
      "sido-agung.webp",
      "Malindo.webp",
    ],
    [
      "Bogasari.webp",
      "CJ.webp",
      "id_food.webp",
      "am.webp",
      "SPV.webp",
      "kapal-api.webp",
    ],
    [
      "QL.webp",
      "Murti.webp",
      "Bonecom.webp",
      "PCG.webp",
      "CPI.webp",
      "Cargill.webp",
    ],
  ];

  return (
    <>
      <section className="relative w-full h-[480px] sm:h-[600px] lg:h-[870px] flex items-center justify-start px-4 sm:px-6 lg:px-8 lg:py-16">
        {/* BACKGROUND IMAGE FULL WIDTH */}
        <Image
          src="/images/apc-customer-bg.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center -z-10"
        />

        {/* CONTENT WRAPPER */}
        <div className="relative w-full max-w-[1440px] mx-auto text-center">
          <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] mb-4 text-start text-white">
            {content[lang].title}
          </h2>
          {/* Bisa tambah konten lain di sini */}
        </div>
      </section>

      {/* section 2 */}

      <section
        className="
            relative max-w-[1440px] mx-auto
            px-4 sm:px-6
            mt-10
    
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
          {/* DESCRIPTION */}
          <p className="leading-[36px]">{content[lang].p}</p>

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
                  <div className="relative w-[120px] h-[60px] sm:w-[136px] sm:h-[70px]">
                    <Image
                      key={img}
                      src={`/images/${img}`}
                      alt={img.replace(".webp", "")}
                      className="object-contain"
                      loading="lazy"
                      fill
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            ))}
            <p>{content[lang].p2}</p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section
        className="
            relative max-w-[1440px] mx-auto
            px-4 sm:px-6 lg:px-8 py-16
           
    
        "
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <div
              className="relative w-[220px] sm:w-[250px] lg:w-[274px] h-[290px] sm:h-[330px] lg:h-[367px]
        pointer-events-none"
            >
              <Image
                src="/images/customer-id.webp"
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
          </div>

          {/* TEXT */}
          <div
            className="
      w-full lg:max-w-[825px]
      flex flex-col justify-center
      gap-4 lg:gap-6
      text-center lg:text-left
    "
          >
            <h2 className="font-bold text-[22px] sm:text-[24px]">
              {content[lang].contact.title}
            </h2>

            <p
              className="
      text-[14px] sm:text-[15px] lg:text-[16px]
      leading-[26px] sm:leading-[28px] lg:leading-[36px]
      max-w-[600px]
      mx-auto lg:mx-0
      text-justify
    "
            >
              {content[lang].contact.p}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="
          bg-[#3A4E84] text-white
          w-full sm:w-[240px] h-[56px]
          rounded-lg font-bold
          cursor-pointer
          hover:bg-[#fff] hover:border hover:border-[#3A4E84] hover:text-[#3A4E84]
          transition
        "
              >
                {content[lang].contact.contact}
              </button>

              <button
                onClick={() => router.push(`/${lang}/about`)}
                className="
          border border-[#3A4E84] text-[#3A4E84]
          w-full sm:w-[240px] h-[56px]
          rounded-lg font-bold
          cursor-pointer
          hover:bg-[#3A4E84] hover:text-white
          transition
        "
              >
                {content[lang].contact.about}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
