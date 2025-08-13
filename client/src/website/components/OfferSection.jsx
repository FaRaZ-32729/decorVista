import React from "react";
import offerImg from "/assets/images/offer_img.png";

const OfferSection = () => {
  return (
    <section className="offer">
      <div className="offer-img">
        <img src={offerImg} alt="" />
      </div>
      <div className="offer-content">
        <h3>Weekly Sale on 60% Off All Products</h3>
        <table>
          <thead>
            <tr>
              <th>Days</th>
              <th>Hours</th>
              <th>Minutes</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>18</td>
              <td>58</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
        <div className="offer-input">
          <input type="email" placeholder="Enter Email Address" />
          <button>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
