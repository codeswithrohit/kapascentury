"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BodyCare() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const cards = [
    {
      title: "Hydra Glow",
      subtitle: "YOUR EVERYDAY SUNSCREEN TINT",
      img: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8",
      badge: "New Launch!",
      color: "from-blue-50 via-sky-50 to-blue-100",
      button: "bg-pink-600",
    },
    {
      title: "Smudge-Proof Makeup",
      subtitle: "10 formulas that stay flawless all day",
      img: "https://images-static.nykaa.com/creatives/605797f6-89e1-48e7-b823-6fb872a3dfcc/default.png?tr=cm-pad_resize,w-900",
      badge: "TOP 10",
      color: "from-pink-50 via-rose-50 to-fuchsia-50",
      button: "bg-rose-600",
    },
    {
      title: "Nykaa Moi",
      subtitle: "Luxury French Fragrances",
      img: "https://images-static.nykaa.com/creatives/4211027f-b08d-4e2b-bb88-d472a0056cfe/default.jpg?tr=cm-pad_resize,w-900",
      badge: "Newest Launch",
      color: "from-amber-50 via-yellow-50 to-amber-100",
      button: "bg-amber-600",
    },
    {
      title: "Nykaa Moi",
      subtitle: "Luxury French Fragrances",
      img: "https://images-static.nykaa.com/creatives/19776601-da1c-43dd-8d9a-ba84ebfed101/default.jpg?tr=cm-pad_resize,w-900",
      badge: "Newest Launch",
      color: "from-amber-50 via-yellow-50 to-amber-100",
      button: "bg-amber-600",
    },
    {
      title: "Nykaa Moi",
      subtitle: "Luxury French Fragrances",
      img: "https://images-static.nykaa.com/creatives/60898b79-9287-4972-9e68-c12c55eaa413/default.jpg?tr=cm-pad_resize,w-900",
      badge: "Newest Launch",
      color: "from-amber-50 via-yellow-50 to-amber-100",
      button: "bg-amber-600",
    },
    {
      title: "Nykaa Moi",
      subtitle: "Luxury French Fragrances",
      img: "https://images-static.nykaa.com/creatives/86f5702d-e6bf-4dab-a5f0-abdcdcbade9a/default.jpg?tr=cm-pad_resize,w-900",
      badge: "Newest Launch",
      color: "from-amber-50 via-yellow-50 to-amber-100",
      button: "bg-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-10">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Body Care • Skincare • Makeup • Fragrance
        </h1>

        <p className="mt-2 text-gray-600 text-lg">
          Discover New Launches • Bestsellers • Editor's Favorites
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-10">

        {/* navigation */}
        <div className="flex justify-end gap-3 mb-5">

          <button
            onClick={scrollPrev}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-black hover:text-white"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-black hover:text-white"
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">

            {cards.map((card, index) => (

              <div
                key={index}
                className="flex-[0_0_85%] md:flex-[0_0_48%] lg:flex-[0_0_32%]"
              >

                <div
                  className={`group rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${card.color}`}
                >

                  {/* IMAGE */}
                  <div className="h-96 overflow-hidden">

                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <span className="text-xs bg-white px-3 py-1 rounded-full font-semibold">
                      {card.badge}
                    </span>

                    <h2 className="text-xl font-bold mt-3">
                      {card.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2">
                      {card.subtitle}
                    </p>

                    <button
                      className={`mt-4 px-6 py-2 text-white rounded-full ${card.button}`}
                    >
                      Shop Now →
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>
      </div>

      {/* DISCOUNT BANNER */}
      <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 py-6 text-white">

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <div>
            <p className="text-2xl font-bold">
              Extra <span className="text-yellow-200">20%</span> OFF
            </p>
            <p className="text-sm opacity-90">
              On Orders Above ₹149
            </p>
          </div>

          <div className="bg-white/30 px-6 py-3 rounded-full font-bold">
            USE CODE <span className="text-yellow-200">EXTRA20%</span>
          </div>

          <p className="font-medium">
            UP TO ₹300 OFF
          </p>

        </div>
      </div>

    </div>
  );
}