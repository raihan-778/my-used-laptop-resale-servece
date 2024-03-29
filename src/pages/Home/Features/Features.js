import React from "react";
import { AttentionSeeker, JackInTheBox, Slide } from "react-awesome-reveal";
import { FaOpencart, FaSearch, FaRegThumbsUp } from "react-icons/fa";
import { FcApprove } from "react-icons/fc";

const Features = () => {
  return (
    <section className="mx-auto h-auto my-20 bg-[#B9F3FC]  rounded-xl  text-[#00337C]">
      <div className="container p-4 my-6 space-y-2 ">
        <Slide direction="left">
          <h2 className="text-3xl text-blue-600 font-bold">
            Why Should You Chose Us?
          </h2>
        </Slide>
      </div>
      <div className="container mx-auto grid justify-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <JackInTheBox cascade damping={0.1}>
          <div className="flex flex-col items-center p-4">
            <FaOpencart className="text-3xl text-warning font-bold"></FaOpencart>
            <h3 className="my-3 text-3xl font-semibold">Delivery System</h3>
            <div className="space-y-1 leading-tight">
              <div className="flex  justify-center">
                <div className="mr-2">
                  <FcApprove />
                </div>
                <p>Secure Delivery System</p>
              </div>
              <div className="flex  justify-center">
                <div className="mr-2">
                  <FcApprove />
                </div>
                <p>Delivery On time</p>
              </div>
            </div>
          </div>
        </JackInTheBox>
        <JackInTheBox delay={1e1} cascade damping={0.2}>
          <div className="flex flex-col items-center p-4">
            <FaSearch className="text-3xl text-warning font-bold"></FaSearch>
            <h3 className="my-3 text-3xl font-semibold">Products Collection</h3>
            <div className="space-y-1 leading-tight">
              <div className="flex  justify-center">
                <div className="mr-2">
                  <FcApprove />
                </div>
                <p>Large collection from trusted seller</p>
              </div>
              <div className="flex  justify-center">
                <div className="mr-2">
                  <FcApprove />
                </div>
                <p>You can chose your needed one in sort time</p>
              </div>
            </div>
          </div>
        </JackInTheBox>
        <JackInTheBox delay={1e2} cascade damping={0.3}>
          <div className="flex flex-col items-center p-4">
            <FaRegThumbsUp className="text-3xl text-warning font-bold"></FaRegThumbsUp>
            <h3 className="my-3 text-3xl font-semibold">Products Quality</h3>
            <div className="space-y-1 leading-tight">
              <div className="flex  justify-center">
                <div className="mr-2">
                  <FcApprove />
                </div>
                <p>believe in quality with customers trust</p>
              </div>
              <div className="flex  justify-center">
                <div className="mr-2">
                  <FcApprove />
                </div>
                <p>Your trust is our assets</p>
              </div>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </section>
  );
};

export default Features;
