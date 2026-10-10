import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-white/5 bg-ink/70 backdrop-blur-xl"
          : "border-transparent bg-ink/30 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-2 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase()}-link`}
              className="rounded-full px-3 py-1.5 text-sm text-dune transition-colors duration-300 hover:bg-white/5 hover:text-ivory sm:px-4"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-cta-link"
            className="ml-2 hidden rounded-full bg-terra px-4 py-2 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04] active:scale-95 sm:inline-block"
          >
            Let's talk
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ivory transition-colors duration-300 hover:border-terra hover:text-terra sm:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            data-testid="nav-mobile-menu"
            className="overflow-hidden border-b border-white/5 bg-ink/90 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  data-testid={`nav-mobile-${link.label.toLowerCase()}-link`}
                  className="rounded-xl px-4 py-3 font-display text-xl text-ivory transition-colors duration-300 hover:bg-white/5 hover:text-sand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                data-testid="nav-mobile-cta-link"
                className="mt-2 rounded-full bg-terra px-4 py-3 text-center text-sm font-semibold text-ink transition-transform duration-300 active:scale-95"
              >
                Let's talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
