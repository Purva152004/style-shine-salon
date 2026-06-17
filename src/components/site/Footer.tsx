import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock, Mail, Send } from "lucide-react";
import { LOGO_URL, NAV_LINKS, BRAND } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-chocolate text-cream relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
           <div className="h-14 w-14 rounded-full overflow-hidden bg-black ring-1 ring-gold/70">
  <img
  src={LOGO_URL}
  alt="Style & Shine"
  className="h-full w-full object-contain"
  decoding="async"
/>
</div>
            <div>
              <div className="font-serif text-2xl">{BRAND.name}</div>
              <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold">Bangalore</div>
            </div>
          </div>
          <p className="mt-6 text-cream/70 text-sm leading-relaxed max-w-sm">
            {BRAND.tagline} A premium salon experience where self-care becomes a lifestyle.
          </p>
          <div className="mt-6 flex gap-2 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
            {BRAND.values.map((v, i) => (
              <span key={v} className="flex items-center gap-2">
                {v}
                {i < BRAND.values.length - 1 && <span className="text-gold/40">·</span>}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            {["Skin", "Hair", "Body", "Hands & Feet", "Nails", "Makeup", "Bridal"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Visit & Connect</h4>
          <ul className="space-y-4 text-sm text-cream/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {BRAND.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href={`tel:${BRAND.phone}`} className="hover:text-gold">{BRAND.phoneDisplay}</a></li>
            <li className="flex gap-3"><Instagram className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-gold">{BRAND.instagram}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                {BRAND.hours.map((h) => (
                  <div key={h.day}>{h.day}: {h.time}</div>
                ))}
              </div>
            </li>
          </ul>

          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="mt-6 flex items-center gap-2 border-b border-gold/30 pb-2"
          >
            <Mail className="h-4 w-4 text-gold" />
            <input
              type="email"
              placeholder="Subscribe to our beauty letter"
              className="flex-1 bg-transparent outline-none text-sm text-cream placeholder:text-cream/40"
            />
            <button className="text-gold hover:text-cream transition"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.</div>
          <div className="tracking-[0.25em] uppercase">Trust · Transformation · Transparency</div>
        </div>
      </div>
    </footer>
  );
}
