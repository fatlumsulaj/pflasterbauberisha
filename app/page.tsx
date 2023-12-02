import Hero from "@/containers/Hero";
import About from "@/containers/About";
import Results from "@/containers/Results";
import Services from "@/containers/Services";
export default function Home() {
  return (
    <main>
      <Hero />
      <Results />
      <About />
      <Services />
    </main>
  );
}
