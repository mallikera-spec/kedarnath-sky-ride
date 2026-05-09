import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

const links = [
  { to: "/", label: "Home" },
  { to: "/booking", label: "Book Now" },
  { to: "/routes", label: "Routes" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-saffron)] text-white shadow-[var(--shadow-warm)]">
            <span className="font-display text-lg font-bold">ॐ</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground">Kedarnath Heli</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Yatra Booking</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 rounded-full bg-[image:var(--gradient-saffron)] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-warm)] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted data-[status=active]:bg-saffron-soft data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-saffron)] px-4 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
