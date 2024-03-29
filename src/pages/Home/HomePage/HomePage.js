import React from "react";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Category from "../../Category/Category";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../Banner/Banner";
import MyTestimonial from "../../../sharedPage/Testimonial/MyTestimonial";
import FeaturedBrands from "../Featured Brands/FeaturedBrands";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";
const HomePage = () => {
  return (
    <div className="mx-5 pt-24">
      <Header></Header>
      <div className="shadow-xl lg:block md:block">
        <Banner></Banner>
      </div>
      <Features></Features>
      <div className="hidden md:block lg:block">
        <FeaturedBrands></FeaturedBrands>
      </div>

      <Category></Category>
      <AdvertisedProducts></AdvertisedProducts>
      {/* <MyTestimonial></MyTestimonial> */}
      <ReviewCarousel></ReviewCarousel>
    </div>
  );
};

export default HomePage;
