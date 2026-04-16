import React, { useMemo, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import * as THREE from 'three';
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
  Box,
  MonitorPlay,
  Globe
} from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Reveal } from '@/components/ui/reveal';

// Tech-Forward Neon SVG Animations for Equipment
const WrestlingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const W = 290, H = 255;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 100);
    camera.position.z = 5.6;

    const group = new THREE.Group();
    const gMat = new THREE.LineBasicMaterial({ color: 0x00BFFF, transparent: true, opacity: 0.88 });
    const headgear = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusKnotGeometry(0.8, 0.2, 64, 8, 2, 3)), gMat
    );
    group.add(headgear);
    
    const belt = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusGeometry(1.2, 0.1, 8, 48)), gMat
    );
    belt.rotation.x = Math.PI / 2;
    group.add(belt);

    scene.add(group);

    let animationFrameId = 0;
    let running = true;
    let isIntersecting = true;

    const setRunning = (next: boolean) => {
      if (running === next) return;
      running = next;
      if (running) animationFrameId = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      setRunning(isIntersecting && document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = !!entry?.isIntersecting;
        onVisibility();
      },
      { threshold: 0.12 },
    );
    io.observe(canvas);

    function animate(t: number) {
      if (!running) return;
      const s = t * 0.001;
      group.rotation.x = s * 0.72;
      group.rotation.y = s * 1.14;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.dispose();
      headgear.geometry.dispose();
      belt.geometry.dispose();
      gMat.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

const BasketballCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const W = 290, H = 255;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 100);
    camera.position.z = 5.6;

    const ballGroup = new THREE.Group();
    const ballMesh = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.05, 26, 18)),
      new THREE.LineBasicMaterial({ color: 0xE040FB, transparent: true, opacity: 0.85 })
    );
    ballGroup.add(ballMesh);

    const seamOffsets = [[0, 0, 0], [Math.PI / 2, Math.PI / 4, 0], [Math.PI / 4, 0, Math.PI / 3]];
    const seams: THREE.LineSegments[] = [];
    for (const [rx, ry, rz] of seamOffsets) {
      const s = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.TorusGeometry(1.07, 0.008, 4, 72)),
        new THREE.LineBasicMaterial({ color: 0xFF60FF, transparent: true, opacity: 0.55 })
      );
      s.rotation.set(rx, ry, rz);
      ballGroup.add(s);
      seams.push(s);
    }
    scene.add(ballGroup);

    const trailMat = new THREE.LineBasicMaterial({ color: 0x00FFE0, transparent: true, opacity: 0.7 });
    let trailLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3()]), trailMat);
    scene.add(trailLine);

    const floorRing = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusGeometry(0.92, 0.015, 4, 48)),
      new THREE.LineBasicMaterial({ color: 0xE040FB, transparent: true, opacity: 0.3 })
    );
    floorRing.position.y = -1.75;
    floorRing.rotation.x = Math.PI / 2;
    scene.add(floorRing);

    const ripples = Array.from({ length: 3 }, (_, i) => {
      const r = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.TorusGeometry(0.5, 0.01, 4, 40)),
        new THREE.LineBasicMaterial({ color: 0x9F00FF, transparent: true, opacity: 0 })
      );
      r.position.y = -1.75;
      r.rotation.x = Math.PI / 2;
      r.userData = { phase: i * (Math.PI * 2 / 3), triggered: false };
      scene.add(r);
      return r;
    });

    const pts = new Float32Array(55 * 3);
    for (let i = 0; i < 165; i++) pts[i] = (Math.random() - 0.5) * 7;
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const pointsMat = new THREE.PointsMaterial({ color: 0xE040FB, size: 0.04, transparent: true, opacity: 0.42 });
    const pointsMesh = new THREE.Points(pg, pointsMat);
    scene.add(pointsMesh);

    const posHistory: THREE.Vector3[] = [];
    let lastBounceY = 0;
    let animationFrameId = 0;
    let running = true;
    let isIntersecting = true;

    const setRunning = (next: boolean) => {
      if (running === next) return;
      running = next;
      if (running) animationFrameId = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      setRunning(isIntersecting && document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = !!entry?.isIntersecting;
        onVisibility();
      },
      { threshold: 0.12 },
    );
    io.observe(canvas);

    function animate(t: number) {
      if (!running) return;
      const s = t * 0.001;

      const bounce = Math.abs(Math.sin(s * 1.4));
      const ballY = bounce * 2.0 - 1.6;
      const driftX = Math.sin(s * 0.7) * 0.55;

      const nearFloor = Math.max(0, 1 - (ballY + 1.6) / 1.0);
      ballGroup.scale.set(1 + nearFloor * 0.30, 1 - nearFloor * 0.25, 1 + nearFloor * 0.30);
      ballGroup.position.set(driftX, ballY, 0);
      ballGroup.rotation.z = s * 0.9;
      ballGroup.rotation.x = s * 0.5;

      posHistory.unshift(new THREE.Vector3(driftX, ballY, 0));
      if (posHistory.length > 32) posHistory.pop();
      if (posHistory.length > 1) {
        trailLine.geometry.dispose();
        trailLine.geometry = new THREE.BufferGeometry().setFromPoints(posHistory);
      }

      floorRing.scale.set(1 + nearFloor * 0.5, 1 + nearFloor * 0.5, 1);
      (floorRing.material as THREE.LineBasicMaterial).opacity = nearFloor * 0.65;

      if (lastBounceY > ballY && ballY < -1.4) {
        ripples.forEach((r, i) => {
          r.scale.set(1, 1, 1);
          (r.material as THREE.LineBasicMaterial).opacity = 0.7;
          r.userData.rippleStart = s + i * 0.12;
        });
      }
      ripples.forEach(r => {
        if (r.userData.rippleStart) {
          const age = s - r.userData.rippleStart;
          if (age >= 0 && age < 1.2) {
            const p = age / 1.2;
            r.scale.set(1 + p * 2.5, 1 + p * 2.5, 1);
            (r.material as THREE.LineBasicMaterial).opacity = 0.6 * (1 - p);
          }
        }
      });
      lastBounceY = ballY;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.dispose();
      ballMesh.geometry.dispose(); (ballMesh.material as THREE.Material).dispose();
      seams.forEach(s => { s.geometry.dispose(); (s.material as THREE.Material).dispose(); });
      trailLine.geometry.dispose(); trailMat.dispose();
      floorRing.geometry.dispose(); (floorRing.material as THREE.Material).dispose();
      ripples.forEach(r => { r.geometry.dispose(); (r.material as THREE.Material).dispose(); });
      pg.dispose(); pointsMat.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

const MartialArtsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const W = 290, H = 255;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 100);
    camera.position.z = 5.6;

    const gMat = (op?: number) => new THREE.LineBasicMaterial({ color: 0xFFC845, transparent: true, opacity: op || 0.88 });

    const knotMat = gMat();
    const knot = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusKnotGeometry(0.68, 0.15, 90, 14, 2, 3)), knotMat
    );
    knot.position.y = 0.2;
    scene.add(knot);

    const beltMat = gMat(0.72);
    const beltTorus = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusGeometry(1.38, 0.085, 8, 80)), beltMat
    );
    beltTorus.rotation.x = Math.PI / 3.8;
    scene.add(beltTorus);

    const stripPositions = [[-0.28, 0.14], [0.28, -0.14]];
    const stripMat = gMat(0.55);
    const strips = stripPositions.map(([x, rz]) => {
      const strip = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.BoxGeometry(0.20, 1.55, 0.04)),
        stripMat
      );
      strip.position.set(x, -1.28, 0.22);
      strip.rotation.z = rz;
      scene.add(strip);
      return strip;
    });

    const stripes: THREE.LineSegments[] = [];
    const stripeMat = new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.22 });
    for (let i = 0; i < 4; i++) {
      const stripe = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.BoxGeometry(0.20, 0.035, 0.05)),
        stripeMat
      );
      stripe.position.set(-0.28, -0.82 - i * 0.14, 0.24);
      scene.add(stripe);
      stripes.push(stripe);
    }

    const outerRingMat = gMat(0.16);
    const outerRing = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusGeometry(1.95, 0.02, 5, 90)), outerRingMat
    );
    scene.add(outerRing);

    const innerRingMat = gMat(0.25);
    const innerRing = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.TorusGeometry(0.90, 0.015, 5, 60)), innerRingMat
    );
    innerRing.position.y = 0.2;
    scene.add(innerRing);

    const pts = new Float32Array(55 * 3);
    for (let i = 0; i < 165; i++) pts[i] = (Math.random() - 0.5) * 7;
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    const pointsMat = new THREE.PointsMaterial({ color: 0xFFC845, size: 0.05, transparent: true, opacity: 0.38 });
    const pointsMesh = new THREE.Points(pg, pointsMat);
    scene.add(pointsMesh);

    let animationFrameId = 0;
    let running = true;
    let isIntersecting = true;

    const setRunning = (next: boolean) => {
      if (running === next) return;
      running = next;
      if (running) animationFrameId = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      setRunning(isIntersecting && document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = !!entry?.isIntersecting;
        onVisibility();
      },
      { threshold: 0.12 },
    );
    io.observe(canvas);

    function animate(t: number) {
      if (!running) return;
      const s = t * 0.001;

      knot.rotation.y = s * 0.82;
      knot.rotation.x = s * 0.38;
      knot.rotation.z = Math.sin(s * 0.26) * 0.18;

      beltTorus.rotation.z = s * 0.28;
      beltTorus.rotation.y = Math.sin(s * 0.35) * 0.38;

      outerRing.rotation.z = -s * 0.18;
      outerRing.rotation.x = Math.sin(s * 0.22) * 0.22;
      innerRing.rotation.y = s * 0.55;

      strips.forEach((strip, i) => {
        strip.rotation.z = (i === 0 ? 0.14 : -0.14) + Math.sin(s * 0.5 + i) * 0.08;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.dispose();
      knot.geometry.dispose(); knotMat.dispose();
      beltTorus.geometry.dispose(); beltMat.dispose();
      strips.forEach(s => s.geometry.dispose()); stripMat.dispose();
      stripes.forEach(s => s.geometry.dispose()); stripeMat.dispose();
      outerRing.geometry.dispose(); outerRingMat.dispose();
      innerRing.geometry.dispose(); innerRingMat.dispose();
      pg.dispose(); pointsMat.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

const HexCanvasCard = ({ 
  type, 
  title, 
  desc, 
  hudCode, 
  delay, 
  children 
}: { 
  type: 'wrestling' | 'basketball' | 'martialarts', 
  title: string, 
  desc: string, 
  hudCode: string, 
  delay: number, 
  children: React.ReactNode 
}) => {
  const colors = {
    wrestling: '#00BFFF',
    basketball: '#E040FB',
    martialarts: '#FFC845'
  };
  const color = colors[type];
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltXSpring = useSpring(tiltX, { stiffness: 220, damping: 22, mass: 0.35 });
  const tiltYSpring = useSpring(tiltY, { stiffness: 220, damping: 22, mass: 0.35 });

  const onTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(-py * 7);
    tiltY.set(px * 7);
  };

  const onTiltLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col items-center gap-[22px] ${type}`}
      style={{ '--sc': color } as React.CSSProperties}
    >
      <motion.div
        onMouseMove={onTiltMove}
        onMouseLeave={onTiltLeave}
        style={{ rotateX: tiltXSpring, rotateY: tiltYSpring, transformPerspective: 900 }}
        className="group cursor-pointer transition-all duration-300 drop-shadow-[0_0_16px_var(--sc)] hover:drop-shadow-[0_0_38px_var(--sc)] animate-[hexBreath_6s_ease-in-out_infinite]"
      >
        <div className="relative w-[300px] h-[260px] sm:w-[260px] sm:h-[225px] md:w-[300px] md:h-[260px]">
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'var(--sc)', 
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' 
            }} 
          />
          <div 
            className="absolute top-[2.5px] left-[5px] w-[290px] h-[255px] sm:top-[2px] sm:left-[4px] sm:w-[252px] sm:h-[221px] md:top-[2.5px] md:left-[5px] md:w-[290px] md:h-[255px] overflow-hidden bg-[#050811]"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            {children}
            
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute left-0 right-0 h-[1px] opacity-10 bg-gradient-to-r from-transparent via-[var(--sc)] to-transparent animate-[scanline_3s_linear_infinite]" style={{ animationDelay: `${delay}s` }} />
              <div className="absolute w-[14px] h-[14px] opacity-70 top-[50px] left-[75px] border-t-[1.5px] border-l-[1.5px] border-[var(--sc)]" />
              <div className="absolute w-[14px] h-[14px] opacity-70 top-[50px] right-[75px] border-t-[1.5px] border-r-[1.5px] border-[var(--sc)]" />
              <div className="absolute w-[14px] h-[14px] opacity-70 bottom-[50px] left-[75px] border-b-[1.5px] border-l-[1.5px] border-[var(--sc)]" />
              <div className="absolute w-[14px] h-[14px] opacity-70 bottom-[50px] right-[75px] border-b-[1.5px] border-r-[1.5px] border-[var(--sc)]" />
              <div className="absolute bottom-[58px] left-1/2 -translate-x-1/2 text-[7px] tracking-[0.9px] font-mono text-[var(--sc)] opacity-40 whitespace-nowrap">
                {hudCode}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="text-center">
        <span className="font-bold text-[19px] uppercase tracking-[1.2px] block font-[Barlow_Condensed,sans-serif]" style={{ color: 'var(--sc)' }}>
          {title}
        </span>
        <span className="text-[12.5px] text-[#8A9BC0] mt-1 block">
          {desc}
        </span>
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
                <motion.button
                  onClick={onStartToday}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="rose-btn-primary text-base px-8 py-4 shadow-xl shadow-rose-pink/20 font-semibold relative overflow-hidden group"
                >
                  <span className="absolute -inset-y-8 -left-28 w-24 rotate-12 bg-white/25 blur-md opacity-0 group-hover:opacity-100 animate-[ctaShine_1.2s_ease-in-out_infinite]" />
                  Start Your Journey
                </motion.button>
                <button className="px-8 py-4 rounded-full border-2 border-gray-200 dark:border-white/10 font-semibold dark:text-white text-dark-gray hover:border-rose-pink hover:text-rose-pink transition-colors">
                  Watch Demo
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Tech-Forward Lab Hexagon Layout */}
          <div className="relative w-full py-10 lg:py-0">
            <style>{`
              @keyframes scanline {
                0%   { top: 45px; opacity: 0; }
                10%  { opacity: 0.18; }
                90%  { opacity: 0.18; }
                100% { top: 215px; opacity: 0; }
              }
              @keyframes hexBreath {
                0%, 100% { filter: drop-shadow(0 0 14px var(--sc)) drop-shadow(0 0 3px var(--sc)); }
                50%      { filter: drop-shadow(0 0 26px var(--sc)) drop-shadow(0 0 7px var(--sc)); }
              }
              @keyframes ctaShine {
                0%   { transform: translateX(0) rotate(12deg); opacity: 0; }
                10%  { opacity: 1; }
                100% { transform: translateX(360px) rotate(12deg); opacity: 0; }
              }
            `}</style>
            <Reveal delay={0.4} className="w-full h-full relative flex items-center justify-center lg:justify-end">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start max-w-[650px] relative z-10">
                <HexCanvasCard 
                  type="wrestling" 
                  title="Wrestling" 
                  desc="Rotating 3D Headgear & Belt." 
                  hudCode="ROT.X:0.72 | ROT.Y:1.14 | MESH:WF" 
                  delay={0}
                >
                  <WrestlingCanvas />
                </HexCanvasCard>

                <HexCanvasCard 
                  type="basketball" 
                  title="Basketball" 
                  desc="Dynamic 3D Bounce & Neon Trail." 
                  hudCode="VEL:2.18 | BOUNCE:0.82 | TRAIL:ON" 
                  delay={1.1}
                >
                  <BasketballCanvas />
                </HexCanvasCard>

                <HexCanvasCard 
                  type="martialarts" 
                  title="Martial Arts" 
                  desc="Knot & Dan Stripes Swaying." 
                  hudCode="KNOT:DAN-1 | TWIST:2.34π | WIRE:ON" 
                  delay={2.2}
                >
                  <MartialArtsCanvas />
                </HexCanvasCard>
              </div>

              {/* Right Sidebar Decorative Badges */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 hidden xl:flex flex-col items-end gap-4 z-40 opacity-80 pr-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-right">Animation<br/>Execution</div>
                
                <motion.div whileHover={{ x: -5 }} className="flex flex-col items-center gap-2 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-[#050811] border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    <Box className="w-5 h-5" />
                  </div>
                  <div className="text-[8px] font-bold text-gray-300 tracking-wider">THREE.JS</div>
                </motion.div>
                
                <motion.div whileHover={{ x: -5 }} className="flex flex-col items-center gap-2 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-[#050811] border border-magenta-500/30 flex items-center justify-center text-magenta-400 shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                    <MonitorPlay className="w-5 h-5" />
                  </div>
                  <div className="text-[8px] font-bold text-gray-300 tracking-wider">REACT</div>
                </motion.div>

                <motion.div whileHover={{ x: -5 }} className="flex flex-col items-center gap-2 cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-[#050811] border border-yellow-500/30 flex items-center justify-center text-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
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

