import React from "react";
import { BRAND } from "../config";

const Gallery = () => {
  const mediaItems = [
    {
      type: "video",
      src: "https://ik.imagekit.io/purnomo/WhatsApp%20Video%202025-11-24%20at%2016.42.19.mp4",
    },
    {
      type: "video",
      src: "https://ik.imagekit.io/purnomo/WhatsApp%20Video%202025-11-24%20at%2016.42.19%20(1).mp4",
    },
    {
      type: "video",
      src: "https://ik.imagekit.io/purnomo/WhatsApp%20Video%202025-11-24%20at%2016.38.04.mp4",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Galeri Kandang {BRAND}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full max-h-[1000px] rounded-2xl overflow-hidden shadow-md"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Galeri ${BRAND} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
