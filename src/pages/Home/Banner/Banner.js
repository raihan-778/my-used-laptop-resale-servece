import React from "react";

import { useQuery } from "@tanstack/react-query";
import { Carousel } from "3d-react-carousal";

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

  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    <div>
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
