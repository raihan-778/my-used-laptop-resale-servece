import React from "react";
import {
  AttentionSeeker,
  Fade,
  JackInTheBox,
  Slide,
  Zoom,
} from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" mb-20 mt-10">
        <div className="py-12  bg-[rgb(250,250,250)]  rounded-xl relative shadow-xl text-gray-900">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mx-auto">
            <Slide direction="left">
              <div className="w-full rounded-xl">
                <img
                  className="w-full rounded-xl"
                  src="https://i.ibb.co/TvMvdWr/banner-imagewebp.webp"
                  alt="banner-imagewebp"
                  border="0"
                />
                {/* src="https://i.ibb.co/r52pvW1/Getter.png" */}
              </div>
            </Slide>
            <Slide direction="right">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="space-x-2 px-5 text-center py-2 lg:py-0">
                  <div className="mb-3">
                    <span className="text-xl font-bold">On first deal! </span>
                    <span className="font-bold text-2xl text-sky-400 ">
                      with ReliableTech
                    </span>
                  </div>
                  <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-yellow-800 font-bold  transition ease-in-out delay-100 hover:scale-105 text-white duration-200 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <img
          className="absolute top-20 w-44 lg:right-10 md:hidden sm:hidden lg:block "
          src="https://i.ibb.co/Ns8wTSz/poster-054.png"
          alt="poster-054"
          border="0"
        />
      </div>
      <div className="card w-full h-3/4 bg-base-100 my-10 shadow-xl image-full">
        <figure>
          <img src="https://i.ibb.co/sK751gv/header2.jpg" alt="Shoes" />
        </figure>
        <div className="card-body my-auto">
          <div>
            <div className="grid grid-cols-1 gap-12">
              <div className="w-1/2 grid grid-cols-2 gap-5 mx-auto">
                {" "}
                <img
                  className="w-full "
                  src="https://i.ibb.co/wYvqNnj/smartwatch.webp"
                  alt="smartwatch"
                  border="0"
                />
                <img
                  className="w-full "
                  src="https://i.ibb.co/vQVH9hx/soundsystem.webp"
                  alt="soundsystem"
                  border="0"
                />
              </div>

              <div className="w-52 mx-auto grid grid-cols-1">
                <img
                  className="w-full"
                  src="https://i.ibb.co/3zb4Qyp/drone.webp"
                  alt="drone"
                  border="0"
                />
              </div>
            </div>
          </div>
          <JackInTheBox>
            <h1 className="mb-5 text-3xl text-slate-100 font-bold">
              Welcome to your trusted Re-sele Shop
            </h1>
          </JackInTheBox>
          <Fade delay={1e3} cascade damping={1e-1}>
            <p>
              Welcome to our website, where you'll find a curated collection of
              vintage and pre-owned items that have been carefully selected and
              revitalized for your shopping pleasure. From vintage products and
              antique electronics to previously owned Laptop, our
              "Reliable-Tech" are sure to delight and inspire. Whether you're
              looking to add a touch of nostalgia to your home decor, or
              searching for that perfect vintage statement piece, we've got you
              covered. Our website is your one-stop-shop for all things vintage
              and pre-owned. Browse our collection today and discover the charm
              of yesterday's treasures for yourself.
            </p>
          </Fade>
          <div className="card-actions mx-auto ">
            <Link to="/categories">
              <Zoom>
                <button className=" justify-center btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-yellow-800 font-bold  transition ease-in-out delay-100 hover:scale-105 text-white duration-200">
                  Visit Shop
                </button>
              </Zoom>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
