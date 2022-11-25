import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../sharedPage/LoadingSpinner/LoadingSpinner";

const AddProducts = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  /*
img:ce9c20640044f2f3784a2967dfce6506 
 */

  const handleAddProduct = (data) => {
    console.log(data.img[0]);
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: imgData.data.url,
          };

          //save doctors info in the database

          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} Added Successful`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Product Name</span>
          </label>
          <input
            {...register("productName", {
              maxLength: 20,
              required: "Namd field cannot be empty",
            })}
            type="text"
            placeholder="Type your name"
            name="productName"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productName?.type === "required" && (
            <p className="text-orange-600" role="alert">
              {errors.productName?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter reSale Price</span>
          </label>
          <input
            {...register("reSalePrice", {
              required: "Please enter a valid email address",
            })}
            type="email"
            placeholder="Type here"
            name="reSalePrice"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.reSalePrice && (
            <p className="text-orange-600" role="alert">
              {errors.reSalePrice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product condition</span>
          </label>
        </div>
        <select
          {...register("condition", {
            required: "Please select product condition",
          })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Product Condition
          </option>
          <option>Good</option>
          <option>Fair</option>
          <option>Excellent</option>
        </select>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter product Description</span>
          </label>
          <input
            {...register("imgUrl")}
            type="file"
            placeholder="Type your name"
            name="imgUrl"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.imgUrl?.type === "required" && (
            <p className="text-orange-600" role="alert">
              {errors.imgUrl?.message}
            </p>
          )}
        </div>
        <input
          className="btn mt-5 w-full max-w-xs btn-accent"
          value="Add A Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
