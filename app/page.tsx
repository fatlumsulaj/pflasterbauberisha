import Hero from "@/containers/Hero";
import About from "@/containers/About";
import Results from "@/containers/Results";
import Services from "@/containers/Services";
import Projects from "@/containers/Projects";
import Faq from "@/containers/Faq";
import Contact from "@/containers/Contact";


export default function Home() {
  return (
    <main>
      <Hero />

      <Results />
      <div className="bg-neutral-100 py-10 px-4 md:px-8">
        <About />
        <Services />
      </div>

      <Projects />
      <Faq />
      <Contact />
    </main>
  );
}
