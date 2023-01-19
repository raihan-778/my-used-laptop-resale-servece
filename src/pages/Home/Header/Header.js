import React from "react";
import {
  AttentionSeeker,
  Fade,
  JackInTheBox,
  Zoom,
} from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="p-6 py-12 bg-cyan-100 rounded-xl dark:text-gray-900">
          <div className="container grid grid-cols-2 mx-auto">
            <div className="w-full rounded-xl">
              <img
                className="w-full rounded-xl"
                src="https://i.ibb.co/r52pvW1/Getter.png"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                Up to 10% Off
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>On first deal!</span>
                <span className="font-bold text-violet-700 text-lg">
                  with ReliableTech
                </span>
              </div>
              <button className="btn btn-success font-bold transition ease-in-out delay-100 hover:scale-105 bg-violet-700 text-white duration-200 ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 my-10 shadow-xl image-full">
        <figure>
          <img src="https://i.ibb.co/sK751gv/header2.jpg" alt="Shoes" />
        </figure>

        <div className="card-body my-auto">
          <JackInTheBox>
            <h1 className="mb-5 text-5xl text-slate-100 font-bold">
              Welcome to your trusted Laptop Re-sele Shop
            </h1>
          </JackInTheBox>
          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="mb-5 font-semibold text-indigo-200">
              We sell best quality used laptop with resonable price.We believe
              in quality and customers trust.Your faith is Our assets.
            </p>
          </Fade>
          <div className="card-actions ">
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
