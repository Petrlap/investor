import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import "./app/index.css";
import "./assets/fonts/fonts.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Root element not found. Ensure there is a <div id='root'></div> in index.html"
  );
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
