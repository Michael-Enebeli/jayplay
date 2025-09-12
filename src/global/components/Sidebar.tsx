import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    sidebarRef.current?.classList.remove("open");
    document.getElementById("hamburger")?.classList.remove("open"); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside id="sidebar" ref={sidebarRef}>
      <button onClick={handleClose}> &times; </button>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/biography" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            Biography
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleClose} className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="social-icons">
        <li>
          <a href="https://www.instagram.com/jayplay_sov?igsh=YzljYTk1ODg3Zg==" target="_blank"><i className="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href="https://x.com/CAPITALSOV?t=n-CfvUpEHzSog6BaMlvfBg&s=09" target="_blank"><i className="fab fa-x-twitter"></i></a>
        </li>
        <li>
          <a href="https://www.facebook.com/share/16zTHAKPqq" target="_blank"><i className="fab fa-facebook"></i></a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
