import React from "react";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Category from "../../Category/Category";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../Banner/Banner";
import MyTestimonial from "../../../sharedPage/Testimonial/MyTestimonial";
import FeaturedBrands from "../Featured Brands/FeaturedBrands";
const HomePage = () => {
  return (
    <div className="mx-5 pt-24">
      <Header></Header>
      <Banner></Banner>
      <Features></Features>
      <FeaturedBrands></FeaturedBrands>
      <Category></Category>
      <AdvertisedProducts></AdvertisedProducts>
      <MyTestimonial></MyTestimonial>
    </div>
  );
};

export default HomePage;
