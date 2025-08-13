import React from "react";
import HeroSection from "../components/HeroSection";

const Products = () => {
  return (
    <>
      <HeroSection title={"Products Page"} />

      <div>
        {/* Products Control (SEARCH) */}
        <section className="product-controls">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <button className="search-btn">
            <span className="material-symbols-rounded">search</span>
          </button>
          <div className="filter-dropdown">
            <button className="filter-btn">
              <span className="material-symbols-rounded">filter_list</span>{" "}
              Filter
            </button>
            <div className="filter-options">
              <a href="#">Sort by Name</a>
              <a href="#">Price: Low to High</a>
              <a href="#">Price: High to Low</a>
              <a href="#">Newest First</a>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="products-row">
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_1.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_2.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_3.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_4.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="products-row">
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_1.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_2.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_3.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single_product_item">
                <img src="assets/images/product_4.png" width="100%" alt />
                <div className="single_product_text">
                  <h4>Quartz Belt Watch</h4>
                  <h3>$150.00</h3>
                  <a href className="add_cart">
                    + add to cart
                    <i className="ti-heart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
