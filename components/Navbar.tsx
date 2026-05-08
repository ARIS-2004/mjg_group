'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5"
    >
      <nav
        className={cn(
          'flex w-full max-w-[1280px] items-center justify-between rounded-full border transition-all duration-500',
          scrolled
            ? 'border-white/70 bg-white/75 backdrop-blur-xl shadow-soft px-4 sm:px-6 py-2.5'
            : 'border-white/40 bg-white/40 backdrop-blur-md px-4 sm:px-7 py-3'
        )}
      >
        <Logo />

        <ul className="hidden lg:flex items-center gap-1 text-[14px] font-medium text-brand-900/85">
          <li>
            <Link
              href="/"
              className="relative rounded-full px-3.5 py-2 transition-colors hover:text-brand-700"
            >
              Home
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white/80 text-brand-900"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute left-3 right-3 top-[76px] rounded-3xl border border-white/70 bg-white/90 backdrop-blur-xl shadow-soft-lg p-5"
          >
            <ul className="space-y-1 text-sm font-medium text-brand-900">
              {[
                { label: 'Home', href: '/' },
                { label: 'Contact', href: '/contact' },
              ].map((i) => (
                <li key={i.label}>
                  <Link
                    href={i.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-brand-50"
                  >
                    {i.label}
                    <ArrowRight className="h-4 w-4 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
