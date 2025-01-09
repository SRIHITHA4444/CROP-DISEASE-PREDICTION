import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to the Chatbot Application</h1>
      <div>
        <Link to="/signup">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Signup</button>
        </Link>
        <Link to="/login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
