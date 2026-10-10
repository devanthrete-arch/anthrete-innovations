import { motion } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";

const SIP_STORIES_BG =
  "https://images.unsplash.com/photo-1609083590460-7b8cc0ca65f8?crop=entropy&cs=srgb&fm=jpg&q=85";
const FIN_GRID_BG =
  "https://images.unsplash.com/photo-1631477076114-9123f721b9dc?crop=entropy&cs=srgb&fm=jpg&q=85";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const LiveBadge = () => (
  <span className="inline-flex items-center gap-2 rounded-full border border-terra/40 bg-terra/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-terra backdrop-blur-md">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terra opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-terra" />
    </span>
    Live
  </span>
);

const LiveVentureCard = ({ venture, className = "" }) => (
  <motion.a
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: venture.delay }}
    href={venture.url}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={`venture-card-${venture.id}`}
    className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-line/80 bg-coal p-7 transition-colors duration-500 hover:border-terra/50 sm:p-9 ${className}`}
  >
    <img
      src={venture.bg}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <LiveBadge />
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-all duration-500 group-hover:border-terra group-hover:bg-terra group-hover:text-ink">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
      <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ivory sm:text-4xl">
        {venture.name}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-dune sm:text-base">
        {venture.description}
      </p>
      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-dune/70">
        {venture.domain}
      </p>
    </div>
  </motion.a>
);

const ComingSoonCard = () => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
    data-testid="venture-card-otofolks"
    className="relative flex min-h-[180px] flex-col items-start justify-center gap-5 overflow-hidden rounded-3xl border border-dashed border-line bg-coal/50 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
  >
    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
      <h3 className="font-display text-2xl font-medium tracking-tight text-dune sm:text-3xl">
        OtoFolks
      </h3>
      <span className="inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sand backdrop-blur-md">
        <Radio className="h-3 w-3" />
        Coming soon
      </span>
    </div>
    <p className="text-sm leading-relaxed text-dune/80 sm:max-w-xs sm:text-right">
      A new venture is taking shape. Watch this space.
    </p>
  </motion.div>
);

const VENTURES = [
  {
    id: "mysipstories",
    name: "mySipStories",
    domain: "mySipStories.com",
    url: "https://mysipstories.com",
    bg: SIP_STORIES_BG,
    description:
      "A warm corner of the internet for short, slow stories — best enjoyed one sip at a time. Live and working today.",
    delay: 0.05,
    className: "lg:col-span-3 min-h-[340px]",
  },
  {
    id: "myfingrid",
    name: "myFinGrid",
    domain: "myFinGrid.com",
    url: "https://myfingrid.com",
    bg: FIN_GRID_BG,
    description:
      "A calm, structured way to see and plan your money. Live and working today.",
    delay: 0.15,
    className: "lg:col-span-2 min-h-[340px]",
  },
];

const VenturesBentoGrid = () => (
  <section
    id="ventures"
    data-testid="ventures-section"
    className="relative px-5 py-24 sm:px-8 sm:py-32"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-sand sm:text-xs"
          >
            <span className="h-px w-10 bg-sand/50" />
            The portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-5 font-display text-4xl font-medium tracking-tight text-ivory sm:text-5xl"
          >
            Ventures we're <span className="italic text-terra">growing</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="max-w-sm text-sm leading-relaxed text-dune sm:text-base"
        >
          Each venture runs independently with its own team and its own story —
          connected by the same standard of craft.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-6">
        {VENTURES.map((venture) => (
          <LiveVentureCard key={venture.id} venture={venture} className={venture.className} />
        ))}
        <div className="lg:col-span-5">
          <ComingSoonCard />
        </div>
      </div>
    </div>
  </section>
);

export default VenturesBentoGrid;
