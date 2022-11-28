import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";
import BuyersProduct from "./BuyersProduct/BuyersProduct";
import SellersProduct from "./SellersProduct/SellersProduct";

const Myproducts = () => {
  const { user } = useContext(AuthContext);
  const { isSeller } = useSeller(user.email);
  console.log(isSeller);

  return (
    <>
      <div>
        {isSeller && <SellersProduct></SellersProduct>}
        <BuyersProduct></BuyersProduct>

        {/* <Link to="/dashboard/sellersproducts">
          <button className="btn btn-primary">Sellers Product</button>
        </Link>
        <Link to="/dashboard/buyersproducts">
          <button className="btn btn-secondary">Buyers Products</button>
        </Link> */}
      </div>
    </>
  );
};

export default Myproducts;
