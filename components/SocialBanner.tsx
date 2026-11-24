import React from 'react'
import storeImage from "@/assets/protechpcstoreimage.png";

const facebookPostUrl = "https://www.facebook.com/ProTechPcStore/posts";
const facebookHighlights = [
  {
    eyebrow: "Follow along",
    title: "We’re open today",
    description:
      "Stay updated with ProTechPC. Follow our Facebook page for opening updates, new products, services, and the latest announcements!",
    href: "https://www.facebook.com/ProTechPcStore",
    action: "Visit our Facebook page",
    image: storeImage.src,
  },
] as const;


export default function SocialBanner() {
  return (
     <div className="mt-16 border-t border-border pt-12 sm:mt-20 sm:pt-16">
            <div className="mt-8 grid gap-6">
              {facebookHighlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="group grid overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 md:grid-cols-[1.05fr_0.95fr]"
                >
                  {highlight.image ? (
                    <div
                      className="relative min-h-64 overflow-hidden md:min-h-80"
                    >
                      <img
                        src={highlight.image}
                        alt={highlight.title}
                        className="h-full w-full object-contain"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {highlight.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {highlight.title}
                    </h3>
                    <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
                      {highlight.description}
                    </p>
                    <a
                      href={highlight.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      {highlight.action} <span className="ml-2" aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
  )
}
