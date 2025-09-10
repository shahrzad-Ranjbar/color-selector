import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ColorSelector from "./Componenets/ColorSelector.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorSelector />
  </StrictMode>
);
