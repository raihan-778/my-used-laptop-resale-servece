import React from "react";
import { Slide } from "react-awesome-reveal";

import { Link } from "react-router-dom";

const AdvertisedProductCard = ({ advertisedProduct }) => {
  const {
    categoryName,
    image,
    postTime,
    price,
    condition,
    originalPrice,
    useDuration,
    sellerName,
    location,
    productName,
  } = advertisedProduct;
  console.log(advertisedProduct);

  return (
    <>
      <Slide direction="up">
        <div className="card w-full  transition delay-100 ease-in-out  hover:-translate-y-3  mx-auto card-compact bg-[#e2e9f1] text-slate-500 shadow-xl">
          <figure>
            <img
              src={image}
              className="h-52 w-full rounded-xl p-3"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Product Name:{productName}</h2>
            <h6 className="text-xl font-semibold text-teal-600">
              {categoryName}
            </h6>
            <p>Product Condition: {condition}</p>

            {/* <p>Post Date: {postTime}</p> */}
            {/* <p>Location: {location}</p>
              <p>Used Duration: {useDuration}</p> */}
            <p className="badge badge-secondary">
              Original Price: {originalPrice}
            </p>
            <p className="badge badge-accent badge-outline">
              ReSale Price: {price}
            </p>
            {/* <p>Seller Name: {sellerName}</p> */}
            <div className="card-actions justify-end">
              <Link to="categories">
                <label
                  htmlFor="booking-modal"
                  className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-yellow-800 font-bold  transition ease-in-out delay-100 hover:scale-105 text-white duration-200"
                >
                  Want to Buy
                </label>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default AdvertisedProductCard;
