'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Award,
  ShieldCheck,
  Headphones,
  Heart,
  Building2,
  Users,
  ReceiptText,
  Scale,
  Wrench,
  Wind,
  Sparkles,
  Truck,
  HardHat,
  Factory,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Landmark,
  Info,
  Newspaper,
  Briefcase,
  PhoneCall,
} from 'lucide-react';
import Logo from './Logo';

const servicesCol = [
  { label: 'Facility Management', icon: Building2 },
  { label: 'Manpower Outsourcing', icon: Users },
  { label: 'Payroll Processing', icon: ReceiptText },
  { label: 'Legal Compliance', icon: Scale },
  { label: 'Security Services', icon: ShieldCheck },
  { label: 'Technical Support', icon: Wrench },
  { label: 'HVAC Services', icon: Wind },
  { label: 'Housekeeping', icon: Sparkles },
];

const industriesCol = [
  { label: 'Logistics & Supply Chain', icon: Truck },
  { label: 'Construction & Infrastructure', icon: HardHat },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'Education', icon: GraduationCap },
  { label: 'FMCG & Retail', icon: ShoppingBag },
  { label: 'Hotels & Hospitality', icon: Hotel },
  { label: 'Government', icon: Landmark },
];

const companyCol = [
  { label: 'About Us', href: '/#about', icon: Info },
  { label: 'Why MJG', href: '/#why', icon: Award },
  { label: 'Clients', href: '/#clients', icon: Users },
  { label: 'Insights', href: '/#insights', icon: Newspaper },
  { label: 'Careers', href: '#', icon: Briefcase },
  { label: 'Contact Us', href: '/contact', icon: PhoneCall },
];

