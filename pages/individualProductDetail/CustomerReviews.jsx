"use client";

import { FaStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function CustomerReviews() {
  return (
    <section className="max-w-6xl mx-auto py-16">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-12">
        Customer Reviews
      </h2>

      {/* Review Summary */}
      <div className="grid md:grid-cols-3 gap-10 items-center border-b pb-10">

        {/* Average Rating */}
        <div className="text-center space-y-3">
          <div className="flex justify-center text-orange-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-lg font-medium">5.00 out of 5</p>

          <p className="text-gray-500 text-sm">
            Based on 1 review ✔
          </p>
        </div>

        {/* Rating Bars */}
        <div className="space-y-2">

          {[5,4,3,2,1].map((star,index)=>(
            <div key={index} className="flex items-center gap-3">

              <div className="flex text-orange-400 text-sm w-20">
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

              <span className="text-gray-600 text-sm">
                {star === 5 ? 1 : 0}
              </span>

            </div>
          ))}

        </div>

        {/* Write Review Button */}
        <div className="flex justify-center md:justify-end">
          <button className="border px-10 py-3 rounded-full hover:bg-black hover:text-white transition">
            Write A Review
          </button>
        </div>

      </div>

      {/* Filter */}
      <div className="flex items-center justify-between py-6 border-b">
        <p className="font-medium">Most Recent ▼</p>
      </div>

      {/* Review Card */}
      <div className="py-8 space-y-6">

        {/* Stars + Date */}
        <div className="flex justify-between">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_,i)=>(
              <FaStar key={i}/>
            ))}
          </div>

          <span className="text-gray-400 text-sm">
            05/03/2026
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">

          <FaRegUserCircle className="text-4xl text-gray-400"/>

          <span className="font-medium">
            john
          </span>

        </div>

        {/* Review Title */}
        <h4 className="font-semibold text-lg">
          Stunning Outfit for Special Events
        </h4>

        {/* Review Text */}
        <p className="text-gray-600 leading-relaxed">
          The embroidery and rich green color made me feel truly festive
          and elegant. Perfect for weddings or parties.
        </p>

      </div>

    </section>
  );
}