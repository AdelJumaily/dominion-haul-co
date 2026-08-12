import { BlurFade } from './effects';

type HeroProps = {
  headline: string;
  sub: string;
  ctaHref: string;
  ctaLabel: string;
  meta?: string;
};

/**
 * Brand-first hero — real logo lockup, one headline, one sub, one CTA.
 */
export function HeroCopy(props: HeroProps) {
  return (
    <div className="hc">
      <BlurFade delay={0.04}>
        <img
          src="/images/logo.png"
          alt="Dominion Haul — since 2026"
          className="hc-logo"
          width={640}
          height={480}
          decoding="async"
          fetchPriority="high"
        />
      </BlurFade>

      <BlurFade delay={0.14}>
        <h1 className="hc-title">{props.headline}</h1>
      </BlurFade>

      <BlurFade delay={0.26}>
        <p className="hc-sub">{props.sub}</p>
      </BlurFade>

      <BlurFade delay={0.38}>
        <div className="hc-actions">
          <a href={props.ctaHref} className="btn btn-lg hc-btn" data-track="call-hero">
            {props.ctaLabel}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="arrow"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          {props.meta && <p className="hc-meta">{props.meta}</p>}
        </div>
      </BlurFade>

      <style>{`
        .hc {
          max-width: 36rem;
        }
        .hc-logo {
          display: block;
          height: clamp(6.5rem, 16vw, 11rem);
          width: auto;
          max-width: min(100%, 22rem);
          object-fit: contain;
          object-position: left center;
          margin-bottom: clamp(1.25rem, 2.5vw, 1.85rem);
          border-radius: 6px;
          box-shadow: 0 18px 40px rgb(0 0 0 / 0.28);
        }
        .hc-title {
          font-family: var(--font-display);
          font-size: clamp(1.55rem, 1.2rem + 1.4vw, 2.35rem);
          font-weight: 400;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #f4f7f4;
          max-width: 16ch;
          text-wrap: balance;
        }
        .hc-sub {
          margin-top: 1.1rem;
          max-width: 32ch;
          font-size: clamp(1rem, 0.95rem + 0.25vw, 1.15rem);
          line-height: 1.5;
          color: rgb(244 247 244 / 0.72);
          font-weight: 400;
        }
        .hc-actions {
          margin-top: 1.85rem;
          display: grid;
          gap: 0.85rem;
          justify-items: start;
        }
        .hc-btn {
          box-shadow: 0 12px 32px rgb(0 0 0 / 0.28);
        }
        .hc-meta {
          font-size: 0.8rem;
          color: rgb(244 247 244 / 0.55);
          letter-spacing: 0.01em;
        }
      `}</style>
    </div>
  );
}
