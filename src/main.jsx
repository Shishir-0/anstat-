import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { registerWebMCPTools } from "./utils/webmcp";

// Initialize WebMCP tools for AI browser agents and assistant discovery
registerWebMCPTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
