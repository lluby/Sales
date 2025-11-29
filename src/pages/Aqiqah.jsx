import React, { useState } from "react";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaCertificate,
  FaShieldAlt,
  FaTruck,
  FaClock,
} from "react-icons/fa";
import {
  Sparkles,
  Gift,
  ChefHat,
  Heart,
  Award,
  TrendingUp,
  Package,
} from "lucide-react";
import Navbar from "../components/Navbar";

const WA_NUMBER = "6281234567890"; // Ganti dengan nomor yang sesuai

const packages = [
  {
    title: "Paket Hemat",
    subtitle: "20 Porsi (1 Kambing Betina)",
    image: "aqiqah1.jpg",
    portions: "20",
    goat: "1 Ekor Kambing Betina",
    items: ["Nasi putih", "Kerupuk", "Sendok", "Menu: Semur kambing"],
    price: "1.800.000",
    badge: "EKONOMIS",
    popular: false,
    rating: 4.7,
    orders: "150+",
  },
  {
    title: "Paket Standar",
    subtitle: "30 Porsi (1 Kambing Jantan)",
    image: "aqiqah1.jpg",
    portions: "30",
    goat: "1 Ekor Kambing Jantan",
    items: [
      "Nasi putih",
      "Kerupuk",
      "Buah pisang",
      "Menu: Semur kambing + Bihun goreng",
    ],
    price: "2.300.000",
    badge: "POPULER",
    popular: true,
    rating: 4.8,
    orders: "280+",
  },
  {
    title: "Paket Favorit",
    subtitle: "40 Porsi (1 Kambing Jantan Besar)",
    image: "aqiqah1.jpg",
    portions: "40",
    goat: "1 Ekor Kambing Jantan Besar",
    items: [
      "Nasi cetak",
      "Kerupuk",
      "Buah pisang",
      "Kartu ucapan",
      "Menu: Sambel goreng kambing + Bihun goreng + Telor rebus",
    ],
    price: "2.900.000",
    badge: "BEST SELLER",
    popular: true,
    rating: 4.9,
    orders: "420+",
  },
  {
    title: "Paket Premium",
    subtitle: "50 Porsi (2 Kambing Betina)",
    image: "aqiqah1.jpg",
    portions: "50",
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
    price: "3.900.000",
    badge: "TERLARIS",
    popular: true,
    rating: 4.9,
    orders: "350+",
  },
  {
    title: "Paket Spesial",
    subtitle: "60 Porsi (2 Kambing Jantan)",
    image: "aqiqah1.jpg",
    portions: "60",
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
    price: "4.700.000",
    badge: "PREMIUM",
    popular: false,
    rating: 4.8,
    orders: "180+",
  },
  {
    title: "Paket Exclusive",
    subtitle: "80 Porsi (2 Kambing Jantan Besar)",
    image: "aqiqah1.jpg",
    portions: "80",
    goat: "2 Ekor Kambing Jantan Besar",
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
    price: "5.900.000",
    badge: "VIP",
    popular: false,
    rating: 5.0,
    orders: "120+",
  },
];

