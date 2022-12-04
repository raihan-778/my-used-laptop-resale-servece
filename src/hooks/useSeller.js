import { useEffect, useState } from "react";
import useToken from "./useToken/useToken";

const useSeller = (email) => {
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  const [isSeller, setIsSeller] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/seller/${email}`, {
        headers: {
          authorization: `bearer, ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};
export default useSeller;
