import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Kedarnath Helicopter Price | Per Person Rates & Packages" },
      { name: "description", content: "Transparent Kedarnath helicopter booking prices. Per-person rates from Phata, Sersi & Guptkashi. Family & group packages available." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  { name: "Phata Round-Trip", price: 7500, popular: false, features: ["Round-trip from Phata helipad", "8–10 min flight each way", "Priority temple darshan", "1 hour at Kedarnath", "Govt. ID assistance"] },
  { name: "Sersi Round-Trip", price: 7800, popular: true, features: ["Round-trip from Sersi helipad", "Shorter flight time", "Priority temple darshan", "1 hour at Kedarnath", "Free pickup coordination"] },
  { name: "Guptkashi Round-Trip", price: 8800, popular: false, features: ["Round-trip from Guptkashi", "Scenic 12–15 min flight", "Priority temple darshan", "1.5 hours at Kedarnath", "Hotel assistance"] },
];

const packages = [
  { name: "Family Package (4 pax)", price: "₹28,000", desc: "Round-trip for 4 — saves ₹2,000 vs individual booking" },
  { name: "Group Package (6 pax)", price: "₹42,000", desc: "Charter-style booking for 6 — best per-person value" },
  { name: "Do Dham Combo", price: "Custom", desc: "Kedarnath + Badrinath helicopter combo with stay arrangements" },
];

function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-saffron-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Transparent pricing</span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Helicopter rates & packages</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Per-person round-trip rates. No hidden fees. Prices may vary on peak yatra dates.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`relative rounded-3xl border-2 bg-card p-6 shadow-sm transition hover:shadow-[var(--shadow-warm)] sm:p-8 ${p.popular ? "border-primary shadow-[var(--shadow-warm)]" : "border-border"}`}>
            {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-saffron)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">Most Booked</span>}
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground">₹</span>
              <span className="font-display text-5xl font-bold text-primary">{p.price.toLocaleString("en-IN")}</span>
              <span className="text-sm text-muted-foreground">/person</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm">
              {p.features.map(f => (
                <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-trust" /><span>{f}</span></li>
              ))}
            </ul>
            <Link to="/booking" className={`mt-6 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${p.popular ? "bg-[image:var(--gradient-saffron)] text-white" : "bg-secondary text-foreground hover:bg-saffron-soft"}`}>
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-center font-display text-3xl font-bold">Family & Group Packages</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.map(p => (
            <div key={p.name} className="rounded-2xl border border-border bg-saffron-soft/50 p-6">
              <h3 className="font-bold">{p.name}</h3>
              <div className="mt-1 font-display text-2xl font-bold text-primary">{p.price}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">* Prices indicative. Final rates confirmed at the time of booking based on date and availability. Subject to weather clearance.</p>
    </section>
  );
}
