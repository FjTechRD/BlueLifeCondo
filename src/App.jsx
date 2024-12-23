import { Route, Routes, useLocation } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Apartments from "./pages/Aparments";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  const location = useLocation(); // Hook para obtener la ruta actual
  const isComingSoon = location.pathname === "/"; // Condición para ocultar Header y Footer

  return (
    <>
      {/* Renderizar Header solo si no estamos en la ruta "/" */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Renderizar Footer solo si no estamos en la ruta "/" */}
      <Footer />
    </>
  );
}

export default App;
