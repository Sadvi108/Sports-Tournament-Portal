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
  Lock,
  Swords,
  Dumbbell,
  Target
} from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Reveal } from '@/components/ui/reveal';
import dclixLogo from '@/assets/dclix-logo.svg';

function img(prompt: string, size: string) {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
}

// Complex orbital components with AI-generated futuristic illustrations
const CharacterNode = ({ prompt, color, orbitSize, duration, reverse = false, delay = 0 }: { prompt: string, color: string, orbitSize: number, duration: number, reverse?: boolean, delay?: number }) => {
  const imageUrl = useMemo(() => img(prompt, 'square'), [prompt]);
  
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-20"
      style={{ width: orbitSize, height: orbitSize, marginLeft: -orbitSize / 2, marginTop: -orbitSize / 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute top-0 left-1/2 w-20 h-20 -ml-10 -mt-10 rounded-full border-2 bg-[#050505] overflow-hidden flex items-center justify-center shadow-2xl"
        style={{ borderColor: color, boxShadow: `0 0 20px ${color}40` }}
        animate={{ rotate: reverse ? 360 : -360 }} // Counter-rotate to keep upright
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <img src={imageUrl} alt="Character" className="w-full h-full object-cover mix-blend-screen opacity-90" />
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

              {/* Floating Feature Node 1: Optimized Flow */}
              <motion.div 
                className="absolute top-[5%] left-[2%] dark-card bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl p-4 rounded-3xl border border-[#06b6d4]/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] z-30 w-60 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: [0, -15, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.8 },
                  scale: { type: "spring", stiffness: 100, delay: 0.8 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }
                }}
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#06b6d4]/20 text-[#06b6d4] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#06b6d4] uppercase tracking-widest mb-0.5">Optimized Flow</div>
                  <div className="text-sm font-semibold dark:text-white text-dark-gray leading-tight">Streamlined Operations</div>
                </div>
              </motion.div>

              {/* Floating Feature Node 2: Actionable Insights */}
              <motion.div 
                className="absolute top-[5%] right-[2%] dark-card bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl p-4 rounded-3xl border border-[#a855f7]/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] z-30 w-60 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, x: -40 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: [0, 15, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 1.1 },
                  scale: { type: "spring", stiffness: 100, delay: 1.1 },
                  y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                whileHover={{ scale: 1.05, rotateY: -10, rotateX: -10 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/20 text-[#a855f7] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#a855f7] uppercase tracking-widest mb-0.5">Actionable Insights</div>
                  <div className="text-sm font-semibold dark:text-white text-dark-gray leading-tight">Data Management</div>
                </div>
              </motion.div>

              {/* Floating Feature Node 3: Vibrant Community */}
              <motion.div 
                className="absolute bottom-[5%] left-[2%] dark-card bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl p-4 rounded-3xl border border-[#d946ef]/20 shadow-[0_0_30px_rgba(217,70,239,0.15)] z-30 w-60 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: [0, -12, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 1.4 },
                  scale: { type: "spring", stiffness: 100, delay: 1.4 },
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d946ef]/20 text-[#d946ef] flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#d946ef] uppercase tracking-widest mb-0.5">Vibrant Community</div>
                  <div className="text-sm font-semibold dark:text-white text-dark-gray leading-tight">Enhanced Experience</div>
                </div>
              </motion.div>

              {/* Floating Feature Node 4: Seamless Growth */}
              <motion.div 
                className="absolute bottom-[5%] right-[2%] dark-card bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl p-4 rounded-3xl border border-[#14b8a6]/20 shadow-[0_0_30px_rgba(20,184,166,0.15)] z-30 w-60 flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8, x: -40 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: [0, 18, 0] }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 1.7 },
                  scale: { type: "spring", stiffness: 100, delay: 1.7 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                whileHover={{ scale: 1.05, rotateY: -10, rotateX: 10 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#14b8a6]/20 text-[#14b8a6] flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#14b8a6] uppercase tracking-widest mb-0.5">Seamless Growth</div>
                  <div className="text-sm font-semibold dark:text-white text-dark-gray leading-tight">Scalability & Security</div>
                </div>
              </motion.div>

              {/* Orbiting Sports Characters */}
              <CharacterNode 
                prompt="Futuristic cybernetic martial artist doing a high kick, glowing neon magenta accents, dark background, highly detailed, cyberpunk style" 
                color="#d946ef" 
                orbitSize={350} 
                duration={15} 
              />
              
              <CharacterNode 
                prompt="Futuristic cybernetic soccer player kicking a glowing ball, neon cyan accents, dark background, highly detailed, cyberpunk style" 
                color="#06b6d4" 
                orbitSize={500} 
                duration={22} 
                reverse={true}
              />
              
              <CharacterNode 
                prompt="Futuristic tennis player swinging a glowing racket, neon teal accents, dark background, highly detailed, cyberpunk style" 
                color="#14b8a6" 
                orbitSize={650} 
                duration={30} 
              />

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

