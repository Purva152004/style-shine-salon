import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Droplets, Flower2, Sun } from "lucide-react";
import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
import { InnerHero, FeatureGrid, CTAStrip, SectionWrap } from "@/components/site/Sections";
import facialImg from "@/assets/facial.jpg";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/skin")({
  head: () => ({
    meta: [
      { title: "Skin Services — Facials, Cleanups, Rituals | Skin & Scissor" },
      { name: "description", content: "Advanced skin rituals, facials, cleanups and waxing in Vijaynagar, Bangalore." },
      { property: "og:title", content: "Skin — Skin & Scissor" },
      { property: "og:description", content: "Premium skincare rituals for real, lasting glow." },
      { property: "og:image", content: facialImg },
    ],
  }),
  component: SkinPage,
});

function SkinPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Skin Studio"
        title={<>Skin, treated<br /><span className="italic text-gold-soft">with intention.</span></>}
        description="Honest skincare rituals built around your skin's real needs — no false promises, just visible care."
        image={facialImg}
      />

      <SectionWrap>
        <Reveal><SectionTitle center eyebrow="Facials" title="Signature & advanced facials" /></Reveal>
        <div className="mt-14">
          <FeatureGrid
            items={[
              { icon: Sparkles, title: "Glow Facial", desc: "Hydration, brightening and a soft natural glow." },
              { icon: Sparkles, title: "Anti-Ageing Facial", desc: "Targeted firming and fine-line care." },
              { icon: Sparkles, title: "Acne-Care Facial", desc: "Calming, balancing ritual for breakout-prone skin." },
            ]}
          />
        </div>
      </SectionWrap>

      <SectionWrap bg="secondary">
        <Reveal><SectionTitle center eyebrow="Cleanups" title="Quick rituals, big difference" /></Reveal>
        <div className="mt-14">
          <FeatureGrid
            items={[
              { icon: Droplets, title: "Classic Cleanup", desc: "Deep cleanse, exfoliation and hydration in 30 minutes." },
              { icon: Droplets, title: "Brightening Cleanup", desc: "Boosts radiance and evens tone." },
              { icon: Droplets, title: "De-tan Cleanup", desc: "Removes surface tan and dullness." },
            ]}
          />
        </div>
      </SectionWrap>

      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={productsImg} alt="Skin products" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle eyebrow="Advanced Skin Rituals" title="When skin needs more than a facial."
              description="From peels to hydra-rituals, our advanced services target pigmentation, ageing and texture with clinically backed protocols." />
            <ul className="mt-8 space-y-3 text-chocolate/85">
              {["Hydra-facial ritual", "Chemical peels", "Vitamin C infusion", "LED light therapy", "Pigmentation care", "Underarm brightening"].map((s) => (
                <li key={s} className="flex gap-3"><Sparkles className="h-4 w-4 text-gold mt-1" /> {s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionWrap>

      <SectionWrap bg="secondary">
        <Reveal><SectionTitle center eyebrow="Waxing & Essentials" title="Smooth, gentle, refined" /></Reveal>
        <div className="mt-14">
          <FeatureGrid
            items={[
              { icon: Flower2, title: "Roll-on Waxing", desc: "Single-use, hygienic and gentler on skin." },
              { icon: Flower2, title: "Chocolate / Honey Wax", desc: "Soothing options for sensitive areas." },
              { icon: Flower2, title: "Threading & Brow Shape", desc: "Precise brow architecture for your face." },
            ]}
          />
        </div>
      </SectionWrap>

      <SectionWrap>
        <Reveal><SectionTitle center eyebrow="Process" title="How a skin ritual unfolds" /></Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {[
            { n: "01", t: "Skin Analysis", d: "Honest assessment of your skin in our consult room." },
            { n: "02", t: "Cleanse & Prep", d: "Removing buildup so active ingredients can work." },
            { n: "03", t: "Targeted Ritual", d: "Massage, mask and treatment based on your need." },
            { n: "04", t: "Home Routine", d: "Guidance so the glow continues at home." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-serif text-5xl text-gold/40">{s.n}</div>
                <div className="mt-2 font-serif text-xl text-chocolate flex items-center justify-center gap-2"><Sun className="h-4 w-4 text-gold" />{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <CTAStrip title="Book your skin appointment" description="A short consultation is the kindest first step for your skin." />
    </PageShell>
  );
}
