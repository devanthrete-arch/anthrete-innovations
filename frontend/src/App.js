import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EditorialMarquee from "@/components/EditorialMarquee";
import AboutSection from "@/components/AboutSection";
import VenturesBentoGrid from "@/components/VenturesBentoGrid";
import ContactAndFooter from "@/components/ContactAndFooter";

const GrainOverlay = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-[5] opacity-[0.16] mix-blend-soft-light"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    }}
  />
);

function App() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -72, duration: 1.4 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-ink font-body text-ivory antialiased">
        <GrainOverlay />
        <Header />
        <main>
          <HeroSection />
          <EditorialMarquee />
          <AboutSection />
          <VenturesBentoGrid />
          <ContactAndFooter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
