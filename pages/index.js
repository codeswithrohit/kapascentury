import Header from "./component/Header"
import AnnouncementBar from "./landingPages/AnnouncementBar";
import CategoryCircleSection from "./landingPages/CategoryCircleSection";
import CuratedSection from "./landingPages/CuratedSection";
import HeroSection from "./landingPages/HeroSection";
import BestSellingSection from "./landingPages/BestSellingSection";
import BrandStorySection from "./landingPages/BrandStorySection";
import Footer from "./component/Footer";
import TrendingCollectionSection from "./landingPages/TrendingCollectionSection";
import FlashSaleBanner from "./landingPages/FlashSaleBanner";
import FeaturedCollection from "./landingPages/FeaturedCollection";
import HappyCustomers from "./landingPages/HappyCustomers";
import BottomHeroBanner from "./landingPages/BottomHeroBanner";
import BottomFeatureBar from "./landingPages/BottomFeatureBar";

// import Cart from "./component/cart";


export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <CategoryCircleSection />
    <AnnouncementBar />
    <CuratedSection />
    <BestSellingSection />
    <BrandStorySection />
    <TrendingCollectionSection />
    <FlashSaleBanner />
    <FeaturedCollection />
    <HappyCustomers />
    <BottomHeroBanner />
    <BottomFeatureBar />
    {/* <Cart /> */}
   
    <Footer />
   </>
  );
}
