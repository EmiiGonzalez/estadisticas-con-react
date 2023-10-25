import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from "./components/Home.jsx";
import { Bienvenida } from "./components/Bienvenida.jsx";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const URI = "http://proyecto-practicas.ddns.net:4000/api/estadisticas/lastUpdate";

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Bienvenida />} />
      <Route path="/estadisticas" element={<Home URI={URI} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
