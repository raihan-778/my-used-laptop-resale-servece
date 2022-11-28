import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  const [isSeller, setIsSeller] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-raihan-778.vercel.app/users/seller/${email}`
      )
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
