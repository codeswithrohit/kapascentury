import Header from "../src/components/reusable/Header"
import AnnouncementBar from "../src/components/landingPages/AnnouncementBar";
import CategoryCircleSection from "../src/components/landingPages/CategoryCircleSection";
import CuratedSection from "../src/components/landingPages/CuratedSection";
import HeroSection from "../src/components/landingPages/HeroSection";
import BestSellingSection from "../src/components/landingPages/BestSellingSection";
import BrandStorySection from "../src/components/landingPages/BrandStorySection";
import Footer from "../src/components/reusable/Footer";
import TrendingCollectionSection from "../src/components/landingPages/TrendingCollectionSection";
import FlashSaleBanner from "../src/components/landingPages/FlashSaleBanner";
import FeaturedCollection from "../src/components/landingPages/FeaturedCollection";
import HappyCustomers from "../src/components/landingPages/HappyCustomers";
import BottomHeroBanner from "../src/components/landingPages/BottomHeroBanner";
import BottomFeatureBar from "../src/components/landingPages/BottomFeatureBar";
import BOdyCare from "@/src/components/landingPages/BodyCare";
import SpotlightSection from "@/src/components/landingPages/SpotlightSection";


// import Cart from "./component/cart";


export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <CategoryCircleSection />
    <BOdyCare />
    <AnnouncementBar />
    <CuratedSection />
    <BestSellingSection />
    <SpotlightSection />
    <BrandStorySection />
    <TrendingCollectionSection />
    <FlashSaleBanner />
    <FeaturedCollection />
    <HappyCustomers />
    <BottomHeroBanner />
    <BottomFeatureBar />
    <Footer />
   </>
  );
}
