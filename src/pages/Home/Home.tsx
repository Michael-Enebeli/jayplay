import React from "react";
import Header from "./components/Header";
import Artist from "./components/Artist";
import About from "./components/About";
import MusicSection from "./components/MusicSection";
import Single from "./components/Single";

const Home: React.FC = () => {
  return (
    <div> 
        <Header />
        <Artist />
        <About />
        <MusicSection />
        <Single />
    </div>
  );
};

export default Home;
