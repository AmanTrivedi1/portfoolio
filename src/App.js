
import "./App.css";
import Header from "./componants/Header/Header";
import Home from "./componants/Home/Home";
import About from "./componants/about/About";
import Service from "./componants/services/Service";
import Skills from "./componants/skills/Skills";
import Qualification from "./componants/qualification/Qualification";
import Contact from "./componants/contact/Contact";
import Footer from "./componants/Footer/Footer";
import ScrollUp from "./componants/Scrolltop/ScrollUp";

function App() {
  return (
    <>
   
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
