import React from "react";
import "./accessories.css";
import beoremotehalo1 from "../../assets/beoremote/image1.png";
import beoremotehalo2 from "../../assets/beoremote/image2.png";
import beosoundcore1 from "../../assets/beosoundcore/image1.png";
import beosoundcore2 from "../../assets/beosoundcore/image2.png";
import beosounda9wall1 from "../../assets/beosounda9wall/image1.png";
import beosounda9wall2 from "../../assets/beosounda9wall/image2.png";
import ProductCard from "../utils/productcard/productcard";

const Accessories = () => {
  const products = [
    {
      images: [beoremotehalo1, beoremotehalo2],
      name: "BEOREMOTE HALO",
      description: "Easy access to Music and Smart Home",
      price: "$900",
      colors: ["#D3D3D3", "#000", "#fafafa"],
    },
    {
      images: [beosoundcore1, beosoundcore2],
      name: "BEOSOUND CORE",
      description: "The heart of your music",
      price: "$1,100",
      colors: ["#fafafa", "#C0C0C0", "#000", "#FF00FF"],
    },
    {
      images: [beosounda9wall1, beosounda9wall2],
      name: "BEOSOUND A9 WALL BRACKET",
      description: "One product, flexible placement",
      price: "$150",
      colors: ["#A9A9A9", "#000", "#808080", "#008000"],
    },
    {
      images: [beoremotehalo1, beoremotehalo2],
      name: "BEOREMOTE HALO",
      description: "Easy access to Music and Smart Home",
      price: "$900",
      colors: ["#D3D3D3", "#000", "#fafafa"],
    },
    {
      images: [beosoundcore1, beosoundcore2],
      name: "BEOSOUND CORE",
      description: "The heart of your music",
      price: "$1,100",
      colors: ["#fafafa", "#C0C0C0", "#000", "#FF00FF"],
    },
    {
      images: [beosounda9wall1, beosounda9wall2],
      name: "BEOSOUND A9 WALL BRACKET",
      description: "One product, flexible placement",
      price: "$150",
      colors: ["#A9A9A9", "#000", "#808080", "#008000"],
    },
    {
      images: [beoremotehalo1, beoremotehalo2],
      name: "BEOREMOTE HALO",
      description: "Easy access to Music and Smart Home",
      price: "$900",
      colors: ["#D3D3D3", "#000", "#fafafa"],
    },
    {
      images: [beosoundcore1, beosoundcore2],
      name: "BEOSOUND CORE",
      description: "The heart of your music",
      price: "$1,100",
      colors: ["#fafafa", "#C0C0C0", "#000", "#FF00FF"],
    },
    {
      images: [beosounda9wall1, beosounda9wall2],
      name: "BEOSOUND A9 WALL BRACKET",
      description: "One product, flexible placement",
      price: "$150",
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

export default Accessories;
