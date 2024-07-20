import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/utils/navbar/navbar";
import Home from "./components/home/home";
import Support from "./components/support/support";
import ProductOverview from "./components/utils/product-overview/productOverview";
import Speaker from "./components/speakers/speaker";
import Headphone from "./components/headphones/headphone";
import Accessories from "./components/accessories/accessories";
import About from "./components/about/about";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/product-overview" element={<ProductOverview />} />
        <Route path="/shop/speakers" element={<Speaker />} />
        <Route path="/shop/headphones" element={<Headphone />} />
        <Route path="/shop/accessories" element={<Accessories />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
