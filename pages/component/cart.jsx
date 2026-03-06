"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX, FiTrash2 } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { RiCoupon3Line } from "react-icons/ri";

export default function Cart() {
  const [qty, setQty] = useState(2);

  return (
    <div className="fixed right-0 top-0 h-full w-[420px] bg-white shadow-xl flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b">
        <h2 className="text-xl font-semibold">Shopping Cart (2)</h2>
        <FiX className="text-xl cursor-pointer" />
      </div>

      {/* Free Shipping */}
      <div className="px-5 py-4 border-b">
        <div className="relative h-2 bg-gray-200 rounded-full">
          <div className="absolute left-0 top-0 h-2 w-full bg-green-500 rounded-full"></div>

          <div className="absolute -right-3 -top-3 bg-green-500 p-2 rounded-full text-white">
            <FaTruck size={12} />
          </div>
        </div>

        <p className="text-sm mt-3 text-gray-600">
          Congratulations! You've got free shipping!
        </p>
      </div>

      {/* Timer Message */}
      <div className="px-5 py-3 text-sm text-red-500 border-b">
        You're out of time! Checkout now to avoid losing your order!
      </div>

      {/* Cart Item */}
      <div className="flex gap-4 p-5 border-b">
        <Image
          src="/lehenga.jpg"
          width={80}
          height={100}
          alt="lehenga"
          className="rounded-md"
        />

        <div className="flex-1">
          <h3 className="font-medium">Green Embroidered Lehenga Set</h3>
          <p className="text-gray-600 mb-3">$190.00</p>

          <div className="flex items-center gap-4">
            <div className="flex border rounded-md">
              <button
                className="px-3 py-1"
                onClick={() => setQty(qty - 1)}
              >
                -
              </button>

              <span className="px-4 py-1">{qty}</span>

              <button
                className="px-3 py-1"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>

            <FiTrash2 className="cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>

      {/* Recommended */}
      <div className="p-5 border-b">
        <p className="mb-3 font-medium">You may also like...</p>

        <div className="flex gap-4 border rounded-xl p-3">
          <Image
            src="/lehenga2.jpg"
            width={70}
            height={90}
            alt="product"
            className="rounded-md"
          />

          <div>
            <h4 className="text-sm font-medium">
              Black Silk Eid Lehenga & Choli
            </h4>

            <p className="text-gray-600">$180.00</p>

            <button className="text-sm underline mt-1">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Icons row */}
      <div className="flex justify-around py-4 border-b text-gray-600">
        <BsBoxSeam size={20} />
        <FaTruck size={20} />
        <RiCoupon3Line size={20} />
      </div>

      {/* Bottom Section */}
      <div className="mt-auto p-5">
        <div className="flex justify-between text-lg font-medium mb-3">
          <span>Subtotal</span>
          <span>$380.00</span>
        </div>

        <div className="flex items-center gap-2 mb-4 text-sm">
          <input type="checkbox" />
          <span>
            I agree with <span className="underline">Terms & Conditions</span>
          </span>
        </div>

        <button className="w-full border rounded-full py-3 mb-3">
          View Cart
        </button>

        <button className="w-full bg-gray-400 text-white rounded-full py-3">
          Checkout
        </button>
      </div>
    </div>
  );
}