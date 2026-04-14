import React from 'react';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { Reveal } from '@/components/ui/reveal';

function img(prompt: string, size: string) {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

export default function AboutDclix() {
  const shot = img(
    'dashboard screenshot for martial arts club management system, dark theme with rose accents, attendance, payments, registration approvals, high fidelity product screenshot',
    'landscape_16_9',
  );

  return (
    <div className="min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <MarketingNavbar />
      <main className="pt-28">
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Reveal>
                <div className="text-rose-pink text-xs font-black uppercase tracking-[0.2em]">About D-Clix</div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-5xl font-black tracking-tighter dark:text-white text-dark-gray">
                  Built for sports and martial arts clubs
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted-gray text-lg font-medium leading-relaxed">
                  D-Clix helps clubs digitize member registration, secure online payments, and real-time attendance tracking. It is tailored specifically for martial arts
                  clubs while staying flexible enough for modern sports operations.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="dark-card bg-white dark:bg-white/5 p-6 space-y-3">
                  <div className="font-black dark:text-white text-dark-gray">Monitor real time update of your club performance and manage registration, approval, attendance and payment (RAP)</div>
                  <div className="text-muted-gray font-medium">Access everything via web dashboard and mobile app.</div>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <ul className="space-y-2 text-muted-gray font-medium">
                  <li>Member registration workflows with approvals</li>
                  <li>Secure online payment collection and receipts</li>
                  <li>Digital attendance via QR / fingerprint / manual marking</li>
                  <li>Reporting to track performance and retention</li>
                </ul>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <div className="dark-card bg-white dark:bg-white/5 overflow-hidden">
                <img src={shot} alt="D-Clix dashboard" className="w-full h-[360px] object-cover" />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

