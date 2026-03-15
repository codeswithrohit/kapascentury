import { FiBell, FiMoon, FiSettings } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="bg-white h-16 shadow flex items-center justify-between px-6">

      <h1 className="font-semibold text-gray-700">
        WELCOME!
      </h1>

      <div className="flex items-center gap-5">

        <FiMoon size={20} />

        <div className="relative">
          <FiBell size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        <FiSettings size={20} />

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full w-8 h-8"
        />

      </div>

    </div>
  );
}