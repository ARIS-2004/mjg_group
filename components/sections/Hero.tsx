'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Users,
  Building2,
  TrendingUp,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

export default function Hero() {
  return (
    <section
      className="relative pt-14 sm:pt-22 lg:pt-24 pb-2 sm:pb-6 overflow-hidden"
      style={{ backgroundColor: '#dbe7fa' }}
    >
      {/* very subtle grid texture only */}
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />
      {/* single far-corner glow, kept far from image area */}
      <div className="glow-blob -top-32 -left-32 h-[460px] w-[460px] bg-brand-500/10" />

      {/* LEFT FADE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 2%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.65) 7%, rgba(255,255,255,0.45) 11%, rgba(255,255,255,0.25) 16%, rgba(255,255,255,0.1) 22%, rgba(255,255,255,0.03) 28%, transparent 35%)',
        }}
      />
      {/* RIGHT FADE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 2%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.65) 7%, rgba(255,255,255,0.45) 11%, rgba(255,255,255,0.25) 16%, rgba(255,255,255,0.1) 22%, rgba(255,255,255,0.03) 28%, transparent 35%)',
        }}
      />
      {/* BOTTOM FADE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 2%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.65) 7%, rgba(255,255,255,0.45) 11%, rgba(255,255,255,0.25) 16%, rgba(255,255,255,0.1) 22%, rgba(255,255,255,0.03) 28%, transparent 35%)',
        }}
      />
      {/* TOP FADE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 2%, rgba(255,255,255,0.8) 4%, rgba(255,255,255,0.65) 7%, rgba(255,255,255,0.45) 11%, rgba(255,255,255,0.25) 16%, rgba(255,255,255,0.1) 22%, rgba(255,255,255,0.03) 28%, transparent 35%)',
        }}
      />

      <div className="relative container-px mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 items-center">
          {/* LEFT */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 lg:col-span-6 relative z-10"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
              <span className="group inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-gradient-to-r from-accent-500/15 via-accent-500/10 to-brand-500/10 px-3.5 py-1.5 text-[11.5px] font-semibold text-accent-600 shadow-[0_4px_16px_-6px_rgba(249,115,22,0.4)] backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                35+ Years of Trust
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-2 eyebrow text-[11px]">
              Integrated Facility &amp; Workforce Solutions
            </motion.div>

            <motion.h1
              variants={fadeUpSlow}
              className="display-h mt-2 text-[28px] leading-[1.1] sm:text-[34px] lg:text-[42px]"
            >
              Empowering Businesses With{' '}
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                People, Precision
              </span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                Performance
              </span>
              <span className="text-accent-500">.</span>
            </motion.h1>



            <motion.div variants={fadeUp} className="mt-3 flex flex-wrap gap-2">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className="btn-secondary">
                <PlayCircle className="h-4 w-4" /> Explore Services
              </Link>
            </motion.div>

            {/* Stats pill — 2x2 on mobile, 4-col on sm+ */}
            <motion.div
              variants={fadeUp}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-brand-100/80 rounded-2xl border border-brand-100/70 bg-white/90 p-1.5 shadow-[0_12px_30px_-18px_rgba(11,31,77,0.25)] backdrop-blur-md"
            >
              {[
                { value: '35+', label: 'Years of\nExperience', icon: TrendingUp, tone: 'brand' },
                { value: '500+', label: 'Corporate\nClients', icon: Building2, tone: 'teal' },
                { value: '10,000+', label: 'Workforce\nManaged', icon: Users, tone: 'violet' },
                { value: '24×7', label: 'Operational\nSupport', icon: ShieldCheck, tone: 'accent' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-2 py-2 transition-colors duration-300 hover:bg-brand-50/50 sm:gap-2.5 sm:px-2.5"
                >
                  <span
                    className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-1 ring-inset shrink-0 ${
                      s.tone === 'accent'
                        ? 'bg-accent-500/10 text-accent-500 ring-accent-500/15'
                        : s.tone === 'teal'
                        ? 'bg-emerald-50 text-emerald-600 ring-emerald-500/15'
                        : s.tone === 'violet'
                        ? 'bg-violet-50 text-violet-600 ring-violet-500/15'
                        : 'bg-brand-50 text-brand-600 ring-brand-500/15'
                    }`}
                  >
                    <s.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  </span>
                  <div className="leading-tight min-w-0">
                    <p className="font-display text-[15px] sm:text-[18px] font-extrabold text-brand-900 tracking-tight truncate">
                      {s.value}
                    </p>
                    <p className="whitespace-pre-line text-[9px] sm:text-[10px] uppercase tracking-[0.08em] text-brand-900/55 mt-0.5">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Trusted by */}
            <motion.div variants={fadeUp} className="mt-4">
              <div className="flex items-center gap-3">
                <span className="h-px flex-none w-8 bg-brand-900/15" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-900/55">
                  Trusted by enterprises, institutions &amp; government organizations
                </p>
                <span className="h-px flex-1 bg-brand-900/15" />
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="relative h-8 w-20 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  >
                    <Image
                      src={`/logo${n}.png`}
                      alt={`Client ${n}`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — composition (top on mobile, right on lg) */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative">
            <HeroComposition />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroComposition() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative w-full"
    >
      <div className="relative aspect-square w-full max-w-[580px] mx-auto lg:ml-auto lg:mr-0">
        {/* Just the image — fully blended into the section background */}
        <Image
          src="/hero_image.png"
          alt="MJG integrated services composition"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 680px"
          className="object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Floating live indicator with waveform */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
          className="absolute left-2 bottom-6 hidden sm:flex items-center gap-2.5 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 text-[12px] font-semibold text-brand-900 shadow-soft backdrop-blur"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          512 sites live
          <svg
            width="48"
            height="14"
            viewBox="0 0 48 14"
            fill="none"
            className="ml-1 -mr-0.5 text-emerald-500"
            aria-hidden
          >
            <motion.path
              d="M1 7 L6 7 L9 2 L13 12 L17 4 L20 9 L24 7 L28 7 L31 3 L35 11 L39 5 L42 8 L47 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            />
          </svg>
        </motion.div>

        {/* Floating ISO badge */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity, delay: 0.6 }}
          className="absolute right-4 top-6 hidden sm:flex flex-col items-center rounded-2xl border border-white/70 bg-white/85 px-4 py-2.5 shadow-soft backdrop-blur-xl"
        >
          <span className="text-[10px] uppercase tracking-[0.22em] text-brand-500 font-semibold">
            Certified
          </span>
          <span className="font-display text-[14px] font-bold text-brand-900 leading-tight">
            ISO 9001
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

