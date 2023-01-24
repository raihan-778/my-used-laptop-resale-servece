import React from "react";
import { Zoom } from "react-awesome-reveal";

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
      <Zoom>
        <div>
          <div className="card w-3/4 transition hover:skew-y-2  hover:all ease-in-out  my-5 mx-auto card-compact neutral shadow-xl">
            <figure>
              <img
                src={image}
                className="h-48 w-full rounded-xl p-3"
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
        </div>
      </Zoom>
    </>
  );
};

export default AdvertisedProductCard;
