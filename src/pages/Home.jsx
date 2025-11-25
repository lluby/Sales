import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ShoppingCart,
  Gift,
  Users,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import TestimonialCarousel from "./TestimonialCarousel";
import Navbar from "../components/Navbar";
import { WA_NUMBER, BRAND } from "../config";
import ServiceAreas from "./ServiceAreas";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const categories = [
    {
      title: "Kambing Sehat",
      desc: "Kambing sehat, gemuk, dan terawat langsung dari peternakan kami",
      icon: <ShoppingCart className="w-10 h-10 text-sky-500 mb-4" />,
    },
    {
      title: "Paket Aqiqah Praktis",
      desc: "Layanan aqiqah lengkap: pemilihan kambing, penyembelihan sesuai syariat, dan masakan siap santap",
      icon: <Gift className="w-10 h-10 text-sky-500 mb-4" />,
    },
    {
      title: "Kambing Qurban Terbaik",
      desc: "Kambing qurban berkualitas untuk Idul Adha, siap diantar dan disalurkan ke lokasi Anda",
      icon: <Users className="w-10 h-10 text-sky-500 mb-4" />,
    },
  ];

  const steps = [
    {
      id: 1,
      img: "/image/kambing3.png",
      title: "Kambing Super",
      subtitle: "Best Seller",
      link: "/kambing",
    },
    {
      id: 2,
      img: "/image/aqiqah1.jpg",
      title: "Paket Aqiqah",
      subtitle: "Praktis & Hemat",
      link: "/aqiqah",
    },
    {
      id: 3,
      img: "/image/domba.png",
      title: "Kambing Qurban",
      subtitle: "Terlaris",
      link: "/qurban",
    },
    {
      id: 4,
      img: "/image/anak.jpg",
      title: "Anakan Kambing",
      subtitle: "Sehat & Siap Pelihara",
      link: "/peranakan",
    },
  ];

  const advantages = [
    "Harga bersahabat dengan kualitas terbaik",
    "Hewan sehat dan disembelih secara syar'i",
    "Masakan higienis dengan cita rasa lezat",
    "Pengantaran tepat waktu ke rumah pelanggan",
  ];

  const waText =
    "Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Jual%20Kambing.";

  return (
    <div className="w-full font-sans bg-blue-900/40 text-gray-800">
      <Navbar />
      <section className="relative text-white text-center">
        <div className="relative w-full h-screen">
          <Slider
            autoplay
            infinite
            arrows={false}
            speed={10000}
            autoplaySpeed={3000}
            fade={true}
            dots={false}
          >
            <img
              src="/image/bg1.jpg"
              className="w-full h-screen object-cover brightness-50"
            />
            <img
              src="/image/bg2.jpg"
              className="w-full h-screen object-cover brightness-50"
            />
          </Slider>

          <div className="absolute inset-0 bg-blue-900/40 z-10"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 px-6 text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-12">
              {BRAND}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-12">
              Solusi Lengkap untuk Kambing Sehat, Aqiqah, & Qurban
            </h2>
            <p className="max-w-md md:max-w-3xl text-base md:text-lg mb-12">
              {BRAND}, menyediakan semua kebutuhan kambing Anda mulai dari kambing besar
              berkualitas, paket aqiqah praktis, hewan qurban sehat, hingga anakan
              kambing siap pelihara. Lengkap, terpercaya, dan selalu siap melayani.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-sky-700 hover:bg-sky-50 px-6 py-3 text-lg font-semibold rounded-full shadow-md transition"
            >
              <FaWhatsapp className="text-2xl text-green-600" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Layanan Utama {BRAND}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 text-center transition flex flex-col items-center cursor-pointer"
              >
                {item.icon}
                <h3 className="text-2xl font-semibold text-sky-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800">
            Paling Banyak Dibeli
          </h2>
          <div className="flex flex-wrap justify-center gap-16 mb-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative bg-white rounded-2xl shadow-md p-6 w-56 flex flex-col items-center text-center"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-sky-200 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {step.id}
                </div>

                <div className="relative w-full h-42 mb-4 rounded-xl overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-bold text-[#151E3F] text-xl">{step.title}</h3>
                <h4 className="font-semibold text-[#151E3F] mb-2 text-base">
                  {step.subtitle}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{step.desc}</p>

                <Link
                  to={step.link}
                  className="mt-auto bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-sky-700 transition flex items-center justify-center gap-2"
                >
                  <span>Cek Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-stretch">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="bg-sky-50 shadow-md rounded-2xl p-6 flex items-center min-h-[90px] text-lg text-gray-700 hover:shadow-lg transition w-full"
              >
                <CheckCircle className="w-8 h-8 text-sky-500 mr-3" />
                <span className="leading-snug">{item}</span>
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
            className="inline-flex items-center justify-center gap-3 bg-white text-sky-700 hover:bg-sky-50 px-4 py-2 rounded-full text-m font-semibold shadow-md transition"
          >
            <FaWhatsapp className="text-xl text-green-600" />
            WhatsApp Kami Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
