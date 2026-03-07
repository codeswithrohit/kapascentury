"use client";

import Link from "next/link";
import { FiHeart, FiEye, FiLayers } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ id, image, title, price }) {
const { addToCart } = useCart();

return (
<Link href={`/productDetail/${title}`}> <div className="group bg-white rounded-2xl overflow-hidden cursor-pointer transition duration-300 hover:shadow-lg">


    {/* Image Section */}
    <div className="relative overflow-hidden rounded-2xl">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full 
        h-[220px] 
        sm:h-[260px] 
        md:h-[300px] 
        lg:h-[340px] 
        xl:h-[380px]
        object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Right Side Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 sm:gap-3">

        <button
          onClick={(e) => e.preventDefault()}
          className="bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <FiHeart size={16} />
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="bg-white p-2 rounded-full shadow
          translate-x-10 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition duration-300"
        >
          <FiLayers size={16} />
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="bg-white p-2 rounded-full shadow
          translate-x-10 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition duration-500"
        >
          <FiEye size={16} />
        </button>

      </div>

      {/* Add To Cart */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%]
        translate-y-10 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition duration-300"
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({ id, title, price, image });
          }}
          className="w-full bg-white py-2 sm:py-3 text-sm sm:text-base rounded-full shadow font-medium hover:bg-black hover:text-white transition"
        >
          Add To Cart
        </button>
      </div>

    </div>

    {/* Product Info */}
    <div className="p-3 sm:p-4 text-center">

      {/* Title */}
      <h4 className="font-medium text-sm sm:text-base line-clamp-2">
        {title}
      </h4>

      {/* Rating */}
      <div className="flex justify-center gap-1 mt-2 text-yellow-400 text-sm">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      {/* Price */}
      <p className="mt-2 font-semibold text-base sm:text-lg">
        ₹{price}
      </p>

    </div>

  </div>
</Link>

);
}
