import React, { useState } from "react";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaStar,
  FaMosque,
  FaCertificate,
  FaShieldAlt,
  FaTruck,
  FaHandHoldingHeart,
} from "react-icons/fa";
import {
  Award,
  Heart,
  TrendingUp,
  Users,
  Check,
  Sparkles,
  Calendar,
  Scale,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { WA_NUMBER } from "../config";

const kambings = [
  {
    name: "Kambing Etawa Premium",
    weight: "25-30kg",
    gender: "Jantan",
    description: "Siap qurban: tubuh besar, sehat, dan memenuhi syarat syar'i",
    price: "Rp 5.000.000 - Rp 7.500.000",
    age: "< 2 tahun",
    image: "etawa.png",
    badge: "PREMIUM",
    sold: "180+",
    rating: 4.9,
    features: [
      "Memenuhi syarat qurban",
      "Sertifikat kesehatan",
      "Sehat & tidak cacat",
      "Siap disembelih sesuai syariat",
    ],
    syariah: true,
  },
  {
    name: "Kambing Jawa Randu",
    weight: "20-25kg",
    gender: "Jantan",
    description: "Ideal untuk qurban: bobot mantap, aktif, dan pakan terawat",
    price: "Rp 3.500.000 - Rp 5.000.000",
    age: "< 2 tahun",
    image: "jawarandu.png",
    badge: "BEST SELLER",
    sold: "320+",
    rating: 4.8,
    features: [
      "Umur sesuai standar syariat",
      "Badan proporsional",
      "Tidak ada cacat fisik",
      "Nafsu makan tinggi",
    ],
    syariah: true,
  },
  {
    name: "Kambing Jawa Kacang",
    weight: "28-32kg",
    gender: "Jantan",
    description: "Cocok qurban: sehat, lincah, dan kualitas tubuh terjamin",
    price: "Rp 3.000.000 - Rp 4.500.000",
    age: "< 2 tahun",
    image: "jawakacang.png",
    badge: "POPULER",
    sold: "240+",
    rating: 4.8,
    features: [
      "Tahan penyakit",
      "Lincah & sehat",
      "Memenuhi kriteria qurban",
      "Harga ekonomis",
    ],
    syariah: true,
  },
  {
    name: "Domba",
    weight: "26-30kg",
    gender: "Jantan",
    description: "Layak qurban: bulu tebal, sehat, dan bobot stabil",
    price: "Rp 2.500.000 - Rp 4.000.000",
    age: "< 2 tahun",
    image: "domba.png",
    badge: "BERKAH",
    sold: "160+",
    rating: 4.9,
    features: [
      "Bulu tebal & sehat",
      "Bobot ideal",
      "Pertumbuhan stabil",
      "Sesuai syarat qurban",
    ],
    syariah: true,
  },
];

const Qurban = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "PREMIUM":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "BEST SELLER":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "POPULER":
        return "bg-gradient-to-r from-blue-500 to-sky-500";
      case "BERKAH":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-emerald-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-30 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
            <p className="text-sm font-bold tracking-wider flex items-center justify-center gap-2">
              <FaMosque className="text-lg" />
              KAMBING QURBAN TERPERCAYA
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Kambing Qurban Berkualitas
          </h1>

          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
            Sempurnakan ibadah qurban Anda dengan kambing sehat yang
            <span className="text-yellow-300 font-black">
              {" "}
              memenuhi syarat syar'i
            </span>
          </p>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Mulai dari{" "}
            <span className="text-yellow-300 font-black text-3xl">
              Rp 2.500.000
            </span>
            <span className="ml-2">
              sudah bisa beribadah qurban dengan tenang
            </span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaCertificate className="text-2xl text-yellow-300" />
              <span className="font-bold">Sesuai Syariat</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaShieldAlt className="text-2xl text-green-300" />
              <span className="font-bold">Sehat & Berkualitas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaTruck className="text-2xl text-blue-300" />
              <span className="font-bold">Siap Antar</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaHandHoldingHeart className="text-2xl text-pink-300" />
              <span className="font-bold">Penyembelihan Gratis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Syariah Requirements Info */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-green-200">
          <div className="text-center mb-8">
            <FaMosque className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Semua Kambing Kami Memenuhi Syarat Qurban
            </h3>
            <p className="text-gray-600">Sesuai dengan tuntunan agama Islam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Umur Cukup</h4>
              <p className="text-sm text-gray-600">
                Kambing minimal 1 tahun, domba minimal 6 bulan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaShieldAlt className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Sehat & Kuat</h4>
              <p className="text-sm text-gray-600">
                Tidak sakit, tidak cacat, dan penuh vitalitas
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scale className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Bobot Ideal</h4>
              <p className="text-sm text-gray-600">
                Berat badan mencukupi dan proporsional
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCertificate className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Bersertifikat</h4>
              <p className="text-sm text-gray-600">
                Dilengkapi surat kesehatan resmi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-green-600 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
            🐐 PILIHAN TERBAIK UNTUK QURBAN
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Kambing Qurban Kami
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {kambings.map((kambing, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } ${activeIndex === i ? "scale-[1.02]" : ""}`}
            >
              {/* Syariah Badge */}
              {kambing.syariah && (
                <div
                  className={`absolute top-6 ${
                    i % 2 !== 0 ? "left-6" : "right-6"
                  } z-20`}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-black text-sm shadow-lg flex items-center gap-2">
                    <FaMosque />
                    SESUAI SYARIAT
                  </div>
                </div>
              )}

              {/* Badge */}
              <div
                className={`absolute top-6 ${
                  i % 2 !== 0 ? "right-6" : "left-6"
                } z-20`}
              >
                <div
                  className={`${getBadgeColor(
                    kambing.badge
                  )} text-white px-4 py-2 rounded-full font-black text-sm shadow-lg transform -rotate-3`}
                >
                  ⭐ {kambing.badge}
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 relative p-8 lg:p-12">
                <div className="relative">
                  {/* Decorative Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-50 scale-75"></div>

                  <img
                    src={`https://ik.imagekit.io/purnomo/${kambing.image}`}
                    alt={kambing.name}
                    className="relative w-full max-h-80 mt-10 md:mt-2 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mt-6">
                  <div className="bg-green-50 px-4 py-2 rounded-xl text-center border-2 border-green-200">
                    <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Terjual</p>
                    <p className="font-black text-green-700">{kambing.sold}</p>
                  </div>
                  <div className="bg-yellow-50 px-4 py-2 rounded-xl text-center border-2 border-yellow-200">
                    <FaStar className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Rating</p>
                    <p className="font-black text-yellow-600">
                      {kambing.rating}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`lg:w-1/2 p-8 lg:p-12 space-y-6 ${
                  i % 2 !== 0 ? "lg:pr-16" : "lg:pl-16"
                }`}
              >
                <div>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3 leading-tight mt-2">
                    {kambing.name}
                  </h2>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                      <Scale className="w-4 h-4" />
                      {kambing.weight}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
                      🐐 {kambing.gender}
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {kambing.age}
                    </span>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {kambing.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="font-bold text-gray-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-600" />
                    Keunggulan & Jaminan:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {kambing.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-green-50 p-3 rounded-xl border-l-4 border-green-500"
                      >
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-semibold text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 border-t-2 border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Harga Mulai</p>
                      <p className="text-3xl lg:text-4xl font-black text-green-600">
                        {kambing.price.split(" - ")[0]}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        s/d {kambing.price.split(" - ")[1]}
                      </p>
                    </div>
                    <div className="text-right">
                      <Heart className="w-8 h-8 text-red-500 ml-auto mb-1" />
                      <p className="text-xs text-gray-500">Ibadah</p>
                      <p className="text-sm font-bold text-green-600">Berkah</p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Assalamualaikum,%20saya%20ingin%20memesan%20${encodeURIComponent(
                      kambing.name
                    )}%20untuk%20qurban%0A%0ABerat:%20${
                      kambing.weight
                    }%0AUmur:%20${
                      kambing.age
                    }%0A%0AMohon%20info%20lebih%20lanjut.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group/btn font-bold text-lg"
                  >
                    <FaWhatsapp className="w-6 h-6 animate-bounce" />
                    <span>Pesan untuk Qurban</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    💬 Konsultasi Gratis • 📦 Ready Stock • ✅ Garansi Sehat
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Included */}
        <div className="mt-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white shadow-2xl">
          <div className="text-center mb-10">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Layanan Lengkap Untuk Qurban Anda
            </h3>
            <p className="text-xl max-w-2xl mx-auto">
              Kami siap membantu ibadah qurban Anda dari awal hingga selesai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <FaCertificate className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <h4 className="font-black text-lg mb-2">Sertifikat Kesehatan</h4>
              <p className="text-sm text-white/90">
                Lengkap dengan dokumen resmi
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <FaMosque className="w-12 h-12 mx-auto mb-3 text-blue-300" />
              <h4 className="font-black text-lg mb-2">Penyembelihan Syar'i</h4>
              <p className="text-sm text-white/90">Sesuai tuntunan agama</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <FaTruck className="w-12 h-12 mx-auto mb-3 text-green-300" />
              <h4 className="font-black text-lg mb-2">Pengiriman Aman</h4>
              <p className="text-sm text-white/90">Antar ke lokasi qurban</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <FaHandHoldingHeart className="w-12 h-12 mx-auto mb-3 text-pink-300" />
              <h4 className="font-black text-lg mb-2">Pendampingan</h4>
              <p className="text-sm text-white/90">
                Konsultasi & bantuan teknis
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20untuk%20qurban`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-700 hover:bg-gray-50 px-8 py-4 rounded-full font-black text-lg shadow-xl transition-all transform hover:scale-105"
            >
              <FaWhatsapp className="w-7 h-7 text-green-600" />
              Konsultasi Qurban Gratis
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Jaminan Sehat
            </h4>
            <p className="text-gray-600 text-center">
              Kambing sehat & tidak cacat, garansi 7 hari
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-100 hover:border-yellow-300 transition-all">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMosque className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Sesuai Syariat
            </h4>
            <p className="text-gray-600 text-center">
              Memenuhi semua syarat qurban dalam Islam
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandHoldingHeart className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Layanan Tulus
            </h4>
            <p className="text-gray-600 text-center">
              Membantu ibadah dengan sepenuh hati
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qurban;
