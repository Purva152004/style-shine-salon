// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Instagram, Play } from "lucide-react";
// import { PageShell, Reveal, SectionTitle } from "@/components/site/PageShell";
// import { InnerHero, CTAStrip, SectionWrap } from "@/components/site/Sections";
// import salonImg from "@/assets/salon-interior.jpg";
// import hairImg from "@/assets/hair.jpg";
// import facialImg from "@/assets/facial.jpg";
// import bridalImg from "@/assets/bridal.jpg";
// import nailsImg from "@/assets/nails.jpg";
// import bodyImg from "@/assets/body.jpg";
// import productsImg from "@/assets/products.jpg";
// import heroImg from "@/assets/hero.jpg";

// export const Route = createFileRoute("/gallery")({
//   head: () => ({
//     meta: [
//       { title: "Gallery — Skin & Scissor Salon, Bangalore" },
//       { name: "description", content: "Step inside the Skin & Scissor experience — salon interiors, hair transformations, skin treatments and bridal moments." },
//       { property: "og:title", content: "Gallery — Skin & Scissor" },
//       { property: "og:description", content: "A visual journey through our salon, services and transformations." },
//       { property: "og:image", content: salonImg },
//     ],
//   }),
//   component: GalleryPage,
// });

// function Mason({ images }: { images: string[] }) {
//   return (
//     <div className="columns-2 md:columns-3 gap-4 space-y-4">
//       {images.map((src, i) => (
//         <Reveal key={i} delay={(i % 5) * 0.05}>
//           <motion.div whileHover={{ scale: 1.02 }} className="break-inside-avoid overflow-hidden rounded-2xl">
//             <img src={src} alt="" loading="lazy" className="w-full object-cover" />
//           </motion.div>
//         </Reveal>
//       ))}
//     </div>
//   );
// }

// function GalleryPage() {
//   return (
//     <PageShell>
//       <InnerHero
//         eyebrow="Gallery"
//         title={<>A visual diary of<br /><span className="italic text-gold-soft">real transformations.</span></>}
//         description="Inside our space — and the work we do every day."
//         image={heroImg}
//       />

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="The Space" title="Salon Interiors" /></Reveal>
//         <div className="mt-12"><Mason images={[salonImg, heroImg, productsImg, salonImg, heroImg]} /></div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <Reveal><SectionTitle center eyebrow="Hair" title="Hair Transformations" /></Reveal>
//         <div className="mt-12 grid gap-4 md:grid-cols-3">
//           {[hairImg, hairImg, hairImg, hairImg, hairImg, hairImg].map((src, i) => (
//             <Reveal key={i} delay={i * 0.05}>
//               <div className="aspect-square rounded-2xl overflow-hidden">
//                 <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Skin" title="Skin Treatments" /></Reveal>
//         <div className="mt-12 grid gap-4 md:grid-cols-4">
//           {[facialImg, productsImg, facialImg, nailsImg, facialImg, productsImg, facialImg, nailsImg].map((src, i) => (
//             <Reveal key={i} delay={i * 0.04}>
//               <div className="aspect-[3/4] rounded-2xl overflow-hidden">
//                 <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <Reveal><SectionTitle center eyebrow="Bridal & Makeup" title="Brides & Beauty Moments" /></Reveal>
//         <div className="mt-12"><Mason images={[bridalImg, bridalImg, bridalImg, bridalImg, bridalImg, bridalImg]} /></div>
//       </SectionWrap>

//       <SectionWrap>
//         <Reveal><SectionTitle center eyebrow="Wellness" title="Body & Care" /></Reveal>
//         <div className="mt-12 grid gap-4 md:grid-cols-3">
//           {[bodyImg, nailsImg, productsImg, bodyImg, nailsImg, productsImg].map((src, i) => (
//             <Reveal key={i} delay={i * 0.05}>
//               <div className="aspect-[4/5] rounded-2xl overflow-hidden">
//                 <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <SectionWrap bg="secondary">
//         <Reveal><SectionTitle center eyebrow="Reels" title="@skinandscissorssalon" description="A glimpse from our Instagram" /></Reveal>
//         <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
//           {[hairImg, bridalImg, facialImg, salonImg].map((src, i) => (
//             <Reveal key={i} delay={i * 0.07}>
//               <a href="https://instagram.com/skinandscissorssalon" target="_blank" rel="noreferrer" className="relative aspect-[9/16] rounded-2xl overflow-hidden block group">
//                 <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent" />
//                 <div className="absolute inset-0 grid place-items-center">
//                   <div className="h-14 w-14 rounded-full bg-cream/90 grid place-items-center text-chocolate group-hover:scale-110 transition">
//                     <Play className="h-5 w-5 fill-current ml-0.5" />
//                   </div>
//                 </div>
//                 <div className="absolute bottom-3 left-3 flex items-center gap-2 text-cream text-xs">
//                   <Instagram className="h-4 w-4" /> @skinandscissorssalon
//                 </div>
//               </a>
//             </Reveal>
//           ))}
//         </div>
//       </SectionWrap>

//       <CTAStrip title="Come visit our salon" description="Photos are lovely — but the experience is even better in person." secondaryLabel="Get Directions" secondaryTo="/contact" />
//     </PageShell>
//   );
// }
