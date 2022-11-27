import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import BuyersProduct from "./BuyersProduct/BuyersProduct";
import SellersProduct from "./SellersProduct/SellersProduct";

const Myproducts = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        <h2 className="text-3xl text-sky-500 font-semibold">
          These are buyers Products
        </h2>
        <BuyersProduct></BuyersProduct>
      </div>
      <div>
        <h2 className="text-3xl text-sky-500 font-semibold">
          These are Sellers Products
        </h2>
        <SellersProduct></SellersProduct>
      </div>
    </>
  );
};

export default Myproducts;
