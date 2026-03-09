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

    <div className="bg-[#F8EDEB] h-screen flex items-center justify-center p-4">

      <div className="w-full max-w-7xl h-full grid lg:grid-cols-2 gap-4">

        {/* LEFT SIDE */}
        <div className="bg-[#FAE1DD] rounded-xl shadow p-5 flex flex-col justify-between text-sm">

          <div className="space-y-4">

            {/* Contact */}
            <div>
              <h2 className="font-semibold mb-1">Contact</h2>

              <input
                placeholder="Email or mobile phone number"
                className="w-full border p-2 rounded-md text-sm"
              />
            </div>

            {/* Delivery */}
            <div>

              <h2 className="font-semibold mb-1">Delivery</h2>

              <select className="w-full border p-2 rounded-md mb-2 text-sm">
                <option>India</option>
              </select>

              <div className="grid grid-cols-2 gap-2">

                <input
                  placeholder="First name"
                  className="border p-2 rounded-md"
                />

                <input
                  placeholder="Last name"
                  className="border p-2 rounded-md"
                />

              </div>

              <div className="relative mt-2">

                <input
                  placeholder="Address"
                  className="border p-2 rounded-md w-full"
                />

                <FiSearch className="absolute right-2 top-3 text-gray-400 text-sm" />

              </div>

              <input
                placeholder="Apartment, suite..."
                className="border p-2 rounded-md w-full mt-2"
              />

              <div className="grid grid-cols-3 gap-2 mt-2">

                <input placeholder="City" className="border p-2 rounded-md" />
                <input placeholder="State" className="border p-2 rounded-md" />
                <input placeholder="ZIP" className="border p-2 rounded-md" />

              </div>

              <div className="flex items-center mt-2 gap-2 text-xs">
                <input type="checkbox" />
                <p>Save this information for next time</p>
              </div>

            </div>

            {/* Shipping */}
            <div>

              <h2 className="font-semibold mb-1">Shipping method</h2>

              <div className="bg-white p-2 rounded text-gray-500 text-xs">
                Enter your shipping address to view shipping methods.
              </div>

            </div>

            {/* Payment */}
            <div>

              <h2 className="font-semibold mb-1">Payment</h2>

              <div className="border rounded-md p-3 bg-white space-y-2">

                <input
                  placeholder="Card number"
                  className="border p-2 rounded-md w-full"
                />

                <div className="grid grid-cols-2 gap-2">

                  <input
                    placeholder="MM / YY"
                    className="border p-2 rounded-md"
                  />

                  <input
                    placeholder="CVC"
                    className="border p-2 rounded-md"
                  />

                </div>

                <input
                  placeholder="Name on card"
                  className="border p-2 rounded-md w-full"
                />

                <div className="flex items-center gap-2 text-xs">
                  <input type="checkbox" defaultChecked />
                  <p>Use shipping address as billing address</p>
                </div>

              </div>

            </div>

          </div>

          {/* PAY BUTTON */}
          <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg flex justify-center items-center gap-2 mt-4">
            <FaLock />
            Pay now
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-xl shadow flex flex-col">

          {/* ITEMS */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (

                <div key={index} className="flex justify-between items-center">

                  <div className="flex gap-3">

                    <div className="relative">

                      <img
                        src={item.image}
                        className="w-14 h-16 object-cover rounded"
                      />

                      <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
                        {item.quantity}
                      </span>

                    </div>

                    <p className="text-xs max-w-[140px]">
                      {item.title || item.name}
                    </p>

                  </div>

                  <p className="text-sm font-medium">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              ))
            )}

          </div>

          {/* SUMMARY */}
          <div className="border-t p-5 bg-[#F8EDEB] text-sm">

            <div className="flex justify-between mb-1">
              <p>Subtotal · {cartItems.length}</p>
              <p>₹{subtotal}</p>
            </div>

            <div className="flex justify-between mb-1">
              <p>Shipping</p>
              <p className="text-gray-400">Next step</p>
            </div>

            <div className="flex justify-between font-semibold mt-2">
              <p>Total</p>
              <p>₹{subtotal}</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}