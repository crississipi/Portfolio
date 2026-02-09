import BackgroundTiles from "@/components/BackgroundTiles";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className="min-h-screen w-full relative bg-black select-none">
      <Header />
      <BackgroundTiles />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </main>
  );
}