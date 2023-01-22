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
          <div className="card my-5 mx-auto card-compact w-96 neutral shadow-xl">
            <figure>
              <img
                src={image}
                className="h-64 w-full rounded-xl p-3"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title">Product Name:{productName}</h2>
              <h6 className="text-xl font-semibold text-teal-600">
                {categoryName}
              </h6>
              <p>Product Condition: {condition}</p>

              <p>Post Date: {postTime}</p>
              <p>Location: {location}</p>
              <p>Used Duration: {useDuration}</p>
              <p className="badge badge-secondary">
                Original Price: {originalPrice}
              </p>
              <p className="badge badge-accent badge-outline">
                ReSale Price: {price}
              </p>
              <p>Seller Name: {sellerName}</p>
              <div className="card-actions justify-end">
                <Link to="categories">
                  <label htmlFor="booking-modal" className="btn btn-primary">
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
