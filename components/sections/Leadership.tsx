'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  ShieldCheck,
  Target,
  BadgeCheck,
  Linkedin,
  ArrowUpRight,
  Quote,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const leaders = [
  {
    name: 'Manjeet Singh Agroiya',
    role: 'Managing Director',
    tag: 'Founder · 30+ years',
    bio: 'Industry veteran in manpower outsourcing. Expert in statutory compliance, EPF / ESI, labour matters & litigation.',
    edu: "St. Stephen's College, Delhi University",
    initials: 'MA',
    image: '/manjeet.png',
  },
  {
    name: 'Jai Man Singh',
    role: 'Director — Operations & Compliance',
    tag: 'HR · Payroll · Operations',
    bio: 'Decade in the U.S. with E&Y, KPMG, Amazon and Expedia. Leads HR, payroll and pan-India operations.',
    edu: 'Delhi School of Economics · SMU Cox MBA',
    initials: 'JS',
    image: '/jai.png',
  },
  {
    name: 'Gurpreet Kaur',
    role: 'Director — Strategy & Communications',
    tag: 'Talent · Strategy · Comms',
    bio: 'Heads talent acquisition, research and corporate communications. Former equity analyst across Indian capital markets.',
    edu: 'Delhi University · IIPM MBA',
    initials: 'GK',
    image: '/gurpreet.png',
  },
];

const trustBadges = [
  { icon: ShieldCheck, top: 'Proven', bottom: 'Leadership' },
  { icon: Target, top: 'Domain', bottom: 'Expertise' },
  { icon: BadgeCheck, top: 'Integrity', bottom: 'First' },
];

export default function Leadership() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(37,99,235,0.05), transparent 60%)',
        }}
      />
      <div className="glow-blob -top-20 -right-20 h-72 w-72 bg-brand-500/8" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        {/* HEADER */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
        >
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-10 bg-brand-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Leadership
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpSlow}
              className="display-h mt-3 text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.04] tracking-tight"
            >
              The team driving MJG&apos;s{' '}
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                operational rigour
              </span>
              <span className="text-accent-500">.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-4 flex items-center gap-1.5"
            >
              <span className="h-[3px] w-12 rounded-full bg-accent-500" />
              <span className="h-[3px] w-2 rounded-full bg-brand-500/40" />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 relative lg:border-l lg:border-brand-100 lg:pl-8"
          >
            <p className="text-[14px] leading-relaxed text-brand-900/70">
              Decades of experience across labour compliance, global consulting
              and capital markets — directing every engagement with the same
              standard of precision, governance and accountability.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {trustBadges.map((b) => (
                <div key={b.top} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[12px] font-bold text-brand-900">
                      {b.top}
                    </p>
                    <p className="text-[11px] text-brand-900/55">{b.bottom}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_4px_6px_-1px_rgba(11,31,77,0.04),0_28px_60px_-24px_rgba(11,31,77,0.3)] transition-all duration-500 hover:shadow-[0_8px_12px_-2px_rgba(11,31,77,0.06),0_42px_80px_-22px_rgba(37,99,235,0.35)]"
            >
              {/* Thin top accent line on hover */}
              <span className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 transition-transform duration-500 group-hover:scale-x-100" />

              {/* ─── CINEMATIC PORTRAIT ─── */}
              <div className="relative aspect-[4/4.6] overflow-hidden">
                {/* Layered backdrop — sophisticated navy */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-900 to-brand-950" />

                {/* Spotlight vignette */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(37,99,235,0.32) 0%, rgba(11,31,77,0) 70%)',
                  }}
                />

                {/* Subtle dot grid texture */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.13]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.4px)',
                    backgroundSize: '15px 15px',
                  }}
                />

                {/* Diagonal sheen sweep */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-60"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)',
                  }}
                />

                {/* Soft accent glows */}
                <div className="pointer-events-none absolute -top-16 -left-12 h-52 w-52 rounded-full bg-brand-400/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-accent-500/16 blur-3xl" />

                {/* HUGE watermark initials behind photo */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-[-10px] bottom-[-40px] font-display text-[230px] font-black leading-[0.85] tracking-tighter text-white/[0.05] select-none"
                >
                  {p.initials}
                </span>

                {/* Decorative editorial corner brackets */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-white/20"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-white/20"
                />

                {/* Photo */}
                <div className="absolute inset-0">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  />
                  {/* Cinematic gradient — fades photo into dark backdrop at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-950/85" />
                </div>

                {/* Refined initials badge — top-left */}
                <div className="absolute left-5 top-5 z-10">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white font-display text-[13px] font-bold shadow-[0_10px_24px_-6px_rgba(0,0,0,0.5)] ring-1 ring-white/30 backdrop-blur-md">
                    {p.initials}
                    <span className="absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-accent-500" />
                  </div>
                </div>

                {/* LinkedIn pill — top-right, more refined */}
                <a
                  href="#"
                  aria-label={`${p.name} on LinkedIn`}
                  className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#0077b5] hover:border-white"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>

                {/* Bottom — Name overlay with role */}
                <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5">
                  {/* Tag chip */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
                    </span>
                    {p.tag}
                  </div>

                  {/* Name */}
                  <p className="mt-3 font-display text-[20px] font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {p.name}
                  </p>
                  <p className="mt-1 text-[11.5px] font-medium text-white/70">
                    {p.role}
                  </p>

                  {/* Gradient divider */}
                  <span className="mt-3 block h-[2px] w-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-500/0" />
                </div>
              </div>

              {/* ─── EDITORIAL INFO AREA ─── */}
              <div className="relative flex-1 bg-white px-6 pt-5 pb-6">
                {/* Decorative quote glyph */}
                <span className="pointer-events-none absolute right-5 top-4 text-brand-100">
                  <Quote className="h-9 w-9" strokeWidth={1.4} />
                </span>

                {/* Bio */}
                <p className="text-[13px] leading-relaxed text-brand-900/72 pr-10">
                  {p.bio}
                </p>

                {/* Education chip */}
                <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-brand-100/70 bg-gradient-to-br from-brand-50/70 to-white px-3.5 py-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-brand-100">
                    <GraduationCap className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11.5px] text-brand-900/70 leading-snug font-medium">
                    {p.edu}
                  </span>
                </div>

                {/* Footer CTA row */}
                <div className="mt-4 flex items-center justify-between border-t border-brand-100 pt-4">
                  <a
                    href="#"
                    className="group/cta inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-600 transition-colors hover:text-accent-500"
                  >
                    View Full Profile
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </a>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((k) => (
                      <span
                        key={k}
                        className="h-1 w-1 rounded-full bg-brand-200 transition-colors duration-500 group-hover:bg-accent-500"
                        style={{ transitionDelay: `${k * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-500 via-brand-700 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
