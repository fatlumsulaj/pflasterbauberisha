import Hero from "@/containers/Hero";
import About from "@/containers/About";
import Results from "@/containers/Results";
import Services from "@/containers/Services";
import Projects from "@/containers/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Results />
      <About />
      <Services />
      <Projects />
    </main>
  );
}
