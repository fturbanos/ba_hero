import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.less";
import Home from "./components/pages/Home";
import Careers from "./components/pages/Careers";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ba_hero" element={<Home/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/about-us" element={<About/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
