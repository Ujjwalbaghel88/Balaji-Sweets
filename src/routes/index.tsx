import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Flame,
  MapPin,
  PackageCheck,
  Sparkles,
  Star,
  Tag,
  Truck,
  Cookie,
  IceCreamBowl,
  Leaf,
  PartyPopper,
  ShoppingBasket,
  Heart,
  ArrowUp,
  MessageCircle,
  Shuffle,
  WandSparkles,
  Gift,
} from "lucide-react";
import { useEffect, useState } from "react";
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

const offers = [
  {
    icon: Tag,
    label: "Bakery combo",
    title: "Cake + cold drink",
    copy: "Ask us for today's celebration combo price.",
  },
  {
    icon: Truck,
    label: "Easy ordering",
    title: "Pickup or local delivery",
    copy: "Send your cart on WhatsApp and confirm availability.",
  },
  {
    icon: PackageCheck,
    label: "Fresh stock",
    title: "Packed with care",
    copy: "Fresh bakery, chilled drinks and daily essentials ready for you.",
  },
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
  const [showTodayNote, setShowTodayNote] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [surpriseIndex, setSurpriseIndex] = useState(0);
  const [savedItems, setSavedItems] = useState<string[]>([]);
  const [treatFor, setTreatFor] = useState("myself");
  const [treatMood, setTreatMood] = useState("sweet");

  const treatIdeas: Record<string, { title: string; item: string; emoji: string }> = {
    sweet: { title: "Kuch meetha ho jaaye", item: "Birthday Cake ya bakery treats", emoji: "🍰" },
    chill: { title: "Chilled break banta hai", item: "Cold drink aur quick snack", emoji: "🥤" },
    snack: { title: "Chhota snack, badi khushi", item: "Chips, biscuits ya patties", emoji: "🍟" },
  };
  const treatAudience: Record<string, string> = { myself: "mere liye", friend: "dost ke liye", family: "family ke liye" };
  const currentTreat = treatIdeas[treatMood];

  useEffect(() => {
    const updateScroll = () => setShowBackToTop(window.scrollY > 500);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="overflow-hidden">
        <section className="relative isolate">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(217,179,122,0.22),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(160,105,66,0.12),transparent_30%),linear-gradient(to_bottom,var(--color-background),color-mix(in_oklab,var(--color-secondary)_42%,var(--color-background)),var(--color-background))]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(93,57,37,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(93,57,37,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-0 sm:px-6 sm:py-2 md:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-3">
            <div className="order-2 relative z-10 md:order-1 md:py-2">
              <div className="home-reveal inline-flex items-center gap-2 rounded-full border border-[#c8ab7f] bg-[#f5ead5]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5b3721] shadow-soft backdrop-blur sm:px-4 sm:py-2 sm:text-[11px]">
                <Flame className="size-3 sm:size-3.5 text-[#5b3721]" />
                Fresh bakery and daily essentials
              </div>

              <h1 className="home-reveal home-reveal-delay-1 mt-3 max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:text-5xl lg:text-6xl">
                A warm neighborhood stop for bakery, drinks, pan, and grocery essentials
              </h1>

              <p className="home-reveal home-reveal-delay-2 mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7 lg:max-w-xl">
                Fast service, fresh stock, and easy WhatsApp ordering from the heart of Main Market,
                Bandol.
              </p>

              <div className="home-reveal home-reveal-delay-2 mt-3 flex flex-wrap gap-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7b5c3d] sm:gap-2 sm:text-[11px]">
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-2.5 py-1 sm:px-3 sm:py-1.5">
                  Bakery
                </span>
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-2.5 py-1 sm:px-3 sm:py-1.5">
                  Pan corner
                </span>
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-2.5 py-1 sm:px-3 sm:py-1.5">
                  Cold drinks
                </span>
                <span className="rounded-full border border-[#dec8a0] bg-[#fff8ee] px-2.5 py-1 sm:px-3 sm:py-1.5">
                  Grocery
                </span>
              </div>

              <div className="home-reveal home-reveal-delay-3 mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-[#5d3925] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-[#fff6e8] shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Order on WhatsApp
                  <ArrowRight className="size-3.5 sm:size-4" />
                </a>
                <a
                  href={telLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#c8ab7f] bg-[#f8f0e1] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-[#5b3721] shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Call Now
                </a>
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl border border-[#c8ab7f] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-[#5b3721] transition-colors hover:bg-[#f5ead5]"
                >
                  Browse Products
                </Link>
              </div>

              <div className="mt-3 grid gap-2 sm:gap-3 sm:grid-cols-3">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-lg sm:rounded-2xl border border-[#dec8a0] bg-[#fff7ea]/95 p-2.5 sm:p-3 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="grid size-7 sm:size-9 place-items-center rounded-lg sm:rounded-xl bg-[#5d3925]/10 text-[#5d3925] flex-shrink-0">
                          <Icon className="size-3.5 sm:size-4" />
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 grid gap-2 rounded-lg sm:rounded-[1.75rem] border border-[#dec8a0] bg-[#fff7ea]/95 p-3 sm:gap-3 sm:p-4 shadow-soft sm:grid-cols-2">
                <div className="rounded-lg sm:rounded-2xl bg-[#f4e7d3] p-2.5 sm:p-3">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-[#7b5c3d]">
                    <Clock3 className="size-3 sm:size-3.5" />
                    Opening hours
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-lg font-extrabold text-foreground">
                    {SHOP.hours}
                  </p>
                </div>
                <div className="rounded-lg sm:rounded-2xl bg-[#f4e7d3] p-2.5 sm:p-3">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-[#7b5c3d]">
                    <MapPin className="size-3 sm:size-3.5" />
                    Visit us
                  </div>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-lg font-extrabold text-foreground line-clamp-2 sm:line-clamp-none">
                    {SHOP.address}
                  </p>
                </div>
              </div>

              <div className="mt-2.5 grid gap-2 sm:mt-3 sm:gap-3 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.title}
                    className="rounded-lg sm:rounded-2xl border border-[#dec8a0] bg-[#f5ead5]/80 p-2.5 sm:p-3 shadow-soft"
                  >
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#7b5c3d]">
                      {fact.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-foreground">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="home-reveal home-reveal-delay-2 order-1 relative z-10 mt-0 md:order-2 md:mt-0">
              <div className="home-float relative mx-auto aspect-[4/5] max-w-[20rem] overflow-hidden rounded-[2rem] border-[6px] border-white bg-[#f9f1e1] shadow-[0_30px_80px_-30px_rgba(93,57,37,0.32)] ring-1 ring-[#d9d5c6] sm:max-w-[27rem] sm:rounded-[2.5rem]">
                <VideoCarousel />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/15 to-transparent" />
                <div className="absolute left-2 right-2 top-2 sm:left-4 sm:right-4 sm:top-4 z-20 flex items-center justify-between gap-1">
                  <span className="rounded-full border border-[#dec8a0] bg-[#fff7ea]/65 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-overlay-foreground backdrop-blur-sm">
                    Fresh picks today
                  </span>
                  <span className="rounded-full border border-[#dec8a0] bg-[#fff7ea]/65 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-semibold text-overlay-foreground backdrop-blur-sm">
                    Quick pickup
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-20 rounded-2xl sm:rounded-3xl border border-card/20 bg-foreground/35 p-2 sm:p-3.5 text-overlay-foreground shadow-lg backdrop-blur-md">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-overlay-foreground/75">
                    <Star className="size-3 sm:size-3.5 fill-current text-primary flex-shrink-0" />
                    Why people stop here
                  </div>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-lg font-extrabold">
                    Bakery, drinks, pan, and daily essentials
                  </p>
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-sm text-overlay-foreground/80">
                    One stop for quick shopping, fresh treats, and friendly local service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d9c3a0] bg-[#5d3925] py-6 sm:py-8 text-[#fff7ea]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-3 sm:gap-6 sm:px-4 sm:grid-cols-4">
            {shopStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[#fff0d6]/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-8 sm:pt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8bd91] bg-[#f2e4ca] p-5 shadow-soft sm:p-8">
            <div className="pointer-events-none absolute -right-8 -top-12 size-44 rounded-full border-[22px] border-[#e4c58f]/50 sm:size-56" />
            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#7b5c3d]">A little craving check</p>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-[#3f291c] sm:text-3xl">Aaj ka mood kya hai?</h2>
                <p className="mt-1 text-sm text-[#745b43]">Pick your vibe, we’ll take you to the right shelf.</p>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: "Meetha mood", icon: Cookie, slug: "bakery", color: "bg-[#fff7ea]" },
                  { label: "Thanda scene", icon: IceCreamBowl, slug: "drinks", color: "bg-[#f4e7d3]" },
                  { label: "Fresh finish", icon: Leaf, slug: "pan", color: "bg-[#f7efe0]" },
                ].map((mood) => {
                  const Icon = mood.icon;
                  return (
                    <Link key={mood.slug} to="/category/$slug" params={{ slug: mood.slug }} className={`group grid min-w-0 justify-items-center gap-2 rounded-2xl border border-[#d8bd91] ${mood.color} px-3 py-3 text-center text-[#5d3925] transition hover:-translate-y-1 hover:shadow-soft sm:min-w-28 sm:px-4 sm:py-4`}>
                      <span className="grid size-10 place-items-center rounded-full bg-[#5d3925]/10 transition group-hover:rotate-[-8deg] group-hover:scale-110"><Icon className="size-5" /></span>
                      <span className="text-[10px] font-bold sm:text-xs">{mood.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pt-5 sm:pt-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShoppingBasket, title: "Sab kuch paas mein", copy: "Bakery se daily grocery tak", href: "/products", label: "Shop categories" },
              { icon: PartyPopper, title: "Celebration aa rahi?", copy: "Cake availability WhatsApp par poochhein", href: waLink("Birthday cake availability"), label: "Ask about cakes" },
              { icon: MessageCircle, title: "Pehle se order bhejo", copy: "Pickup ke liye items ready karwao", href: waLink(), label: "Message us" },
              { icon: Heart, title: "Local dukaan, apnapan", copy: "Bandol Main Market mein aapka swagat hai", href: SHOP.mapsUrl, label: "Find our shop" },
            ].map((item) => {
              const Icon = item.icon;
              const external = item.href.startsWith("http");
              return (
                <a key={item.title} href={item.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group rounded-2xl border border-[#dec8a0] bg-[#fffaf1] p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-[#5d3925]/10 text-[#5d3925]"><Icon className="size-5" /></span>
                    <ArrowRight className="mt-1 size-4 text-[#987b58] transition group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-extrabold text-[#432d1f]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.copy}</p>
                  <span className="mt-3 inline-block text-xs font-bold text-[#5d3925]">{item.label} →</span>
                </a>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#f2e4ca] px-4 py-3 text-sm text-[#5d3925]">
            <p className="font-semibold"><Clock3 className="mr-2 inline size-4" />Roz khule: {SHOP.hours}</p>
            <button type="button" onClick={() => setShowTodayNote((visible) => !visible)} className="rounded-full border border-[#c8ab7f]/60 bg-white/60 px-3 py-1.5 text-xs font-bold transition hover:bg-white">
              {showTodayNote ? "Hide note" : "Aaj ki tip ✨"}
            </button>
          </div>
          {showTodayNote && <p className="mt-2 rounded-xl border border-[#dec8a0] bg-[#fff7ea] px-4 py-3 text-sm text-[#5d3925]">Cake ya bakery item ke liye aane se pehle WhatsApp par availability poochh lo—pickup aur easy ho jayega.</p>}
        </section>

        <section className="mx-auto max-w-7xl px-3 sm:px-4 py-8 sm:py-14">
          <div className="flex flex-col sm:flex-wrap sm:items-end sm:justify-between gap-3 sm:gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-accent">
                Easy browsing
              </p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-foreground">
                Shop by category
              </h2>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                Explore the core things people stop by for every day.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center justify-center sm:justify-start gap-2 rounded-lg sm:rounded-xl border border-border bg-card px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-foreground shadow-soft w-full sm:w-auto"
            >
              View all products
              <ArrowRight className="size-3.5 sm:size-4" />
            </Link>
          </div>

          <div className="mt-4 sm:mt-8 grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ab7f] hover:shadow-[0_18px_35px_-22px_rgba(93,57,37,0.65)]"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-24 sm:h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-2 sm:p-4">
                  <div className="flex items-center justify-between gap-2 sm:gap-3">
                    <span className="text-xl sm:text-3xl">{c.emoji}</span>
                    <span className="rounded-full bg-secondary px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted-foreground">
                      {c.count}
                    </span>
                  </div>
                  <h3 className="mt-2 sm:mt-3 font-bold text-xs sm:text-base text-foreground">
                    {c.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{c.nameHi}</p>
                  <div className="mt-2 sm:mt-4 flex items-center justify-between text-[9px] sm:text-xs font-semibold">
                    <span className="text-muted-foreground line-clamp-1">Browse full range</span>
                    <span className="text-accent flex-shrink-0">View more</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-[#dec8a0] bg-[#f5ead5] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-3 sm:px-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7b5c3d] sm:text-xs">
                  Fresh today
                </p>
                <h2 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  Offers and easy ordering
                </h2>
              </div>
              <p className="max-w-sm text-xs leading-5 text-muted-foreground sm:text-sm">
                Pickup ke liye order ahead karein. Local delivery availability WhatsApp par confirm
                karein.
              </p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {offers.map((offer) => {
                const Icon = offer.icon;
                return (
                  <div
                    key={offer.title}
                    className="rounded-2xl border border-[#dec8a0] bg-[#fffaf1] p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_-22px_rgba(93,57,37,0.65)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#5d3925] text-[#fff6e8]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b5c3d]">
                          {offer.label}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-extrabold text-foreground">
                          {offer.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">{offer.copy}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-3 sm:px-4 pb-4 sm:pb-6">
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-0 sm:p-1">
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

              <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[#d8bd91] bg-[#fff7ea] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-[#5d3925] text-[#fff6e8]"><WandSparkles className="size-5" /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#7b5c3d]">Aaj ka surprise pick</p>
                    <p className="font-display text-lg font-extrabold text-[#432d1f]">{popular[surpriseIndex]?.name ?? "Kuch tasty try karo"}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setSurpriseIndex((index) => (index + 1 + Math.floor(Math.random() * (popular.length - 1))) % popular.length)} className="inline-flex items-center gap-2 rounded-xl border border-[#c8ab7f] px-3 py-2 text-xs font-bold text-[#5d3925] hover:bg-[#f2e4ca]"><Shuffle className="size-4" /> Surprise me</button>
                  {popular[surpriseIndex] && <a href={waLink(popular[surpriseIndex].name)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#5d3925] px-3 py-2 text-xs font-bold text-[#fff6e8]">Ask on WhatsApp <ArrowRight className="size-4" /></a>}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {popular.map((p) => (
                  <div key={p.id} className="min-w-0">
                    <ProductCard product={p} />
                    <button type="button" onClick={() => setSavedItems((items) => items.includes(p.id) ? items.filter((id) => id !== p.id) : [...items, p.id])} aria-pressed={savedItems.includes(p.id)} className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#dec8a0] bg-[#fffaf1] px-3 py-1.5 text-xs font-bold text-[#5d3925] transition hover:bg-[#f5ead5]">
                      <Heart className={`size-3.5 ${savedItems.includes(p.id) ? "fill-current" : ""}`} /> {savedItems.includes(p.id) ? "Saved" : "Save for later"}
                    </button>
                  </div>
                ))}
              </div>
              {savedItems.length > 0 && <p className="mt-3 text-xs font-semibold text-[#7b5c3d]">{savedItems.length} favorite{savedItems.length > 1 ? "s" : ""} saved for this visit ♥</p>}
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

        <section className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#5d3925] p-5 text-[#fff7ea] shadow-glow sm:p-9">
            <div className="pointer-events-none absolute -right-12 -top-16 size-56 rounded-full border-[28px] border-white/5" />
            <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e6c993]"><Gift className="size-4" /> Make it a little special</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Apna treat moment banao</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/75">Bas mood chuno—hum aapke liye ek chhota sa treat idea taiyaar kar denge. Phir WhatsApp par availability poochh lena.</p>
              </div>
              <div className="rounded-3xl bg-[#fff7ea] p-4 text-[#432d1f] sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7b5c3d]">Treat kiske liye?</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[ ["myself", "Mere liye"], ["friend", "Dost ke liye"], ["family", "Family ke liye"] ].map(([value, label]) => (
                    <button key={value} type="button" onClick={() => setTreatFor(value)} aria-pressed={treatFor === value} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${treatFor === value ? "border-[#5d3925] bg-[#5d3925] text-white" : "border-[#dec8a0] hover:bg-[#f5ead5]"}`}>{label}</button>
                  ))}
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#7b5c3d]">Aaj ka mood</p>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {[ ["sweet", "Meetha", "🍰"], ["chill", "Chilled", "🥤"], ["snack", "Snack time", "🍟"] ].map(([value, label, emoji]) => (
                    <button key={value} type="button" onClick={() => setTreatMood(value)} aria-pressed={treatMood === value} className={`rounded-2xl border p-2 text-center transition ${treatMood === value ? "border-[#5d3925] bg-[#f2e4ca] shadow-soft" : "border-[#dec8a0] hover:bg-[#fffaf1]"}`}><span className="block text-xl">{emoji}</span><span className="mt-1 block text-[10px] font-bold sm:text-xs">{label}</span></button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#f2e4ca] p-3">
                  <div><p className="text-[10px] font-bold uppercase tracking-wide text-[#7b5c3d]">Aapka treat idea</p><p className="font-display font-extrabold">{currentTreat.emoji} {currentTreat.title} <span className="font-sans text-xs font-medium text-[#7b5c3d]">{treatAudience[treatFor]}</span></p></div>
                  <a href={waLink(`${currentTreat.item} ${treatAudience[treatFor]} — please availability confirm karein`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#5d3925] px-4 py-2.5 text-xs font-bold text-white transition hover:brightness-110"><MessageCircle className="size-4" /> WhatsApp par poochhein</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe2] py-14">
          <div className="mx-auto max-w-7xl px-4">
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

        <section className="mx-auto max-w-7xl px-4 pb-4 pt-14">
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
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
        <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid size-12 place-items-center rounded-full bg-[#5d3925] text-white shadow-lg transition hover:scale-105"><MessageCircle className="size-5" /></a>
        {showBackToTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="grid size-10 place-items-center rounded-full border border-[#c8ab7f] bg-[#fff7ea] text-[#5d3925] shadow-lg transition hover:-translate-y-1"><ArrowUp className="size-4" /></button>}
      </div>
    </div>
  );
}
