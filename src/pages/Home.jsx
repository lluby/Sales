import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ShoppingCart,
  Gift,
  Users
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import TestimonialCarousel from "./TestimonialCarousel";
import Navbar from "../components/Navbar";
import { WA_NUMBER, BRAND } from "../config";
import ServiceAreas from "./ServiceAreas";

const Home = () => {
  const categories = [
    {
      title: "Kambing Sehat",
      desc: "Kambing sehat, gemuk, dan terawat langsung dari peternakan kami",
      icon: <ShoppingCart className="w-10 h-10 text-sky-500 mb-4" />,
      link: "/kambing",
    },
    {
      title: "Paket Aqiqah Praktis",
      desc: "Layanan aqiqah lengkap: pemilihan kambing, penyembelihan sesuai syariat, dan masakan siap santap",
      icon: <Gift className="w-10 h-10 text-sky-500 mb-4" />,
      link: "/aqiqah",
    },
    {
      title: "Kambing Qurban Terbaik",
      desc: "Kambing qurban berkualitas untuk Idul Adha, siap diantar dan disalurkan ke lokasi Anda",
      icon: <Users className="w-10 h-10 text-sky-500 mb-4" />,
      link: "/qurban",
    },
  ];

  const advantages = [
    "Harga bersahabat dengan kualitas terbaik",
    "Hewan terawat, sehat, dan disembelih sesuai syariat",
    "Masakan higienis dengan cita rasa lezat",
    "Pengantaran tepat waktu ke rumah pelanggan",
  ];

  const waText =
    "Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Jual%20Kambing.";

  return (
    <div className="w-full font-sans bg-white text-gray-800">
      <Navbar />

      <section className="relative bg-sky-400 text-white text-center py-20 px-6">
        <div className="absolute inset-0 bg-sky-500/60"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
            Solusi Lengkap untuk Kambing Sehat, Aqiqah, & Qurban
          </h1>

          <p className="text-lg md:text-xl text-sky-50 mb-10">
            {BRAND} hadir dengan layanan profesional dan harga bersahabat untuk kebutuhan kambing sehat, aqiqah, maupun qurban
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 text-xl font-semibold rounded-full shadow-md transition"
          >
            <FaWhatsapp className="text-2xl text-green-600" />
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </section>

      <section className="py-10 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Layanan Utama {BRAND}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((item, i) => (
              <Link key={i} to={item.link}>
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 text-center transition flex flex-col items-center cursor-pointer">
                  {item.icon}
                  <h3 className="text-2xl font-semibold text-sky-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Kenapa Memilih {BRAND}?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Kami berkomitmen memberikan pelayanan terbaik dengan kejujuran dan ketulusan untuk ibadah Anda
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="bg-sky-50 shadow-md rounded-2xl p-8 flex items-center text-lg text-gray-700 hover:shadow-lg transition"
              >
                <CheckCircle className="w-6 h-6 text-sky-500 mr-3" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Cerita Pelanggan Kami
          </h2>

          <p className="text-gray-600 mb-4 text-lg">
            Lihat sendiri bagaimana pelanggan merasakan manfaat dan pelayanan terbaik dari kami
          </p>

          <TestimonialCarousel />
        </div>
      </section>

      <ServiceAreas />

      <section className="py-10 bg-sky-400 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi Kami
          </h2>

          <p className="text-lg mb-6">
            Siap membantu kebutuhan Anda, hubungi kami melalui WhatsApp untuk konsultasi gratis
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-sky-700 hover:bg-sky-50 px-10 py-4 rounded-full text-xl font-semibold shadow-md transition"
          >
            <FaWhatsapp className="text-2xl text-green-600" />
            WhatsApp Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
