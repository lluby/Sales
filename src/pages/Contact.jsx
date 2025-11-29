import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaMapMarkedAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import {
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Headphones,
} from "lucide-react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const waMessage =
    "Halo,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Jual%20Kambing.";

  const contact = {
    title: "Hubungi Kami",
    intro: "Siap membantu kebutuhan Anda kapan saja",
    phone: "0813-2788-4060",
    phoneDisplay: "0813 - 2788 - 4060",
    number: "6281327884060",
    email: "info@tanupatra.farm",
    address:
      "RT 06/01 Desa Bangsa, Kec. Kebasen, Kab. Banyumas, Prov. Jawa Tengah",
    hours: "Setiap Hari: 06.00 - 20.00 WIB",
    copyright: "© 2025 Tanupatra Farm. All rights reserved.",
    instagram: "@tanupatrafarm",
    facebook: "Tanupatra Farm",
  };

  const waLink = `https://wa.me/${contact.number}?text=${waMessage}`;

  const handleQuickMessage = () => {
    const customMessage = `Halo, saya ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(customMessage);
    window.open(
      `https://wa.me/${contact.number}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const reasons = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Respon Cepat",
      desc: "Balasan dalam 5 menit",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Konsultasi Gratis",
      desc: "Tanya jawab tanpa biaya",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Layanan Ramah",
      desc: "Tim profesional & terpercaya",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-30 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/30">
            <p className="text-sm font-bold tracking-wider">💬 HUBUNGI KAMI</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            {contact.title}
          </h1>

          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-medium">
            {contact.intro}
          </p>

          <p className="text-lg mb-10">
            Tim kami siap membantu Anda dengan{" "}
            <span className="text-yellow-300 font-black">
              cepat dan profesional
            </span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30"
              >
                <div className="text-yellow-300">{reason.icon}</div>
                <div className="text-left">
                  <p className="font-bold text-sm">{reason.title}</p>
                  <p className="text-xs text-white/80">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                  <FaWhatsapp className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-black">WhatsApp</h3>
                  <p className="text-green-100">Chat langsung dengan kami</p>
                </div>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-black mb-4 block hover:text-yellow-300 transition-colors"
              >
                {contact.phoneDisplay}
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 w-full justify-center"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat Sekarang</span>
                <Send className="w-5 h-5" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <FaPhone className="text-3xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">Telepon</h3>
                  <p className="text-gray-600">Hubungi langsung</p>
                </div>
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="text-2xl font-black text-blue-600 hover:text-blue-700 transition-colors"
              >
                {contact.phoneDisplay}
              </a>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-4 rounded-2xl">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">
                    Jam Operasional
                  </h3>
                  <p className="text-gray-600">Kami buka untuk Anda</p>
                </div>
              </div>
              <p className="text-xl font-bold text-purple-600">
                {contact.hours}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                *Termasuk hari libur nasional
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    Alamat Kantor Pusat
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {contact.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Ternak+Kambing+Tanupatra+Farm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-bold mt-3 hover:text-orange-700 transition-colors"
                  >
                    <FaMapMarkedAlt />
                    Lihat di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-black mb-4">Media Sosial</h3>
              <div className="space-y-3">
                <a
                  href={`https://instagram.com/${contact.instagram.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all"
                >
                  <FaInstagram className="text-2xl" />
                  <span className="font-bold">{contact.instagram}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all"
                >
                  <FaFacebook className="text-2xl" />
                  <span className="font-bold">{contact.facebook}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form & Map */}
          <div className="space-y-6">
            {/* Quick Message Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-sky-100">
              <div className="text-center mb-6">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Kirim Pesan Cepat
                </h3>
                <p className="text-gray-600">
                  Isi form dan langsung chat via WhatsApp
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tulis pertanyaan atau kebutuhan Anda..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleQuickMessage}
                  disabled={!formData.name || !formData.message}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Kirim via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-xs text-center text-gray-500">
                  Pesan akan dikirim langsung ke WhatsApp kami
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-6">
                <h3 className="text-xl font-black flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  Lokasi Kami
                </h3>
                <p className="text-sm text-white/90 mt-1">
                  Kunjungi peternakan kami langsung
                </p>
              </div>
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9435667854036!2d109.2504915!3d-7.581122199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654357ec8f767f%3A0xfb5252ff4a2eca79!2sTernak%20Kambing%20-%20Tanupatra%20Farm!5e0!3m2!1sid!2sid!4v1764221866367!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Why Contact Us */}
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-black mb-6 text-center">
                Kenapa Hubungi Kami?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Konsultasi Gratis</p>
                    <p className="text-sm text-white/90">
                      Tanya jawab sepuasnya tanpa biaya
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Rekomendasi Tepat</p>
                    <p className="text-sm text-white/90">
                      Kami bantu pilih kambing sesuai kebutuhan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Harga Terbaik</p>
                    <p className="text-sm text-white/90">
                      Dapatkan penawaran khusus langsung dari kami
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Masih Ragu? Tanya Kami Dulu!
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tidak ada pertanyaan yang bodoh. Tim kami siap membantu Anda dengan{" "}
            <span className="font-black">ramah dan profesional</span>
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-black text-lg shadow-xl transition-all transform hover:scale-105"
          >
            <FaWhatsapp className="w-7 h-7" />
            Chat WhatsApp Sekarang
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t-2 border-gray-200">
          <p className="text-gray-600 font-medium mb-2">
            Tanupatra Farm - Peternakan Kambing Terpercaya
          </p>
          <p className="text-gray-500 text-sm">{contact.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
