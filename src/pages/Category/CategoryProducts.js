import React from "react";

const CategoryProducts = ({ category }) => {
  const { categoryId, products } = category;

  console.log(products);
  return (
    <div>
      {products.map((product) => {
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product.imgUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.productName}</h2>
            <p>{product.location}</p>
            <p>ReSale Price: {product?.reSalePrice} tk</p>
            <p> Original Price{product?.originalPrice} tk</p>
            <p> Use Duration: {product?.useDuration} </p>
            <p> Posted Date: {product?.postTime} </p>
            <p> Seller Name: {product?.sellerName} </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default CategoryProducts;
