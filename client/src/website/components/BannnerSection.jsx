import React from "react";
import heroImage from "/assets/images/banner.png";

const BannerSection = () => {
  return (
    <section className="banner">
      <div className="banner">
        <div className="banner-content">
          <h1>Cloth & Wood Sofa</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            doloremque iure vel dolore exercitationem explicabo aperiam, et
            veritatis molestiae deserunt!
          </p>
          <button className="buy-now-btn">Buy Now</button>
        </div>
        <div className="banner-img">
          <img src={heroImage} alt="Hero Banner" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
