import React from "react";
import FeaturedCategory from "../components/FeaturedCategory";
import AwesomeSection from "../components/AwesomeSection";
import OfferSection from "../components/OfferSection";
import SubscribeSection from "../components/SubscribeSection";
import BannerSection from "../components/BannnerSection";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <>
      <BannerSection />
      <FeaturedCategory />
      <AwesomeSection title="Awesome" />
      <OfferSection />
      <BestSellers title="Best Seller" />
      <SubscribeSection />
    </>
  );
};

export default Home;
