import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Star,
  Quote,
  ShieldCheck,
  Leaf,
  Award,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Sparkles,
  Users,
} from "lucide-react";
import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
import { LOGO_URL, BRAND } from "@/lib/site-data";
import heroImg from "@/assets/hero.jpg";
import salonImg from "@/assets/salon-interior.jpg";
import facialImg from "@/assets/facial.jpg";
import hairImg from "@/assets/hair.jpg";
import bridalImg from "@/assets/bridal.jpg";
import nailsImg from "@/assets/nails.jpg";
import productsImg from "@/assets/products.jpg";
import sigRadiance from "@/assets/sig-radiance.jpg";
import sigPeels from "@/assets/sig-peels.jpg";
import sigGlassHair from "@/assets/sig-glasshair.jpg";
import promoFacial from "@/assets/promo-facial.jpg";
import promoHair from "@/assets/promo-hair.jpg";
import promoBridal from "@/assets/promo-bridal.jpg";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import reel5 from "@/assets/reel-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
     { title: "Style & Shine Salon — Refined Beauty. Honest Care. Real Results." },
{ name: "description", content: "Premium beauty salon in Vijaynagar, Bangalore offering skin, hair, body, nails, makeup & bridal services." },
{ property: "og:title", content: "Style & Shine Salon" },
      { property: "og:description", content: "A luxury salon experience in Vijaynagar, Bangalore." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});




const VALUES = [
  { icon: ShieldCheck, title: "Trust", desc: "Transparent pricing, ethical products, and honest consultations." },
  { icon: Leaf, title: "Transformation", desc: "Personalised rituals designed around your skin, hair and lifestyle." },
  { icon: Award, title: "Transparency", desc: "Premium brands, hygiene-first protocols, real results." },
];

const TREATMENTS = [
  { tag: "Skin", title: "Signature Glow Facial", desc: "A 75-minute ritual to restore radiance.", img: facialImg },
  { tag: "Hair", title: "Botanical Hair Spa", desc: "Deep nourishment for shine and strength.", img: hairImg },
  { tag: "Bridal", title: "Bridal Luxe Package", desc: "Pre-bridal to wedding day, perfected.", img: bridalImg },
  { tag: "Nails", title: "Couture Manicure", desc: "Hand-finished detail for every occasion.", img: nailsImg },
];

const TESTIMONIALS = [
  { name: "Aanya R.", text: "The most refined salon experience in Bangalore â€” honest advice and real glow afterwards." },
  { name: "Meera S.", text: "My bridal package was flawless. The team made me feel calm, cared for and luxurious." },
  { name: "Priya K.", text: "Hair color & spa here is unmatched. They actually listen and tailor everything." },
];

const WHY_STATS = [
  { value: 3000, suffix: "+", label: "Happy Clients" },
  { value: 11, suffix: "+", label: "Years Expertise" },
  { value: 48, suffix: "/50", label: "Client Rating" },
  { value: 60, suffix: "+", label: "Premium Products" },
];

const WHY_CARDS = [
  {
    icon: Award,
    title: "Expertise",
    description: "Trained professionals with 11+ years of refined experience.",
  },
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "International products and advanced techniques.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description: "Comfortable ambiance and personalised care.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Highest safety standards. Always clean, always safe.",
  },
  {
    icon: Users,
    title: "For Everyone",
    description: "Men · Women · Kids. Complete beauty under one roof.",
  },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="Luxury salon" className="h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/30 via-chocolate/50 to-chocolate/80" />
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="mx-auto h-20 w-20 lg:h-24 lg:w-24 rounded-full overflow-hidden ring-2 ring-gold/60 animate-float"
          >
            <img
  src={LOGO_URL}
  alt="Style & Shine"
  className="h-full w-full object-contain"
  decoding="async"
