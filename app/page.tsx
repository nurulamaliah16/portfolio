import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="px-3 sm:px-4">
      <div
        className="relative mx-auto my-6 max-w-[1200px] overflow-clip rounded-[30px] bg-cream pt-4 sm:my-9"
        style={{ boxShadow: "0 40px 80px -30px rgba(31,61,56,.45)" }}
      >
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Research />
        <Achievements />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
