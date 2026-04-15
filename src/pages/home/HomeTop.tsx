import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const MuayThaiAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]">
    <circle cx="35" cy="30" r="7" fill="none" stroke="#e11d48" strokeWidth="3" />
    <path d="M35 37 L35 60" stroke="#e11d48" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Guard up high (Mongkhon/Pra Jiad style) */}
    <path d="M35 45 L45 35 L40 25 M35 45 L25 35 L30 25" stroke="#e11d48" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Planted leg */}
    <path d="M35 60 L30 90" stroke="#e11d48" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Knee strike */}
    <motion.path 
      animate={{ d: ["M35 60 L45 80 L55 90", "M35 60 L60 55 L55 80", "M35 60 L45 80 L55 90"] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      stroke="#e11d48" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" 
    />
  </svg>
);

const WrestlingAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">
    {/* Fighter 1 (Bottom/Defending) */}
    <circle cx="40" cy="70" r="7" fill="none" stroke="#eab308" strokeWidth="3" />
    <path d="M40 77 L40 85 M40 85 L25 90 M40 85 L55 90" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 80 L25 75 M40 80 L55 75" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Fighter 2 (Top/Attacking - Suplex or Takedown) */}
    <motion.g
      animate={{ rotate: [0, 45, 0], x: [0, 10, 0], y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "60px 60px" }}
    >
      <circle cx="60" cy="50" r="7" fill="none" stroke="#eab308" strokeWidth="3" opacity="0.8" />
      <path d="M60 57 L60 75 M60 75 L50 90 M60 75 L70 90" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M60 62 L45 70 M60 62 L75 70" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </motion.g>
  </svg>
);

const SilatAnimation = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
    {/* Low stance (Kuda-kuda) */}
    <circle cx="50" cy="40" r="7" fill="none" stroke="#10b981" strokeWidth="3" />
    <path d="M50 47 L50 65" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Deep wide stance */}
    <motion.path 
      animate={{ d: ["M50 65 L30 80 L20 90 M50 65 L70 80 L80 90", "M50 65 L25 85 L15 90 M50 65 L75 85 L85 90", "M50 65 L30 80 L20 90 M50 65 L70 80 L80 90"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" 
    />
    
    {/* Flowing hand movements */}
    <motion.path 
      animate={{ d: ["M50 55 L30 50 L25 35 M50 55 L70 50 L75 35", "M50 55 L35 45 L40 30 M50 55 L65 45 L60 30", "M50 55 L30 50 L25 35 M50 55 L70 50 L75 35"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" 
    />
  </svg>
);

const ActionBentoCard = ({ title, color, children, delay }: { title: string, color: string, children: React.ReactNode, delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative overflow-hidden rounded-3xl border dark:bg-[#0A0A0A]/80 bg-white/80 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 group cursor-pointer"
      style={{ borderColor: `${color}30` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)` }} />
      <div className="w-24 h-24 mb-4 relative z-10">
        {children}
      </div>
      <div className="text-xs font-bold uppercase tracking-[0.2em] relative z-10" style={{ color }}>
        {title}
      </div>
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
                Tech-Forward Animation Lab
              </motion.div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-semibold tracking-tight leading-[1.05] dark:text-white text-dark-gray">
                Grow Revenue.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-pink to-rose-pink-light">Modern Sports Equipment.</span><br />
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

          {/* RIGHT: Tech-Forward Lab Hexagon Layout */}
          <div className="relative h-[650px] w-full">
            <Reveal delay={0.4} className="w-full h-full relative">
              
              {/* Background decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-cyan-400/50 animate-ping" />
                <div className="absolute bottom-[30%] right-[30%] w-1.5 h-1.5 rounded-full bg-magenta-400/50 animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[60%] left-[40%] w-1 h-1 rounded-full bg-yellow-400/50 animate-ping" style={{ animationDelay: '2s' }} />
              </div>

              {/* Hexagon Cards Positioned Diagonally */}
              <HexagonCard 
                title="Wrestling" 
                desc="Rotating 3D Headgear & Belt." 
                color="#06b6d4" 
                delay={0.5}
                className="top-[5%] left-[5%] z-20"
              >
                <WrestlingEquipment />
              </HexagonCard>

              <HexagonCard 
                title="Basketball" 
                desc="Dynamic 3D Bounce & Neon Trail." 
                color="#d946ef" 
                delay={0.7}
                className="top-[30%] right-[5%] z-10"
              >
                <BasketballEquipment />
              </HexagonCard>

              <HexagonCard 
                title="Martial Arts" 
                desc="Dynamic Black Belt Tying." 
                color="#eab308" 
                delay={0.9}
                className="bottom-[5%] left-[20%] z-30"
              >
                <MartialArtsEquipment />
              </HexagonCard>

              {/* Right Sidebar Decorative Badges */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:flex flex-col items-end gap-4 z-40 opacity-80 pr-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-right">Animation<br/>Execution</div>
                
                <motion.div whileHover={{ x: -5 }} className="flex flex-col items-center gap-2 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <Box className="w-5 h-5" />
                  </div>
                  <div className="text-[8px] font-bold text-gray-300 tracking-wider">SPLINE 3D</div>
                </motion.div>
                
                <motion.div whileHover={{ x: -5 }} className="flex flex-col items-center gap-2 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-magenta-500/20 to-pink-500/20 border border-magenta-500/30 flex items-center justify-center text-magenta-400 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                    <MonitorPlay className="w-5 h-5" />
                  </div>
                  <div className="text-[8px] font-bold text-gray-300 tracking-wider">LOTTIE</div>
                </motion.div>

                <motion.div whileHover={{ x: -5 }} className="flex flex-col items-center gap-2 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="text-[8px] font-bold text-gray-300 tracking-wider">WEBGL</div>
                </motion.div>
              </div>

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

