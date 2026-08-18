import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock3, Flame, MapPin, Sparkles, Star } from "lucide-react";
import { Footer, Header, ProductCard } from "@/components/shop";
import { VideoCarousel } from "@/components/video-carousel";
import { SHOP, categories, popular, telLink, waLink } from "@/data/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balaji Pan & Bakery Shop - Bandol, MP SEONI" },
      {
        name: "description",
        content:
          "Fresh cakes, cold drinks, pan corner and grocery in Main Market, Bandol. Order on WhatsApp, open daily 8 AM to 10 PM.",
      },
      { property: "og:title", content: "Balaji Pan & Bakery Shop - Bandol, MP" },
      {
        property: "og:description",
        content: "Bandol's favorite neighborhood shop for bakery, drinks, pan and grocery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const heroHighlights = [
  { icon: Sparkles, label: "Fresh stock daily" },
  { icon: Clock3, label: "Open 8 AM to 10 PM" },
  { icon: BadgeCheck, label: "Trusted local service" },
];

const quickFacts = [
  { title: "WhatsApp order", value: "One tap" },
  { title: "Fresh bakery", value: "Daily picks" },
  { title: "Market location", value: "Easy to find" },
];

const featureCards = [
  {
    title: "Bakery favorites",
    copy: "Cakes, pastries, patties, and quick bites for celebrations or everyday cravings.",
  },
  {
    title: "Cold drinks and snacks",
    copy: "Chilled beverages, chips, biscuits, and fast grab-and-go picks for the market crowd.",
  },
  {
    title: "WhatsApp ordering",
    copy: "Order ahead, ask for availability, and keep pickup simple with one tap.",
  },
];

const shopStats = [
  { value: "8 AM", label: "Open daily" },
  { value: "100%", label: "Fresh products" },
  { value: "4.9/5", label: "Local favorite" },
  { value: "10 PM", label: "Late service" },
];

