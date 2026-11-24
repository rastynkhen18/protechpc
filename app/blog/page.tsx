"use client";

import React, { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import SocialBanner from "@/components/SocialBanner";


const blogVideos = [
  { title: "Hinge Repair", id: "1LjAtz_kfJSTKsma_pLVVhcUxkVYT2Hw7" },
  { title: "Keyboard Replacement", id: "1O2A_8aTXnyZimpbAJUsXLbf3WLpX9BAR" },
  { title: "ProTechPC Vlog 1", id: "1URu9vJczB_tGMbTQaesyiZzmD2HuljYj" },
  { title: "ProTechPC Vlog 2", id: "1f5laghE6reZwKkAvVSyC6yRbQPovoXvQ" },
  { title: "ProTechPC Vlog 3", id: "1SbERzlxTWWCagRTTSVcSTYEcYqDbf9rC" },
  { title: "ProTechPC Vlog 4", id: "1eWA9V2tNqmHSDc_rId2lxsCYevCoifHN" },
  { title: "ProTechPC Vlog 5", id: "1d4Nru6qtpuDQjVes2a87YWMNx2D3Taa4" },
  { title: "ProTechPC Vlog 6", id: "15fmUB2MzDLoGHBOTpOFsrq9hqIikiU2c" },
  { title: "ProTechPC Vlog 7", id: "1kmZRU8s4x-gWdoL4kBYPFdWFUEEohnoz" },
  { title: "ProTechPC Vlog 8", id: "1URUE6ylyKLXbeFY-HDcVXqCRuFT1Qdgp" },
  { title: "ProTechPC Vlog 9", id: "11dw8BS51N1IkIJ9yTJ--8sv-gorQQxIR" },
  { title: "ProTechPC Vlog 10", id: "1QzrgJ_y1LdD2mU3rX5f_FhO7AGppZwFk" },
  { title: "ProTechPC Vlog 11", id: "1jPYv_Aa3paMdRvkqoQmp97UD_g_SfQiP" },
  { title: "ProTechPC Vlog 12", id: "1wH5jilxRcxQC44PaqHSy2VUOgIfoQBwD" },
  { title: "ProTechPC Vlog 13", id: "1Q7oikVpcLzuLnSMlk7LeoZidSxe2CeaX" },
  { title: "ProTechPC Vlog 14", id: "1w2sFTFszbCh1qFqAS1NegRkMzamHej7C" },
  { title: "ProTechPC Vlog 15", id: "1E-TXsRSsZPSNgDuJ97tXSb5_vSPZ6-AO" },
  { title: "ProTechPC Vlog 16", id: "1sVeh5g70J7zM-D0IJ0He9jouXwt1i0pL" },
  { title: "ProTechPC Vlog 17", id: "1iaA3tgo_9O0uf6bqTZ5JNmU4lCcuFbGu" },
  { title: "ProTechPC Vlog 18", id: "1aUpONFylJ_e8C8w2LLrVk89NViMFMRD3" },
  { title: "Laptop Repair", id: "133lIabuts5ZP-oKTVAGuaPLm2L71ALz3" },
] as const;

export default function BlogPage() {
  const [activeVideo, setActiveVideo] = useState<(typeof blogVideos)[number] | null>(
    null,
  );

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="border-t border-border pt-16 sm:pt-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                ProTechPC Blog
              </p>
              <h1
                id="blog-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Our Latest Vlogs &amp; Repairs
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Watch our latest builds, service highlights, and laptop repair
                videos from ProTechPC.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogVideos.map((video, index) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="group relative aspect-video w-full overflow-hidden bg-black text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Play ${video.title}`}
                >
                  <iframe
                    title={`${video.title} preview`}
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    className="pointer-events-none h-full w-full border-0"
                    loading={index < 3 ? "eager" : "lazy"}
                    tabIndex={-1}
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                    <span className="flex size-14 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform group-hover:scale-105">
                      <Play className="ml-1 size-6 fill-current" />
                    </span>
                  </span>
                </button>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {video.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    aria-label={`Play ${video.title}`}
                    className="shrink-0 rounded-full border border-border px-3 py-2 text-sm font-semibold transition-colors hover:bg-background"
                  >
                    Play
                  </button>
                </div>
              </article>
            ))}
          </div>
          <SocialBanner />
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveVideo(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="fixed right-4 top-4 z-[110] flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg transition-colors hover:bg-black sm:right-6 sm:top-6"
            aria-label="Close video"
          >
            <X className="size-6" />
          </button>

          <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl">
            <iframe
              title={activeVideo.title}
              src={`https://drive.google.com/file/d/${activeVideo.id}/preview`}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
