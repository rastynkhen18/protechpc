"use client";

import React from "react";

const driveFolderUrl =
  "https://drive.google.com/drive/folders/1qFPDPwjBnyS4NSg0Z2OvvVoCzLir0cMe?usp=sharing";
const facebookPostUrl = "https://www.facebook.com/ProTechPcStore/posts";

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

const facebookHighlights = [
  {
    eyebrow: "Follow along",
    title: "We’re open today",
    description:
      "Stay updated with ProTechPC. Follow our Facebook page for opening updates, new products, services, and the latest announcements!",
    href: "https://www.facebook.com/ProTechPcStore",
    action: "Visit our Facebook page",
    image:
      "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/896739844_1568474625296648_7526707731228931221_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RXLjjkTn0AcQ7kNvwG9JcYt&_nc_oc=Adr-KJc9sOtIfeSF5VrpaWtFpHZ_fi8VVvKXSZl6WLWORaMEC0fnru8r4kHsStIAdL0&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=TbYOIyadBdlPqJJ6ztCO4g&_nc_ss=79289&oh=00_AQRSuCy_8853znzH9N9OdzMjnVonsEO5dqFNoMhmxcuebw&oe=6B01C013",
  },
] as const;

export default function BlogPage() {
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
                <div className="aspect-video overflow-hidden bg-black">
                  <iframe
                    title={video.title}
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    className="h-full w-full border-0"
                    loading={index < 3 ? "eager" : "lazy"}
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Video {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight">
                      {video.title}
                    </h2>
                  </div>
                  <a
                    href={`https://drive.google.com/file/d/${video.id}/view?usp=sharing`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${video.title} on Google Drive`}
                    className="shrink-0 rounded-full border border-border px-3 py-2 text-sm font-semibold transition-colors hover:bg-background"
                  >
                    Open
                  </a>
                </div>
              </article>
            ))}
          </div>

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
        </div>
      </div>
    </section>
  );
}
