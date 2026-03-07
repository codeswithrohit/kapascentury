"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Responsive Image Container */}
      <div className="relative w-full 
      h-[420px] 
      sm:h-[520px] 
      md:h-[620px] 
      lg:h-[720px] 
      xl:h-[820px]">

        {/* Background Image */}
        <img
          src="https://demo2-milano.myshopify.com/cdn/shop/files/fs8_s1.webp?v=1758101571&width=1920"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">

          <div className="max-w-8xl mx-auto w-full px-6 sm:px-10 md:px-10 mt-60 sm:mt-72">

            <div className="max-w-lg text-white">

              {/* Subtitle */}
              <p className="uppercase tracking-[4px] 
              text-xs sm:text-sm md:text-base mb-3 opacity-90">
                Celebrate in Style
              </p>

              {/* Heading */}
              <h1 className="
              font-serif font-semibold leading-tight
              text-xl 
              sm:text-xl 
              md:text-2xl 
              lg:text-3xl 
              xl:text-5xl
              mb-6">
                Bright Looks for <br className="hidden sm:block"/> Special Moments
              </h1>

              {/* Button */}
              <Link
                href="/products"
                className="
                inline-block
                border border-white
                px-6 py-2.5
                sm:px-8 sm:py-3
                text-sm sm:text-base lg:text-lg
                rounded-full
                hover:bg-white hover:text-black
                transition-all duration-300
                "
              >
                Shop Now
              </Link>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}