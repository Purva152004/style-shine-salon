import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Scissors, Flower2, Hand, Brush, Heart, Check } from "lucide-react";
import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
import { InnerHero, FeatureGrid, CTAStrip, SectionWrap } from "@/components/site/Sections";
import facialImg from "@/assets/facial.jpg";
import hairImg from "@/assets/hair.jpg";
import bridalImg from "@/assets/bridal.jpg";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Skin, Hair, Body, Nails, Makeup | Skin & Scissor" },
      { name: "description", content: "Premium salon services in Vijaynagar, Bangalore — skin, hair, body, hands & feet, nails, makeup and bridal." },
      { property: "og:title", content: "Services — Skin & Scissor" },
      { property: "og:description", content: "Curated rituals for skin, hair, body and bridal." },
      { property: "og:image", content: facialImg },
    ],
  }),
  component: ServicesPage,
});

const PACKAGES = [
  { name: "Glow Ritual", price: "₹2,800", items: ["Signature facial", "Hand & arm massage", "Brow shaping"] },
  { name: "Hair Revival", price: "₹3,400", items: ["Botanical hair spa", "Stylist haircut", "Blow-dry finish"] },
  { name: "Bridal Pre-Day", price: "₹6,900", items: ["Pre-bridal facial", "Full body polish", "Mani-pedi luxe"] },
];

const PRICING = [
  { service: "Classic Cleanup", price: "₹900" },
  { service: "Signature Facial", price: "₹2,200" },
  { service: "Haircut & Style", price: "₹1,200" },
  { service: "Global Hair Color", price: "₹4,500" },
  { service: "Hair Spa", price: "₹1,800" },
  { service: "Mani + Pedi", price: "₹1,600" },
  { service: "Party Makeup", price: "₹4,000" },
  { service: "Bridal Package", price: "On request" },
];

function ServicesPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Our Services"
        title={<>Rituals for skin,<br /><span className="italic text-gold-soft">hair, body & beyond.</span></>}
        description="Premium care across every service — designed for real, lasting results."
        image={facialImg}
      />

      <SectionWrap>
        <Reveal><SectionTitle center eyebrow="Service Categories" title="Six pillars of refined beauty" /></Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            items={[
              { icon: Sparkles, title: "Skin", desc: "Facials, cleanups, peels and advanced rituals.", img: facialImg },
              { icon: Scissors, title: "Hair", desc: "Cuts, color, spa, smoothening and styling.", img: hairImg },
              { icon: Flower2, title: "Body", desc: "Polishing, waxing, threading and wellness.", img: productsImg },
              { icon: Hand, title: "Hands & Feet", desc: "Manicures, pedicures and deluxe care." },
              { icon: Brush, title: "Nails", desc: "Gel, extensions and bespoke nail art." },
              { icon: Heart, title: "Makeup", desc: "Party, photoshoot, bridal looks.", img: bridalImg },
            ]}
          />
        </div>
      </SectionWrap>

      <SectionWrap bg="secondary">
        <Reveal><SectionTitle center eyebrow="Featured Packages" title="Crafted combinations" /></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full hover:border-gold/50 transition">
                <div className="text-xs tracking-[0.3em] uppercase text-gold">Package</div>
                <h3 className="mt-2 font-serif text-2xl text-chocolate">{p.name}</h3>
                <div className="mt-3 font-serif text-4xl text-chocolate">{p.price}</div>
                <ul className="mt-6 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-chocolate/80">
                      <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <Reveal><SectionTitle center eyebrow="Pricing Highlights" title="A glance at our menu" description="Full menu shared at consultation. All prices indicative." /></Reveal>
        <div className="mt-12 max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {PRICING.map((p, i) => (
            <Reveal key={p.service} delay={i * 0.04}>
              <div className="flex items-center justify-between py-5">
                <span className="font-serif text-lg text-chocolate">{p.service}</span>
                <span className="text-gold tracking-wider">{p.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap bg="secondary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src={productsImg} alt="Products" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle eyebrow="Premium Brands" title="Only the best touches your skin and hair."
              description="We partner with internationally trusted brands — selected for performance, safety and ethics." />
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {["Kérastase", "Olaplex", "Casmara", "Cheryl's", "O3+", "Dermalogica"].map((b) => (
                <div key={b} className="border border-border rounded-xl py-4 px-2 text-xs tracking-[0.2em] uppercase text-chocolate/80 bg-card">{b}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionWrap>

      <SectionWrap>
        <Reveal><SectionTitle center eyebrow="The Process" title="Consult · Treat · Transform" /></Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Consult", d: "A one-on-one to understand your skin, hair and goals." },
            { n: "02", t: "Treat", d: "A curated ritual using premium products and refined technique." },
            { n: "03", t: "Transform", d: "Visible results plus home-care guidance for the long term." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto font-serif text-6xl text-gold/40">{s.n}</div>
                <h3 className="mt-2 font-serif text-2xl text-chocolate">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-xs mx-auto">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <CTAStrip title="Ready for your ritual?" description="Walk in for a consultation, or book ahead to secure your preferred slot." />
    </PageShell>
  );
}
