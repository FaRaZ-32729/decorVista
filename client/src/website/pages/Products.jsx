import React, { useContext, useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import { ProductContext } from "../../contextApi/ProductContext";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const Products = () => {
  const { products, loading } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter + Sort Products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption === "name") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "lowToHigh") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    return filtered;
  }, [products, searchTerm, sortOption]);

  if (loading) {
    return (
      <>
        <HeroSection title={"Products Page"} />
        <p style={{ textAlign: "center", padding: "20px" }}>Loading products...</p>
      </>
    );
  }

  return (
    <>
      <HeroSection title={"Products Page"} />

      <div>
        {/* {filters} */}
        <section className="product-controls">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <span className="material-symbols-rounded">search</span>
          </button>
          <div className="filter-dropdown">
            <button className="filter-btn">
              <span className="material-symbols-rounded">filter_list</span> Filter
            </button>
            <div className="filter-options">
              <button onClick={() => setSortOption("name")}>Sort by Name</button>
              <button onClick={() => setSortOption("lowToHigh")}>Price: Low to High</button>
              <button onClick={() => setSortOption("highToLow")}>Price: High to Low</button>
              <button onClick={() => setSortOption("newest")}>Newest First</button>
              <button onClick={() => setSortOption("")}>Clear Filter</button>
            </div>
          </div>
        </section>

        {/* Products  */}
        <section className="products">
          <div className="products-row">
            {filteredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="products-row">
            {filteredProducts.slice(4, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

// Product Card 
const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3">
      <div className="single_product_item">
        <img
          src={`${API_URL}${product.image}`}
          width="100%"
          alt={product.name}
        />
        <div className="single_product_text">
          <h4>{product.name}</h4>
          <h3>${product.price}</h3>
          <a href="#" className="add_cart">
            + add to cart
            <i className="ti-heart" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
