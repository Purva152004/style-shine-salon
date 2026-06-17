import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal } from "./PageShell";

export function InnerHero({
  eyebrow,
  title,
  description,
  image,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/40 via-chocolate/50 to-chocolate/80" />
      </motion.div>
      <div className={`relative z-10 h-full flex items-end pb-20 lg:items-center lg:pb-0 ${align === "left" ? "" : "justify-center text-center"}`}>
        <div className={`max-w-3xl px-6 lg:px-10 ${align === "left" ? "lg:pl-20" : ""}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className={`gold-divider ${align === "center" ? "justify-center" : ""}`}>
            {eyebrow}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-5 font-serif text-5xl md:text-7xl text-cream leading-[1]"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-5 text-cream/80 text-lg max-w-xl"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { icon?: React.ComponentType<{ className?: string }>; title: string; desc: string; img?: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`grid gap-6 ${cols}`}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 0.07}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="h-full rounded-2xl border border-border bg-card overflow-hidden group"
          >
            {it.img && (
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            )}
            <div className="p-6">
              {it.icon && (
                <div className="h-12 w-12 rounded-full border border-gold/40 grid place-items-center text-gold mb-4">
                  <it.icon className="h-5 w-5" />
                </div>
              )}
              <h3 className="font-serif text-xl text-chocolate">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}

export function CTAStrip({
  title,
  description,
  primaryLabel = "Contact Us",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="py-24 bg-chocolate text-cream">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <div className="gold-divider justify-center">Schedule</div>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">{title}</h2>
          {description && <p className="mt-4 text-cream/75 max-w-2xl mx-auto">{description}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to={primaryTo} className="btn-gold">{primaryLabel}</Link>
            {secondaryLabel && secondaryTo && (
              <Link to={secondaryTo} className="btn-outline-choc !text-cream !border-cream/60 hover:!bg-cream hover:!text-chocolate">{secondaryLabel}</Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionWrap({
  bg = "background",
  children,
  className,
}: {
  bg?: "background" | "secondary" | "card";
  children: ReactNode;
  className?: string;
}) {
  const bgClass = bg === "secondary" ? "bg-secondary/40" : bg === "card" ? "bg-card" : "bg-background";
  return (
    <section className={`py-24 lg:py-28 ${bgClass} ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}
