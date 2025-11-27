import React from "react";
import Navbar from "../components/Navbar";
import { WA_NUMBER } from "../config";
import { FaWhatsapp } from "react-icons/fa";

const kambings = [
  {
    name: "Kambing Etawa Premium",
    weight: "25-30kg",
    gender: "Jantan",
    description: "Siap qurban: tubuh besar, sehat, dan memenuhi syarat syar'i",
    price: "Rp 1.500.000 - Rp 2.800.000",
    age: "1,7 tahun",
    image: "/image/etawa.png",
  },
  {
    name: "Kambing Jawa Randu",
    weight: "20-25kg",
    gender: "Jantan",
    description: "Ideal untuk qurban: bobot mantap, aktif, dan pakan terawat",
    price: "Rp 1.800.000 - Rp 3.500.000",
    age: "1,5 tahun",
    image: "/image/jawarandu.png",
  },
  {
    name: "Kambing Jawa Kacang",
    weight: "28-32kg",
    gender: "Jantan",
    description: "Cocok qurban: sehat, lincah, dan kualitas tubuh terjamin",
    price: "Rp 1.700.000 - Rp 3.250.000",
    age: "2 tahun",
    image: "/image/jawakacang.png",
  },
  {
    name: "Domba",
    weight: "26-30kg",
    gender: "Jantan",
    description: "Layak qurban: bulu tebal, sehat, dan bobot stabil",
    price: "Rp 1.600.000 - Rp 3.400.000",
    age: "1,8 tahun",
    image: "/image/domba.png",
  },
];

const Qurban = () => {
  return (
    <div className="bg-linear-to-b from-sky-50 to-white py-20">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          PILIHAN KAMBING QURBAN SEHAT
          <p className="text-xl mt-2">Mulai dari 1.500.000, bisa bawa kambing untuk pelengkap Ibadah Qurbanmu</p>
        </h1>

        {kambings.map((kambing, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden transform transition hover:scale-105 duration-300 max-w-4xl mx-auto ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 flex justify-center p-6 md:p-10">
              <img
                src={kambing.image}
                alt={kambing.name}
                className="w-auto max-h-64 object-contain rounded-2xl"
              />
            </div>

            <div
              className={`md:w-1/2 p-6 md:p-10 flex flex-col justify-center gap-4 ${
                i % 2 !== 0 ? "md:pl-16 md:pr-6" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-sky-700">
                {kambing.name}
              </h2>
              <p className="text-gray-600">Berat: {kambing.weight}</p>
              <p className="text-gray-600">Jenis: {kambing.gender}</p>
              <p className="text-gray-600">Umur: {kambing.age}</p>
              <p className="text-gray-600">{kambing.description}</p>
              <p className="text-xl md:text-2xl font-semibold text-green-700">
                {kambing.price}
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20saya%20ingin%20memesan%20${encodeURIComponent(
                  kambing.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition self-start"
                title={`Pesan ${kambing.name} via WhatsApp`}
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qurban;
