'use client';

import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, Lock,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Headphones, User, Building, MessageSquare, Pencil, Briefcase, Handshake,
} from 'lucide-react';
import { fadeUp, fadeUpSlow, stagger } from '@/lib/motion';

const contactCards = [
  { icon: MapPin,     title: 'Address',         lines: ['104, 1st Floor, 1/56 D, Lalita Park,', 'Laxmi Nagar, New Delhi - 110092'] },
  { icon: Phone,      title: 'Phone',            lines: ['011-47603851  ·  011-47565888', '+91 9810850683', 'Toll-free: 1800 309 4709'] },
  { icon: Mail,       title: 'General Inquiry',  lines: ['info@mjggroup.in', 'info@mjgsuraksha.asia'] },
  { icon: Briefcase,  title: 'Career Related',   lines: ['hr@mjggroup.in', 'hr@mjgsuraksha.asia'] },
  { icon: Handshake,  title: 'Partner Us',       lines: ['director@mjggroup.in'] },
  { icon: Clock,      title: 'Business Hours',   lines: ['Monday – Saturday', '9:00 AM – 6:00 PM'] },
];

export default function ContactBody() {
  return (
    <section
      id="contact-form"
      className="relative py-10 sm:py-12 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f5f8ff 0%, #eef3fc 50%, #f8faff 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-[0.12]" />
      <div className="glow-blob -top-20 -left-16 h-72 w-72 bg-brand-500/8" />
      <div className="glow-blob bottom-0 right-0 h-64 w-64 bg-accent-500/6" />

      <div className="relative container-px mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* ─── LEFT ─── */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-5 flex flex-col"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-brand-500 to-brand-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-500">Contact Details</span>
            </motion.div>

            <motion.h2 variants={fadeUpSlow} className="display-h mt-2 text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.06] tracking-tight">
              Get in touch<span className="text-accent-500">.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-1.5 text-[13px] leading-relaxed text-brand-900/60">
              We&apos;re here to help and answer any question you may have.
            </motion.p>

            {/* Contact cards — neumorphic style */}
            <div className="mt-5 space-y-2">
              {contactCards.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="group relative flex items-start gap-3 rounded-2xl p-3.5 transition-all duration-300"
                  style={{
                    background: '#f0f5ff',
                    boxShadow: '6px 6px 14px rgba(11,31,77,0.08), -4px -4px 10px rgba(255,255,255,0.9)',
                  }}
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Colored left accent */}
                  <span className="pointer-events-none absolute inset-y-3 left-0 w-[3px] rounded-full bg-gradient-to-b from-brand-500/0 via-brand-500 to-brand-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-brand-600 transition-all duration-300 group-hover:text-white"
                    style={{
                      background: '#e8f0fe',
                      boxShadow: 'inset 2px 2px 5px rgba(11,31,77,0.08), inset -2px -2px 5px rgba(255,255,255,0.9)',
                    }}
                  >
                    <c.icon className="h-4 w-4" />
                  </span>

                  <div className="leading-tight">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">{c.title}</p>
                    {c.lines.map((l, idx) => (
                      <p key={idx} className="mt-0.5 text-[12px] text-brand-900/70 leading-snug">{l}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dark CTA card */}
            <motion.div
              variants={fadeUp}
              className="relative mt-3 overflow-hidden rounded-2xl bg-cta-gradient p-4 text-white shadow-[0_20px_44px_-20px_rgba(11,31,77,0.5)]"
            >
              <div className="absolute inset-0 grid-bg opacity-[0.07]" />
              <div className="glow-blob -top-10 -right-8 h-36 w-36 bg-accent-500/25" />
              <div className="relative flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-400 ring-1 ring-white/15">
                  <Headphones className="h-4 w-4" />
                </span>
                <div className="flex-1 leading-tight">
                  <p className="font-display text-[14px] font-bold">Need immediate assistance?</p>
                  <p className="mt-0.5 text-[11px] text-white/60">Our 24×7 operations centre is a call away.</p>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <a href="tel:01147603851" className="font-display text-[17px] font-bold tracking-tight">011-47603851</a>
                      <a href="tel:18003094709" className="block text-[11px] text-white/50 mt-0.5">Toll-free: 1800 309 4709</a>
                    </div>
                    <a
                      href="tel:01147603851"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-3.5 py-2 text-[12px] font-semibold shadow-[0_8px_18px_-6px_rgba(249,115,22,0.6)] transition-all hover:-translate-y-0.5 hover:bg-accent-600"
                    >
                      <Phone className="h-3 w-3" /> Call now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT — form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div
              className="relative overflow-hidden rounded-[24px] p-6 sm:p-7"
              style={{
                background: '#f0f5ff',
                boxShadow: '12px 12px 28px rgba(11,31,77,0.1), -8px -8px 20px rgba(255,255,255,0.95)',
              }}
            >
              {/* Subtle inner glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-500/6 blur-3xl" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-500">Reach Out</p>
                <h2 className="mt-1.5 font-display text-[22px] sm:text-[26px] font-extrabold text-brand-900 leading-tight tracking-tight">
                  Send us a message<span className="text-accent-500">.</span>
                </h2>
                <p className="mt-1 text-[12px] text-brand-900/50">Fill in the form and our team will get back to you shortly.</p>

                <form className="mt-5 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <NeuField icon={User}  placeholder="Your Name" />
                    <NeuField icon={Mail}  placeholder="Your Email" type="email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <NeuField icon={Phone}    placeholder="Contact Number" />
                    <NeuField icon={Building} placeholder="Company Name" />
                  </div>
                  <NeuSelect icon={MessageSquare} label="How did you find us?">
                    <option>Search engine</option>
                    <option>LinkedIn / Social</option>
                    <option>Referral</option>
                    <option>Industry event</option>
                    <option>Other</option>
                  </NeuSelect>
                  <NeuTextarea icon={Pencil} placeholder="Your Message" rows={4} />

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-5 py-3 text-[13px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(249,115,22,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-8px_rgba(249,115,22,0.65)]"
                  >
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Send Message
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-[10.5px] text-brand-900/40">
                    <Lock className="h-3 w-3" />
                    We respect your privacy. Your information is safe with us.
                  </p>
                </form>

                <div className="mt-5 flex items-center gap-3 border-t border-brand-100/60 pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-900/45 shrink-0">Follow us</p>
                  <div className="flex gap-1.5">
                    {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white"
                        style={{ background: '#e8f0fe', boxShadow: '3px 3px 7px rgba(11,31,77,0.08), -2px -2px 5px rgba(255,255,255,0.9)' }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Neumorphic form primitives ── */

function NeuField({ icon: Icon, placeholder, type = 'text' }: { icon: React.ComponentType<{ className?: string }>; placeholder: string; type?: string }) {
  return (
    <label
      className="group relative flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-500/20"
      style={{ background: '#e8f0fe', boxShadow: 'inset 3px 3px 7px rgba(11,31,77,0.09), inset -2px -2px 6px rgba(255,255,255,0.85)' }}
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-400 transition-colors group-focus-within:text-brand-500" />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-[13px] text-brand-900 placeholder:text-brand-900/35 focus:outline-none"
      />
    </label>
  );
}

function NeuSelect({ icon: Icon, label, children }: { icon: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <label
      className="group relative flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-500/20"
      style={{ background: '#e8f0fe', boxShadow: 'inset 3px 3px 7px rgba(11,31,77,0.09), inset -2px -2px 6px rgba(255,255,255,0.85)' }}
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-400 group-focus-within:text-brand-500" />
      <select defaultValue="" className="flex-1 bg-transparent text-[13px] text-brand-900 focus:outline-none">
        <option value="" disabled>{label}</option>
        {children}
      </select>
    </label>
  );
}

function NeuTextarea({ icon: Icon, placeholder, rows }: { icon: React.ComponentType<{ className?: string }>; placeholder: string; rows: number }) {
  return (
    <label
      className="group relative flex items-start gap-2.5 rounded-xl px-3.5 py-2.5 transition-all duration-300 focus-within:ring-2 focus-within:ring-brand-500/20"
      style={{ background: '#e8f0fe', boxShadow: 'inset 3px 3px 7px rgba(11,31,77,0.09), inset -2px -2px 6px rgba(255,255,255,0.85)' }}
    >
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400 group-focus-within:text-brand-500" />
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="flex-1 resize-none bg-transparent text-[13px] text-brand-900 placeholder:text-brand-900/35 focus:outline-none"
      />
    </label>
  );
}
