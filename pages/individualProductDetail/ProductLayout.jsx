"use client";

import CustomerReviews from "./CustomerReviews";
import ProductInfo from "./ProductInfo";
import ProductLeftSidebar from "./ProductLeftSidebar";
import ProductRightSidebar from "./ProductRightSidebar";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function ProductLayout( { Detail }) {

    const title = Detail || "Default Product";

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
        <ProductRightSidebar  />
      </div>

    </div>
    <CustomerReviews />
    <Footer />
    </div>

  );
}