import React from "react";

const HeroSection = ({title}) => {
  return (
    <>
      {title && (
        <div className="hero">
          <h2>{title}</h2>
        </div>
      )}
    </>
  );
};

export default HeroSection;
