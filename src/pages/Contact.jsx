import React from "react";
import Navbar from "../components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const waMessage =
    "Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Jual%20Kambing.";

  const contact = {
    title: "Hubungi Kami",
    intro: "Siap membantu kebutuhan Anda, hubungi kami melalui:",
    phone: "0813 - 2788 - 4060",
    number: "6281327884060",
    address:
      "RT 06/01 Desa Bangsa, Kec. Kebasen, Kab. Banyumas, Prov. Jawa Tengah",
    copyright: "© 2025 Tanupatra Farm. All rights reserved.",
  };

  const waLink = `https://wa.me/${contact.number}?text=${waMessage}`;

  return (
    <>
      <Navbar />

      <div className="mt-24 flex justify-center px-4 pb-10">
        <div className="max-w-2xl w-full bg-sky-100 shadow-lg rounded-2xl p-6 space-y-4 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center">{contact.title}</h2>
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

            <div className="mt-6 mb-12">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9435667854036!2d109.2504915!3d-7.581122199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654357ec8f767f%3A0xfb5252ff4a2eca79!2sTernak%20Kambing%20-%20Tanupatra%20Farm!5e0!3m2!1sid!2sid!4v1764221866367!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow"
              ></iframe>
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
