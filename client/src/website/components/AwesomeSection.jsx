import React from "react";
import products from "../../data/prodcuts";

const AwesomeSection = ({ title }) => {
  return (
    <section className="awesome">
      <h2>{title}</h2>
      <div className="products-row">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <div className="products-row">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={index + 4} {...product} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ img, title, price }) => {
  return (
    <div className="col-lg-3">
      <div className="single_product_item">
        <img src={img} width="100%" alt="" />
        <div className="single_product_text">
          <h4>{title}</h4>
          <h3>{price}</h3>
          <a href="" className="add_cart">
            + add to cart<i className="ti-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwesomeSection;
