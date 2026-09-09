import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Ventures } from "./sections/Ventures";
import { Projects } from "./sections/Projects";
import { Focus } from "./sections/Focus";
import { Lab } from "./sections/Lab";
import { Now } from "./sections/Now";
import { Contact } from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <Focus />
        <Ventures />
        <Projects />
        <Lab />
        <About />
        <Now />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
