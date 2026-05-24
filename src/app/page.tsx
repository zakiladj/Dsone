import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import Benefits from "@/components/sections/Benefits";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Benefits />
      <About />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
