"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCart } from "../../../context/CartContext";
import Cart from "../../../pages/purchasePages/Cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  return (
    <header className="w-full bg-[#F8EDEB] border-b border-[#E6D6CF]">

      <div className="max-w-[1350px] mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide lowercase">
          <img src="/assets/Logo2.png" alt="Logo" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-gray-800">

          <div className="flex items-center cursor-pointer hover:text-black transition">
            Home <MdKeyboardArrowDown className="ml-1" />
          </div>

          <div className="flex items-center cursor-pointer hover:text-black transition">
            Shop <MdKeyboardArrowDown className="ml-1" />
          </div>

          <div className="flex items-center cursor-pointer hover:text-black transition">
            Products <MdKeyboardArrowDown className="ml-1" />
          </div>

          <div className="flex items-center cursor-pointer hover:text-black transition">
            Pages <MdKeyboardArrowDown className="ml-1" />
          </div>

          <div className="flex items-center cursor-pointer hover:text-black transition">
            Blog <MdKeyboardArrowDown className="ml-1" />
          </div>

          <Link
            href="#"
            className="font-semibold hover:text-black transition"
          >
            Buy Theme!
          </Link>

        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-5 text-xl text-gray-800">

          <FiSearch className="cursor-pointer hover:scale-110 transition" />
          <FiUser className="cursor-pointer hover:scale-110 transition" />

          {/* Wishlist */}
          <div className="relative cursor-pointer">

            <FiHeart />

            <span className="absolute -top-4 -right-3 bg-[#5F0D24] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>

          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >

            <FiShoppingCart />

            <span className="absolute -top-4 -right-3 bg-[#5F0D24] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalItems()}
            </span>

          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#F8EDEB] border-t border-[#E6D6CF]">

          <nav className="flex flex-col px-6 py-4 gap-4 text-[16px] font-medium text-gray-800">

            <Link href="#" className="flex items-center justify-between">
              Home <MdKeyboardArrowDown />
            </Link>

            <Link href="#" className="flex items-center justify-between">
              Shop <MdKeyboardArrowDown />
            </Link>

            <Link href="#" className="flex items-center justify-between">
              Products <MdKeyboardArrowDown />
            </Link>

            <Link href="#" className="flex items-center justify-between">
              Pages <MdKeyboardArrowDown />
            </Link>

            <Link href="#" className="flex items-center justify-between">
              Blog <MdKeyboardArrowDown />
            </Link>

            <Link href="#" className="font-semibold">
              Buy Theme!
            </Link>

          </nav>

        </div>
      )}

      {/* Cart Component */}
      <Cart />

    </header>
  );
}