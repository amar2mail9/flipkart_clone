import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import{ Home }from "./components/page/Home/Home";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
