import React, { useContext, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { FcApprove } from "react-icons/fc";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useVerify from "../../../hooks/useVerify/useVerify";
import LoadingSpinner from "../../../sharedPage/LoadingSpinner/LoadingSpinner";
import BookingModal from "../../BookingModal/BookingModal";

const ProductCard = ({ category }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [booked, setBooked] = useState(null);

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

  const [isVerified, isVerifyLoading] = useVerify(email);
  console.log(email);

  if (isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <Zoom>
        <div className="card my-5 card-compact w-96 mx-auto neutral shadow-xl">
          <figure>
            <img
              src={image}
              className="h-72  w-96 rounded-xl p-3"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title">Product Name:{productName}</h2>
            <h6 className="text-xl font-semibold text-teal-600">
              {categoryName}
            </h6>
            <p>Product Condition: {condition}</p>
            <p>Email: {email}</p>
            <p>Post Date: {postTime}</p>
            <p>Location: {location}</p>
            <p>Used Duration: {useDuration}</p>
            <p className="badge badge-secondary">
              Original Price: {originalPrice}
            </p>
            <p className="badge badge-accent badge-outline">
              ReSale Price: {price}
            </p>
            {isVerified ? (
              <div className="flex items-start justify-around">
                <FcApprove className="text-2xl"></FcApprove>
                <p>Seller Name: {sellerName}</p>
              </div>
            ) : (
              <p>Seller Name: {sellerName}</p>
            )}
            <div className="card-actions justify-end">
              <BookingModal
                setBooked={setBooked}
                key={category._id}
                category={category}
              ></BookingModal>
              <label
                htmlFor="booking-modal"
                onClick={() => setBooked(category)}
                className="btn btn-primary "
              >
                Book Now
              </label>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default ProductCard;
