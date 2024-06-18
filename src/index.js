import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      {/* <Route path="/mobile-not-supported" component={MobileNotSupported} /> */}
      <Route path="/" element={<App />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);
