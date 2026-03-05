"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const products = [
  { id: 1, video: "/videos/video1.mp4", title: "Black Silk Ei...", price: "₹180.00" },
  { id: 2, video: "/videos/video2.mp4", title: "Light Maroo...", price: "₹310.00" },
  { id: 3, video: "/videos/video3.mp4", title: "Wine Maroo...", price: "₹165.00" },
  { id: 4, video: "/videos/video4.mp4", title: "Silk Blend...", price: "₹240.00" },
  { id: 5, video: "/videos/video5.mp4", title: "Navy Blue...", price: "₹285.00" },
  { id: 6, video: "/videos/video6.mp4", title: "Embroidere...", price: "₹210.00" },
];

export default function CuratedSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
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
    <section className=" py-16">
      <h2 className="text-center text-4xl font-serif">
        Curated for You!
      </h2>

      <div className="max-w-[1400px] mx-auto  flex flex-col items-center  pt-10">

        {/* Carousel */}
        <div className="overflow-hidden  flex items-center" ref={emblaRef}>
          <div className="flex gap-4  items-center justify-center">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_15%]"
              >
                <div className="relative h-[420px] rounded-3xl overflow-hidden group">
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/20 rounded-xl p-4">
                    <h3 className="text-white text-base font-medium">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {/* <div className="flex justify-center mt-8 gap-3">
          {products.map((_, index) => (
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