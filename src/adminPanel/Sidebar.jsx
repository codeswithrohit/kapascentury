"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiBox,
  FiShoppingCart,
  FiSettings,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 lg:hidden 
        ${sidebarOpen ? "block" : "hidden"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`w-64 lg:h-screen bg-[#1f2937] text-gray-300 fixed left-0 top-0 overflow-y-auto z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-700">
          <h1 className="text-lg font-semibold text-white">
            Kapas Centuary
          </h1>
        </div>

        {/* NAV */}
        <nav className="px-4 py-4 text-sm space-y-2">
          {/* GENERAL */}
          <p className="text-xs text-gray-500 px-2 mb-2 mt-2">GENERAL</p>

          <SidebarItem
            icon={<FiGrid />}
            title="Dashboard"
            href="/admin/dashboard"
          />

          {/* PRODUCTS */}
          <DropdownItem icon={<FiBox />} title="Products">
            <SubItem title="List" href="/admin/products-list/List" />
          </DropdownItem>

          {/* ORDERS */}
          <DropdownItem icon={<FiShoppingCart />} title="Orders">
            <SubItem title="List" href="/admin/order-list/List" />
          </DropdownItem>

          {/* SETTINGS */}
          <SidebarItem
            icon={<FiSettings />}
            title="Settings"
            href="/admin/settings"
          />
        </nav>
      </aside>
    </>
  );
}

/* 🔹 Sidebar Item */
function SidebarItem({ icon, title, href }) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link href={href || "#"}>
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all
        ${
          isActive
            ? "bg-gray-700 text-white"
            : "hover:bg-gray-700 hover:text-white"
        }`}
      >
        <span className="text-lg">{icon}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
}

/* 🔹 Dropdown Item */
function DropdownItem({ icon, title, children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 🔥 check if any child is active
  const isChildActive = Array.isArray(children)
    ? children.some((child) =>
        pathname.startsWith(child.props.href)
      )
    : pathname.startsWith(children.props.href);

  // 🔥 auto open if active route
  useEffect(() => {
    if (isChildActive) {
      setOpen(true);
    }
  }, [pathname, isChildActive]);

  return (
    <div className="mb-2 relative">
      {/* Parent */}
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all
        ${
          isChildActive
            ? "bg-gray-700 text-white"
            : "hover:bg-gray-700 hover:text-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          <span>{title}</span>
        </div>
        {open ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
      </div>

      {/* Children */}
      {open && (
        <div className="ml-8 mt-2 space-y-1 text-sm text-gray-400">
          {children}
        </div>
      )}
    </div>
  );
}

/* 🔹 Sub Item */
function SubItem({ title, href }) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link href={href}>
      <div
        className={`px-2 py-1 rounded-md cursor-pointer transition-all
        ${
          isActive
            ? "bg-gray-700 text-white"
            : "hover:bg-gray-700 hover:text-white"
        }`}
      >
        {title}
      </div>
    </Link>
  );
}