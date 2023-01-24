import React from "react";
import Carousel from "react-grid-carousel";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ReviewCarousel = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop>
      <Carousel.Item>
        <div className="flex flex-col max-w-sm mx-auto my-6  rounded-lg shadow-lg">
          <div className="px-4 h-60 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
            <p className="relative px-6 py-1 text-sm italic text-center dark:text-gray-100">
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
        <div className="flex flex-col max-w-sm mx-auto my-6  rounded-lg shadow-lg">
          <div className="px-4 h-60 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
            <FaQuoteLeft className="text-sky-400"></FaQuoteLeft>
            <p className="relative px-6 py-1 text-sm italic text-center dark:text-gray-100">
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
        <div className="flex  flex-col max-w-sm mx-4 my-6 neutral rounded-lg shadow-lg">
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
        <div className="flex  flex-col max-w-sm mx-4 my-6 neutral rounded-lg shadow-lg">
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
        <div className="flex  flex-col max-w-sm mx-4 my-6 neutral rounded-lg shadow-lg">
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
    </Carousel>
  );
};

export default ReviewCarousel;
