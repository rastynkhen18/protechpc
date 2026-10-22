import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SlideShow from "@/components/slide-show";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
    <Header />
      <main>
         <HeroSection />
         <SlideShow />
         <About />  
         <Services />
         <Contact />
      </main>
    <Footer />
    </div>
  );
}
