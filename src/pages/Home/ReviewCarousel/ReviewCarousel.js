import React from "react";
import Carousel from "react-grid-carousel";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const ReviewCarousel = () => {
  return (
    <div className="my-20 shadow-lg bg-[rgb(250,250,250)]  rounded-xl">
      <h2 className="text-3xl font-bold py-5 text-sky-600">
        What Our Customer Says About Us
      </h2>
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        loop
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3,
          },
          {
            breakpoint: 990,
            cols: 2,
          },
          {
            breakpoint: 670,
            cols: 1,
          },
        ]}
        mobileBreakpoint={670}
        arrowRight={<FaArrowAltCircleRight type="right" />}
        arrowLeft={<FaArrowAltCircleLeft type="left" />}
      >
        <Carousel.Item>
          <div className="flex w-full flex-col mx-auto mb-5 rounded-lg shadow-lg">
            <div className="px-4 py-12 h-60 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
              <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
              <p className="relative px-6 py-1 text-sm italic text-center text-gray-100">
                I have got best quality product from this shop.{" "}
                <span>
                  <FaQuoteRight className="text-sky-400 text-right" />
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center  text-gray-100 justify-center p-8 rounded-b-lg bg-[#a88b5e]">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex  flex-col mx-auto mb-5 neutral rounded-lg shadow-lg">
            <div className="px-4 py-12 h-60 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
              <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
              <p className="relative px-6 py-1 text-sm italic text-center text-gray-100">
                I have got best quality product from this shop.{" "}
                <span>
                  <FaQuoteRight className="text-sky-400 text-right" />
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center  text-gray-100 justify-center p-8 rounded-b-lg bg-[#a88b5e]">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex  flex-col mx-auto mb-5 neutral rounded-lg shadow-lg">
            <div className="px-4 py-12 h-60 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
              <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
              <p className="relative px-6 py-1 text-sm italic text-center text-gray-100">
                This is one of my best option to buy used products. Anyone can
                trusr on them.{" "}
                <span>
                  <FaQuoteRight className="text-sky-400 text-right" />
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#a88b5e] ">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex  flex-col mx-auto mb-5 neutral rounded-lg shadow-lg">
            <div className="px-4 h-38 py-12 h-60 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
              <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
              <p className="relative px-6 py-1 text-sm italic text-center text-gray-100">
                This is one of my best option to buy used products. Anyone can
                trusr on them.{" "}
                <span>
                  <FaQuoteRight className="text-sky-400 text-right" />
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#a88b5e] ">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex  flex-col mx-auto mb-5 neutral rounded-lg shadow-lg">
            <div className="px-4 py-12 h-60 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
              <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
              <p className="relative px-6 py-1 text-sm italic text-center text-gray-100">
                This is one of my best option to buy used products. Anyone can
                trusr on them.{" "}
                <span>
                  <FaQuoteRight className="text-sky-400 text-right" />
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-[#a88b5e] ">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight">
                Distinctio Animi
              </p>
              <p className="text-sm uppercase">Aliquam illum</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
