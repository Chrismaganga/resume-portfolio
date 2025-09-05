import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
