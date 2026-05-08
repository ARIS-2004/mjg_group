'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Briefcase,
  Wrench,
  Sparkles,
  Download,
  ShieldCheck,
  Calendar,
  Boxes,
  MapPin,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const entities = [
  {
    icon: Building2,
    name: 'MJG Suraksha Pvt. Ltd.',
    desc: 'Security, housekeeping, façade cleaning & manpower solutions.',
  },
  {
    icon: Briefcase,
    name: 'MJG International Pvt. Ltd.',
    desc: 'Government contracts — facility & manpower solutions.',
  },
  {
    icon: Wrench,
    name: 'H4TW Services LLP',
    desc: 'Technical support services — MEP & HVAC.',
  },
  {
    icon: Sparkles,
    name: 'Ultrakleen Homes',
    desc: 'Deep cleaning, upholstery, carpet & move-in/out cleaning.',
  },
];

const timeline = [
  { year: '2001', title: 'Founded', desc: 'MJG Group begins operations in Delhi NCR.' },
  { year: '2008', title: 'Scale-up', desc: 'Expanded into integrated facility management.' },
  { year: '2015', title: 'Diversified', desc: 'Launched MJG International for govt. contracts.' },
  { year: '2026', title: 'Today', desc: '10,000+ workforce, 500+ clients, 24×7 operations.' },
];

const visualStats = [
  { icon: Calendar, value: '35+', label: 'Years' },
  { icon: Boxes, value: '4', label: 'Companies' },
  { icon: MapPin, value: 'PAN', label: 'India' },
];

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-14 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      {/* faint dotted decoration in upper-left */}
      <div
        className="absolute left-6 top-20 h-32 w-32 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(11,31,77,0.18) 1.2px, transparent 1.6px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div className="glow-blob top-10 -left-20 h-72 w-72 bg-brand-500/8" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ─────────── LEFT VISUAL ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_30px_80px_-30px_rgba(11,31,77,0.35)]">
              {/* Top — image area */}
              <div className="relative aspect-[4/3.6] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
                  alt="MJG team collaborating in modern enterprise workspace"
                  fill
                  className="object-cover"
                />
                {/* Light scrim so glass ISO card stays readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/15 via-transparent to-brand-900/10" />

                {/* Glass ISO certificate card — top-left */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-5 top-5 w-[58%] max-w-[230px] rounded-2xl border border-white/40 bg-white/30 p-4 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(11,31,77,0.2)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                        Certified
                      </p>
                      <p className="mt-1 font-display text-[18px] font-extrabold leading-tight text-brand-900">
                        ISO 9001:2015
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-brand-900/70">
                        Quality Management System
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-700 ring-1 ring-brand-500/20">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom — dark blue gradient panel */}
              <div className="relative overflow-hidden bg-cta-gradient text-white">
                <div className="absolute inset-0 grid-bg opacity-[0.07]" />
                <div className="glow-blob -bottom-20 -right-20 h-56 w-56 bg-accent-500/15" />

                <div className="relative px-6 pt-6 pb-6 sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                    Since 2001
                  </p>
                  <p className="mt-3 font-display text-[22px] sm:text-[26px] font-bold leading-tight">
                    Two decades of{' '}
                    <span className="text-accent-500">operational excellence</span>{' '}
                    in Indian enterprise services.
                  </p>

                  {/* Orange progress accent */}
                  <div className="mt-5 h-px w-full bg-white/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-px bg-accent-500"
                    />
                  </div>

                  {/* Stats row */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {visualStats.map((s) => (
                      <div key={s.label} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 text-white/90">
                          <s.icon className="h-[18px] w-[18px]" />
                        </span>
                        <div className="leading-tight">
                          <p className="font-display text-[18px] font-extrabold">
                            {s.value}
                          </p>
                          <p className="text-[10.5px] text-white/65">{s.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─────────── RIGHT COPY ─────────── */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-8 lg:pt-2"
          >
            {/* Eyebrow with dot grid */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span
                aria-hidden
                className="grid grid-cols-4 gap-[3px]"
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="h-1 w-1 rounded-full bg-brand-500" />
                ))}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                About MJG Group
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpSlow}
              className="display-h mt-3 text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.06] tracking-tight"
            >
              <span className="text-brand-500">35+ years</span> of building
              trust, scale &amp;{' '}
              <span className="text-accent-500">excellence</span>
              <span className="text-accent-500">.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-[14px] leading-relaxed text-brand-900/70"
            >
              Backed by <strong className="text-brand-900">35+ years</strong> of
              industry leadership, MJG Group — comprising{' '}
              <strong className="text-brand-900">MJG Suraksha Pvt. Ltd.</strong>{' '}
              and{' '}
              <strong className="text-brand-900">
                MJG International Pvt. Ltd.
              </strong>{' '}
              — is an ISO-certified, PSARA-licensed provider of facility
              management, manpower outsourcing, payroll &amp; HR, and statutory
              compliance. We help organisations focus on their core business
              while we take charge of the rest.
            </motion.p>

            {/* Group entities — 2x2 with corner indicator */}
            <motion.div
              variants={fadeUp}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {entities.map((e) => (
                <div
                  key={e.name}
                  className="group relative rounded-xl border border-brand-100/80 bg-white p-4 shadow-[0_8px_24px_-18px_rgba(11,31,77,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
                >
                  {/* Corner dot indicator */}
                  <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-brand-500 ring-2 ring-brand-500/20" />

                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                      <e.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-900 text-[13.5px]">
                        {e.name}
                      </p>
                      <p className="mt-0.5 text-[11.5px] leading-relaxed text-brand-900/65">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Journey */}
            <motion.div variants={fadeUp} className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-500">
                Our Journey
              </p>
              <div className="relative mt-4">
                <div className="absolute left-1.5 right-1.5 top-3 h-px bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeline.map((t, i) => (
                    <motion.div
                      key={t.year}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.6 }}
                      className="relative pt-7"
                    >
                      <span
                        className={`absolute left-0 top-1 h-3 w-3 rounded-full ring-[5px] ${
                          i === 3
                            ? 'bg-accent-500 ring-accent-500/20'
                            : 'bg-brand-500 ring-brand-500/15'
                        }`}
                      />
                      <p className="font-display text-[14px] font-bold text-brand-900">
                        {t.year}
                      </p>
                      <p className="text-[12px] font-semibold text-brand-900/85">
                        {t.title}
                      </p>
                      <p className="text-[11px] text-brand-900/55 leading-relaxed mt-0.5">
                        {t.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2.5">
              <a href="#services" className="btn-primary">
                Explore Capabilities <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#" className="btn-secondary">
                <Download className="h-4 w-4" /> Download Corporate Deck
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
