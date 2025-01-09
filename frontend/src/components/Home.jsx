import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.styles.css"; 

const Home = () => {
  const images = [
    "/3830895.jpg",
    "/bg-corn-By-naramit.jpg",
    "/istockphoto-806276128-612x612.jpg",
    "/jute.jpg",
    "/OIP.jpg",
    "/person-690245_1920-1920x1277.jpg",
    "/What-makes-maize.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      {/* Navbar with Horizontal Bar */}
      <div className="horizontal-bar">
        <Link to="/signup" className="auth-link">Signup</Link>
        <Link to="/login" className="auth-link">Login</Link>
      </div>

      {/* Slideshow */}
      <div className="slideshow-container">
        <img
          src={images[currentImageIndex]}
          alt="slideshow"
          className="slideshow-image"
        />
      </div>

      {/* Right Container with Auth Section */}
      <div className="right-container">
        <div className="auth-container">
          <h1>Welcome to the Crop Care 🌾</h1>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Crop Care. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
