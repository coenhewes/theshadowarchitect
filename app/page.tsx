import Hero from "@/components/Hero";
import TheTruth from "@/components/TheTruth";
import SevenPillars from "@/components/SevenPillars";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TheTruth />
      <SevenPillars />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
