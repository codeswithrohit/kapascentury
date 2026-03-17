"use client";

import Layout from "@/src/adminPanel/Layout";
import { useState } from "react";

export default function AddProductPage() {
  const [image, setImage] = useState(null);

  return (
    <Layout>

    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT PREVIEW */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="bg-gray-100 h-64 flex items-center justify-center rounded">
            {image ? (
              <img src={URL.createObjectURL(image)} className="h-full object-contain" />
            ) : (
              <span className="text-gray-400">Preview</span>
            )}
          </div>

          <h2 className="mt-4 font-semibold">Men Black Slim Fit T-shirt</h2>
          <p className="text-sm text-gray-500">Fashion</p>

          <div className="mt-3">
            <span className="text-lg font-bold">$80</span>
            <span className="line-through text-gray-400 ml-2">$100</span>
          </div>

          <div className="mt-3">
            <p className="text-sm">Size:</p>
            <div className="flex gap-2 mt-1">
              {["S", "M", "XL", "XXL"].map((s) => (
                <span key={s} className="px-2 py-1 bg-gray-200 rounded text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <p className="text-sm">Colors:</p>
            <div className="flex gap-2 mt-1">
              {["bg-gray-800", "bg-yellow-400", "bg-gray-200", "bg-red-400"].map((c, i) => (
                <div key={i} className={`w-5 h-5 rounded-full ${c}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-2 space-y-6">
          {/* UPLOAD */}
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="font-semibold mb-4">Add Product Photo</p>

            <label className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer block">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <p className="text-gray-500">Drop your image here or click to browse</p>
            </label>
          </div>

          {/* PRODUCT INFO */}
          <div className="bg-white p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-2 rounded" placeholder="Product Name" />
            <input className="border p-2 rounded" placeholder="Category" />
            <input className="border p-2 rounded" placeholder="Brand" />
            <input className="border p-2 rounded" placeholder="Weight" />

            <div>
              <p className="text-sm mb-1">Size</p>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((s) => (
                  <span key={s} className="px-2 py-1 border rounded text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm mb-1">Colors</p>
              <div className="flex gap-2 flex-wrap">
                {["bg-gray-800", "bg-yellow-400", "bg-gray-200", "bg-red-400", "bg-green-400", "bg-blue-400"].map((c, i) => (
                  <div key={i} className={`w-5 h-5 rounded-full ${c}`} />
                ))}
              </div>
            </div>

            <textarea className="border p-2 rounded col-span-1 md:col-span-2" placeholder="Description" />

            <input className="border p-2 rounded" placeholder="Tag Number" />
            <input className="border p-2 rounded" placeholder="Stock" />
          </div>

          {/* PRICING */}
          <div className="bg-white p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
            <input className="border p-2 rounded" placeholder="Price" />
            <input className="border p-2 rounded" placeholder="Discount" />
            <input className="border p-2 rounded" placeholder="Tax" />
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-4">
            <button className="px-6 py-2 border rounded">Reset</button>
            <button className="px-6 py-2 bg-orange-500 text-white rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
