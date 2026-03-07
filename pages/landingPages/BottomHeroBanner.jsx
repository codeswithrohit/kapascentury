"use client";

export default function BottomHeroBanner() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://demo2-milano.myshopify.com/cdn/shop/files/fs8_hero.webp?v=1758101571&width=1920"
        alt="Festive Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6e0d1f]/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-10 py-16">
        
        <div className="max-w-lg text-white text-center sm:text-left">

          {/* Label */}
          <p className="uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 opacity-90">
            Exclusive Deals
          </p>

          {/* Heading */}
          <h1 className="font-serif leading-tight mb-6 sm:mb-8
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl">
            Discover Festive
            <br className="hidden sm:block" />
            Wardrobe Now on Sale
          </h1>

          {/* Button */}
          <button className="px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 border border-white rounded-full text-sm sm:text-md transition-all duration-300 hover:bg-white hover:text-[#6e0d1f]">
            Don't Miss Out
          </button>

        </div>

      </div>
    </section>
  );
}