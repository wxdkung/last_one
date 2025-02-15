import React, { useState } from "react";
import "./ProductList.css";

const products = [
  { id: 1, name: "ข้าวผัด", image: "./img/p1.jpg" },
  { id: 2, name: "ต้มยำ", image: "./img/p2.jpg" },
  { id: 3, name: "ต้มข่า", image: "./img/p3.jpg" },
  { id: 4, name: "ต้มขมิ้น", image: "./img/p4.jpg" },
  { id: 5, name: "ผัดเครื่องแกง", image: "./img/p5.jpg" },
  { id: 6, name: "ผัดกระเพรา", image: "./img/p6.jpg" },
  { id: 7, name: "แกงเขียวหวาน", image: "./img/p7.jpg" },
  { id: 8, name: "ข้าวสวย", image: "./img/p8.jpg" },
  { id: 9, name: "ข้าวไข่ดาว", image: "./img/p9.jpg" },
  { id: 10, name: "ข้าวไข่เจียว", image: "./img/p10.jpg" }
  
];

const ProductList = ({ searchTerm }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item" onClick={() => setSelectedImage(product.image)}>
              <img src={product.image} alt={product.name} className="product-image" />
              <p className="product-name">{product.name}</p>
            </div>
          ))
        ) : (
          <p className="no-result">❌ ไม่พบสินค้า</p>
        )}
      </div>

      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="popup" className="popup-image" />
        </div>
      )}
    </div>
  );
};

export default ProductList;
