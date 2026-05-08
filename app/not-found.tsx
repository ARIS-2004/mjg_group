'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
        404 — Page Not Found
      </p>
      <h1 className="mt-4 font-display text-[48px] sm:text-[64px] font-extrabold text-brand-900 leading-tight tracking-tight">
        Oops.
      </h1>
      <p className="mt-3 max-w-sm text-[15px] text-brand-900/60 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
      >
        Back to Home <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
