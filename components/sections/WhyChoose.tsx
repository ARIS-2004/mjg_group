'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Target,
  Gauge,
  ShieldCheck,
  Headphones,
  Award,
  MapPin,
  BadgeCheck,
  ScrollText,
  Quote,
  Clock,
  UserCog,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const features = [
  {
    icon: TrendingUp,
    title: 'Performance',
    desc: 'Measurable outcomes through data-led processes and a performance-first culture.',
    accent: 'brand',
  },
  {
    icon: Users,
    title: 'Team Spirit',
    desc: 'Our strength lies in our people, collaboration and a culture of mutual respect.',
    accent: 'brand',
  },
  {
    icon: Target,
    title: 'Desire to Excel',
    desc: 'We go beyond expectations to deliver excellence in everything we do.',
    accent: 'accent',
  },
  {
    icon: Gauge,
    title: 'Operational Efficiency',
    desc: 'Well-coordinated systems, processes and resources reduce cost & risk.',
    accent: 'brand',
  },
  {
    icon: ShieldCheck,
    title: 'Statutory Compliance',
    desc: '100% compliant with Indian labour and taxation laws — every cycle, every site.',
    accent: 'brand',
  },
  {
    icon: Headphones,
    title: '24×7 Support',
    desc: 'Round-the-clock operations control keeping your facilities online and on standard.',
    accent: 'accent',
  },
];

const stats = [
  { v: '35+', l: 'Years of\nExperience', icon: ShieldCheck },
  { v: '500+', l: 'Corporate\nClients', icon: Users },
  { v: '10K+', l: 'Workforce\nManaged', icon: UserCog },
  { v: '24×7', l: 'Operational\nSupport', icon: Clock },
];

const indicators = [
  { label: 'ISO 9001:2015 Certified', icon: ShieldCheck },
  { label: 'PAN India Coverage', icon: MapPin },
  { label: 'Statutory Compliant', icon: BadgeCheck },
  { label: 'Audited Quality Mgmt.', icon: Award },
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(37,99,235,0.05), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute right-12 top-12 h-24 w-24 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(11,31,77,0.16) 1.2px, transparent 1.6px)',
          backgroundSize: '12px 12px',
        }}
      />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ─── LEFT — image + dark stats + quote ─── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative order-1 lg:order-1 mt-16 lg:mt-0"
          >
            {/* Image card */}
            <div className="relative overflow-hidden rounded-[28px] border border-brand-100 bg-white shadow-[0_20px_50px_-26px_rgba(11,31,77,0.3)]">
              <div className="relative aspect-[4/4.4]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Operations dashboard analytics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
              </div>

              {/* Dark stats panel — bottom area inside same card */}
              <div className="relative overflow-hidden bg-cta-gradient text-white">
                <div className="absolute inset-0 grid-bg opacity-[0.06]" />
                <div className="glow-blob -top-16 -right-16 h-44 w-44 bg-brand-400/25" />
                <div className="glow-blob -bottom-12 -left-12 h-40 w-40 bg-accent-500/15" />

                <div className="relative grid grid-cols-4 gap-2 px-4 py-5 sm:px-5">
                  {stats.map((s) => (
                    <div key={s.l} className="flex flex-col items-center text-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/90">
                        <s.icon className="h-[18px] w-[18px]" />
                      </span>
                      <p className="mt-2.5 font-display text-[20px] font-extrabold leading-none">
                        {s.v}
                      </p>
                      <p className="mt-1.5 whitespace-pre-line text-[9.5px] uppercase tracking-[0.12em] text-white/65 leading-tight">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative mt-5 rounded-2xl border border-brand-100/80 bg-gradient-to-br from-brand-50/70 via-white to-white p-5 shadow-[0_10px_30px_-20px_rgba(11,31,77,0.22)] overflow-hidden"
            >
              <span className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b from-brand-500 to-brand-700" />

              <div className="relative pl-3">
                <Quote className="h-4 w-4 text-brand-500" strokeWidth={2.4} />
                <p className="mt-2 text-[14px] italic text-brand-900/85 leading-relaxed">
                  &ldquo;We take pride in delivering{' '}
                  <span className="font-semibold not-italic text-brand-700">
                    excellence
                  </span>{' '}
                  through performance, teamwork and a relentless drive to excel.&rdquo;
                </p>
                <span className="mt-3 block h-[3px] w-10 rounded-full bg-accent-500" />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT — copy + features + chips ─── */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-7 order-2 lg:order-2"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-10 bg-brand-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Why Choose MJG
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpSlow}
              className="display-h mt-3 text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight"
            >
              Your success.{' '}
              <br className="hidden sm:block" />
              Our commitment<span className="text-accent-500">.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-900/65"
            >
              As integrated facility management providers, our aim is to help
              clients focus on their core business — while we assume full charge
              of the non-core, in the most cost-effective way.
            </motion.p>

            {/* Feature cards — 3-col grid */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative rounded-xl border border-brand-100/80 bg-white p-4 shadow-[0_10px_30px_-22px_rgba(11,31,77,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_40px_-22px_rgba(37,99,235,0.32)]"
                >
                  <span
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-all duration-300 group-hover:scale-105 ${
                      f.accent === 'accent'
                        ? 'bg-accent-500/10 text-accent-500 ring-accent-500/15'
                        : 'bg-brand-50 text-brand-600 ring-brand-100'
                    }`}
                  >
                    <f.icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-3 font-display text-[14px] font-bold text-brand-900 tracking-tight">
                    {f.title}
                  </h3>
                  <span className="mt-1 block h-[2px] w-7 rounded-full bg-accent-500" />
                  <p className="mt-2 text-[12px] leading-relaxed text-brand-900/65">
                    {f.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Compliance chips */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {indicators.map((i) => (
                <span
                  key={i.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-[12.5px] font-semibold text-brand-900 shadow-[0_4px_12px_-8px_rgba(11,31,77,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.3)]"
                >
                  <i.icon className="h-3.5 w-3.5 text-brand-500 transition-colors group-hover:text-accent-500" />
                  {i.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
