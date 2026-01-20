"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ContactModal from "./contactModal";
import { useContactModal } from "../app/context/ContactModalContext";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { openModal } = useContactModal();

  const pathname = usePathname();
  const locale = pathname.split("/").pop();
  const lang = ["id", "sg", "my"].includes(locale || "") ? locale : "sg";

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
      changeRegion: "Change Region",
      contact: "Contact Us",
    },
    my: (
      <>
        AP Controls has more than 10 years of manufacturing experience,
        especially in material handling systems,
        <br />
        supporting reliable and efficient project execution across various
        industrial sectors.
      </>
    ),
  };

  return (
    <header className="w-full  bg-white">
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
            <li
              onClick={() => router.push(`/${lang}/product`)}
              className="cursor-pointer hover:text-[#3A4E84]"
            >
              {content[lang].product}
            </li>
            {lang === "id" && (
              <li className="cursor-pointer hover:text-[#3A4E84]">
                {content[lang].customer}
              </li>
            )}
            <li className="cursor-pointer hover:text-[#3A4E84]">
              {content[lang].about}
            </li>
          </ul>

          <div className="flex gap-4 xl:gap-5 text-sm">
            <button
              className="border border-[#3A4E84] text-[#3A4E84] w-[140px] xl:w-[160px] h-[40px] rounded-lg transition-all duration-300 ease-out
                hover:bg-[#3A4E84] hover:text-white cursor-pointer"
              onClick={() => router.push("/")}
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
            <li
              onClick={() => router.push(`/${lang}/product`)}
              className="cursor-pointer"
            >
              {content[lang].product}
            </li>
            <li className="cursor-pointer">{content[lang].customer}</li>
            <li className="cursor-pointer">{content[lang].about}</li>
          </ul>

          <div className="flex flex-col gap-4 mt-6 text-sm">
            <button
              className="border border-[#3A4E84] text-[#3A4E84] h-[44px] rounded-lg cursor-pointer transition-all duration-300 ease-out
                hover:bg-[#3A4E84] hover:text-white"
              onClick={() => router.push("/")}
            >
              {content[lang].changeRegion}
            </button>
            <button
              onClick={() => openModal}
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
