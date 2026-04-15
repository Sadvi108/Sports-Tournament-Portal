import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FaqAccordion, { type FaqItem } from '../../components/FaqAccordion';
import { Reveal } from '@/components/ui/reveal';

function img(prompt: string, size: string) {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

export default function HomeBottom({ onStartToday }: { onStartToday: () => void }) {
  const [leadSent, setLeadSent] = useState(false);

  const faqs: FaqItem[] = useMemo(
    () => [
      {
        q: 'What is D-Clix Club Management System?',
        a: 'D-Clix is a web + mobile club management system designed to streamline registration, attendance, payments, and communications for sports and martial arts clubs.',
      },
      {
        q: 'What features are available?',
        a: 'Online registration, QR/fingerprint attendance, FPX payments, grading, reporting, invoicing, notifications, and tournament workflows are supported as part of the platform.',
      },
      {
        q: 'How does it benefit martial arts clubs?',
        a: 'It reduces admin workload, improves fee collection, tracks attendance reliably, and gives instructors a clear view of members, schedules, and performance.',
      },
      {
        q: 'Is it customizable for different martial arts styles?',
        a: 'Yes. Structures like grades, sessions, fee groups, and roles can be adapted to suit how your club operates across different styles.',
      },
      {
        q: 'Can I access it on mobile devices?',
        a: 'Yes. D-Clix supports web dashboard usage and mobile access for students, parents/guardians, instructors, and admins.',
      },
      {
        q: 'Is it secure for student data and payments?',
        a: 'The system is designed with secure access and role-based permissions, with payment workflows built to keep transactions reliable and traceable.',
      },
      {
        q: 'How user-friendly is it?',
        a: 'The interface focuses on clear flows: registration approvals, attendance, and payments are designed to be straightforward for day-to-day operations.',
      },
      {
        q: 'Can it integrate with 3rd party systems?',
        a: 'Yes. D-Clix supports third-party integrations where required, including payment and communication tooling depending on plan and setup.',
      },
      {
        q: 'Is D-Clix affiliated with any Martial Arts Association?',
        a: 'D-Clix is a management platform that can be used by clubs and organizers; affiliation depends on the tournament or club arrangement.',
      },
      {
        q: 'What kind of support does D-Clix offer?',
        a: 'You can receive onboarding guidance, documentation support, and assistance for troubleshooting access or configuration issues.',
      },
      {
        q: 'How can I get started?',
        a: 'Choose a plan, request a trial, and your club can begin onboarding with guided setup for registrations, payments, attendance, and member management.',
      },
    ],
    [],
  );

  const dash1 = img('web admin dashboard, dark theme, rose accent, KPI cards and table, product screenshot', 'landscape_4_3');
  const dash2 = img('attendance report dashboard, dark theme, rose accent, chart and list, product screenshot', 'landscape_4_3');
  const dash3 = img('payments and invoices dashboard, dark theme, rose accent, charts and receipt list, product screenshot', 'landscape_4_3');
  const calloutImg1 = img('dynamic martial arts kick action, high contrast, dark background, cinematic lighting, no logos', 'landscape_4_3');
  const calloutImg2 = img('club manager using laptop dashboard analytics, modern training hall vibe, dark theme, cinematic lighting', 'landscape_4_3');
  const thumb1 = img('athlete training in gym, cinematic, dark background, no logos', 'landscape_4_3');
  const thumb2 = img('martial arts class warmup, cinematic, dark background, no logos', 'landscape_4_3');
  const thumb3 = img('coach with clipboard in sports hall, cinematic, dark background, no logos', 'landscape_4_3');
  const t1 = img('portrait illustration of martial arts master, studio lighting, no identifiable face, modern style', 'landscape_4_3');
  const t2 = img('portrait illustration of club instructor, studio lighting, no identifiable face, modern style', 'landscape_4_3');
  const t3 = img('portrait illustration of coach, studio lighting, no identifiable face, modern style', 'landscape_4_3');

  const onLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
    window.setTimeout(() => setLeadSent(false), 3500);
  };

  return (
    <>
      <section className="px-6 py-24 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <div className="text-4xl font-semibold tracking-tight dark:text-white text-dark-gray">Dashboard Preview</div>
              <div className="text-muted-gray text-lg font-medium">A visual, data-rich web dashboard experience for modern club operations</div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[dash1, dash2, dash3].map((src, i) => (
              <Reveal key={i} delay={i * 0.08} y={18}>
                <motion.div whileHover={{ y: -6 }} className="dark-card bg-white dark:bg-white/5 overflow-hidden">
                  <img className="w-full h-[240px] object-cover" src={src} alt={`Dashboard screenshot ${i + 1}`} />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-10">
          <Reveal>
            <div className="dark-card bg-white dark:bg-white/5 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[320px] lg:min-h-[420px]">
                  <img src={calloutImg2} alt="Dashboard usage preview" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent dark:from-black/70 dark:via-black/30" />
                </div>
                <div className="p-12 lg:p-14 space-y-6">
                  <div className="text-3xl font-semibold tracking-tight dark:text-white text-dark-gray">Smarter Decisions, Better Results</div>
                  <div className="text-muted-gray text-lg font-medium leading-relaxed">
                    Track performance, retain members, and boost profits with simple, reliable reporting. Our user-friendly dashboard gives you a 360° view of schedules,
                    transactions, and performance—all in one place.
                  </div>
                  <button onClick={onStartToday} className="rose-btn-primary">
                    Get A Trial
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="dark-card bg-white dark:bg-white/5 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 lg:p-14 space-y-6 order-2 lg:order-1">
                  <div className="text-3xl font-semibold tracking-tight dark:text-white text-dark-gray">
                    Get a system that's <span className="text-rose-pink">easy to use</span>
                  </div>
                  <div className="text-muted-gray text-lg font-medium leading-relaxed">
                    Say goodbye to messy spreadsheets. Manage memberships, class schedules, check-ins and payments from one intuitive system. Get a fully customizable
                    calendar and booking system to make sure members can easily find, view and book classes through your website and app.
                  </div>
                  <button onClick={() => window.location.assign('/#features')} className="rose-btn-primary">
                    Learn About D-Clix
                  </button>

                  <div className="pt-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[thumb1, thumb2, thumb3].map((src, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                          <img src={src} alt={`Feature preview ${i + 1}`} className="w-full h-20 object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[320px] lg:min-h-[420px] order-1 lg:order-2">
                  <img src={calloutImg1} alt="Martial arts training preview" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent dark:from-black/70 dark:via-black/30" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          <Reveal>
            <div className="text-center space-y-3">
              <div className="text-4xl font-semibold tracking-tight dark:text-white text-dark-gray">Trusted by Clubs</div>
              <div className="text-muted-gray text-lg font-medium">What club leaders say about D-Clix</div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'MASTER PREM KUMAR',
                quote: 'The grading process is seamless. Tracking, payment, and results are clear and consistent for every session.',
                img: t1,
              },
              {
                name: 'MASTER SIVAM ARUMUGAM',
                quote: 'Online payment helped improve fee collection revenue. It is simple for parents and easy for admins to track.',
                img: t2,
              },
              {
                name: 'CIKGU AKMAL HAMDI',
                quote: 'New student registration increased due to easier registration and communication flows.',
                img: t3,
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08} y={18}>
                <div className="dark-card bg-white dark:bg-white/5 p-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-pink/30 bg-rose-pink/10">
                      <img src={t.img} alt={`${t.name} avatar`} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold dark:text-white text-dark-gray">{t.name}</div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gray">Club Leader</div>
                    </div>
                  </div>
                  <div className="text-muted-gray text-sm font-medium leading-relaxed">“{t.quote}”</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <div className="text-4xl font-semibold tracking-tight dark:text-white text-dark-gray">FAQ</div>
              <div className="text-muted-gray text-lg font-medium">Common questions about D-Clix</div>
            </div>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-white/5" id="contact">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="space-y-4">
              <div className="text-4xl font-semibold tracking-tight dark:text-white text-dark-gray">Fill in your details and let our expert reach you.</div>
              <div className="text-muted-gray text-lg font-medium">Tell us about your club and your inquiries. We'll respond with the best setup path.</div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="dark-card bg-white dark:bg-white/5 p-10">
              <form onSubmit={onLeadSubmit} className="space-y-5">
                <input required placeholder="Name*" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50" />
                <input required placeholder="Phone Number*" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50" />
                <input required type="email" placeholder="Email*" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50" />
                <input required placeholder="Club Name*" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50" />
                <textarea required placeholder="Inquiries*" rows={4} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 resize-none" />
                <button type="submit" className="rose-btn-primary w-full">
                  Submit
                </button>
              </form>

              <AnimatePresence>
                {leadSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-6 p-4 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink font-bold"
                  >
                    Thanks! Your details are captured. A D-Clix expert will reach you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

