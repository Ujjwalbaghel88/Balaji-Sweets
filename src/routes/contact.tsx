import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Instagram, MessageCircle, Send } from "lucide-react";
import { Footer, Header, useLanguage } from "@/components/shop";
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
  const { language } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error" | "setup">("idle");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
    if (!endpoint) {
      setFormState("setup");
      return;
    }

    setFormState("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Contact form submission failed");
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {language === "en" ? "Contact & Location" : "संपर्क और स्थान"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">हमसे संपर्क करें</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div data-scroll-reveal className="rounded-3xl border border-border/80 bg-card p-7 shadow-soft sm:p-9">
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

          <section data-scroll-reveal className="rounded-3xl border border-border/80 bg-card p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-foreground">
              {language === "en" ? "Send us a message" : "हमें संदेश भेजें"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {language === "en" ? "We’ll get back to you as soon as we can." : "हम जल्द ही आपसे संपर्क करेंगे।"}
            </p>
            <form onSubmit={submitContact} className="mt-5 grid gap-4">
              <label className="grid gap-1.5 text-sm font-semibold text-foreground">
                {language === "en" ? "Your name" : "आपका नाम"}
                <input required name="name" autoComplete="name" className="h-11 rounded-xl border border-input bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold text-foreground">
                {language === "en" ? "Email address" : "ईमेल पता"}
                <input required type="email" name="email" autoComplete="email" className="h-11 rounded-xl border border-input bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold text-foreground">
                {language === "en" ? "Message" : "संदेश"}
                <textarea required name="message" rows={4} className="resize-y rounded-xl border border-input bg-background px-3 py-2 font-normal outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <button type="submit" disabled={formState === "sending"} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-bold text-accent-foreground disabled:opacity-60">
                <Send className="size-4" />
                {formState === "sending" ? "Sending…" : language === "en" ? "Send message" : "संदेश भेजें"}
              </button>
              {formState !== "idle" && (
                <p role="status" className="text-sm text-muted-foreground">
                  {formState === "sent" && (language === "en" ? "Thanks! Your message has been sent." : "धन्यवाद! आपका संदेश भेज दिया गया है।")}
                  {formState === "sending" && (language === "en" ? "Sending your message…" : "आपका संदेश भेजा जा रहा है…")}
                  {formState === "error" && (language === "en" ? "We couldn’t send that message. Please try WhatsApp or call us." : "संदेश नहीं भेजा जा सका। कृपया व्हाट्सऐप करें या कॉल करें।")}
                  {formState === "setup" && (language === "en" ? "The form is ready. Add VITE_FORMSPREE_ENDPOINT to your environment to enable email delivery." : "फ़ॉर्म तैयार है। ईमेल भेजने के लिए VITE_FORMSPREE_ENDPOINT सेट करें।")}
                </p>
              )}
            </form>
            <div className="mt-5 flex gap-3 border-t border-border pt-4">
              <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full border border-border text-foreground hover:bg-secondary"><MessageCircle className="size-4" /></a>
              {import.meta.env.VITE_INSTAGRAM_URL && (
                <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-border text-foreground hover:bg-secondary"><Instagram className="size-4" /></a>
              )}
            </div>
          </section>

          <div data-scroll-reveal className="grid gap-4">
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
