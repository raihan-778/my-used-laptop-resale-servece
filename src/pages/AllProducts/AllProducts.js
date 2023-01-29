import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Flip, Slide } from "react-awesome-reveal";
import ProductsCard from "./ProductsCard";

const AllProducts = () => {
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

  return (
    <div>
      <div className="my-20 shadow-lg bg-[rgb(250,250,250)] mx-auto rounded-xl">
        <Slide>
          <h2 className="text-3xl font-bold py-10 text-indigo-700">
            All Products
          </h2>
        </Slide>

        <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {productsInfo.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
