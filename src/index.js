import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from "./pages/Error";
import Security from "./pages/Security";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/security" element={<Security />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);
