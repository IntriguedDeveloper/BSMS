import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import accountIcon from "../assets/account.png";
import hamMenu from "../assets/menu.png";
import logoutIcon from "../assets/logout.png";
import { firebaseConfig } from "../firebase.js";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
import { signOut, getAuth } from "firebase/auth";
const auth = getAuth(app);
export default function NavBar() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
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

  const redirectToPage = (pagePath) => {
    navigate(pagePath);
  };
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <>
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
            className="nav-logo"
            alt="Logo"
          />
        </div>
        <div className={`sideNav ${isMenuOpen ? "open" : ""}`}>
          <button className="closeButton" onClick={closeMenu}>
            &times;
          </button>
          <ul className="menuList">
            <li
              onClick={() => {
                redirectToPage("/attendance");
              }}
            >
              Attendance System
            </li>
            <li
              onClick={() => {
                redirectToPage("/view-students");
              }}
            >
              View Students
            </li>
            <li
              onClick={() => {
                redirectToPage("/enrol-student");
              }}
            >
              Enrol New Student
            </li>
            <li
              onClick={() => {
                redirectToPage("/delete-student");
              }}
            >
              Delete Existing Students
            </li>
          </ul>
          <img
            className="logoutButton"
            src={logoutIcon}
            onClick={handleLogout}
          ></img>
        </div>
        <h2 className="title">
          {viewportWidth <= 600
            ? "BSMS"
            : "Biometric Student Management System"}
        </h2>
        <img src={accountIcon} className="accountIcon" alt="Account Icon" />
      </div>
    </>
  );
}
