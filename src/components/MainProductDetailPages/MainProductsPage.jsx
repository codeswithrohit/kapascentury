"use client";

import { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import { useSearchParams } from "next/navigation";
import Header from "../reusable/Header"
import Footer from "../reusable/Footer";

export default function MainProductsPage({ category }) {
  const [open, setOpen] = useState(false);



  return (
    <section>
        <Header />
    {/* banner section */}
         <div
        className="relative overflow-hidden h-[180px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://demo2-milano.myshopify.com/cdn/shop/files/fs8_sale.jpg?v=1758101571&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Center Text */}
        <h2 className="relative text-white text-xl sm:text-2xl md:text-4xl font-serif font-semibold">
          {category ? `${category} Collection` : "Products"}
        </h2>
      </div>

      {/* below is the main product and filter section */}

    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Filter Button (Visible below lg) */}
      <div className="lg:hidden flex justify-end mb-6">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 border px-4 py-2 rounded-full"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <div className="flex gap-10">
        
        {/* Sidebar Desktop */}
        <aside className="hidden lg:block w-1/4">
          <ProductSidebar />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductGrid />
        </div>

      </div>

      {/* Mobile Drawer Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          
          <div className="absolute left-0 top-0 h-full w-80 bg-white p-6 shadow-xl">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            <ProductSidebar />

          </div>

          {/* Click outside closes */}
          <div
            className="w-full h-full"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

    </div>
    <Footer />
    </section>
  );
}