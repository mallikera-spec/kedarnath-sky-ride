import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, Clock, Mountain, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-kedarnath.jpg";
import heliImg from "@/assets/helicopter.jpg";
import { TrustBadges } from "@/components/TrustBadges";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const faqs = [
  { q: "How do I book a Kedarnath helicopter ticket?", a: "You can book instantly through our enquiry form, call us at +91 82072 26709, or message on WhatsApp. We confirm seats on the same day." },
  { q: "Which helipads operate to Kedarnath?", a: "Three main helipads — Phata, Sersi, and Guptkashi — all in Rudraprayag district. Phata is the most popular and busiest." },
  { q: "What is the price of Kedarnath helicopter ticket?", a: "Per person round-trip rates start from ₹7,500 depending on the helipad and date. Yatra season rates may vary. Check our pricing page for full details." },
  { q: "How long is the helicopter flight to Kedarnath?", a: "Roughly 7–10 minutes one-way from Phata or Sersi. The full round trip including darshan time is approximately 2 hours." },
  { q: "Is darshan included in the helicopter package?", a: "Yes — our standard package includes priority darshan assistance at the temple after landing at Kedarnath helipad." },
  { q: "What documents are required?", a: "A government-issued photo ID (Aadhaar/Passport/Driving License) is mandatory for all passengers, and a valid Char Dham Yatra registration." },
];

const testimonials = [
  { name: "Rakesh Sharma", city: "Delhi", text: "Booked from Phata last May. Smooth flight, on-time pickup, darshan was beautifully arranged. Highly recommended!", rating: 5 },
  { name: "Priya Iyer", city: "Mumbai", text: "Couldn't have done the trek with my parents. The helicopter ride saved us — friendly staff, transparent pricing.", rating: 5 },
  { name: "Anand Patel", city: "Ahmedabad", text: "Last minute booking and they still confirmed within an hour. Trusted operators, will book again.", rating: 5 },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Kedarnath temple at sunrise with helicopter" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-background" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pt-28 md:pb-28 md:pt-36">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse" /> Yatra Season 2026 · Bookings Open
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            Fly to <span className="text-saffron-soft">Shri Kedarnath</span><br />in just 10 minutes
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">
            Skip the trek. Book your helicopter darshan from Phata, Sersi or Guptkashi helipad with India's most trusted operators.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/booking"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-saffron)] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-warm)] transition-transform hover:scale-[1.02]"
            >
              Book Kedarnath Helicopter
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-10 max-w-2xl">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Clock, title: "10-Minute Flight", text: "From Phata helipad to Kedarnath sanctum — faster than any trek route." },
            { icon: Mountain, title: "Priority Darshan", text: "Skip the queue. Our team arranges priority darshan at the temple." },
            { icon: MapPin, title: "3 Helipad Options", text: "Phata, Sersi & Guptkashi — pick the helipad that suits your route." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-[var(--shadow-warm)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-saffron)] text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-saffron-soft to-card p-2 md:grid-cols-2">
          <img src={heliImg} alt="Helicopter on mountain helipad" loading="lazy" width={1280} height={896} className="h-full w-full rounded-2xl object-cover" />
          <div className="p-6 md:p-10">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">India's most trusted Kedarnath helicopter service</h2>
            <p className="mt-3 text-muted-foreground">DGCA-approved operators · Real-time booking · Transparent pricing · No hidden fees. Over 12,000+ pilgrims served since 2018.</p>
            <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">
              View packages & pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Voices from our pilgrims</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">Real reviews from yatris who flew with us this season.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-0.5 text-saffron">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <div className="mt-4 border-t border-border pt-3 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center font-display text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-[image:var(--gradient-saffron)] p-8 text-center text-white shadow-[var(--shadow-warm)] sm:p-12">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready for your Kedarnath darshan?</h2>
          <p className="mx-auto mt-2 max-w-lg text-white/90">Limited daily slots. Book now to secure your seat for the upcoming yatra season.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary">
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 font-semibold text-white">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}
