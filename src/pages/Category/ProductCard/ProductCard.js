import React from "react";
import BookingModal from "../../BookingModal/BookingModal";

const ProductCard = ({ singleProduct }) => {
  console.log(singleProduct);
  const {
    categoryName,
    imgUrl,
    postTime,
    reSalePrice,
    originalPrice,
    useDuration,
    sellerName,
    location,
    productName,
  } = singleProduct;
  return (
    <div className="card my-5 card-compact w-96 mx-auto neutral shadow-xl">
      <figure>
        <img src={imgUrl} className="h-72 border rounded-xl p-3" alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{productName}</h2>
        <h6 className="text-xl font-semibold text-teal-600">{categoryName}</h6>
        <p>Post Date: {postTime}</p>
        <p>Location: {location}</p>
        <p>Used Duration: {useDuration}</p>
        <p>Original Price: {originalPrice}</p>
        <p>ReSale Price: {reSalePrice}</p>
        <p>Seller Name: {sellerName}</p>
        <div className="card-actions justify-end">
          <BookingModal
            key={singleProduct._id}
            singleProduct={singleProduct}
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
