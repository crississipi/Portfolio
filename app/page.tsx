import About from "@/components/About";
import BackgroundTiles from "@/components/BackgroundTiles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] text-white">
      <BackgroundTiles />
      <Header />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </main>
  );
}
