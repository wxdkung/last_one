import React, { useState } from "react";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="home-container">
      <Slider />
      
      {/* ช่องค้นหาสินค้า */}
      <input
        type="text"
        placeholder="🔍 ค้นหาสินค้า..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <ProductList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
