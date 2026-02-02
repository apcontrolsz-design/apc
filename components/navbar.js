"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ContactModal from "./contactModal";
import { useContactModal } from "../app/context/ContactModalContext";
import RegionModal from "./RegionModal";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);

  const { openModal } = useContactModal();

  const pathname = usePathname();

  // ambil segment pertama
  const segments = pathname.split("/").filter(Boolean);
  const segment = segments[0];

  // daftar bahasa yang valid
  const allowedLangs = ["id", "en", "sg", "my"];

  // tentukan lang
  const lang = allowedLangs.includes(segment) ? segment : "sg";
  const content = {
    id: {
      home: "Halaman Utama",
      product: "Produk",
      customer: "Pelanggan Kami",
      about: "Tentang Kami",
      changeRegion: "Ganti Wilayah",
      contact: "Hubungi Kami",
    },
    sg: {
      home: "Home",
      product: "Products",
      customer: "Customers",
      about: "About Us",
      changeRegion: "Select Region",
      contact: "Contact Us",
    },
    my: {
      home: "Home",
      about: "About Us",
      changeRegion: "Select Region",
      contact: "Contact Us",
    },
    en: {
      home: "Home",
      product: "Products",
      customer: "Our Customers",
      about: "About Us",
      changeRegion: "Select Region",
      contact: "Contact Us",
    },
  };

  const active = pathname.startsWith("/sg")
    ? "sg"
    : pathname.startsWith("/id-en")
      ? "id-en"
      : pathname.startsWith("/id")
        ? "id"
        : pathname.startsWith("/my")
          ? "my"
          : null;

  return (
    <header className="w-full  bg-white">
      <RegionModal
        open={openRegion}
        onClose={() => setOpenRegion(false)}
        active={active}
      />
      <div className="max-w-[1440px] h-[118px] flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <img
          src="https://apcontrols.com.sg/images/apc-blue.png"
          alt="AP Controls"
          className="
            w-[200px] h-[60px]
            [@media(min-width:1070px)]:w-[260px]
            [@media(min-width:1070px)]:h-[78px]

            object-contain
            object-center
          "
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* Desktop Menu */}
        <div
          className="
            hidden
            [@media(min-width:1070px)]:flex
            items-center
            gap-8 xl:gap-10
          "
        >
          <ul className="flex gap-8 xl:gap-10 text-sm font-medium">
            <li
              className="cursor-pointer hover:text-[#3A4E84]"
              onClick={() => router.push(`/${lang}`)}
            >
              {content[lang].home}
            </li>
            {(lang === "id" || lang === "sg" || lang === "en") && (
              <li
                onClick={() => router.push(`/${lang}/product`)}
                className="cursor-pointer hover:text-[#3A4E84]"
              >
                {content[lang].product}
              </li>
            )}
            {(lang === "id" || lang === "en") && (
              <li
                onClick={() => router.push(`/${lang}/customer`)}
                className="cursor-pointer hover:text-[#3A4E84]"
              >
                {content[lang].customer}
              </li>
            )}
            <li
              onClick={() => router.push(`/${lang}/about`)}
              className="cursor-pointer hover:text-[#3A4E84]"
            >
              {content[lang].about}
            </li>
          </ul>

          <div className="flex gap-4 xl:gap-5 text-sm">
            <button
              className="border border-[#3A4E84] text-[#3A4E84] w-[140px] xl:w-[160px] h-[40px] rounded-lg transition-all duration-300 ease-out
                hover:bg-[#3A4E84] hover:text-white cursor-pointer"
              // onClick={() => router.push("/")}
              onClick={() => setOpenRegion(true)}
            >
              {content[lang].changeRegion}
            </button>
            <button
              onClick={openModal}
              className="bg-[#3A4E84] text-white w-[140px] xl:w-[160px] h-[40px] rounded-lg hover:bg-[#fff] hover:border hover:border-[#3A4E84] hover:text-[#3A4E84] cursor-pointer"
            >
              {content[lang].contact}
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex flex-col gap-1 cursor-pointer
            [@media(min-width:1070px)]:hidden
          "
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            px-6 pb-6 bg-white 
            [@media(min-width:1070px)]:hidden
          "
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li
              className="cursor-pointer"
              onClick={() => router.push(`/${lang}`)}
            >
              {content[lang].home}
            </li>
            {(lang === "id" || lang === "sg" || lang === "en") && (
              <li
                onClick={() => router.push(`/${lang}/product`)}
                className="cursor-pointer"
              >
                {content[lang].product}
              </li>
            )}
            {(lang === "id" || lang === "en") && (
              <li
                onClick={() => router.push(`/${lang}/customer`)}
                className="cursor-pointer"
              >
                {content[lang].customer}
              </li>
            )}

            <li
              onClick={() => router.push(`/${lang}/about`)}
              className="cursor-pointer"
            >
              {content[lang].about}
            </li>
          </ul>

          <div className="flex flex-col gap-4 mt-6 text-sm">
            <button
              className="border border-[#3A4E84] text-[#3A4E84] h-[44px] rounded-lg cursor-pointer transition-all duration-300 ease-out
                hover:bg-[#3A4E84] hover:text-white"
              onClick={() => setOpenRegion(true)}
            >
              {content[lang].changeRegion}
            </button>
            <button
              onClick={openModal}
              className="bg-[#3A4E84] text-white h-[44px] rounded-lg cursor-pointer"
            >
              {content[lang].contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
