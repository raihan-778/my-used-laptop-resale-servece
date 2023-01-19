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
          <div className="card-actions justify-center">
            <Link to="/categories">
              <Zoom>
                <button className="btn  btn-primary">Visit Shop</button>
              </Zoom>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
