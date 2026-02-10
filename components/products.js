"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
/* =======================
   DATA
======================= */
const products = [
  {
    key: "bucket-elevator",
    img: "/images/be.webp",
    content: {
      id: {
        title: "Bucket Elevator",
        fungsi:
          "Digunakan untuk mengangkat material curah secara vertikal dari satu level ke level lainnya.",
        material:
          "Gabah, semen, batu bara, pasir, pupuk, mineral, dan material curah lainnya.",
        aplikasi:
          "Semen, pertambangan, pembangkit listrik, pertanian, industri pangan, dan fasilitas penanganan material curah.",
      },
      id_en: {
        title: "Bucket Elevator",
        fungsi:
          "Designed to vertically elevate bulk materials from one level to another.",
        material:
          "Rice grain, cement, coal, sand, fertilizer, minerals, and other bulk materials.",
        aplikasi:
          "Cement, mining, power generation, agriculture, food processing, and bulk material handling facilities.",
      },
    },
  },

  {
    key: "drum-pulley",
    img: "/images/drum-pulley.webp",
    content: {
      id: {
        title: "Drum Pulley",
        fungsi:
          "Digunakan sebagai penggerak atau penegang pada sistem || elevator belt.",
        sistem:
          "Slide lagging dirancang dalam bentuk segmen yang mudah || dilepas dan dipasang kembali, sehingga memungkinkan || penggantian lagging yang sudah aus tanpa perlu membongkar || drum pulley secara keseluruhan. Sistem ini mengurangi downtime || dan mempermudah proses perawatan di lapangan.",
      },
      id_en: {
        title: "Drum Pulley",
        fungsi: "Used as a drive component in belt elevator systems.",
        sistem:
          "Drum pulleys are available with various lagging options to suit application and operating requirements, including full lagging and slide lagging.",
      },
    },
  },

  {
    key: "chain-conveyor",
    img: "/images/cc.webp",
    content: {
      id: {
        title: "Chain Conveyor",
        fungsi:
          "Berfungsi untuk memindahkan material curah secara horizontal atau dengan kemiringan ringan menggunakan sistem rantai.",
        material:
          "Clinker, batu bara, abu, scrap, material panas, dan material berat atau abrasif.",
        aplikasi:
          "Semen, baja, pembangkit listrik, pertambangan, dan industri berat.",
      },
      id_en: {
        title: "Chain Conveyor",
        fungsi:
          "Designed to convey bulk materials horizontally or at a slight incline using a chain-driven system.",
        material:
          "Clinker, coal, ash, scrap, hot materials, and other heavy or abrasive materials.",
        aplikasi:
          "Cement, steel, power generation, mining, and heavy industries.",
      },
    },
  },

  {
    key: "screw-conveyor",
    img: "/images/screw-conveyor.webp",
    content: {
      id: {
        title: "Screw Conveyor",
        fungsi:
          "Digunakan untuk memindahkan material curah melalui ulir || berputar di dalam pipa atau trough tertutup.",
        material:
          "Serbuk dan granula seperti tepung, semen, fly ash, pasir, || biomassa, dan bahan kimia.",
        aplikasi:
          "Pangan & minuman, semen, kimia, farmasi, pertanian, dan || pengolahan limbah.",
      },
      id_en: {
        title: "Screw Conveyor",
        fungsi:
          "Used to convey bulk materials through a rotating screw within a closed pipe or trough.",
        material:
          "Powders and granules such as flour, cement, fly ash, sand, biomass, and chemicals.",
        aplikasi:
          "Food & beverage, cement, chemical, pharmaceutical, agriculture, and waste processing industries.",
      },
    },
  },
  {
    key: "belt-conveyor",
    img: "/images/belt-conveyor.webp",
    content: {
      id: {
        title: "Belt Conveyor",
        fungsi:
          "Memindahkan material secara kontinu dari satu titik ke titik lainnya, baik secara horizontal maupun dengan kemiringan tertentu.",
        material:
          "Material curah seperti pasir, batu bara, bijih, grain, serta material satuan atau kemasan seperti karung, box, dan pallet.",
        aplikasi:
          "Industri pertambangan, semen, pupuk, food & beverage, pembangkit listrik, manufaktur, serta logistik dan pergudangan.",
      },
      id_en: {
        title: "Belt Conveyor",
        fungsi:
          "Continuously transfers materials from one point to another, either horizontally or at an inclined angle.",
        material:
          "Bulk materials such as sand, coal, ore, and grain, as well as unit or packaged materials including bags, boxes, and pallets.",
        aplikasi:
          "Mining, cement, fertilizer, food & beverage, power generation, manufacturing, and logistics & warehousing industries.",
      },
    },
  },
];

