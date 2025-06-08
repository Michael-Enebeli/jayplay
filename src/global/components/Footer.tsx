import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <h2 className="logo">JAY PLAY</h2>

                <ul className="footer-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/biography" className={({ isActive }) => (isActive ? "active" : "")}>
                            Biography
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" className={({ isActive }) => (isActive ? "active" : "")}>
                            Music
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
