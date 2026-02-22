import { useState, useEffect } from "react";
import pic1 from "../assets/pic1.JPG";
import pic2 from "../assets/pic2.JPG";
import pic3 from "../assets/pic3.JPG";
import pic4 from "../assets/pic4.JPG";
import pic5 from "../assets/pic5.JPG";
import pic6 from "../assets/pic6.JPG";

import pic8 from "../assets/pic8.JPG";
import NavBar from "./NavBar";
import Message from "./Message"

export default function Gallery() {
  const images = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic8
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <NavBar />y-20 px-6 
      <section className="lg:p-12  mx-auto bg-gradient-to-b from-white to-[#FFF8DC] overflow-hidden rounded-b-[80px] border-b border-black ">
        <div className="max-w-7xl mx-auto">

          {/* LEFT: IMAGE GALLERY */}
          <div className="relative w-[70%] h-[60%] mx-auto overflow-hidden rounded-2xl shadow-lg group">

            {/* Image */}
            <img
              src={images[index]}
              alt="Clinic Gallery"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 
                       bg-white/60 hover:bg-white text-gray-700 
                       rounded-full p-2 shadow-md backdrop-blur
                       transition"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 
                       bg-white/60 hover:bg-white text-gray-700 
                       rounded-full p-2 shadow-md backdrop-blur
                       transition"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full transition-all
                ${i === index ? "bg-blue-600 w-6" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
          </div>

          {/* RIGHT: ABOUT TEXT */}


        </div>
      </section>
      <Message />
    </div>
  );
}
