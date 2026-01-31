"use client";

import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const regions = [
  {
    id: "sg",
    country: "Singapore",
    label: "AP Controls Pte Ltd",
    path: "/sg",
  },
  {
    id: "id",
    country: "Indonesia",
    label: "PT AP Controls - Bahasa Indonesia",
    path: "/id",
  },
  {
    id: "id-en",
    country: "Indonesia",
    label: "PT AP Controls - English",
    path: "/id-en",
  },
  {
    id: "my",
    country: "Malaysia",
    label: "Valve Store",
    path: "/my",
  },
];

const RegionModal = ({ open, onClose, active }) => {
  const router = useRouter();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* MODAL */}
      <div className="relative z-10 w-[90%] max-w-[420px] bg-white rounded-2xl overflow-hidden">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h2 className="text-lg font-semibold">Select Region</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* LIST */}
        <ul className="">
          {regions.map((item) => {
            const isActive = active === item.id;

            return (
              <li
                key={item.id}
                onClick={() => {
                  router.push(item.path);
                  onClose();
                }}
                className={`
                    px-6 py-4 cursor-pointer
                    flex items-center gap-2
                    transition
                    ${
                      isActive
                        ? "bg-[#3A4E84] text-white"
                        : "text-[#545454] hover:bg-gray-100"
                    }
                    `}
              >
                <span className="font-bold">{item.country}</span>
                <span className={isActive ? "text-white/90" : ""}>
                  | {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RegionModal;
