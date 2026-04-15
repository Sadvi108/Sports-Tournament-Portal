import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  CalendarCheck,
  CreditCard,
  FileSpreadsheet,
  QrCode,
  ShieldCheck,
  Trophy,
  Users,
  Zap,
  Activity,
  BarChart3,
  Server,
  Lock
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* LEFT: Copy & CTAs */}
          <div className="space-y-8">
            <Reveal>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-pink/10 border border-rose-pink/20 text-rose-pink text-xs font-black uppercase tracking-[0.2em] mb-4"
              >
                <Activity className="w-4 h-4 animate-pulse" />
                D-Clix Club Ecosystem
              </motion.div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.05] dark:text-white text-dark-gray">
                Grow Revenue.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-pink to-rose-pink-light">Streamline Operations.</span><br />
                Cultivate your thriving club ecosystem with D-Clix.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-muted-gray text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                Your dynamic club ecosystem, managed effortlessly. <span className="text-rose-pink font-bold">Anytime. Anywhere.</span>
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={onStartToday} className="rose-btn-primary text-base px-8 py-4 shadow-xl shadow-rose-pink/20 hover:-translate-y-1 transition-transform">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-gray-200 dark:border-white/10 font-bold dark:text-white text-dark-gray hover:border-rose-pink hover:text-rose-pink transition-colors">
                  Watch Demo
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Animated Ecosystem / Dashboard Visualization */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            <Reveal delay={0.4} className="w-full h-full relative">
              
              {/* Center Hub */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-deep-black border-4 border-rose-pink flex flex-col items-center justify-center z-30 shadow-[0_0_60px_rgba(225,29,72,0.4)]"
                animate={{ 
                  boxShadow: ['0 0 40px rgba(225,29,72,0.3)', '0 0 80px rgba(225,29,72,0.6)', '0 0 40px rgba(225,29,72,0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={dclixLogo} alt="D-Clix" className="w-16 h-16 relative z-10" />
              </motion.div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full z-10" style={{ filter: 'drop-shadow(0 0 10px rgba(225,29,72,0.3))' }}>
                <motion.path 
                  d="M 50% 50% L 20% 20%" 
                  stroke="#e11d48" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.5"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path 
                  d="M 50% 50% L 80% 20%" 
                  stroke="#e11d48" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.5"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }}
                />
                <motion.path 
                  d="M 50% 50% L 20% 80%" 
                  stroke="#e11d48" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.5"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }}
                />
                <motion.path 
                  d="M 50% 50% L 80% 80%" 
                  stroke="#e11d48" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.5"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }}
                />
              </svg>

              {/* Floating Feature 1: Optimized Flow */}
              <motion.div 
                className="absolute top-[10%] left-[5%] dark-card bg-white/90 dark:bg-deep-black/90 backdrop-blur-md p-4 rounded-2xl border border-rose-pink/30 shadow-2xl z-20 w-48"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              >
                <div className="w-8 h-8 rounded-full bg-rose-pink/20 text-rose-pink flex items-center justify-center mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-black text-rose-pink uppercase tracking-wider mb-1">Optimized Flow</div>
                <div className="text-sm font-bold dark:text-white text-dark-gray leading-tight">Streamlined Operations</div>
              </motion.div>

              {/* Floating Feature 2: Actionable Insights */}
              <motion.div 
                className="absolute top-[10%] right-[5%] dark-card bg-white/90 dark:bg-deep-black/90 backdrop-blur-md p-4 rounded-2xl border border-rose-pink/30 shadow-2xl z-20 w-48"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-8 h-8 rounded-full bg-rose-pink/20 text-rose-pink flex items-center justify-center mb-2">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-black text-rose-pink uppercase tracking-wider mb-1">Actionable Insights</div>
                <div className="text-sm font-bold dark:text-white text-dark-gray leading-tight">Data Management & Insights</div>
              </motion.div>

              {/* Floating Feature 3: Vibrant Community */}
              <motion.div 
                className="absolute bottom-[10%] left-[5%] dark-card bg-white/90 dark:bg-deep-black/90 backdrop-blur-md p-4 rounded-2xl border border-rose-pink/30 shadow-2xl z-20 w-48"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-8 h-8 rounded-full bg-rose-pink/20 text-rose-pink flex items-center justify-center mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-black text-rose-pink uppercase tracking-wider mb-1">Vibrant Community</div>
                <div className="text-sm font-bold dark:text-white text-dark-gray leading-tight">Enhanced Member Experience</div>
              </motion.div>

              {/* Floating Feature 4: Seamless Growth */}
              <motion.div 
                className="absolute bottom-[10%] right-[5%] dark-card bg-white/90 dark:bg-deep-black/90 backdrop-blur-md p-4 rounded-2xl border border-rose-pink/30 shadow-2xl z-20 w-48"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="w-8 h-8 rounded-full bg-rose-pink/20 text-rose-pink flex items-center justify-center mb-2">
                  <Server className="w-4 h-4" />
                </div>
                <div className="text-[10px] font-black text-rose-pink uppercase tracking-wider mb-1">Seamless Growth</div>
                <div className="text-sm font-bold dark:text-white text-dark-gray leading-tight">Scalability & Security</div>
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
              <button onClick={onStartToday} className="rose-btn-primary text-lg whitespace-nowrap">
                Start Today
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

