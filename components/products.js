"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
/* =======================
   DATA
======================= */
const products = [
  {
    title: "Bucket Elevator",
    img: "https://apcontrols.com.sg/images/be.png",
    fungsi:
      "Digunakan untuk mengangkat material curah secara vertikal dari satu level ke level lainnya.",
    material:
      "Gabah, semen, batu bara, pasir, pupuk, mineral, dan material curah lainnya.",
    aplikasi:
      "Semen, pertambangan, pembangkit listrik, pertanian, industri pangan, dan fasilitas penanganan material curah.",
  },
  {
    title: "Drum Pulley",
    img: "https://apcontrols.com.sg/images/drum-pulley.png",
    fungsi:
      "Digunakan sebagai penggerak atau penegang pada sistem  || elevator belt.",
    sistem:
      "Slide lagging dirancang dalam bentuk segmen yang mudah || dilepas dan dipasang kembali, sehingga memungkinkan || penggantian lagging yang sudah aus tanpa perlu membongkar || drum pulley secara keseluruhan. Sistem ini mengurangi downtime || dan mempermudah proses perawatan di lapangan.",
  },
  {
    title: "Chain Conveyor",
    img: "https://apcontrols.com.sg/images/cc.png",
    fungsi:
      "Berfungsi untuk memindahkan material curah secara horizontal atau dengan kemiringan ringan menggunakan sistem rantai.",
    material:
      "Clinker, batu bara, abu, scrap, material panas, dan material berat atau abrasif.",
    aplikasi:
      "Semen, baja, pembangkit listrik, pertambangan, dan industri berat.",
  },
  {
    title: "Screw Conveyor",
    img: "https://apcontrols.com.sg/images/screw-conveyor.png",
    fungsi:
      "Digunakan untuk memindahkan material curah melalui ulir || berputar di dalam pipa atau trough tertutup.",
    material:
      "Serbuk dan granula seperti tepung, semen, fly ash, pasir, || biomassa, dan bahan kimia.",
    aplikasi:
      "Pangan & minuman, semen, kimia, farmasi, pertanian, dan || pengolahan limbah.",
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
  const segments = pathname.split("/");
  const lang = ["id", "sg", "my"].includes(segments[1]) ? segments[1] : "sg";

  const next = () => setIndex((prev) => (prev + 1) % products.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);

  const product = products[index];

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
          <h2 className="font-bold text-2xl lg:text-3xl ">{product.title}</h2>

          <div className="space-y-4">
            <div>
              <p className="font-bold  mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                Fungsi
              </p>
              <ResponsiveText text={product.fungsi} />
            </div>

            {product.sistem && (
              <div>
                <p className="font-bold  mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                  Sistem Slide Lagging
                </p>
                <ResponsiveText text={product.sistem} />
              </div>
            )}

            {product.material && (
              <div>
                <p className="font-bold mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                  Material yang Ditangani
                </p>
                <ResponsiveText text={product.material} />
              </div>
            )}

            {product.aplikasi && (
              <div>
                <p className="font-bold mb-1 text-[14px] sm:text-[15px] lg:text-[16px]">
                  Aplikasi Industri
                </p>
                <ResponsiveText text={product.aplikasi} />
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:scale-110 transition"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:scale-110 transition"
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

      <button
        onClick={() => router.push(`/${lang}/product`)}
        className="mt-6 border-2 border-[#3A4E84] text-[#3A4E84]  w-full sm:w-[240px] h-[56px] px-6 py-2.5 rounded-lg font-medium hover:bg-[#3A4E84] hover:text-white transition text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer"
      >
        Lihat Semua Produk
      </button>
    </div>
  );
};

export default ProductCarousel;
