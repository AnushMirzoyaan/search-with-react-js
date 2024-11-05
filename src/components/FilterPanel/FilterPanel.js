import React, { useState } from "react";
import "./index.css";

function FilterPanel({ onFilterChange }) {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(0);

  const handleFilterUpdate = () => {
    const filters = {
      brand,
      category,
      minPrice,
      maxPrice,
      rating,
    };
    onFilterChange(filters);
  };

  return (
    <div className="container">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Search brand"
        />
      </div>

      <div className="filter-group">
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Search category"
        />
      </div>

      <div className="filter-group">
        <label>Price Range</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          placeholder="Min"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          placeholder="Max"
        />
      </div>

      <div className="filter-group">
        <label>Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          placeholder="Min Rating"
          min="0"
          max="5"
        />
      </div>

      <button onClick={handleFilterUpdate} className="apply-filters-button">
        Apply Filters
      </button>
    </div>
  );
}

export default FilterPanel;
