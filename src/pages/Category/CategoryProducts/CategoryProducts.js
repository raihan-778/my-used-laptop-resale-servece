import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const CategoryProducts = () => {
  const productsDetail = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl font-bold text-teal-500">Category Products</h2>
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {productsDetail?.map((category) => (
          <ProductCard category={category}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
