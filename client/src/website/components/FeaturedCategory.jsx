import React from "react";
import img1 from "/assets/images/feature_1.png";
import img2 from "/assets/images/feature_2.png";
import img3 from "/assets/images/feature_3.png";
import img4 from "/assets/images/feature_4.png";

const FeaturedCategory = () => {
  return (
    <section className="category">
      <h2>Featured Category</h2>
      <div className="first-row">
        <div className="card col-8">
          <div className="card-content">
            <p className="quality">Premium Quality</p>
            <h2>Latest foam Sofa</h2>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="card col-4">
          <div className="card-content">
            <p className="quality">Premium Quality</p>
            <h2>Latest foam Sofa</h2>
          </div>
          <div className="card-img">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="card col-4">
          <div className="card-content">
            <p className="quality">Premium Quality</p>
            <h2>Latest foam Sofa</h2>
          </div>
          <img src={img3} alt="" />
        </div>
        <div className="card col-8">
          <div className="card-content">
            <p className="quality">Premium Quality</p>
            <h2>Latest foam Sofa</h2>
          </div>
          <div className="card-img">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategory;
