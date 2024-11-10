import About from "./Compounds/About";
import Clients from "./Compounds/Clients";
import Features from "./Compounds/Features";
import Footer from "./Compounds/Footer";
import Hero from "./Compounds/Hero";
import Navbar from "./Compounds/Navbar";
import Services from "./Compounds/Services";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />  
      <Services />
      <Clients />
      <Footer />

    </div>
  );
}

export default App;
