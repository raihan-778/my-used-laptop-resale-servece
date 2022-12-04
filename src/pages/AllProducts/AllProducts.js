import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductsCard from "./ProductsCard";

const AllProducts = () => {
  const {
    data: productsInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:5000/allproducts")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  return (
    <div>
      <div>
        <h2>product</h2>
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
