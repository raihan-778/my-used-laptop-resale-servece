import React from "react";
import { FcRating } from "react-icons/fc";
import { useReactCountdown } from "use-react-countdown";

const AdvertisedBanner = () => {
  // Date in format (Month DD, YYYY hh:mm:ss)
  const { days, hours, minutes, seconds } = useReactCountdown(
    "February 28, 2023 00:00:00"
  );
  return (
    <div className="relative mx-auto">
      <div className="absolute sm:left-12 lg:left-12 md:left-24   z-10 ">
        {" "}
        <img
          src="https://i.ibb.co/t3jG2Gs/sale-offer.webp"
          alt="sale-offer"
          border="0"
          className="sm:w-full"
        />
      </div>
      <div className="card mx-auto card-compact w-3/4 h-3/4 bg-[rgb(250,250,250)] text-slate-600 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/8NnLVyc/s-l1600-1.png" alt="drone" />
        </figure>
        <div className="card-body">
          <h2 className="text-sm font-semibold text-justify">
            Contixo F31 Drone -4K Gimbal Camera, Follow Me, GPS Auto Return
            Home, Glonass XE
          </h2>
          <span className="text-justify">
            4K Ultra High-Definition Camera, GPS & GLONASS, Follow
          </span>
          <p className="text-sm font-semibold">
            <s> 149$</s>
            <span className="text-[#D61355]"> 110$</span>
          </p>
          <p className=" flex justify-center lg:justify-start  items-center">
            <p className="flex justify-center lg:justify-start items-center">
              <span>
                <FcRating></FcRating>
              </span>
              <span>
                <FcRating></FcRating>
              </span>
              <span>
                <FcRating></FcRating>
              </span>
              <span>
                <FcRating></FcRating>
              </span>
              <span>
                <FcRating></FcRating>
              </span>
              <span className="pl-2 font-semibold text-sky-500">
                15 products rating
              </span>
            </p>
          </p>
          <h3 className="text-xl font-semibold">Hurry Up! Offer Ends in: </h3>
          <div className="grid grid-flow-col mx-auto gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-sky-600 rounded-box mx-auto text-white">
              <span className=" font-mono text-2xl">
                <span>{days}</span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-sky-600 rounded-box text-white">
              <span className=" font-mono text-2xl">
                <span>{hours}</span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-sky-600 rounded-box text-white">
              <span className=" font-mono text-2xl">
                <span>{minutes}</span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-sky-600 rounded-box text-white">
              <span className=" font-mono text-2xl">
                <span>{seconds}</span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedBanner;
