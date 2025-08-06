import { Crafts, Header, Hero } from "@/components";
import BGAnimation from "@/components/BGAnimation";

export default function Home() {
  return (
    <main className="h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-bg-color relative">
      <Header />
      <BGAnimation />
      <div className="h-full w-full overflow-x-hidden snap-y snap-mandatory scroll-smooth z-50">
        <Hero />
        <Crafts />
      </div>
    </main>
  );
}
