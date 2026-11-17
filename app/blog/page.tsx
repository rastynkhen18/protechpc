const facebookPostUrl =
  "https://www.facebook.com/ProTechPcStore/posts/pfbid0ZU7G7tiU71YQvihhZqQxakxcaHbu9HQTXKTwNj24mpPYPBvpsGA5iFuqk3TukRvnl";

const facebookEmbedUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
  facebookPostUrl,
)}&show_text=true&width=500`;

const facebookHighlights = [
  {
    eyebrow: "Latest update",
    title: "We’re open today",
    description:
      "See the latest announcement, opening updates, and new posts from ProTechPC.",
    href: facebookPostUrl,
    action: "View post",
  },
  {
    eyebrow: "Photo gallery",
    title: "See our latest photos",
    description:
      "Browse product highlights, builds, and updates from the ProTechPC.",
    href: "https://www.facebook.com/ProTechPcStore/photos",
    action: "View photos",
    image:
      "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/896739844_1568474625296648_7526707731228931221_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RXLjjkTn0AcQ7kNvwG9JcYt&_nc_oc=Adr-KJc9sOtIfeSF5VrpaWtFpHZ_fi8VVvKXSZl6WLWORaMEC0fnru8r4kHsStIAdL0&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=TbYOIyadBdlPqJJ6ztCO4g&_nc_ss=79289&oh=00_AQRSuCy_8853znzH9N9OdzMjnVonsEO5dqFNoMhmxcuebw&oe=6B01C013",
  },
  {
    eyebrow: "Follow along",
    title: "More from ProTechPC",
    description:
      "Follow our Facebook page for product news, services, and store updates.",
    href: "https://www.facebook.com/ProTechPcStore",
    action: "Visit Facebook",
    image:
      "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/892211041_1568474798629964_8701550585495731286_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2FUFlZzianEQ7kNvwFIbB58&_nc_oc=AdqWpFqKjFCDzQKHJzM3r2dgZZmBxDZlyQcHKRq__4JsA233XSmu1qaY4YVG4JV8Jmg&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=TbYOIyadBdlPqJJ6ztCO4g&_nc_ss=79289&oh=00_AQRyxbj0yHkLxRRL3QL4TjvzCW4ycr_WW1RgavdoipR0JQ&oe=6B01D05C",
  },
] as const;

export default function BlogPage() {
  return (
    <main
      id="blog"
      className="min-h-screen overflow-hidden bg-background py-10 text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <section
          aria-labelledby="blog-title"
          className="border-t border-border pt-16 sm:pt-20"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              From Facebook
            </p>
            <h1 id="blog-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              What&apos;s happening at ProTechPC
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Stay up to date with our latest announcements, products, and
              services from the ProTechPC Facebook page.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
            <article className="rounded-2xl border border-border bg-muted/30 p-4 shadow-sm sm:p-6">
              <div className="overflow-hidden rounded-xl bg-background">
                <iframe
                  title="Latest ProTechPC Facebook post"
                  src={facebookEmbedUrl}
                  className="h-[620px] w-full border-0"
                  loading="lazy"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Having trouble viewing the post?{" "}
                <a
                  href={facebookPostUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Open it on Facebook
                </a>
                .
              </p>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {facebookHighlights.slice(1).map((highlight) => (
                <a
                  key={highlight.title}
                  href={highlight.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-56 flex-col justify-between rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted"
                >
                  <div
                    role="img"
                    aria-label={`${highlight.title} thumbnail`}
                    className="mb-6 h-36 rounded-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url("${highlight.image}")` }}
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      {highlight.eyebrow}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                      {highlight.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                    {highlight.action} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
