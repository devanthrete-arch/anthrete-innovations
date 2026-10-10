import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <nav className="flex items-center gap-1 sm:gap-2">
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
      </div>
    </motion.header>
  );
};
