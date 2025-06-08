import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./global/components/Navbar";
import Sidebar from "./global/components/Sidebar";
import Footer from "./global/components/Footer";

import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/Home/Home";
import Biography from "./pages/Biography/Biography";
import Music from "./pages/Music/Music";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

const App: React.FC = () => {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
