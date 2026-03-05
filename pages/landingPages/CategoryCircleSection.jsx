"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const categories = [
  { name: "Sarees", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt1.webp?v=1757755327&width=100" },
  { name: "Anarkali Suits", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt2.webp?v=1757755327&width=100" },
  { name: "Kurta Sets", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt3.webp?v=1757755327&width=100" },
  { name: "Lehengas", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt6.webp?v=1757755327&width=100" },
  { name: "Bridal Sarees", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt7.webp?v=1757755327&width=100" },
  { name: "Designer Suits", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt5.webp?v=1757755326&width=100" },
  { name: "Festive Wear", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt4.webp?v=1757755326&width=100" },
  { name: "Party Wear", image: "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt8.webp?v=1757755326&width=100" },
];

export default function CategoryCircleSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <section className="py-6 pt-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {categories.map((cat, index) => (
                <div
                  key={index}
                  className="flex-[0_0_56%] sm:flex-[0_0_26%] md:flex-[0_0_14%] text-center px-1"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md transition duration-300 hover:scale-105">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="mt-4 font-bold text-sm md:text-base text-gray-800">
                    {cat.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {/* <div className="flex justify-center mt-8 gap-3">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-6 bg-black"
                  : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div> */}

      </div>
    </section>
  );
}