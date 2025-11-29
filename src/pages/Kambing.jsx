import React, { useState } from "react";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaTruck,
  FaShieldAlt,
  FaCertificate,
  FaStar,
} from "react-icons/fa";
import { Award, Heart, TrendingUp, Users } from "lucide-react";
import Navbar from "../components/Navbar";

const WA_NUMBER = "6281234567890"; // Ganti dengan nomor yang sesuai

const kambings = [
  {
    name: "Kambing Etawa Premium",
    weight: "25-30kg",
    gender: "Jantan",
    description:
      "Kambing PE Premium dengan postur besar, sehat, dan aktif. Cocok untuk penggemukan atau pembibitan, siap kirim dalam kondisi terawat dan berkualitas",
    price: "Rp 1.500.000 - Rp 7.500.000",
    image: "etawa.png",
    badge: "PREMIUM",
    sold: "200+",
    rating: 4.9,
    features: [
      "Sertifikat kesehatan",
      "Garansi sehat 7 hari",
      "Panduan perawatan gratis",
      "Konsultasi dokter hewan",
    ],
  },
  {
    name: "Kambing Jawa Randu Super",
    weight: "20-25kg",
    gender: "Jantan",
    description:
      "Kambing Jawa Randu dengan badan proporsional, nafsu makan bagus, dan cepat besar. Ideal untuk ternak harian maupun persiapan jangka panjang",
    price: "Rp 750.000 - Rp 2.500.000",
    image: "jawarandu.png",
    badge: "BEST SELLER",
    sold: "350+",
    rating: 4.8,
    features: [
      "Adaptasi cepat",
      "Nafsu makan tinggi",
      "Pertumbuhan optimal",
      "Perawatan mudah",
    ],
  },
  {
    name: "Kambing Jawa Kacang",
    weight: "28-32kg",
    gender: "Jantan",
    description:
      "Kambing Jawa Kacang yang lincah, tahan penyakit, dan mudah dipelihara. Pilihan tepat untuk ternak efisien dan perawatan ringan",
    price: "Rp 500.000 - Rp 3.000.000",
    image: "jawakacang.png",
    badge: "HEMAT",
    sold: "280+",
    rating: 4.7,
    features: [
      "Tahan penyakit",
      "Perawatan ekonomis",
      "Cocok pemula",
      "ROI tinggi",
    ],
  },
  {
    name: "Domba",
    weight: "26-30kg",
    gender: "Jantan",
    description:
      "Domba sehat dengan bulu tebal dan pertumbuhan stabil. Cocok untuk penggemukan, pembibitan, atau stok ternak berkualitas",
    price: "Rp 500.000 - Rp 2.300.000",
    image: "domba.png",
    badge: "POPULER",
    sold: "180+",
    rating: 4.8,
    features: [
      "Bulu berkualitas",
      "Pertumbuhan stabil",
      "Cocok segala iklim",
      "Nilai jual tinggi",
    ],
  },
];

const Kambing = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "PREMIUM":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "BEST SELLER":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "HEMAT":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "POPULER":
        return "bg-gradient-to-r from-blue-500 to-sky-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 pt-10">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
            <p className="text-sm font-bold tracking-wider">
              🐐 KOLEKSI KAMBING TERBAIK
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Pilihan Kambing Berkualitas
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
            Mulai dari{" "}
            <span className="text-yellow-300 font-black text-3xl">
              Rp 500.000
            </span>
            , bawa pulang kambing pilihan dengan{" "}
            <span className="font-bold">
              jaminan kesehatan & kualitas terbaik
            </span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaShieldAlt className="text-2xl text-green-300" />
              <span className="font-bold">Garansi Sehat</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaTruck className="text-2xl text-blue-300" />
              <span className="font-bold">Gratis Ongkir*</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <FaCertificate className="text-2xl text-yellow-300" />
              <span className="font-bold">Bersertifikat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
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
              {/* Badge */}
              <div
                className={`absolute top-6 ${
                  i % 2 !== 0 ? "right-6" : "left-6"
                } z-20`}
              >
                <div
                  className={`${getBadgeColor(
                    kambing.badge
                  )} text-white px-4 py-2 rounded-full font-black text-sm shadow-lg transform -rotate-3 animate-pulse`}
                >
                  ⭐ {kambing.badge}
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 relative p-8 lg:p-12">
                <div className="relative">
                  {/* Decorative Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full blur-3xl opacity-50 scale-75"></div>

                  <img
                    src={`https://ik.imagekit.io/purnomo/${kambing.image}`}
                    alt={kambing.name}
                    className="relative w-full max-h-80 object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-4 mt-6">
                  <div className="bg-sky-50 px-4 py-2 rounded-xl text-center">
                    <Users className="w-5 h-5 text-sky-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Terjual</p>
                    <p className="font-black text-sky-700">{kambing.sold}</p>
                  </div>
                  <div className="bg-yellow-50 px-4 py-2 rounded-xl text-center">
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
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-3 leading-tight">
                    {kambing.name}
                  </h2>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-bold">
                      📏 {kambing.weight}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold">
                      🐐 {kambing.gender}
                    </span>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {kambing.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="font-bold text-gray-800 flex items-center gap-2">
                    <Award className="w-5 h-5 text-sky-600" />
                    Keunggulan Produk:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {kambing.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
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
                      <TrendingUp className="w-8 h-8 text-green-500 ml-auto mb-1" />
                      <p className="text-xs text-gray-500">Investasi</p>
                      <p className="text-sm font-bold text-green-600">
                        Menguntungkan
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=Halo%20saya%20ingin%20memesan%20${encodeURIComponent(
                      kambing.name
                    )}%0A%0ASaya%20tertarik%20dengan%20produk%20ini%20dan%20ingin%20tahu%20lebih%20detail.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group/btn font-bold text-lg"
                  >
                    <FaWhatsapp className="w-6 h-6 animate-bounce" />
                    <span>Pesan via WhatsApp</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    💬 Fast Response • 📦 Ready Stock • ✅ Proses Mudah
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
          <Heart className="w-16 h-16 mx-auto mb-6 text-red-300" />
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Masih Bingung Pilih yang Mana?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Konsultasi GRATIS dengan ahli kami untuk membantu Anda memilih
            kambing yang tepat sesuai kebutuhan!
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20untuk%20memilih%20kambing%20yang%20tepat`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-sky-700 hover:bg-gray-50 px-8 py-4 rounded-full font-black text-lg shadow-xl transition-all transform hover:scale-105"
          >
            <FaWhatsapp className="w-7 h-7 text-green-600" />
            Konsultasi Gratis Sekarang
          </a>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900">
              Garansi Kesehatan
            </h4>
            <p className="text-gray-600">
              Jaminan hewan sehat 7 hari atau uang kembali 100%
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900">
              Pengiriman Aman
            </h4>
            <p className="text-gray-600">
              Diantar langsung ke alamat dengan handling profesional
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900">
              Bersertifikat
            </h4>
            <p className="text-gray-600">
              Lengkap dengan surat kesehatan & dokumen resmi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kambing;
