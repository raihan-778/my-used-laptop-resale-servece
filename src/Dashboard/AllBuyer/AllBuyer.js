import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";
import DeleteBuyerModal from "../DeleteBuyerModal/DeleteBuyerModal";

const AllBuyer = () => {
  const [deleteBuyer, setDeleteBuyer] = useState("");
  const {
    data: buyerInfo = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["buyres"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-raihan-778.vercel.app/buyers"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  const cancelDeletBuyer = () => {
    setDeleteBuyer("");
  };

  const handleDeleteBuyer = (buyer) => {
    console.log(buyer);
    fetch(
      `https://b612-used-products-resale-server-side-raihan-778.vercel.app/users/${buyer.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`buyer ${buyer.name} deleted successfully`);
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
        <table className="table w-full text-slate-700 mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email Address</th>
              <th>Delete User</th>
            </tr>
          </thead>
          {buyerInfo.map((buyer, i) => (
            <tbody>
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="grid w-32 rounded-xl h-12 bg-base-300 place-items-center">
                    {buyer.name}
                  </div>
                </td>
                <td>{buyer.email}</td>
                <td>
                  <label
                    onClick={() => {
                      setDeleteBuyer(buyer);
                    }}
                    htmlFor="delete-buyer-modal"
                    className="btn-sx text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm text-center py-1 mr-2 mb-2 px-2"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {deleteBuyer && (
          <DeleteBuyerModal
            title={"Do you want to remove this buyer!"}
            message={`Once you have confirmed to remove buyer <>${deleteBuyer.name}</>
             it cannot be undone.`}
            cancelDeletBuyer={cancelDeletBuyer}
            successAction={handleDeleteBuyer}
            modalData={deleteBuyer}
          ></DeleteBuyerModal>
        )}
      </div>
    </div>
  );
};

export default AllBuyer;
