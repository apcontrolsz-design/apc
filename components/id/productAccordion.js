"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
/* =======================
   DATA
======================= */
const items = [
  {
    id: "bucket",
    title: {
      id: "Bucket Elevator",
      en: "Bucket Elevator",
    },
    images: [
      {
        src: "/images/be.webp",
        w: 700,
        h: 427,
      },
      {
        src: "/images/gabah.webp",
        w: 418,
        h: 426,
      },
    ],
    fungsi: {
      title: { id: "Fungsi", en: "Function" },
      desc: {
        id: (
          <>
            Digunakan untuk pengangkatan material curah secara vertikal dari
            satu
            <br />
            level ke level lainnya. dengan kapasitas dan kecepatan yang dapat{" "}
            <br /> disesuaikan dengan kebutuhan proses industri.
          </>
        ),
        en: (
          <>
            Designed to vertically elevate bulk materials from one level to
            another.
          </>
        ),
      },
    },
    material: {
      title: { id: "Material yang Ditangani", en: "Materials Handled" },
      desc: {
        id: "Gabah, semen, batu bara, pasir, pupuk, mineral, dan material curah lainnya.",
        en: "Rice grain, cement, coal, sand, fertilizer, minerals, and other bulk materials.",
      },
    },
    aplikasi: {
      title: { id: "Aplikasi Industri", en: "Industrial Applications" },
      desc: {
        id: "Semen, pertambangan, pertanian, industri pangan, dan fasilitas penanganan material curah.",
        en: "Cement, mining, power generation, agriculture, food processing, and bulk material handling facilities.",
      },
    },
    varian: {
      title: { id: "Varian Bucket Elevator", en: "Variants" },
      desc: {
        id: "Tersedia dalam varian belt atau chain yang dapat disesuaikan dengan kebutuhan operasional.",
        en: "Our bucket elevators are available in belt or chain configurations, tailored to material characteristics, capacity requirements, and operating conditions.",
      },
    },
  },
  {
    id: "drum",
    title: { id: "Drum Pulley", en: "Drum Pulley" },
    images: [
      {
        src: "/images/drum-pulley-1.webp",
        w: 358,
        h: 276,
      },
      {
        src: "/images/drum-pulley-2.webp",
        w: 372,
        h: 217,
      },
      {
        src: "/images/drum-pulley-3.webp",
        w: 378,
        h: 293,
      },
    ],
    fungsi: {
      title: {
        id: "Fungsi",
        en: "Function",
      },
      desc: {
        id: "Digunakan sebagai penggerak pada sistem elevator belt.",
        en: "Used as a drive component in belt elevator systems.",
      },
    },
    material: {
      title: {
        id: "Drum Pulley Full Lagging",
        en: "Drum Pulley Full Lagging",
      },
      desc: {
        id: "Seluruh permukaan drum dilapisi lagging untuk meningkatkan friksi, mengurangi slip, dan mendukung aplikasi dengan beban kerja tinggi.",
        en: "The entire drum surface is lagged to increase friction, reduce belt slippage, and support heavy-duty applications.",
      },
    },
    aplikasi: {
      title: {
        id: "Varian Drum Pulley",
        en: "Variants",
      },
      desc: {
        id: "Drum pulley dengan beberapa opsi pelapisan (lagging) yang dapat disesuaikan dengan kebutuhan aplikasi dan operasional.",
        en: "Drum pulleys are available with multiple lagging options to suit specific application and operating requirements.",
      },
    },
    varian: {
      title: {
        id: "Drum Pulley Slide Lagging",
        en: "Drum Pulley Slide Lagging",
      },
      desc: {
        id: "Lagging diaplikasikan secara sebagian/segmented untuk kemudahan perawatan dan penggantian.",
        en: "Lagging is applied in partial or segmented form to allow easier maintenance and replacement.",
      },
    },
  },
  {
    id: "chain",
    title: { id: "Chain Conveyor", en: "Chain Conveyor" },
    images: [
      {
        src: "https://apcontrols.com.sg/images/chain-conveyor-1.webp",
        w: 484,
        h: 180,
      },
      {
        src: "https://apcontrols.com.sg/images/chain-conveyor-2.webp",
        w: 418,
        h: 216,
      },
    ],
    fungsi: {
      title: {
        id: "Fungsi",
        en: "Function",
      },
      desc: {
        id: "Berfungsi untuk memindahkan material curah secara horizontal atau dengan kemiringan ringan menggunakan sistem rantai.",
        en: "Designed to convey bulk materials horizontally or at a slight incline using a chain-driven system.",
      },
    },
    material: {
      title: {
        id: "Material yang Ditangani",
        en: "Materials Handled",
      },
      desc: {
        id: "Clinker, batu bara, abu, scrap, material panas, dan material berat atau abrasif.",
        en: "Clinker, coal, ash, scrap, hot materials, and other heavy or abrasive materials.",
      },
    },
    aplikasi: {
      title: {
        id: "Aplikasi Industri",
        en: "Industrial Applications",
      },
      desc: {
        id: "Semen, baja, pembangkit listrik, pertambangan, dan industri berat.",
        en: "Cement, steel, power generation, mining, and heavy industries.",
      },
    },

    varian: {
      title: {
        id: "Varian Chain Conveyor",
        en: "Variants",
      },
      desc: {
        id: "Tersedia dalam berbagai varian, meliputi single strand, double strand, slat chain, drag chain, serta heavy duty chain conveyor, yang dapat disesuaikan dengan kebutuhan aplikasi dan beban operasional.",
        en: "Available in various configurations, including single strand, double strand, slat chain, drag chain, and heavy-duty chain conveyors, tailored to application requirements and operating loads.",
      },
    },
  },
  {
    id: "Screw Conveyor",
    title: {
      id: "Screw Conveyor",
      en: "Screw Conveyor",
    },
    images: [
      {
        src: "/images/screw-conveyor-3.webp",
        w: 206,
        h: 291,
      },
      {
        src: "/images/screw-conveyor-2.webp",
        w: 627,
        h: 266,
      },
      {
        src: "/images/screw-conveyor-1.webp",
        w: 332,
        h: 266,
      },
    ],
    fungsi: {
      title: {
        id: "Fungsi",
        en: "Function",
      },
      desc: {
        id: "Digunakan untuk memindahkan material curah melalui ulir berputar di dalam pipa atau trough tertutup.",
        en: "Used to convey bulk materials through a rotating screw within a closed pipe or trough.",
      },
    },
    material: {
      title: {
        id: "Material yang Ditangani",
        en: "Materials Handled",
      },

      desc: {
        id: "Serbuk dan granula seperti tepung, semen, fly ash, pasir, biomassa, dan bahan kimia.",
        en: "Powders and granules such as flour, cement, fly ash, sand, biomass, and chemicals.",
      },
    },
    aplikasi: {
      title: {
        id: "Aplikasi Industri",
        en: "Industrial Applications",
      },
      desc: {
        id: "Pangan & minuman, semen, kimia, farmasi, pertanian, dan pengolahan limbah.",
        en: "Food & beverage, cement, chemical, pharmaceutical, agriculture, and waste processing industries.",
      },
    },
    varian: {
      title: {
        en: "Variants",
        id: "Varian Chain Conveyor",
      },
      desc: {
        id: "Screw conveyor tersedia dalam beberapa varian, termasuk horizontal, inclined, dan vertical, dengan opsi desain dan spesifikasi yang dapat disesuaikan dengan karakteristik material, kapasitas aliran, serta kondisi operasional.",
        en: "Screw conveyors are available in horizontal, inclined, and vertical configurations, with design and specification options tailored to material characteristics, throughput capacity, and operating conditions.",
      },
    },
  },
  {
    id: "Belt Conveyor",
    title: {
      id: "Belt Conveyor",
      en: "Belt Conveyor",
    },
    images: [
      {
        src: "/images/belt-conveyor-1.webp",
        w: 350,
        h: 233,
      },
      {
        src: "/images/belt-conveyor-2.webp",
        w: 436,
        h: 245,
      },
      {
        src: "/images/belt-conveyor-3.webp",
        w: 292,
        h: 164,
      },
    ],
    fungsi: {
      title: {
        id: "Fungsi",
        en: "Function",
      },
      desc: {
        id: "Memindahkan material secara kontinu dari satu titik ke titik lainnya, baik secara horizontal maupun dengan kemiringan tertentu.",
        en: "Continuously conveys materials from one point to another, either horizontally or at an inclined angle.",
      },
    },
    material: {
      title: { id: "Material yang Ditangani", en: "Materials Handled" },
      desc: {
        id: "Pasir, batu bara, bijih, grain, serta material satuan atau kemasan seperti karung, box, dan pallet.",
        en: "Sand, coal, ore, grain, as well as unit or packaged materials such as bags, boxes, and pallets.",
      },
    },
    aplikasi: {
      title: {
        id: "Aplikasi Industri",
        en: "Industrial Applications",
      },
      desc: {
        id: "Industri pertambangan, semen, pupuk, food & beverage, pembangkit listrik, manufaktur, serta logistik dan pergudangan.",
        en: "Mining, cement, fertilizer, food & beverage, power generation, manufacturing, and logistics & warehousing industries.",
      },
    },
    varian: {
      title: {
        id: "Varian Belt Conveyor",
        en: "Variants",
      },
      desc: {
        id: "Tersedia dalam varian flat, inclined, troughed, dan cleated, sesuai kebutuhan aplikasi dan material.",
        en: "Available in flat, inclined, troughed, and cleated configurations to suit application and material requirements.",
      },
    },
  },
  {
    id: "Slide Gate",
    title: {
      id: "Slide Gate",
      en: "Slide Gate",
    },
    images: [
      {
        src: "/images/slide-gate.webp",
        w: 947,
        h: 320,
      },
    ],
    fungsi: {
      title: {
        id: "Fungsi",
        en: "Function",
      },
      desc: {
        id: "Digunakan untuk mengatur, membuka, dan menutup aliran material curah secara terkontrol pada sistem handling material.",
        en: "Used to regulate, open, and shut off the flow of bulk materials in a controlled manner within material handling systems.",
      },
    },
    material: {
      title: {
        id: "Material yang Ditangani",
        en: "Materials Handled",
      },
      desc: {
        id: "Material curah kering seperti pasir, semen, batu bara, grain, pupuk, dan material granular lainnya.",
        en: "Dry bulk materials such as sand, cement, coal, grain, fertilizer, and other granular materials.",
      },
    },
    aplikasi: {
      title: {
        id: "Aplikasi Industri",
        en: "Industrial Applications",
      },
      desc: {
        id: "Digunakan pada industri semen, pertambangan, pembangkit listrik, pupuk, food & beverage, serta sistem conveying dan storage material curah.",
        en: "Used in cement, mining, power generation, fertilizer, food & beverage industries, as well as bulk material conveying and storage systems.",
      },
    },
    varian: {
      title: {
        id: "Varian Slide Gate",
        en: "Variants",
      },
      desc: {
        id: "Tersedia dalam varian tuas putar manual, pneumatic atau hydraulic, dan electric actuator, dengan opsi ukuran dan material konstruksi sesuai kebutuhan.",
        en: "Available with manual handwheel, pneumatic or hydraulic, and electric actuator options, with sizes and construction materials configurable to suit application requirements.",
      },
    },
  },
  {
    id: "dust-c",
    title: {
      id: "Dust Collector",
      en: "Dust Collector",
    },
    images: [
      {
        src: "/images/dust-collector-1.webp",
        w: 338,
        h: 357,
      },
      {
        src: "/images/dust-collector-2.webp",
        w: 297,
        h: 371,
      },
    ],
    fungsi: {
      title: {
        id: "Fungsi",
        en: "Function",
      },
      desc: {
        id: "Menangkap dan mengendalikan debu dari proses industri untuk menjaga kebersihan dan keselamatan kerja.",
        en: "Captures and controls dust generated from industrial processes to maintain workplace cleanliness and safety.",
      },
    },
    material: {
      title: {
        id: "Material yang Ditangani",
        en: "Materials Handled",
      },
      desc: {
        id: "Debu dan partikel halus dari material kering seperti semen, batu bara, kayu, logam, dan grain.",
        en: "Dust and fine particles from dry materials such as cement, coal, wood, metal, and grain.",
      },
    },
    aplikasi: {
      title: {
        id: "Aplikasi Industri",
        en: "Industrial Applications",
      },
      desc: {
        id: "Industri semen, pertambangan, baja, pembangkit listrik, wood processing, dan food & beverage.",
        en: "Cement, mining, steel, power generation, wood processing, and food & beverage industries.",
      },
    },
  },
  {
    id: "other",
    title: {
      id: "Lain-Lain",
      en: "Others",
    },
    images: [
      {
        src: "/images/other-1.webp",
        w: 513,
        h: 322,
      },
      {
        src: "/images/other-2.webp",
        w: 472,
        h: 265,
      },
    ],
    p: {
      id: "AP Controls juga mampu melakukan fabrikasi peralatan dan mesin industri, termasuk struktur dan unit berukuran besar, serta menyediakan berbagai komponen pendukung operasional, mulai dari filter bag, komponen rubber moulded, hingga kebutuhan pendukung lainnya untuk beragam aplikasi industri.",
      en: "AP Controls is also capable of fabricating industrial equipment and machinery, including large-scale structures and units, and supplies a wide range of operational support components, from filter bags and rubber-moulded components to other supporting needs for various industrial applications.",
    },
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

  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";

  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6">
      <div className="divide-y border-b border-[#DFDFDF] divide-[#DFDFDF]">
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
                {item.title[lang]}
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-[2000px] mt-6" : "max-h-0"}
                `}
              >
                {isOpen &&
                  (() => {
                    switch (item.id) {
                      case "dust-c":
                        return (
                          <DustCAccordionContent item={item} lang={lang} />
                        );

                      case "other":
                        return (
                          <OtherAccordionContent item={item} lang={lang} />
                        );

                      default:
                        return <AccordionContent item={item} lang={lang} />;
                    }
                  })()}
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
function AccordionContent({ item, lang }) {
  return (
    <div className="px-6 pb-10 sm:text-[15px] lg:text-[16px]">
      {/* IMAGES */}
      <div
        className="flex flex-wrap lg:flex-nowrap gap-1
                    sm:gap-2
                    lg:gap-6
                justify-start items-end"
      >
        {item.images.map((img, i) => (
          <div key={i} className="">
            <Image
              src={img.src}
              alt=""
              width={img.w}
              height={img.h}
              className={`
        object-contain shrink-0

        /* MOBILE */
        max-w-[40vw] !h-auto min-h-[90px]

        /* DESKTOP */
        lg:max-w-none lg:!h-[unset] lg:min-h-0
      `}
            />
          </div>
        ))}
      </div>

      {/* TEXT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <div className="">
          <p className="font-bold mb-2">{item.fungsi.title[lang]}</p>
          <p>{item.fungsi.desc[lang]}</p>
        </div>

        <div className="">
          <p className="font-bold mb-2">{item.material.title[lang]}</p>
          <p>{item.material.desc[lang]}</p>
        </div>
        <div className="">
          <p className="font-bold mb-2">{item.aplikasi.title[lang]}</p>
          <p>{item.aplikasi.desc[lang]}</p>
        </div>
        <div className="">
          <p className="font-bold mb-2">{item.varian.title[lang]}</p>
          <p>{item.varian.desc[lang]}</p>
        </div>
      </div>
    </div>
  );
}
function DustCAccordionContent({ item, lang }) {
  return (
    <div className="px-6 pb-10 text-[14px] sm:text-[15px] lg:text-[16px]">
      {/* IMAGES */}
      <div
        className="flex flex-wrap lg:flex-nowrap gap-1
                    sm:gap-2
                    lg:gap-6
                justify-start items-start"
      >
        {item.images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt=""
            width={img.w}
            height={img.h}
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

        {/* TEXT */}
        <div className="flex flex-col items-center gap-10">
          <div className="">
            <p className="font-bold mb-2">{item.fungsi.title[lang]}</p>
            <p>{item.fungsi.desc[lang]}</p>
          </div>

          <div className="">
            <p className="font-bold mb-2">{item.material.title[lang]}</p>
            <p>{item.material.desc[lang]}</p>
          </div>
          <div className="">
            <p className="font-bold mb-2">{item.aplikasi.title[lang]}</p>
            <p>{item.aplikasi.desc[lang]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OtherAccordionContent({ item, lang }) {
  return (
    <div className="px-6 pb-10 text-[14px] sm:text-[15px] lg:text-[16px]">
      {/* IMAGES */}
      <div
        className="flex flex-wrap lg:flex-nowrap gap-1
                    sm:gap-2
                    lg:gap-6
                justify-start items-start"
      >
        {item.images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt=""
            width={img.w}
            height={img.h}
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
      <div className="flex flex-col items-center gap-10">
        <div className="mt-10">
          <p>{item.p[lang]}</p>
        </div>
      </div>
    </div>
  );
}
