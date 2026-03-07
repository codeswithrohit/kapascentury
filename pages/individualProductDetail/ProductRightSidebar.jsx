"use client";

import { useState } from "react";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { RiStackFill } from "react-icons/ri";
import { useCart } from "../component/CartContext";

export default function ProductRightSidebar({ product }) {
   
  const [qty, setQty] = useState(1);
  const [openSection, setOpenSection] = useState(null);
  const { addToCart } = useCart();


  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const Accordion = ({ id, title, children }) => (
    <div className="border-b">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-semibold text-sm">{title}</span>

        {openSection === id ? <FiMinus /> : <FiPlus />}
      </button>

      {openSection === id && (
        <div className="pb-4 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-8 space-y-6">
      {/* Quantity + Add to cart */}
      <div className="flex items-center gap-4 sm:flex-row flex-col">
        <div className="flex items-center border cursor-pointer rounded-full overflow-hidden text-sm">
          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            className="px-4 py-2 cursor-pointer"
          >
            <FiMinus />
          </button>

          <span className="px-4">{qty}</span>

          <button onClick={() => setQty(qty + 1)} className="px-4 py-2 cursor-pointer">
            <FiPlus />
          </button>
        </div>

        <button
          onClick={() => addToCart({ ...product, id: product.id || product.title }, qty)}
          className="flex-1 bg-black text-white py-2 rounded-full w-full text-sm cursor-pointer hover:bg-gray-800 transition"
        >
          Add To Cart
        </button>
        <div className="flex-row  flex gap-4 ">
        <button className="border cursor-pointer p-2 flex-1 text-sm rounded-full hover:bg-black hover:text-white transition">
          <FiHeart />
        </button>
        <button className="border cursor-pointer p-2 flex-1 text-sm rounded-full hover:bg-black hover:text-white transition">
          <RiStackFill />   
        </button>

        </div>
       
      </div>

      {/* Terms */}
      <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
        <input type="checkbox" className="cursor-pointer" />
        <span>
          I agree with <b>Terms & Conditions</b>
        </span>
      </div>

      {/* Buy Now */}
      <button className="w-full bg-[#9F6E7C] text-white py-2 cursor-pointer text-sm rounded-full hover:bg-[rgb(93,60,69)] hover:text-white transition">
        Buy It Now
      </button>

      {/* Product info */}
      <div className="text-sm text-gray-600 space-y-2 ">
        <div className="flex gap-4">
          <span className="font-medium w-24">Sku:</span>
          <span>IDA_09</span>
        </div>

        <div className="flex gap-4">
          <span className="font-medium w-24">Available:</span>
          <span>Instock</span>
        </div>

        <div className="flex gap-4">
          <span className="font-medium w-24">Collections:</span>
          <span>
            Anarkali Suits, Bridal Sarees, Designer Suits, Elegant Kurtis,
            Festive Wear, Kurta Sets, Lehengas, Party Wear, Sarees
          </span>
        </div>
      </div>

      {/* Guarantee */}
      <div className="text-center text-sm font-semibold pt-4 border-t">
        Guarantee Safe Checkout:
      </div>

      {/* Accordion Sections */}

      <Accordion id="desc" title="Description">
        <p className="text-sm">
          Product are cut from ripstop that boasts a comfortable, stretchy
          quality and detailed with an oversized take on utility pockets.
        </p>
      </Accordion>

      <Accordion id="features" title="Features Product">
        <ul className="list-disc ml-6 space-y-2 text-sm">
          <li>Tonal stitching: 97% cotton, 3% elastane.</li>
          <li>Supple and stretch knit with a rich touch of wool.</li>
          <li>Model: Model is 6'1", wearing a size S.</li>
          <li>Caring for your clothes is caring for the environment.</li>
        </ul>
      </Accordion>

      <Accordion id="care" title="Care Instructions">
        <ul className="list-disc ml-6 space-y-2 text-sm">
          <li>Machine wash in cold water at 30°C / 85°F.</li>
          <li>Do not bleach.</li>
          <li>Do not tumble dry.</li>
          <li>Do not dry clean. Iron at low temperature.</li>
        </ul>
      </Accordion>

      <Accordion id="shipping" title="Shipping and Returns">
        <p className="text-sm">
          We offer fast and reliable shipping for all our clothing items. Orders
          are processed within 1-2 business days and shipped via standard
          delivery, which typically takes 3-5 business days.
        </p>

        <p className="mt-2 text-sm">
          Express shipping options are also available at checkout for an
          additional fee, ensuring your fashion essentials arrive even sooner.
          Enjoy free shipping on orders over $150. For any questions regarding
          your order, please contact our customer service team for assistance.
        </p>
      </Accordion>

      <Accordion id="returns" title="Return Policies">
        <p className="text-sm">
          Provided the conditions in our refund policy have been met, refunds
          will be processed using the original form of payment. You can return
          an item purchased online by posting it to us. Please contact customer
          service for return address. Please note that delivery costs will be
          excluded from the refund unless goods are returned in accordance with
          your statutory rights (e.g. they are faulty or not as ordered).
        </p>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-sm">
          <li>
            The items with the original receipt are returned within 30 days of
            purchase.
          </li>
          <li>
            Items must be in the original condition as purchased with all
            labels/tickets attached.
          </li>
        </ul>

        <p className="text-sm pt-4">
          Provided the conditions in our refund policy have been met, refunds
          will be processed using the original form of payment. You can return
          an item purchased online by posting it to us. Please contact customer
          service for return address. Please note that delivery costs will be
          excluded from the refund unless goods are returned in accordance with
          your statutory rights (e.g. they are faulty or not as ordered).
        </p>
      </Accordion>
    </div>
  );
}
