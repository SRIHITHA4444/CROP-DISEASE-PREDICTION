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

  const [currentImage, setCurrentImage] = useState(images[0]);

  // Change image randomly every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images]);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">CropCare</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Contacts</li>
          <li>SignUp/Login</li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Random Slideshow */}
        <div className="slideshow">
          <img src={currentImage} alt="Random" className="slideshow-image" />
        </div>

        {/* Main Page */}
        <div className="main-section">
          <h1>Crop Disease Predictions</h1>
          <p>
            Welcome to CropCare, where we help farmers and agronomists detect
            and prevent crop diseases effectively using AI.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      {/* <footer className="footer">
        &copy; {new Date().getFullYear()} Crop Care. All rights reserved.
      </footer>  */}
    </div>
  );
};

export default Home;

 
