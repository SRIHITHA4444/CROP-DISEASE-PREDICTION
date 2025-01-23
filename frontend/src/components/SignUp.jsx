import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "C:/Users/SRIHITHA/Documents/GitHub/CROP-DISEASE-PREDICTION/frontend/src/utils/api.utils.js";

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/signup", formData);
      alert("Signup successful!");
      navigate("/login");
      // Redirect to Streamlit chatbot page
      window.location.href = "http://localhost:8501";
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Signup</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignUp;
