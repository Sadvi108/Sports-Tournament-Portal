import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { Reveal } from '@/components/ui/reveal';

function img(prompt: string, size: string) {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

type Slide = { title: string; subtitle: string; image: string };

export default function Referral() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: 'Become a D-Clix Partner',
        subtitle: 'Help clubs go digital and earn rewards as you grow.',
        image: img('infographic slide, referral program intro, dark background, rose accents, clean icons, modern layout', 'landscape_16_9'),
      },
      {
        title: 'How It Works',
        subtitle: 'Share your referral link to clubs and instructors.',
        image: img('infographic slide, steps 1 2 3, referral link sharing, dark background, rose accent, modern', 'landscape_16_9'),
      },
      {
        title: 'Track Referrals',
        subtitle: 'Monitor signups and conversions from your dashboard.',
        image: img('infographic slide, referral tracking dashboard, charts, dark background, rose accent', 'landscape_16_9'),
      },
      {
        title: 'Commission Structure',
        subtitle: 'Transparent rewards for every qualified subscription.',
        image: img('infographic slide, commission tiers, simple pricing blocks, dark background, rose accent', 'landscape_16_9'),
      },
      {
        title: 'Get Paid Faster',
        subtitle: 'Fast payouts with clear monthly summaries and receipts.',
        image: img('infographic slide, payout timeline, monthly summary, dark background, rose accent', 'landscape_16_9'),
      },
      {
        title: 'Marketing Materials',
        subtitle: 'Use ready-made banners, posts, and presentation decks.',
        image: img('infographic slide, marketing kit, social media templates, dark background, rose accent', 'landscape_16_9'),
      },
      {
        title: 'Start Referring Today',
        subtitle: 'Join the referral program and grow with D-Clix.',
        image: img('infographic slide, call to action, join referral program, dark background, rose accent, modern', 'landscape_16_9'),
      },
    ],
    [],
  );

  const [idx, setIdx] = useState(0);
  const current = slides[idx];

  const prev = () => setIdx((v) => (v === 0 ? slides.length - 1 : v - 1));
  const next = () => setIdx((v) => (v === slides.length - 1 ? 0 : v + 1));

  return (
    <div className="min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <MarketingNavbar />
      <main className="pt-28">
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <Reveal>
              <div className="text-center space-y-4">
                <div className="text-rose-pink text-xs font-semibold uppercase tracking-[0.2em]">D-Clix Referral Program</div>
                <h1 className="text-5xl font-semibold tracking-tight dark:text-white text-dark-gray">Referral Program</h1>
                <p className="text-muted-gray text-lg font-medium max-w-3xl mx-auto">
                  Designed to onboard referral partners/agents with clear visuals that explain how rewards work.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="dark-card bg-white dark:bg-white/5 overflow-hidden">
                <div className="p-6 flex items-center justify-between gap-4 border-b border-gray-100 dark:border-white/5">
                  <div className="space-y-1">
                    <div className="text-xl font-semibold tracking-tight dark:text-white text-dark-gray">{current.title}</div>
                    <div className="text-muted-gray font-medium">{current.subtitle}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={prev} className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray hover:text-rose-pink">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray hover:text-rose-pink">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <motion.div key={idx} initial={{ opacity: 0.2, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="w-full">
                  <img src={current.image} alt={current.title} className="w-full h-[420px] object-cover" />
                </motion.div>

                <div className="p-6 flex items-center justify-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={
                        i === idx
                          ? 'w-8 h-2 rounded-full bg-rose-pink'
                          : 'w-2 h-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-rose-pink/50'
                      }
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

