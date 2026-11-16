import Image from "next/image";
import Dist from "@/assets/logoClient/DIST.jpg";
import RMDigital from "@/assets/logoClient/RMDigitalTrading.jpg";
import Markenburg from "@/assets/logoClient/Markenburg.jpg";
import Zamora from "@/assets/logoClient/Zamora.jpg";

type TechStackItem = {
  alt: string;
  image: typeof Dist | typeof RMDigital | typeof Markenburg | typeof Zamora;
};

const techStack: TechStackItem[] = [
  { alt: "AMD logo", image: Dist },
  { alt: "Intel logo", image: RMDigital },
  { alt: "Nvidia logo", image: Markenburg },
  { alt: "Redragon logo", image: Zamora },
];

export default function TechStackSlideshow() {
  const repeatedTechStack = [...techStack, ...techStack];

  return (
    <section className="relative overflow-x-hidden bg-background py-8">
      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-background via-background/80 to-transparent" />

        <div className="flex w-max animate-[scroll_60s_linear_infinite] will-change-transform md:animate-[scroll_50s_linear_infinite]">
          {repeatedTechStack.map((item, index) => (
            <div
              className="group flex shrink-0 items-center gap-2 pr-12 transition-all duration-300 md:pr-20"
              aria-hidden={index >= techStack.length}
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="h-10 w-auto object-containtransition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
