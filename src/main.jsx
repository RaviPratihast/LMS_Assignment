import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { DashboardProvider } from "./context/DashboardContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </Router>
  </StrictMode>
);
