import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

const Category = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/categories")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
        <span className="border rounded-xl py-2">
          {" "}
          <h2 className="text-xl font-semibold text-center  text-cyan-400">
            All Products Categories
          </h2>
        </span>
        {categories?.map((category) => (
          <Link key={category._id} to={`/categories/${category.categoryName}`}>
            <button className="btn btn-outline btn-accent my-3">
              {category.categoryName}
            </button>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;
