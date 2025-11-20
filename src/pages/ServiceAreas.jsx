import React from "react";

const areas = [
  "Banjarnegara","Banyumas","Purbalingga","Cilacap",
  "Grobogan","Kudus","Jepara","Pati","Rembang","Blora",
  "Semarang","Demak","Kendal",
  "Temanggung","Wonosobo","Magelang","Purworejo","Kebumen",
  "Pekalongan","Batang","Pemalang","Brebes",
  "Surakarta","Sukoharjo","Klaten","Boyolali","Sragen","Karanganyar","Wonogiri",
  "Kulonprogo","Gunungkidul","Bantul","Sleman","Kota Yogyakarta"
];

const ServiceAreas = () => {
  return (
    <section className="py-10 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Daerah Layanan Kami
        </h2>
        <p className="text-gray-600 mb-4 text-lg">
          Berikut adalah daftar daerah yang ada pada layanan Kami
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {areas.map((area, i) => (
            <button
              key={i}
              className="bg-sky-100 text-sky-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-sky-200 transition"
            >
              {area}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
