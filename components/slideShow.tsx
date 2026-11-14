import Image from "next/image";
import Amd from "@/assets/logoBrand/amd.svg";
import Intel from "@/assets/logoBrand/intel.png";
import Nvidia from "@/assets/logoBrand/nvidia.png";
import Redragon from "@/assets/logoBrand/redragon.png";
import Msi from "@/assets/logoBrand/msi.png";
import Gigabyte from "@/assets/logoBrand/gigabyte.png";

type TechStackItem = {
  alt: string;
  image: typeof Amd | typeof Intel | typeof Nvidia | typeof Redragon | typeof Msi | typeof Gigabyte;
};

const techStack: TechStackItem[] = [
  { alt: "AMD logo", image: Amd },
  { alt: "Intel logo", image: Intel },
  { alt: "Nvidia logo", image: Nvidia },
  { alt: "Redragon logo", image: Redragon },
  { alt: "MSI logo", image: Msi },
  { alt: "Gigabyte logo", image: Gigabyte },
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
                width={30}
                height={30}
                className="h-7 w-auto object-contain opacity-60 transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