/* ───── Decorative architectural wavy lines (right side of cards) ───── */
function WavyLines({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 300"
      preserveAspectRatio="xMaxYMid slice"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="wavyGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
          <stop offset="50%" stopColor="#2563EB" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Curving architectural sweeps */}
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M${-120 + i * 40},${320 - i * 8} C ${100 + i * 30},${200 - i * 14} ${300 + i * 24},${260 - i * 16} ${640 + i * 12},${120 - i * 18}`}
          stroke="url(#wavyGrad)"
          strokeWidth="0.9"
          fill="none"
        />
      ))}
      {/* Faint windowed building silhouette */}
      <g opacity="0.45">
        <path
          d="M380,300 L380,150 L440,150 L440,90 L520,90 L520,150 L580,150 L580,300 Z"
          stroke="#2563EB"
          strokeOpacity="0.25"
          strokeWidth="0.8"
          fill="none"
        />
        {Array.from({ length: 8 }).map((_, r) =>
          Array.from({ length: 3 }).map((_, c) => (
            <rect
              key={`w-${r}-${c}`}
              x={448 + c * 22}
              y={100 + r * 18}
              width="10"
              height="6"
              fill="#2563EB"
              opacity="0.18"
            />
          ))
        )}
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Soft top wash */}
      <div
        className="absolute inset-x-0 top-0 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(37,99,235,0.06), transparent 60%)',
        }}
      />

      <div className="relative container-px mx-auto max-w-[1280px] pt-12 pb-6">
        {/* ─── NEWSLETTER CARD ─── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-brand-100/80 p-4 sm:p-6 shadow-[0_12px_36px_-22px_rgba(11,31,77,0.18)]"
          style={{
            background:
              'linear-gradient(120deg, #ffffff 0%, #f3f7ff 55%, #eaf1fc 100%)',
          }}
        >
          {/* Wavy decorative lines on the right */}
          <WavyLines className="pointer-events-none absolute right-0 top-0 h-full w-[55%] opacity-90" />

          <div className="relative flex flex-col items-stretch gap-5 lg:flex-row lg:items-center">
            {/* Mail icon with red badge */}
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.55)]">
              <Mail className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent-500 ring-2 ring-white" />
            </div>

            {/* Copy */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Stay Informed, Stay Ahead
              </p>
              <h3 className="mt-1.5 font-display text-[18px] sm:text-[20px] font-extrabold text-brand-900 leading-tight tracking-tight">
                Insights from India&apos;s leading facility &amp; workforce experts.
              </h3>
              <p className="mt-1 text-[12.5px] text-brand-900/55">
                Quarterly briefs on operations, compliance and workplace trends —
                straight to your inbox.
              </p>
            </div>

            {/* Form */}
            <form className="flex w-full max-w-md items-center gap-1.5 rounded-full border border-brand-100 bg-white p-1 pl-4 shadow-[inset_0_1px_2px_rgba(11,31,77,0.04)]">
              <Mail className="h-4 w-4 text-brand-400 shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-[13px] text-brand-900 placeholder:text-brand-900/40 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-[13px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(249,115,22,0.55)] transition-all hover:-translate-y-0.5"
              >
                Subscribe <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* ─── MAIN FOOTER CARD ─── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-brand-100/80 p-4 sm:p-6 lg:p-8 shadow-[0_12px_36px_-22px_rgba(11,31,77,0.16)]"
          style={{
            background:
              'linear-gradient(135deg, #ffffff 0%, #f5f9ff 50%, #ebf2fc 100%)',
          }}
        >
          {/* Wavy lines decoration on the right */}
          <WavyLines className="pointer-events-none absolute right-0 top-0 h-full w-[50%] opacity-80" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Brand column */}
            <div className="lg:col-span-3">
              <Logo />
              <p className="mt-4 max-w-xs text-[12.5px] leading-relaxed text-brand-900/65">
                Integrated facility management, workforce outsourcing and
                compliance solutions trusted by 500+ enterprises since 2001.
              </p>

              <div className="mt-5 space-y-2.5 text-[12.5px] text-brand-900/75">
                <a
                  href="tel:01147603851"
                  className="group flex items-start gap-2.5 transition-colors hover:text-brand-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span>011-47603851 · 1800 309 4709</span>
                </a>
                <a
                  href="mailto:info@mjggroup.in"
                  className="group flex items-start gap-2.5 transition-colors hover:text-brand-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span>info@mjggroup.in</span>
                </a>
                <p className="flex items-start gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">
                    104, 1st Floor, 1/56D, Lalita Park,
                    <br />
                    Laxmi Nagar, New Delhi - 110092
                  </span>
                </p>
              </div>

              {/* Socials */}
              <div className="mt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-900/45">
                  Follow Us
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand-100 bg-white text-brand-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 link columns wrapped — side-by-side on mobile too */}
            <div className="grid grid-cols-3 gap-4 lg:col-span-6 lg:gap-6">
              <FooterColumn title="Services" items={servicesCol} hrefBase="#services" />
              <FooterColumn title="Industries" items={industriesCol} hrefBase="#" />

              {/* Company column inline */}
              <div>
                <h4 className="font-display text-[13px] sm:text-[14px] font-bold text-brand-900">
                  Company
                </h4>
                <span className="mt-1.5 block h-[3px] w-8 rounded-full bg-brand-500" />
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-[11.5px] sm:text-[12.5px] text-brand-900/70">
                  {companyCol.map((c) => (
                    <li key={c.label}>
                      <Link
                        href={c.href}
                        className="group inline-flex items-center gap-1.5 sm:gap-2 transition-colors hover:text-brand-700"
                      >
                        <c.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-brand-500/70 transition-colors group-hover:text-brand-500" />
                        <span className="leading-tight">{c.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Credential stack — 2-up on mobile, vertical on lg */}
            <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-1">
              <CredentialCard
                icon={Award}
                title="ISO 9001:2015"
                sub={'Quality Management\nSystem Certified'}
                tone="brand"
              />
              <CredentialCard
                icon={ShieldCheck}
                title="Statutory Compliant"
                sub={'PSARA Licensed\n& Fully Compliant'}
                tone="accent"
              />

              {/* 24/7 Support card — full width on mobile */}
              <div className="group relative col-span-2 overflow-hidden rounded-2xl border border-brand-100/80 bg-gradient-to-br from-brand-50/80 via-white to-white p-4 shadow-[0_8px_22px_-16px_rgba(11,31,77,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-soft lg:col-span-1">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white shadow-[0_6px_14px_-6px_rgba(37,99,235,0.55)]">
                    <Headphones className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[14px] font-bold text-brand-900 leading-tight">
                      24×7 Support
                    </p>
                    <p className="mt-1 text-[11.5px] text-brand-900/60 leading-snug">
                      We&apos;re always here to help you keep your operations
                      running seamlessly.
                    </p>
                    <a
                      href="/contact"
                      className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-700 transition-colors hover:text-accent-500"
                    >
                      Request a Callback <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TRUST STRIP with client logos ── */}
          <div className="relative mt-10 rounded-2xl border border-brand-100 bg-white/70 backdrop-blur-sm px-5 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="lg:w-[260px] shrink-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500 leading-snug">
                  Trusted by 500+
                  <br />
                  Enterprises &amp; Government
                  <br />
                  Organizations
                </p>
              </div>

              <div className="hidden lg:block h-10 w-px bg-brand-100" />

              <div className="flex-1 grid grid-cols-3 sm:grid-cols-6 items-center gap-x-5 gap-y-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="relative h-9 w-full transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={`/logo${n}.png`}
                      alt={`Client ${n}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── DARK BOTTOM STRIP ─── */}
      <div className="relative overflow-hidden bg-brand-900 text-white/80">
        <div className="absolute inset-0 grid-bg opacity-[0.05]" />
        <div className="glow-blob -top-20 left-1/4 h-40 w-40 bg-brand-500/20" />
        <div className="glow-blob -bottom-20 right-1/4 h-40 w-40 bg-accent-500/15" />

        <div className="relative container-px mx-auto max-w-[1280px] py-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} MJG Group. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-white/55">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Use
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="transition-colors hover:text-white">
              Refund Policy
            </a>
          </div>

          <p className="flex items-center gap-1.5 text-[12px] text-white/55">
            Designed with
            <Heart className="h-3.5 w-3.5 fill-accent-500 text-accent-500" />
            for a better tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───── Reusable footer link column ───── */
