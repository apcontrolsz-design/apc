"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContactModal({ open, onClose }) {
  const pathname = usePathname();
  const locale = pathname.split("/").pop();
  const lang = ["id", "sg", "my"].includes(locale || "") ? locale : "sg";

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const content = {
    id: {
      desc: "Untuk pertanyaan, permintaan penawaran, atau diskusi lebih lanjut terkait produk dan layanan kami, silakan hubungi kami melalui email atau telepon.",
      contact: "Kontak Kami",
      phone: "+6221 8499 6745",
      email: "indo.sales@apcontrols.com.sg",
    },
    sg: {
      desc: "For inquiries, quotations, or further discussions regarding our products and services, please contact us via email or phone.",
      contact: "Contact Us",
      phone: "+65 6563 2098",
      email: "sales@apcontrols.com.sg",
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className="
          relative bg-white w-full max-w-4xl rounded-2xl
          p-6 sm:p-8 md:p-12 z-10
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 md:top-6 md:right-6
            p-2 rounded-full hover:bg-gray-100 transition cursor-pointer
          "
        >
          <X size={24} className="md:w-7 md:h-7" />
        </button>

        {/* Header Icon */}
        <div className="mb-5 md:mb-6">
          <Image
            src="/contact-mail.png"
            alt="Contact Icon"
            width={60}
            height={60}
            className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          {content[lang].contact}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 leading-relaxed ">
          {content[lang].desc}
        </p>

        {/* Contact Info */}
        <div className="space-y-5 md:space-y-6">
          {/* Email */}
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/email-logo.png"
              alt="Email Icon"
              width={28}
              height={28}
              className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
            />
            <span className="text-base md:text-lg font-medium text-[#545454] break-all">
              {content[lang].email}
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/phone-logo.png"
              alt="Phone Icon"
              width={28}
              height={28}
              className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
            />
            <span className="text-base md:text-lg font-medium text-[#545454]">
              {content[lang].phone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
