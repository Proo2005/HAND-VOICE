import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../styles/navbar.css";
import logo from "../assets/logo.png"; // 👈 import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Replace icon with image */}
        <img src={logo} alt="Hand Voice Logo" className="logo-img" />
        <span className="logo-text">Hand Voice</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">
          <FaUser className="login-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
