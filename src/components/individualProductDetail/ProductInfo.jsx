import { FiTruck } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

export default function ProductInfo({title}) {
  return (
    <div className="space-y-5">

      {/* Brand */}
      <p className="text-sm text-gray-500">कapas Century</p>

      {/* Title */}
      <h1 className="text-2xl font-semibold">
       {title}
      </h1>

      {/* Rating + Sold */}
      <div className="flex items-center gap-4 text-sm">

        <div className="flex text-yellow-500 text-sm">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <span className="text-gray-600 text-sm">1 review</span>

        <span className="flex items-center text-sm gap-1 text-red-500">
          <FaFire />
          12 sold in last 15 hours
        </span>

      </div>

      {/* Price */}
      <p className="text-xl font-semibold">₹1190.00</p>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">
        The cotton long-sleeved striped t-shirt features a classic crew
        neckline, easy short sleeves, a slightly cropped length and a relaxed
        fit for a truly timeless look.
      </p>

      {/* Feature Box */}
      <div className="border border-gray-300 rounded-lg divide-y">

        {/* Delivery */}
        <div className="flex items-center gap-4 p-4">
          <FiTruck className="text-sm text-gray-700" />
          <p className="text-sm text-gray-700">
            Estimate delivery times: <b>3–5 days International.</b>
          </p>
        </div>

        {/* Coupon */}
        <div className="flex items-center gap-4 p-4">
          <FiTag className="text-sm text-gray-700" />
          <p className="text-sm text-gray-700">
            Use code <b>"WELCOME15"</b> for discount 15% on your first order.
          </p>
        </div>

        {/* Shipping */}
        <div className="flex items-center gap-4 p-4">
          <FiPackage className="text-sm text-gray-700" />
          <p className="text-sm text-gray-700">
            Free shipping & returns: <b>On all orders over $150.</b>
          </p>
        </div>

      </div>

    </div>
  );
}