/* =======================
   HELPER COMPONENT
======================= */
const ResponsiveText = ({ text }) => {
  if (!text) return null;

  const parts = text.split("||");

  return (
    <p className="text-[14px] sm:text-[15px] lg:text-[16px]">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part.trim()}
          {index !== parts.length - 1 && <span className="hidden lg:block" />}
        </React.Fragment>
      ))}
    </p>
  );
};

/* =======================
   MAIN COMPONENT
======================= */

const ProductCarousel = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";

  const labels = {
    id: {
      fungsi: "Fungsi",
      material: "Material yang Ditangani",
      aplikasi: "Aplikasi Industri",
      sistem: "Sistem Slide Lagging",
    },
    en: {
      fungsi: "Function",
      material: "Materials Handled",
      aplikasi: "Industrial Applications",
      sistem: "Variants",
    },
  };

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);

  const product = products[index];
  const t = product.content[lang] || product.content.id;
  const tLabel = labels[lang] || labels.id;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 8000); // 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-8">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* TEXT SECTION */}
        <div className="lg:w-1/2 w-full space-y-4">
          <h2 className="font-bold text-2xl lg:text-3xl ">{t.title}</h2>

          <div className="space-y-4">
            <div className="leading-[36px]">
              <p className="font-bold  mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                {tLabel.fungsi}
              </p>
              <ResponsiveText text={t.fungsi} />
            </div>

            {t.sistem && (
              <div className="leading-[36px]">
                <p className="font-bold  mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                  {tLabel.sistem}
                </p>
                <ResponsiveText text={t.sistem} />
              </div>
            )}

            {t.material && (
              <div className="leading-[36px]">
                <p className="font-bold mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                  {tLabel.material}
                </p>
                <ResponsiveText text={t.material} />
              </div>
            )}

            {t.aplikasi && (
              <div className="leading-[36px]">
                <p className="font-bold mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                  {tLabel.aplikasi}
                </p>
                <ResponsiveText text={t.aplikasi} />
              </div>
            )}
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-[700px] h-[333px] flex items-center justify-center">
            <img
              src={product.img}
              alt={product.title}
              className="max-w-full max-h-full object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />

            {/* NAV BUTTONS */}
            <button
              onClick={prev}
              className="absolute -left-[20px] lg:-left-[60px] top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:scale-110 transition"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="absolute -right-[20px] top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:scale-110 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
        h-3 w-3 rounded-full
        transition-all duration-300
        cursor-pointer
        ${
          i === index
            ? "bg-[#3A4E84]"
            : "border border-[#545454] bg-transparent"
        }
      `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {lang === "id" && (
        <button
          onClick={() => router.push(`/${lang}/product`)}
          className="mt-6 border-2 border-[#3A4E84] text-[#3A4E84]  w-full sm:w-[240px] h-[56px] px-6 py-2.5 rounded-lg font-medium hover:bg-[#3A4E84] hover:text-white transition text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer font-bold"
        >
          Lihat Semua Produk
        </button>
      )}

      {lang === "en" && (
        <button
          onClick={() => router.push(`/${lang}/product`)}
          className="mt-6 border-2 border-[#3A4E84] text-[#3A4E84]  w-full sm:w-[240px] h-[56px] px-6 py-2.5 rounded-lg font-medium hover:bg-[#3A4E84] hover:text-white transition text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer font-bold"
        >
          Explore All Products
        </button>
      )}
    </div>
  );
};

export default ProductCarousel;
