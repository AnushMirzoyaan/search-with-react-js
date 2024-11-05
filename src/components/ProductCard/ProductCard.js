import React from "react";
import "./index.css";

function ProductCard({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
