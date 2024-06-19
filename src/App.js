import React from "react";
import HomePage from "./pages/HomePage";
import "./App.css";
import MobileBlock from "./components/MobileBlock";
import { isMobileOrTablet } from "./utils/utils";

export default function App() {
  return <>{isMobileOrTablet() ? <MobileBlock /> : <HomePage />}</>;
}
