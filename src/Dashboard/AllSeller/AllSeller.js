import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

const AllSeller = () => {
  const { data: sellerInfo = [], isLoading } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/sellers")
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
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Verify User</th>
              <th>Delete User</th>
            </tr>
          </thead>
          {sellerInfo.map((seller) => (
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <span className="indicator-item badge badge-primary">
                    verified
                  </span>
                  <div className="grid w-32 rounded-xl h-12 bg-base-300 place-items-center">
                    {seller.name}
                  </div>
                </td>
                <td>{seller.email}</td>
                <td>
                  <button className="btn btn-success">Verify</button>
                </td>
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

export default AllSeller;
