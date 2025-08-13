import React from "react";
import HeroSection from "../components/HeroSection";

const DesignerEdit = () => {
  return (
    <>
    <HeroSection title={'Designer Edit Page'} />
      {/* Designer Profile Edit Page */}
      <section className="designer-edit-section">
        <h2>Edit Your Profile</h2>
        {/* Experience */}
        <div className="designer-edit-container">
          <h3>Experience</h3>
          <p>Share your experience and background</p>
          <form className="experience-form">
            <textarea
              placeholder="Write about your experience..."
              defaultValue={""}
            />
            <button type="submit">Save Experience</button>
          </form>
        </div>
        {/* Work Upload */}
        <div className="designer-edit-container">
          <h3>Portfolio</h3>
          <p>Add your best work (images + description)</p>
          <form className="portfolio-form">
            <label htmlFor="work-image">Upload Image</label>
            <input type="file" id="work-image" accept="image/*" />
            <label htmlFor="work-desc">Description</label>
            <textarea
              id="work-desc"
              placeholder="Describe your work..."
              defaultValue={""}
            />
            <button type="submit">Add to Portfolio</button>
          </form>
        </div>
        {/* Time Slots */}
        <div className="designer-edit-container">
          <h3>Available Time Slots</h3>
          <p>Set your available timings</p>
          <form className="time-slot-form">
            <label htmlFor="slot-date">Date</label>
            <input type="date" id="slot-date" />
            <label htmlFor="slot-time">Time</label>
            <input type="time" id="slot-time" />
            <button type="submit">Add Time Slot</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default DesignerEdit;
