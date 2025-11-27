import React from "react";
import { BRAND } from "../config";

const Gallery = () => {
  const images = [
    "/image/kandang1.jpg",
    "/image/kandang2.jpg",
    "/image/kandang3.jpg",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Galeri Kandang {BRAND}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full h-56 md:h-64 rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Galeri kandang ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
