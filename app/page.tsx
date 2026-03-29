import Hero from "@/components/general/hero";
import Projects from "@/components/general/projects";
import Testimonials from "@/components/general/testimonials";
import FAQ from "@/components/general/faqs";
import Contact from "@/components/general/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Services and FeaturedProject will be added in later tasks */}
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
