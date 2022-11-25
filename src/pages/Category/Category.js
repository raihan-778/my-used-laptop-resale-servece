import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import CategoryProducts from "./CategoryProducts";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: "category",
    queryFn: () =>
      fetch("http://localhost:5000/categories")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  return (
    <div>
      <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
        <h2 className="text-xl font-semibold text-left text-cyan-400">
          All Products Categories
        </h2>
        {categories.map((category) => (
          <div>
            <li key={category._id}>
              <Link>{category.categoryName}</Link>
            </li>
            <CategoryProducts
              key={category._id}
              category={category}
            ></CategoryProducts>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;
