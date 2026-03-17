"use client";

import Layout from "@/src/adminPanel/Layout";
import { useState } from "react";

const images = [
  "https://techzaa.in/larkon/admin/assets/images/product/p-14.png",
  "https://techzaa.in/larkon/admin/assets/images/product/p-14.png",
  "https://techzaa.in/larkon/admin/assets/images/product/p-14.png",
  "https://techzaa.in/larkon/admin/assets/images/product/p-14.png",
];

export default function Detail() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [qty, setQty] = useState(1);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT - IMAGE */}
          <div>
            <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
              <img
                src={selectedImage}
                className="w-full max-h-[400px] object-contain"
              />
            </div>

            <div className="flex gap-3 mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded cursor-pointer border ${selectedImage === img ? "border-orange-500" : ""}`}
                />
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg">
                Add To Cart
              </button>
              <button className="flex-1 bg-gray-200 py-3 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="space-y-4">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
              New Arrival
            </span>

            <h1 className="text-xl md:text-2xl font-semibold">
              Men Black Slim Fit T-shirt
            </h1>

            <div className="text-yellow-500">
              ★★★★★{" "}
              <span className="text-gray-500 text-sm">4.5 (55 Reviews)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">$80.00</span>
              <span className="line-through text-gray-400">$100.00</span>
              <span className="text-red-500 text-sm">30% Off</span>
            </div>

            {/* COLORS */}
            <div>
              <p className="text-sm text-gray-600">Colors</p>
              <div className="flex gap-2 mt-2">
                {[
                  "bg-gray-800",
                  "bg-yellow-400",
                  "bg-gray-200",
                  "bg-green-500",
                ].map((c, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${c} border`} />
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div>
              <p className="text-sm text-gray-600">Size</p>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL"].map((s) => (
                  <button key={s} className="px-3 py-1 border rounded">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div>
              <p className="text-sm text-gray-600">Quantity</p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1 border"
                >
                  -
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1 border"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-sm text-green-600">✔ In Stock</div>
            <div className="text-sm text-gray-500">Free delivery available</div>

            {/* DESCRIPTION */}
            <div>
              <h3 className="font-semibold">Description</h3>
              <p className="text-sm text-gray-600">
                Soft cotton t-shirt with modern slim fit design. Comfortable for
                daily wear.
              </p>
            </div>
          </div>
        </div>

        {/* EXTRA SECTIONS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* ITEM DETAILS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Items Detail</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Product Dimensions: 53.3 x 40.6 x 6.4 cm</li>
              <li>Department: Men</li>
              <li>Country of Origin: USA</li>
              <li>Item Weight: 500g</li>
            </ul>
          </div>

          {/* REVIEWS */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Top Reviews</h2>

            <div className="border-b pb-4 mb-4">
              <p className="font-medium">Henry K. Mark</p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-sm text-gray-600">
                Excellent quality and perfect fit. Highly recommended!
              </p>
            </div>

            <div>
              <p className="font-medium">Jorge Herry</p>
              <p className="text-yellow-500">★★★★☆</p>
              <p className="text-sm text-gray-600">
                Good product but size runs slightly small.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
