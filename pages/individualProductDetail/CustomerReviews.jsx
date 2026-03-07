"use client";

import { FaStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function CustomerReviews() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10 md:mb-12">
        Customer Reviews
      </h2>

      {/* Review Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start border-b pb-10">

        {/* Average Rating */}
        <div className="text-center space-y-3">
          <div className="flex justify-center text-orange-400 text-lg sm:text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-base sm:text-lg font-medium">
            5.00 out of 5
          </p>

          <p className="text-gray-500 text-sm">
            Based on 1 review ✔
          </p>
        </div>

        {/* Rating Bars */}
        <div className="space-y-3">

          {[5,4,3,2,1].map((star,index)=>(
            <div key={index} className="flex items-center gap-2 sm:gap-3">

              <div className="flex text-orange-400 text-xs sm:text-sm w-16 sm:w-20">
                {[...Array(star)].map((_,i)=>(
                  <FaStar key={i}/>
                ))}
              </div>

              <div className="flex-1 bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2 rounded-full ${
                    star === 5 ? "bg-orange-400 w-full" : "w-0"
                  }`}
                ></div>
              </div>

              <span className="text-gray-600 text-xs sm:text-sm">
                {star === 5 ? 1 : 0}
              </span>

            </div>
          ))}

        </div>

        {/* Write Review Button */}
        <div className="flex justify-center sm:justify-start lg:justify-end">
          <button className="border px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-black hover:text-white transition">
            Write A Review
          </button>
        </div>

      </div>

      {/* Filter */}
      <div className="flex items-center justify-between py-5 border-b">
        <p className="font-medium text-sm sm:text-base">
          Most Recent ▼
        </p>
      </div>

      {/* Review Card */}
      <div className="py-8 space-y-5">

        {/* Stars + Date */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex text-orange-400 text-sm">
            {[...Array(5)].map((_,i)=>(
              <FaStar key={i}/>
            ))}
          </div>

          <span className="text-gray-400 text-xs sm:text-sm">
            05/03/2026
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">

          <FaRegUserCircle className="text-3xl sm:text-4xl text-gray-400"/>

          <span className="font-medium text-sm sm:text-base">
            john
          </span>

        </div>

        {/* Review Title */}
        <h4 className="font-semibold text-base sm:text-lg">
          Stunning Outfit for Special Events
        </h4>

        {/* Review Text */}
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          The embroidery and rich green color made me feel truly festive
          and elegant. Perfect for weddings or parties.
        </p>

      </div>

    </section>
  );
}