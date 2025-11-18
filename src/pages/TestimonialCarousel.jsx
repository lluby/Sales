import React from "react";

const testimonials = [
  {
    name: "Budi",
    img: "/image/chat1.png",
  },
  {
    name: "Siti",
    img: "/image/chat1.png",
  },
  {
    name: "Ahmad",
    img: "/image/chat1.png",
  },
  {
    name: "Budi",
    img: "/image/chat1.png",
  },
  {
    name: "Siti",
    img: "/image/chat1.png",
  },
  {
    name: "Ahmad",
    img: "/image/chat1.png",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="flex overflow-x-auto gap-4 px-4 py-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="flex-none w-72 shadow-lg rounded-xl overflow-hidden"
        >
          <img
            src={t.img}
            alt={`Testimoni ${t.name}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;
