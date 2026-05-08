'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  ReceiptText,
  Scale,
  ShieldCheck,
  Wrench,
  Sparkles,
  Wind,
  ArrowUpRight,
  BadgeCheck,
  Cpu,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';
import type { LucideIcon } from 'lucide-react';

type ServiceCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  tone: 'brand' | 'accent';
};

const featured: ServiceCard = {
  icon: Building2,
  label: 'Integrated Operations',
  title: 'Integrated Facility\nManagement',
  desc: 'End-to-end services for safe, efficient and professionally managed workplaces.',
  bullets: ['Hard & Soft Services', 'Hygiene & Sanitation', 'Asset & Infra', '24×7 Helpdesk'],
  image:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  tone: 'brand',
};

const rightTwo: ServiceCard[] = [
  {
    icon: Users,
    label: 'Workforce Solutions',
    title: 'Workforce Outsourcing',
    desc: 'Skilled, verified and well-trained workforce across multiple industries.',
    bullets: ['Skilled / Unskilled', 'Industry-specific Staffing', 'Flexible Models'],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80',
    tone: 'accent',
  },
  {
    icon: ReceiptText,
    label: 'Finance & Compliance',
    title: 'Payroll & HR Operations',
    desc: 'Technology-driven payroll, statutory returns and HR administration.',
    bullets: ['Payslip Distribution', 'Statutory Returns', 'EPF / ESIC'],
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80',
    tone: 'brand',
  },
];

const middleThree: ServiceCard[] = [
  {
    icon: Scale,
    label: 'Compliance',
    title: 'Statutory & Legal Compliance',
    desc: '100% compliant with Indian labour laws and taxation regulations.',
    bullets: ['EPF / ESIC', 'Contract Labour', 'GST', 'Audit Support'],
    image:
      'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1100&q=80',
    tone: 'brand',
  },
  {
    icon: ShieldCheck,
    label: 'Protection',
    title: 'Security & Surveillance',
    desc: 'PSARA-licensed 24×7 security operations and electronic surveillance.',
    bullets: ['PSARA Licensed', 'Trained Personnel', 'CCTV & Surveillance'],
    image:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1100&q=80',
    tone: 'accent',
  },
  {
    icon: Wrench,
    label: 'Engineering Services',
    title: 'MEP & Technical Services',
    desc: 'Mechanical, electrical, plumbing and multi-trade engineering expertise.',
    bullets: ['Electrical / Mechanical', 'Plumbing & Welding', 'Maintenance'],
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=80',
    tone: 'brand',
  },
];

const bottomTwo: ServiceCard[] = [
  {
    icon: Wind,
    label: 'Climate Systems',
    title: 'HVAC Operations & Maintenance',
    desc: 'Installation, monitoring and preventive maintenance for HVAC systems.',
    bullets: ['Installation', 'Operations', 'Preventive Maintenance'],
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1100&q=80',
    tone: 'brand',
  },
  {
    icon: Sparkles,
    label: 'Hygiene Care',
    title: 'Housekeeping & Hygiene Solutions',
    desc: 'Mechanized housekeeping, façade cleaning, deep cleaning and hygiene programs.',
    bullets: ['Daily Cleaning', 'Façade & Carpets', 'Deep Clean'],
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=80',
    tone: 'accent',
  },
];

