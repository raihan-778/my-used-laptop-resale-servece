import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LoadingSpinner from "../../../sharedPage/LoadingSpinner/LoadingSpinner";

const BuyersProduct = () => {
  const { user } = useContext(AuthContext);

  const url = `https://b612-used-products-resale-server-side-raihan-778.vercel.app/buyersproducts?email=${user?.email}`;

  const {
    data: myproducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyersproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want delete this booking?"
    );
    if (proceed) {
      fetch(
        `https://b612-used-products-resale-server-side-raihan-778.vercel.app/booking/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log(data);
            toast.success("Product Deteded successfully");
            refetch();
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table bg-slate-800 text-slate-200 w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Email Address</th>
            <th>Price</th>
            <th>Action Button</th>
          </tr>
        </thead>
        {myproducts?.map((product, i) => (
          <tbody key={product._id}>
            <tr>
              <th>{i + 1}</th>
              <td>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={product.image} alt="img" />
                  </div>
                </div>
              </td>
              <td>{product.productName}</td>
              <td>{product.email}</td>
              <td>
                <div className="badge badge-secondary">{product.price}</div>
              </td>
              <td>
                <div className="flex flex-col mx-2">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm btn-outline my-2 btn-secondary"
                  >
                    Delete
                  </button>
                  <Link to={`/dashboard/payment/{product._id}`}>
                    <button className="btn btn-sm btn-primary">Pay Now</button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default BuyersProduct;
