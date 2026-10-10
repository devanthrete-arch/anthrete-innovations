export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="14" className="fill-coal" />
    <path
      d="M14 46 L32 14 L50 46"
      stroke="#E07A5F"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22.5 33 H41.5" stroke="#F2CC8F" strokeWidth="5" strokeLinecap="round" />
    <circle cx="32" cy="14" r="4.5" fill="#F4F1DE" />
  </svg>
);

export const Logo = () => (
  <a
    href="#top"
    data-testid="header-logo-link"
    className="group flex items-center gap-3"
    aria-label="Anthrete Innovations — back to top"
  >
    <LogoMark className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg]" />
    <span className="flex flex-col leading-none">
      <span className="font-display text-lg font-semibold tracking-tight text-ivory">
        Anthrete
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-dune">
        Innovations
      </span>
    </span>
  </a>
);
