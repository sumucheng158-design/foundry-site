import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechGrid from "@/components/TechGrid";
import ManufacturingLoop from "@/components/ManufacturingLoop";
import Stats from "@/components/Stats";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Hero />
      <Stats />
      <TechGrid />
      <ManufacturingLoop />
      <ContactBanner />
      <Footer />
    </main>
  );
}
