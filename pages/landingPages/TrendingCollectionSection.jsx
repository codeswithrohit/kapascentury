"use client";

import useEmblaCarousel from "embla-carousel-react";
import { FaHeart, FaEye } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const products = [
  {
    id: 1,
    name: "Wine Maroon Embroidered",
    price: 165,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_2_2.jpg?v=1757989565&width=660",
  },
  {
    id: 2,
    name: "Silk Blend Anarkali Kurta Set",
    price: 240,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_3_2.jpg?v=1757989892&width=720",
  },
  {
    id: 3,
    name: "Blue Embroidered Kurta Set",
    price: 220,
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_4_2.jpg?v=1757990041&width=720",
  },
  {
    id: 4,
    name: "Woven Design Organza Saree",
    price: 350,
    oldPrice: 400,
    discount: "-13%",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_7_2.webp?v=1758097443&width=660",
  },
  // {
  //   id: 5,
  //   name: "Green Embroidered Lehenga",
  //   price: 190,
  //   image:
  //     "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_5_2.jpg?v=1757990552&width=720",
  // },
];

export default function TrendingCollectionSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-row justify-center gap-4 items-start">

          {/* LEFT BANNER */}
          <div className="hidden lg:block">
            <img
              src="https://demo2-milano.myshopify.com/cdn/shop/files/fs8_12.webp?v=1758101571&width=660"
              alt="Trending Collection"
              className="rounded-3xl w-full h-[440px] object-cover"
            />
          </div>

          {/* RIGHT SIDE PRODUCTS */}
          <div>

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8 pr-4">
              <h2 className="text-4xl font-serif">
                Top Trending Collection
              </h2>

              <button className="underline text-sm hover:text-gray-500">
                View All
              </button>
            </div>

            {/* CAROUSEL */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">

                {products.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[180px] lg:min-w-[190px] group"
                  >

                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-2xl">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* DISCOUNT */}
                      {product.discount && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                          {product.discount}
                        </span>
                      )}

                      {/* HOVER ICONS */}
                      <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">

                        <button className="bg-white p-2 rounded-full shadow">
                          <FaHeart size={14} />
                        </button>

                        <button className="bg-white p-2 rounded-full shadow">
                          <HiOutlineSquares2X2 size={16} />
                        </button>

                        <button className="bg-white p-2 rounded-full shadow">
                          <FaEye size={14} />
                        </button>

                      </div>

                      {/* ADD TO CART */}
                      <div className="absolute bottom-4 left-0 w-full px-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">

                        <button className="w-full bg-white py-2 rounded-full font-medium hover:bg-black hover:text-white">
                          Add To Cart
                        </button>

                      </div>

                    </div>

                    {/* PRODUCT INFO */}
                    <div className="mt-3 text-center">

                      <h3 className="text-sm font-medium truncate">
                        {product.name}
                      </h3>

                      {/* RATING */}
                      <div className="text-orange-400 text-sm mt-1">
                        ★★★★★
                      </div>

                      {/* PRICE */}
                      <div className="mt-1 font-semibold">

                        ₹{product.price}.00

                        {product.oldPrice && (
                          <span className="ml-2 text-gray-400 line-through text-sm">
                            ₹{product.oldPrice}.00
                          </span>
                        )}

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}