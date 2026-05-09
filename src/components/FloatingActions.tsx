import { Phone } from "lucide-react";
import { PHONE, WHATSAPP_URL } from "@/lib/contact";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-end px-4">
      <div className="pointer-events-auto flex flex-col gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl ring-4 ring-whatsapp/20 transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
            <path d="M16.003 3C9.382 3 4 8.383 4 15.003c0 2.385.69 4.61 1.88 6.49L4 29l7.71-1.84a11.94 11.94 0 0 0 4.293.78h.005C22.628 27.94 28 22.557 28 15.94c0-3.207-1.247-6.22-3.514-8.49A11.93 11.93 0 0 0 16.003 3zm0 21.95h-.004a9.97 9.97 0 0 1-5.078-1.39l-.364-.216-4.575 1.092 1.103-4.46-.237-.376a9.95 9.95 0 0 1-1.524-5.297c0-5.5 4.476-9.974 9.98-9.974 2.665 0 5.17 1.04 7.054 2.926a9.91 9.91 0 0 1 2.927 7.052c0 5.5-4.477 9.973-9.98 9.973zm5.471-7.469c-.3-.15-1.775-.876-2.05-.976-.276-.1-.476-.15-.677.15-.2.3-.776.976-.95 1.176-.176.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.892-.795-1.493-1.776-1.668-2.076-.176-.3-.019-.462.131-.612.135-.135.3-.35.45-.526.15-.176.2-.3.3-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.927-2.234-.244-.586-.493-.506-.677-.515l-.577-.011c-.2 0-.526.075-.802.376-.276.3-1.05 1.026-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.117 3.234 5.13 4.534.717.31 1.276.495 1.713.633.72.229 1.376.197 1.894.12.578-.087 1.775-.726 2.026-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35z" />
          </svg>
        </a>
        <a
          href={`tel:${PHONE}`}
          aria-label="Call now"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-saffron)] text-white shadow-2xl ring-4 ring-primary/25 transition-transform hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
