import { useQuery } from "@tanstack/react-query";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

import { Link } from "react-router-dom";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";
import ProductsTab from "./ProductsTab/ProductsTab";

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

  return (
    <div className="grid  bg-[rgb(250,250,250)] shadow-xl grid-cols-1 rounded-xl lg:grid-cols-4 md:grid-cols-3 ">
      <div className=" rounded-xl py-3 h-96  mx-auto">
        <Slide direction="left">
          <h2 className="text-3xl my-5 font-bold text-sky-600">
            Product Categories
          </h2>
        </Slide>
        <Zoom duration={1500}>
          <div className="grid grid-cols-1 my-10 gap-3 ">
            {categories?.map((category) => (
              <div className="p-2 flex bg-[#e2e9f1] w-[200px] h-20 mx-auto justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105  duration-200   border-slate-100 border items-center">
                <figure className="w-[60px] h-auto mx-auto justify-center items-center rounded-xl">
                  <img
                    className="rounded-sm h-auto w-full"
                    src={category.img}
                    alt="pc"
                  />
                </figure>
                <div>
                  <Link
                    key={category._id}
                    to={`/categories/${category.categoryName}`}
                  >
                    <button className="btn w-[100px] h-[15px] btn-outline btn-accent my-2">
                      {category.categoryName}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Zoom>
      </div>

      <div className="lg:col-span-3 px-5 md:col-span-2">
        {" "}
        <ProductsTab></ProductsTab>
      </div>
    </div>
  );
};

export default Category;
