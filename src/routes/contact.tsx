import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kedarnath Helicopter Booking | Call +91 82072 26709" },
      { name: "description", content: "Talk to our Kedarnath helicopter booking team. Call or WhatsApp +91 82072 26709 for instant enquiry, availability and pricing." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Get in touch</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Call, WhatsApp or visit — our booking team is available all yatra season.</p>
      </div>

      {/* Big call card */}
      <a href={`tel:${PHONE}`} className="mt-10 block overflow-hidden rounded-3xl bg-[image:var(--gradient-saffron)] p-8 text-white shadow-[var(--shadow-warm)] transition hover:scale-[1.01] sm:p-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
            <Phone className="h-8 w-8" />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/90">Tap to call · 24×7</p>
          <div className="mt-2 font-display text-4xl font-bold sm:text-6xl">{PHONE_DISPLAY}</div>
          <p className="mt-3 max-w-md text-white/90">Instant confirmation · Hindi & English · No call charges</p>
        </div>
      </a>

      {/* WhatsApp + details */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-whatsapp/30 bg-whatsapp/10 p-6 transition hover:bg-whatsapp/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold">WhatsApp Enquiry</div>
            <div className="text-sm text-muted-foreground">Fastest way to get a response</div>
          </div>
        </a>
        <a href="mailto:bookings@kedarnathheli.in" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition hover:bg-muted">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-soft text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-muted-foreground">bookings@kedarnathheli.in</div>
          </div>
        </a>
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-soft text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold">Office</div>
            <div className="text-sm text-muted-foreground">Phata, Rudraprayag<br />Uttarakhand 246171</div>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-soft text-primary">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold">Booking Hours</div>
            <div className="text-sm text-muted-foreground">Mon – Sun · 6:00 AM – 10:00 PM IST</div>
          </div>
        </div>
      </div>
    </section>
  );
}
