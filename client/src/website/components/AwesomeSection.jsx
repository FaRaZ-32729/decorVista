import React, { useContext } from "react";
import { ProductContext } from "../../contextApi/ProductContext";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const AwesomeSection = ({ title }) => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <section className="awesome">
        <h2>{title}</h2>
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="awesome">
      <h2>{title}</h2>
      <div className="products-row">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <div className="products-row">
        {products.slice(4, 8).map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="col-lg-3">
      <div className="single_product_item">
        <img src={`${API_URL}${image}`} width="100%" alt={name} />
        <div className="single_product_text">
          <h4>{name}</h4>
          <h3>{price}</h3>
          <NavLink to="/products" className="add_cart">
            see more
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AwesomeSection;
