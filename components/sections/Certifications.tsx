'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  ScrollText,
  FileCheck2,
  Check,
  BadgeCheck,
  Ribbon,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const badges = [
  {
    icon: Award,
    title: 'ISO 9001:2015',
    sub: 'Quality Management\nSystem Certified',
  },
  {
    icon: ShieldCheck,
    title: 'PSARA Licensed',
    sub: 'Govt. Licensed Security\nProvider',
  },
  {
    icon: ScrollText,
    title: '100% Statutory',
    sub: 'Fully Compliant with\nLegal Requirements',
  },
  {
    icon: FileCheck2,
    title: 'EPF · ESI · GST',
    sub: 'Tax & Statutory\nCompliances',
  },
];

const certificates = [
  { src: '/c1.png', label: 'MJG Suraksha Pvt. Ltd.' },
  { src: '/c2.png', label: 'MJG International Pvt. Ltd.' },
];

export default function Certifications() {
  return (
    <section className="relative py-12 sm:py-14 overflow-hidden">
      {/* Background — soft white→tint gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, #f7faff 55%, #ffffff 100%)',
        }}
      />

      {/* Decorative dot grids */}
      <div
        aria-hidden
        className="absolute left-6 top-12 h-24 w-24 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(11,31,77,0.18) 1.2px, transparent 1.6px)',
          backgroundSize: '12px 12px',
        }}
      />
      <div
        aria-hidden
        className="absolute right-10 bottom-16 h-32 w-32 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(37,99,235,0.18) 1.2px, transparent 1.6px)',
          backgroundSize: '12px 12px',
        }}
      />

      {/* Subtle wave/grain shape bottom-right */}
      <div
        aria-hidden
        className="absolute -bottom-24 -right-32 h-[420px] w-[680px] opacity-[0.35]"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.07), transparent 60%)',
        }}
      />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* ─── LEFT — copy + badges ─── */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="flex flex-col"
          >
            {/* Eyebrow with shield chip */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                Accreditations &amp; Compliance
              </span>
              <span className="h-px w-12 bg-gradient-to-r from-brand-300 to-accent-500" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeUpSlow}
              className="display-h mt-4 text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.06] tracking-tight"
            >
              Compliance &amp; quality —{' '}
              <br className="hidden sm:block" />
              independently{' '}
              <span className="text-brand-500">verified</span>
              <span className="text-accent-500">.</span>
            </motion.h2>

            {/* Accent rule */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center gap-1"
            >
              <span className="h-[3px] w-12 rounded-full bg-brand-500" />
              <span className="h-[3px] w-3 rounded-full bg-accent-500" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-[14px] leading-relaxed text-brand-900/65"
            >
              Both MJG Suraksha and MJG International operate ISO 9001:2015
              certified quality management systems, alongside PSARA licensing
              and full statutory compliance.
            </motion.p>

            {/* Badge cards — pushed to bottom so left bottoms align with right */}
            <motion.div
              variants={fadeUp}
              className="mt-auto pt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="group relative flex items-center gap-3 rounded-2xl border border-brand-100/70 bg-white p-3.5 shadow-[0_10px_30px_-20px_rgba(11,31,77,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.35)]"
                >
                  {/* tiny gradient accent on the left edge */}
                  <span className="pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full bg-gradient-to-b from-brand-500/0 via-brand-500/40 to-brand-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <b.icon className="h-[18px] w-[18px]" />
                  </span>

                  <div className="leading-tight flex-1 min-w-0">
                    <p className="font-display text-[14px] font-bold text-brand-900 tracking-tight">
                      {b.title}
                    </p>
                    <p className="mt-0.5 whitespace-pre-line text-[11px] leading-snug text-brand-900/60">
                      {b.sub}
                    </p>
                  </div>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_6px_14px_-6px_rgba(37,99,235,0.6)] transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT — certificate cards ─── */}
          <div className="relative flex flex-col">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 flex-1">
              {certificates.map((c, i) => (
                <motion.div
                  key={c.src}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col"
                >
                  {/* Frame */}
                  <div className="relative overflow-hidden rounded-3xl border border-brand-100/70 bg-gradient-to-b from-white to-brand-50/40 p-3 shadow-[0_30px_70px_-30px_rgba(11,31,77,0.4)] transition-all duration-500 group-hover:shadow-[0_36px_80px_-26px_rgba(11,31,77,0.45)]">
                    <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand-500/0 blur-3xl transition-all duration-500 group-hover:bg-brand-500/15" />
                    <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        {[0, 1, 2].map((d) => (
                          <span key={d} className="h-1 w-1 rounded-full bg-brand-300" />
                        ))}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.22em] text-brand-400 font-semibold">
                        № {String(i + 1).padStart(2, '0')} / 02
                      </span>
                    </div>
                    {/* Certificate image — fixed aspect ratio so it never collapses */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={c.src}
                        alt={`${c.label} ISO 9001:2015 Certificate`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Bottom label strip */}
                  <div className="mt-3 flex items-center justify-between rounded-2xl border border-brand-100/70 bg-white px-4 py-2.5 shadow-[0_10px_28px_-18px_rgba(11,31,77,0.22)]">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-500 ring-1 ring-accent-500/20">
                        <Ribbon className="h-4 w-4" />
                      </span>
                      <div className="leading-tight min-w-0">
                        <p className="text-[10.5px] uppercase tracking-[0.18em] text-brand-500 font-semibold">
                          ISO 9001:2015
                        </p>
                        <p className="text-[12.5px] font-semibold text-brand-900 truncate">
                          {c.label}
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-[0_4px_12px_-6px_rgba(16,185,129,0.4)]">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
