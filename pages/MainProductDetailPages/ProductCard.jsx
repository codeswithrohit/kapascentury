"use client";

import Link from "next/link";
import { FiHeart, FiEye, FiLayers } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../component/CartContext";

export default function ProductCard({ id, image, title, price }) {
  const { addToCart } = useCart();
  return (

    <Link href={`/productDetail/${title}`}>
      <div className="group bg-white rounded-2xl overflow-hidden cursor-pointer">

        {/* Image Section */}
        <div className="relative overflow-hidden rounded-2xl">

          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Right Side Icons */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">

            <button
              onClick={(e)=>e.preventDefault()}
              className="bg-white p-2 rounded-full shadow"
            >
              <FiHeart />
            </button>

            <button
              onClick={(e)=>e.preventDefault()}
              className="bg-white p-2 rounded-full shadow
              translate-x-10 opacity-0
              group-hover:translate-x-0 group-hover:opacity-100
              transition duration-300"
            >
              <FiLayers />
            </button>

            <button
              onClick={(e)=>e.preventDefault()}
              className="bg-white p-2 rounded-full shadow
              translate-x-10 opacity-0
              group-hover:translate-x-0 group-hover:opacity-100
              transition duration-500"
            >
              <FiEye />
            </button>

          </div>

          {/* Add To Cart */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]
            translate-y-10 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition duration-300"
          >
            <button
              onClick={(e)=>{ e.preventDefault(); addToCart({ id, title, price, image }); }}
              className="w-full bg-white py-3 rounded-full shadow font-medium hover:bg-black hover:text-white"
            >
              Add To Cart
            </button>
          </div>

        </div>

        {/* Product Info */}
        <div className="p-4 text-center">

          {/* Title */}
          <h4 className="font-medium">{title}</h4>

          {/* Rating */}
          <div className="flex justify-center gap-1 mt-2 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          {/* Price */}
          <p className="mt-2 font-semibold text-lg">₹{price}</p>

        </div>

      </div>
    </Link>

  );
}