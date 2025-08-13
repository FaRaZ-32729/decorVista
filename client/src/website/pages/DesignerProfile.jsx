import React from "react";
import HeroSection from "../components/HeroSection";
import { NavLink } from "react-router-dom";

const DesignerProfile = () => {
  return (
    <>
      <HeroSection title={"Designer Profile"} />
      {/* Designer Profile Section */}
      <section className="designer-profile-section">
        <div className="designer-profile-wrapper">
          <div className="designer-profile-header">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
              alt="Designer Photo"
              className="designer-profile-img"
            />
            <div>
              <h2>Sarah Khan</h2>
              <p>Interior Designer | Modern &amp; Minimalist Styles</p>
            </div>
          </div>
          <div className="designer-profile-content">
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>Work / Portfolio</h3>
                <NavLink to="/designer-edit">
                  <button className="edit-btn">
                    <i className="fa fa-pen" /> Edit
                  </button>
                </NavLink>
              </div>
              <div className="designer-portfolio-grid">
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
                  alt="Project 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
                  alt="Project 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
                  alt="Project 3"
                />
              </div>
            </div>
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>Experience</h3>
                <NavLink to="/designer-edit">
                  <button className="edit-btn">
                    <i className="fa fa-pen" /> Edit
                  </button>
                </NavLink>
              </div>
              <p>
                5+ years in residential and commercial design. Worked on over 50
                successful projects worldwide, specializing in space
                optimization and modern aesthetics.
              </p>
            </div>
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>Available Time Slots</h3>
                <NavLink to="/designer-edit">
                  <button className="edit-btn">
                    <i className="fa fa-pen" /> Edit
                  </button>
                </NavLink>
              </div>
              <ul>
                <li>Mon - Fri: 10:00 AM - 6:00 PM</li>
                <li>Saturday: 11:00 AM - 4:00 PM</li>
              </ul>
            </div>
            <div className="designer-info-card">
              <div className="info-card-header">
              <h3>Consultation</h3>
                <NavLink to="/designer-edit">
                  <button className="edit-btn">
                    <i className="fa fa-pen" /> Edit
                  </button>
                </NavLink>
              </div>
              <p>Online Consultation: Available via Zoom / Google Meet</p>
              <p>In-Person: Available in Lahore &amp; Karachi</p>
            </div>
            <div className="designer-info-card">
              <h3>Customer Reviews</h3>
              <div className="designer-review-box">
                <p>
                  "Sarah completely transformed my living room. Absolutely love
                  the result!" - <strong>Ayesha R.</strong>
                </p>
              </div>
              <div className="designer-review-box">
                <p>
                  "Professional and creative, highly recommend her services." -
                  <strong> Ali M.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignerProfile;
