// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Brush, Heart, Crown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
// import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
// import { InnerHero, FeatureGrid, CTAStrip, SectionWrap } from "@/components/site/Sections";
// import bridalImg from "@/assets/bridal.jpg";
// import facialImg from "@/assets/facial.jpg";
// import hairImg from "@/assets/hair.jpg";
// import salonImg from "@/assets/salon-interior.jpg";

// export const Route = createFileRoute("/bridal-makeup")({
//   head: () => ({
//     meta: [
//       { title: "Bridal & Makeup — Skin & Scissor Salon, Bangalore" },
//       { name: "description", content: "Curated bridal, party and photoshoot makeup with luxe pre-bridal packages in Vijaynagar, Bangalore." },
//       { property: "og:title", content: "Bridal & Makeup — Skin & Scissor" },
//       { property: "og:description", content: "Your wedding deserves a calm, refined, luxurious experience." },
//       { property: "og:image", content: bridalImg },
//     ],
//   }),
//   component: BridalPage,
// });

// const GALLERY = [bridalImg, facialImg, hairImg, salonImg, bridalImg, facialImg];

// function BridalPage() {
//   const [idx, setIdx] = useState(0);
//   return (
//     <PageShell>
//       <InnerHero
//         eyebrow="Bridal & Makeup"
//         title={<>For your most<br /><span className="italic text-gold-soft">important moments.</span></>}
//         description="Bridal, party and photoshoot makeup — designed to feel like you, refined."
//         image={bridalImg}
//       />

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Bridal Packages" title="Three curated bridal experiences" /></Reveal>
//         <div className="mt-14 grid gap-6 md:grid-cols-3">
//           {[
//             { name: "Engagement Look", price: "₹12,000", items: ["HD bridal makeup", "Hair styling", "Saree drape", "Premium products"] },
//             { name: "Reception Glam", price: "₹15,000", items: ["Airbrush makeup", "Bridal hair", "Drape & jewellery setting", "Touch-up kit"] },
//             { name: "Wedding Day", price: "₹25,000", items: ["Full bridal makeup", "Hair & accessories", "Saree/Lehenga drape", "Onsite assistance"] },
//           ].map((p, i) => (
//             <Reveal key={p.name} delay={i * 0.1}>
//               <div className="rounded-2xl border border-border bg-card p-8 h-full hover:border-gold/60 transition">
//                 <Crown className="h-6 w-6 text-gold" />
//                 <h3 className="mt-3 font-serif text-2xl text-chocolate">{p.name}</h3>
//                 <div className="mt-2 font-serif text-3xl text-chocolate">{p.price}</div>
//                 <ul className="mt-6 space-y-2 text-sm text-chocolate/80">
//                   {p.items.map((it) => <li key={it} className="flex gap-2"><Sparkles className="h-3.5 w-3.5 text-gold mt-1" /> {it}</li>)}
//                 </ul>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <Reveal><SectionTitle center eyebrow="Party Makeup" title="For every occasion that matters" /></Reveal>
//         <div className="mt-14">
//           <FeatureGrid
//             items={[
//               { icon: Brush, title: "Soft Glam", desc: "Elegant everyday glow for events and dinners." },
//               { icon: Brush, title: "HD Party Look", desc: "Camera-ready finish with full styling." },
//               { icon: Brush, title: "Photoshoot Makeup", desc: "Polished, editorial finish for shoots." },
//             ]}
//           />
//         </div>
//       </SectionWrap>

//       <SectionWrap>
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <Reveal>
//             <div className="aspect-[4/5] rounded-3xl overflow-hidden">
//               <img src={bridalImg} alt="Saree styling" loading="lazy" className="h-full w-full object-cover" />
//             </div>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <SectionTitle eyebrow="Saree Draping & Styling" title="Drapes that hold beautifully, all day."
//               description="Classic Bengali, Nivi, Lehenga-style, dupatta settings — draped with the care of a stylist who has done it a thousand times." />
//             <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-chocolate/85">
//               {["Classic Nivi", "Lehenga Drape", "Bengali Drape", "Dupatta Setting", "Pallu Pleats", "Jewellery Drape"].map((s) => (
//                 <li key={s} className="flex gap-2"><Heart className="h-4 w-4 text-gold mt-0.5" /> {s}</li>
//               ))}
//             </ul>
//           </Reveal>
//         </div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <Reveal><SectionTitle center eyebrow="Trial Session" title="Every bridal look begins with a trial" /></Reveal>
//         <div className="mt-14 grid gap-6 md:grid-cols-4">
//           {[
//             { n: "01", t: "Consultation", d: "Outfit, jewellery and inspiration shared in detail." },
//             { n: "02", t: "Skin Prep", d: "Pre-bridal facials so makeup glides beautifully." },
//             { n: "03", t: "Trial Look", d: "A full trial well before the big day." },
//             { n: "04", t: "Wedding Day", d: "Calm, on-time, perfectly executed." },
//           ].map((s, i) => (
//             <Reveal key={s.n} delay={i * 0.08}>
//               <div className="text-center">
//                 <div className="font-serif text-5xl text-gold/40">{s.n}</div>
//                 <div className="mt-2 font-serif text-xl text-chocolate">{s.t}</div>
//                 <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Bridal Gallery" title="Real brides, real moments" /></Reveal>
//         <div className="mt-12 relative max-w-4xl mx-auto">
//           <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-secondary">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={idx}
//                 src={GALLERY[idx]}
//                 alt={`Bridal ${idx + 1}`}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.7 }}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             </AnimatePresence>
//           </div>
//           <button onClick={() => setIdx((i) => (i - 1 + GALLERY.length) % GALLERY.length)} className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/90 grid place-items-center text-chocolate hover:bg-cream"><ChevronLeft className="h-5 w-5" /></button>
//           <button onClick={() => setIdx((i) => (i + 1) % GALLERY.length)} className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/90 grid place-items-center text-chocolate hover:bg-cream"><ChevronRight className="h-5 w-5" /></button>
//         </div>
//       </SectionWrap>

//       <CTAStrip title="Book your bridal consultation" description="Let's craft an experience that feels calm, confident and unmistakably you." />
//     </PageShell>
//   );
// }
