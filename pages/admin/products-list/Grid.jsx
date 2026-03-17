"use client";

import Layout from "@/src/adminPanel/Layout";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Men Black Slim Fit T-shirt",
    price: 80,
    oldPrice: 100,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 2,
    name: "Olive Green Leather Bag",
    price: 136,
    oldPrice: 150,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 3,
    name: "Women Golden Dress",
    price: 219,
    oldPrice: 250,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 4,
    name: "Gray Cap For Men",
    price: 76,
    oldPrice: 100,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 5,
    name: "Dark Green Cargo Pant",
    price: 110,
    oldPrice: 130,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 6,
    name: "Orange Headphone",
    price: 231,
    oldPrice: 260,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 7,
    name: "Kids Yellow Shoes",
    price: 89,
    oldPrice: 100,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 8,
    name: "Men Dark Brown Wallet",
    price: 132,
    oldPrice: 160,
    image: "https://via.placeholder.com/300x300",
  },
];

export default function Grid() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>

    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 border-r space-y-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <div className="space-y-2 text-sm">
            <label className="block">
              <input type="checkbox" className="mr-2" /> All Categories
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Fashion
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Electronics
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Price</h3>
          <input type="range" className="w-full" />
        </div>

        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Apply
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Products</h2>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            + New Product
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />

              <h3 className="mt-3 font-medium text-sm">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold">
                  ${product.price}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ${product.oldPrice}
                </span>
              </div>

              <button className="mt-3 w-full border py-2 rounded hover:bg-gray-100">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}
