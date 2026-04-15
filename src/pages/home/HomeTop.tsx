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
  Activity,
  BarChart3,
  Server
} from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Reveal } from '@/components/ui/reveal';
import dclixLogo from '@/assets/dclix-logo.svg';

// Complex SVG Animations for Sports
const BoxingAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
    <motion.g animate={{ rotate: [0, 15, -5, 0], x: [0, 5, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.4, 1] }} style={{ transformOrigin: "75px 10px" }}>
      <rect x="65" y="20" width="20" height="50" rx="10" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="3" />
      <line x1="75" y1="0" x2="75" y2="20" stroke="#06b6d4" strokeWidth="3" />
    </motion.g>
    <circle cx="30" cy="35" r="8" fill="none" stroke="#06b6d4" strokeWidth="3" />
    <path d="M30 43 L30 70 M30 70 L20 90 M30 70 L40 90" stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 45 L40 45 L35 35" stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="35" cy="35" r="5" fill="#06b6d4" />
    <motion.path animate={{ d: ["M30 45 L35 55 L40 50", "M30 45 L50 45 L65 45", "M30 45 L35 55 L40 50"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.5] }} stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <motion.circle r="6" fill="#06b6d4" animate={{ cx: [40, 65, 40], cy: [50, 45, 50] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.5] }} />
  </svg>
);

const KarateAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]">
    <motion.g animate={{ x: [0, 15, 0], opacity: [1, 0, 1], rotate: [0, 45, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 1] }} style={{ transformOrigin: "70px 50px" }}>
      <rect x="70" y="30" width="6" height="40" fill="#d946ef" rx="2" />
      <rect x="78" y="30" width="6" height="40" fill="#d946ef" rx="2" />
    </motion.g>
    <circle cx="35" cy="25" r="8" fill="none" stroke="#d946ef" strokeWidth="3" />
    <path d="M35 33 L35 60" stroke="#d946ef" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 55 L45 55 M35 55 L30 65 M35 55 L40 65" stroke="#d946ef" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 60 L35 90 L40 90" stroke="#d946ef" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <motion.path animate={{ d: ["M35 60 L45 75 L55 90", "M35 60 L50 45 L70 35", "M35 60 L45 75 L55 90"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.6] }} stroke="#d946ef" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 40 L25 45 L25 35 M35 40 L45 45 L50 35" stroke="#d946ef" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparringAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]">
    <circle cx="25" cy="35" r="7" fill="none" stroke="#14b8a6" strokeWidth="3" />
    <path d="M25 42 L25 65 M25 65 L15 90 M25 65 L35 90" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 45 L35 45 L30 35" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <motion.path animate={{ d: ["M25 45 L30 55 L35 50", "M25 45 L45 40 L60 40", "M25 45 L30 55 L35 50"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.5] }} stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <motion.g animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.5] }} style={{ transformOrigin: "75px 90px" }}>
      <circle cx="75" cy="35" r="7" fill="none" stroke="#14b8a6" strokeWidth="3" />
      <path d="M75 42 L75 65 M75 65 L65 90 M75 65 L85 90" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path animate={{ d: ["M75 45 L65 45 L60 55", "M75 45 L65 40 L60 35", "M75 45 L65 45 L60 55"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.5] }} stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 45 L70 35 L75 25" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </motion.g>
  </svg>
);

const KendoAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
    <circle cx="35" cy="30" r="7" fill="none" stroke="#a855f7" strokeWidth="3" />
    <path d="M35 37 L35 65 L25 90 M35 65 L45 90" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M35 45 L50 45" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sword swinging */}
    <motion.path 
      animate={{ d: ["M50 45 L70 20", "M50 45 L80 60", "M50 45 L70 20"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      stroke="#a855f7" strokeWidth="4" fill="none" strokeLinecap="round" 
    />
  </svg>
);

const JudoAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
    {/* Thrower */}
    <circle cx="45" cy="40" r="7" fill="none" stroke="#f97316" strokeWidth="3" />
    <path d="M45 47 L45 70 L35 90 M45 70 L55 90" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Thrown */}
    <motion.g
      animate={{ rotate: [0, 180, 0], x: [0, 20, 0], y: [0, 30, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "45px 50px" }}
    >
      <circle cx="60" cy="30" r="7" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.6" />
      <path d="M60 37 L60 60 L50 80 M60 60 L70 80" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </motion.g>
  </svg>
);

const TaekwondoAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
    <circle cx="50" cy="30" r="7" fill="none" stroke="#eab308" strokeWidth="3" />
    <motion.g
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "50px 50px" }}
    >
      <path d="M50 37 L50 60 L40 90" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Spinning Kick Leg */}
      <motion.path 
        animate={{ d: ["M50 60 L60 80", "M50 60 L80 40", "M50 60 L60 80"] }}
        transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
        stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" 
      />
    </motion.g>
  </svg>
);

