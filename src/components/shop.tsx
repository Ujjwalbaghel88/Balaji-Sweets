import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SHOP, telLink, waLink, type Product } from "@/data/shop";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/25 bg-foreground shadow-soft backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-lg">🏪</span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-overlay-foreground">
              Balaji Pan & Bakery
            </span>
            <span className="block text-[11px] text-overlay-foreground/65">{SHOP.nameHi}</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/products"
            className="rounded-lg px-2.5 py-1.5 text-overlay-foreground/75 transition-colors hover:bg-card/10 hover:text-overlay-foreground"
            activeProps={{ className: "bg-card/15 text-overlay-foreground" }}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="rounded-lg px-2.5 py-1.5 text-overlay-foreground/75 transition-colors hover:bg-card/10 hover:text-overlay-foreground"
            activeProps={{ className: "bg-card/15 text-overlay-foreground" }}
          >
            Contact
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-lg bg-accent px-3 py-1.5 text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:block"
          >
            WhatsApp
          </a>
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
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-glow transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3">
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
          </div>
        </div>
        <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SHOP.name} · Bandol, MP
        </p>
      </footer>
    </>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-36 w-full object-cover sm:h-44"
        />
        {product.popular ? (
          <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground">
            ⭐ Popular
          </span>
        ) : null}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold text-foreground">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.nameHi}</p>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
          {product.group}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-extrabold text-accent">₹{product.price}</span>
          <a
            href={waLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
