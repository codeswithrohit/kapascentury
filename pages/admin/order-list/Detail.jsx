"use client";

import Layout from "@/src/adminPanel/Layout";
import { FiCheckCircle } from "react-icons/fi";

const products = [
  {
    name: "Men Black Slim Fit T-shirt",
    size: "M",
    status: "Ready",
    qty: 1,
    price: 80,
    tax: 3,
  },
  {
    name: "Dark Green Cargo Pant",
    size: "M",
    status: "Packaging",
    qty: 3,
    price: 330,
    tax: 4,
  },
];

export default function Detail() {
  return (

    <Layout>
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="xl:col-span-2 space-y-6">
          {/* HEADER */}
          <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h2 className="font-semibold">#0758267/90</h2>
              <p className="text-sm text-gray-500">Order Details</p>
            </div>

            <div className="flex gap-2">
              <button className="border px-3 py-1 rounded">Refund</button>
              <button className="border px-3 py-1 rounded">Return</button>
              <button className="bg-orange-500 text-white px-3 py-1 rounded">
                Edit Order
              </button>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="mb-2 font-medium">Progress</p>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-green-500"></div>
            </div>
            <div className="flex justify-between text-xs mt-2 text-gray-500">
              <span>Confirmed</span>
              <span>Pending</span>
              <span>Shipping</span>
              <span>Delivered</span>
            </div>
          </div>

          {/* PRODUCT TABLE */}
          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-3">Product</th>
                  <th>Status</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Tax</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">
                      {p.name}
                      <div className="text-xs text-gray-400">Size: {p.size}</div>
                    </td>
                    <td>
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                        {p.status}
                      </span>
                    </td>
                    <td>{p.qty}</td>
                    <td>${p.price}</td>
                    <td>${p.tax}</td>
                    <td>${p.price + p.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TIMELINE */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Order Timeline</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <FiCheckCircle className="text-green-500 mt-1" />
                <div>
                  <p className="text-sm">Order placed successfully</p>
                  <span className="text-xs text-gray-400">Apr 23, 2024</span>
                </div>
              </div>

              <div className="flex gap-3">
                <FiCheckCircle className="text-green-500 mt-1" />
                <div>
                  <p className="text-sm">Invoice generated</p>
                  <button className="text-orange-500 text-xs">Download Invoice</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* SUMMARY */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$777</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$60</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$20</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$737</span>
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Payment</h3>
            <p className="text-sm">Master Card **** 7812</p>
            <p className="text-xs text-gray-400">Paid</p>
          </div>

          {/* CUSTOMER */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Customer</h3>
            <p className="text-sm">Gaston Lapierre</p>
            <p className="text-xs text-gray-400">hello@demo.com</p>
          </div>

          {/* MAP */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Oxford&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48"
            />
          </div>
        </div>
      </div>
    </div>

    </Layout>
  );
}