const microCopy = [
  { icon: BadgeCheck, label: 'ISO-certified operational excellence' },
  { icon: Cpu, label: 'Technology-enabled workforce systems' },
  { icon: MapPin, label: 'Scalable support across India' },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-surface-soft" />
      <div className="absolute inset-0 grid-bg opacity-[0.18]" />
      <div className="glow-blob -top-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-brand-500/10" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        {/* HEADER */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
              Our Services
            </span>
            <span className="h-px w-10 bg-brand-500" />
          </motion.div>
          <motion.h2
            variants={fadeUpSlow}
            className="display-h mt-3 text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.04] tracking-tight"
          >
            Comprehensive solutions.{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
              Exceptional standards
            </span>
            <span className="text-accent-500">.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-[14px] leading-relaxed text-brand-900/60"
          >
            Smart, efficient and compliant facility management and workforce
            solutions — so you can focus on what matters most: your core business.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            {microCopy.map((m) => (
              <span
                key={m.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white/85 px-3.5 py-1.5 text-[11.5px] font-medium text-brand-900/75 shadow-[0_4px_12px_-8px_rgba(11,31,77,0.18)] backdrop-blur"
              >
                <m.icon className="h-3.5 w-3.5 text-brand-500" />
                {m.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* BENTO — 3 stacked grids so each row controls its own height */}
        <div className="mt-10 space-y-4">
          {/* TOP ROW — featured (7) + 2 stacked cards (5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <FeaturedCard
              data={featured}
              className="lg:col-span-7"
            />
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 grid-rows-2">
              {rightTwo.map((s) => (
                <HorizontalCard key={s.title} data={s} />
              ))}
            </div>
          </div>

          {/* MIDDLE ROW — 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {middleThree.map((s, i) => (
              <HorizontalCard
                key={s.title}
                data={s}
                delay={0.05 + i * 0.04}
              />
            ))}
          </div>

          {/* BOTTOM ROW — 2 cards (5/7 split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {bottomTwo.map((s, i) => (
              <HorizontalCard
                key={s.title}
                data={s}
                className={i === 0 ? 'lg:col-span-5' : 'lg:col-span-7'}
                delay={0.1 + i * 0.04}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex flex-col gap-5 rounded-2xl border border-brand-100 bg-white p-5 shadow-[0_8px_22px_-16px_rgba(11,31,77,0.18)] sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.5)]">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-[16px] font-bold text-brand-900 tracking-tight">
                Driven by excellence. Built on trust.
              </p>
              <p className="text-[12px] text-brand-900/60">
                Delivering value through people, processes &amp; performance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
            {[
              { v: '10K+', l: 'Workforce Deployed' },
              { v: '500+', l: 'Clients Served' },
              { v: '24×7', l: 'Operational Support' },
              { v: '100%', l: 'Statutory Compliant' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-display text-[18px] font-extrabold text-brand-900 tracking-tight">
                  {s.v}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-brand-900/55 mt-0.5">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───── FEATURED CARD — large dark gradient with image overlay ───── */
function FeaturedCard({
  data,
  className = '',
}: {
  data: ServiceCard;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative h-full overflow-hidden rounded-2xl shadow-[0_18px_50px_-26px_rgba(11,31,77,0.4)] transition-all duration-500 hover:shadow-[0_28px_60px_-22px_rgba(37,99,235,0.45)] min-h-[340px] sm:min-h-[420px] ${className}`}
    >
      <div className="absolute inset-0">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover scale-105 transition-transform duration-[1.4s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
      </div>

      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1.4px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 lg:p-8">
        <div>
          {/* Icon + label */}
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)] ring-1 ring-white/20">
              <data.icon className="h-5 w-5" />
            </span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brand-300">
              {data.label}
            </span>
          </div>

          <h3 className="mt-5 font-display text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-white leading-[1.1] tracking-tight whitespace-pre-line">
            {data.title}
          </h3>
          <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/75">
            {data.desc}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {data.bullets.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#"
          className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[12.5px] font-semibold text-brand-900 shadow transition-all duration-300 hover:bg-accent-500 hover:text-white hover:translate-x-1"
        >
          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

/* ───── HORIZONTAL CARD — text left, image right ───── */
function HorizontalCard({
  data,
  className = '',
  delay = 0,
}: {
  data: ServiceCard;
  className?: string;
  delay?: number;
}) {
  const accent = data.tone === 'accent' ? 'text-accent-500 bg-accent-500/10' : 'text-brand-600 bg-brand-50';
  const accentSolid =
    data.tone === 'accent'
      ? 'bg-accent-500 text-white shadow-[0_8px_18px_-6px_rgba(249,115,22,0.55)]'
      : 'bg-brand-500 text-white shadow-[0_8px_18px_-6px_rgba(37,99,235,0.55)]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`group relative overflow-hidden rounded-2xl border border-brand-100/70 bg-white shadow-[0_10px_28px_-20px_rgba(11,31,77,0.22)] transition-all duration-500 hover:border-brand-200 hover:shadow-[0_22px_50px_-22px_rgba(37,99,235,0.32)] ${className}`}
    >
      <div className="relative flex h-full flex-col sm:flex-row">
        {/* IMAGE — stacks on top on mobile, sits right on sm+ */}
        <div className="relative h-36 w-full shrink-0 overflow-hidden sm:order-2 sm:h-auto sm:w-[42%]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover scale-105 transition-transform duration-[1.4s] ease-out group-hover:scale-110"
          />
          {/* Mobile: bottom fade into text. Desktop: left fade. */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/30 sm:to-transparent" />
        </div>

        {/* TEXT */}
        <div className="relative z-10 flex flex-1 flex-col p-5 sm:order-1 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${accentSolid}`}>
              <data.icon className="h-4 w-4" />
            </span>
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                data.tone === 'accent' ? 'text-accent-500' : 'text-brand-500'
              }`}
            >
              {data.label}
            </span>
          </div>

          <h3 className="mt-4 font-display text-[17px] sm:text-[18px] font-bold text-brand-900 leading-tight tracking-tight">
            {data.title}
          </h3>
          <p className="mt-2 text-[12.5px] leading-relaxed text-brand-900/65 max-w-xs">
            {data.desc}
          </p>

          <ul className="mt-3 flex flex-wrap gap-1">
            {data.bullets.map((b) => (
              <li
                key={b}
                className="rounded-full border border-brand-100 bg-brand-50/50 px-2 py-0.5 text-[10px] font-medium text-brand-900/70"
              >
                {b}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11.5px] font-semibold text-brand-900 border border-brand-100 shadow-sm transition-all duration-300 hover:bg-brand-500 hover:border-brand-500 hover:text-white hover:translate-x-0.5"
          >
            Learn more <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
