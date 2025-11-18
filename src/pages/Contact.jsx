import React from "react";
import Navbar from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const waMessage =
    "Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Jual%20Kambing.";

  const contact = {
    title: "Hubungi Kami",
    intro: "Siap membantu kebutuhan Anda, hubungi kami melalui:",
    phone: "0811 - 2222 - 3333",
    number: "6285155040590",
    address:
      "RT.02/RW.02, Condong Kulon, Condongsari, Banyuurip, Purworejo Regency, Central Java 54171",
    copyright: "© 2025 Jual Kambing. All rights reserved.",
  };

  const waLink = `https://wa.me/${contact.number}?text=${waMessage}`;

  return (
    <>
      <Navbar />

      <div className="mt-24 flex justify-center px-4 pb-10">
        <div className="max-w-2xl w-full bg-sky-100 shadow-lg rounded-2xl p-6 space-y-4 border border-gray-100">
          <h2 className="text-2xl font-bold text-center">{contact.title}</h2>
          <p className="text-center text-gray-600">{contact.intro}</p>

          <div className="mt-4 space-y-3">
            <div>
              <p className="font-semibold text-gray-800">Telepon / WhatsApp:</p>
              <div className="flex items-center gap-3 mt-2">
                <FaWhatsapp className="text-green-600 text-2xl" />
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-sky-700 hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Alamat Kantor Pusat:</p>
              <div className="flex items-start gap-3 mt-2">
                <span className="text-2xl">📍</span>
                <p className="text-gray-700">{contact.address}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl shadow"
              >
                <FaWhatsapp className="text-xl" />
                Chat via WhatsApp
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm pt-4">
            {contact.copyright}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
