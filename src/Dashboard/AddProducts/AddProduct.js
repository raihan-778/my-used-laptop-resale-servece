import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;

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
            description: data.description,
            productName: data.name,
            sellerName: data.sellername,
            email: data.email,
            useDuration: data.useduration,
            price: data.price,
            image: imgData.data.url,
            condition: data.condition,
            postTime: data.posttime,
            originalPrice: data.originalprice,
            categoryName: data.categoryname,
            categoryId: data.categoryid,
            location: data.location,
            phone: data.phonenumber,
          };

          //save doctors info in the database

          fetch(
            "https://b612-used-products-resale-server-side-raihan-778.vercel.app/allproducts",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(doctor),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} Added Successful`);
              if (result) {
                return <navigate to="/dashboard/sellersproducts"></navigate>;
              }
            });
        }
      });
  };

  return (
    <div className="flex pt-20 h-auto justify-center w-96 items-center">
      <div>
        <h2 className="text-xl  font-bold">Add Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full text-slate-700 max-w-s">
            <label className="label">
              <span className="label-text">Enter Product Image</span>
            </label>
            <input
              {...register("img")}
              type="file"
              placeholder="Type image url"
              name="img"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.img?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.img?.message}
              </p>
            )}
          </div>

          {/* Product Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Product Name</span>
            </label>
            <input
              {...register("name", {
                required: "Namd field cannot be empty",
              })}
              type="text"
              placeholder="Type your Product Name"
              name="name"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.name?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              {...register("email", {
                required: "Please enter email address",
              })}
              type="email"
              placeholder="Type your Email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered neutral max-w-xs"
            />
            {errors.email && (
              <p className="text-orange-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          {/* product condition */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select Product Condition?</span>
            </label>
            <select
              {...register("condition", {
                required: "Product condition",
              })}
              name="condition"
              type="select"
              className="select select-bordered neutral w-full max-w-xs"
            >
              <option selected default>
                Excellent
              </option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Seller Name</span>
            </label>
            <input
              {...register("sellername", {
                required: "This field is required",
              })}
              type="text"
              name="sellername"
              defaultValue={user.name}
              placeholder="Type here"
              className="input input-bordered neutral  text-slate-700 w-full max-w-xs"
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
              name="description"
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>
          {/* Product Used Duration */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Used Duration</span>
            </label>
            <input
              {...register("useduration", {
                required: "enter used Duration",
              })}
              type="text"
              placeholder="Type here"
              name="useduration"
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>
          {/* Posted Time */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Posted time</span>
            </label>
            <input
              {...register("posttime", {
                required: "enter Posted Time",
              })}
              type="text"
              placeholder="Type here"
              name="posttime"
              defaultValue={new Date()}
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>

          {/* Product Original Price */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Original Price</span>
            </label>
            <input
              {...register("originalprice", {
                required: "Please enter a valid email address",
              })}
              type="text"
              placeholder="Type here"
              name="originalprice"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.originalprice && (
              <p className="text-orange-600" role="alert">
                {errors.originalprice?.message}
              </p>
            )}
          </div>
          {/* Product resale Price */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Resel Price</span>
            </label>
            <input
              {...register("price", {
                required: "Please enter a valid email address",
              })}
              type="text"
              placeholder="Type here"
              name="price"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.price && (
              <p className="text-orange-600" role="alert">
                {errors.price?.message}
              </p>
            )}
          </div>

          {/* Product Category */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>
          </div>
          <select
            {...register("categoryname", {
              required: "Please select product Category",
            })}
            className="select select-bordered neutral text-slate-700 w-full max-w-xs"
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
            {...register("categoryid", {
              required: "Please select product Category",
            })}
            className="select select-bordered neutral w-full max-w-xs"
          >
            <option disabled selected>
              Category Id
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
              {...register("phonenumber", {
                required: "Please enter a valid phone no",
              })}
              type="text"
              placeholder="Type here"
              name="phonenumber"
              className="input input-bordered neutral  w-full max-w-xs"
            />
            {errors.phonenumber && (
              <p className="text-orange-600" role="alert">
                {errors.phonenumber?.message}
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
              className="input input-bordered neutral  w-full max-w-xs"
            />
          </div>

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
