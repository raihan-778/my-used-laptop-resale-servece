import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const BuyersProduct = () => {
  const { user } = useContext(AuthContext);

  const url = `https://b612-used-products-resale-server-side-raihan-778.vercel.app/buyersproducts?email=${user?.email}`;

  const { data: myproducts = [], refetch } = useQuery({
    queryKey: ["buyersproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

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
      <table className="table text-slate-700 w-full">
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
        {myproducts.map((product, i) => (
          <tbody>
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
                  <button className="btn btn-sm btn-primary">Pay Now</button>
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
