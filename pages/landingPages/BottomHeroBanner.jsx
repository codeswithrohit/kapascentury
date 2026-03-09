"use client";

export default function BottomHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="https://demo2-milano.myshopify.com/cdn/shop/files/fs8_hero.webp?v=1758101571&width=1920"
        alt="Festive Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6e0d1f]/40"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center lg:justify-start
      min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]
      px-4 sm:px-6 lg:px-10 py-10 sm:py-16">

        {/* Content */}
        <div className="max-w-xl text-white text-center lg:text-left">

          {/* Label */}
          <p className="uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-5 opacity-90">
            Exclusive Deals
          </p>

          {/* Heading */}
          <h1 className="font-serif leading-tight mb-5 sm:mb-7
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl">
            Discover Festive
            <br className="hidden sm:block" />
            Wardrobe Now on Sale
          </h1>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="px-7 sm:px-10 lg:px-12 py-2.5 sm:py-3 border border-white rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-[#6e0d1f]">
              Don't Miss Out
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}