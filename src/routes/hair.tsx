// import { createFileRoute } from "@tanstack/react-router";
// import { Scissors, Palette, Droplets, Wand2 } from "lucide-react";
// import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
// import { InnerHero, FeatureGrid, CTAStrip, SectionWrap } from "@/components/site/Sections";
// import hairImg from "@/assets/hair.jpg";
// import salonImg from "@/assets/salon-interior.jpg";

// export const Route = createFileRoute("/hair")({
//   head: () => ({
//     meta: [
//       { title: "Hair Services — Cuts, Color, Spa | Skin & Scissor Salon" },
//       { name: "description", content: "Premium hair services in Vijaynagar, Bangalore — haircuts, color, spa, smoothening and styling." },
//       { property: "og:title", content: "Hair — Skin & Scissor" },
//       { property: "og:description", content: "Haircuts, color, spa and smoothening crafted for shine and shape." },
//       { property: "og:image", content: hairImg },
//     ],
//   }),
//   component: HairPage,
// });

// function HairPage() {
//   return (
//     <PageShell>
//       <InnerHero
//         eyebrow="Hair Studio"
//         title={<>Hair, refined.<br /><span className="italic text-gold-soft">Shape, color, shine.</span></>}
//         description="From clean cuts to global color and deep nourishment — our hair studio crafts looks that move beautifully with you."
//         image={hairImg}
//       />

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Haircuts & Styling" title="Tailored to your face, hair and lifestyle." /></Reveal>
//         <div className="mt-14">
//           <FeatureGrid
//             items={[
//               { icon: Scissors, title: "Signature Cut", desc: "A precision cut designed around your face and hair texture." },
//               { icon: Scissors, title: "Creative Restyle", desc: "Bold reshape with full styling consultation." },
//               { icon: Scissors, title: "Blow-dry Finish", desc: "Salon-grade blow-out for events and shoots." },
//             ]}
//           />
//         </div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <Reveal>
//             <SectionTitle eyebrow="Hair Color" title="Global, balayage, highlights & glosses."
//               description="We use ammonia-light premium color systems for richer tone, healthier hair and lasting shine. Every color starts with a strand test and detailed consultation." />
//             <div className="mt-8 grid grid-cols-2 gap-4">
//               {["Global Color", "Highlights", "Balayage", "Root Touch-up", "Color Gloss", "Color Correction"].map((c) => (
//                 <div key={c} className="border border-border bg-card rounded-xl px-4 py-3 text-sm text-chocolate flex items-center gap-3">
//                   <Palette className="h-4 w-4 text-gold" /> {c}
//                 </div>
//               ))}
//             </div>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <div className="aspect-[4/5] rounded-3xl overflow-hidden">
//               <img src={hairImg} alt="Hair color" className="h-full w-full object-cover" loading="lazy" />
//             </div>
//           </Reveal>
//         </div>
//       </SectionWrap>

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Hair Spa & Repair" title="Deep nourishment, visible repair." /></Reveal>
//         <div className="mt-14">
//           <FeatureGrid
//             items={[
//               { icon: Droplets, title: "Botanical Hair Spa", desc: "Scalp ritual + nourishing mask for shine and softness." },
//               { icon: Droplets, title: "Olaplex Repair", desc: "Bond-rebuilding treatment for damaged or colored hair." },
//               { icon: Droplets, title: "Keratin Care", desc: "Smoothness, frizz control and structural strength." },
//             ]}
//           />
//         </div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <Reveal><SectionTitle center eyebrow="Texture & Smoothening" title="Sleek, smooth, manageable hair." /></Reveal>
//         <div className="mt-14">
//           <FeatureGrid
//             items={[
//               { icon: Wand2, title: "Smoothening", desc: "For softer, more manageable everyday hair." },
//               { icon: Wand2, title: "Keratin Straightening", desc: "Salon-grade frizz control with shine." },
//               { icon: Wand2, title: "Hair Botox", desc: "Restorative treatment for dull, brittle hair." },
//             ]}
//           />
//         </div>
//       </SectionWrap>

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Before & After" title="Transformations from our chair" /></Reveal>
//         <div className="mt-14 grid gap-6 md:grid-cols-3">
//           {[hairImg, salonImg, hairImg].map((img, i) => (
//             <Reveal key={i} delay={i * 0.1}>
//               <div className="relative aspect-[4/5] overflow-hidden rounded-2xl group">
//                 <img src={img} alt="transformation" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent" />
//                 <div className="absolute bottom-0 left-0 p-5 text-cream">
//                   <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold">Before / After</div>
//                   <div className="font-serif text-xl">Hair Transformation</div>
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <CTAStrip title="Book your hair consultation" description="Tell us what you want and we'll craft the cut, color or care that fits." secondaryLabel="View Services" secondaryTo="/services" />
//     </PageShell>
//   );
// }
