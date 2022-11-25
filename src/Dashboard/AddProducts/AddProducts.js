import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
          const product = {
            productName: data.productName,
            sellerName: data.sellerName,
            description: data.description,
            image: imgData.data.imgUrl,
            price: data.reSalePrice,
            originalPrice: data.originalPrice,
            condition: data.condition,
            categoryName: data.categoryName,
            categoryId: data.categoryId,
            location: data.location,
            phone: data.phoneNumber,
            useDuration: data.useDuration,
            postTiem: data.postTime,
          };

          //save products info in the database

          fetch(`http://localhost:5000/allproducts`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.productName} Added Successful`);
            });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        {/* Product Name */}
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
        {/* Product price */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter reSale Price</span>
          </label>
          <input
            {...register("reSalePrice", {
              required: "Please enter a valid email address",
            })}
            type="text"
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
        {/* Product Original Price */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Original Price</span>
          </label>
          <input
            {...register("originalPrice", {
              required: "Please enter a valid email address",
            })}
            type="text"
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
        {/* Product condition */}
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
        {/* Product Category */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
        </div>
        <select
          {...register("categoryName", {
            required: "Please select product Category",
          })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Product Category
          </option>
          <option>HP</option>
          <option>Lenovo</option>
          <option>Dell</option>
        </select>

        {/* Category id */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Category Id</span>
          </label>
        </div>
        <select
          {...register("categoryId", {
            required: "Please select product Category",
          })}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Product Id
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        {/* Phone Number */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Phone Number</span>
          </label>
          <input
            {...register("phoneNumber", {
              required: "Please enter a valid email address",
            })}
            type="text"
            placeholder="Type here"
            name="phoneNumber"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.phoneNumber && (
            <p className="text-orange-600" role="alert">
              {errors.phoneNumber?.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Your Location Name</span>
          </label>
          <input
            {...register("location", {
              required: "Please enter a valid email address",
            })}
            type="text"
            placeholder="Type here"
            name="location"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Product Description */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input
            {...register("description", {
              required: "enter short description",
            })}
            type="text"
            placeholder="Type here"
            name="location"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Seller Name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            {...register("sellerName", {
              required: "enter seller Name",
            })}
            type="text"
            placeholder="Type here"
            name="sallerName"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Product Used Duration */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Used Duration</span>
          </label>
          <input
            {...register("useDuration", {
              required: "enter used Duration",
            })}
            type="text"
            placeholder="Type here"
            name="usedDuration"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        {/* Posted Time */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Posted time</span>
          </label>
          <input
            {...register("postTime", {
              required: "enter Posted Time",
            })}
            type="text"
            placeholder="Type here"
            name="postTime"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* Product Image */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter Product Image</span>
          </label>
          <input
            {...register("imgUrl")}
            type="file"
            placeholder="Type image url"
            name="imgUrl"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.imgUrl?.type === "required" && (
            <p className="text-orange-600" role="alert">
              {errors.imgUrl?.message}
            </p>
          )}
        </div>
        {/* Submit Button */}
        <input
          className="btn mt-5 w-full max-w-xs btn-accent"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
