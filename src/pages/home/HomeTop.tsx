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
} from 'lucide-react';
import { Sparkles } from '@/components/ui/sparkles';
import { Reveal } from '@/components/ui/reveal';

// Tech-Forward Neon SVG Animations for Equipment
const BoxingCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.z = 5.6;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const group = new THREE.Group();
    const gMat = new THREE.LineBasicMaterial({ color: 0xE11D48, transparent: true, opacity: 0.9 });

    const wireframes: THREE.BufferGeometry[] = [];
    const solids: THREE.BufferGeometry[] = [];
    const makeWire = (geo: THREE.BufferGeometry) => {
      solids.push(geo);
      const wf = new THREE.WireframeGeometry(geo);
      wireframes.push(wf);
      return new THREE.LineSegments(wf, gMat);
    };

    const head = makeWire(new THREE.SphereGeometry(0.26, 14, 12));
    head.position.y = 0.9;
    group.add(head);

    const torso = makeWire(new THREE.CylinderGeometry(0.22, 0.28, 0.78, 12, 1, true));
    torso.position.y = 0.35;
    group.add(torso);

    const hips = makeWire(new THREE.SphereGeometry(0.22, 12, 10));
    hips.position.y = -0.15;
    group.add(hips);

    const guardRing = makeWire(new THREE.TorusGeometry(0.82, 0.018, 6, 64));
    guardRing.rotation.x = Math.PI / 2;
    guardRing.position.y = 0.38;
    group.add(guardRing);

    const leftArm = new THREE.Group();
    leftArm.position.set(-0.35, 0.55, 0);
    group.add(leftArm);
    const leftUpper = makeWire(new THREE.CylinderGeometry(0.055, 0.055, 0.55, 10, 1, true));
    leftUpper.rotation.z = Math.PI / 2.2;
    leftUpper.position.x = -0.16;
    leftArm.add(leftUpper);
    const leftGlove = makeWire(new THREE.SphereGeometry(0.18, 12, 10));
    leftGlove.position.set(-0.43, -0.08, 0.15);
    leftArm.add(leftGlove);

    const rightArm = new THREE.Group();
    rightArm.position.set(0.35, 0.55, 0);
    group.add(rightArm);
    const rightUpper = makeWire(new THREE.CylinderGeometry(0.055, 0.055, 0.58, 10, 1, true));
    rightUpper.rotation.z = -Math.PI / 2.2;
    rightUpper.position.x = 0.16;
    rightArm.add(rightUpper);
    const rightGlove = makeWire(new THREE.SphereGeometry(0.18, 12, 10));
    rightGlove.position.set(0.43, -0.08, 0.15);
    rightArm.add(rightGlove);

    const leftLeg = makeWire(new THREE.CylinderGeometry(0.07, 0.07, 0.78, 10, 1, true));
    leftLeg.position.set(-0.18, -0.92, 0);
    group.add(leftLeg);
    const rightLeg = makeWire(new THREE.CylinderGeometry(0.07, 0.07, 0.78, 10, 1, true));
    rightLeg.position.set(0.18, -0.92, 0);
    group.add(rightLeg);

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
      const jab = (Math.sin(s * 1.65) + 1) * 0.5;
      rightGlove.position.z = 0.15 + jab * 0.65;
      rightArm.rotation.y = -0.22 - jab * 0.28;
      leftArm.rotation.y = 0.14 + Math.sin(s * 1.35) * 0.08;
      group.rotation.y = Math.sin(s * 0.8) * 0.18;
      group.rotation.x = Math.sin(s * 0.55) * 0.08;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.dispose();
      wireframes.forEach(g => g.dispose());
      solids.forEach(g => g.dispose());
      gMat.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

const KarateCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.z = 5.6;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const group = new THREE.Group();
    const gMat = new THREE.LineBasicMaterial({ color: 0x00BFFF, transparent: true, opacity: 0.88 });

    const wireframes: THREE.BufferGeometry[] = [];
    const solids: THREE.BufferGeometry[] = [];
    const makeWire = (geo: THREE.BufferGeometry) => {
      solids.push(geo);
      const wf = new THREE.WireframeGeometry(geo);
      wireframes.push(wf);
      return new THREE.LineSegments(wf, gMat);
    };

    const head = makeWire(new THREE.SphereGeometry(0.24, 14, 12));
    head.position.y = 0.92;
    group.add(head);

    const torso = makeWire(new THREE.CylinderGeometry(0.22, 0.28, 0.8, 12, 1, true));
    torso.position.y = 0.35;
    group.add(torso);

    const belt = makeWire(new THREE.TorusGeometry(0.36, 0.03, 8, 48));
    belt.position.y = 0.05;
    belt.rotation.x = Math.PI / 2;
    group.add(belt);

    const leftArm = makeWire(new THREE.CylinderGeometry(0.055, 0.055, 0.62, 10, 1, true));
    leftArm.position.set(-0.38, 0.55, 0.08);
    leftArm.rotation.z = Math.PI / 2.25;
    group.add(leftArm);

    const rightArm = makeWire(new THREE.CylinderGeometry(0.055, 0.055, 0.62, 10, 1, true));
    rightArm.position.set(0.38, 0.55, 0.08);
    rightArm.rotation.z = -Math.PI / 2.25;
    group.add(rightArm);

    const standingLeg = makeWire(new THREE.CylinderGeometry(0.07, 0.07, 0.9, 10, 1, true));
    standingLeg.position.set(-0.18, -0.95, 0);
    group.add(standingLeg);

    const kick = new THREE.Group();
    kick.position.set(0.12, -0.55, 0);
    group.add(kick);

    const kickingLeg = makeWire(new THREE.CylinderGeometry(0.07, 0.07, 0.95, 10, 1, true));
    kickingLeg.position.set(0.5, 0.05, 0);
    kickingLeg.rotation.z = -Math.PI / 2.9;
    kick.add(kickingLeg);

    const foot = makeWire(new THREE.BoxGeometry(0.22, 0.1, 0.14));
    foot.position.set(0.88, -0.24, 0.05);
    kick.add(foot);

    const arcMat = new THREE.LineBasicMaterial({ color: 0x00FFE0, transparent: true, opacity: 0.0 });
    const arcWf = new THREE.WireframeGeometry(new THREE.TorusGeometry(0.95, 0.012, 6, 80));
    wireframes.push(arcWf);
    const arc = new THREE.LineSegments(arcWf, arcMat);
    arc.rotation.x = Math.PI / 2;
    arc.rotation.z = Math.PI / 6;
    arc.position.set(0.1, -0.05, 0.05);
    group.add(arc);

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
      const phase = (Math.sin(s * 1.25) + 1) * 0.5;
      kick.rotation.z = -0.5 - phase * 0.9;
      group.rotation.y = Math.sin(s * 0.75) * 0.22;
      group.rotation.x = Math.sin(s * 0.55) * 0.08;
      group.position.y = Math.sin(s * 0.95) * 0.06;
      arc.scale.set(1 + phase * 0.45, 1 + phase * 0.45, 1);
      arcMat.opacity = 0.5 * (1 - phase);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.dispose();
      wireframes.forEach(g => g.dispose());
      solids.forEach(g => g.dispose());
      arcMat.dispose();
      gMat.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} className="w-full h-full block" />;
};

const MartialArtsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.z = 5.6;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

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
      ro.disconnect();
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

const KarateImage = () => (
  <div className="relative overflow-hidden aspect-square flex items-center justify-center">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTM5LjUgMGwuNS41di41aC0uNWwtLjUtLjV2LS41aC41em0wIDM5bC41LjV2LjVoLS41bC0uNS0uNXYtLjVoLjV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-20" />
    <div className="w-4/5 h-4/5 bg-[#121212] border-2 border-rose-pink/20 flex items-center justify-center relative" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
      <img alt="Karate Silhouette" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(225,29,72,0.6)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy7xtJRShI42f_6v22GUCDrBJ6QXv2-yXYesHKKd6DwaAbjkeVZH_xfEPHcHQFp0lxyXhZNjeVQwihqtwvztxrVdTDpK5BfojSTeDnw5glMOoj5K3xZnzGz_-ZkVX1wj1rqTxb_Adaz37qX2Qpu4o-e5vJBGZ6YRFFuf1Mz7qvIJAwlLxzGQOlBeOgJB4WMNpBHfSwzPm5h1u-qy1q9L36gqZCl5D9o-2s5hiBWeXpicVJo6ids_OAeuwoklG_YrkWjiMlRbsa0A" />
    </div>
  </div>
);

const BoxingImage = () => (
  <div className="relative overflow-hidden aspect-square flex items-center justify-center">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTM5LjUgMGwuNS41di41aC0uNWwtLjUtLjV2LS41aC41em0wIDM5bC41LjV2LjVoLS41bC0uNS0uNXYtLjVoLjV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-20" />
    <div className="w-4/5 h-4/5 bg-[#121212] border-2 border-rose-pink/20 flex items-center justify-center relative" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
      <img alt="Boxing Silhouette" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(225,29,72,0.6)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2O1SCGPsM7aIoESkgxW5XPFlSPtoIPfBjjiIXrHWMYNNW0YJCy2Sj7VLj8_hCl7ojmQVtrrHbn5Ik0OYmEbpcgcL5ntzMj7H1QQd2L_hezPxhR_u0AXhcBsELOJ8oli8DRzYbnbKX4wTPACh4uUuu8LorIVy9L7p0GOUNPQ4wzoTwJrrG4MOI0VEKixekEYzuJd79d6KGF-rp232k6gERN95tVwqQ-4IaaycexeDEIN1QDufKgdP61fcKYt37lB8ZO5p43IjYBg" />
    </div>
  </div>
);

