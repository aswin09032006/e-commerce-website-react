import React from "react";
import "./speaker.css";
import beosounda11 from "../../assets/beosounda1/image1.png";
import beosounda12 from "../../assets/beosounda1/image2.png";
import beosounda51 from "../../assets/beosounda5/image1.png";
import beosounda52 from "../../assets/beosounda5/image2.png";
import beosoundexplore1 from "../../assets/beosoundexplore/image1.png";
import beosoundexplore2 from "../../assets/beosoundexplore/image2.png";
import ProductCard from "../utils/productcard/productcard";

const Speaker = () => {
  const products = [
    {
      images: [beosounda51, beosounda52],
      name: "BEOSOUND A5",
      description: "Powerful portable speaker",
      price: "$1,099",
      colors: ["#D3D3D3", "#000", "#fafafa"],
    },
    {
      images: [beosounda11, beosounda12],
      name: "BEOSOUND A1 2ND GEN",
      description: "Portable Bluetooth speaker",
      price: "$299",
      colors: ["#fafafa", "#C0C0C0", "#000", "#FF00FF"],
    },
    {
      images: [beosoundexplore1, beosoundexplore2],
      name: "BEOSOUND EXPLORE",
      description: "Waterproof outdoor speaker",
      price: "$249",
      colors: ["#A9A9A9", "#000", "#808080", "#008000"],
    },
    {
      images: [beosounda51, beosounda52],
      name: "BEOSOUND A5",
      description: "Powerful portable speaker",
      price: "$1,099",
      colors: ["#D3D3D3", "#000", "#fafafa"],
    },
    {
      images: [beosounda11, beosounda12],
      name: "BEOSOUND A1 2ND GEN",
      description: "Portable Bluetooth speaker",
      price: "$299",
      colors: ["#000", "#C0C0C0", "#000", "#FF00FF"],
    },
    {
      images: [beosoundexplore1, beosoundexplore2],
      name: "BEOSOUND EXPLORE",
      description: "Waterproof outdoor speaker",
      price: "$249",
      colors: ["#A9A9A9", "#000", "#808080", "#008000"],
    },
    {
      images: [beosounda51, beosounda52],
      name: "BEOSOUND A5",
      description: "Powerful portable speaker",
      price: "$1,099",
      colors: ["#D3D3D3", "#000", "#fafafa"],
    },
    {
      images: [beosounda11, beosounda12],
      name: "BEOSOUND A1 2ND GEN",
      description: "Portable Bluetooth speaker",
      price: "$299",
      colors: ["#000", "#C0C0C0", "#000", "#FF00FF"],
    },
    {
      images: [beosoundexplore1, beosoundexplore2],
      name: "BEOSOUND EXPLORE",
      description: "Waterproof outdoor speaker",
      price: "$249",
      colors: ["#A9A9A9", "#000", "#808080", "#008000"],
    },
  ];

  return (
    <div className="explore-page-container">
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Speaker;
