import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  CalendarCheck,
  CreditCard,
  FileSpreadsheet,
  QrCode,
  Trophy,
  Users,
  Zap,
  Activity
} from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Reveal } from '@/components/ui/reveal';
import { sports } from '@/utils/sportsData';

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

  return (
    <>
      <section className="px-6 pt-24 pb-32 relative overflow-hidden bg-white dark:bg-[#050505]">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-rose-pink/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-rose-pink/5 blur-[100px] pointer-events-none" />
        
        <Sparkles
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
          density={400}
          size={1.5}
          speed={0.8}
          opacity={0.4}
          opacitySpeed={2}
          color="#e11d48"
        />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* LEFT: Copy & CTAs */}
          <div className="space-y-8 lg:pr-10">
            <Reveal>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-pink/10 border border-rose-pink/20 text-rose-pink text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
              >
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                D-Clix Club Ecosystem
              </motion.div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-semibold tracking-tight leading-[1.05] dark:text-white text-dark-gray">
                Grow Revenue.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-pink to-rose-pink-light">Streamline Operations.</span><br />
                Cultivate your thriving club ecosystem with D-Clix.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-muted-gray text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                Your dynamic club ecosystem, managed effortlessly. <span className="text-rose-pink font-semibold">Anytime. Anywhere.</span>
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={onStartToday} className="rose-btn-primary text-base px-8 py-4 shadow-xl shadow-rose-pink/20 hover:-translate-y-1 transition-transform font-semibold">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-gray-200 dark:border-white/10 font-semibold dark:text-white text-dark-gray hover:border-rose-pink hover:text-rose-pink transition-colors">
                  Watch Demo
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Advanced 3D Scrolling Grid of All Sports */}
          <div className="relative h-[650px] w-full overflow-hidden rounded-3xl flex items-center justify-center pointer-events-none" style={{ perspective: "1000px" }}>
            
            {/* Radial mask to fade out edges */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#ffffff_70%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,#050505_70%)]" />

            {/* Inner 3D Container */}
            <div 
              className="absolute flex gap-6"
              style={{
                transform: "rotateX(55deg) rotateZ(-40deg)",
                transformStyle: "preserve-3d",
                width: "150%",
                height: "200%",
                top: "-50%",
                left: "-25%",
              }}
            >
              {/* 3 Infinite Scrolling Columns */}
              {[0, 1, 2].map((colIndex) => {
                // Take 6 sports per column
                const columnSports = sports.slice(colIndex * 6, (colIndex + 1) * 6);
                // Duplicate multiple times for seamless scrolling
                const infiniteSports = [...columnSports, ...columnSports, ...columnSports, ...columnSports];
                const isReverse = colIndex % 2 !== 0;
                
                return (
                  <motion.div 
                    key={colIndex}
                    className="flex flex-col gap-6"
                    animate={{
                      y: isReverse ? ["-50%", "0%"] : ["0%", "-50%"]
                    }}
                    transition={{
                      duration: 25 + colIndex * 5, // different speeds
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {infiniteSports.map((sport, i) => (
                      <div 
                        key={`${sport.id}-${i}`}
                        className="w-40 h-40 shrink-0 bg-white dark:bg-[#121212] rounded-3xl border border-gray-100 dark:border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center gap-4 transition-all"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-rose-pink/5 flex items-center justify-center text-rose-pink border border-rose-pink/10 shadow-[inset_0_0_20px_rgba(225,29,72,0.05)] dark:shadow-[inset_0_0_20px_rgba(225,29,72,0.1)]">
                          <sport.icon className="w-8 h-8" />
                        </div>
                        <div className="text-dark-gray dark:text-white text-xs font-bold uppercase tracking-widest">{sport.name}</div>
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 border-t border-gray-100 dark:border-white/5" id="features">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <Reveal>
            <div className="text-center space-y-4">
              <div className="text-rose-pink text-xs font-bold uppercase tracking-[0.2em]">It's more. Everything you need to elevate your club</div>
              <p className="text-muted-gray max-w-3xl mx-auto text-lg font-medium">
                Discover powerful features in D-Clix. Streamline club management with online registration, automated payments, attendance tracking, member management,
                participate in the community and more. Accessible via web and mobile for a seamless experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} y={18}>
                <motion.div whileHover={{ y: -8 }} className="dark-card bg-white dark:bg-white/5 p-8 h-full border border-transparent hover:border-rose-pink/20 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center mb-6">
                    <f.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xl font-semibold dark:text-white text-dark-gray mb-3">{f.title}</div>
                  <div className="text-[15px] text-muted-gray font-medium leading-relaxed">{f.desc}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="dark-card bg-white dark:bg-white/5 p-12 md:p-16 border-l-[10px] border-rose-pink flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-2xl">
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight dark:text-white text-dark-gray">Improve the way your club is managed</div>
                <div className="text-muted-gray text-lg font-medium max-w-3xl leading-relaxed">
                  Simple and Effective digital solutions for club management for accurate, up to date tracking of student/member's attendance, payments, and registration.
                </div>
              </div>
              <button onClick={onStartToday} className="rose-btn-primary text-lg whitespace-nowrap px-10 py-5 font-semibold">
                Start Today
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

