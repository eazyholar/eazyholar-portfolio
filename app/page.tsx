import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0b", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Works />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
