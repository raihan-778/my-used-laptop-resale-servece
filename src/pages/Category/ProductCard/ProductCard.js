import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import BookingModal from "../../BookingModal/BookingModal";

const ProductCard = ({ category }) => {
  const { user } = useContext(AuthContext);

  const {
    categoryName,
    image,
    email,
    postTime,
    price,
    condition,
    originalPrice,
    useDuration,
    sellerName,
    location,
    productName,
  } = category;

  const { product, setProduct } = useState(category);
  return (
    <div className="card my-5 card-compact w-96 mx-auto neutral shadow-xl">
      <figure>
        <img src={image} className="h-72 border rounded-xl p-3" alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">Product Name:{productName}</h2>
        <h6 className="text-xl font-semibold text-teal-600">{categoryName}</h6>
        <p>Product Condition: {condition}</p>
        <p>Email: {email}</p>
        <p>Post Date: {postTime}</p>
        <p>Location: {location}</p>
        <p>Used Duration: {useDuration}</p>
        <p className="badge badge-secondary">Original Price: {originalPrice}</p>
        <p className="badge badge-accent badge-outline">
          ReSale Price: {price}
        </p>
        <p>Seller Name: {sellerName}</p>
        <div className="card-actions justify-end">
          <BookingModal
            setproduct={setProduct}
            product={product}
            key={category._id}
            category={category}
          ></BookingModal>

          <label htmlFor="booking-modal" className="btn btn-primary">
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
