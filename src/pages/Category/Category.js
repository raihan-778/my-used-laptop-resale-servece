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
        <h2 className="text-xl font-semibold text-left text-cyan-400">
          All Products Categories
        </h2>
        {categories?.map((category) => (
          <>
            <li key={category._id}>
              <Link to={`/categories/${category.categoryName}`}>
                {category.categoryName}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Category;
