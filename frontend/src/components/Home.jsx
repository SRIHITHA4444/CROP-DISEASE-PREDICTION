import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.styles.css"; 

const Home = () => {
  const images = [
    "frontend/public/3830895.jpg",
    "frontend/public/bg-corn-By-naramit.jpg",
    "frontend/public/istockphoto-806276128-612x612.jpg",
    "frontend/public/jute.jpg",
    "frontend/public/OIP.jpg",
    "frontend/public/person-690245_1920-1920x1277.jpg",
    "frontend/public/What-makes-maize.jpeg",
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
          <h1>Welcome to the Chatbot Application</h1>
          <div className="auth-buttons">
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Chatbot Application. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
