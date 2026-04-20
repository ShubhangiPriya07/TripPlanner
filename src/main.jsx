import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { TripProvider } from "./context/TripContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TripProvider>
      <App />
    </TripProvider>
  </AuthProvider>
);