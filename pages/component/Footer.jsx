"use client"

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6"

import { FiSend } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-[#5F0D24] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Column 1 */}
          <div>
            <div className="text-2xl font-bold mb-5">कapas Century</div>
            <p className="text-sm leading-7 opacity-90 mb-6">
              We only carry designs we believe in ethically and aesthetically – 
              original, authentic pieces that are made to last. 
              <span className="underline cursor-pointer"> Learn more</span>
            </p>

            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <FaLocationDot /> Street Address 2571 Oakridge
              </p>
              <p className="flex items-center gap-3">
                <FaPhone /> +1 (973) 435-3638
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope /> info@fashionwomen.com
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Company</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li>About us</li>
              <li>Contact Us</li>
              <li>Our Store</li>
              <li>Store location</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick links</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
              <li>Sale</li>
              <li>Size guide</li>
              <li>Wishlist</li>
              <li>Compare</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Shop Categories</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li>Designer Suits</li>
              <li>Elegant Kurtis</li>
              <li>Festive Wear</li>
              <li>Kurta Sets</li>
              <li>Sarees</li>
              <li>Anarkali Suits</li>
            </ul>
          </div>

          {/* Column 5 Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Sign Up to Newsletter
            </h3>
            <p className="text-sm opacity-90 mb-6">
              Subscribe for store updates and discounts.
            </p>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-transparent border border-white/40 rounded-full py-3 px-5 pr-14 outline-none text-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-lg">
                <FiSend />
              </button>
            </div>

            <p className="text-xs opacity-80 leading-6">
              ***By entering the e-mail you accept the{" "}
              <span className="font-semibold">terms and conditions</span> and the{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPinterestP].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full cursor-pointer hover:bg-white hover:text-[#7b0f23] transition"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-90 gap-4">

          <div>
           india (INR ₹)
          </div>

          <div>
            © 2025 Kapas Century. All rights reserved.
          </div>

          <div className="flex gap-3">
            <div className="bg-white text-black px-3 py-1 rounded text-xs">
              VISA
            </div>
            <div className="bg-white text-black px-3 py-1 rounded text-xs">
              Mastercard
            </div>
            <div className="bg-white text-black px-3 py-1 rounded text-xs">
              AMEX
            </div>
            <div className="bg-white text-black px-3 py-1 rounded text-xs">
              PayPal
            </div>
          </div>
        </div>

      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition"
      >
        ↑
      </button>
    </footer>
  )
}