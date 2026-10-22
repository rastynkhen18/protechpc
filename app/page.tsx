import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SlideShow from "@/components/SlideShow";
import About from "@/components/About";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Header />
        <HeroSection />
        <SlideShow />
        <About />
        <Footer />
      </main>
    </div>
  );
}
