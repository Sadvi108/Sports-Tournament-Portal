import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  CalendarCheck,
  CreditCard,
  FileSpreadsheet,
  Fingerprint,
  QrCode,
  ShieldCheck,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Reveal } from '@/components/ui/reveal';
import dclixLogo from '@/assets/dclix-logo.svg';

function img(prompt: string, size: string) {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

export default function HomeTop({ onStartToday }: { onStartToday: () => void }) {
  const features = useMemo(
    () => [
      {
        icon: QrCode,
        title: 'Digital Attendance',
        desc: 'Digital attendance marking by scan QR code / fingerprint / manual update',
      },
      {
        icon: Bell,
        title: 'Continuous Updates',
        desc: 'WhatsApp and push notifications for parents / guardians / instructors; D-Clix Community',
      },
      {
        icon: Trophy,
        title: 'Tournament',
        desc: 'Tournament participating, player selection, and scoring details; past and upcoming tournament details',
      },
      {
        icon: Users,
        title: 'Online Registration',
        desc: 'Smooth and seamless registration process for new club members and instructors/trainers',
      },
      {
        icon: CalendarCheck,
        title: 'Grading',
        desc: 'Current grading, upcoming grading schedule, payment for grading and results',
      },
      {
        icon: FileSpreadsheet,
        title: 'Data Management',
        desc: 'Club / Student / Instructors personal data management',
      },
      {
        icon: Zap,
        title: 'Advance Features',
        desc: '3rd party integration, Online payment (FPX), purchase request, invoicing, communication platform',
      },
      {
        icon: CreditCard,
        title: 'Online Payment',
        desc: 'Simplify the process of payment via online in the mobile app',
      },
    ],
    [],
  );

  const heroMock1 = img(
    'modern SaaS dashboard UI for martial arts club management, dark theme with rose accent, analytics cards, attendance chart, payments summary, clean typography, product screenshot style, high fidelity',
    'landscape_16_9',
  );
  const heroMock2 = img(
    'mobile app screens for club management, attendance QR scan, payments, schedule, dark theme with rose accent, product mockup, high fidelity',
    'portrait_4_3',
  );

  return (
    <>
      <section className="px-6 pt-16 pb-24 relative overflow-hidden">
        <Sparkles
          className="absolute inset-0 pointer-events-none opacity-50"
          density={500}
          size={1.2}
          speed={0.6}
          opacity={0.6}
          opacitySpeed={1.5}
          color="#FFFFFF"
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <Reveal>
              <div className="flex items-center gap-4">
                <img src={dclixLogo} alt="D-CLIX" className="w-14 h-14 rounded-full" />
                <div className="text-xs font-black uppercase tracking-[0.22em] text-muted-gray">D-CLIX Sports Technology Platform</div>
              </div>
            </Reveal>
            <Reveal delay={0.03}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-pink/10 border border-rose-pink/20 text-rose-pink text-xs font-black uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4" />
                D-Clix Club Management System
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.05] dark:text-white text-dark-gray">
                Grow revenue and streamline your club with D-Clix club management system
              </h1>
            </Reveal>
            <Reveal delay={0.11}>
              <p className="text-muted-gray text-lg md:text-xl font-medium">
                Your club details at your fingertips manage it anytime anywhere
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Streamlined Operations and Cost Efficiency',
                'Enhanced Member Experience',
                'Data Management and Insights',
                'Scalability, Security, and Customization',
              ].map((b, i) => (
                <Reveal key={b} delay={0.12 + i * 0.05} y={18}>
                  <div className="dark-card bg-white dark:bg-white/5 p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center">
                      <Fingerprint className="w-5 h-5" />
                    </div>
                    <div className="font-bold dark:text-white text-dark-gray">{b}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal delay={0.12}>
              <motion.div whileHover={{ y: -6 }} className="dark-card bg-white dark:bg-white/5 overflow-hidden">
                <img src={heroMock1} alt="D-Clix dashboard preview" className="w-full h-[260px] object-cover" />
              </motion.div>
            </Reveal>
            <Reveal delay={0.18}>
              <motion.div whileHover={{ y: -6 }} className="dark-card bg-white dark:bg-white/5 overflow-hidden">
                <img src={heroMock2} alt="D-Clix mobile preview" className="w-full h-[260px] object-cover" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-white/5" id="features">
        <div className="max-w-7xl mx-auto space-y-14">
          <Reveal>
            <div className="text-center space-y-4">
              <div className="text-rose-pink text-xs font-black uppercase tracking-[0.2em]">It's more. Everything you need to elevate your club</div>
              <p className="text-muted-gray max-w-3xl mx-auto text-lg font-medium">
                Discover powerful features in D-Clix. Streamline club management with online registration, automated payments, attendance tracking, member management,
                participate in the community and more. Accessible via web and mobile for a seamless experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} y={18}>
                <motion.div whileHover={{ y: -6 }} className="dark-card bg-white dark:bg-white/5 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center mb-6">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-black dark:text-white text-dark-gray mb-2">{f.title}</div>
                  <div className="text-sm text-muted-gray font-medium leading-relaxed">{f.desc}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="dark-card bg-white dark:bg-white/5 p-12 border-l-8 border-rose-pink flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="space-y-3">
                <div className="text-4xl font-black tracking-tighter dark:text-white text-dark-gray">Improve the way your club is managed</div>
                <div className="text-muted-gray text-lg font-medium max-w-3xl">
                  Simple and Effective digital solutions for club management for accurate, up to date tracking of student/member's attendance, payments, and registration.
                </div>
              </div>
              <button onClick={onStartToday} className="rose-btn-primary text-lg">
                Starts Today
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

