import React from "react";
import beoplayex1 from "../../assets/beoplayex/image1.png";
import beoplayex2 from "../../assets/beoplayex/image2.png";
import beoplayexferrari1 from "../../assets/beoplayexferrari/image1.png";
import beoplayexferrari2 from "../../assets/beoplayexferrari/image2.png";
import beoplayh95ferrari1 from "../../assets/beoplayh95ferrari/image1.png";
import beoplayh95ferrari2 from "../../assets/beoplayh95ferrari/image2.png";
import "./headphone.css";
import ProductCard from "../utils/productcard/productcard";

const Headphone = () => {
  const products = [
    {
      images: [beoplayex1, beoplayex2],
      name: "BEOPLAY EX",
      description: "Next-gen wireless earbuds",
      price: "From $399",
      colors: ["#000000", "#A9A9A9", "#FFFFFF", "#FFD700"],
    },
    {
      images: [beoplayexferrari1, beoplayexferrari2],
      name: "BEOPLAY EX FERRARI EDITION",
      description: "Next-gen wireless earbuds",
      price: "$499",
      colors: ["#FF0000", "#000000"],
    },
    {
      images: [beoplayh95ferrari1, beoplayh95ferrari2],
      name: "BEOPLAY H95 FERRARI EDITION",
      description: "Premium over-ear headphones",
      price: "$1,299",
      colors: ["#FF0000", "#000000"],
    },
    {
      images: [beoplayex1, beoplayex2],
      name: "BEOPLAY EX",
      description: "Next-gen wireless earbuds",
      price: "From $399",
      colors: ["#000000", "#A9A9A9", "#FFFFFF", "#FFD700"],
    },
    {
      images: [beoplayexferrari1, beoplayexferrari2],
      name: "BEOPLAY EX FERRARI EDITION",
      description: "Next-gen wireless earbuds",
      price: "$499",
      colors: ["#FF0000", "#000000"],
    },
    {
      images: [beoplayh95ferrari1, beoplayh95ferrari2],
      name: "BEOPLAY H95 FERRARI EDITION",
      description: "Premium over-ear headphones",
      price: "$1,299",
      colors: ["#FF0000", "#000000"],
    },
    {
      images: [beoplayex1, beoplayex2],
      name: "BEOPLAY EX",
      description: "Next-gen wireless earbuds",
      price: "From $399",
      colors: ["#000000", "#A9A9A9", "#FFFFFF", "#FFD700"],
    },
    {
      images: [beoplayexferrari1, beoplayexferrari2],
      name: "BEOPLAY EX FERRARI EDITION",
      description: "Next-gen wireless earbuds",
      price: "$499",
      colors: ["#FF0000", "#000000"],
    },
    {
      images: [beoplayh95ferrari1, beoplayh95ferrari2],
      name: "BEOPLAY H95 FERRARI EDITION",
      description: "Premium over-ear headphones",
      price: "$1,299",
      colors: ["#FF0000", "#000000"],
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

export default Headphone;
