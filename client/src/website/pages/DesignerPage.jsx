import React from "react";
import HeroSection from "../components/HeroSection";

const DesignerPage = () => {
  return (
    <>
    <HeroSection title={'Designer Page'} />
      {/* Designer Card */}
      <section className="designer-page">
        <div className="designer-page-card">
          <div className="profile-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
              alt="Designer Photo"
              className="profile-img"
            />
            <div className="profile-info">
              <h3>Sarah Johnson</h3>
              <p>Interior Designer | 8+ Years Experience</p>
            </div>
          </div>
          <div className="profile-body">
            <h4>About</h4>
            <p>
              Specializes in modern, minimalistic interior designs with a focus
              on functionality and aesthetics. Worked on 120+ projects globally.
            </p>
            <h4>Portfolio Highlights</h4>
            <ul>
              <li>Luxury Apartment - New York</li>
              <li>Coastal Villa - Miami</li>
              <li>Office Space - San Francisco</li>
            </ul>
            <h4>Available Time Slots</h4>
            <p>Mon - Fri: 10:00 AM - 6:00 PM</p>
            <p>Sat: 11:00 AM - 4:00 PM</p>
            <h4>Consultation Fee</h4>
            <p>$150 per hour</p>
            <h4>Reviews</h4>
            <div className="review">
              <p>
                <strong>Emily R.</strong> ⭐⭐⭐⭐⭐ - "Absolutely loved the
                work! Sarah transformed my space beautifully."
              </p>
            </div>
            <div className="review">
              <p>
                <strong>Michael B.</strong> ⭐⭐⭐⭐ - "Great attention to
                detail and professionalism."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignerPage;
