import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-saffron)] text-white">
              <span className="font-display text-lg font-bold">ॐ</span>
            </div>
            <div className="font-display text-lg font-bold">Kedarnath Heli Yatra</div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Trusted helicopter booking for Shri Kedarnath Dham. Departures from Phata, Sersi & Guptkashi helipads.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/booking" className="hover:text-primary">Book Now</Link></li>
            <li><Link to="/routes" className="hover:text-primary">Helipad Routes</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Pricing & Packages</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get in Touch</h4>
          <ul className="mt-3 space-y-3 text-sm">
            <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 text-foreground hover:text-primary"><Phone className="h-4 w-4" />{PHONE_DISPLAY}</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary"><MessageCircle className="h-4 w-4" />WhatsApp Enquiry</a></li>
            <li className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" />Phata, Rudraprayag, Uttarakhand</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kedarnath Heli Yatra · Booking Enquiry Portal · Har Har Mahadev 🙏
      </div>
    </footer>
  );
}
