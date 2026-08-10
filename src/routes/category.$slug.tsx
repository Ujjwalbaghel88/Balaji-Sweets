import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Footer, Header, ProductCard } from "@/components/shop";
import { categories, products, waLink } from "@/data/shop";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.category.name} — Balaji Pan & Bakery Shop`;
    const description = `${loaderData.category.name} (${loaderData.category.nameHi}) available at Balaji Pan & Bakery Shop, Main Market, Bandol. Order on WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/category/${loaderData.category.slug}` },
      ],
      links: [{ rel: "canonical", href: `/category/${loaderData.category.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const list = products.filter((p) => p.category === category.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Link to="/products" className="text-sm font-semibold text-accent">
          ← All products
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-2xl bg-primary text-2xl">
            {category.emoji}
          </span>
          <div>
            <h1 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              {category.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {category.nameHi} · {category.count}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Koi item list mein nahi mila? WhatsApp par poochh lein — stock mein ho sakta hai.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            Ask on WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
