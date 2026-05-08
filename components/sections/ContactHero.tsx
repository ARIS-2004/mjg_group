'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Headphones, Users, ShieldCheck,
  ArrowUpRight, MapPin, Award, Clock,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

export default function ContactHero() {
  return (
    <section className="relative pt-20 sm:pt-22 pb-4 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f0f5ff 0%, #eaf1fc 50%, #f5f8ff 100%)' }} />
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />
      <div className="glow-blob -top-28 -left-16 h-[380px] w-[380px] bg-brand-500/12" />
      <div className="glow-blob top-16 -right-24 h-[420px] w-[420px] bg-accent-500/10" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

          {/* ─── LEFT ─── */}
          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/70 px-3.5 py-1.5 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                Let&apos;s Connect
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpSlow}
              className="display-h mt-2 text-[20px] sm:text-[24px] lg:text-[30px] leading-[1.06] tracking-tight"
            >
              We&apos;re here{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
                  to help
                </span>
              </span>{' '}
              you<span className="text-accent-500">.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-1.5 max-w-lg text-[12px] leading-relaxed text-brand-900/65">
              Whether you need a proposal, have a question, or want to explore a
              partnership — our team responds with enterprise-grade speed.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="mt-3 flex items-stretch gap-2">
              {[
                { v: '24×7', l: 'Support', sub: 'Always-on ops', icon: Headphones, color: 'bg-brand-500' },
                { v: '< 24 hr', l: 'Reply', sub: 'Guaranteed', icon: Users, color: 'bg-emerald-500' },
                { v: '500+', l: 'Clients', sub: 'Enterprise trusted', icon: ShieldCheck, color: 'bg-accent-500' },
              ].map((s, i) => (
                <div key={i} className="flex-1 rounded-xl border border-white/80 bg-white/80 p-2.5 shadow-[0_4px_16px_-8px_rgba(11,31,77,0.15)] backdrop-blur-sm">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${s.color} text-white shadow-sm`}>
                    <s.icon className="h-3.5 w-3.5" />
                  </div>
                  <p className="mt-1.5 font-display text-[14px] font-extrabold text-brand-900 tracking-tight leading-none">
                    {s.v}
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold text-brand-900">{s.l}</p>
                  <p className="text-[8px] text-brand-900/50 mt-0.5 uppercase tracking-wider">{s.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-3">
              <Link
                href="#contact-form"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-5 py-2 text-[12px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT ─── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative hidden lg:flex items-center justify-end"
          >
            <div className="relative w-[280px] h-[280px]">
              {/* Outer glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[32px]"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.18) 0%, transparent 70%)', filter: 'blur(24px)' }}
              />

              {/* Main image card — rounded rectangle, not circle */}
              <div className="relative h-full w-full overflow-hidden rounded-[28px] shadow-[0_20px_50px_-16px_rgba(11,31,77,0.32)] ring-1 ring-white/60">
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80"
                  alt="Modern enterprise skyline"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-brand-900/10 to-transparent" />

                {/* Bottom text overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">MJG Group</p>
                  <p className="text-[13px] font-bold text-white leading-tight">Enterprise Operations Centre</p>
                </div>
              </div>

              {/* Live pill — top right */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                className="absolute -top-3 -right-3 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-xl"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-[10px] font-bold text-brand-900">Live Support</p>
              </motion.div>

              {/* Response time — bottom left */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-xl"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Headphones className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[9px] uppercase tracking-wider text-brand-500 font-semibold">Response</p>
                  <p className="text-[11px] font-bold text-brand-900">&lt; 4 min avg.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ─── TRUST STRIP ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-1.5 rounded-xl border border-white/80 bg-white/70 p-2 shadow-[0_8px_24px_-16px_rgba(11,31,77,0.15)] backdrop-blur-md"
        >
          {[
            { icon: MapPin,  t: 'Pan India Presence',    s: 'Serving clients across industries and cities' },
            { icon: Award,   t: 'ISO 9001:2015 Certified', s: 'Committed to quality and compliance' },
            { icon: Users,   t: 'Expert Team',            s: 'Industry veterans at your service' },
            { icon: Clock,   t: 'Always Available',       s: 'Round-the-clock support' },
          ].map((b, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-2 py-1 ${i < 3 ? 'sm:border-r sm:border-brand-100/60' : ''}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100/80">
                <b.icon className="h-3.5 w-3.5" />
              </span>
              <div className="leading-tight min-w-0">
                <p className="text-[12px] font-bold text-brand-900 tracking-tight truncate">{b.t}</p>
                <p className="text-[10px] text-brand-900/50 leading-snug">{b.s}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
