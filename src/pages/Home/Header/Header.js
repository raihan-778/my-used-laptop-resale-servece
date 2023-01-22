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
      <div>
        <div className="p-6 py-12 neutral rounded-xl dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 mx-auto">
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
                    <span>On first deal!</span>
                    <span className="font-bold text-violet-700 text-lg">
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
      </div>
      <div className="card w-full bg-base-100 my-10 shadow-xl image-full">
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
            <h1 className="mb-5 text-5xl text-slate-100 font-bold">
              Welcome to your trusted Re-sele Shop
            </h1>
          </JackInTheBox>
          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="mb-5 font-semibold text-indigo-200">
              We sell best quality used laptop with resonable price.We believe
              in quality and customers trust.Your faith is Our assets.
            </p>
          </Fade>
          <div className="card-actions mx-auto ">
            <Link to="/categories">
              <Zoom>
                <button className="btn justify-center btn-primary ">
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
