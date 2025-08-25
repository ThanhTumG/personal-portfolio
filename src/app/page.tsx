import { Navigation, Welcome } from "@/components";
import { Cursor } from "@/components/ui";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <Cursor />
      <Navigation />

      <div className="max-w-6xl px-6 w-full">
        <Welcome />
      </div>
    </div>
  );
}
