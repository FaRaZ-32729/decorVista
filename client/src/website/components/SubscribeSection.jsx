import React from "react";

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-content">
          <h4>JOIN OUR NEWSLETTER</h4>
          <h3>
            Subscribe to get Updated <br />
            with new offers
          </h3>
        </div>
        <div className="offer-input">
          <input type="email" placeholder="Enter Email Address" />
          <button type="submit">SUBSCRIBE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
