import React from "react";
import "./productOverview.css";
import productImage from "../../../assets/sonosspeaker.png";
import { FaSquarespace, FaMicrochip } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

const ProductOverview = () => {
  return (
    <div className="product-overview-container">
      <div className="product-overview-image-container">
        <img
          src={productImage}
          alt="product image"
          className="product-overview-image"
        />
      </div>
      <div className="product-overview-details">
        <h1 className="product-overview-header">Sonos One</h1>
        <h4>Deluxe Edition - $599</h4>
        <div className="product-overview-description-container">
          <FaSquarespace />
          <p className="product-overview-description">
            Create a space where you'll love to work with an incredible-sounding
            speaker for music.
          </p>
        </div>
        <div className="product-overview-description-container">
          <FaMicrochip />
          <p className="product-overview-description">
            Modula takes over the lowest frequencies, enhancing the midrange
            playback from paired speakers.
          </p>
        </div>
        <div className="product-overview-description-container">
          <BsCloudSunFill />
          <p className="product-overview-description">
            The award-winning and versatile design features a sculptural shape
            and high-gloss finish. Stand it upright or lay it on its side.
          </p>
        </div>
        <div className="product-overview-bottom-container">
          <button className="add-to-cart-button">
            ADD TO CART
            <BsCart3 className="cart-icon" />
          </button>
          <p>Choose a color </p>
          <p>|</p>
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
