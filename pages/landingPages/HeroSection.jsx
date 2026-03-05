"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh]">

      {/* Background Image */}
      <img
        src="https://demo2-milano.myshopify.com/cdn/shop/files/fs8_s1.webp?v=1758101571&width=1920"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">
        <div className="max-w-xl text-white">

          <p className="uppercase tracking-widest text-sm mb-4">
            Celebrate in Style
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Bright Looks for <br /> Special Moments
          </h1>

          <Link
            href="/products"
            className="inline-block border border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
          >
            Shop Now
          </Link>

        </div>
      </div>

    </section>
  );
}