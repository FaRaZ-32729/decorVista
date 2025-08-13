import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contextApi/AuthContext";

const Profile = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <section className="profile-container">
        <p>Loading profile...</p>
      </section>
    );
  }

  return (
    <>
      <section className="profile-container">
        <div className="profile-card">
          <FaUserCircle className="profile-img" />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p className="role">{user.role}</p>
          </div>
        </div>
        {/* Personal Information */}
        <div className="info-card">
          <div className="info-header">
            <h3>Personal Information</h3>
            <NavLink to="/designer-edit">
              <button className="edit-btn">
                <i className="fa fa-pen" /> Edit
              </button>
            </NavLink>
          </div>
          <div className="info-grid">
            <div>
              <label>Full Name</label>
              <p>{user.name}</p>
            </div>
            <div>
              <label>Email Address</label>
              <p>{user.email}</p>
            </div>
            <div>
              <label>User Role</label>
              <p>{user.role}</p>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="info-card">
          <div className="info-header">
            <h3>Address</h3>
            <NavLink to="/designer-edit">
              <button className="edit-btn">
                <i className="fa fa-pen" /> Edit
              </button>
            </NavLink>
          </div>
          <div className="info-grid">
            <div>
              <label>Country</label>
              <p>United Kingdom</p>
            </div>
            <div>
              <label>City</label>
              <p>Leeds, East London</p>
            </div>
            <div>
              <label>Postal Code</label>
              <p>ERT 1254</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
