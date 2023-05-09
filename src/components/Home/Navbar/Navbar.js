import React from "react";
import { FaCubes, FaIndustry } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>LOGO</h3>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">
              <FaCubes className="icon" /> Solutions
            </a>
          </li>
          <li>
            <a href="#">
              <FaIndustry className="icon" /> Industries
            </a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="buttons">
          <button className="sign-in-btn">Sign In</button>
          <button className="register-btn">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
