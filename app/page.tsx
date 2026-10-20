import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SlideShow from "@/components/SlideShow";
import slideshow from "@/components/SlideShow";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Header />
        <HeroSection />
        <SlideShow />
      </main>
    </div>
  );
}
