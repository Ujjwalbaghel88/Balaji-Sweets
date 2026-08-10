import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header } from "@/components/shop";
import { SHOP, telLink, waLink } from "@/data/shop";

const shopNightImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80";
const shopInsideImage =
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Balaji Pan & Bakery Shop" },
      {
        name: "description",
        content:
          "Visit Balaji Pan & Bakery Shop at Main Market, Bandol, Madhya Pradesh. Open 8 AM to 10 PM daily. Call or WhatsApp your order.",
      },
      { property: "og:title", content: "Contact & Location — Balaji Pan & Bakery Shop" },
      {
        property: "og:description",
        content: "Address, opening hours and direct WhatsApp ordering.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-3xl font-extrabold text-foreground">Contact & Location</h1>
        <p className="mt-1 text-sm text-muted-foreground">हमसे संपर्क करें</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Address</dt>
                <dd className="mt-1 font-bold text-foreground">{SHOP.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Opening hours
                </dt>
                <dd className="mt-1 font-bold text-foreground">{SHOP.hours} (daily)</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Phone</dt>
                <dd className="mt-1 font-bold text-foreground">{SHOP.phone}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
              >
                WhatsApp
              </a>
              <a
                href={telLink}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                Call Now
              </a>
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border px-5 py-2.5 text-sm font-bold text-foreground"
              >
                Directions
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <img
              src={shopNightImage}
              alt="Shop exterior with colourful neon tube lights"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-soft"
            />
            <img
              src={shopInsideImage}
              alt="Inside the shop showing bakery, drinks and pan stock on shelves"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
