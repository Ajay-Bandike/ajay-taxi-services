import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Fleet from "./pages/Fleet";
import TourPackages from "./pages/TourPackages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/tours" element={<TourPackages />} />
      </Routes>

      <WhatsAppButton />
    </>
  );
}

export default App;