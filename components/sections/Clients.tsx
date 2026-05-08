'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Star, TrendingUp, Check } from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const testimonials = [
  {
    quote:
      'MJG has been a loyal and reliable partner, working with us for over a decade. Their team is well-trained and disciplined.',
    name: 'Prasenjit Majumdar',
    role: 'Director',
    org: 'Ultra International Limited',
    rating: 5,
  },
  {
    quote:
      'MJG is a professionally-managed housekeeping and manpower outsourcing company. They have been associated with us for the last 13 years.',
    name: 'A.S. Gujral',
    role: 'Director',
    org: 'Srijan School',
    rating: 5,
  },
  {
    quote:
      'MJG has been a committed partner for our housekeeping and manpower requirements. We look forward to a long-standing relationship.',
    name: 'Annu Jha',
    role: 'HR Director',
    org: 'Flakt Group',
    rating: 5,
  },
];

const logos = [1, 2, 3, 4, 5, 6];

export default function Clients() {
  return (
    <section id="clients" className="relative py-12 sm:py-14 overflow-hidden">
      {/* Background — soft white with subtle blue tint */}
      <div className="absolute inset-0 bg-white" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(37,99,235,0.06), transparent 60%)',
        }}
      />
      <div className="glow-blob -top-32 -left-20 h-80 w-80 bg-brand-500/8" />
      <div className="glow-blob -bottom-32 -right-20 h-80 w-80 bg-accent-500/8" />

      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="absolute right-8 top-12 h-24 w-24 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(11,31,77,0.16) 1.2px, transparent 1.6px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative container-px mx-auto max-w-[1280px]">
        {/* HEADER */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-300" />
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
              <Sparkles className="h-3.5 w-3.5" />
              Our Clients
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-300" />
          </motion.div>

          <motion.h2
            variants={fadeUpSlow}
            className="display-h mt-5 text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.04] tracking-tight"
          >
            Trusted by organizations{' '}
            <br className="hidden sm:block" />
            that value{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 bg-clip-text text-transparent">
              excellence
            </span>
            <span className="text-accent-500">.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[15px] leading-relaxed text-brand-900/65 max-w-xl mx-auto"
          >
            Long-standing partnerships built on trust, performance, and
            consistent value delivery — across enterprises, institutions and
            government organizations.
          </motion.p>
        </motion.div>

        {/* DUAL MARQUEE */}
        <div className="relative mt-14 space-y-4">
          {/* Soft frame */}
          <div className="absolute -inset-x-6 -inset-y-3 rounded-[28px] bg-gradient-to-b from-white via-brand-50/30 to-white pointer-events-none" />

          {/* Row 1 — left to right */}
          <div className="relative fade-mask">
            <div className="flex w-max animate-marquee gap-5 will-change-transform">
              {[...logos, ...logos, ...logos].map((n, i) => (
                <LogoCard key={`r1-${i}`} n={n} index={i} />
              ))}
            </div>
          </div>

          {/* Row 2 — right to left, slightly different speed */}
          <div className="relative fade-mask">
            <div
              className="flex w-max gap-5 will-change-transform"
              style={{
                animation: 'marquee 50s linear infinite reverse',
              }}
            >
              {[...logos.slice().reverse(), ...logos, ...logos.slice().reverse()].map(
                (n, i) => (
                  <LogoCard key={`r2-${i}`} n={n} index={i} delay={0.05} />
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-3xl border border-brand-100/70 bg-white p-5 shadow-[0_12px_30px_-18px_rgba(11,31,77,0.18)]"
        >
          {[
            { v: '500+', l: 'Enterprise clients', icon: TrendingUp, tone: 'brand' },
            { v: '13+ yrs', l: 'Avg. relationship', icon: Star, tone: 'accent' },
            { v: '98%', l: 'Client retention', icon: Sparkles, tone: 'emerald' },
            { v: '4.9/5', l: 'Avg. satisfaction', icon: Quote, tone: 'violet' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 px-2"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ${
                  s.tone === 'accent'
                    ? 'bg-accent-500/10 text-accent-500 ring-accent-500/15'
                    : s.tone === 'emerald'
                    ? 'bg-emerald-50 text-emerald-600 ring-emerald-500/15'
                    : s.tone === 'violet'
                    ? 'bg-violet-50 text-violet-600 ring-violet-500/15'
                    : 'bg-brand-50 text-brand-600 ring-brand-500/15'
                }`}
              >
                <s.icon className="h-[18px] w-[18px]" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-[18px] font-extrabold text-brand-900 tracking-tight">
                  {s.v}
                </p>
                <p className="text-[10.5px] uppercase tracking-wider text-brand-900/55">
                  {s.l}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── TESTIMONIALS SUB-SECTION ─── */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-500">
              Testimonials
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-300" />
          </motion.div>

          <motion.h3
            variants={fadeUpSlow}
            className="display-h mt-5 text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.04] tracking-tight"
          >
            Trusted by clients.{' '}
            <br className="hidden sm:block" />
            Proven{' '}
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 bg-clip-text text-transparent">
              by results
            </span>
            <span className="text-accent-500">.</span>
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[14px] leading-relaxed text-brand-900/60 max-w-xl mx-auto"
          >
            Long-term relationships built on trust, reliability and consistent
            delivery of excellence.
          </motion.p>
        </motion.div>

        {/* ─── TESTIMONIAL CARDS ─── */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] border border-brand-100/70 bg-white p-7 shadow-[0_14px_40px_-22px_rgba(11,31,77,0.22)] transition-all duration-500 hover:border-brand-300 hover:shadow-[0_28px_60px_-26px_rgba(37,99,235,0.35)]"
            >
              {/* Top accent line — appears on hover */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Soft halo on hover */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)',
                }}
              />

              {/* Big faded watermark quote — bottom right */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -bottom-6 text-brand-100/70"
              >
                <Quote className="h-32 w-32" strokeWidth={1.2} />
              </span>

              {/* TOP — large blue quote + stars */}
              <div className="relative flex items-start justify-between">
                <Quote
                  className="h-9 w-9 text-brand-500"
                  strokeWidth={2.2}
                />
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star
                      key={k}
                      className="h-4 w-4 fill-accent-500 text-accent-500"
                    />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="relative mt-5 text-[15px] leading-relaxed text-brand-900/90 font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Footer — avatar + name */}
              <div className="relative mt-7 flex items-center gap-4 border-t border-brand-100 pt-5">
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-[14px] font-bold text-white shadow-[0_10px_20px_-6px_rgba(37,99,235,0.5)] ring-2 ring-white">
                    {t.name
                      .split(' ')
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  {/* Green check badge */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white shadow-sm">
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                  </span>
                </div>
                <div className="leading-tight min-w-0">
                  <p className="font-display font-bold text-brand-900 text-[15px] tracking-tight">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-brand-900/55">
                    {t.role}, {t.org}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Logo Card with always-color logo + premium micro-effects ───── */
function LogoCard({
  n,
  index,
  delay = 0,
}: {
  n: number;
  index: number;
  delay?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22, delay }}
      className="group relative h-20 w-44 sm:w-48 flex-none"
    >
      <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-brand-100/70 bg-white px-5 shadow-[0_8px_22px_-16px_rgba(11,31,77,0.18)] transition-all duration-500 group-hover:shadow-[0_18px_38px_-18px_rgba(37,99,235,0.3)] group-hover:border-brand-200">
        {/* soft inner gradient — adds dimension */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(37,99,235,0.06), transparent 60%)',
          }}
        />
        {/* shimmer line on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <span className="absolute -inset-y-2 -left-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-all duration-700 group-hover:left-full" />
        </span>

        <div className="relative h-12 w-full">
          <Image
            src={`/logo${n}.png`}
            alt={`Client ${n}`}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}
