import React from "react";
import { Hinge, Rotate, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const {
    image,
    productName,
    categoryName,
    condition,
    useDuration,
    price,
    originalPrice,
  } = product;

  return (
    <>
      <div className="card w-full transition hover:-translate-y-3  hover:all ease-in-out mx-auto card-compact bg-[#e2e9f1] text-slate-500 shadow-xl">
        <figure className="rounded-xl mt-3 p-3">
          <img
            src={image}
            className="h-[200px] w-full rounded-xl p-3"
            alt="laptop"
          />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">Product Name:{productName}</h2>
          <h6 className="text-xl font-semibold text-teal-600">
            {categoryName}
          </h6>
          <p>Product Condition: {condition}</p>

          <p>Used Duration: {useDuration}</p>
          <p className="badge badge-secondary">
            Original Price: {originalPrice}
          </p>
          <p className="badge badge-accent badge-outline">
            ReSale Price: {price}
          </p>

          <div className="card-actions justify-end">
            <Link to="/categories">
              {" "}
              <label htmlFor="booking-modal" className="btn btn-primary">
                Book Now
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
