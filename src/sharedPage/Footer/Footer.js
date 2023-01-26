import React from "react";
import { Zoom } from "react-awesome-reveal";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className=" text-slate-100 bg-[#0A2647] rounded-xl">
        <footer className="footer p-5 rounded-xl ">
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold  text-[#FAAB78] ">
              Our Services
            </span>
            <Link to="/" className="link link-hover">
              Ontime Delivery
            </Link>
            <Link to="/" className="link link-hover">
              Best Quality Products
            </Link>
            <Link to="/" className="link link-hover">
              Trusted seller
            </Link>
            <Link to="/" className="link link-hover">
              Customers Setisfection
            </Link>
          </div>
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold text-[#FAAB78]">
              About ReliableTech
            </span>
            <Link to="/" className="link link-hover">
              Company Info
            </Link>
            <Link to="/" className="link link-hover">
              Investors
            </Link>
            <Link to="/" className="link link-hover">
              Career
            </Link>
          </div>
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold  text-[#eb9860]">
              Stay Connected
            </span>
            <div className="grid grid-cols-4 mx-auto gap-2">
              <Link to="/" className="link link-hover">
                <FaFacebook className="lg:text-2xl md:text-2xl text-xl text-[#f0f0f0]   transition hover:scale-110 hover:text-[#FC7300] hover:all ease-in-out   "></FaFacebook>
              </Link>
              <Link to="/" className="link link-hover">
                <FaLinkedin className="lg:text-2xl md:text-2xl text-xl text-[#f0f0f0]    transition hover:scale-110 hover:text-[#FC7300]  hover:all ease-in-out "></FaLinkedin>
              </Link>
              <Link to="/" className="link link-hover">
                <FaTwitter className="lg:text-2xl md:text-2xl text-xl text-[#f0f0f0]    transition hover:scale-110 hover:text-[#FC7300]  hover:all ease-in-out  "></FaTwitter>
              </Link>
              <Link to="/" className="link link-hover">
                <FaInstagram className="lg:text-2xl md:text-2xl text-xl text-[#f0f0f0]  transition hover:scale-110  hover:all hover:text-[#FC7300]  ease-in-out "></FaInstagram>
              </Link>
            </div>
          </div>
          <div>
            <span className="footer-title lg:text-2xl md:text-2xl text-xl font-bold  text-[#FAAB78]">
              Our Address
            </span>
            <Link to="/" className="link link-hover">
              Citygate, Chittagong, Bangladesh.
            </Link>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
