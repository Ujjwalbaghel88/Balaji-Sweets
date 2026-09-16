import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Search, ShoppingBag, X } from "lucide-react";
import { Footer, Header, ProductCard } from "@/components/shop";
import { categories, products, waCartLink } from "@/data/shop";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Products — Balaji Pan & Bakery Shop" },
      {
        name: "description",
        content:
          "Full product list: cakes, pastries, cold drinks, pan, mouth freshener, snacks and grocery with prices in rupees.",
      },
      { property: "og:title", content: "All Products — Balaji Pan & Bakery Shop" },
      {
        property: "og:description",
        content: "Browse every item we stock in Bandol with live prices.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const normalizedQuery = query.trim().toLowerCase();
  const list = products.filter((p) => {
    const matchesCategory = active === "all" || p.category === active;
    const matchesQuery =
      !normalizedQuery ||
      [p.name, p.nameHi, p.group].some((value) => value.toLowerCase().includes(normalizedQuery));
    return matchesCategory && matchesQuery;
  });
  const cartItems = products
    .filter((product) => cart[product.id])
    .map((product) => ({ ...product, quantity: cart[product.id] }));
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const addToCart = (id: string) =>
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  const changeQuantity = (id: string, amount: number) =>
    setCart((current) => {
      const nextQuantity = (current[id] ?? 0) + amount;
      if (nextQuantity <= 0) {
        const next = { ...current };
        delete next[id];
        return next;
      }
      return { ...current, [id]: nextQuantity };
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-3xl font-extrabold text-foreground">All Products</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          सभी प्रोडक्ट्स · prices per piece / pack
        </p>

        <div className="relative mt-6 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search cakes, drinks, snacks..."
            aria-label="Search products"
            className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-10 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {[{ slug: "all", name: "All", emoji: "🛍️" }, ...categories].map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(c.slug)}
              className={
                "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors " +
                (active === c.slug
                  ? "bg-accent text-accent-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground")
              }
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {list.length} item{list.length === 1 ? "" : "s"} found
        </p>
        {list.length ? (
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={() => addToCart(p.id)} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <p className="font-display text-xl font-bold text-foreground">No matching items</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different product or category.
            </p>
          </div>
        )}
      </main>
      {cartCount > 0 ? (
        <aside className="fixed bottom-4 left-3 right-3 z-40 mx-auto max-w-md rounded-2xl border border-border bg-card p-4 shadow-[0_16px_45px_-18px_rgba(0,0,0,0.45)] sm:bottom-5 sm:left-auto sm:right-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent">
                <ShoppingBag className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Your cart</p>
                <p className="text-xs text-muted-foreground">
                  {cartCount} item{cartCount === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <p className="text-lg font-extrabold text-accent">₹{cartTotal}</p>
          </div>
          <div className="mt-3 max-h-32 space-y-2 overflow-y-auto border-y border-border py-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-2 text-xs">
                <span className="min-w-0 truncate text-foreground">{item.name}</span>
                <span className="flex shrink-0 items-center gap-1">
                  <button
                    type="button"
                    onClick={() => changeQuantity(item.id, -1)}
                    aria-label={`Remove one ${item.name}`}
                    className="grid size-6 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground"
                  >
                    <Minus className="size-3" />
                  </button>
                  <span className="w-5 text-center font-bold text-foreground">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => changeQuantity(item.id, 1)}
                    aria-label={`Add one ${item.name}`}
                    className="grid size-6 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground"
                  >
                    <Plus className="size-3" />
                  </button>
                </span>
              </div>
            ))}
          </div>
          <a
            href={waCartLink(cartItems)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Order cart on WhatsApp
          </a>
        </aside>
      ) : null}
      <Footer />
    </div>
  );
}
