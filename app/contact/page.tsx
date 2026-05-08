import type { Metadata } from 'next';
import ContactHero from '@/components/sections/ContactHero';
import ContactBody from '@/components/sections/ContactBody';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Contact MJG Group — We\'re Here to Help',
  description:
    'Connect with MJG Group for facility management, manpower outsourcing, payroll & compliance. 24×7 enterprise support across India.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <CTA />
    </>
  );
}
