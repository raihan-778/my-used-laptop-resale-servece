import React, { useState } from "react";

import { HiEye, HiHeart, HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const PhoneCarousel = ({ singleProduct }) => {
  const [hovered, setHovered] = useState(false);
  const { img, title, description } = singleProduct;
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`card transition ease-in-out  ${
          hovered ? "blur-sm " : ""
        } my-5 card-p-5 compact w-60 h-96 text-blue-700 shadow-xl`}
      >
        <figure className="h-[300px]">
          <img
            className="w-3/4 h-auto transition hover:scale-110 hover:all ease-in-out rounded-xl p-5"
            // src="https://i.ibb.co/wgPkWkG/samsung-zfould.png"
            src={img}
            alt="phone"
          />
        </figure>
        <div className="card-p-5 body">
          <h2 className="font-bold text-xl text-center">{title}</h2>
          <p className="font-semibold text-amber-600">{description}</p>
        </div>
      </div>
      {hovered && (
        <>
          <div className="card my-5 card-p-5 compact bg-blue-900 bg-opacity-10 h-96 w-60 absolute -top-10 left-0 z-10 text-slate-500 ">
            <figure className=" h-96 flex justify-end  items-center">
              <div className="tooltip" data-tip="Add To Cart">
                <HiShoppingCart className="text-5xl transition delay-100 all ease-in-out hover:text-orange-700 ">
                  <Link href="#"></Link>
                </HiShoppingCart>
              </div>
              <div className="tooltip" b data-tip="View Details">
                <HiEye className="text-5xl transition delay-100 all ease-in-out hover:text-orange-700 ml-5">
                  <Link href="#"></Link>
                </HiEye>
              </div>
              <div className="tooltip" data-tip="Add To wish List">
                <HiHeart className="text-5xl transition delay-100 all ease-in-out hover:text-orange-700 ml-5">
                  <Link href="#"></Link>
                </HiHeart>
              </div>
            </figure>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneCarousel;