/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="gold-divider justify-center mt-8"
          >
            Trust · Transformation · Transparency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mt-6 leading-[0.95]"
          >
            Style <span className="italic text-gold-soft">&</span> Shine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-6 text-cream/85 text-lg md:text-xl max-w-xl mx-auto"
          >
            {BRAND.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-gold">Contact Us</Link>
            <Link to="/services" className="btn-outline-choc !text-cream !border-cream/60 hover:!bg-cream hover:!text-chocolate">View Services</Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 text-[0.65rem] tracking-[0.4em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}

const SIGNATURE_PANELS = [
  { label: "Lakme Perfect Radiance", img: sigRadiance, to: "/skin" },
  { label: "K-Sense Peels", img: sigPeels, to: "/skin" },
  { label: "K-Sense Face Rituals", img: facialImg, to: "/skin" },
  { label: "K-Sense Head Rituals", img: hairImg, to: "/hair" },
  { label: "Glass Shine Hair", img: sigGlassHair, to: "/hair" },
];

const OFFERS = [
  {
    img: promoFacial,
    eyebrow: "Glow Ritual",
    title: "Radiance Facial",
    discount: "20% OFF",
    sub: "On all signature facial combos",
    cta: "Book now",
  },
  {
    img: promoHair,
    eyebrow: "Hair Repair",
    title: "Olaplex System",
    discount: "15% OFF",
    sub: "Stronger, healthier hair with bond repair",
    cta: "Explore",
  },
  {
    img: promoBridal,
    eyebrow: "Bridal Studio",
    title: "The Bridal Package",
    discount: "25% OFF",
    sub: "Trial + day-of artistry, booked together",
    cta: "Reserve",
  },
  {
    img: promoFacial,
    eyebrow: "New In",
    title: "Vitamin C Boost",
    discount: "10% OFF",
    sub: "Brightening add-on with any facial",
    cta: "Add on",
  },
];

const REELS = [
  { img: reel1, caption: "Inside a Glow Ritual facial", tag: "Skin" },
  { img: reel2, caption: "Cut & blow-dry, step by step", tag: "Hair" },
  { img: reel3, caption: "Gold smoky eye in 60s", tag: "Makeup" },
  { img: reel4, caption: "Mani-pedi moments", tag: "Nails" },
  { img: reel5, caption: "When your skin still looks tired", tag: "Skin" },
  { img: reel1, caption: "Q&A with our lead artist", tag: "Studio" },
];

function SignatureServices() {
  const [active, setActive] = useState(0);

  return (
   <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <h2 className="text-center font-serif text-3xl md:text-5xl tracking-[0.05em] uppercase text-chocolate">
            Signature Services
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        </Reveal>

        {/* Horizontal accordion */}
        <Reveal>
          <div
            className="mt-14 flex gap-3 lg:gap-4 h-[420px] md:h-[480px] lg:h-[540px]"
            onMouseLeave={() => setActive(0)}
          >
            {SIGNATURE_PANELS.map((p, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={p.label}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  animate={{ flexGrow: isActive ? 4 : 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full overflow-hidden rounded-[24px] cursor-pointer shadow-[0_25px_50px_-25px_rgba(61,35,20,0.45)] flex-1 min-w-0"
                >
                  <img
                    src={p.img}
                    alt={p.label}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive
                        ? "bg-gradient-to-t from-chocolate/85 via-chocolate/20 to-transparent"
                        : "bg-gradient-to-t from-chocolate/70 via-chocolate/30 to-chocolate/10"
                    }`}
                  />

                  {/* Vertical label (collapsed state) */}
                  <div
                    className={`absolute left-4 top-5 bottom-5 flex items-start transition-opacity duration-300 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <span
                      className="font-serif tracking-[0.35em] uppercase text-cream text-xs md:text-sm whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {p.label}
                    </span>
                  </div>

                  {/* Horizontal label + CTA (expanded state) */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: isActive ? 0.25 : 0 }}
                    className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10 pointer-events-none"
                  >
                    <h3 className="font-serif text-xl md:text-3xl lg:text-4xl tracking-[0.08em] uppercase text-cream">
                      {p.label}
                    </h3>
                    <Link
                      to={p.to}
                      className="mt-5 inline-flex items-center gap-2 btn-gold !px-6 !py-3 text-[0.65rem] tracking-[0.3em] pointer-events-auto"
                    >
                      Explore Now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link to="/services" className="btn-gold !px-10 !py-4 tracking-[0.3em]">
              More Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OffersSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const loopOffers = [...OFFERS, ...OFFERS, ...OFFERS];

  const getStep = (el: HTMLDivElement) => {
    const card = el.querySelector<HTMLElement>("[data-offer-card]");
    return card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    const step = getStep(el);
    const total = OFFERS.length;
    const currentSlot = Math.round(el.scrollLeft / step);
    let targetSlot = currentSlot + dir;

    if (targetSlot >= total * 3) {
      el.scrollLeft = step * (total * 2 - 1);
      targetSlot = total * 2;
    }

    if (targetSlot < 0) {
      el.scrollLeft = step * total;
      targetSlot = total - 1;
    }

    el.scrollTo({ left: targetSlot * step, behavior: "smooth" });

    window.setTimeout(() => {
      const finalSlot = Math.round(el.scrollLeft / step);

      if (finalSlot >= total * 2) {
        el.scrollLeft = (finalSlot - total) * step;
      }

      if (finalSlot < total) {
        el.scrollLeft = (finalSlot + total) * step;
      }
    }, 650);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const step = getStep(el);
    el.scrollLeft = step * OFFERS.length;

    const onScroll = () => {
      const w = getStep(el);
      const slot = Math.round(el.scrollLeft / w);
      setPage(slot % OFFERS.length);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="offers" className="relative overflow-hidden bg-background pt-12 pb-14 md:pt-16 md:pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">This Season</p>
          <h2 className="mt-3 font-serif text-4xl text-chocolate md:text-5xl">
            Crafted offers, hand-picked
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            A rotating set of rituals and product bundles, refreshed monthly by our studio team.
          </p>
          <button className="mt-8 rounded-full border border-chocolate bg-background px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-chocolate transition hover:bg-chocolate hover:text-cream">
            View all offers
          </button>
        </div>

        <div className="relative mt-12">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-3 shadow-soft transition hover:bg-secondary active:scale-90 md:block"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 rounded-full border border-border bg-background p-3 shadow-soft transition hover:bg-secondary active:scale-90 md:block"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4"
          >
            {loopOffers.map((o, i) => (
              <article
                key={`${o.title}-${i}`}
                data-offer-card
                style={{ animationDelay: `${(i % OFFERS.length) * 80}ms` }}
                className="offer-card animate-slide-in-right relative w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-soft md:w-[48%] lg:w-[32%]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={o.img} alt={o.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-chocolate">
                    {o.eyebrow}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-serif text-2xl text-chocolate">{o.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{o.sub}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-2xl text-gold">{o.discount}</p>
                    <button className="mt-2 text-[11px] font-medium uppercase tracking-widest text-chocolate hover:underline">
                      {o.cta} →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            {OFFERS.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i === page ? "w-6 bg-chocolate" : "w-1.5 bg-border"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopReels = [...REELS, ...REELS, ...REELS];

  const getStep = (el: HTMLDivElement) => {
    const card = el.querySelector<HTMLElement>("[data-reel-card]");
    return card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    const step = getStep(el);
    const total = REELS.length;
    const currentSlot = Math.round(el.scrollLeft / step);
    let targetSlot = currentSlot + dir;

    if (targetSlot >= total * 3) {
      el.scrollLeft = step * (total * 2 - 1);
      targetSlot = total * 2;
    }

    if (targetSlot < 0) {
      el.scrollLeft = step * total;
      targetSlot = total - 1;
    }

    el.scrollTo({ left: targetSlot * step, behavior: "smooth" });

    window.setTimeout(() => {
      const finalSlot = Math.round(el.scrollLeft / step);

      if (finalSlot >= total * 2) {
        el.scrollLeft = (finalSlot - total) * step;
      }

      if (finalSlot < total) {
        el.scrollLeft = (finalSlot + total) * step;
      }
    }, 650);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = getStep(el) * REELS.length;
  }, []);

  return (
   <section id="instagram" className="relative overflow-hidden bg-[#fae9e2] pt-12 pb-14 md:pt-16 md:pb-16">
   <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <Instagram className="h-6 w-6 text-gold" />
          <h2 className="mt-3 font-serif text-4xl text-chocolate md:text-5xl">
            #StyleAndShine on Instagram
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Tag us in your post-appointment glow — we feature our favourites every week.
          </p>
        </div>

        <div className="relative mt-12">
          <button aria-label="Previous" onClick={() => scrollBy(-1)} className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background p-3 shadow-soft transition hover:bg-secondary active:scale-90 md:block">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button aria-label="Next" onClick={() => scrollBy(1)} className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 rounded-full border border-border bg-background p-3 shadow-soft transition hover:bg-secondary active:scale-90 md:block">
            <ChevronRight className="h-4 w-4" />
          </button>

          <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4">
            {loopReels.map((r, i) => (
              <a key={`${r.tag}-${r.caption}-${i}`} href={BRAND.instagramUrl} data-reel-card style={{ animationDelay: `${(i % REELS.length) * 70}ms` }} className="reel-card animate-slide-in-right relative block aspect-[9/14] w-[60%] flex-shrink-0 snap-start overflow-hidden rounded-2xl bg-card shadow-soft sm:w-[40%] md:w-[24%] lg:w-[18%]">
                <img src={r.img} alt={r.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/75 via-chocolate/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-chocolate">
                  {r.tag}
                </span>
                <div className="absolute inset-x-3 bottom-3">
                  <p className="font-serif text-base leading-tight text-cream">{r.caption}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-cream/80">
                    <Instagram className="h-3 w-3" /> Watch reel
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href={BRAND.instagramUrl} className="btn-gold">
            Follow {BRAND.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
   <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-secondary/40">
   <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <motion.img
                src={salonImg}
                alt="Salon"
                className="h-full w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:right-8 bg-chocolate text-cream rounded-2xl p-6 w-56 shadow-xl">
              <div className="font-serif text-3xl text-gold">10+</div>
              <div className="text-xs tracking-[0.25em] uppercase mt-1">Years of refined craft</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionTitle
            eyebrow="The Salon"
            title="Where self-care becomes a lifestyle."
description="Style & Shine is a sanctuary of refined beauty in Vijaynagar, Bangalore. We blend honest consultations, premium global products and a calm, elegant space — so every visit is more than a service. It is a transformation."          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="btn-gold">Our Story</Link>
            <Link to="/services" className="btn-outline-choc">View Services</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionTitle center eyebrow="Our Values" title="Built on three quiet promises" />
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="text-center px-6 py-10 border border-border rounded-2xl bg-card hover:border-gold/50 transition-colors">
                <div className="mx-auto h-16 w-16 rounded-full border border-gold/40 grid place-items-center text-gold">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-2xl text-chocolate mt-6">{v.title}</h3>
                <div className="mx-auto mt-3 h-px w-10 bg-gold" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceVideo() {
  return (
    <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={salonImg} alt="Salon ambience" className="h-full w-full object-cover ken-burns" />
        <div className="absolute inset-0 bg-chocolate/70" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <Reveal>
            <Quote className="h-10 w-10 text-gold mx-auto" />
            <p className="mt-6 font-serif text-3xl md:text-5xl text-cream leading-tight italic">
              "Beauty is more than a service. It is an experience of care, confidence and self-love."
            </p>
            <div className="mt-8 gold-divider justify-center">The Style & Shine Experience</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedTreatments() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionTitle eyebrow="Featured Treatments" title="Curated rituals from our menu" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group overflow-hidden rounded-2xl bg-card border border-border"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold">{t.tag}</div>
                  <h3 className="font-serif text-xl text-chocolate mt-2">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let raf = 0;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min(1, (time - start) / 1600);
      setN(Math.floor(value * (1 - Math.pow(1 - progress, 3))));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl text-gold md:text-6xl">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-cream/70">
        {label}
      </div>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-chocolate py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold">
            <span className="gold-divider justify-center">
              <span>Why Style &amp; Shine</span>
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-[1.1] text-cream md:text-5xl">
            Quietly exceptional, in every way
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {WHY_STATS.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CARDS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-gold/15 bg-cream/5 p-6 text-center"
            >
              <item.icon className="mx-auto h-6 w-6 text-gold" strokeWidth={1.4} />
              <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-gold">
                {item.title}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-cream/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionTitle center eyebrow="Kind Words" title="Loved by our guests" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-chocolate/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-border text-xs tracking-[0.25em] uppercase text-gold">{t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppointmentCTA() {
  return (
    <section className="py-24 lg:py-32 bg-chocolate text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={productsImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <div className="gold-divider justify-center mb-6">Book your visit</div>
          <h2 className="font-serif text-4xl md:text-6xl">A consultation begins your transformation.</h2>
          <p className="mt-5 text-cream/75 max-w-2xl mx-auto">
            Share a few details and our team will help you craft the perfect appointment — bridal, skin, hair or simply a moment for yourself.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 grid gap-3 sm:grid-cols-[1fr_1fr_auto] max-w-2xl mx-auto"
          >
            <input className="bg-cream/10 border border-cream/20 rounded-full px-5 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-gold" placeholder="Your name" />
            <input className="bg-cream/10 border border-cream/20 rounded-full px-5 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-gold" placeholder="Phone number" />
            <Link to="/contact" className="btn-gold">Book Now</Link>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <PageShell>
      <Hero />
      <SignatureServices />
      <OffersSection />
      <InstagramSection />
      <AboutPreview />
      {/* <Values /> */}
      <ExperienceVideo />
      <FeaturedTreatments />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentCTA />
    </PageShell>
  );
}
