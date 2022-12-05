import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

import DeleteUserModal from "../DeleteuserModal/DeleteUserModal";

const AllSeller = () => {
  const { user } = useContext(AuthContext);
  const [deletSeller, setDeleteSeller] = useState(null);

  const {
    data: sellerInfo = [user?.email],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/sellers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });

  const cancelDeleteSeller = () => {
    setDeleteSeller("");
  };

  const handleDeleteseller = (seller) => {
    console.log(seller);
    fetch(`http://localhost:5000/users/${seller.email}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller.name} deleted successfully`);
        }
        refetch();
      });
  };

  const handleVerify = (email) => {
    fetch(`http://localhost:5000/users/seller/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer, ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Seller Verified Successfully");
          refetch();
        }
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
            <tbody key={seller._id}>
              <tr>
                <th>{i + 1}</th>
                <td>
                  {seller.status === "verified" && (
                    <span className="indicator-item badge badge-primary">
                      verified
                    </span>
                  )}

                  <div className="grid w-32 rounded-xl h-12 bg-base-300 place-items-center">
                    {seller.name}
                  </div>
                </td>
                <td>{seller.email}</td>
                <td>
                  <button
                    onClick={() => handleVerify(seller.email)}
                    className="btn btn-success"
                    disabled={seller.status === "verified"}
                  >
                    Verify
                  </button>
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
            cancelDeleteSeller={cancelDeleteSeller}
            successAction={handleDeleteseller}
            modalData={deletSeller}
          ></DeleteUserModal>
        )}
      </div>
    </div>
  );
};

export default AllSeller;
