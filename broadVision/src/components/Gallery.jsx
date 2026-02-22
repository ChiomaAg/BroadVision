import { useState, useEffect } from "react";
import pic1 from "../assets/pic1.JPG";
import pic2 from "../assets/pic2.JPG";
import pic3 from "../assets/pic3.JPG";
import pic4 from "../assets/pic4.JPG";
import pic5 from "../assets/pic5.JPG";
import pic6 from "../assets/pic6.JPG";
import pic7 from "../assets/pic7.JPG";
import pic8 from "../assets/pic8.JPG";

export default function Gallery() {
  const images = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8
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
    <section className="py-20 px-6 lg:px-16 bg-[#f7f9ff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE GALLERY */}
        <div className="relative w-full h-[420px] overflow-hidden rounded-2xl shadow-lg group">

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
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Broadvision Eye Clinic
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At Broadvision Eye Clinic, we are committed to providing exceptional
            eye care tailored to your needs. Through modern diagnostic tools,
            experienced optometrists, and compassionate service, we help each
            patient achieve their best possible vision.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From routine checkups to advanced treatments, we support your vision
            health every step of the way. Our mission is to deliver safe,
            effective, and personalized eye care for patients of all ages.
          </p>
        </div>

      </div>
    </section>
  );
}
