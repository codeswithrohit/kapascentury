"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const categories = [
  {
    name: "Sarees",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt1.webp?v=1757755327&width=100",
  },
  {
    name: "Anarkali Suits",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt2.webp?v=1757755327&width=100",
  },
  {
    name: "Kurta Sets",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt3.webp?v=1757755327&width=100",
  },
  {
    name: "Lehengas",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt6.webp?v=1757755327&width=100",
  },
  {
    name: "Bridal Sarees",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt7.webp?v=1757755327&width=100",
  },
  {
    name: "Designer Suits",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt5.webp?v=1757755326&width=100",
  },
  {
    name: "Festive Wear",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt4.webp?v=1757755326&width=100",
  },
  {
    name: "Party Wear",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_clt8.webp?v=1757755326&width=100",
  },
];

export default function CategoryCircleSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">

            {categories.map((cat, index) => (
              <div
                key={index}
                className="
                flex-[0_0_40%]
                sm:flex-[0_0_22%]
                md:flex-[0_0_14%]
                lg:flex-[0_0_12%]
                text-center
                "
              >
                <Link
                  href={`/category/${encodeURIComponent(cat.name)}`}
                  className="flex flex-col items-center group"
                >
                  {/* IMAGE */}
                  <div
                    className="
                    w-20 h-20
                    sm:w-24 sm:h-24
                    md:w-28 md:h-28
                    rounded-full
                    overflow-hidden
                    shadow-md
                    transition
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-lg
                    "
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                    mt-3
                    text-xs sm:text-sm md:text-base
                    font-semibold
                    text-gray-800
                    group-hover:text-black
                    truncate
                    "
                  >
                    {cat.name}
                  </p>
                </Link>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}