import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { LOGO_URL, NAV_LINKS, BRAND } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Always use a solid readable background — transparent over hero made nav unreadable.
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-chocolate/95 backdrop-blur-xl border-b ${
        scrolled ? "border-gold/30 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0 group">
            <div className="relative h-11 w-11 lg:h-12 lg:w-12 rounded-full overflow-hidden bg-black ring-1 ring-gold/70 transition-transform duration-500 group-hover:scale-105 shrink-0">
  <img
  src={LOGO_URL}
  alt="Style & Shine"
  className="absolute inset-0 h-full w-full object-contain"
  decoding="async"
/>
</div>
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-serif text-base lg:text-lg text-cream tracking-wide truncate">
                {BRAND.name}
              </span>
              <span className="text-[0.55rem] tracking-[0.3em] uppercase text-gold">
                Salon · Bangalore
              </span>
            </div>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center justify-center gap-6 min-w-0">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative text-[0.72rem] tracking-[0.2em] uppercase transition-colors py-1 whitespace-nowrap ${
                    active ? "text-gold" : "text-cream/85 hover:text-gold"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-gold transition-all duration-500 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0 justify-self-end">
            <a
              href={`tel:${BRAND.phone}`}
              className="hidden xl:inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-cream/80 hover:text-gold transition"
            >
              <Phone className="h-3.5 w-3.5" /> {BRAND.phoneDisplay}
            </a>
            <Link to="/contact" className="hidden sm:inline-flex btn-gold !py-2.5 !px-5 !text-xs">
              Contact Us
            </Link>
            <button
              aria-label="Menu"
              className="lg:hidden p-2 text-cream"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-chocolate/98 backdrop-blur-xl border-t border-gold/20"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    className={`block py-3 border-b border-cream/10 text-sm tracking-[0.2em] uppercase ${
                      pathname === l.to ? "text-gold" : "text-cream"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-gold mt-5 self-start">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
