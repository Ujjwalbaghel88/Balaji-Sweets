import { Link } from "@tanstack/react-router";
import { Github, Instagram, Languages, MessageCircle, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { SHOP, telLink, waLink, type Product } from "@/data/shop";

export function useLanguage() {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  useEffect(() => {
    const syncLanguage = () => {
      const savedLanguage = window.localStorage.getItem("balaji-language");
      const nextLanguage = savedLanguage === "hi" ? "hi" : "en";
      document.documentElement.lang = nextLanguage;
      setLanguage(nextLanguage);
    };
    syncLanguage();
    window.addEventListener("balaji-language-change", syncLanguage);
    return () => window.removeEventListener("balaji-language-change", syncLanguage);
  }, []);

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "hi" : "en";
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("balaji-language", nextLanguage);
    setLanguage(nextLanguage);
    window.dispatchEvent(new Event("balaji-language-change"));
  };

  return { language, toggleLanguage };
}

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("balaji-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("balaji-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 shadow-soft backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="grid size-8 sm:size-9 place-items-center rounded-xl bg-accent text-lg sm:text-lg shadow-soft">
            🏪
          </span>
          <span className="leading-tight hidden sm:block">
            <span className="block text-xs sm:text-sm font-extrabold text-foreground">
              Balaji Pan & Bakery
            </span>
            <span className="block text-[9px] sm:text-[11px] text-muted-foreground">
              {SHOP.nameHi}
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 text-xs font-medium sm:gap-1 sm:text-sm">
          <Link
            to="/products"
            className="rounded-lg px-2 py-1.5 sm:px-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-secondary text-foreground" }}
          >
            {language === "en" ? "Products" : "उत्पाद"}
          </Link>
          <Link
            to="/contact"
            className="rounded-lg px-2 py-1.5 sm:px-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            activeProps={{ className: "bg-secondary text-foreground" }}
          >
            {language === "en" ? "Contact" : "संपर्क"}
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-lg bg-accent px-2.5 py-1.5 sm:px-3 text-xs sm:text-sm text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:block"
          >
            {language === "en" ? "WhatsApp" : "व्हाट्सऐप"}
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="ml-1 grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={language === "en" ? "Switch language to Hindi" : "Switch language to English"}
            className="ml-1 inline-flex h-9 shrink-0 items-center gap-1 rounded-lg border border-border bg-card px-2 text-xs font-bold text-foreground transition-colors hover:bg-secondary"
          >
            <Languages className="size-3.5" /> {language === "en" ? "हि" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        title="Order on WhatsApp"
        aria-label="Order on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 grid size-12 sm:size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-glow transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5 sm:size-6" />
      </a>
      <footer className="mt-12 sm:mt-16 border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-4 px-3 sm:gap-6 sm:px-4 py-8 sm:py-10 sm:grid-cols-3">
          <div>
            <h2 className="text-base font-extrabold text-foreground">{SHOP.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{SHOP.nameHi}</p>
            <p className="mt-3 text-sm text-muted-foreground">{SHOP.address}</p>
            <p className="text-sm text-muted-foreground">Open daily {SHOP.hours}</p>
          </div>
          <div className="text-sm">
            <h3 className="font-bold text-foreground">Categories</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  to="/category/$slug"
                  params={{ slug: "bakery" }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Bakery & Cakes
                </Link>
              </li>
              <li>
                <Link
                  to="/category/$slug"
                  params={{ slug: "drinks" }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Cold Drinks
                </Link>
              </li>
              <li>
                <Link
                  to="/category/$slug"
                  params={{ slug: "pan" }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pan Corner
                </Link>
              </li>
              <li>
                <Link
                  to="/category/$slug"
                  params={{ slug: "grocery" }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Grocery
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-accent px-4 py-2 text-center font-semibold text-accent-foreground"
            >
              WhatsApp
            </a>
            <a
              href={telLink}
              className="rounded-xl bg-primary px-4 py-2 text-center font-semibold text-primary-foreground"
            >
              Call Now
            </a>
            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border px-4 py-2 text-center font-semibold text-foreground"
            >
              Location
            </a>
            <div className="flex items-center justify-center gap-3 pt-2" aria-label="Social links">
              <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                <MessageCircle className="size-4" />
              </a>
              {import.meta.env.VITE_INSTAGRAM_URL && (
                <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  <Instagram className="size-4" />
                </a>
              )}
              {import.meta.env.VITE_GITHUB_URL && (
                <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                  <Github className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
        <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SHOP.name} · Bandol, MP
        </p>
      </footer>
    </>
  );
}

export function ProductCard({ product, onAdd }: { product: Product; onAdd?: () => void }) {
  return (
    <article className="overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-36 w-full object-cover sm:h-44 lg:h-52"
        />
        {product.popular ? (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-foreground shadow-sm backdrop-blur">
            ⭐ Popular
          </span>
        ) : null}
      </div>
      <div className="p-3.5 sm:p-4">
        <h3 className="text-sm sm:text-base font-bold text-foreground line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground">{product.nameHi}</p>
        <p className="mt-0.5 sm:mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">
          {product.group}
        </p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-base sm:text-lg font-extrabold text-accent">₹{product.price}</span>
          {onAdd ? (
            <button
              type="button"
              onClick={onAdd}
              className="rounded-lg bg-accent px-2.5 py-1.5 sm:px-3 text-[10px] sm:text-xs font-semibold text-accent-foreground whitespace-nowrap"
            >
              Add to cart
            </button>
          ) : (
            <a
              href={waLink(product.name)}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-accent px-2.5 py-1.5 sm:px-3 text-[10px] sm:text-xs font-semibold text-accent-foreground whitespace-nowrap"
            >
              Order
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
