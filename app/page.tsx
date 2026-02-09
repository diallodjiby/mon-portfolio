import Hero from "@/components/hero/hero";
import ToolsMarquee from "@/components/tools/ToolsMarquee";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import LifeOutsideTerminal from "@/components/about/LifeOutsideTerminal";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <ToolsMarquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <LifeOutsideTerminal />
      <Footer />
    </>
  );
}
