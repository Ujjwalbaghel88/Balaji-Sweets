import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, Search } from "lucide-react";
import { Footer, Header, ProductCard } from "@/components/shop";
import { VideoCarousel } from "@/components/video-carousel";
import { SHOP, categories, popular, telLink, waLink } from "@/data/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balaji Pan & Bakery Shop — Bandol, MP SEONI" },
      {
        name: "description",
        content:
          "Fresh cakes, cold drinks, pan corner and grocery in Main Market, Bandol. Order on WhatsApp, open daily 8 AM to 10 PM.",
      },
      { property: "og:title", content: "Balaji Pan & Bakery Shop — Bandol, MP" },
      {
        property: "og:description",
        content: "Bandol ki sabse pasandida dukaan — bakery, drinks, pan and grocery.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const features = [
  { emoji: "🎂", label: "Fresh Bakery Items Daily" },
  { emoji: "🚀", label: "Quick Service" },
  { emoji: "💯", label: "Quality Products" },
  { emoji: "📞", label: "WhatsApp Order" },
];

const shopStats = [
  { value: "8 AM", label: "Open every day" },
  { value: "100%", label: "Fresh products" },
  { value: "4.9/5", label: "Local favourite" },
  { value: "10 PM", label: "Late-night service" },
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

      <section className="relative min-h-[68vh] overflow-hidden">
        <VideoCarousel />
        <div className="pointer-events-none absolute inset-0 z-10 bg-foreground/70" />
        <div className="relative z-20 mx-auto flex min-h-[68vh] max-w-3xl items-center px-4 py-14 text-center sm:py-20">
          <div className="w-full">
            <span className="grid mx-auto size-16 place-items-center rounded-3xl bg-primary text-3xl shadow-glow">
              🏪
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-overlay-foreground sm:text-5xl">
              {SHOP.name}
            </h1>
            <p className="mt-2 text-lg text-overlay-foreground/90">{SHOP.nameHi}</p>
            <p className="mt-3 text-sm text-overlay-foreground/80">{SHOP.tagline} ✨</p>

            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {features.map((f) => (
                <li
                  key={f.label}
                  className="rounded-full bg-card/15 px-3 py-1.5 text-xs font-medium text-overlay-foreground ring-1 ring-card/25"
                >
                  {f.emoji} {f.label}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-overlay-foreground/85">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card/15 px-3 py-1.5 ring-1 ring-card/25">
                <Clock3 className="size-3.5" /> Open {SHOP.hours}
              </span>
            </div>

            <p className="mt-6 text-sm text-overlay-foreground/80">📍 {SHOP.address}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-soft"
              >
                <span>WhatsApp Order</span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href={telLink}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft"
              >
                Call Now
              </a>
              <Link
                to="/products"
                className="rounded-xl border border-overlay-foreground/50 px-5 py-2.5 text-sm font-bold text-overlay-foreground"
              >
                Browse Products
              </Link>
            </div>

            <Link
              to="/products"
              className="mx-auto mt-7 flex max-w-xl items-center gap-3 rounded-2xl border border-card/30 bg-card px-4 py-3 text-left text-foreground shadow-soft transition hover:bg-card/95"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                <Search className="size-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold">Find your favourites</span>
                <span className="block truncate text-xs text-muted-foreground">
                  Cakes, cold drinks, pan, snacks and grocery
                </span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center font-display text-2xl font-extrabold text-foreground">
          Shop by Category
        </h2>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Explore our wide range of products 🛍️
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="h-36 w-full object-cover" />
              <div className="p-4">
                <span className="text-2xl">{c.emoji}</span>
                <h3 className="mt-1 font-bold text-foreground">{c.name}</h3>
                <p className="text-xs text-muted-foreground">{c.nameHi}</p>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">{c.count}</span>
                  <span className="text-accent">View All →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-accent py-8 text-accent-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4">
          {shopStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground/75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-foreground">
              Popular Items ⭐
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Customers' favorites from our shop</p>
          </div>
          <Link
            to="/products"
            className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-foreground"
          >
            View All
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/45 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Loved locally
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Why Bandol chooses Balaji
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Everyday essentials, fresh treats and friendly service under one roof.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {customerNotes.map((note) => (
              <figure
                key={note.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div
                  className="text-sm tracking-[0.2em] text-primary"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <blockquote className="mt-4 text-sm leading-6 text-foreground">
                  “{note.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {note.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-3xl bg-accent p-8 text-center text-accent-foreground shadow-glow">
          <h2 className="font-display text-2xl font-extrabold">Order Now! 🛒</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-accent-foreground/90">
            WhatsApp ya call karke apna order place karein. Hum aapke liye ready rakhenge!
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-card/15 p-4">
              <p className="text-xs uppercase tracking-wide">Opening Hours</p>
              <p className="mt-1 font-bold">{SHOP.hours}</p>
            </div>
            <div className="rounded-2xl bg-card/15 p-4">
              <p className="text-xs uppercase tracking-wide">Address</p>
              <p className="mt-1 font-bold">{SHOP.address}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-card px-5 py-2.5 text-sm font-bold text-foreground"
            >
              WhatsApp
            </a>
            <a
              href={telLink}
              className="rounded-xl bg-card px-5 py-2.5 text-sm font-bold text-foreground"
            >
              Call Now
            </a>
            <Link
              to="/contact"
              className="rounded-xl border border-card/50 px-5 py-2.5 text-sm font-bold"
            >
              Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
