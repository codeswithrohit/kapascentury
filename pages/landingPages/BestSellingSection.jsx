"use client"

import useEmblaCarousel from "embla-carousel-react"
import { FaHeart, FaEye } from "react-icons/fa"
import { HiOutlineSquares2X2 } from "react-icons/hi2"
import { useCart } from "../../context/CartContext"

const products = [
  {
    id: 1,
    name: "Mauve Pink Embroidered Tissue",
    price: 225,
    oldPrice: 250,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_2_2.jpg?v=1757989565&width=660",
    discount: "-10%",
  },
  {
    id: 2,
    name: "Black Silk Eid Lehenga & Choli",
    price: 180,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_3_2.jpg?v=1757989892&width=720",
  },
  {
    id: 3,
    name: "Light Maroon Embroidered Trouser",
    price: 310,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_4_2.jpg?v=1757990041&width=720",
  },
  {
    id: 4,
    name: "Navy Blue Sequin Embroidered",
    price: 285,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_5_2.jpg?v=1757990552&width=720",
    tag: "Pre-Order",
  },
  {
    id: 5,
    name: "Woven Design Organza Saree",
    price: 350,
    oldPrice: 400,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_7_2.webp?v=1758097443&width=660",
    discount: "-13%",
  },
]

export default function ProductCarousel() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  })
  const { addToCart } = useCart();

  return (
    <section className="py-8">
      <h2 className="text-4xl font-serif text-center mb-10">
        Best Selling
      </h2>

      <div className="overflow-hidden  mx-8" ref={emblaRef}>
        <div className="flex gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[190px]  rounded-2xl overflow-hidden group relative"
            >
              {/* Image Section */}
              <div className="relative h-[370px] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105  rounded-2xl"
                />

                {/* Discount / Tag */}
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}

                {product.tag && (
                  <span className="absolute top-4 left-4 bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}

                {/* Hover Icons */}
                <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <FaHeart size={16} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <HiOutlineSquares2X2 size={18} />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <FaEye size={16} />
                  </button>
                </div>

                {/* Add To Cart Button */}
                <div className="px-4 absolute bottom-4 left-0 w-full opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-full rounded-full bg-white text-black py-3 font-medium hover:bg-black hover:text-white transition"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="font-medium text-lg truncate">
                  {product.name}
                </h3>

                {/* 5-star rating (below name, above price) */}
                <div className="mt-2 flex justify-center">
                  <span className="text-yellow-400 text-sm" aria-hidden>
                    ★★★★★
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-red-600 font-semibold text-lg">
                    ₹{product.price}.00
                  </span>

                  {product.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through">
                      ₹{product.oldPrice}.00
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}