
import React from "react";
import { Routes, Route } from "react-router-dom";

function Landing() {
  return <h2>Landing Page</h2>;
}

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}

export default Router;
