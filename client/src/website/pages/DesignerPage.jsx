import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import axios from "axios";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const DesignerPage = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    const fetchDesigners = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/designer/`);
        setDesigners(data);
      } catch (error) {
        console.error("Error fetching designers:", error);
      }
    };
    fetchDesigners();
  }, []);

  return (
    <>
      <HeroSection title={"Designer Page"} />
      <section className="designer-page">
        {designers.map((designer) => (
          <div key={designer._id} className="designer-page-card">
            <div className="profile-header">
              <img
                src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
                alt="Designer Photo"
                className="profile-img"
              />
              <div className="profile-info">
                <h3>{designer.userId?.name || "Designer Name"}</h3>
                <p>
                  {designer.specialization || "Interior Designer"} | {designer.yearsOfExperience || 0}+ Years Experience
                </p>
              </div>
            </div>
            <div className="profile-body">
              <h4>About</h4>
              <p>{designer.about || "No description available."}</p>

              <h4>Portfolio Highlights</h4>
              <div className="designer-portfolio-grid">
                <img
                  src={`${API_URL}${designer.image}`}
                  alt="Designer Photo"

                />
              </div>

              <h4>Available Time Slots</h4>
              {designer.availableTimeSlots && designer.availableTimeSlots.length > 0 ? (
                designer.availableTimeSlots.map((slot) => (
                  <p key={slot.date}>
                    {slot.date}: {slot.times.join(", ")}
                  </p>
                ))
              ) : (
                <p>No time slots available.</p>
              )}

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
        ))}
      </section>
    </>
  );
};

export default DesignerPage;
