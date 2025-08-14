import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../contextApi/AuthContext";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const Login = () => {
  const { fetchProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post(`${API_URL}/auth/`, formData, {
        withCredentials: true,
      });
      console.log("response is", res)

      if (res.data.success) {
        toast.success(res.data.message);

        await fetchProfile();
        const role = res.data.existingUser.role;

        if (role === "admin") {
          navigate("/admin");
        } else if (role === "owner") {
          navigate("/");
        } else if (role === "designer") {
          navigate("/designer-profile");
        } else {
          navigate("/");
        }

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };


  return (
    <div className="login-section">
      <div className="login-left">
        <h3>New to our Shop?</h3>
        <p>Join us today and explore our amazing products.</p>
        <NavLink to="/signup">Create an Account</NavLink>
        <div>
          <p>emil: admin@gmail.com | pass : @Admin12</p>
          <p>emil: designer@gmail.com | pass : @Designer12</p>
          <p>emil: owner@gmail.com | pass : @Owner12</p>
        </div>

      </div>

      <div className="login-right">
        <h3>Welcome Back! Please Sign in</h3>
        <form className="login-form" onSubmit={handleSubmit}>
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

          <button type="submit">Log in</button>
          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
