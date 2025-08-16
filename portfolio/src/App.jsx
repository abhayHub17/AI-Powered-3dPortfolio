import AbilitiesCard from "./sections/AbilitiesCard";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import GPTBar from "./sections/GPTBar";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GPTBar />
      <AbilitiesCard />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
