import React, { useEffect, useState } from "react";

const useVerify = (email) => {
  const [isVerifyLoading, setIsVerifyLoading] = useState(true);
  const [isVerified, setIsVerified] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/verified/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsVerified(data.isVerified);
          setIsVerifyLoading(false);
        });
    }
  }, [email]);
  return [isVerified, isVerifyLoading];
};

export default useVerify;
