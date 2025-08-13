import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <>
      <HeroSection title={"About Page"} />
      {/* About Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <img src="assets/images/banner.png" alt="About Decor Vista" />
          </div>
          <div className="about-content">
            <h2>Welcome to Decor Vista</h2>
            <p>
              At Decor Vista, we believe your home should be a reflection of
              your personality. From modern minimalism to cozy traditional
              designs, we bring you the best home décor ideas and products to
              transform your living space into something truly special.
            </p>
            <p>
              Our mission is to inspire and help you create interiors that are
              both beautiful and functional. Every product we offer is carefully
              selected for quality and style.
            </p>
            <a href="./products.html" className="about-btn">
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
