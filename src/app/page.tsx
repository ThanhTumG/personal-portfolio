import { About, Experience, Footer, Navigation, Welcome } from "@/components";
import { Cursor } from "@/components/ui";

export default function Home() {
  return (
    <div className="font-sans">
      <Cursor />
      <Navigation />
      <div className="flex flex-col max-w-6xl px-6 pb-10 mx-auto w-full">
        <Welcome />
        <About />
        <Experience />
      </div>

      <Footer />
    </div>
  );
}
