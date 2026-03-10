// components/SpotlightSection.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function SpotlightSection() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const cards = [
    {
      brand: "NOVOLOGY",
      title: "#1 Hydration Duo",
      subtitle: "",
      discount: "",
      image:
        "https://images-static.nykaa.com/creatives/1c55db7a-b7bb-4a36-bc21-6c343342cef6/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Woman applying face serum",
      bg: "bg-gradient-to-br from-rose-50 to-pink-100",
      button: "bg-pink-600 hover:bg-pink-700",
    },
    {
      brand: "Kiehl's SINCE 1851",
      title: "DOUBLE DOWN ON HYDRATION",
      subtitle: "Bestsellers #1 Hydration Duo",
      discount: "",
      image:
        "https://images-static.nykaa.com/creatives/2b6e26d5-9978-41d6-97a6-ce1b5c02c0be/default.jpeg?tr=cm-pad_resize,w-900",
      alt: "Couple skincare",
      bg: "bg-cyan-500",
      button: "bg-white text-gray-900 hover:bg-gray-100",
    },
    {
      brand: "NYKAA × BRIDGERTON",
      title: "CREAMY MATTE LIPSTICKS",
      subtitle: "Up To 30% Off On Makeup Bestsellers!",
      discount: "Back in Stock with collectible ring →",
      image:
        "https://images-static.nykaa.com/creatives/9334c95f-3be8-41e6-a58d-8e4436fa842f/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Woman applying lipstick",
      bg: "bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900",
      button: "bg-pink-600 hover:bg-pink-700",
    },
    {
      brand: "NYKAA × BRIDGERTON",
      title: "CREAMY MATTE LIPSTICKS",
      subtitle: "Up To 30% Off On Makeup Bestsellers!",
      discount: "Back in Stock with collectible ring →",
      image:
        "https://images-static.nykaa.com/creatives/c1e2fc10-b3a3-48a9-8e67-0d9a1ee6d172/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Woman applying lipstick",
      bg: "bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900",
      button: "bg-pink-600 hover:bg-pink-700",
    },
    {
      brand: "NYKAA × BRIDGERTON",
      title: "CREAMY MATTE LIPSTICKS",
      subtitle: "Up To 30% Off On Makeup Bestsellers!",
      discount: "Back in Stock with collectible ring →",
      image:
        "https://images-static.nykaa.com/creatives/0e882d2c-a42e-485b-a2ac-c3246657d113/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Woman applying lipstick",
      bg: "bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900",
      button: "bg-pink-600 hover:bg-pink-700",
    },
    {
      brand: "NYKAA × BRIDGERTON",
      title: "CREAMY MATTE LIPSTICKS",
      subtitle: "Up To 30% Off On Makeup Bestsellers!",
      discount: "Back in Stock with collectible ring →",
      image:
        "https://images-static.nykaa.com/creatives/fe0358bf-459c-4906-8612-abd6dbcc80e5/default.jpg?tr=cm-pad_resize,w-900",
      alt: "Woman applying lipstick",
      bg: "bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900",
      button: "bg-pink-600 hover:bg-pink-700",
    },
  ];

  return (
    <div className="py-10 md:py-12 bg-gray-50">

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          In The Spotlight →
        </h2>

        <div className="relative">

          {/* EMBLA */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">

              {cards.map((card, index) => (

                <div
                  key={index}
                  className="pl-6 flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_32%]"
                >

                  <div
                    className={`rounded-2xl overflow-hidden shadow-lg ${card.bg}`}
                  >

                    {/* IMAGE */}
                    <div className="h-60 md:h-72 overflow-hidden">

                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                      />

                    </div>

                  </div>

                </div>

              ))}

            </div>
          </div>

          {/* NAVIGATION */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 hidden md:flex"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 hidden md:flex"
          >
            →
          </button>

        </div>

      </div>

    </div>
  );
}