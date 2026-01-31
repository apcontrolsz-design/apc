"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/* =======================
   DATA
======================= */
const items = [
  {
    id: "bucket",
    title: "Bucket Elevator",
    images: [
      {
        src: "https://apcontrols.com.sg/images/be.png",
        w: 700,
        h: 427,
      },
      {
        src: "https://apcontrols.com.sg/images/gabah.png",
        w: 418,
        h: 426,
      },
    ],
    fungsi: (
      <>
        Digunakan untuk pengangkatan material curah secara vertikal dari satu
        <br />
        level ke level lainnya. dengan kapasitas dan kecepatan yang dapat <br />{" "}
        disesuaikan dengan kebutuhan proses industri.
      </>
    ),
    material:
      "Gabah, semen, batu bara, pasir, pupuk, mineral, dan material curah lainnya.",
    aplikasi:
      "Semen, pertambangan, pertanian, industri pangan, dan fasilitas penanganan material curah.",
    varian:
      "Tersedia dalam varian belt atau chain yang dapat disesuaikan dengan kebutuhan operasional.",
  },
  {
    id: "drum",
    title: "Drum Pulley",
  },
  {
    id: "chain",
    title: "Chain Conveyor",
  },
];

/* =======================
   MAIN COMPONENT
======================= */
export default function ProductAccordion() {
  const [active, setActive] = useState("bucket");

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="divide-y border-t">
        {items.map((item) => {
          const isOpen = active === item.id;

          return (
            <div key={item.id} className="py-2">
              {/* HEADER */}
              <button
                onClick={() => toggle(item.id)}
                className={`
                  w-full flex justify-between items-center
                  px-6 py-4
                  text-left font-semibold
                  transition
                  ${isOpen ? "border border-[#3A4E84]" : ""}
                `}
              >
                {item.title}
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-[2000px] mt-6" : "max-h-0"}
                `}
              >
                {isOpen && <AccordionContent item={item} />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* =======================
   CONTENT
======================= */
function AccordionContent({ item }) {
  return (
    <div className="px-6 pb-10">
      {/* IMAGES */}
      <div
        className="flex flex-wrap lg:flex-nowrap gap-1
                    sm:gap-2
                    lg:gap-6
                justify-center items-end"
      >
        {item.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            style={{
              width: `${img.w}px`,
              height: `${img.h}px`,
            }}
            className="
              object-contain
              shrink-0

              /* MOBILE */
                max-w-[40vw]
                !h-auto
                min-h-[90px]

                /* DESKTOP */
                lg:max-w-none
                lg:!h-[unset]
                lg:min-h-0
            "
          />
        ))}
      </div>

      {/* TEXT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <div className="">
          <p className="font-bold mb-2">Fungsi</p>
          <p>{item.fungsi}</p>
        </div>

        <div className="">
          <p className="font-bold mb-2">Material yang Ditangani</p>
          <p>{item.material}</p>
        </div>
        <div className="">
          <p className="font-bold mb-2">Aplikasi Industri</p>
          <p>{item.aplikasi}</p>
        </div>
        <div className="">
          <p className="font-bold mb-2">Fungsi</p>
          <p>{item.fungsi}</p>
        </div>
      </div>
    </div>
  );
}
