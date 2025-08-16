import React, { useEffect, useState, useContext } from "react";
import HeroSection from "../components/HeroSection";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contextApi/AuthContext";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const DesignerProfile = () => {
  const { user } = useContext(AuthContext);
  const [designer, setDesigner] = useState(null);

  useEffect(() => {
    const fetchDesigner = async () => {
      if (!user?._id) return;

      try {
        const { data } = await axios.get(`${API_URL}/designer/${user._id}`);
        setDesigner(data);
      } catch (error) {
        console.error("Error fetching designer profile:", error);
      }
    };

    fetchDesigner();
  }, [user]);

  if (!designer) {
    return (
      <>
        <HeroSection title={"Designer Profile"} />
        <p style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
          <NavLink to="/designer-edit">
            <button className="edit-btn">
              <i className="fa fa-pen" /> Create Profile
            </button>
          </NavLink>

        </p>
      </>
    );
  }

  return (
    <>
      <HeroSection title={"Designer Profile"} />
      {/* Designer Profile Section */}
      <section className="designer-profile-section">
        <div className="designer-profile-wrapper">
          <div className="designer-profile-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s" alt="Designer Photo" className="designer-profile-img" />
            <div>
              <h2>{designer.userId?.name}</h2>
              <p>{designer.specialization}</p>
              <p>
                Years of Experience:{" "}
                {designer.yearsOfExperience}
              </p>
              <NavLink to="/designer-edit">
                <button className="edit-btn">
                  <i className="fa fa-pen" /> {user._id ? "Update Profile" : "Create Profile"}
                </button>
              </NavLink>
            </div>
          </div>

          <div className="designer-profile-content">
            {/* Portfolio */}
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>Work / Portfolio</h3>
              </div>
              <div className="designer-portfolio-grid">
                {designer.image ? (
                  <img src={`${API_URL}${designer.image}`} alt="Portfolio" />
                ) : (
                  <p>No portfolio uploaded yet.</p>
                )}
              </div>
            </div>

            {/* Experience */}
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>About</h3>
              </div>
              <p>{designer.about}</p>
              <p>
                <strong>Years of Experience:</strong>{" "}
                {designer.yearsOfExperience}
              </p>
            </div>

            {/* Time Slots */}
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>Available Time Slots</h3>
              </div>
              <ul>
                {designer.availableTimeSlots?.map((slot) => (
                  <li key={slot._id}>
                    {slot.date}: {slot.times.join(", ")}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="designer-info-card">
              <div className="info-card-header">
                <h3>Contact</h3>
              </div>
              <p>Phone: {designer.phoneNumber}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignerProfile;