function FooterColumn({
  title,
  items,
  hrefBase,
}: {
  title: string;
  items: { label: string; icon: React.ComponentType<{ className?: string }> }[];
  hrefBase: string;
}) {
  return (
    <div>
      <h4 className="font-display text-[13px] sm:text-[14px] font-bold text-brand-900">
        {title}
      </h4>
      <span className="mt-1.5 block h-[3px] w-8 rounded-full bg-brand-500" />
      <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-[11.5px] sm:text-[12.5px] text-brand-900/70">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={hrefBase}
              className="group inline-flex items-start gap-1.5 sm:gap-2 transition-colors hover:text-brand-700"
            >
              <it.icon className="mt-0.5 h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-brand-500/70 transition-colors group-hover:text-brand-500" />
              <span className="leading-tight">{it.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───── Credential card ───── */
function CredentialCard({
  icon: Icon,
  title,
  sub,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  tone: 'brand' | 'accent';
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-brand-100/80 bg-white p-4 shadow-[0_8px_22px_-16px_rgba(11,31,77,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${
            tone === 'accent'
              ? 'bg-accent-500 shadow-[0_6px_14px_-6px_rgba(249,115,22,0.55)]'
              : 'bg-brand-500 shadow-[0_6px_14px_-6px_rgba(37,99,235,0.55)]'
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div>
          <p className="font-display text-[14px] font-bold text-brand-900 leading-tight">
            {title}
          </p>
          <p className="mt-0.5 whitespace-pre-line text-[11.5px] leading-snug text-brand-900/60">
            {sub}
          </p>
        </div>
      </div>
    </div>
  );
}
