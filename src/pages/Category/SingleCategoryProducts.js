import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

import ProductCard from "./ProductCard/ProductCard";

const SingleCategoryProducts = () => {
  const data = useLoaderData();
  console.log(data);

  // const url = `http://localhost:5000/categories/${categoryName}`;

  // const {
  //   data: categoryProducts = [],
  //   refetch,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["categories", categoryName],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(categoryProducts);
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }

  return (
    <div className="bg-base-100">
      <h2 className="text-2xl font-bold text-teal-800 ">
        Category Product Collection
      </h2>

      <div className="  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {data.map((singleProduct) => (
          <ProductCard
            key={singleProduct._id}
            singleProduct={singleProduct}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryProducts;
