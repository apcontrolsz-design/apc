"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useContactModal } from "../../app/context/ContactModalContext";

const Customer = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lang = ["id", "sg", "my"].includes(segments[1]) ? segments[1] : "sg";
  const router = useRouter();

  const { openModal } = useContactModal();

  const button = {
    id: { contact: "Hubungi Kami", product: "Jelajahi Produk Kami" },
    sg: { contact: "Contact Us", product: "Explore Our Products" },
    my: { contact: "Contact Us", product: "Explore Our Products" },
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
    <>
      <section
        className="
            relative max-w-[1440px] mx-auto
            h-[480px] sm:h-[600px] lg:h-[870px]
            px-4 sm:px-6 lg:px-8 lg:py-16 py-4
            flex items-center justify-start
            bg-no-repeat bg-center bg-contain
        "
        style={{
          backgroundImage:
            "url('https://apcontrols.com.sg/images/apc-customer-bg.png')",
        }}
      >
        {/* CONTENT */}
        <div className="text-center max-w-[800px]">
          <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] mb-4 text-start text-white">
            Puluhan Tahun Dipercaya Perusahaan Terkemuka di Seluruh Indonesia
          </h2>
        </div>
      </section>
      {/* section 2 */}

      <section
        className="
            relative max-w-[1440px] mx-auto
            px-4 sm:px-6
       
    
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
          <p className="leading-[36px]">
            Terbukti di berbagai sektor industri dan dipercaya oleh pelanggan,
            berlandaskan pengalaman puluhan tahun. <br />
            Berikut adalah sebagian pelanggan yang telah mempercayakan kebutuhan
            mereka kepada kami.
          </p>

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
            <p>
              dan masih banyak pelanggan lainnya yang menghargai kualitas,
              presisi, dan respon cepat kami.
            </p>
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
            <img
              src="https://apcontrols.com.sg/images/customer-id.png"
              alt=""
              aria-hidden="true"
              className="
        w-[220px] sm:w-[250px] lg:w-[274px]
        h-auto
        object-contain
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
      w-full lg:max-w-[825px]
      flex flex-col justify-center
      gap-4 lg:gap-6
      text-center lg:text-left
    "
          >
            <h2 className="font-bold text-[22px] sm:text-[24px]">
              Mari wujudkan proyek dan rencana Anda bersama kami.
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
              Pelajari lebih lanjut tentang kami atau hubungi tim kami hari ini.
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
                Hubungi Kami
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
                Tentang Kami
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
