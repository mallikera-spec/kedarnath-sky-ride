import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TrustBadges } from "@/components/TrustBadges";
import { WHATSAPP_NUMBER } from "@/lib/contact";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Kedarnath Helicopter Online | Instant Confirmation" },
      { name: "description", content: "Fill the booking enquiry form for Kedarnath helicopter yatra. Choose Phata, Sersi or Guptkashi helipad. Instant confirmation by call or WhatsApp." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", passengers: "1", route: "Phata" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = `Namaste 🙏 New Kedarnath Helicopter Booking Enquiry%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Travel Date:* ${form.date}%0A*Passengers:* ${form.passengers}%0A*Helipad:* ${form.route}`;
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-saffron-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Booking Enquiry
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Book your Kedarnath helicopter</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Fill the form below — our team will confirm availability within 30 minutes.</p>
      </div>

      <div className="mt-8"><TrustBadges /></div>

      {submitted ? (
        <div className="mt-10 rounded-3xl border border-trust/30 bg-trust/10 p-8 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-trust" />
          <h2 className="mt-4 font-display text-2xl font-bold">Enquiry Sent!</h2>
          <p className="mt-2 text-muted-foreground">Your details have been forwarded on WhatsApp. Our team will respond shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <Field label="Full Name" required>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="As per Aadhaar / ID" className="input-base" />
          </Field>
          <Field label="Phone Number" required>
            <input required type="tel" pattern="[0-9+ ]{10,15}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" className="input-base" />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Travel Date" required>
              <input required type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input-base" />
            </Field>
            <Field label="Passengers" required>
              <select value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })} className="input-base">
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? "person" : "persons"}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Preferred Helipad" required>
            <div className="grid gap-2 sm:grid-cols-3">
              {["Phata", "Sersi", "Guptkashi"].map(r => (
                <label key={r} className={`cursor-pointer rounded-xl border-2 p-3 text-center text-sm font-semibold transition ${form.route === r ? "border-primary bg-saffron-soft text-primary" : "border-border bg-background text-foreground/70 hover:border-primary/50"}`}>
                  <input type="radio" name="route" value={r} checked={form.route === r} onChange={(e) => setForm({ ...form, route: e.target.value })} className="sr-only" />
                  {r}
                </label>
              ))}
            </div>
          </Field>

          <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-saffron)] px-6 py-4 text-base font-semibold text-white shadow-[var(--shadow-warm)] disabled:opacity-70">
            {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</> : "Send Enquiry on WhatsApp"}
          </button>
          <p className="text-center text-xs text-muted-foreground">By submitting, you agree to be contacted regarding your booking.</p>
        </form>
      )}

      <style>{`.input-base { width:100%; border-radius:0.75rem; border:1px solid var(--border); background:var(--background); padding:0.75rem 1rem; font-size:1rem; outline:none; transition:border-color .15s, box-shadow .15s; }
      .input-base:focus { border-color: var(--primary); box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent); }`}</style>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      {children}
    </label>
  );
}
