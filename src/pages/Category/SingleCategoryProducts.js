import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard/ProductCard";

const SingleCategoryProducts = () => {
  const categoryData = useLoaderData();
  const { categoryId } = categoryData;

  const url = `http://localhost:5000/categoryproducts?id=${categoryId}`;

  const {
    data: categoryProducts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allproducts", categoryId],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(categoryProducts);
      return data;
    },
  });

  return (
    <div className="bg-base-100">
      <h2 className="text-2xl font-bold text-teal-800 ">
        Category Product Collection
      </h2>
      <div className="  grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        {categoryProducts.map((categoryProduct) => (
          <ProductCard
            refetch={refetch}
            isLoading={isLoading}
            key={categoryProduct._id}
            categoryProduct={categoryProduct}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryProducts;
