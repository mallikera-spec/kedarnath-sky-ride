import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Plane, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "Kedarnath Helipad Routes — Phata, Sersi, Guptkashi" },
      { name: "description", content: "Compare Kedarnath helicopter routes from Phata, Sersi & Guptkashi helipads. Distance, flight time and what to expect at each helipad." },
    ],
  }),
  component: RoutesPage,
});

const routes = [
  { name: "Phata Helipad", distance: "30 km from Sonprayag", flightTime: "8–10 minutes", desc: "The most popular and busiest helipad on the Kedarnath route. Best connectivity from Rishikesh, Haridwar and Dehradun.", highlight: "Most Popular" },
  { name: "Sersi Helipad", distance: "32 km from Sonprayag", flightTime: "7–9 minutes", desc: "Quieter alternative to Phata with shorter flight time. Great option during peak yatra season when Phata slots fill up.", highlight: "Quick Flight" },
  { name: "Guptkashi Helipad", distance: "47 km from Sonprayag", flightTime: "12–15 minutes", desc: "Located further south but offers more accommodation options nearby. Scenic flight over the Mandakini valley.", highlight: "Scenic Route" },
];

function RoutesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Choose your helipad</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Three trusted helipad options to begin your Kedarnath darshan — pick what suits your route.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {routes.map((r) => (
          <div key={r.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]">
            <span className="absolute right-4 top-4 rounded-full bg-saffron-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">{r.highlight}</span>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-saffron)] text-white shadow-[var(--shadow-warm)]">
              <Plane className="h-7 w-7 -rotate-45" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">{r.name}</h3>
            <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{r.distance}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{r.flightTime} to Kedarnath</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">{r.desc}</p>
            <Link to="/booking" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Book this route <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-saffron-soft p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Not sure which helipad to choose?</h2>
        <p className="mx-auto mt-2 max-w-lg text-muted-foreground">Our team can recommend the best route based on your travel plan, group size and budget.</p>
        <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-saffron)] px-6 py-3 font-semibold text-white shadow-[var(--shadow-warm)]">
          Talk to an expert <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
