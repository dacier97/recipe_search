import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../App";
import Login from "../views/Login";

export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/search" element={<App/>} />
      </Routes>
    </Router>
  );
}
