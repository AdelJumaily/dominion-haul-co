import { useRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'motion/react';
import { useEffect, useState, type ReactNode, type CSSProperties } from 'react';
import clsx from 'clsx';

/* ── BlurFade — Magic UI pattern ─────────────────────────────────────────── */

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  inViewMargin?: `${number}px` | `${number}%`;
  direction?: 'up' | 'down' | 'left' | 'right';
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.55,
  yOffset = 18,
  blur = '8px',
  inViewMargin = '-60px',
  direction = 'up',
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: inViewMargin as never });
  const reduce = useReducedMotion();

  const axis =
    direction === 'left' || direction === 'right'
      ? { x: direction === 'left' ? -yOffset : yOffset, y: 0 }
      : { y: direction === 'up' ? yOffset : -yOffset, x: 0 };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: `blur(${blur})`, ...axis }}
      animate={inView ? { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── TextGenerateEffect — Aceternity pattern ────────────────────────────── */

type TextGenerateProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.45,
}: TextGenerateProps) {
  const reduce = useReducedMotion();
  const parts = words.split(' ');

  return (
    <motion.span className={clsx('tg-wrap', className)} aria-label={words}>
      {parts.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="tg-word"
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  filter: filter ? 'blur(6px)' : 'none',
                  y: 10,
                }
          }
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration,
            delay: i * 0.08,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          {word}
          {i < parts.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
      <style>{`
        .tg-wrap { display: inline; }
        .tg-word { display: inline-block; will-change: transform, opacity, filter; }
      `}</style>
    </motion.span>
  );
}

/* ── NumberTicker — Magic UI pattern ─────────────────────────────────────── */

type NumberTickerProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
  decimalPlaces?: number;
};

export function NumberTicker({
  value,
  prefix = '',
  suffix = '',
  className,
  delay = 0,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 70, damping: 28 });
  const [display, setDisplay] = useState(
    reduce ? `${prefix}${value.toFixed(decimalPlaces)}${suffix}` : `${prefix}0${suffix}`
  );

  useEffect(() => {
    if (reduce) return;
    if (inView) {
      const t = window.setTimeout(() => motionVal.set(value), delay * 1000);
      return () => window.clearTimeout(t);
    }
  }, [inView, value, delay, motionVal, reduce]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      setDisplay(`${prefix}${Number(v).toFixed(decimalPlaces)}${suffix}`);
    });
    return unsub;
  }, [spring, prefix, suffix, decimalPlaces]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/* ── InfiniteMarquee — Magic UI pattern ──────────────────────────────────── */

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: number;
};

export function InfiniteMarquee({
  children,
  className,
  pauseOnHover = true,
  reverse = false,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={clsx('mq', pauseOnHover && 'mq-pause', className)}
      style={{ '--mq-duration': `${speed}s` } as CSSProperties}
    >
      <div className={clsx('mq-track', reverse && 'mq-reverse')}>
        <div className="mq-content">{children}</div>
        <div className="mq-content" aria-hidden="true">
          {children}
        </div>
      </div>
      <style>{`
        .mq {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }
        .mq-track {
          display: flex;
          width: max-content;
          animation: mq-scroll var(--mq-duration, 40s) linear infinite;
        }
        .mq-reverse { animation-direction: reverse; }
        .mq-pause:hover .mq-track { animation-play-state: paused; }
        .mq-content {
          display: flex;
          align-items: center;
          gap: 2.75rem;
          padding-inline: 1.375rem;
          flex: none;
        }
        @keyframes mq-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mq-track { animation: none; }
        }
      `}</style>
    </div>
  );
}

/* ── ParallaxHeroMedia — subtle scroll parallax ──────────────────────────── */

type ParallaxHeroProps = {
  children: ReactNode;
  className?: string;
};

export function ParallaxHeroMedia({ children, className }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1]);

  return (
    <div ref={ref} className={clsx('phm', className)}>
      <motion.div className="phm-inner" style={{ y, scale }}>
        {children}
      </motion.div>
      <style>{`
        .phm { position: absolute; inset: 0; overflow: hidden; }
        .phm-inner { position: absolute; inset: -8% 0 0; height: 116%; width: 100%; }
        .phm-inner > * { height: 100%; width: 100%; }
      `}</style>
    </div>
  );
}

