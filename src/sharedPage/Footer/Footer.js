import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Zoom duration={1500}>
        <section
          style={{
            background: `url(https://i.ibb.co/THGkmFP/footer.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(80%) saturate(140%)",
          }}
          className=" text-slate-100 mx-5 rounded-xl"
        >
          <footer className="footer p-5 rounded-xl ">
            <div>
              <span className="footer-title  text-[#FB2576] ">
                Our Services
              </span>
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
              <span className="footer-title text-[#FB2576]">Our Products</span>
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
              <span className="footer-title  text-[#FB2576]">Our Address</span>
              <Link to="/" className="link link-hover">
                Citygate, Chittagong, Bangladesh.
              </Link>
            </div>
          </footer>
        </section>
      </Zoom>
    </>
  );
};

export default Footer;
