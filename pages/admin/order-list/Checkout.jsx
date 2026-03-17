"use client";

import Layout from "@/src/adminPanel/Layout";
import { useState } from "react";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("paypal");
  const [shipping, setShipping] = useState("courier");

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-3 sm:p-5 lg:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-5 sm:p-7 space-y-8">

            {/* PERSONAL */}
            <Section title="Personal Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
                <Input label="Email" placeholder="john@example.com" />
                <Input label="Phone" placeholder="+91 9876543210" />
              </div>
            </Section>

            {/* SHIPPING */}
            <Section title="Shipping Details">
              <Textarea label="Address" placeholder="Full delivery address" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <Input label="Zip Code" placeholder="110001" />
                <Select label="City" />
                <Select label="Country" />
              </div>
            </Section>

            {/* SHIPPING METHOD */}
            <Section title="Shipping Method">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["dhl", "fedex", "ups", "courier"].map((item) => (
                  <div
                    key={item}
                    onClick={() => setShipping(item)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex justify-between items-center hover:shadow-sm ${
                      shipping === item
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200"
                    }`}
                  >
                    <span className="capitalize font-medium text-sm sm:text-base">
                      {item} Service
                    </span>
                    <input type="radio" checked={shipping === item} readOnly />
                  </div>
                ))}
              </div>
            </Section>

            {/* PAYMENT */}
            <Section title="Payment Method">
              <div className="space-y-4">

                <Selectable
                  active={payment === "paypal"}
                  onClick={() => setPayment("paypal")}
                  title="PayPal"
                />

                <Selectable
                  active={payment === "card"}
                  onClick={() => setPayment("card")}
                  title="Credit / Debit Card"
                />

                {payment === "card" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <Input label="Card Number" placeholder="XXXX XXXX XXXX XXXX" className="sm:col-span-2" />
                    <Input label="Expiry" placeholder="MM/YY" />
                    <Input label="CVV" placeholder="***" />
                  </div>
                )}
              </div>
            </Section>

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 space-y-6 h-fit sticky top-6">

            {/* PROMO */}
            <div className="bg-orange-500 p-4 rounded-xl text-white space-y-2">
              <p className="text-sm font-medium">Have a promo code?</p>
              <div className="flex gap-2">
                <input className="flex-1 px-3 py-2 rounded-lg text-black text-sm outline-none" placeholder="Enter code" />
                <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium">Apply</button>
              </div>
            </div>

            {/* SUMMARY */}
            <div>
              <h3 className="font-semibold mb-4 text-base">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <Row label="Subtotal" value="₹777" />
                <Row label="Discount" value="-₹60" />
                <Row label="Delivery" value="₹30" />
                <div className="border-t pt-3">
                  <Row label="Total" value="₹737" bold />
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex-1 py-2.5 rounded-xl bg-gray-200 font-medium hover:bg-gray-300 transition">
                Back
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* COMPONENTS */

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-base sm:text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function Input({ label, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        {...props}
        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      <textarea
        {...props}
        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      <select className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition">
        <option>Select</option>
      </select>
    </div>
  );
}

function Selectable({ active, onClick, title }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border cursor-pointer transition flex justify-between items-center ${
        active ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      <span className="font-medium text-sm">{title}</span>
      <input type="radio" checked={active} readOnly />
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? "font-semibold text-base" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
