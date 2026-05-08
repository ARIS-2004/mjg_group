'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Quote, ShieldCheck, Users, Award, Clock } from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-white" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="relative overflow-hidden rounded-[28px] border border-brand-100 bg-surface-soft shadow-soft"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
              alt="Corporate handshake"
              fill
              className="object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-white/20" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 sm:p-6 lg:p-8">
            <div className="lg:col-span-6">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                  Ready to Transform Your Operations?
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUpSlow}
                className="display-h mt-3 text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.08] tracking-tight"
              >
                Let MJG handle{' '}
                <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">operations</span>.{' '}
                <br className="hidden sm:block" />
                You focus on{' '}
                <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">growth</span>.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-3 max-w-xl text-[13px] leading-relaxed text-brand-900/70"
              >
                From integrated facility management to workforce solutions, we
                deliver performance, reliability, and peace of mind — every
                single day.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2.5">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/30">
                  Request a Proposal <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-200 bg-white/90 px-6 py-3 text-[14px] font-semibold text-brand-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white">
                  <PhoneCall className="h-4 w-4 transition-transform group-hover:rotate-12" /> Talk to an Expert
                </Link>
              </motion.div>
            </div>

            {/* Trust card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md rounded-2xl border border-white/70 bg-white/85 p-4 shadow-soft-lg backdrop-blur-xl">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                  <Quote className="h-3.5 w-3.5" />
                </div>
                <p className="mt-2.5 font-display text-[15px] font-semibold text-brand-900 leading-snug">
                  Trusted by 500+ organizations
                </p>
                <p className="mt-0.5 text-[12px] text-brand-900/65">
                  to deliver excellence and drive results.
                </p>
                <div className="mt-3 flex items-center">
                  <div className="flex -space-x-2.5">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden ring-1 ring-brand-100"
                      >
                        <Image
                          src={`https://i.pravatar.cc/150?img=${n + 10}`}
                          alt={`Team member ${n}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="ml-2.5 inline-flex h-7 items-center rounded-full bg-brand-900 px-2.5 text-[10px] font-semibold text-white">
                    500+
                  </span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
                className="absolute -right-4 -top-4 hidden sm:flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-brand-900 shadow-soft backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                512 sites live now
              </motion.div>
            </motion.div>
          </div>

          {/* Stats strip */}
          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 border-t border-brand-100 bg-white/60 px-5 py-4 sm:px-6 lg:px-8 backdrop-blur">
            {[
              { v: '35+ Years', l: 'of Proven Excellence', icon: Award },
              { v: '10,000+', l: 'Workforce Managed', icon: Users },
              { v: '24×7', l: 'Operational Support', icon: Clock },
              { v: '100%', l: 'Statutory Compliant', icon: ShieldCheck },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <s.icon className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="font-display text-[14px] font-bold text-brand-900">{s.v}</p>
                  <p className="text-[9px] text-brand-900/60">{s.l}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dark CTA bar */}
          <div className="relative overflow-hidden rounded-b-[28px] bg-cta-gradient text-white">
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="glow-blob -top-20 right-0 h-60 w-60 bg-accent-500/30" />
            <div className="relative flex flex-col items-start gap-3 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent-500 ring-1 ring-white/15">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-display text-[16px] font-semibold">
                    Let&apos;s build a smarter, safer, more efficient workplace.
                  </p>
                  <p className="text-[12px] text-white/70">
                    Partner with MJG and experience the difference.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end">
                <p className="text-[9px] uppercase tracking-[0.22em] text-accent-400 font-semibold">
                  Call us now
                </p>
                <p className="mt-0.5 font-display text-[17px] font-bold">
                  011-47603851 <span className="text-white/40">|</span> 1800 309 4709
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
