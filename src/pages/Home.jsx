import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ShoppingCart,
  Gift,
  Users,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import TestimonialCarousel from "./TestimonialCarousel";
import Gallery from "./Galerry";
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
      icon: <ShoppingCart className="w-12 h-12 text-sky-500 mb-4" />,
    },
    {
      title: "Paket Aqiqah Praktis",
      desc: "Layanan aqiqah lengkap: pemilihan kambing, penyembelihan sesuai syariat, dan masakan siap santap",
      icon: <Gift className="w-12 h-12 text-sky-500 mb-4" />,
    },
    {
      title: "Kambing Qurban Terbaik",
      desc: "Kambing qurban berkualitas untuk Idul Adha, siap diantar dan disalurkan ke lokasi Anda",
      icon: <Users className="w-12 h-12 text-sky-500 mb-4" />,
    },
  ];

  const steps = [
    {
      id: 1,
      img: "kambing3.png",
      title: "Kambing Super",
      subtitle: "Best Seller",
      link: "/kambing",
    },
    {
      id: 2,
      img: "aqiqah1.jpg",
      title: "Paket Aqiqah",
      subtitle: "Praktis & Hemat",
      link: "/aqiqah",
    },
    {
      id: 3,
      img: "domba.png",
      title: "Kambing Qurban",
      subtitle: "Terlaris",
      link: "/qurban",
    },
    {
      id: 4,
      img: "anak.jpg",
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
    <div className="w-full font-sans bg-gradient-to-b from-blue-50 to-white text-gray-800 mt-10">
      <Navbar />

      {/* Hero Section */}
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
          </Slider>

          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-900/50 to-blue-900/70 z-10"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center z-20 px-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full mb-6 border border-white/30">
              <p className="text-sky-200 text-sm md:text-base font-semibold tracking-wider uppercase">
                ✨ Terpercaya Sejak Lama
              </p>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight drop-shadow-2xl">
              {BRAND}
            </h1>

            <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight max-w-4xl drop-shadow-lg">
              Solusi Lengkap untuk
              <br />
              <span className="text-sky-300">Kambing Sehat</span>,{" "}
              <span className="text-green-300">Aqiqah</span> &{" "}
              <span className="text-yellow-300">Qurban</span>
            </h2>

            <p className="max-w-2xl md:max-w-4xl text-lg md:text-xl mb-10 leading-relaxed text-gray-100 font-medium">
              Menyediakan kambing berkualitas premium, paket aqiqah praktis,
              hewan qurban sehat, hingga anakan kambing siap pelihara.{" "}
              <span className="text-sky-300 font-bold">
                Lengkap, terpercaya, dan selalu siap melayani
              </span>
              .
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-2xl transition-all transform hover:scale-105 hover:shadow-green-500/50"
            >
              <FaWhatsapp className="text-3xl animate-pulse" />
              <span>Hubungi Kami Sekarang</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-4 text-sm text-gray-200">
              💬 Konsultasi Gratis • ⚡ Respon Cepat • ✅ Terpercaya
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sky-600 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
              Layanan Terbaik Kami
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
              Layanan Utama {BRAND}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl p-10 text-center transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-sky-200 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-sky-50 p-5 rounded-2xl mb-6 group-hover:bg-sky-100 transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute -bottom-2 -right-2 text-8xl font-black text-gray-100 group-hover:text-sky-100 transition-colors">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
              🔥 Produk Populer
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
              Paling Banyak Dibeli
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl p-6 w-full sm:w-64 flex flex-col items-center text-center transition-all transform hover:-translate-y-3 border border-gray-100"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                  {step.id}
                </div>

                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={`https://ik.imagekit.io/purnomo/${step.img}`}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {step.subtitle}
                  </div>
                </div>

                <h3 className="font-black text-gray-900 text-2xl mb-2">
                  {step.title}
                </h3>

                <Link
                  to={step.link}
                  className="mt-4 w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl text-base font-bold hover:from-sky-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg group-hover:gap-3"
                >
                  <span>Lihat Detail</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sky-600 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
              ⭐ Keunggulan Kami
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
              Kenapa Memilih {BRAND}?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen memberikan pelayanan terbaik dengan{" "}
              <span className="text-sky-600 font-bold">
                kejujuran dan ketulusan
              </span>{" "}
              untuk ibadah Anda
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="group bg-white shadow-lg hover:shadow-xl rounded-2xl p-8 flex items-center text-left transition-all transform hover:-translate-y-1 border-l-4 border-sky-500"
              >
                <div className="bg-sky-100 p-3 rounded-xl mr-5 group-hover:bg-sky-200 transition-colors">
                  <CheckCircle className="w-8 h-8 text-sky-600" />
                </div>
                <span className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-16 md:py-24 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-yellow-600 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
              💬 Testimoni
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
              Cerita Pelanggan Kami
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Lihat sendiri bagaimana pelanggan merasakan{" "}
              <span className="text-sky-600 font-bold">
                manfaat dan pelayanan terbaik
              </span>{" "}
              dari kami
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full mt-6"></div>
          </div>
          <TestimonialCarousel />
        </div>
      </section> */}

      <Gallery />

      <ServiceAreas />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6 inline-block border border-white/30">
            <p className="text-white text-sm font-bold tracking-wider uppercase">
              📞 Siap Melayani Anda
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Hubungi Kami Sekarang!
          </h2>

          <p className="text-xl md:text-2xl mb-10 leading-relaxed font-medium">
            Siap membantu kebutuhan Anda,{" "}
            <span className="font-black">hubungi kami</span> melalui WhatsApp
            untuk{" "}
            <span className="text-yellow-300 font-black">
              konsultasi gratis
            </span>
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-white text-sky-700 hover:bg-gray-50 px-10 py-5 rounded-full text-xl font-black shadow-2xl transition-all transform hover:scale-105"
          >
            <FaWhatsapp className="text-3xl text-green-600 animate-bounce" />
            <span>WhatsApp Kami Sekarang</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-sm text-white/90 font-medium">
            ⚡ Respon Cepat dalam 5 Menit • ✅ Gratis Konsultasi
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
