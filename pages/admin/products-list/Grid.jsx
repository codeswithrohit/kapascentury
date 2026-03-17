"use client";

import Layout from "@/src/adminPanel/Layout";
import { useState } from "react";

const products = [
  { id: 1, name: "Men Black Slim Fit T-shirt", price: 80, oldPrice: 100, image: "https://via.placeholder.com/300" },
  { id: 2, name: "Olive Green Leather Bag", price: 136, oldPrice: 150, image: "https://via.placeholder.com/300" },
  { id: 3, name: "Women Golden Dress", price: 219, oldPrice: 250, image: "https://via.placeholder.com/300" },
  { id: 4, name: "Gray Cap For Men", price: 76, oldPrice: 100, image: "https://via.placeholder.com/300" },
  { id: 5, name: "Dark Green Cargo Pant", price: 110, oldPrice: 130, image: "https://via.placeholder.com/300" },
  { id: 6, name: "Orange Headphone", price: 231, oldPrice: 260, image: "https://via.placeholder.com/300" },
  { id: 7, name: "Kids Yellow Shoes", price: 89, oldPrice: 100, image: "https://via.placeholder.com/300" },
  { id: 8, name: "Men Dark Brown Wallet", price: 132, oldPrice: 160, image: "https://via.placeholder.com/300" },
];

export default function Grid() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar */}
          <div className="w-full lg:w-72 bg-white p-5 rounded-2xl shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none p-2.5 rounded-lg text-sm"
            />

            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-gray-700">Categories</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> All Categories
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Fashion
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Electronics
                </label>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-gray-700">Price Range</h3>
              <input type="range" className="w-full accent-orange-500" />
            </div>

            <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2.5 rounded-lg text-sm font-medium">
              Apply Filters
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
              <h2 className="text-xl font-semibold text-gray-800">All Products</h2>
              <button className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-lg text-sm">
                + New Product
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  <h3 className="mt-3 font-medium text-sm text-gray-800 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                      ${product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-4 w-full border border-gray-200 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
