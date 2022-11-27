import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

const AllBuyer = () => {
  const { data: buyerInfo = [], isLoading } = useQuery({
    queryKey: ["buyres"],
    queryFn: () =>
      fetch("http://localhost:5000/buyers")
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
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Delete User</th>
            </tr>
          </thead>
          {buyerInfo.map((buyer) => (
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div className="grid w-32 rounded-xl h-12 bg-base-300 place-items-center">
                    {buyer.name}
                  </div>
                </td>
                <td>{buyer.email}</td>
                <td>
                  <button className="btn btn-outline btn-secondary">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