const Aqiqah = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "EKONOMIS":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "POPULER":
        return "bg-gradient-to-r from-blue-500 to-sky-500";
      case "BEST SELLER":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "TERLARIS":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "PREMIUM":
        return "bg-gradient-to-r from-yellow-500 to-amber-500";
      case "VIP":
        return "bg-gradient-to-r from-gray-800 to-gray-900";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white pt-30 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
            <p className="text-sm font-bold tracking-wider">
              🎉 PAKET AQIQAH TERLENGKAP
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Paket Aqiqah Berkah
          </h1>

          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
            Rayakan momen istimewa dengan paket aqiqah praktis & berkualitas
          </p>

          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Mulai dari{" "}
            <span className="text-yellow-300 font-black text-3xl">
              Rp 1.800.000
            </span>
            <span className="ml-2">
              sudah termasuk kambing, masakan, dan perlengkapan lengkap
            </span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
              <FaShieldAlt className="text-xl text-green-300" />
              <span className="font-bold text-sm">Halal & Syar'i</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
              <ChefHat className="w-5 h-5 text-yellow-300" />
              <span className="font-bold text-sm">Masakan Lezat</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
              <FaTruck className="text-xl text-blue-300" />
              <span className="font-bold text-sm">Antar Gratis*</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
              <FaClock className="text-xl text-pink-300" />
              <span className="font-bold text-sm">Tepat Waktu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="font-black text-lg mb-2">Paket Lengkap</h3>
            <p className="text-sm text-gray-600">
              Kambing + Masakan + Box + Perlengkapan
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-black text-lg mb-2">Halal Certified</h3>
            <p className="text-sm text-gray-600">
              Penyembelihan sesuai syariat Islam
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-black text-lg mb-2">Cita Rasa Terjamin</h3>
            <p className="text-sm text-gray-600">Masakan higienis & lezat</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="font-black text-lg mb-2">Pelayanan Tulus</h3>
            <p className="text-sm text-gray-600">
              Membantu ibadah dengan sepenuh hati
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-bold text-sm uppercase tracking-wider mb-3">
              💝 PILIH PAKET TERBAIK
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              Paket Aqiqah Kami
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  pkg.popular ? "ring-4 ring-purple-400 ring-opacity-50" : ""
                } ${hoveredIndex === i ? "scale-105 z-10" : ""}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-bl-2xl font-black text-sm shadow-lg z-20 flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    REKOMENDASI
                  </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div
                    className={`${getBadgeColor(
                      pkg.badge
                    )} text-white px-4 py-1.5 rounded-full font-black text-xs shadow-lg`}
                  >
                    {pkg.badge}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={`https://ik.imagekit.io/purnomo/${pkg.image}`}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Portion Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-purple-600" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold">
                          Untuk
                        </p>
                        <p className="text-lg font-black text-gray-900">
                          {pkg.portions} Porsi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-gray-900 mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-semibold">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500 w-4 h-4" />
                      <span className="text-sm font-bold text-gray-700">
                        {pkg.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Package className="w-4 h-4" />
                      <span className="text-sm font-bold">
                        {pkg.orders} pesanan
                      </span>
                    </div>
                  </div>

                  {/* Goat Info */}
                  <div className="bg-purple-50 rounded-xl p-3 mb-4">
                    <p className="text-xs text-purple-600 font-bold mb-1">
                      🐐 Kambing
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      {pkg.goat}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      TERMASUK:
                    </p>
                    <ul className="space-y-2">
                      {pkg.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t-2 border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          Harga Paket
                        </p>
                        <p className="font-black text-purple-600">
                          <span className="text-2xl">
                            Rp {parseFloat(pkg.price).toLocaleString("id-ID")}
                          </span>
                          jt
                        </p>
                      </div>
                      <div className="text-right">
                        <TrendingUp className="w-6 h-6 text-green-500 ml-auto mb-1" />
                        <p className="text-xs text-green-600 font-bold">
                          Hemat & Praktis
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(
                        pkg.title + " - " + pkg.subtitle
                      )}%0A%0AHarga:%20Rp${pkg.price}%0AUntuk:%20${
                        pkg.portions
                      }%20Porsi`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-bold group/btn"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Pesan Sekarang</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>

                    <p className="text-center text-xs text-gray-500 mt-2">
                      💬 Fast Response • 🔒 Aman & Terpercaya
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-10 text-center text-white shadow-2xl">
          <Gift className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Butuh Paket Custom?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Kami siap membantu membuat paket aqiqah sesuai kebutuhan dan budget
            Anda.
            <span className="block mt-2 text-yellow-300 font-black">
              Konsultasi GRATIS!
            </span>
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20ingin%20konsultasi%20untuk%20paket%20aqiqah%20custom`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-sky-700 hover:bg-gray-50 px-8 py-4 rounded-full font-black text-lg shadow-xl transition-all transform hover:scale-105"
          >
            <FaWhatsapp className="w-7 h-7 text-green-600" />
            Konsultasi Gratis
          </a>
          <p className="mt-6 text-sm">
            ⚡ Respon dalam 5 menit • 📞 Bisa video call lihat kambing
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Proses Syar'i
            </h4>
            <p className="text-gray-600 text-center">
              Penyembelihan sesuai tuntunan agama oleh ahli yang berpengalaman
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Higienis & Halal
            </h4>
            <p className="text-gray-600 text-center">
              Dapur bersih, masakan higienis dengan standar kesehatan tinggi
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-black text-xl mb-2 text-gray-900 text-center">
              Tepat Waktu
            </h4>
            <p className="text-gray-600 text-center">
              Pengantaran tepat waktu sesuai jadwal yang telah disepakati
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aqiqah;
