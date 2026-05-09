import { ShieldCheck, Zap, Star, Headphones } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Official Operators" },
  { icon: Zap, label: "Instant Booking" },
  { icon: Star, label: "4.9/5 Rated" },
  { icon: Headphones, label: "24×7 Support" },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-saffron-soft text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <span className="text-xs font-semibold leading-tight text-foreground sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
