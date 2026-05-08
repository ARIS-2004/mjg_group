import Image from 'next/image';
import Link from 'next/link';

export default function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-brand-100">
        <Image
          src="/companylogo.png"
          alt="MJG Group"
          width={40}
          height={40}
          className="object-contain"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            variant === 'light' ? 'text-white' : 'text-brand-900'
          }`}
        >
          MJG Group
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
            variant === 'light' ? 'text-white/60' : 'text-brand-500'
          }`}
        >
          Facility • Workforce
        </span>
      </span>
    </Link>
  );
}
