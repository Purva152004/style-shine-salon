import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Leaf, Award, ShieldCheck, Users, Heart, Star } from "lucide-react";
import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
import { InnerHero, FeatureGrid, CTAStrip, SectionWrap } from "@/components/site/Sections";
import salonImg from "@/assets/salon-interior.jpg";
import facialImg from "@/assets/facial.jpg";
import bridalImg from "@/assets/bridal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Skin & Scissor Salon, Vijaynagar Bangalore" },
      { name: "description", content: "Our story, vision and values. Built on Trust, Transformation and Transparency." },
      { property: "og:title", content: "About Skin & Scissor" },
      { property: "og:description", content: "A refined salon experience in Vijaynagar, Bangalore." },
      { property: "og:image", content: salonImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Our Story"
        title={<>Refined beauty,<br /><span className="italic text-gold-soft">honestly crafted.</span></>}
        description="Skin & Scissor is a sanctuary of refined beauty in Vijaynagar, Bangalore — built on trust, transformation and transparency."
        image={salonImg}
      />

      {/* Vision */}
      <SectionWrap>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={bridalImg} alt="Vision" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle
              eyebrow="Our Vision"
              title="A salon where every guest leaves more themselves."
              description="We imagine beauty as a quiet, personal ritual — not a trend. Our vision is to create a space where premium care, ethical products and skilled hands come together to reveal your most confident self."
            />
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { k: "10+", v: "Years of craft" },
                { k: "20k+", v: "Happy guests" },
                { k: "30+", v: "Premium brands" },
                { k: "100%", v: "Hygiene-first" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-gold pl-4">
                  <div className="font-serif text-3xl text-chocolate">{s.k}</div>
                  <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionWrap>

      {/* Values */}
      <SectionWrap bg="secondary">
        <Reveal><SectionTitle center eyebrow="Our Values" title="Three quiet promises" /></Reveal>
        <div className="mt-14">
          <FeatureGrid
            items={[
              { icon: ShieldCheck, title: "Trust", desc: "Transparent pricing and honest consultations on every visit." },
              { icon: Leaf, title: "Transformation", desc: "Personalised rituals that evolve with your skin, hair and life." },
              { icon: Award, title: "Transparency", desc: "Premium products and clear protocols you can always question." },
            ]}
          />
        </div>
      </SectionWrap>

      {/* Why choose us */}
      <SectionWrap>
        <Reveal><SectionTitle center eyebrow="Why Choose Us" title="A higher standard of salon care" /></Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={4}
            items={[
              { icon: Award, title: "Expert Stylists", desc: "Trained in international techniques and continually upskilled." },
              { icon: ShieldCheck, title: "Hygiene First", desc: "Sterilised tools, single-use linens, sanitised stations." },
              { icon: Sparkles, title: "Premium Products", desc: "Curated brands trusted by global salons." },
              { icon: Heart, title: "Personalised Care", desc: "Every guest, every ritual — designed around you." },
            ]}
          />
        </div>
      </SectionWrap>

      {/* Experience */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={salonImg} alt="" className="absolute inset-0 h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-chocolate/70" />
        <div className="relative z-10 h-full grid place-items-center text-center px-6">
          <Reveal>
            <div className="gold-divider justify-center">The Experience</div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl text-cream max-w-3xl">Step into a quieter kind of luxury.</h2>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <SectionWrap bg="secondary">
        <Reveal><SectionTitle center eyebrow="Our Experts" title="The hands behind every transformation" /></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { name: "Ananya Verma", role: "Lead Skin Therapist" },
            { name: "Rohan Iyer", role: "Master Hair Stylist" },
            { name: "Sneha Pillai", role: "Bridal & Makeup Artist" },
          ].map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="rounded-2xl bg-card border border-border p-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-chocolate text-cream font-serif text-3xl grid place-items-center">
                  {m.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <h3 className="mt-5 font-serif text-xl text-chocolate">{m.name}</h3>
                <div className="text-xs tracking-[0.25em] uppercase text-gold mt-1">{m.role}</div>
                <div className="mt-4 flex justify-center gap-1 text-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrap>

      <CTAStrip title="Book your beauty experience" description="A consultation is the first step of every transformation." secondaryLabel="View Services" secondaryTo="/services" />
    </PageShell>
  );
}
