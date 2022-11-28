import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

import DeleteUserModal from "../DeleteuserModal/DeleteUserModal";

const AllSeller = () => {
  const [deletSeller, setDeleteSeller] = useState(null);

  const {
    data: sellerInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-raihan-778.vercel.app/sellers"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  const cancelDeletSeller = () => {
    setDeleteSeller("");
  };

  const handleDeleteseller = (seller) => {
    console.log(seller);
    fetch(
      `https://b612-used-products-resale-server-side-raihan-778.vercel.app/users/${seller.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller.name} deleted successfully`);
        }
        refetch();
      });
  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-full  text-slate-700">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Verify seller</th>
              <th>Delete seller</th>
            </tr>
          </thead>
          {sellerInfo.map((seller, i) => (
            <tbody>
              <tr>
                <th>{i + 1}</th>
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
                  <label
                    onClick={() => {
                      setDeleteSeller(seller);
                    }}
                    htmlFor="delete-user-modal"
                    className="btn-sx text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm text-center py-1 mr-2 mb-2 px-2"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {deletSeller && (
          <DeleteUserModal
            title={"Do you want to remove this seller!"}
            message={`Once you have confirmed to remove seller <>${deletSeller.name}</>
             it cannot be undone.`}
            cancelDeleteSeller={cancelDeletSeller}
            successAction={handleDeleteseller}
            modalData={deletSeller}
          ></DeleteUserModal>
        )}
      </div>
    </div>
  );
};

export default AllSeller;
