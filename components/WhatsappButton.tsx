"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton: React.FC = () => {
  const phoneNumber: string = "16474512391"; // Buraya kendi numaranı yaz (+90 olmadan 905 ile başlamalı)
  const message: string = "Hi! I need information about your tire services."; 


  const handleClick = (): void => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      aria-label="WhatsApp ile iletişime geç"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsappButton;
