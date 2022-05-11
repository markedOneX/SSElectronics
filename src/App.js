import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
function App() {
  return (
    <div className="App">
      <Hero />
      <div className="container">
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
