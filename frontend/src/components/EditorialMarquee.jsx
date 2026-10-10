import Marquee from "react-fast-marquee";

const ITEMS = ["Innovate", "Craft", "Future", "Ventures", "Growth", "Anthrete"];

const Diamond = () => (
  <svg viewBox="0 0 12 12" className="mx-8 h-3 w-3 shrink-0 text-terra" aria-hidden="true">
    <rect x="2.2" y="2.2" width="7.6" height="7.6" rx="1.5" transform="rotate(45 6 6)" fill="currentColor" />
  </svg>
);

const EditorialMarquee = () => (
  <div
    data-testid="editorial-marquee"
    className="relative border-y border-line/70 bg-coal/40 py-6"
    aria-hidden="true"
  >
    <Marquee
      speed={38}
      gradient
      gradientColor="#0F0D13"
      gradientWidth={140}
      pauseOnHover
    >
      {ITEMS.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span
            className={`whitespace-nowrap text-2xl sm:text-4xl ${
              index % 2 === 0
                ? "font-display italic text-ivory/80"
                : "text-stroke-ivory font-display font-semibold uppercase tracking-wide"
            }`}
          >
            {item}
          </span>
          <Diamond />
        </span>
      ))}
    </Marquee>
  </div>
);

export default EditorialMarquee;
