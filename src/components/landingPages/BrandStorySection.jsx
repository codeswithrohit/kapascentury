export default function BrandStorySection() {
  return (
    <section className="bg-[#5F0D24] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Small Tagline */}
        <p className="uppercase tracking-widest text-sm mb-6 opacity-90">
          Fashion That Celebrates Individuality.
        </p>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight font-medium">
          Our journey is built on creativity and heritage, shaping fashion that celebrates individuality and timeless beauty.
        </h2>

        {/* Button */}
        <div className="mt-12">
          <button className="px-10 py-3 border border-white rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-[#7b0f23]">
            Learn More
          </button>
        </div>

      </div>
    </section>
  )
}