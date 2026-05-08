import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Certifications from '@/components/sections/Certifications';
import Leadership from '@/components/sections/Leadership';
import WhyChoose from '@/components/sections/WhyChoose';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import Clients from '@/components/sections/Clients';
import Insights from '@/components/sections/Insights';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Certifications />
      <Leadership />
      <WhyChoose />
      <Services />
      <Industries />
      <Insights />
      <CTA />
    </>
  );
}
