"use client";

import Link from "next/link";
import {
  FiGrid,
  FiBox,
  FiLayers,
  FiArchive,
  FiShoppingCart,
  FiTruck,
  FiTag,
  FiFileText,
  FiSettings,
  FiUser,
  FiUsers,
  FiMessageSquare,
  FiMail,
  FiCalendar,
  FiCheckSquare,
  FiHelpCircle,
  FiFile,
  FiChevronDown,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-64 lg:h-screen bg-[#1f2937] text-gray-300 fixed left-0 top-0 overflow-y-auto">

      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-700">
       
        <h1 className="text-lg font-semibold text-white">Kapas Centuary</h1>
      </div>

      <nav className="px-4 py-4 text-sm">

        {/* GENERAL */}
        <p className="text-xs text-gray-500 px-2 mb-2 mt-2">GENERAL</p>

        <SidebarItem icon={<FiGrid />} title="Dashboard" active />

        <DropdownItem icon={<FiBox />} title="Products" />
        <DropdownItem icon={<FiLayers />} title="Category" />
        <DropdownItem icon={<FiArchive />} title="Inventory" />
        <DropdownItem icon={<FiShoppingCart />} title="Orders" />
        <DropdownItem icon={<FiTruck />} title="Purchase" />
        <DropdownItem icon={<FiTag />} title="Attributes" />
        <DropdownItem icon={<FiFileText />} title="Invoices" />

        <SidebarItem icon={<FiSettings />} title="Settings" />

        {/* USERS */}
        <p className="text-xs text-gray-500 px-2 mt-6 mb-2">USERS</p>

        <SidebarItem icon={<FiUser />} title="Profile" />
        <DropdownItem icon={<FiUsers />} title="Roles" />
        <SidebarItem icon={<FiFile />} title="Permissions" />
        <SidebarItem icon={<FiUsers />} title="Customers" />
        <SidebarItem icon={<FiUsers />} title="Sellers" />

        {/* OTHER */}
        <p className="text-xs text-gray-500 px-2 mt-6 mb-2">OTHER</p>

        <DropdownItem icon={<FiTag />} title="Coupons" />
        <SidebarItem icon={<FiMessageSquare />} title="Reviews" />

        {/* OTHER APPS */}
        <p className="text-xs text-gray-500 px-2 mt-6 mb-2">OTHER APPS</p>

        <SidebarItem icon={<FiMessageSquare />} title="Chat" />
        <SidebarItem icon={<FiMail />} title="Email" />
        <SidebarItem icon={<FiCalendar />} title="Calendar" />
        <SidebarItem icon={<FiCheckSquare />} title="Todo" />

        {/* SUPPORT */}
        <p className="text-xs text-gray-500 px-2 mt-6 mb-2">SUPPORT</p>

        <SidebarItem icon={<FiHelpCircle />} title="Help Center" />
        <SidebarItem icon={<FiHelpCircle />} title="FAQs" />
        <SidebarItem icon={<FiFile />} title="Privacy Policy" />

        {/* CUSTOM */}
        <p className="text-xs text-gray-500 px-2 mt-6 mb-2">CUSTOM</p>

        <DropdownItem icon={<FiFile />} title="Pages" />
        <DropdownItem icon={<FiUser />} title="Authentication" />
        <SidebarItem icon={<FiGrid />} title="Widgets" />

        {/* COMPONENTS */}
        <p className="text-xs text-gray-500 px-2 mt-6 mb-2">COMPONENTS</p>

        <DropdownItem icon={<FiGrid />} title="Base UI" />
        <DropdownItem icon={<FiGrid />} title="Advanced UI" />
        <DropdownItem icon={<FiGrid />} title="Charts" />
        <DropdownItem icon={<FiGrid />} title="Forms" />
        <DropdownItem icon={<FiGrid />} title="Tables" />
        <DropdownItem icon={<FiGrid />} title="Icons" />
        <DropdownItem icon={<FiGrid />} title="Maps" />

        <SidebarItem icon={<FiGrid />} title="Badge Menu" />
        <SidebarItem icon={<FiGrid />} title="Menu Item" />
        <SidebarItem icon={<FiGrid />} title="Disable Item" />

      </nav>
    </aside>
  );
}

function SidebarItem({ icon, title, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
      ${active ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{title}</span>
    </div>
  );
}

function DropdownItem({ icon, title }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white">
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span>{title}</span>
      </div>
      <FiChevronDown size={14} />
    </div>
  );
}