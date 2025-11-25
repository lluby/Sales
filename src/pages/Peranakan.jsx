import React from "react";
import Navbar from "../components/Navbar";
import { WA_NUMBER } from "../config";
import { FaWhatsapp } from "react-icons/fa";

const peranakans = [
  {
    name: "Peranakan Kambing Etawa Premium",
    weight: "9-15kg",
    gender: "Jantan",
    description: "Sehat dan gemuk, cocok untuk berbagai kebutuhan",
    price: "Rp 1.000.000 - Rp 1.500.000",
    age: "1,7 tahun",
    image: "/image/anak.jpg",
  },
  {
    name: "Peranakan Kambing Jawa Randu",
    weight: "8-15kg",
    gender: "Jantan",
    description: "Sehat dan cocok untuk aqiqah maupun kurban",
    price: "Rp 1.100.000 - Rp 1.800.000",
    age: "1,5 tahun",
    image: "/image/anak.jpg",
  },
  {
    name: "Peranakan Kambing Jawa Kacang",
    weight: "7-11kg",
    gender: "Jantan",
    description: "Kualitas premium, sehat dan gemuk",
    price: "Rp 1.200.000 - Rp 1.550.000",
    age: "2 tahun",
    image: "/image/anak.jpg",
  },
  {
    name: "Anak Domba",
    weight: "8-14kg",
    gender: "Jantan",
    description: "Kualitas premium, sehat dan gemuk",
    price: "Rp 1.050.000 - Rp 1.600.000",
    age: "1,8 tahun",
    image: "/image/anak.jpg",
  },
];

const Peranakan = () => {
  return (
    <div className="bg-linear-to-b from-sky-50 to-white py-20">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <h1 className="text-4xl font-bold text-sky-700 mb-12 text-center">
          PILIHAN PERANAKAN KAMBING
          <p className="text-xl mt-2">Mulai dari 1.000.000, bisa bawa anak kambing yang dimau</p>
        </h1>

        {peranakans.map((peranakans, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden transform transition hover:scale-105 duration-300 max-w-4xl mx-auto ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 flex justify-center p-6 md:p-10">
              <img
                src={peranakans.image}
                alt={peranakans.name}
                className="w-auto max-h-64 object-contain rounded-2xl"
              />
            </div>

            <div
              className={`md:w-1/2 p-6 md:p-10 flex flex-col justify-center gap-4 ${
                i % 2 !== 0 ? "md:pl-16 md:pr-6" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-sky-700">
                {peranakans.name}
              </h2>
              <p className="text-gray-600">Berat: {peranakans.weight}</p>
              <p className="text-gray-600">Jenis: {peranakans.gender}</p>
              <p className="text-gray-600">Umur: {peranakans.age}</p>
              <p className="text-gray-600">{peranakans.description}</p>
              <p className="text-xl md:text-2xl font-semibold text-green-700">
                {peranakans.price}
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%20saya%20ingin%20memesan%20${encodeURIComponent(
                  peranakans.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition self-start"
                title={`Pesan ${peranakans.name} via WhatsApp`}
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

export default Peranakan;
