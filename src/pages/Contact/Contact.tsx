import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="logo"> CONTACT US</h1>
      <div className="image-container">
        <img src="/images/contact.jpg" alt="image of jayplay" />
      </div>
      <ul className="social-icons">
        <li><a href="#"><i className="fab fa-instagram"></i> Jayplay_sov </a></li>
        <li><a href="#"><i className="fab fa-x-twitter"></i> @CAPITALSOV </a></li>
        <li><a href="#"><i className="fab fa-facebook"></i> Jay Play Wagwan </a></li>
      </ul>
    </div>
  );
};

export default Contact;
