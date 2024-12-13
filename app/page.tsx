import Hero from "@/components/general/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 bg-black-100" />
      <div className="fixed inset-0 bg-grid-white/[0.1]" />
      <div className="fixed inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
    </main>
  );
}
