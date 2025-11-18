import React from "react";
import Navbar from "../components/Navbar";
import { WA_NUMBER } from "../config";
import { FaWhatsapp } from "react-icons/fa";

const packages = [
  {
    title: "Paket Hemat 20 Porsi (1 Kambing Betina)",
    image: "image/aqiqah1.jpg",
    portions: "20 Porsi",
    goat: "1 Ekor Kambing Betina",
    items: ["Nasi putih", "Kerupuk", "Sendok", "Menu: Semur kambing"],
    price: "Rp1.800.000",
  },
  {
    title: "Paket Standar 30 Porsi (1 Kambing Jantan)",
    image: "image/aqiqah1.jpg",
    portions: "30 Porsi",
    goat: "1 Ekor Kambing Jantan",
    items: [
      "Nasi putih",
      "Kerupuk",
      "Buah pisang",
      "Menu: Semur kambing + Bihun goreng",
    ],
    price: "Rp2.300.000",
  },
  {
    title: "Paket Favorit 40 Porsi (1 Kambing Jantan Besar)",
    image: "image/aqiqah1.jpg",
    portions: "40 Porsi",
    goat: "1 Ekor Kambing Jantan – Ukuran Besar",
    items: [
      "Nasi cetak",
      "Kerupuk",
      "Buah pisang",
      "Kartu ucapan",
      "Menu: Sambel goreng kambing + Bihun goreng + Telor rebus",
    ],
    price: "Rp2.900.000",
  },
  {
    title: "Paket Premium 50 Porsi (2 Kambing Betina)",
    image: "image/aqiqah1.jpg",
    portions: "50 Porsi",
    goat: "2 Ekor Kambing Betina",
    items: [
      "Nasi cetak",
      "Sendok",
      "Kerupuk",
      "Buah pisang",
      "Kartu ucapan",
      "Box 22x22 cm",
      "Menu: Semur + Tongseng + Mie goreng",
    ],
    price: "Rp3.900.000",
  },
  {
    title: "Paket Spesial 60 Porsi (2 Kambing Jantan)",
    image: "image/aqiqah1.jpg",
    portions: "60 Porsi",
    goat: "2 Ekor Kambing Jantan",
    items: [
      "Nasi kotak premium",
      "Sendok premium",
      "Kerupuk",
      "Buah pir",
      "Kartu ucapan",
      "Box premium",
      "Menu: Semur + Gulai + Telor pindang",
    ],
    price: "Rp4.700.000",
  },
  {
    title: "Paket Exclusive 80 Porsi (2 Kambing Jantan Besar)",
    image: "image/aqiqah1.jpg",
    portions: "80 Porsi",
    goat: "2 Ekor Kambing Jantan – Ukuran Besar",
    items: [
      "Nasi kotak premium",
      "Sendok premium",
      "Kerupuk premium",
      "Buah pir",
      "Kartu ucapan desain khusus",
      "Box eksklusif",
      "Minuman botol",
      "Menu: Semur premium + Tongseng spesial + Bihun goreng premium",
    ],
    price: "Rp5.900.000",
  },
];

const Aqiqah = () => {
  return (
    <>
      <Navbar />

      <section className="py-12 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6 mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            PILIHAN PAKET AQIQAH
          </h2>
          <p className="text-gray-800 mb-6 text-lg font-medium">
            Harga mulai dari Rp1.800.000
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="bg-sky-100 rounded-2xl shadow-md p-4 text-left hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />

                <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">
                  {pkg.title}
                </h3>

                <ul className="text-sm text-gray-700 space-y-1 mb-4 flex-1">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-md font-bold text-gray-900">
                    {pkg.price}
                  </p>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(
                      pkg.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition"
                    title={`Pesan ${pkg.title} via WhatsApp`}
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Aqiqah;
