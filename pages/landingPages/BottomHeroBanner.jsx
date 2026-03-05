"use client"

export default function BottomHeroBanner() {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://demo2-milano.myshopify.com/cdn/shop/files/fs8_hero.webp?v=1758101571&width=1920"
        alt="Festive Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Red Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-xl text-white">
          
          {/* Small Label */}
          <p className="uppercase tracking-widest text-sm mb-6 opacity-90">
            Exclusive Deals
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8">
            Discover Festive
            <br />
            Wardrobe Now on Sale
          </h1>

          {/* Button */}
          <button className="px-12 py-3 border border-white rounded-full text-md transition-all duration-300 hover:bg-white hover:text-[#6e0d1f]">
            Don't Miss Out
          </button>

        </div>
      </div>
    </section>
  )
}