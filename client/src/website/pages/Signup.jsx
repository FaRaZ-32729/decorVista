import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signupSchema.validate(formData, { abortEarly: false });

      const res = await axios.post(`${API_URL}/user/`, formData);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message || "Registration failed");
      }
    } catch (error) {
      if (error.inner) {
        // Yup validation errors
        error.inner.forEach((err) => toast.error(err.message));
      } else {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(`${API_URL}/user/`, formData);

  //     if (res.data.success) {
  //       toast.success(res.data.message);
  //       navigate("/login");
  //     } else {
  //       toast.error(res.data.message || "Registration failed");
  //     }
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || "Something went wrong");
  //   }
  // };

  return (
    <div className="login-section">
      <div className="login-left">
        <h3>Already have an account?</h3>
        <p>Log in to access your account and explore our latest products.</p>
        <NavLink to="/login">Login Now</NavLink>
      </div>

      <div className="login-right">
        <h3>Create Your Account</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Choose Role</option>
            <option value="designer">Designer</option>
            <option value="owner">Owner</option>
          </select>

          {/* <label>
            <input type="checkbox" required /> I agree to the terms &amp;
            conditions
          </label> */}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;


const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")
    .required("Password is required"),
  role: Yup.string().required("Please select a role"),
});