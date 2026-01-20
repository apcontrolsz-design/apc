"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get("contact") === "true") {
      setIsModalOpen(true);
    }
  }, [searchParams, pathname]);

  return (
    <ContactModalContext.Provider
      value={{ isModalOpen, openModal, closeModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("useContactModal must be used inside ContactModalProvider");
  }

  return context;
}
