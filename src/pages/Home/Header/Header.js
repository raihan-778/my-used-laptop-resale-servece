import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="hero min-h-screen mb-5 rounded-xl"
      style={{ backgroundImage: `url("https://i.ibb.co/sK751gv/header2.jpg")` }}
    >
      <div className="hero-overlay rounded-xl bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-slate-100 font-bold">
            Welcome to your trusted Laptop Re-sele Shop
          </h1>
          <p className="mb-5 font-semibold text-indigo-200">
            We sell best quality used laptop with resonable price.We believe in
            quality and customers trust.Your faith is Our assets.
          </p>
          <Link to="/categories">
            <button className="btn btn-primary">Visit Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
