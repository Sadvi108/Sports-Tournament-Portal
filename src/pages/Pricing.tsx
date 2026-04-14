import React, { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { Reveal } from '@/components/ui/reveal';

type Plan = {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  desc: string;
  highlights: string[];
  featured?: boolean;
};

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = useMemo(
    () => [
      {
        name: 'Starter',
        priceMonthly: 'RM 99',
        priceYearly: 'RM 999',
        desc: 'For small clubs that want to go digital quickly.',
        highlights: ['Online registration', 'Attendance tracking', 'Basic reports', 'Email support'],
      },
      {
        name: 'Pro',
        priceMonthly: 'RM 199',
        priceYearly: 'RM 1,999',
        desc: 'For growing clubs needing payments and automation.',
        highlights: ['FPX-ready payment flows', 'Invoices and receipts', 'Grading module', 'WhatsApp notifications'],
        featured: true,
      },
      {
        name: 'Enterprise',
        priceMonthly: 'Custom',
        priceYearly: 'Custom',
        desc: 'For multi-branch operations and custom integrations.',
        highlights: ['RBAC roles and permissions', 'Advanced integrations', 'Priority onboarding', 'Dedicated support'],
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-white dark:bg-deep-black transition-colors duration-300">
      <MarketingNavbar />
      <main className="pt-28">
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <Reveal>
              <div className="text-center space-y-4">
                <div className="text-rose-pink text-xs font-black uppercase tracking-[0.2em]">Plans & Pricing</div>
                <h1 className="text-5xl font-black tracking-tighter dark:text-white text-dark-gray">Choose a plan that fits your club</h1>
                <p className="text-muted-gray text-lg font-medium">Start simple, then scale with automation, payments, and advanced modules.</p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setBilling('monthly')}
                  className={
                    billing === 'monthly'
                      ? 'px-5 py-2 rounded-full bg-rose-pink text-white font-black text-sm'
                      : 'px-5 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray font-black text-sm'
                  }
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling('yearly')}
                  className={
                    billing === 'yearly'
                      ? 'px-5 py-2 rounded-full bg-rose-pink text-white font-black text-sm'
                      : 'px-5 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray font-black text-sm'
                  }
                >
                  Yearly
                </button>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {plans.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08} y={18}>
                  <div
                    className={
                      p.featured
                        ? 'dark-card bg-white dark:bg-white/5 p-10 border-2 border-rose-pink shadow-2xl'
                        : 'dark-card bg-white dark:bg-white/5 p-10'
                    }
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-[0.2em] text-muted-gray">{p.name}</div>
                      <div className="text-4xl font-black tracking-tighter dark:text-white text-dark-gray">
                        {billing === 'monthly' ? p.priceMonthly : p.priceYearly}
                        {p.priceMonthly !== 'Custom' && <span className="text-sm text-muted-gray font-black">/{billing === 'monthly' ? 'mo' : 'yr'}</span>}
                      </div>
                      <div className="text-muted-gray font-medium">{p.desc}</div>
                    </div>

                    <div className="mt-8 space-y-3">
                      {p.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-3 text-sm font-bold text-muted-gray">
                          <div className="w-6 h-6 rounded-lg bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4" />
                          </div>
                          <div className="dark:text-white text-dark-gray">{h}</div>
                        </div>
                      ))}
                    </div>

                    <button className="rose-btn-primary w-full mt-10">Get Started</button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

