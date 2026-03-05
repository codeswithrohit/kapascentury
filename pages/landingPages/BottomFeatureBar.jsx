"use client"

import { FiPackage, FiRefreshCcw, FiMessageCircle, FiCreditCard } from "react-icons/fi"

export default function BottomFeatureBar() {
  return (
    <section className="bg-[#e7dbcf] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Free Shipping */}
        <div className="flex items-start gap-4">
          <FiPackage className="text-3xl text-gray-700 mt-1" />
          <div>
            <h4 className="font-semibold text-lg text-gray-900">
              Free Shipping
            </h4>
            <p className="text-sm text-gray-600">
              For orders over $110
            </p>
          </div>
        </div>

        {/* Free Returns */}
        <div className="flex items-start gap-4">
          <FiRefreshCcw className="text-3xl text-gray-700 mt-1" />
          <div>
            <h4 className="font-semibold text-lg text-gray-900">
              Free Returns
            </h4>
            <p className="text-sm text-gray-600">
              Within 30 days for an exchange.
            </p>
          </div>
        </div>

        {/* Support Online */}
        <div className="flex items-start gap-4">
          <FiMessageCircle className="text-3xl text-gray-700 mt-1" />
          <div>
            <h4 className="font-semibold text-lg text-gray-900">
              Support Online
            </h4>
            <p className="text-sm text-gray-600">
              24 hours a day, 7 days a week
            </p>
          </div>
        </div>

        {/* Flexible Payment */}
        <div className="flex items-start gap-4">
          <FiCreditCard className="text-3xl text-gray-700 mt-1" />
          <div>
            <h4 className="font-semibold text-lg text-gray-900">
              Flexible Payment
            </h4>
            <p className="text-sm text-gray-600">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}