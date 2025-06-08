
import React from "react";
import "../styles/Single.css";

const Single: React.FC = () => {
    return (
        <section className="single">
             <div className="image-container">
            <img src="/images/single.jpg" alt="image of jayplay" />
            </div>
            <h2> LATEST SINGLE </h2>
            <h2> PLAY CITY </h2>
        </section>
    );
};

export default Single;