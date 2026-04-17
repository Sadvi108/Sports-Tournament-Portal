import React, { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import MarketingNavbar from '../components/MarketingNavbar';
import MarketingFooter from '../components/MarketingFooter';
import { Reveal } from '@/components/ui/reveal';

type Plan = {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  yearlySave: string;
  desc: string;
  highlights: string[];
  featured?: boolean;
};

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans: Plan[] = useMemo(
    () => [
      {
        name: 'Basic Plan',
        priceMonthly: 'RM100',
        priceYearly: 'RM1000',
        yearlySave: '(Save RM200)',
        desc: 'Essential Features',
        highlights: [
          'User management tools',
          'Online student registrations',
          'Fee management',
          'Manual attendance (Portal)',
          'QR Code+ Scan attendance',
          'Discount module',
          'Shared workspace',
          'Push notification',
          'Reimbursement',
          'Web and mobile app',
          '3 Basic classes, 1 advanced class a week',
          'Dedicated WhatsApp group support'
        ],
      },
      {
        name: 'Standard Plan',
        priceMonthly: 'RM150',
        priceYearly: 'RM1500',
        yearlySave: '(Save RM300)',
        desc: 'Essential Features +',
        highlights: [
          'Grading management',
          'Activities management',
          'Inventory stock management',
          '5 Basic classes, 2 advanced classes a week',
          'Prepaid account management',
          'Dedicated WhatsApp group support'
        ],
        featured: true,
      },
      {
        name: 'Premium Plan',
        priceMonthly: 'RM200',
        priceYearly: 'RM2000',
        yearlySave: '(Save RM400)',
        desc: 'BASIC + STANDARD +',
        highlights: [
          'Contribution',
          'Purchase request by branch to HQ',
          'Purchase request by students to branch',
          'Tournament participations, scores, results & history',
          'Financial reports customizations',
          'Payroll module',
          'HQ approval on manual payment',
          'Student class booking via app',
          'Dedicated WhatsApp group support'
        ],
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
                  <div className="text-rose-pink text-xs font-semibold uppercase tracking-[0.2em]">D-CLIX Subscription Plan</div>
                  <h1 className="text-5xl font-semibold tracking-tight dark:text-white text-dark-gray">Tailored for Your Needs: Optimal Value with Every Plan</h1>
                </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setBilling('monthly')}
                  className={
                    billing === 'monthly'
                      ? 'px-5 py-2 rounded-full bg-rose-pink text-white font-semibold text-sm'
                      : 'px-5 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray font-semibold text-sm'
                  }
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBilling('yearly')}
                  className={
                    billing === 'yearly'
                      ? 'px-5 py-2 rounded-full bg-rose-pink text-white font-semibold text-sm'
                      : 'px-5 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray font-semibold text-sm'
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
                        ? 'dark-card bg-white dark:bg-white/5 p-10 border-2 border-rose-pink shadow-2xl flex flex-col h-full'
                        : 'dark-card bg-white dark:bg-white/5 p-10 flex flex-col h-full'
                    }
                  >
                    <div className="space-y-2">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-pink">{p.name}</div>
                      <div className="text-4xl font-semibold tracking-tight dark:text-white text-dark-gray flex items-baseline gap-1">
                        {billing === 'monthly' ? p.priceMonthly : p.priceYearly}
                        <span className="text-sm text-muted-gray font-semibold">/{billing === 'monthly' ? 'month' : 'Year'}</span>
                      </div>
                      
                      {billing === 'yearly' && (
                        <div className="text-sm font-bold text-rose-pink mt-1">
                          {p.yearlySave}
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10 font-bold dark:text-white text-dark-gray text-lg">{p.desc}</div>
                    </div>

                    <div className="mt-8 space-y-4 flex-grow">
                      {p.highlights
                        .filter((h) => p.name === 'Premium Plan' || h !== 'Student class booking via app')
                        .map((h) => (
                        <div key={h} className="flex items-start gap-3 text-sm font-bold text-muted-gray">
                          <div className="w-5 h-5 rounded-full bg-rose-pink text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <div className="dark:text-white text-dark-gray leading-tight">{h}</div>
                        </div>
                      ))}
                    </div>

                    <button className="rose-btn-primary w-full mt-8">Select Plan</button>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 text-center text-xs font-semibold text-muted-gray">
              * Gateway payment fee per online payment: <span className="text-rose-pink">RM 1.20</span>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

