import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carousel />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
