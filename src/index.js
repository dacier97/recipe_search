import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Rutas from "./routes";
import AuthProvider from "./context/auth/provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Rutas />
    </AuthProvider>
  </React.StrictMode>
);
