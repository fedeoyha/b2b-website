import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import RoiCalculator from "@/components/RoiCalculator";
import Pricing from "@/components/Pricing";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProps />
      <Methodology />
      <Services />
      <RoiCalculator />
      <Pricing />
      <Clients />
      <FAQ />
      <Footer />
    </main>
  );
}
