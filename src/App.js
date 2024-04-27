import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/index';

import Quote from "./pages/Quote/index";
import HowItWork from "./pages/How-it-work";
import Testimonials from "./pages/Testimonials/index";
import TheBlog from "./pages/The-Blog/index";
import About from "./pages/About-us/index"
import Contact from "./pages/Contact/index"
import Privacypolicy from "./pages/Privacy-policy/index"
import Termsandconditions from "./pages/Terms-and-conditions/index"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quote" element={< Quote />} />
        <Route path="/how-it-work" element={< HowItWork />} />
        <Route path="/testimonials" element={< Testimonials />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/blog" element={< TheBlog />} />
        <Route path="/privacy-policy" element={< Privacypolicy />} />
        <Route path="/terms-and-conditions" element={< Termsandconditions />} />
      </Routes>
    </Router>
  );
}

export default App;
