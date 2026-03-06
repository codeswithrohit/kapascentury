"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FeaturedProduct from "./FeaturedProduct";

export default function ProductSidebar() {

  const [price, setPrice] = useState(0);

  const [openSections, setOpenSections] = useState({
    category: true,
    availability: true,
    price: true,
    featured: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div className="space-y-6 w-full max-w-[260px]">

      {/* Category */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("category")}
          className="flex justify-between items-center w-full text-lg font-semibold"
        >
          Products Category
          {openSections.category ? <FiMinus /> : <FiPlus />}
        </button>

        {openSections.category && (
          <ul className="space-y-3 text-gray-600 mt-4">
            <li className="cursor-pointer hover:text-black">Designer Suits</li>
            <li className="cursor-pointer hover:text-black">Elegant Kurtis</li>
            <li className="cursor-pointer hover:text-black">Festive Wear</li>
            <li className="cursor-pointer hover:text-black">Kurta Sets</li>
            <li className="cursor-pointer hover:text-black">Sarees</li>
            <li className="cursor-pointer hover:text-black">Anarkali Suits</li>
          </ul>
        )}
      </div>

      {/* Availability */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("availability")}
          className="flex justify-between items-center w-full text-lg font-semibold"
        >
          Availability
          {openSections.availability ? <FiMinus /> : <FiPlus />}
        </button>

        {openSections.availability && (
          <div className="space-y-2 text-gray-600 mt-4">
            <p className="cursor-pointer hover:text-black">In stock (9)</p>
            <p className="cursor-pointer hover:text-black">Out of stock (0)</p>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex justify-between items-center w-full text-lg font-semibold"
        >
          Price
          {openSections.price ? <FiMinus /> : <FiPlus />}
        </button>

        {openSections.price && (
          <div className="mt-4">

            <input
              type="range"
              min="0"
              max="3500"
              step="100"
              value={price}
              onChange={handlePriceChange}
              className="w-full"
            />

            <p className="text-sm mt-2">
              ₹0 - ₹{price}
            </p>

          </div>
        )}
      </div>

      {/* Featured Product */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("featured")}
          className="flex justify-between items-center w-full text-lg font-semibold"
        >
          Featured Product
          {openSections.featured ? <FiMinus /> : <FiPlus />}
        </button>

        {openSections.featured && <FeaturedProduct />}
      </div>

    </div>
  );
}