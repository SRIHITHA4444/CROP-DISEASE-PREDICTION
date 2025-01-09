import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "C:/Users/SRIHITHA/Documents/GitHub/CROP-DISEASE-PREDICTION/frontend/src/utils/api.utils.js";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      // Redirect to Streamlit chatbot page
      window.location.href = "http://localhost:8501"; 
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
