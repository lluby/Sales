import React, { useState } from "react";
import {
  FaWhatsapp,
  FaStar,
  FaLeaf,
  FaCertificate,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import {
  Award,
  TrendingUp,
  Users,
  Check,
  Sparkles,
  Calendar,
  Scale,
  Zap,
  Heart,
  Target,
  DollarSign,
} from "lucide-react";
import Navbar from "../components/Navbar";

const WA_NUMBER = "6281234567890"; // Ganti dengan nomor yang sesuai

const peranakans = [
  {
    name: "Peranakan Kambing Etawa Premium",
    weight: "9-15kg",
    gender: "Jantan",
    description: "Postur besar dan sehat, siap jadi bibit unggul",
    price: "350.000 - 750.000",
    age: "3 - 6 bulan",
    image: "anakanetawa.png",
    badge: "PREMIUM",
    sold: "150+",
    rating: 4.9,
    roi: "250%",
    features: [
      "Genetik unggul dari indukan berkualitas",
      "Pertumbuhan cepat & maksimal",
      "Cocok untuk pembibitan premium",
      "Nilai jual tinggi saat dewasa",
    ],
    investment: true,
  },
  {
    name: "Peranakan Kambing Jawa Randu",
    weight: "8-15kg",
    gender: "Jantan",
    description: "Cepat besar, makan lahap, cocok untuk penggemukan",
    price: "350.000 - 750.000",
    age: "3 - 6 bulan",
    image: "anakanrandu.png",
    badge: "BEST SELLER",
    sold: "280+",
    rating: 4.8,
    roi: "200%",
    features: [
      "Nafsu makan sangat tinggi",
      "Pertambahan bobot pesat",
      "Adaptasi mudah & tahan penyakit",
      "ROI cepat dalam 6-8 bulan",
    ],
    investment: true,
  },
  {
    name: "Peranakan Kambing Jawa Kacang",
    weight: "7-11kg",
    gender: "Jantan",
    description: "Lincah, kuat, dan perawatan mudah",
    price: "350.000 - 750.000",
    age: "3 - 6 bulan",
    image: "anakankacang.png",
    badge: "EKONOMIS",
    sold: "220+",
    rating: 4.7,
    roi: "180%",
    features: [
      "Perawatan paling mudah & hemat",
      "Tahan penyakit luar biasa",
      "Cocok untuk pemula",
      "Biaya pakan minimal",
    ],
    investment: true,
  },
  {
    name: "Anak Domba",
    weight: "8-14kg",
    gender: "Jantan",
    description: "Bulu tebal, sehat, dan cepat naik bobot",
    price: "350.000 - 750.000",
    age: "3 - 6 bulan",
    image: "anakandomba.png",
    badge: "POPULER",
    sold: "190+",
    rating: 4.8,
    roi: "220%",
    features: [
      "Bulu berkualitas tinggi",
      "Kenaikan bobot cepat",
      "Permintaan pasar stabil",
      "Dual income: daging & bulu",
    ],
    investment: true,
  },
];

const Peranakan = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "PREMIUM":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "BEST SELLER":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "EKONOMIS":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "POPULER":
        return "bg-gradient-to-r from-blue-500 to-sky-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-sky-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white py-30 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
            <p className="text-sm font-bold tracking-wider flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              INVESTASI TERNAK MENGUNTUNGKAN
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Anakan Kambing Berkualitas
          </h1>

          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
            Mulai bisnis ternak dengan anakan sehat yang
            <span className="text-yellow-300 font-black">
              {" "}
              tumbuh cepat & menguntungkan
            </span>
          </p>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Investasi mulai{" "}
            <span className="text-yellow-300 font-black text-3xl">
              Rp 300.000
            </span>
            <span className="ml-2">
              bisa berkembang hingga 200-250% dalam 6-12 bulan!
            </span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaChartLine className="text-2xl text-green-300" />
              <span className="font-bold">ROI Tinggi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaShieldAlt className="text-2xl text-yellow-300" />
              <span className="font-bold">Sehat & Unggul</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaLeaf className="text-2xl text-green-300" />
              <span className="font-bold">Perawatan Mudah</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaCertificate className="text-2xl text-blue-300" />
              <span className="font-bold">Bersertifikat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Benefits */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-blue-200">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Kenapa Investasi Anakan Kambing?
            </h3>
            <p className="text-gray-600">
              Peluang bisnis ternak yang menjanjikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Modal Terjangkau</h4>
              <p className="text-sm text-gray-600">
                Mulai dari 1 juta, bisa mulai ternak
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Tumbuh Cepat</h4>
              <p className="text-sm text-gray-600">
                6-12 bulan sudah siap jual/ternak
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">ROI 200-250%</h4>
              <p className="text-sm text-gray-600">
                Keuntungan hingga 2-3x lipat
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">
                Permintaan Tinggi
              </h4>
              <p className="text-sm text-gray-600">
                Pasar stabil sepanjang tahun
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold text-sm md:text-base uppercase tracking-wider mb-3">
            🐐 PILIHAN ANAKAN TERBAIK
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">
            Anakan Kambing Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Pilih anakan berkualitas untuk memulai atau mengembangkan usaha
            ternak Anda
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {peranakans.map((peranakan, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } ${activeIndex === i ? "scale-[1.02]" : ""}`}
            >
              {/* Investment Badge */}
              {peranakan.investment && (
                <div
                  className={`absolute top-6 ${
                    i % 2 !== 0 ? "left-6" : "right-6"
                  } z-20`}
                >
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full font-black text-sm shadow-lg flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    ROI {peranakan.roi}
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
                    peranakan.badge
                  )} text-white px-4 py-2 rounded-full font-black text-sm shadow-lg transform -rotate-3`}
                >
                  ⭐ {peranakan.badge}
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 relative p-8 lg:p-12">
                <div className="relative">
                  {/* Decorative Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full blur-3xl opacity-50 scale-75"></div>

                  <img
                    src={`https://ik.imagekit.io/purnomo/${peranakan.image}`}
                    alt={peranakan.name}
                    className="relative w-full max-h-80 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mt-6">
                  <div className="bg-blue-50 px-4 py-2 rounded-xl text-center border-2 border-blue-200">
                    <Users className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Terjual</p>
                    <p className="font-black text-blue-700">{peranakan.sold}</p>
                  </div>
                  <div className="bg-yellow-50 px-4 py-2 rounded-xl text-center border-2 border-yellow-200">
                    <FaStar className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Rating</p>
                    <p className="font-black text-yellow-600">
                      {peranakan.rating}
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
                <div className="mt-3">
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3 leading-tight">
                    {peranakan.name}
                  </h2>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                      <Scale className="w-4 h-4" />
                      {peranakan.weight}
                    </span>
                    <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold">
                      🐐 {peranakan.gender}
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {peranakan.age}
                    </span>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {peranakan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="font-bold text-gray-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Keunggulan Investasi:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {peranakan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl border-l-4 border-blue-500"
                      >
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-semibold text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 border-t-2 border-gray-100">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6 border-2 border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          Investasi Mulai
                        </p>
                        <p className="font-black text-green-600">
                          <span className="text-3xl lg:text-4xl">
                            Rp{" "}
                            {parseFloat(
                              peranakan.price.split(" - ")[0]
                            ).toLocaleString("id-ID")}
                          </span>
                          .000
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          s/d Rp {parseFloat(peranakan.price.split(" - ")[1])}
                          .000
                        </p>
                      </div>
                      <div className="text-right">
                        <FaChartLine className="w-8 h-8 text-green-500 ml-auto mb-1" />
                        <p className="text-xs text-gray-600">Potensi ROI</p>
                        <p className="text-xl font-black text-green-600">
                          {peranakan.roi}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(
                      peranakan.name
                    )}%0A%0ABerat:%20${peranakan.weight}%0AUmur:%20${
                      peranakan.age
                    }%0A%0AMohon%20info%20lengkap%20dan%20cara%20perawatannya.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group/btn font-bold text-lg"
                  >
                    <FaWhatsapp className="w-6 h-6 animate-bounce" />
                    <span>Mulai Investasi Sekarang</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    💬 Konsultasi Gratis • 📦 Ready Stock • 🎓 Panduan Ternak
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Calculator CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-sky-600 rounded-3xl p-10 text-white shadow-2xl">
          <div className="text-center mb-10">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Hitung Potensi Keuntungan Anda!
            </h3>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Investasi Rp 3000.000 hari ini bisa menjadi{" "}
              <span className="text-yellow-300 font-black">Rp 1.500.000</span>{" "}
              dalam 6-12 bulan!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-green-300" />
              <h4 className="font-black text-lg mb-2">Modal Awal</h4>
              <p className="text-2xl font-black">Rp 300.000</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <Calendar className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
              <h4 className="font-black text-lg mb-2">Waktu</h4>
              <p className="text-2xl font-black">6-12 Bulan</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-blue-300" />
              <h4 className="font-black text-lg mb-2">Hasil</h4>
              <p className="text-2xl font-black">Rp 1.500.000+</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20bisnis%20ternak%20kambing%20dan%20menghitung%20potensi%20keuntungannya`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-black text-lg shadow-xl transition-all transform hover:scale-105"
            >
              <FaWhatsapp className="w-7 h-7 text-green-600" />
              Konsultasi Bisnis Ternak Gratis
            </a>
            <p className="mt-4 text-sm">
              📊 Dapatkan perhitungan lengkap & panduan ternak
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Garansi Sehat
            </h4>
            <p className="text-gray-600 text-center">
              Anakan sehat, aktif, dan bebas penyakit dengan garansi 7 hari
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLeaf className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Panduan Lengkap
            </h4>
            <p className="text-gray-600 text-center">
              Gratis konsultasi perawatan, pakan, dan tips sukses ternak
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              After Sales
            </h4>
            <p className="text-gray-600 text-center">
              Dukungan berkelanjutan sampai kambing siap jual/ternak
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peranakan;
