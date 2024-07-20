import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./productcard.css";

const ProductCard = ({ images, name, description, price, colors }) => {
  return (
    <div className="product-card">
      <Carousel showThumbs={false} showStatus={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="product-image"
            />
          </div>
        ))}
      </Carousel>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <div className="color-options">
        {colors.map((color, index) => (
          <span
            key={index}
            className="color-dot"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
