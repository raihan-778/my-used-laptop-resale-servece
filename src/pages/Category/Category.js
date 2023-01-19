import { useQuery } from "@tanstack/react-query";
import { Fade, Zoom } from "react-awesome-reveal";

import { Link } from "react-router-dom";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

const Category = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-raihan-778.vercel.app/categories"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  //lenovo logo:src="https://i.ibb.co/qjRnDhx/lenovo150.png"
  //dell logo:src="https://i.ibb.co/1r0pXct/dell150.png"
  //hp logo:src="https://i.ibb.co/9cTkZVw/1hp150.png"

  return (
    <div className="neutral rounded-xl py-5 h-96  mx-auto">
      <Fade>
        <h2 className="text-3xl font-bold text-sky-600 mb-5">
          Product Categories
        </h2>
      </Fade>
      <Zoom duration={1500}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {categories?.map((category) => (
            <div className="p-3 flex-col w-1/2 mx-auto justify-center border-slate-100 border rounded-xl bg-slate-100 items-center">
              <figure className="w-[150px] mx-auto justify-center items-center rounded-xl">
                <img className="rounded-xl" src={category.img} alt="Shoes" />
              </figure>
              <div>
                <Link
                  key={category._id}
                  to={`/categories/${category.categoryName}`}
                >
                  <button className="btn w-[150px] btn-outline btn-accent my-3">
                    {category.categoryName}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Category;
