import About from "@/components/general/about";
import Hero from "@/components/general/hero";
import Projects from "@/components/general/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black-100">
      <div className="relative">
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
