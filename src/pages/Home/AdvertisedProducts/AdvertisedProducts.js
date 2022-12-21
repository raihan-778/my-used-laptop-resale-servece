import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
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
    <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default AdvertisedProducts;
