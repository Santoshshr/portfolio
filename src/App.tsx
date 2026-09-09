import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Ventures } from "./sections/Ventures";
import { Projects } from "./sections/Projects";
import { Vision } from "./sections/Vision";
import { Focus } from "./sections/Focus";
import { GitHubSection } from "./sections/GitHub";
import { Contact } from "./sections/Contact";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Projects />
        <Vision />
        <Focus />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
