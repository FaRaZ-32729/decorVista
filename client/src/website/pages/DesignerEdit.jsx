import React, { useState, useEffect, useContext } from "react";
import HeroSection from "../components/HeroSection";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../contextApi/AuthContext";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const DesignerEdit = () => {
  const { user } = useContext(AuthContext);
  const [designerId, setDesignerId] = useState(null);
  const [about, setAbout] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [workImage, setWorkImage] = useState(null);
  const [workDesc, setWorkDesc] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [slotDate, setSlotDate] = useState("");
  const [slotTime, setSlotTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Load existing designer profile
  useEffect(() => {
    const fetchDesignerProfile = async () => {
      if (!user?._id) return;
      try {
        const { data } = await axios.get(`${API_URL}/designer/${user._id}`);
        if (data) {
          setDesignerId(data._id);
          setAbout(data.about || "");
          setYearsOfExperience(data.yearsOfExperience || "");
          setSpecialization(data.specialization || "");
          setPhoneNumber(data.phoneNumber || "");
          setAvailableTimeSlots(data.availableTimeSlots || []);
        }
      } catch (error) {
        console.log("No existing designer profile found");
      }
    };
    fetchDesignerProfile();
  }, [user]);

  // Add a time slot
  const handleAddSlot = () => {
    if (!slotDate || !slotTime) return toast.error("Select date & time");
    const existing = availableTimeSlots.find(s => s.date === slotDate);
    let updatedSlots;

    if (existing) {
      if (existing.times.includes(slotTime)) return toast.error("Time already exists");
      updatedSlots = availableTimeSlots.map(s =>
        s.date === slotDate ? { ...s, times: [...s.times, slotTime] } : s
      );
    } else {
      updatedSlots = [...availableTimeSlots, { date: slotDate, times: [slotTime] }];
    }

    setAvailableTimeSlots(updatedSlots);
    setSlotDate("");
    setSlotTime("");
  };

  // Remove a time slot
  const handleRemoveSlot = (date, time) => {
    const updated = availableTimeSlots
      .map(s => s.date === date ? { ...s, times: s.times.filter(t => t !== time) } : s)
      .filter(s => s.times.length > 0);
    setAvailableTimeSlots(updated);
  };

  // Save profile
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!user?._id) return toast.error("User not authenticated");

    const formData = new FormData();
    formData.append("specialization", specialization);
    formData.append("about", about);
    formData.append("yearsOfExperience", yearsOfExperience);
    formData.append("phoneNumber", phoneNumber);
    formData.append("availableTimeSlots", JSON.stringify(availableTimeSlots));
    if (workImage) formData.append("image", workImage);
    if (workDesc) formData.append("workDesc", workDesc);

    try {
      let response;
      if (designerId) {
        response = await axios.put(`${API_URL}/designer`, formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } });
      } else {
        response = await axios.post(`${API_URL}/designer`, formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } });
        setDesignerId(response.data?.designer?._id);
      }
      toast.success(response.data.message || "Profile saved successfully!");
      setWorkImage(null);
      setWorkDesc("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to save profile");
    }
  };

  return (
    <>
      <HeroSection title={designerId ? "Update Designer Profile" : "Create Designer Profile"} />
      <section className="designer-edit-section">
        <form className="designer-edit-form" onSubmit={handleSaveProfile}>

          {/* Experience */}
          <div className="designer-edit-container">
            <h3>Experience</h3>
            <textarea placeholder="About your experience" value={about} onChange={e => setAbout(e.target.value)} />
            <input type="number" placeholder="Years of Experience" value={yearsOfExperience} onChange={e => setYearsOfExperience(e.target.value)} />
            <input type="text" placeholder="Specialization" value={specialization} onChange={e => setSpecialization(e.target.value)} />
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </div>

          {/* Portfolio */}
          <div className="designer-edit-container">
            <h3>Portfolio</h3>
            <label>Upload Image</label>
            <input type="file" accept="image/*" onChange={e => setWorkImage(e.target.files[0])} />
            <textarea placeholder="Describe your work" value={workDesc} onChange={e => setWorkDesc(e.target.value)} />
          </div>

          {/* Time Slots */}
          <div className="designer-edit-container">
            <h3>Available Time Slots</h3>
            <div className="slot-inputs">
              <input type="date" value={slotDate} onChange={e => setSlotDate(e.target.value)} />
              <input type="time" value={slotTime} onChange={e => setSlotTime(e.target.value)} />
              <button type="button" onClick={handleAddSlot}>Add Slot</button>
            </div>
            <ul>
              {availableTimeSlots.map(slot => (
                <li key={slot.date}>
                  <strong>{slot.date}</strong>: {slot.times.map(time => (
                    <span key={time}>
                      {time} <button type="button" onClick={() => handleRemoveSlot(slot.date, time)}>✕</button>
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          <button type="submit">{designerId ? "Update Profile" : "Create Profile"}</button>
        </form>
      </section>
    </>
  );
};

export default DesignerEdit;
