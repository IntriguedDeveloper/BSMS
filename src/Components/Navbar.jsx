import React, { useEffect, useState } from "react";
import "./Navbar.css";
import accountIcon from "../assets/account.png";
import hamMenu from "../assets/menu.png";

export default function NavBar() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav">
      <div className="menuLogoWrapper">
        <img
          src={hamMenu}
          className="hamMenu"
          onClick={toggleMenu}
          alt="Hamburger Menu"
        />
        <img
          src="https://play-lh.googleusercontent.com/S5pnsBPGfDMzaYX07wfN5-rwt98SDup2neW16djYn2lC3rDWG5MlLGXxtaRhXlnxXoE9"
          className="logo"
          alt="Logo"
        />
      </div>
      <div className={`sideNav ${isMenuOpen ? "open" : ""}`}>
        <button className="closeButton" onClick={closeMenu}>
          &times;
        </button>
        <ul className="menuList">
          <li>Attendance System</li>
          <li>View Students</li>
          <li>Enrol New Student</li>
          <li>Delete Existing Students</li>
        </ul>
      </div>
      <h2 className="title">
        {viewportWidth <= 600 ? "BSMS" : "Biometric Student Management System"}
      </h2>
      <img src={accountIcon} className="accountIcon" alt="Account Icon" />
    </div>
  );
}
