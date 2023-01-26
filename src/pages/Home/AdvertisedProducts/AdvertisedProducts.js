import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import Carousel from "react-grid-carousel";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import LoadingSpinner from "../../../sharedPage/LoadingSpinner/LoadingSpinner";
import AdvertisedProductCard from "./AdvertisedProductCard";

const AdvertisedProducts = () => {
  const [advertisedProduct, setAdvertisedProduct] = useState(null);
  const { data: advertisedProducts = [], isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-raihan-778.vercel.app/allproducts/advertise"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdvertisedProduct(data);
          return data;
        }),
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="my-4 shadow-lg rounded-xl">
      <Slide>
        {" "}
        <h2 className="text-3xl font-bold text-sky-400">Advertised Products</h2>
      </Slide>
      <div>
        {advertisedProducts && (
          <div className="bg-[rgb(250,250,250)] ">
            <Carousel
              cols={3}
              row={1}
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
              ]}
              mobileBreakpoint={670}
              arrowRight={<FaArrowAltCircleRight type="right" />}
              arrowLeft={<FaArrowAltCircleLeft type="left" />}
            >
              {advertisedProducts.map((advertisedProduct) => (
                <Carousel.Item key={advertisedProduct._id}>
                  <AdvertisedProductCard
                    advertisedProduct={advertisedProduct}
                  ></AdvertisedProductCard>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertisedProducts;
