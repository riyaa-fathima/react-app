import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User/User.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Content from "./components/Content/content.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/user" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      
    </BrowserRouter>
    
  </StrictMode>
);