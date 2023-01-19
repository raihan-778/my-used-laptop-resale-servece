import React from "react";

import { useQuery } from "@tanstack/react-query";
import { Carousel } from "3d-react-carousal";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  const {
    data: productsInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-raihan-778.vercel.app/allproducts"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });
  const callback = function (index) {
    console.log("callback", index);
  };
  productsInfo.map((product) => {
    console.log(product.image);
    <img src={product.img}></img>;
  });

  // const images=[
  //   {
  //     img:"https://i.ibb.co/yf0HvKC/banner1.jpg",
  //     id:1
  //   },
  //   {
  //     img:"https://i.ibb.co/jh8RnT8/banner3.jpg",
  //     id:2
  //   },
  //   {
  //     img:"https://i.ibb.co/GQnYX7P/banner2.jpg",
  //     id:3
  //   },
  //   {
  //     img:"https://i.ibb.co/HrvY06Z/banner4.jpg",
  //     id:4
  //   },
  //   {
  //     img:"https://i.ibb.co/dB6V3PZ/banner5.jpg",
  //     id:5
  //   },
  // ]

  let slides = [
    <img
      className="borde rounded-xl"
      src="https://i.ibb.co/yf0HvKC/banner1.jpg"
      alt="1"
    />,
    <img
      className="borde rounded-xl"
      src="https://i.ibb.co/GQnYX7P/banner2.jpg"
      alt="2"
    />,
    <img
      className="borde rounded-xl"
      src="https://i.ibb.co/jh8RnT8/banner3.jpg"
      alt="3"
    />,
    <img
      className="borde rounded-xl"
      src="https://i.ibb.co/HrvY06Z/banner4.jpg"
      alt="4"
    />,
    <img
      className="borde rounded-xl"
      src="https://i.ibb.co/dB6V3PZ/banner5.jpg"
      alt="5"
    />,
  ];

  return (
    <div className="neutral rounded-xl p-10">
      <Slide>
        <h2 className="text-3xl my-10 font-extrabold text-blue-600">
          Upcoming Porducts & Services
        </h2>
      </Slide>
      <Carousel
        slides={slides}
        autoplay={true}
        interval={2000}
        onSlideChange={callback}
      />
    </div>
  );
};

export default Banner;
