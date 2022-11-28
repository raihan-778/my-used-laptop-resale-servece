import { useEffect, useState } from "react";
import LoadingSpinner from "../sharedPage/LoadingSpinner/LoadingSpinner";

const useAdmin = (email) => {
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState("");

  if ((email, isAdminLoading)) {
    <LoadingSpinner></LoadingSpinner>;
  }

  useEffect(() => {
    if (email) {
      fetch(
        `https://b612-used-products-resale-server-side-raihan-778.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
