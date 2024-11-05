import React, { useEffect, useState } from "react";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFilter = (filters) => {
    const { brand, category, minPrice, maxPrice, rating } = filters;

    const filtered = products.filter((product) => {
      const matchesBrand = brand
        ? product.brand?.toLowerCase().includes(brand.toLowerCase())
        : true;
      const matchesCategory = category
        ? product.category?.toLowerCase().includes(category.toLowerCase())
        : true;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesRating = product.rating >= rating;

      return matchesBrand && matchesCategory && matchesPrice && matchesRating;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <FilterPanel onFilterChange={handleFilter} />
      <ProductCard products={filteredProducts} />
    </div>
  );
}

export default App;
