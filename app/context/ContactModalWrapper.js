"use client";

import ContactModal from "../../components/contactModal";
import { useContactModal } from "@/app/context/ContactModalContext";

export default function ContactModalWrapper() {
  const { isModalOpen, closeModal } = useContactModal();

  return <ContactModal open={isModalOpen} onClose={closeModal} />;
}
