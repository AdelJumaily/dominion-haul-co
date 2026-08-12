import { useEffect, useRef, type ReactNode } from 'react';
import { useInView } from 'motion/react';
import {
  BlurFade,
  NumberTicker,
  InfiniteMarquee,
  StickyScrollSteps,
  SpotlightCardLive,
  type StickyStep,
} from './effects';
import { HeroCopy } from './HeroCopy';

export { BlurFade, StickyScrollSteps, HeroCopy, type StickyStep };
export { ParallaxHeroMedia, TextGenerateEffect } from './effects';

/* ── Marquee ─────────────────────────────────────────────────────────────── */

type MarqueeRowProps = {
  items: (string | { name: string; href?: string })[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  variant?: 'places' | 'platforms';
};

export function MarqueeRow({
  items,
  speed = 42,
  reverse,
  className,
  variant = 'places',
}: MarqueeRowProps) {
  const normalized = items.map((item) =>
    typeof item === 'string' ? { name: item, href: undefined } : item
  );

  return (
    <InfiniteMarquee speed={speed} reverse={reverse} className={className}>
      {normalized.map((item) => {
        const inner = (
          <>
            {variant === 'places' && <span className="mq-dot" aria-hidden />}
            {item.name}
          </>
        );
        return item.href ? (
          <a key={item.name} href={item.href} className={variant === 'platforms' ? 'mq-platform' : 'mq-place'}>
            {inner}
          </a>
        ) : (
          <span key={item.name} className={variant === 'platforms' ? 'mq-platform' : 'mq-place'}>
            {inner}
          </span>
        );
      })}
      <style>{`
        .mq-place {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.92rem;
          letter-spacing: -0.015em;
          white-space: nowrap;
          color: var(--ink);
          text-decoration: none;
        }
        a.mq-place:hover { color: var(--accent-deep); }
        .mq-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex: none;
        }
        .mq-platform {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.25rem, 1rem + 1.3vw, 1.85rem);
          letter-spacing: -0.03em;
          color: color-mix(in srgb, var(--ink) 32%, transparent);
          white-space: nowrap;
          text-decoration: none;
        }
      `}</style>
    </InfiniteMarquee>
  );
}

/* ── Stats ───────────────────────────────────────────────────────────────── */

type StatsProps = {
  items: { value: number; prefix?: string; suffix?: string; label: string }[];
};

export function StatsRow({ items }: StatsProps) {
  return (
    <div className="stats-grid">
      {items.map((s, i) => (
        <BlurFade key={s.label} delay={0.08 * i} className="stat">
          <NumberTicker
            value={s.value}
            prefix={s.prefix}
            suffix={s.suffix}
            className="stat-num"
            delay={0.1 * i}
          />
          <span className="stat-label">{s.label}</span>
        </BlurFade>
      ))}
    </div>
  );
}

/* ── Why list ────────────────────────────────────────────────────────────── */

type WhyItem = { t: string; d: string };

export function WhyList({ items }: { items: WhyItem[] }) {
  return (
    <ul className="why-list">
      {items.map((w, i) => (
        <li key={w.t}>
          <BlurFade delay={0.08 * i} direction="right">
            <div className="why-item">
              <span className="why-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </div>
          </BlurFade>
        </li>
      ))}
    </ul>
  );
}

/* ── Pricing rail ────────────────────────────────────────────────────────── */

type Tier = {
  name: string;
  price: string;
  examples: string;
  fill: number;
  popular?: boolean;
};

function MeterFill({ width, delay }: { width: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!ref.current || !inView) return;
    const el = ref.current;
    const t = window.setTimeout(() => {
      el.style.width = `${width}%`;
    }, delay * 1000);
    return () => window.clearTimeout(t);
  }, [inView, width, delay]);

  return (
    <span
      ref={ref}
      className="ps-fill"
      style={{ width: 0, transition: 'width 1s cubic-bezier(0.22, 0.61, 0.36, 1)' }}
    />
  );
}

export function PriceRail({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="price-rail" role="list">
      {tiers.map((t, i) => (
        <BlurFade key={t.name} delay={0.06 * i} className="ps-wrap">
          <SpotlightCardLive className={t.popular ? 'ps-item ps-pop' : 'ps-item'}>
            <article role="listitem">
              <span className="ps-name">{t.name}</span>
              <span className="ps-meter" role="img" aria-label={`About ${t.fill}% of the truck`}>
                <MeterFill width={t.fill} delay={0.15 + i * 0.07} />
              </span>
              <span className="ps-price">{t.price}</span>
              <span className="ps-ex">{t.examples}</span>
            </article>
          </SpotlightCardLive>
        </BlurFade>
      ))}
      <style>{`
        .price-rail {
          display: grid;
          gap: 1px;
          background: var(--rule);
          border: 1px solid var(--rule);
        }
        .ps-wrap { min-width: 0; height: 100%; }
        .ps-item {
          padding: 1.35rem;
          background: var(--surface-raised);
          height: 100%;
        }
        .ps-item article {
          display: grid;
          gap: 0.75rem;
          height: 100%;
        }
        .ps-pop {
          background: var(--ink);
          color: var(--surface);
        }
        .ps-pop .ps-ex { color: #9aada2; }
        .ps-name {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 1.05rem;
          letter-spacing: -0.02em;
        }
        .ps-meter {
          display: block;
          height: 2px;
          background: color-mix(in srgb, currentColor 12%, transparent);
          overflow: hidden;
        }
        .ps-fill {
          display: block;
          height: 100%;
          background: var(--accent);
        }
        .ps-price {
          font-family: var(--font-display);
          font-size: var(--step-2);
          font-weight: 500;
          letter-spacing: -0.035em;
        }
        .ps-ex {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.45;
        }
        @media (min-width: 900px) {
          .price-rail { grid-template-columns: repeat(5, 1fr); }
        }
      `}</style>
    </div>
  );
}

export function SectionIntro({
  title,
  lede,
  delay = 0,
}: {
  title: ReactNode;
  lede?: string;
  delay?: number;
}) {
  return (
    <div className="section-head-row">
      <BlurFade delay={delay}>
        <h2>{title}</h2>
      </BlurFade>
      {lede && (
        <BlurFade delay={delay + 0.1}>
          <p className="lede">{lede}</p>
        </BlurFade>
      )}
    </div>
  );
}
