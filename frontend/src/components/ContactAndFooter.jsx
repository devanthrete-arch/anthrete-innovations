import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactAndFooter = () => (
  <footer id="contact" data-testid="contact-section" className="relative px-5 sm:px-8">
    <div className="mx-auto max-w-6xl border-t border-line/70 pt-20 sm:pt-28">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-tight"
      >
        Let's <span className="italic text-terra">talk.</span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mt-5 max-w-md text-base leading-relaxed text-dune sm:text-lg"
      >
        Questions about our ventures, or an idea worth building together? We
        read every message.
      </motion.p>

      <div className="mt-14 grid gap-10 pb-16 sm:grid-cols-2 sm:pb-20 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
            <Mail className="h-4 w-4" /> Email
          </p>
          <a
            href="mailto:hello@anthrete.com"
            data-testid="contact-email-link"
            className="group mt-4 inline-flex items-center gap-3 font-display text-xl italic text-ivory transition-colors duration-300 hover:text-sand sm:text-2xl"
          >
            hello@anthrete.com
            <ArrowUp className="hidden h-4 w-4 rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:inline-block" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        >
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-sand">
            <MapPin className="h-4 w-4" /> Registered office
          </p>
          <address className="mt-4 not-italic text-base leading-relaxed text-ivory/90 sm:text-lg">
            Anthrete Innovations Private Limited
            <br />
            <span className="text-dune">[Registered office address]</span>
            <br />
            <span className="text-dune">[City, State — PIN]</span>
          </address>
        </motion.div>
      </div>

      <div className="flex flex-col items-start justify-between gap-6 border-t border-line/70 py-8 sm:flex-row sm:items-center">
        <p className="text-xs text-dune sm:text-sm">
          © {new Date().getFullYear()} Anthrete Innovations Private Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://mysipstories.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-mysipstories-link"
            className="text-xs text-dune transition-colors duration-300 hover:text-ivory sm:text-sm"
          >
            mySipStories
          </a>
          <a
            href="https://myfingrid.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-myfingrid-link"
            className="text-xs text-dune transition-colors duration-300 hover:text-ivory sm:text-sm"
          >
            myFinGrid
          </a>
          <button
            type="button"
            onClick={() => window.__lenis?.scrollTo(0, { duration: 1.4 }) ?? window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="back-to-top-button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-dune transition-colors duration-300 hover:border-terra hover:text-terra"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default ContactAndFooter;
