import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Home from "./Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "react-day-picker/dist/style.css";
import InformationSection from "./components/InformationSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
    <InformationSection />
    <Footer />
  </StrictMode>,
);
