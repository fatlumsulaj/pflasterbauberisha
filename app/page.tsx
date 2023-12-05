import Hero from "@/containers/Hero";
import About from "@/containers/About";
import Results from "@/containers/Results";
import Services from "@/containers/Services";
import Projects from "@/containers/Projects";
import Faq from "@/containers/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Results />
      <About />
      <Services />
      <Projects />
      <Faq />
    </main>
  );
}
