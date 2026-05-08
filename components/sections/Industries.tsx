'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Truck,
  HardHat,
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Landmark,
  Building2,
  Plane,
  ArrowRight,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const industries = [
  {
    icon: Truck,
    label: 'Logistics & Supply Chain',
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: HardHat,
    label: 'Construction & Infrastructure',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Factory,
    label: 'Manufacturing',
    image:
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: HeartPulse,
    label: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: ShoppingBag,
    label: 'FMCG & Retail',
    image:
      'https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Hotel,
    label: 'Hotels & Hospitality',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Landmark,
    label: 'Government',
    image:
      'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Building2,
    label: 'Corporate Offices',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Plane,
    label: 'Aviation & Infrastructure',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(37,99,235,0.06), transparent 60%)',
        }}
      />

      {/* Architectural blueprint accent — top right */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-[55%] max-w-[720px] aspect-[2/1] opacity-[0.18]">
        <svg
          viewBox="0 0 800 400"
          fill="none"
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="bldg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Stylised buildings */}
          <path
            d="M50,400 L50,180 L120,180 L120,90 L240,90 L240,180 L320,180 L320,150 L420,150 L420,80 L520,80 L520,140 L600,140 L600,200 L720,200 L720,400 Z"
            stroke="url(#bldg)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M120,180 L120,90 L240,90 L240,180"
            stroke="url(#bldg)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M420,150 L420,80 L520,80 L520,140"
            stroke="url(#bldg)"
            strokeWidth="1"
            fill="none"
          />
          {/* Window grids */}
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 3 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={130 + c * 30}
                y={100 + r * 12}
                width="14"
                height="6"
                fill="#2563EB"
                opacity="0.3"
              />
            ))
          )}
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 3 }).map((_, c) => (
              <rect
                key={`b-${r}-${c}`}
                x={430 + c * 30}
                y={92 + r * 12}
                width="14"
                height="6"
                fill="#2563EB"
                opacity="0.3"
              />
            ))
          )}
          {/* Birds */}
          <path d="M650,40 q5,-6 10,0 q5,-6 10,0" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M680,28 q4,-5 8,0 q4,-5 8,0" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* Decorative dots — top left */}
      <div
        aria-hidden
        className="absolute left-6 top-12 h-20 w-20 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(11,31,77,0.16) 1.2px, transparent 1.6px)',
          backgroundSize: '12px 12px',
        }}
      />
      <div className="glow-blob -top-20 -left-10 h-72 w-72 bg-brand-500/8" />

      <div className="relative container-px mx-auto max-w-[1320px]">
        {/* ─── HEADER ─── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          <div className="lg:col-span-7">
            {/* Eyebrow with line */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gradient-to-r from-brand-500 to-brand-300" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Industries We Serve
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpSlow}
              className="display-h mt-5 text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.04] tracking-tight"
            >
              Built for the demands{' '}
              <br className="hidden sm:block" />
              of{' '}
              <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-500 bg-clip-text text-transparent">
                modern enterprise
              </span>
              <span className="text-accent-500">.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center gap-1.5"
            >
              <span className="h-[3px] w-12 rounded-full bg-accent-500" />
              <span className="h-[3px] w-2 rounded-full bg-brand-500/40" />
            </motion.div>
          </div>

          {/* Description with vertical accent */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 relative pl-5 lg:pl-6"
          >
            <span className="absolute left-0 top-1.5 flex flex-col items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-500 ring-4 ring-brand-500/15" />
              <span className="block w-px h-14 bg-gradient-to-b from-brand-300 to-transparent" />
            </span>
            <p className="text-[14.5px] leading-relaxed text-brand-900/70">
              From global supply chains to government institutions,{' '}
              <strong className="text-brand-700 font-semibold">MJG</strong>{' '}
              delivers integrated facility management, workforce, payroll and
              compliance services tailored to each sector&apos;s standards.
            </p>
          </motion.div>
        </motion.div>

        {/* ─── CARDS GRID ─── */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {industries.map((it, i) => (
            <motion.a
              key={it.label}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{
                duration: 0.7,
                delay: 0.05 + (i % 5) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100/70 bg-white shadow-[0_10px_30px_-20px_rgba(11,31,77,0.2)] transition-all duration-500 hover:shadow-[0_24px_50px_-22px_rgba(37,99,235,0.32)] hover:border-brand-200"
            >
              {/* Image header */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={it.image}
                  alt={it.label}
                  fill
                  className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Light blue wash so brand colour stays consistent */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-500/35 via-brand-500/20 to-white/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              </div>

              {/* Floating icon medallion — overlaps image/body seam */}
              <div className="relative -mt-7 mx-auto z-10">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(11,31,77,0.3)] ring-1 ring-brand-100">
                  <span className="absolute inset-1 rounded-full bg-gradient-to-br from-brand-50/60 to-white" />
                  <it.icon className="relative h-6 w-6 text-brand-600 transition-colors duration-300 group-hover:text-accent-500" />
                </div>
              </div>

              {/* Body */}
              <div className="px-4 pt-3 pb-5 text-center flex-1 flex flex-col">
                <h3 className="font-display text-[14.5px] font-bold text-brand-900 leading-tight tracking-tight">
                  {it.label}
                </h3>
                <p className="mt-2 text-[11.5px] text-brand-900/55">
                  Sector-specific
                  <br />
                  staffing &amp; FM
                </p>
              </div>

              {/* Arrow button — bottom right */}
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-600 shadow-sm transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
