import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

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
    <div className="my-4 shadow-[3px_7px_23px_19px_rgba(64,71,120,0.87);] rounded-xl">
      <Slide>
        {" "}
        <h2 className="text-3xl font-bold text-sky-400">Advertised Products</h2>
      </Slide>
      <div className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 md:mx-auto lg:mx-auto lg:grid-cols-3 ">
        {advertisedProducts && (
          <>
            {advertisedProducts.map((advertisedProduct) => (
              <AdvertisedProductCard
                advertisedProduct={advertisedProduct}
              ></AdvertisedProductCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AdvertisedProducts;
