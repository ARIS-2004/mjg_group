'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const STATUS_LINES = [
  'Initializing operations',
  'Connecting workforce systems',
  'Verifying compliance protocols',
  'Powering modern workspaces',
];

const TOTAL_DURATION = 3200;

export default function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  // Auto-dismiss
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    const t = setTimeout(() => setShow(false), TOTAL_DURATION);
    const release = setTimeout(() => {
      document.documentElement.style.overflow = '';
    }, TOTAL_DURATION + 200);
    return () => {
      clearTimeout(t);
      clearTimeout(release);
    };
  }, []);

  // Progress counter (0 → 100)
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / (TOTAL_DURATION - 400)) * 100));
      setProgress(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Status line cycling
  useEffect(() => {
    const step = TOTAL_DURATION / STATUS_LINES.length;
    const id = setInterval(() => {
      setStatusIdx((i) => (i + 1 < STATUS_LINES.length ? i + 1 : i));
    }, step);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              'radial-gradient(ellipse at center, #ffffff 0%, #f3f7ff 50%, #e6eef9 100%)',
          }}
        >
          {/* Background layers */}
          <div className="absolute inset-0 grid-bg opacity-[0.4]" />
          <div className="glow-blob -top-40 -left-32 h-[520px] w-[520px] bg-brand-500/12" />
          <div className="glow-blob -bottom-40 -right-32 h-[520px] w-[520px] bg-accent-500/10" />

          {/* Floating particles */}
          {Array.from({ length: 18 }).map((_, i) => {
            const left = (i * 53 + 7) % 100;
            const top = (i * 37 + 11) % 100;
            const dur = 5 + (i % 5);
            const delay = (i % 7) * 0.3;
            const orange = i % 3 === 0;
            return (
              <motion.span
                key={i}
                aria-hidden
                className={`absolute h-1 w-1 rounded-full ${
                  orange ? 'bg-accent-500/60' : 'bg-brand-500/55'
                }`}
                style={{ left: `${left}%`, top: `${top}%` }}
                animate={{
                  y: [0, -16, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.6, 1.2, 0.6],
                }}
                transition={{
                  duration: dur,
                  delay,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />
            );
          })}

          {/* Decorative corner brackets */}
          <Brackets />

          {/* CENTER */}
          <div className="relative flex flex-col items-center px-6">
            {/* MEDALLION */}
            <div className="relative h-64 w-64 sm:h-72 sm:w-72">
              {/* Outermost: dashed slow rotation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-dashed border-brand-300/40"
              />

              {/* Outer rotating gradient ring (thin) */}
              <motion.div
                className="absolute inset-3 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(37,99,235,0) 0deg, rgba(37,99,235,0.85) 90deg, rgba(249,115,22,0.85) 220deg, rgba(37,99,235,0) 360deg)',
                  WebkitMask:
                    'radial-gradient(circle, transparent 73%, black 73.5%, black 76%, transparent 76.5%)',
                  mask: 'radial-gradient(circle, transparent 73%, black 73.5%, black 76%, transparent 76.5%)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
              />

              {/* Counter-rotating thinner ring */}
              <motion.div
                className="absolute inset-7 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 180deg, rgba(11,31,77,0) 0deg, rgba(37,99,235,0.5) 60deg, rgba(11,31,77,0) 180deg, rgba(249,115,22,0.4) 280deg, rgba(11,31,77,0) 360deg)',
                  WebkitMask:
                    'radial-gradient(circle, transparent 79%, black 79.5%, black 81%, transparent 81.5%)',
                  mask: 'radial-gradient(circle, transparent 79%, black 79.5%, black 81%, transparent 81.5%)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
              />

              {/* Soft pulsing inner halo */}
              <motion.div
                className="absolute inset-10 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(37,99,235,0.25), rgba(37,99,235,0) 65%)',
                  filter: 'blur(20px)',
                }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 2.4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              />

              {/* Static thin separator ring */}
              <div className="absolute inset-12 rounded-full border border-brand-100" />

              {/* Glass medallion */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-14 rounded-full border border-white/80 bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(11,31,77,0.25),inset_0_1px_2px_rgba(255,255,255,0.8)]"
              >
                {/* Hexagon SVG with animated draw + accent triangle */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full p-6"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="hexg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#0B1F4D" />
                    </linearGradient>
                    <linearGradient id="accg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                  </defs>

                  {/* Hex frame */}
                  <motion.polygon
                    points="100,18 170,58 170,142 100,182 30,142 30,58"
                    stroke="url(#hexg)"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* MJG letters — fade up in sequence */}
                  <motion.text
                    x="100"
                    y="118"
                    textAnchor="middle"
                    fontFamily="var(--font-jakarta), sans-serif"
                    fontWeight={800}
                    fontSize="56"
                    fill="url(#hexg)"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    MJG
                  </motion.text>

                  {/* Accent triangle */}
                  <motion.polygon
                    points="142,150 162,150 152,134"
                    fill="url(#accg)"
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.5,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: '152px 142px' }}
                  />
                </svg>

                {/* Specular shine on glass */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(125deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 35%)',
                    mixBlendMode: 'screen',
                  }}
                />
              </motion.div>

              {/* Orbiting particles — 4 different orbits */}
              {[
                { deg: 0, dur: 3.4, color: 'bg-accent-500', shadow: 'rgba(249,115,22,0.7)', size: 'h-2 w-2' },
                { deg: 90, dur: 4.6, color: 'bg-brand-500', shadow: 'rgba(37,99,235,0.7)', size: 'h-1.5 w-1.5' },
                { deg: 180, dur: 5.2, color: 'bg-accent-400', shadow: 'rgba(249,115,22,0.55)', size: 'h-1 w-1' },
                { deg: 270, dur: 4, color: 'bg-brand-700', shadow: 'rgba(11,31,77,0.7)', size: 'h-1.5 w-1.5' },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  initial={{ rotate: p.deg }}
                  animate={{ rotate: p.deg + 360 }}
                  transition={{ duration: p.dur, ease: 'linear', repeat: Infinity }}
                >
                  <span
                    className={`absolute left-1/2 -top-1 -translate-x-1/2 rounded-full ${p.color} ${p.size}`}
                    style={{ boxShadow: `0 0 12px 2px ${p.shadow}` }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Brand & status text */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="mt-10 flex flex-col items-center"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-brand-500">
                MJG Group
              </p>
              <p className="mt-2 font-display text-[18px] sm:text-[20px] font-extrabold text-brand-900 tracking-tight">
                Powering Modern Workspaces
              </p>

              {/* Status cycler */}
              <div className="relative mt-3 h-5 w-[260px] sm:w-[280px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={statusIdx}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 text-center text-[11px] font-medium tracking-wide text-brand-900/55"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      {STATUS_LINES[statusIdx]}…
                    </span>
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Progress bar with % counter */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.85, duration: 0.6 }}
              className="mt-5 flex w-[260px] sm:w-[280px] items-center gap-3"
            >
              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-brand-100">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-500 via-brand-700 to-accent-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                />
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  animate={{ left: ['-15%', '110%'] }}
                  transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
                />
              </div>
              <span className="font-display text-[11px] font-bold tabular-nums text-brand-700 min-w-[34px] text-right">
                {progress.toString().padStart(2, '0')}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Decorative corner brackets — adds editorial / enterprise feel */
function Brackets() {
  return (
    <>
      <span aria-hidden className="absolute left-6 top-6 h-6 w-6 border-l-2 border-t-2 border-brand-500/30" />
      <span aria-hidden className="absolute right-6 top-6 h-6 w-6 border-r-2 border-t-2 border-brand-500/30" />
      <span aria-hidden className="absolute left-6 bottom-6 h-6 w-6 border-l-2 border-b-2 border-brand-500/30" />
      <span aria-hidden className="absolute right-6 bottom-6 h-6 w-6 border-r-2 border-b-2 border-brand-500/30" />
    </>
  );
}
