import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import PopularPlaces from "./pages/PopularPlaces";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/popular-places" element={<PopularPlaces />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
