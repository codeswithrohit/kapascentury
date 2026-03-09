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

  return (
    <section className="py-12 lg:py-16">

      {/* TITLE */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif">
        Curated for You!
      </h2>

      <div className="max-w-[1400px] mx-auto px-4 pt-8 lg:pt-10">

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 lg:gap-6">

            {products.map((item) => (
              <div
                key={item.id}
                className="
                flex-[0_0_80%]
                sm:flex-[0_0_45%]
                md:flex-[0_0_30%]
                lg:flex-[0_0_18%]
                "
              >

                <div className="relative h-[320px] sm:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden group">

                  {/* VIDEO */}
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* PRODUCT INFO */}
                  <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/20 rounded-xl p-3 sm:p-4">

                    <h3 className="text-white text-sm sm:text-base font-medium">
                      {item.title}
                    </h3>

                    <p className="text-white/90 text-xs sm:text-sm">
                      {item.price}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-6 lg:mt-8 gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "w-6 bg-black"
                  : "w-2 bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}