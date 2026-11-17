import Image, { type StaticImageData } from "next/image";
import Amd from "@/assets/logoBrand/amd.svg";
import Intel from "@/assets/logoBrand/intel.svg";
import Nvidia from "@/assets/logoBrand/nvidia.svg";
import Redragon from "@/assets/logoBrand/redragon.svg";
import Msi from "@/assets/logoBrand/msi.svg";
import Gigabyte from "@/assets/logoBrand/gigabyte.svg";
import Asrock from "@/assets/logoBrand/asrock.svg";
import Asus from "@/assets/logoBrand/asus.svg";
import Hp from "@/assets/logoBrand/hp.svg";
import Logitech from "@/assets/logoBrand/logitech.svg";
import Acer from "@/assets/logoBrand/acer.svg";

type TechStackItem = {
  alt: string;
  image: StaticImageData;
};

const techStack: TechStackItem[] = [

  { alt: "AMD logo", image: Amd },
  { alt: "Intel logo", image: Intel },
  { alt: "Nvidia logo", image: Nvidia },
  { alt: "Redragon logo", image: Redragon },
  { alt: "MSI logo", image: Msi },
  { alt: "Gigabyte logo", image: Gigabyte },
  { alt: "ASRock logo", image: Asrock },
  { alt: "ASUS logo", image: Asus },
  { alt: "HP logo", image: Hp },
  { alt: "Logitech logo", image: Logitech },
  { alt: "Acer logo", image: Acer },

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
              key={`${item.alt}-${index}`}
              className="group flex shrink-0 items-center gap-2 pr-12 transition-all duration-300 md:pr-20"
              aria-hidden={index >= techStack.length}
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
