import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Partials/Navbar";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import OpenAccess from "./Pages/OpenAccess";
import Contact from "./Pages/Contact";
import SolarRooftop from "./Pages/SolarRooftop";
import SolarCartop from "./Pages/SolarCartop";
import FloatingSolar from "./Pages/FloatingSolar";
// import OpenAccess from "./pages/OpenAccess";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/open-access" element={<OpenAccess/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/solar-rooftop" element={<SolarRooftop/>} />
        <Route path="/solar-carport" element={<SolarCartop/>} />
        <Route path="/floating-solar" element={<FloatingSolar/>} />
      </Routes>
    </Router>
  );
};

export default App;
