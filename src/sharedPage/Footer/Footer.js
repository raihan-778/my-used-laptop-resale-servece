import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section
      style={{
        background: `url(https://i.ibb.co/THGkmFP/footer.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" text-slate-100 mx-5 rounded-xl"
    >
      <footer className="footer p-5 rounded-xl ">
        <div>
          <span className="footer-title text-orange-600 ">Our Services</span>
          <Link to="/" className="link link-hover">
            Ontime Delivery
          </Link>
          <Link to="/" className="link link-hover">
            Best Quality Products
          </Link>
          <Link to="/" className="link link-hover">
            Used but quality products from trusted seller
          </Link>
          <Link to="/" className="link link-hover">
            Customers Setisfection
          </Link>
        </div>
        <div>
          <span className="footer-title text-orange-600">Our Products</span>
          <Link to="/" className="link link-hover">
            Large Collection
          </Link>
          <Link to="/" className="link link-hover">
            Populer Brand with high configeration
          </Link>
          <Link to="/" className="link link-hover">
            Used but defect free Product
          </Link>
        </div>
        <div>
          <span className="footer-title text-orange-600">Our Address</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
