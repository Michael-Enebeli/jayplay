import React, { useEffect, useRef } from "react";
import sponsorTexts from "../../../utils/sponsorTexts";
import "../styles/Artist.css";

const Artist: React.FC = () => {
  const sliderTrackRef = useRef<HTMLDivElement | null>(null);
  const speedRef = useRef(1);
  const offsetRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const itemWidthRef = useRef(0);

  const repeatedTexts = [...sponsorTexts, ...sponsorTexts]; 

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;

    const setSpeed = () => {
      if (window.innerWidth >= 1024) {
        speedRef.current = 2;
      } else if (window.innerWidth >= 600) {
        speedRef.current = 2;
      } else {
        speedRef.current = 1.7;
      }
    };

    const updateItemWidth = () => {
      const firstItem = sliderTrack?.children[0] as HTMLSpanElement;
      if (firstItem) {
        itemWidthRef.current = firstItem.offsetWidth;
      }
    };

    const animate = () => {
      if (sliderTrack) {
        offsetRef.current += speedRef.current;

        // Move the slider
        sliderTrack.style.transform = `translateX(-${offsetRef.current}px)`;

        // If the first set of items has completely moved out of view, jump it to the end
        const resetThreshold = itemWidthRef.current * sponsorTexts.length;
        if (offsetRef.current >= resetThreshold) {
          offsetRef.current = 0;
          sliderTrack.style.transition = "none"; // Disable transition for instant reset
          sliderTrack.style.transform = `translateX(-${offsetRef.current}px)`;
          // Allow the next frame to enable the transition again
          setTimeout(() => {
            sliderTrack.style.transition = "transform 0.1s ease-in-out";
          }, 0);
        }

        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleResize = () => {
      setSpeed();
      updateItemWidth();
    };

    setSpeed();
    updateItemWidth();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderTrackRef}>
        {repeatedTexts.map((text, index) => (
          <span className="slider-text" key={index}>{text}</span>
        ))}
      </div>
      <div className="static-icons">
        <div className="icon-item">
          <i className="fab fa-apple"></i>
          <span>iTunes</span>
        </div>
        <div className="icon-item">
          <i className="fab fa-spotify"></i>
          <span>Spotify</span>
        </div>
        <div className="icon-item">
          <i className="fab fa-youtube"></i>
          <span>YouTube</span>
        </div>
      </div>
    </div>
  );
};

export default Artist;
