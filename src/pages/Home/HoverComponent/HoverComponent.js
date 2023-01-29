import React from "react";
import React, { useState } from "react";
import "./HoverComponent.css";

const HoverComponent = ({ image, price, rating }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="product"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`details ${hovered ? "blurred" : ""}`}>
        <img src={image} alt="product" />
        <p>{price}</p>
        <p>{rating}</p>
      </div>
      {hovered && (
        <div className="actions">
          <button>Buy now</button>
          <button>Add to wishlist</button>
        </div>
      )}
    </div>
  );
};

export default HoverComponent;
