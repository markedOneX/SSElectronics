import Hero from "./Components/Hero";
import { Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
