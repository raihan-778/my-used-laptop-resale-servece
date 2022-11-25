import React from "react";
import Features from "../Features/Features";
import Header from "../Header/Header";
import Category from "../../Category/Category";
const HomePage = () => {
  return (
    <div className="mx-5">
      <Header></Header>
      <Features></Features>
      <Category></Category>
    </div>
  );
};

export default HomePage;
