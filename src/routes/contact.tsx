import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Instagram, Clock, Check, Plus, Minus } from "lucide-react";
import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
import { InnerHero, CTAStrip, SectionWrap } from "@/components/site/Sections";
import { BRAND } from "@/lib/site-data";
import salonImg from "@/assets/salon-interior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Skin & Scissor Salon, Vijaynagar Bangalore" },
      { name: "description", content: "Visit, call or book your appointment at Skin & Scissor Salon in Vijaynagar, Bangalore." },
      { property: "og:title", content: "Contact — Skin & Scissor" },
      { property: "og:description", content: "Call +91 97410 29513 or visit us in Vijaynagar, Bangalore." },
      { property: "og:image", content: salonImg },
    ],
  }),
  component: ContactPage,
});

const FAQ = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but appointments ensure your preferred stylist and slot." },
  { q: "How early should I book bridal?", a: "We recommend booking pre-bridal 4–6 weeks ahead and the wedding day 2–3 months ahead." },
  { q: "Are your products safe for sensitive skin?", a: "Yes. We patch-test and curate from globally trusted, dermat-approved brands." },
  { q: "Do you offer home services?", a: "Bridal and select makeup services are available on-location on request." },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onChange = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!/^\d{10,12}$/.test(form.phone.replace(/\D/g, ""))) errs.phone = "Enter a valid phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.service) errs.service = "Select a service";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" });
    }
  };

  const field = "w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-chocolate placeholder:text-muted-foreground outline-none focus:border-gold transition";

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input className={field} placeholder="Full Name *" value={form.name} onChange={(e) => onChange("name", e.target.value)} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>
        <div>
          <input className={field} placeholder="Phone *" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input className={field} placeholder="Email" value={form.email} onChange={(e) => onChange("email", e.target.value)} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <select className={field} value={form.service} onChange={(e) => onChange("service", e.target.value)}>
            <option value="">Service interest *</option>
            <option>Skin / Facial</option>
            <option>Hair</option>
            <option>Bridal & Makeup</option>
            <option>Body & Wellness</option>
            <option>Nails / Hands & Feet</option>
            <option>Consultation</option>
          </select>
          {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
        </div>
      </div>
      <input type="date" className={field} value={form.date} onChange={(e) => onChange("date", e.target.value)} />
      <textarea rows={4} className={field + " resize-none"} placeholder="Tell us a little about what you're looking for…" value={form.message} onChange={(e) => onChange("message", e.target.value)} />
      <button className="btn-gold justify-self-start">Send Request</button>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-chocolate"
          >
            <Check className="h-4 w-4 text-gold" /> Thank you. Our team will reach out shortly to confirm your appointment.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button onClick={onToggle} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-serif text-lg text-chocolate">{q}</span>
        {open ? <Minus className="h-5 w-5 text-gold" /> : <Plus className="h-5 w-5 text-gold" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <PageShell>
      <InnerHero
        eyebrow="Contact"
        title={<>Visit, call, or <span className="italic text-gold-soft">book.</span></>}
        description="We're in Vijaynagar, Bangalore — and we'd love to host you."
        image={salonImg}
      />

      <SectionWrap>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Phone, title: "Call us", value: BRAND.phoneDisplay, href: `tel:${BRAND.phone}` },
            { icon: MapPin, title: "Visit", value: BRAND.address },
            { icon: Instagram, title: "Follow", value: BRAND.instagram, href: BRAND.instagramUrl },
            { icon: Clock, title: "Hours", value: "Mon–Sat · 10am – 9pm" },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <a href={c.href ?? "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block h-full rounded-2xl border border-border bg-card p-7 hover:border-gold/60 transition">
                <div className="h-12 w-12 rounded-full border border-gold/40 grid place-items-center text-gold"><c.icon className="h-5 w-5" /></div>
                <div className="mt-5 text-xs tracking-[0.3em] uppercase text-gold">{c.title}</div>
                <div className="mt-1 font-serif text-lg text-chocolate">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap bg="secondary">
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionTitle eyebrow="Contact Us" title="Tell us what you're dreaming of." description="Share a few details and we'll get back within a few hours." />
            <div className="mt-8"><ContactForm /></div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-border h-full min-h-[420px]">
              <iframe
                title="Skin & Scissor Salon location"
                src="https://www.google.com/maps?q=Vijaynagar%2C+Bangalore&output=embed"
                width="100%" height="100%" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ minHeight: 420, border: 0 }}
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-6 text-center text-sm text-muted-foreground">Skin & Scissor Salon, Vijaynagar, Bangalore</p>
        </Reveal>
      </SectionWrap>

      <SectionWrap>
        <Reveal>
          <div className="rounded-3xl bg-chocolate text-cream p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/15 blur-3xl" />
            <div className="gold-divider justify-center">Quick Booking</div>
            <h3 className="font-serif text-3xl md:text-5xl mt-4">Prefer to talk? We're a call away.</h3>
            <p className="mt-3 text-cream/75">Our team helps you pick the right service and the perfect slot.</p>
            <a href={`tel:${BRAND.phone}`} className="btn-gold mt-8 inline-flex"><Phone className="h-4 w-4" /> Call {BRAND.phoneDisplay}</a>
          </div>
        </Reveal>
      </SectionWrap>

      <SectionWrap bg="secondary">
        <Reveal><SectionTitle center eyebrow="FAQs" title="Things our guests ask" /></Reveal>
        <div className="mt-10 max-w-3xl mx-auto">
          {FAQ.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8">
            <div className="flex items-center gap-4">
              <Instagram className="h-7 w-7 text-gold" />
              <div>
                <div className="font-serif text-2xl text-chocolate">{BRAND.instagram}</div>
                <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Follow our daily moments</div>
              </div>
            </div>
            <div className="flex gap-3">
              <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="btn-outline-choc">Open Instagram</a>
              <a href={`tel:${BRAND.phone}`} className="btn-gold">Call Now</a>
            </div>
          </div>
        </Reveal>
      </SectionWrap>

      <CTAStrip title="See you at the salon" description="A space where self-care becomes a lifestyle." />
    </PageShell>
  );
}
