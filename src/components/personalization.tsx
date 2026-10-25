import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import { Bold, Italic, List, Plus, Trash2, Underline } from "lucide-react";
import { products } from "@/data/shop";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

type Note = { id: string; title: string; body: string; tag: string; updatedAt: number };
const NOTE_KEY = "balaji-notes-v1";
const TAGS = ["General", "Orders", "Ideas", "Reminders"];
const COLORS = ["#8b5e3c", "#d4a373", "#6f8f72", "#d98b62"];

const chartConfig = {
  count: { label: "Products", color: "#8b5e3c" },
  value: { label: "Catalog value (₹)", color: "#d4a373" },
} satisfies ChartConfig;

const catalogByCategory = Object.values(
  products.reduce<Record<string, { category: string; count: number; value: number }>>((result, product) => {
    const row = result[product.category] ?? { category: product.category, count: 0, value: 0 };
    row.count += 1;
    row.value += product.price;
    result[product.category] = row;
    return result;
  }, {}),
);

function formatNote(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
    if (part.startsWith("__") && part.endsWith("__")) return <u key={index}>{part.slice(2, -2)}</u>;
    return part;
  });
}

export function Personalization() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState(TAGS[0]);
  const [filter, setFilter] = useState("All");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(NOTE_KEY);
      if (stored) setNotes(JSON.parse(stored) as Note[]);
    } catch {
      setNotes([]);
    }
  }, []);

  const saveNotes = (nextNotes: Note[]) => {
    setNotes(nextNotes);
    window.localStorage.setItem(NOTE_KEY, JSON.stringify(nextNotes));
  };

  const formatSelection = (marker: "**" | "*" | "__") => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = body.slice(start, end);
    const replacement = selected ? `${marker}${selected}${marker}` : `${marker}${marker}`;
    const nextBody = `${body.slice(0, start)}${replacement}${body.slice(end)}`;
    setBody(nextBody);
    requestAnimationFrame(() => {
      textarea.focus();
      const cursor = selected ? start + replacement.length : start + marker.length;
      textarea.setSelectionRange(cursor, cursor);
    });
  };

  const addBullet = () => setBody((current) => `${current}${current && !current.endsWith("\n") ? "\n" : ""}• `);

  const addNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;
    saveNotes([{ id: crypto.randomUUID(), title: title.trim(), body: body.trim(), tag, updatedAt: Date.now() }, ...notes]);
    setTitle("");
    setBody("");
    setTag(TAGS[0]);
  };

  const visibleNotes = useMemo(() => filter === "All" ? notes : notes.filter((note) => note.tag === filter), [filter, notes]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12" aria-labelledby="personalization-title">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Your workspace</p>
        <h2 id="personalization-title" className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">Shop dashboard & notes</h2>
        <p className="mt-1 text-sm text-muted-foreground">Catalog insights and private notes saved in this browser.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-3xl border border-border bg-card p-4 shadow-soft sm:p-6">
          <h3 className="font-display text-xl font-extrabold text-foreground">Catalog overview</h3>
          <p className="mt-1 text-xs text-muted-foreground">Products listed and sum of listed prices by category. This is catalog data, not sales analytics.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-[1.4fr_0.8fr]">
            <ChartContainer config={chartConfig} className="h-64 w-full aspect-auto">
              <BarChart data={catalogByCategory} margin={{ left: -16, right: 8, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="category" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ChartContainer>
            <ChartContainer config={chartConfig} className="h-64 w-full aspect-auto">
              <PieChart>
                <Tooltip content={<ChartTooltipContent nameKey="category" />} />
                <Pie data={catalogByCategory} dataKey="value" nameKey="category" innerRadius={48} outerRadius={82} paddingAngle={3}>
                  {catalogByCategory.map((row, index) => <Cell key={row.category} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-card p-4 shadow-soft sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-extrabold text-foreground">Quick notes</h3>
              <p className="mt-1 text-xs text-muted-foreground">Format text with **bold**, *italic*, __underline__, or bullets.</p>
            </div>
            <select aria-label="Filter notes by tag" value={filter} onChange={(event) => setFilter(event.target.value)} className="h-9 rounded-lg border border-input bg-background px-2 text-sm text-foreground">
              {["All", ...TAGS].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <form onSubmit={addNote} className="mt-4 grid gap-2">
            <input value={title} onChange={(event) => setTitle(event.target.value)} required maxLength={80} placeholder="Note title" aria-label="Note title" className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground" />
            <div className="flex gap-1 rounded-t-lg border border-input border-b-0 bg-secondary/50 p-1">
              <button type="button" onClick={() => formatSelection("**")} aria-label="Bold" title="Bold" className="grid size-8 place-items-center rounded hover:bg-background"><Bold className="size-4" /></button>
              <button type="button" onClick={() => formatSelection("*")} aria-label="Italic" title="Italic" className="grid size-8 place-items-center rounded hover:bg-background"><Italic className="size-4" /></button>
              <button type="button" onClick={() => formatSelection("__")} aria-label="Underline" title="Underline" className="grid size-8 place-items-center rounded hover:bg-background"><Underline className="size-4" /></button>
              <button type="button" onClick={addBullet} aria-label="Add bullet" title="Add bullet" className="grid size-8 place-items-center rounded hover:bg-background"><List className="size-4" /></button>
            </div>
            <textarea ref={textareaRef} value={body} onChange={(event) => setBody(event.target.value)} required maxLength={2000} rows={4} placeholder="Write a note…" aria-label="Note content" className="resize-y rounded-b-lg border border-input bg-background px-3 py-2 text-sm text-foreground" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <select aria-label="Note category" value={tag} onChange={(event) => setTag(event.target.value)} className="h-9 rounded-lg border border-input bg-background px-2 text-sm text-foreground">
                {TAGS.map((item) => <option key={item}>{item}</option>)}
              </select>
              <button type="submit" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-accent px-3 text-sm font-bold text-accent-foreground"><Plus className="size-4" /> Save note</button>
            </div>
          </form>
          <div className="mt-4 max-h-64 space-y-2 overflow-y-auto">
            {visibleNotes.length === 0 && <p className="rounded-xl border border-dashed border-border p-4 text-center text-sm text-muted-foreground">No notes yet. Add one above.</p>}
            {visibleNotes.map((note) => (
              <article key={note.id} className="rounded-xl border border-border bg-background p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold text-foreground">{note.title}</h4>
                    <span className="mt-1 inline-block rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground">{note.tag}</span>
                  </div>
                  <button type="button" onClick={() => saveNotes(notes.filter((item) => item.id !== note.id))} aria-label={`Delete ${note.title}`} className="grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive"><Trash2 className="size-4" /></button>
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-5 text-muted-foreground">{formatNote(note.body)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