const SportOrbitNode = ({ children, color, orbitSize, duration, reverse = false }: { children: React.ReactNode, color: string, orbitSize: number, duration: number, reverse?: boolean }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-20"
      style={{ width: orbitSize, height: orbitSize, marginLeft: -orbitSize / 2, marginTop: -orbitSize / 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute top-0 left-1/2 w-24 h-24 -ml-12 -mt-12 rounded-full border border-white/10 dark:bg-[#0A0A0A]/90 bg-white/90 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl"
        style={{ boxShadow: `0 0 30px ${color}40, inset 0 0 20px ${color}20` }}
        animate={{ rotate: reverse ? 360 : -360 }} // Counter-rotate to keep upright
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 relative flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

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

          {/* RIGHT: Advanced Animated Ecosystem */}
          <div className="relative h-[650px] w-full flex items-center justify-center perspective-[1200px]">
            <Reveal delay={0.4} className="w-full h-full relative">
              
              {/* Rotating Background Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-dashed border-[#06b6d4]/30 z-0"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dotted border-[#a855f7]/30 z-0"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-solid border-[#d946ef]/10 z-0"
              />

              {/* Pulsing Aura Rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-rose-pink/40 z-10"
                  animate={{ scale: [1, 4.5], opacity: [0.8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 1.33, ease: "easeOut" }}
                />
              ))}

              {/* Center Hub */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-deep-black border-2 border-[#14b8a6] flex flex-col items-center justify-center z-30 shadow-[0_0_80px_rgba(20,184,166,0.4)]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img src={dclixLogo} alt="D-Clix" className="w-28 h-28 relative z-10" />
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-t-transparent border-[#06b6d4] opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Connecting Lines (Curved SVG) */}
              <svg className="absolute inset-0 w-full h-full z-10" style={{ filter: 'drop-shadow(0 0 12px rgba(225,29,72,0.4))' }}>
                <motion.path 
                  d="M 50% 50% Q 20% 50% 20% 15%" 
                  stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity="0.6"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M 50% 50% Q 80% 50% 80% 15%" 
                  stroke="#a855f7" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity="0.6"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M 50% 50% Q 20% 50% 20% 85%" 
                  stroke="#d946ef" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity="0.6"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
                />
                <motion.path 
                  d="M 50% 50% Q 80% 50% 80% 85%" 
                  stroke="#14b8a6" strokeWidth="2.5" strokeDasharray="8 8" fill="none" opacity="0.6"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
                />
              </svg>

              {/* Orbiting Sports Characters */}
              <SportOrbitNode color="#06b6d4" orbitSize={300} duration={18} reverse={true}>
                <BoxingAnimation />
              </SportOrbitNode>

              <SportOrbitNode color="#d946ef" orbitSize={420} duration={22}>
                <KarateAnimation />
              </SportOrbitNode>

              <SportOrbitNode color="#14b8a6" orbitSize={540} duration={26} reverse={true}>
                <SparringAnimation />
              </SportOrbitNode>

              <SportOrbitNode color="#a855f7" orbitSize={660} duration={32}>
                <KendoAnimation />
              </SportOrbitNode>

              <SportOrbitNode color="#f97316" orbitSize={780} duration={38} reverse={true}>
                <JudoAnimation />
              </SportOrbitNode>

              <SportOrbitNode color="#eab308" orbitSize={900} duration={45}>
                <TaekwondoAnimation />
              </SportOrbitNode>

            </Reveal>
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

