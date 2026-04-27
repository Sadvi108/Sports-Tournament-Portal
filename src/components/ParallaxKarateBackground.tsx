import React, { useState } from 'react';
import type { MotionValue } from 'framer-motion';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
 
type ParallaxKarateBackgroundProps = {
  backgroundSrc?: string | null;
  poseSrcs?: string[];
  className?: string;
};
 
export function ParallaxKarateBackground({
  backgroundSrc = null,
  poseSrcs = [
    '/images/karate-1.png',
    '/images/karate-2.png',
    '/images/karate-3.png',
    '/images/karate-4.png',
  ],
  className,
}: ParallaxKarateBackgroundProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [showBackground, setShowBackground] = useState(Boolean(backgroundSrc));
  const [hiddenPoseIndexes, setHiddenPoseIndexes] = useState<Record<number, true>>({});
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });
  const spotlightX = useTransform(shouldReduceMotion ? scrollYProgress : smooth, [0, 1], ['35%', '65%']);
  const spotlightY = useTransform(shouldReduceMotion ? scrollYProgress : smooth, [0, 1], ['30%', '55%']);
  const vignetteOpacity = useTransform(shouldReduceMotion ? scrollYProgress : smooth, [0, 0.5, 1], [0.25, 0.35, 0.3]);
 
  return (
    <div
      aria-hidden="true"
      className={[
        'fixed inset-0 z-0 pointer-events-none overflow-hidden',
        className ?? '',
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-white dark:bg-deep-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-pink/5 via-transparent to-transparent dark:from-rose-pink/10" />
 
      {showBackground && backgroundSrc ? (
        <div className="absolute inset-0 opacity-[0.28] dark:opacity-[0.18]">
          <img
            src={backgroundSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
            onError={() => setShowBackground(false)}
          />
        </div>
      ) : null}
 
      <motion.div
        className="absolute inset-0"
        style={
          {
            opacity: vignetteOpacity,
            background:
              'radial-gradient(circle at var(--sx) var(--sy), rgba(225,29,72,0.22) 0%, rgba(225,29,72,0.10) 25%, transparent 60%)',
            ['--sx' as any]: spotlightX,
            ['--sy' as any]: spotlightY,
          } as React.CSSProperties
        }
      />
 
      {poseSrcs.map((src, index) =>
        hiddenPoseIndexes[index] ? null : (
          <Pose
            key={`${src}-${index}`}
            progress={shouldReduceMotion ? scrollYProgress : smooth}
            index={index}
            total={poseSrcs.length}
            src={src}
            xRange={poses[index % poses.length].xRange}
            yRange={poses[index % poses.length].yRange}
            rotate={poses[index % poses.length].rotate}
            forceVisible={shouldReduceMotion}
            onLoadError={() =>
              setHiddenPoseIndexes((prev) => ({
                ...prev,
                [index]: true,
              }))
            }
          />
        ),
      )}
 
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-deep-black/85" />
    </div>
  );
}

const poses = [
  { xRange: [-240, 180], yRange: [130, -120], rotate: [-16, 10] },
  { xRange: [260, -160], yRange: [160, -80], rotate: [14, -12] },
  { xRange: [-220, 210], yRange: [200, -180], rotate: [-22, 16] },
  { xRange: [240, -220], yRange: [120, -140], rotate: [16, -14] },
];

type PoseProps = {
  progress: MotionValue<number>;
  index: number;
  total: number;
  src: string;
  xRange: number[];
  yRange: number[];
  rotate: number[];
  forceVisible: boolean;
  onLoadError: () => void;
};

function Pose({
  progress,
  index,
  total,
  src,
  xRange,
  yRange,
  rotate,
  forceVisible,
  onLoadError,
}: PoseProps) {
  const maxOpacity = 0.58;
  const slice = 1 / total;
  const start = index * slice;
  const peak = start + slice / 2;
  const end = start + slice;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [isFirst ? 0 : start - slice * 0.4, peak, isLast ? 1 : end + slice * 0.4],
    [isFirst ? maxOpacity : 0, maxOpacity, isLast ? maxOpacity : 0],
  );
  const scale = useTransform(progress, [start, peak, end], [0.82, 1.22, 0.86]);
  const x = useTransform(progress, [0, 1], xRange);
  const y = useTransform(progress, [0, 1], yRange);
  const rotateZ = useTransform(progress, [0, 1], rotate);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-[88vh] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
      style={{
        opacity: forceVisible ? maxOpacity : opacity,
        scale: forceVisible ? 1 : scale,
        x: forceVisible ? 0 : x,
        y: forceVisible ? 0 : y,
        rotate: forceVisible ? '0deg' : rotateZ,
      }}
    >
      <img
        src={src}
        alt=""
        width={768}
        height={1024}
        className="h-full w-auto max-w-none select-none object-contain mix-blend-multiply dark:invert dark:mix-blend-screen"
        draggable={false}
        onError={onLoadError}
      />
      <img
        src={src}
        alt=""
        width={768}
        height={1024}
        className="pointer-events-none absolute inset-0 h-full w-auto max-w-none select-none object-contain opacity-70 blur-[1.5px]"
        style={{
          filter:
            'drop-shadow(0 0 38px rgba(225,29,72,0.35)) drop-shadow(0 0 90px rgba(236,72,153,0.20))',
          mixBlendMode: 'screen',
        }}
        draggable={false}
      />
    </motion.div>
  );
}
