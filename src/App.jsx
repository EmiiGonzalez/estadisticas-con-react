import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactDOM } from "react";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Muestra la barra de navegación en todas las rutas */}
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
