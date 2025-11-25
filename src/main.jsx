import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kambing from "./pages/Kambing";
import Aqiqah from "./pages/Aqiqah";
import Qurban from "./pages/Qurban";
import Contact from "./pages/Contact";
import AnakanKambing from "./pages/Peranakan";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/kambing" element={<Kambing />} />
        <Route path="/aqiqah" element={<Aqiqah />} />
        <Route path="/qurban" element={<Qurban />} />
        <Route path="/peranakan" element={<AnakanKambing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
