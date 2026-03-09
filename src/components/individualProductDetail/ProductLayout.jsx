"use client";

import CustomerReviews from "./CustomerReviews";
import ProductInfo from "./ProductInfo";
import ProductLeftSidebar from "./ProductLeftSidebar";
import ProductRightSidebar from "./ProductRightSidebar";
import Header from "../reusable/Header";
import Footer from "../reusable/Footer";

export default function ProductLayout( { Detail }) {

    const title = Detail || "Default Product";

    const product = {
      id: title.replace(/\s+/g, '-').toLowerCase(),
      title: title,
      price: 190, // You can make this dynamic
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c", // Sample image
    };

  return (
    <div>
        <Header />
    <div className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8 md:px-5 px-10 pt-5">

      {/* Left Side */}
      <div className="flex-1">
        <ProductLeftSidebar />
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <ProductInfo title={title}/>
        <ProductRightSidebar product={product} />
      </div>

    </div>
    <CustomerReviews />
    <Footer />
    </div>

  );
}