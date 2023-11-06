import "./styles.css";

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Error from "./components/Error";
import Cotizaciones from "./components/Cotizaciones";
import Cotizador from "./components/Cotizador";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/cotizaciones" element={<Cotizaciones />} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
