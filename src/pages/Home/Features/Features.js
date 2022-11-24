import React from "react";
import {
  FaOpencart,
  FaSearch,
  FaCodeBranch,
  FaRegThumbsUp,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">Why Should You Chose Us?</h2>
        <p className="dark:text-gray-400 font-semibold">
          What we can offer you!
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <FaOpencart className="text-3xl font-bold"></FaOpencart>
          <h3 className="my-3 text-3xl font-semibold">Delivery System</h3>
          <div className="space-y-1 leading-tight">
            <p>Secure Delivery System</p>
            <p>Delivery On time</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <FaSearch className="text-3xl font-bold"></FaSearch>
          <h3 className="my-3 text-3xl font-semibold">Products Collection</h3>
          <div className="space-y-1 leading-tight">
            <p>Large collection from trusted seller</p>
            <p>You can chose your needed one in sort time</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <FaRegThumbsUp className="text-3xl font-bold"></FaRegThumbsUp>
          <h3 className="my-3 text-3xl font-semibold">Products Quality</h3>
          <div className="space-y-1 leading-tight">
            <p>believe in quality with customers trust</p>
            <p>Your trus is our assets</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Similique quas ea veniam</p>
            <p>Tempore quasi porro</p>
            <p>Blanditiis aut mollitia ex</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Similique quas ea veniam</p>
            <p>Tempore quasi porro</p>
            <p>Blanditiis aut mollitia ex</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Product</h3>
          <div className="space-y-1 leading-tight">
            <p>Similique quas ea veniam</p>
            <p>Tempore quasi porro</p>
            <p>Blanditiis aut mollitia ex</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
