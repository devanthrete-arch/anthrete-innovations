import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const LINE_EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: LINE_EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const DriftingOrb = ({ className, driftX, driftY, duration, parallaxY, delay = 0 }) => (
  <motion.div
    aria-hidden="true"
    className={className}
    style={{ y: parallaxY }}
    animate={{ x: driftX, y: [0, driftY, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbFarY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const orbNearY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      data-testid="hero-section"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-20 pt-28 sm:px-8"
    >
      <DriftingOrb
        className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-terra/15 blur-[130px]"
        driftX={50}
        driftY={-40}
        duration={16}
        parallaxY={orbFarY}
      />
      <DriftingOrb
        className="absolute -right-24 top-1/2 h-[22rem] w-[22rem] rounded-full bg-sand/10 blur-[120px]"
        driftX={-40}
        driftY={35}
        duration={13}
        parallaxY={orbNearY}
        delay={2}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: LINE_EASE, delay: 0.35 }}
          className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-sand sm:text-xs"
        >
          <span className="h-px w-10 bg-sand/50" />
          Anthrete Innovations Private Limited
        </motion.p>

        <h1 className="font-display text-[clamp(2.9rem,8.5vw,6.6rem)] font-medium leading-[1.04] tracking-tight">
          <MaskedLine delay={0.45}>Many ventures,</MaskedLine>
          <MaskedLine delay={0.58}>one promise —</MaskedLine>
          <MaskedLine delay={0.71} className="italic text-terra">
            products that feel human.
          </MaskedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: LINE_EASE, delay: 1.0 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-dune sm:text-lg"
        >
          We are a parent company that creates and nurtures independent digital
          products — giving each venture the care, focus and room to grow it
          deserves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: LINE_EASE, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#ventures"
            data-testid="hero-cta-ventures"
            className="group inline-flex items-center gap-2 rounded-full bg-terra px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04] active:scale-95"
          >
            Explore our ventures
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            data-testid="hero-cta-contact"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ivory transition-colors duration-300 hover:border-terra/60 hover:text-sand"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-dune"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
