import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar: React.FC = () => {
    const hamburgerRef = useRef<HTMLDivElement | null>(null);

    const toggleHamburger = () => {
        hamburgerRef.current?.classList.toggle("open");
        document.getElementById("sidebar")?.classList.toggle("open");
    };
    

    return (
        <nav>
            <div className="nav-container">
                <h1 className="logo">JAY PLAY </h1>

                <div
                    className="hamburger"
                    id="hamburger"
                    ref={hamburgerRef}
                    onClick={toggleHamburger}
                >
                    <div className="line top"></div>
                    <div className="line middle"></div>
                    <div className="line bottom"></div>
                </div>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/biography" className={({ isActive }) => isActive ? "active" : ""}>
                            Biography
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" className={({ isActive }) => isActive ? "active" : ""}>
                            Music
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
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
            </div>
        </nav>
    );
};

export default Navbar;
