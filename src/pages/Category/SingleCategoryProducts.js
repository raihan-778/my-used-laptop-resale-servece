import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategoryProducts = () => {
  const categoryData = useLoaderData();
  const { categoryId, categoryName } = categoryData;

  const url = `http://localhost:5000/allproducts?id=${categoryId}`;

  const { data: categoryProducts = [] } = useQuery({
    queryKey: ["allproducts", categoryId],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div>
      <h2>This is Single Category</h2>
      {categoryProducts.map((categoryProduct) => (
        <h2>{categoryProduct?.categoryName}</h2>
      ))}
    </div>
  );
};

export default SingleCategoryProducts;
