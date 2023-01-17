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
    <div className="my-4">
      <Slide>
        {" "}
        <h2 className="text-3xl font-bold text-blue-600">
          Advertised Products
        </h2>
      </Slide>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto lg:grid-cols-3">
        {advertisedProducts && (
          <>
            {advertisedProducts.map((adversiedProduct) => (
              <AdvertisedProductCard
                adversiedProduct={adversiedProduct}
              ></AdvertisedProductCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AdvertisedProducts;