const MMAImage = () => (
  <div className="relative overflow-hidden aspect-square flex items-center justify-center">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTM5LjUgMGwuNS41di41aC0uNWwtLjUtLjV2LS41aC41em0wIDM5bC41LjV2LjVoLS41bC0uNS0uNXYtLjVoLjV6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-20" />
    <div className="w-4/5 h-4/5 bg-[#121212] border-2 border-rose-pink/20 flex items-center justify-center relative" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
      <img alt="MMA Silhouette" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(225,29,72,0.6)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOdZIM6lFhPkB4qV6Pn_eAU8ASveBASj5fSxCuVRDMcxB2LB-raEaHQFGqoPaYkiwve4kfCPWAg4oL8MMvmnaryhrp83FcI5TTAjBx4QShwZxVoXoyECla9yo9G1Be_x7FVsEB5VXhthzJ6xKcl9H79EkIUqp_vd4xZRRTnJXaRMVKqnyQuJDW6tFMxvuic-KjcFekdRbE_Hb7WFamrSqYP7jIvtZqAE7x2ygbNl7uiyVwHT7OhxCBbFcUZqWSYQoCJRUEjZ_4cQ" />
    </div>
  </div>
);

const HexCanvasCard = ({ 
  type, 
  title, 
  desc, 
  hudCode, 
  delay, 
  children 
}: { 
  type: 'boxing' | 'karate' | 'martialarts', 
  title: string, 
  desc: string, 
  hudCode: string, 
  delay: number, 
  children: React.ReactNode 
}) => {
  const colors = {
    boxing: '#E11D48',
    karate: '#00BFFF',
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
    tiltX.set(-py * 4);
    tiltY.set(px * 4);
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
        className="group cursor-pointer transition-all duration-300 drop-shadow-[0_0_16px_var(--sc)] hover:drop-shadow-[0_0_38px_var(--sc)]"
      >
        <div className="relative w-[300px] h-[260px] sm:w-[320px] sm:h-[278px] lg:w-[360px] lg:h-[312px]">
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'var(--sc)', 
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' 
            }} 
          />
          <div 
            className="absolute top-[2.5px] left-[5px] w-[290px] h-[255px] sm:top-[3px] sm:left-[6px] sm:w-[308px] sm:h-[272px] lg:top-[3px] lg:left-[6px] lg:w-[348px] lg:h-[306px] overflow-hidden bg-[#050811]"
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
        <span className="hidden sm:block text-[12px] text-[#8A9BC0] mt-1">
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
      <section className="px-6 pt-24 pb-32 relative overflow-hidden bg-white dark:bg-[#0B0F16]">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <img alt="Shadow Structure" className="w-full h-full object-cover opacity-[0.03] dark:opacity-[0.05] filter grayscale pointer-events-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk6MEos6fIgdlm2510JueBWCk7dw876IO_BgqajLkXPRlbivqSqOi7Lj7VXjKNiZREqpslNlEjLcZSrN-WOH9g0xFkdBs_1bsx4O7gec__0_k3prGlxg5HfrvzC4eiZiG0vLNLajtp73jXWqJR6Rluago0y8vgMyz1ygqfqTMV-aXlB18LyADyyzFatlaNIPhlQQrnzQ_BsUBSpPe_ZCu8nFKqWL3iL6_K4JSvs902JXQbfmsybRckhFGg0BWNl0Q_kQfj8j7BkQ" />
        </div>
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
                Martial Arts Club Platform
              </motion.div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-semibold tracking-tight leading-[1.05] dark:text-white text-dark-gray">
                Run Your Martial Arts Club.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-pink to-rose-pink-light">Registrations. Attendance. Payments.</span><br />
                Everything stays organized with D-Clix.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-muted-gray text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                Built for dojos and combat sports academies. <span className="text-rose-pink font-semibold">Anytime. Anywhere.</span>
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
                100% { top: calc(100% - 40px); opacity: 0; }
              }
              @keyframes ctaShine {
                0%   { transform: translateX(0) rotate(12deg); opacity: 0; }
                10%  { opacity: 1; }
                100% { transform: translateX(360px) rotate(12deg); opacity: 0; }
              }
            `}</style>
            <Reveal delay={0.4} className="w-full h-full relative flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center w-full max-w-[1200px] relative z-10">
                <HexCanvasCard 
                  type="karate" 
                  title="Karate" 
                  desc="Precision point striking and linear energy management. Focused on maximum structural integrity." 
                  hudCode="STRIKE_VELOCITY: 42M/S | KRT-09" 
                  delay={0}
                >
                  <KarateImage />
                </HexCanvasCard>

                <HexCanvasCard 
                  type="boxing" 
                  title="Boxing" 
                  desc="Elite hand-to-eye coordination and kinetic chain power generation for high-impact striking." 
                  hudCode="IMPACT_FORCE: 820KG | BX-22" 
                  delay={1.1}
                >
                  <BoxingImage />
                </HexCanvasCard>

                <HexCanvasCard 
                  type="martialarts" 
                  title="Mixed Arts" 
                  desc="Comprehensive combat engineering combining striking, clinching, and technical ground maneuvers." 
                  hudCode="TRANSITION_RATE: 0.8S | MMA-01" 
                  delay={2.2}
                >
                  <MMAImage />
                </HexCanvasCard>
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

