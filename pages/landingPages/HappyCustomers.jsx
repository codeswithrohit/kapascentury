"use client";

import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const reviews = [
  {
    id: 1,
    name: "Cameron Smith.",
    text: "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs8_testi_1.webp?v=1758101571&width=720",
    productImage:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_4_2.jpg?v=1757990041&width=120",
    product: "Light Maroon Embroidered...",
    price: "₹310.00",
  },
  {
    id: 2,
    name: "Algistino Lionel.",
    text: "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend! 😊",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs8_testi_2.webp?v=1758101571&width=720",
    productImage:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_3_2.jpg?v=1757989892&width=120",
    product: "Black Silk Eid Lehenga...",
    price: "₹180.00",
  },
  {
    id: 3,
    name: "Carie-Gosée H.",
    text: "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs8_testi_3.webp?v=1758101571&width=720",
    productImage:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_2_2.jpg?v=1757989565&width=120",
    product: "Mauve Pink Embroidered...",
    price: "₹225.00",
    oldPrice: "₹250.00",
  },
  {
    id: 4,
    name: "Author's name",
    text: "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍",
    image:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs8_testi_4.webp?v=1758101571&width=720",
    productImage:
      "https://demo2-milano.myshopify.com/cdn/shop/files/fs4_1_2.jpg?v=1757989103&width=120",
    product: "Wine Maroon Embroidered...",
    price: "₹165.00",
  },
];

export default function HappyCustomers() {
  return (
    <section className="bg-[#F7F2EC] py-12 sm:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif mb-8 lg:mb-12">
          Happy Customers
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              {/* IMAGE */}
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 sm:p-5 lg:p-6">

                {/* STARS */}
                <div className="flex text-orange-400 text-sm mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* NAME */}
                <div className="flex items-center flex-wrap gap-2 mb-2">

                  <h4 className="font-semibold text-sm sm:text-base">
                    {review.name}
                  </h4>

                  <span className="flex items-center text-gray-500 text-xs gap-1">
                    <MdVerified className="text-green-500" />
                    Verified Buyer
                  </span>

                </div>

                {/* TEXT */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                <div className="border-t my-4 sm:my-5"></div>

                {/* PRODUCT */}
                <div className="flex items-center gap-3">

                  <img
                    src={review.productImage}
                    alt={review.product}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
                  />

                  <div>

                    <p className="text-xs sm:text-sm font-medium truncate max-w-[140px]">
                      {review.product}
                    </p>

                    <div className="text-xs sm:text-sm font-semibold">

                      {review.price}

                      {review.oldPrice && (
                        <span className="text-gray-400 line-through ml-2 text-xs">
                          {review.oldPrice}
                        </span>
                      )}

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}