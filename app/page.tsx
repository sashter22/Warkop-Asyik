// src/app/page.tsx
import Home from "@/components/Home";
import AboutUs from "@/components/AboutUs";
import Menu from "@/components/Menu";
import Location from "@/components/Location";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Home />
      <AboutUs />
      <Menu />
      <Location />
    </main>
  );
}
