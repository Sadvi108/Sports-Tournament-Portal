import type React from 'react';
import { 
  Sword, 
  Shield, 
  Target, 
  Zap, 
  Activity, 
  Users, 
  Flame, 
  Trophy, 
  Circle,
  Triangle,
  Box
} from 'lucide-react';

type SportIcon = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

export interface Sport {
  id: string;
  name: string;
  icon: SportIcon;
  color: string;
  description: string;
}

export const sports: Sport[] = [
  { id: 'aikido', name: 'Aikido', icon: Shield, color: '#00D4FF', description: 'The way of unifying with life energy.' },
  { id: 'boxing', name: 'Boxing', icon: Box, color: '#FF3D00', description: 'The sweet science of pugilism.' },
  { id: 'hapkido', name: 'Hapkido', icon: Zap, color: '#7B3FF2', description: 'The way of coordinated power.' },
  { id: 'judo', name: 'Judo', icon: Users, color: '#4CAF50', description: 'The gentle way of using force.' },
  { id: 'jujitsu', name: 'Ju-Jitsu', icon: Activity, color: '#2196F3', description: 'The art of softness and yielding.' },
  { id: 'karate', name: 'Karate', icon: Flame, color: '#F44336', description: 'The way of the empty hand.' },
  { id: 'kempo', name: 'Kempo', icon: Target, color: '#FF9800', description: 'The law of the fist.' },
  { id: 'kendo', name: 'Kendo', icon: Sword, color: '#9C27B0', description: 'The way of the sword.' },
  { id: 'kickboxing', name: 'Kickboxing', icon: Zap, color: '#FFEB3B', description: 'High-intensity striking sport.' },
  { id: 'mma', name: 'MMA', icon: Trophy, color: '#607D8B', description: 'Mixed Martial Arts competition.' },
  { id: 'muaythai', name: 'Muaythai', icon: Flame, color: '#E91E63', description: 'The art of eight limbs.' },
  { id: 'sambo', name: 'Sambo', icon: Shield, color: '#3F51B5', description: 'Self-defense without weapons.' },
  { id: 'silambam', name: 'Silambam', icon: Sword, color: '#795548', description: 'Traditional staff-based martial art.' },
  { id: 'silat', name: 'Silat', icon: Triangle, color: '#009688', description: 'Southeast Asian martial arts.' },
  { id: 'sumo', name: 'Sumo', icon: Circle, color: '#FF5722', description: 'Traditional Japanese wrestling.' },
  { id: 'taekwondo', name: 'Taekwondo', icon: Zap, color: '#03A9F4', description: 'The way of kicking and punching.' },
  { id: 'wrestling', name: 'Wrestling', icon: Users, color: '#FFC107', description: 'Grappling and ground combat.' },
  { id: 'wushu', name: 'Wushu', icon: Star, color: '#FFD700', description: 'Chinese traditional martial arts.' },
];

function Star(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