const customerNotes = [
  {
    quote: "Fresh bakery items and quick service every time. The perfect stop in the market.",
    name: "Local customer",
  },
  {
    quote: "Everything I need is available here, and ordering on WhatsApp is very convenient.",
    name: "Happy shopper",
  },
  {
    quote: "The cakes are fresh, the drinks are chilled, and the team is always welcoming.",
    name: "Bandol family",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-6rem] top-16 size-72 rounded-full bg-[#d9b37a]/25 blur-3xl" />
            <div className="absolute right-[-4rem] top-24 size-80 rounded-full bg-[#4f6f4a]/18 blur-3xl" />
            <div className="absolute bottom-[-5rem] left-1/2 size-96 -translate-x-1/2 rounded-full bg-secondary/50 blur-3xl" />
          </div>

          <div className="mx-auto grid min-h-[calc(82vh-4rem)] max-w-6xl items-center gap-8 px-4 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8ab7f] bg-[#f5ead5]/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#5b3721] shadow-soft backdrop-blur">
                <Flame className="size-3.5 text-[#5b3721]" />
                Fresh bakery and daily essentials
              </div>

              <h1 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                A warm neighborhood stop for bakery, drinks, pan, and grocery essentials
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Fast service, fresh stock, and easy WhatsApp ordering from the heart of Main Market,
                Bandol.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7b5c3d]">
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-3 py-1.5">
                  Bakery
                </span>
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-3 py-1.5">
                  Pan corner
                </span>
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-3 py-1.5">
                  Cold drinks
                </span>
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-3 py-1.5">
                  Grocery
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#5d3925] px-5 py-3 text-sm font-bold text-[#fff6e8] shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Order on WhatsApp
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={telLink}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#c8ab7f] bg-[#f8f0e1] px-5 py-3 text-sm font-bold text-[#5b3721] shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Call Now
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#c8ab7f] px-5 py-3 text-sm font-bold text-[#5b3721] transition-colors hover:bg-[#f5ead5]"
                >
                  Browse Products
                </Link>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#dec8a0] bg-[#fff7ea]/95 p-3 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-xl bg-[#5d3925]/10 text-[#5d3925]">
                          <Icon className="size-4" />
                        </span>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 rounded-[1.75rem] border border-[#dec8a0] bg-[#fff7ea]/95 p-4 shadow-soft sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f4e7d3] p-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#7b5c3d]">
                    <Clock3 className="size-3.5" />
                    Opening hours
                  </div>
                  <p className="mt-2 text-lg font-extrabold text-foreground">{SHOP.hours}</p>
                </div>
                <div className="rounded-2xl bg-[#f4e7d3] p-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#7b5c3d]">
                    <MapPin className="size-3.5" />
                    Visit us
                  </div>
                  <p className="mt-2 text-lg font-extrabold text-foreground">{SHOP.address}</p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.title}
                    className="rounded-2xl border border-[#dec8a0] bg-[#f5ead5]/80 p-3 shadow-soft"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#7b5c3d]">
                      {fact.title}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 lg:-mt-10">
              <div className="relative mx-auto aspect-[3.65/5] max-w-[25rem] overflow-hidden rounded-[2rem] border border-[#d8c4a0] bg-[#f9f1e1] shadow-[0_18px_55px_-30px_rgba(0,0,0,0.2)]">
                <VideoCarousel />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/15 to-transparent" />
                <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between">
                  <span className="rounded-full border border-[#dec8a0] bg-[#fff7ea]/65 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-overlay-foreground backdrop-blur-sm">
                    Fresh picks today
                  </span>
                  <span className="rounded-full border border-[#dec8a0] bg-[#fff7ea]/65 px-3 py-1 text-[11px] font-semibold text-overlay-foreground backdrop-blur-sm">
                    Quick pickup
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 z-20 rounded-3xl border border-card/20 bg-card/20 p-3.5 text-overlay-foreground backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-overlay-foreground/75">
                    <Star className="size-3.5 fill-current text-primary" />
                    Why people stop here
                  </div>
                  <p className="mt-2 text-lg font-extrabold">
                    Bakery, drinks, pan, and daily essentials
                  </p>
                  <p className="mt-1 text-sm text-overlay-foreground/80">
                    One stop for quick shopping, fresh treats, and friendly local service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d9c3a0] bg-[#5d3925] py-8 text-[#fff7ea]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
            {shopStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#fff0d6]/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Easy browsing
              </p>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-foreground">
                Shop by category
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore the core things people stop by for every day.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-soft"
            >
              View all products
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-3xl">{c.emoji}</span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {c.count}
                    </span>
                  </div>
                  <h3 className="mt-3 font-bold text-foreground">{c.name}</h3>
                  <p className="text-xs text-muted-foreground">{c.nameHi}</p>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">Browse the full range</span>
                    <span className="text-accent">View more</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                    Popular picks
                  </p>
                  <h2 className="mt-1 font-display text-3xl font-extrabold text-foreground">
                    Customer favorites
                  </h2>
                </div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground"
                >
                  All items
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {popular.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {featureCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-3xl border border-[#dec8a0] p-6 shadow-soft ${
                    index === 0
                      ? "bg-[#f5ead5]/80"
                      : index === 1
                        ? "bg-card"
                        : "bg-[#5d3925] text-[#fff6e8]"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.22em] ${
                      index === 2 ? "text-[#fff6e8]/75" : "text-[#5d3925]"
                    }`}
                  >
                    Why people return
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold">{card.title}</h3>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      index === 2 ? "text-[#fff6e8]/90" : "text-muted-foreground"
                    }`}
                  >
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe2] py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5d3925]">
                Loved locally
              </p>
              <h2 className="mt-1 font-display text-3xl font-extrabold text-foreground">
                Why Bandol chooses Balaji
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
                Everyday essentials, fresh treats, and friendly service under one roof.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {customerNotes.map((note) => (
                <figure
                  key={note.name}
                  className="rounded-3xl border border-[#dec8a0] bg-card p-6 shadow-soft"
                >
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#5d3925]">
                    Top rated by locals
                  </div>
                  <blockquote className="mt-4 text-sm leading-6 text-foreground">
                    "{note.quote}"
                  </blockquote>
                  <figcaption className="mt-5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {note.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-4 pt-14">
          <div className="rounded-[2rem] bg-[#5d3925] p-8 text-center text-[#fff6e8] shadow-glow sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#fff6e8]/75">
              Ready to order
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold">Call or WhatsApp us now</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#fff6e8]/90">
              Tell us what you need and we will keep it ready for pickup. Fast, simple, and local.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f9f1e1]/10 p-4 text-left">
                <p className="text-xs font-bold uppercase tracking-wide text-[#fff6e8]/75">
                  Opening hours
                </p>
                <p className="mt-1 text-lg font-extrabold">{SHOP.hours}</p>
              </div>
              <div className="rounded-2xl bg-[#f9f1e1]/10 p-4 text-left">
                <p className="text-xs font-bold uppercase tracking-wide text-[#fff6e8]/75">
                  Address
                </p>
                <p className="mt-1 text-lg font-extrabold">{SHOP.address}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#f9f1e1] px-5 py-2.5 text-sm font-bold text-[#5d3925] shadow-soft"
              >
                WhatsApp
              </a>
              <a
                href={telLink}
                className="rounded-xl bg-[#f9f1e1] px-5 py-2.5 text-sm font-bold text-[#5d3925] shadow-soft"
              >
                Call Now
              </a>
              <Link
                to="/contact"
                className="rounded-xl border border-[#f9f1e1]/40 px-5 py-2.5 text-sm font-bold text-[#fff6e8]"
              >
                Directions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
