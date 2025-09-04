import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Ensure these file names match your folder structure
import Navbar from "./components/navbar";
import LandingPage from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
