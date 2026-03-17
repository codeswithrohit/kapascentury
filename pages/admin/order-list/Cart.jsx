"use client";

import Layout from "@/src/adminPanel/Layout";
import { useState } from "react";
import { FiTrash2, FiHeart } from "react-icons/fi";


const initialCart = [
  {
    id: 1,
    name: "Men Black Slim Fit T-shirt",
    color: "Dark",
    size: "M",
    price: 80,
    tax: 3,
    qty: 1,
    img: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Dark Green Cargo Pant",
    color: "Dark Green",
    size: "M",
    price: 330,
    tax: 4,
    qty: 3,
    img: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Men Dark Brown Wallet",
    color: "Brown",
    size: "S",
    price: 132,
    tax: 5,
    qty: 1,
    img: "https://via.placeholder.com/80",
  },
  {
    id: 4,
    name: "Kid's Yellow T-shirt",
    color: "Yellow",
    size: "S",
    price: 220,
    tax: 3,
    qty: 2,
    img: "https://via.placeholder.com/80",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const tax = cart.reduce((acc, i) => acc + i.tax * i.qty, 0);
  const discount = 60;
  const delivery = 20;
  const total = subtotal - discount + delivery + tax;

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-4 md:p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="xl:col-span-2 space-y-4">
            {/* HEADER */}
            <div className="bg-orange-500 text-white p-3 rounded flex justify-between">
              <span>There are {cart.length} products in your cart</span>
              <button className="text-sm underline" onClick={() => setCart([])}>
                Clear cart
              </button>
            </div>

            {/* ITEMS */}
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row justify-between gap-4"
              >
                <div className="flex gap-4">
                  <img src={item.img} className="w-16 h-16 rounded" />
                  <div>
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Color: {item.color} | Size: {item.size}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="px-2 border rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="px-2 border rounded"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex gap-4 text-xs text-gray-500 mt-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1"
                      >
                        <FiTrash2 /> Remove
                      </button>
                      <button className="flex items-center gap-1">
                        <FiHeart /> Add Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right text-sm">
                  <p>
                    ₹{item.price}.00{" "}
                    <span className="text-xs text-gray-400">
                      + ₹{item.tax} Tax
                    </span>
                  </p>
                  <p className="mt-6 font-semibold">
                    Total: ₹{(item.price + item.tax) * item.qty}.00
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {/* PROMO */}
            <div className="bg-orange-500 text-white p-4 rounded-xl">
              <p className="text-sm mb-2">Have a Promo Code ?</p>
              <div className="flex gap-2">
                <input
                  className="flex-1 p-2 rounded text-black"
                  placeholder="CODE123"
                />
                <button className="bg-white text-black px-3 rounded">
                  Apply
                </button>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>₹{subtotal}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-₹{discount}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge</span>
                  <span>₹{delivery}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span>₹{tax}.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total}.00</span>
                </div>
              </div>

              <div className="bg-yellow-100 text-yellow-700 text-xs mt-4 p-2 rounded">
                Estimated delivery by 25 April, 2024
              </div>
            </div>

            {/* ACTION */}
            <div className="flex gap-2 justify-end">
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Continue Shopping
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
