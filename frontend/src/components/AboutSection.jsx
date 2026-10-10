import { motion } from "framer-motion";

const VALUES = [
  { number: "01", label: "Craft", note: "Details matter more than deadlines" },
  { number: "02", label: "Care", note: "Products that respect their people" },
  { number: "03", label: "Patience", note: "Built to last, not to chase" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => (
  <section
    id="about"
    data-testid="about-section"
    className="relative px-5 py-24 sm:px-8 sm:py-32"
  >
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-start gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-sand sm:text-xs"
      >
        <span className="mt-2 h-px w-10 bg-sand/50" />
        Who we are
      </motion.p>

      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl"
        >
          Anthrete Innovations Private Limited is built on a simple idea —
          great products come from patient craft. We create and nurture
          independent digital ventures, giving each one the focus and freedom
          it needs to become something people genuinely love.
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {VALUES.map((value, index) => (
            <motion.div
              key={value.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + index * 0.12,
              }}
              className="border-t border-line pt-5"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-terra">
                {value.number}
              </p>
              <h3 className="mt-3 font-display text-xl italic text-ivory sm:text-2xl">
                {value.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dune">
                {value.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
