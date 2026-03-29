import Hero from "@/components/general/hero";
import Services from "@/components/general/services";
import FeaturedProject from "@/components/general/featured-project";
import Projects from "@/components/general/projects";
import Testimonials from "@/components/general/testimonials";
import FAQ from "@/components/general/faqs";
import Contact from "@/components/general/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProject />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
