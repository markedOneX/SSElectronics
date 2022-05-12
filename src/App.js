import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
