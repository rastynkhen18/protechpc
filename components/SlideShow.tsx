import Image from "next/image";
import Ryzen from "@/assets/ryzen.png";
import Intel from "@/assets/intel.png";
import Msi from "@/assets/msi.png";

type TechStackItem = {
  label: string;
  alt: string;
  image: typeof Ryzen;
};

const techStack: TechStackItem[] = [
  { label: "AMD Ryzen", alt: "AMD Ryzen logo", image: Ryzen },
  { label: "Intel", alt: "Intel logo", image: Intel },
  { label: "MSI", alt: "MSI logo", image: Msi },
];

export default function TechStackSlideshow() {
  const repeatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
    <section>
        <div className="flex w-full flex-col items-center justify-center bg-background py-5 container mx-auto sm:w-[85%] md:w-[70%] lg:w-[62%]">
          <style>{`
            .slideshow-viewport {
              width: 100%;
              overflow: hidden;
            }
            .slideshow-track {
              display: flex;
              width: max-content;
              animation: scroll-left 100s linear infinite;
            }
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            // .tech-icon {
            //   filter: brightness(0) saturate(100%);
            // }
            // :root.dark .tech-icon {
            //   filter: brightness(0) saturate(100%) invert(1);
            // }
          `}</style>
          <div className="relative w-full">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10" />

            <div className="slideshow-viewport">
              <div className="slideshow-track">
                {repeatedTechStack.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex shrink-0 cursor-pointer flex-col items-center gap-2 px-6 font-semibold text-muted-foreground transition-colors md:flex-row"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={108}
                      height={108}
                      className="tech-icon"
                    />
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
