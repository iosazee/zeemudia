import About from "@/components/general/about";
import Hero from "@/components/general/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black-100">
      {/* Base dark background applied to main container */}
      <div className="relative">
        {/* Hero section with grid background */}
        <section className="relative">
          <div className="absolute inset-0 bg-grid-white/[0.1]" />
          <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <Hero />
        </section>

        <About />
      </div>
    </main>
  );
}
