import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Services />
      <Works />
      <Industries />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
