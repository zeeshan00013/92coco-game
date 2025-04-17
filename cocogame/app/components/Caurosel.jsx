"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import coco1 from "../Images/coco1.PNG";
import coco2 from "../Images/coco2.PNG";
import coco3 from "../Images/coco3.PNG";
import coco4 from "../Images/coco4.PNG";
import coco5 from "../Images/coco5.PNG";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomCarousel() {
  const images = [
    { src: coco1, alt: "Play and Win" },
    { src: coco2, alt: "92coco Game Referral" },
    { src: coco3, alt: "Secure Deposits" },
    { src: coco4, alt: "Agent Profile setup" },
    { src: coco5, alt: "Secure Withdrawals" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 px-4 sm:px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#f0c059]">
          92coco Game Images
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain transition-all duration-500"
              priority
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/40 p-2 rounded-full hover:bg-black/60 transition z-10"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/40 p-2 rounded-full hover:bg-black/60 transition z-10"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-[#f0c059]" : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
