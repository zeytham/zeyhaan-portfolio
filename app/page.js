import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experiences />
      <Team />
      <Gallery />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