/* ── StickyScrollSteps — Aceternity sticky-scroll pattern ────────────────── */

export type StickyStep = { n: string; t: string; d: string };

type StickyScrollProps = {
  title: string;
  lede: string;
  steps: StickyStep[];
};

export function StickyScrollSteps({ title, lede, steps }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const reduce = useReducedMotion();

  return (
    <div ref={containerRef} className="ss">
      <div className="ss-layout">
        <div className="ss-sticky">
          <h2 className="ss-title">{title}</h2>
          <p className="ss-lede">{lede}</p>
          <div className="ss-progress" aria-hidden="true">
            <motion.div
              className="ss-progress-fill"
              style={{ scaleX: reduce ? 1 : scrollYProgress }}
            />
          </div>
        </div>
        <ol className="ss-steps">
          {steps.map((s, i) => (
            <StickyStepCard key={s.n} step={s} index={i} />
          ))}
        </ol>
      </div>
      <style>{`
        .ss { position: relative; }
        .ss-layout {
          display: grid;
          gap: 3rem;
        }
        .ss-title {
          font-family: var(--font-display);
          font-size: var(--step-4);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.05;
          max-width: 12ch;
        }
        .ss-lede {
          margin-top: 1.25rem;
          color: var(--fg-muted);
          max-width: 34ch;
          font-size: var(--step-1);
          line-height: 1.55;
        }
        .ss-progress {
          margin-top: 2rem;
          height: 2px;
          background: var(--rule);
          transform-origin: left;
          max-width: 12rem;
          overflow: hidden;
        }
        .ss-progress-fill {
          height: 100%;
          background: var(--accent);
          transform-origin: left;
          scale: 0 1;
        }
        .ss-steps {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 0;
        }
        .ss-step {
          padding: 2rem 0;
          border-top: 1px solid var(--rule);
        }
        .ss-step:last-child { border-bottom: 1px solid var(--rule); padding-bottom: 0.5rem; }
        .ss-n {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--accent-deep);
        }
        .ss-step h3 {
          margin-top: 0.75rem;
          font-size: var(--step-2);
        }
        .ss-step p {
          margin-top: 0.75rem;
          color: var(--muted);
          max-width: 42ch;
          line-height: 1.6;
        }
        @media (min-width: 900px) {
          .ss-layout {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 4.5rem;
            align-items: start;
          }
          .ss-sticky {
            position: sticky;
            top: calc(var(--header-h) + 2rem);
            padding-block: 0.5rem 4rem;
          }
          .ss-step { min-height: 42vh; display: grid; align-content: center; }
        }
      `}</style>
    </div>
  );
}

function StickyStepCard({ step, index }: { step: StickyStep; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { amount: 0.55, margin: '-10% 0px -10% 0px' });
  const reduce = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      className="ss-step"
      initial={reduce ? false : { opacity: 0.35, y: 24 }}
      animate={
        reduce
          ? undefined
          : inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0.35, y: 16 }
      }
      transition={{ duration: 0.5, delay: 0.04, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <span className="ss-n">{step.n}</span>
      <h3>{step.t}</h3>
      <p>{step.d}</p>
    </motion.li>
  );
}

/* ── SpotlightCard — Aceternity / Magic UI hover spotlight ───────────────── */

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCardLive({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0, on: false });

  return (
    <div
      ref={ref}
      className={clsx('spot', className)}
      onMouseMove={(e) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, on: true });
      }}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
    >
      {!reduce && (
        <div
          className="spot-glow"
          style={{
            opacity: pos.on ? 1 : 0,
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, color-mix(in srgb, var(--accent) 16%, transparent), transparent 55%)`,
          }}
          aria-hidden
        />
      )}
      <div className="spot-body">{children}</div>
      <style>{`
        .spot { position: relative; overflow: hidden; isolation: isolate; height: 100%; }
        .spot-glow {
          pointer-events: none;
          position: absolute;
          inset: 0;
          z-index: 0;
          transition: opacity 0.35s ease;
        }
        .spot-body { position: relative; z-index: 1; height: 100%; }
      `}</style>
    </div>
  );
}
