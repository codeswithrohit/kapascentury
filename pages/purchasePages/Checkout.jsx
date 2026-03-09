"use client";

import { FaLock } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="bg-white p-8 rounded-lg shadow">

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full border rounded-md p-3"
            />
          </div>

          {/* Delivery */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>

            <select className="w-full border p-3 rounded-md mb-3">
              <option>India</option>
            </select>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                placeholder="First name"
                className="border p-3 rounded-md"
              />
              <input
                placeholder="Last name"
                className="border p-3 rounded-md"
              />
            </div>

            <div className="relative mt-3">
              <input
                placeholder="Address"
                className="border p-3 rounded-md w-full"
              />
              <FiSearch className="absolute right-3 top-4 text-gray-400" />
            </div>

            <input
              placeholder="Apartment, suite, etc."
              className="border p-3 rounded-md w-full mt-3"
            />

            <div className="grid md:grid-cols-3 gap-3 mt-3">
              <input placeholder="City" className="border p-3 rounded-md" />
              <input placeholder="State" className="border p-3 rounded-md" />
              <input placeholder="ZIP code" className="border p-3 rounded-md" />
            </div>

            <div className="flex items-center mt-3 gap-2">
              <input type="checkbox" />
              <p className="text-sm">Save this information for next time</p>
            </div>
          </div>

          {/* Shipping */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <div className="bg-gray-100 p-4 rounded-md text-gray-500 text-sm">
              Enter your shipping address to view available shipping methods.
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>

            <div className="border rounded-lg p-4">

              <input
                placeholder="Card number"
                className="border p-3 rounded-md w-full mb-3"
              />

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  placeholder="Expiration date (MM / YY)"
                  className="border p-3 rounded-md"
                />
                <input
                  placeholder="Security code"
                  className="border p-3 rounded-md"
                />
              </div>

              <input
                placeholder="Name on card"
                className="border p-3 rounded-md w-full mt-3"
              />

              <div className="flex items-center gap-2 mt-3">
                <input type="checkbox" defaultChecked />
                <p className="text-sm">
                  Use shipping address as billing address
                </p>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg mt-6 flex justify-center items-center gap-2">
              <FaLock />
              Pay now
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-50 p-8 rounded-lg shadow h-fit">

          {/* PRODUCTS */}
          <div className="space-y-5">

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">

                  <div className="flex gap-3">
                    <div className="relative">
                      <img
                        src={item.image}
                        className="w-16 h-20 object-cover rounded"
                      />

                      <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                        {item.quantity}
                      </span>
                    </div>

                    <p className="text-sm max-w-[150px]">
                      {item.title || item.name}
                    </p>
                  </div>

                  <p className="font-medium">
                    ₹{item.price * item.quantity}
                  </p>

                </div>
              ))
            )}

          </div>

          {/* Discount */}
          <div className="flex gap-2 mt-6">
            <input
              placeholder="Discount code"
              className="border p-3 rounded-md flex-1"
            />
            <button className="bg-gray-200 px-4 rounded-md">
              Apply
            </button>
          </div>

          {/* SUMMARY */}
          <div className="mt-6 text-sm space-y-2">

            <div className="flex justify-between">
              <p>Subtotal · {cartItems.length} items</p>
              <p>₹{subtotal}</p>
            </div>

            <div className="flex justify-between">
              <p>Shipping</p>
              <p className="text-gray-400">Calculated at next step</p>
            </div>

            <div className="flex justify-between font-semibold text-lg mt-4">
              <p>Total</p>
              <p>₹{subtotal}</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}