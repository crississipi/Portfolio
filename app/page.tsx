import { Crafts, Header, Hero } from "@/components";

export default function Home() {
  return (
    <main className="h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-whitish relative">
      <Header />
      <div id='squareCont' className='h-full w-full grid lg:grid-cols-30 grid-cols-13 items-center bg-blackish absolute -top-3'>
        { Array.from({length: 450}).map((_, i) => (
            <span key={i} className='col-span-1 aspect-square rounded-xs bg-whitish'></span>
        )) }
      </div>
      <div className="h-full w-full overflow-x-hidden snap-y snap-mandatory scroll-smooth z-50">
        <Hero />
        <Crafts />
      </div>
    </main>
  );
}
