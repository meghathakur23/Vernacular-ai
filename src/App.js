import "./App.css";
import Header from "../src/Layout/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Galary from "./components/Galary";
import Testomonials from "./components/Testomonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <section id="Landing">
        <Landing />
      </section>
      <section id="Feature">
        <Features />
      </section>
      <section id="Gallery">
        {" "}
        <Galary />
        <Testomonials />
      </section>
      <br />
      <br />
      <section id="Pricing">
        {" "}
        <Pricing />
      </section>
      <section id="FAQ"></section>
      <FAQ />
      <section id="Contact">      <Contact />
</section>
      <Footer />
    </div>
  );
}

export default App;
