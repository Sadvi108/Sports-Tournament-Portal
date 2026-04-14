import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Layout, 
  Users,
  Timer,
  Award,
  ChevronRight,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { sports } from '../utils/sportsData';
import Navbar from '../components/Navbar';

interface Player {
  name: string;
  club: string;
  score: number;
  rank?: string;
}

interface Match {
  id: string;
  category: string;
  court: string;
  player1: Player;
  player2: Player;
  status: string;
  time: string;
  isLive: boolean;
  startTime?: string;
}

const WatchLive: React.FC = () => {
  const { sport: sportId } = useParams();
  const sport = sports.find(s => s.id === sportId);
  const [activeTab, setActiveTab] = useState<'matches' | 'bracket' | 'schedule' | 'medals'>('matches');

  type TabId = 'matches' | 'bracket' | 'schedule' | 'medals';
  const tabs: Array<{ id: TabId; icon: LucideIcon; label: string }> = [
    { id: 'matches', icon: Timer, label: 'Live' },
    { id: 'bracket', icon: Layout, label: 'Brackets' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'medals', icon: Award, label: 'Winners' },
  ];

  // Generate dynamic mock data based on sport
  const mockData = useMemo(() => {
    if (!sport) return { live: [], scheduled: [] };

    const categories = [
      'Senior Male -68kg', 'Senior Female -52kg', 
      'Junior Male -55kg', 'Junior Female -48kg',
      'Cadet Male -45kg', 'Veteran Open Weight'
    ];

    const clubs = [
      'Dragon Martial Arts', 'Tiger Elite Academy', 
      'Phoenix Combat Club', 'Iron Fist Dojo', 
      'Global Warriors', 'Elite Sports Malaysia',
      'Rising Sun Academy', 'Shadow Striker Dojo'
    ];

    const players = [
      'Alex Johnson', 'Chen Wei', 'Sarah Miller', 'Elena Petrova',
      'Ravi Kumar', 'Sofia Rossi', 'Liam Smith', 'Yuki Tanaka',
      'Omar Hassan', 'Isabella Garcia', 'Noah Williams', 'Mila Kunis'
    ];

    const live: Match[] = [
      {
        id: 'L1',
        category: categories[0],
        court: 'Court 1',
        player1: { name: players[0], club: clubs[0], score: 12 },
        player2: { name: players[1], club: clubs[1], score: 8 },
        status: 'Round 2',
        time: '01:45',
        isLive: true
      },
      {
        id: 'L2',
        category: categories[1],
        court: 'Court 2',
        player1: { name: players[2], club: clubs[2], score: 5 },
        player2: { name: players[3], club: clubs[3], score: 5 },
        status: 'Round 1',
        time: '00:30',
        isLive: true
      }
    ];

    const scheduled: Match[] = [
      {
        id: 'S1',
        category: categories[2],
        court: 'Court 1',
        player1: { name: players[4], club: clubs[4], score: 0 },
        player2: { name: players[5], club: clubs[5], score: 0 },
        status: 'Upcoming',
        time: '00:00',
        isLive: false,
        startTime: '14:30'
      },
      {
        id: 'S2',
        category: categories[3],
        court: 'Court 3',
        player1: { name: players[6], club: clubs[6], score: 0 },
        player2: { name: players[7], club: clubs[7], score: 0 },
        status: 'Upcoming',
        time: '00:00',
        isLive: false,
        startTime: '15:00'
      },
      {
        id: 'S3',
        category: categories[4],
        court: 'Court 2',
        player1: { name: players[8], club: clubs[0], score: 0 },
        player2: { name: players[9], club: clubs[2], score: 0 },
        status: 'Upcoming',
        time: '00:00',
        isLive: false,
        startTime: '15:15'
      },
      {
        id: 'S4',
        category: categories[5],
        court: 'Court 4',
        player1: { name: players[10], club: clubs[3], score: 0 },
        player2: { name: players[11], club: clubs[5], score: 0 },
        status: 'Upcoming',
        time: '00:00',
        isLive: false,
        startTime: '16:00'
      }
    ];

    return { live, scheduled };
  }, [sport]);

  if (!sport) return <div>Sport not found</div>;

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-deep-black bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Sport Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-rose-pink/10 text-rose-pink">
              <sport.icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter dark:text-white text-dark-gray uppercase">
                {sport.name} <span className="text-rose-pink italic">Live</span>
              </h1>
              <p className="text-muted-gray font-medium uppercase text-xs tracking-widest">Tournament Watch Center</p>
            </div>
          </div>

          <div className="flex bg-white dark:bg-white/5 p-1.5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest ${
                  activeTab === tab.id 
                  ? 'bg-rose-pink text-white shadow-lg shadow-rose-pink/20' 
                  : 'text-muted-gray hover:text-rose-pink'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'matches' && (
            <motion.div
              key="matches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {mockData.live.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
              {mockData.live.length === 0 && (
                <div className="col-span-full py-20 text-center dark-card">
                  <p className="text-muted-gray font-bold uppercase tracking-widest">No active matches at the moment</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'schedule' && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white text-dark-gray">Upcoming Bouts</h3>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-gray bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
                  Today, {new Date().toLocaleDateString('en-MY', { day: 'numeric', month: 'long' })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockData.scheduled.map((match) => (
                  <div key={match.id} className="dark-card p-6 flex items-center justify-between bg-white dark:bg-white/5 group hover:border-rose-pink/30 transition-all shadow-xl dark:shadow-none">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group-hover:bg-rose-pink/5 transition-all">
                        <Clock className="w-5 h-5 text-rose-pink mb-1" />
                        <span className="text-sm font-black dark:text-white text-dark-gray font-mono tracking-tighter">{match.startTime}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-black text-rose-pink uppercase tracking-[0.2em]">{match.category}</div>
                        <h4 className="text-lg font-black dark:text-white text-dark-gray leading-tight uppercase tracking-tighter">
                          {match.player1.name} <span className="text-rose-pink/30 mx-1">VS</span> {match.player2.name}
                        </h4>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-muted-gray uppercase tracking-widest">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {match.court}</span>
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {match.player1.club.split(' ')[0]} / {match.player2.club.split(' ')[0]}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-muted-gray hover:text-rose-pink hover:bg-rose-pink/10 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'bracket' && (
            <motion.div
              key="bracket"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="dark-card p-12 min-h-[600px] flex items-center justify-center bg-white dark:bg-white/5 shadow-2xl dark:shadow-none overflow-auto"
            >
              <div className="flex items-center space-x-16">
                <div className="space-y-10">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-56 p-4 bg-gray-50 dark:bg-white/5 border-l-4 border-rose-pink rounded-xl shadow-md space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest dark:text-white text-dark-gray">Player A{i}</span>
                        <span className="text-sm font-black text-rose-pink">10</span>
                      </div>
                      <div className="h-px w-full bg-gray-200 dark:bg-white/10" />
                      <div className="flex justify-between items-center opacity-50">
                        <span className="text-[10px] font-black uppercase tracking-widest dark:text-white text-dark-gray">Player B{i}</span>
                        <span className="text-sm font-black">8</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col justify-around h-[400px] py-12">
                  {[1, 2].map(i => (
                    <div key={i} className="w-16 h-32 border-y-2 border-r-2 border-rose-pink/20 rounded-r-2xl" />
                  ))}
                </div>

                <div className="space-y-48">
                  {[1, 2].map(i => (
                    <div key={i} className="w-56 p-5 bg-gray-50 dark:bg-white/5 border-l-4 border-rose-pink rounded-xl shadow-xl space-y-4">
                      <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-full w-2/3 animate-pulse" />
                      <div className="h-px w-full bg-gray-200 dark:bg-white/10" />
                      <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-full w-1/2 animate-pulse" />
                    </div>
                  ))}
                </div>

                <div className="w-72 p-10 bg-gradient-to-br from-rose-pink to-rose-pink-light rounded-[40px] shadow-2xl text-center space-y-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                  <div className="relative z-10">
                    <Trophy className="w-16 h-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter">Grand Final</h4>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'medals' && (
            <motion.div
              key="medals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { name: 'Senior Male -68kg', winner: 'Alex Johnson', club: 'Dragon MA', type: 'gold' },
                { name: 'Senior Female -52kg', winner: 'Sarah Miller', club: 'Elite Sports', type: 'gold' },
                { name: 'Junior Male -55kg', winner: 'Noah Williams', club: 'Tiger Elite', type: 'gold' },
              ].map((win, i) => (
                <div key={i} className="dark-card p-10 bg-white dark:bg-white/5 flex flex-col items-center text-center space-y-6 border-b-8 border-rose-pink">
                  <div className="w-20 h-20 rounded-3xl bg-rose-pink/10 flex items-center justify-center text-rose-pink">
                    <Award className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-rose-pink uppercase tracking-[0.2em]">{win.name}</h4>
                    <h3 className="text-3xl font-black dark:text-white text-dark-gray uppercase tracking-tighter">{win.winner}</h3>
                    <p className="text-xs font-bold text-muted-gray uppercase tracking-widest">{win.club}</p>
                  </div>
                  <div className="flex items-center gap-2 text-rose-pink font-black text-xs uppercase tracking-widest">
                    <Star className="w-4 h-4 fill-rose-pink" /> 1st PLACE GOLD <Star className="w-4 h-4 fill-rose-pink" />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const MatchCard: React.FC<{ match: Match }> = ({ match }) => (
  <div className="dark-card overflow-hidden bg-white dark:bg-white/5 shadow-2xl dark:shadow-none">
    <div className="bg-gray-50 dark:bg-white/5 px-8 py-4 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
      <span className="text-[10px] font-black text-rose-pink tracking-[0.2em] uppercase">{match.category}</span>
      <span className="text-[10px] font-black bg-rose-pink text-white px-4 py-1.5 rounded-full uppercase tracking-widest">{match.court}</span>
    </div>
    
    <div className="p-10 flex items-center justify-between">
      <div className="flex flex-col items-center flex-1 space-y-4">
        <div className="w-24 h-24 rounded-full bg-rose-pink/5 border-2 border-rose-pink flex items-center justify-center relative shadow-lg shadow-rose-pink/10">
          <Users className="w-10 h-10 text-rose-pink" />
          <div className="absolute -top-3 -right-3 bg-rose-pink text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-md">RED</div>
        </div>
        <div className="text-center">
          <h3 className="font-black text-xl dark:text-white text-dark-gray leading-tight uppercase tracking-tighter">{match.player1.name}</h3>
          <p className="text-[10px] font-bold text-muted-gray uppercase tracking-widest mt-1">{match.player1.club}</p>
        </div>
      </div>

      <div className="flex flex-col items-center px-12 space-y-6">
        <div className="flex items-center gap-6">
          <span className="text-7xl font-black dark:text-white text-dark-gray tabular-nums tracking-tighter">{match.player1.score}</span>
          <span className="text-3xl font-black text-rose-pink/20">:</span>
          <span className="text-7xl font-black dark:text-white text-dark-gray tabular-nums tracking-tighter">{match.player2.score}</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <div className="px-4 py-1 rounded-full bg-rose-pink/10 text-rose-pink text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
            {match.status}
          </div>
          <div className="flex items-center gap-2 text-muted-gray">
            <Timer className="w-4 h-4" />
            <span className="text-lg font-black font-mono tracking-widest">{match.time}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center flex-1 space-y-4">
        <div className="w-24 h-24 rounded-full bg-blue-500/5 border-2 border-blue-500 flex items-center justify-center relative shadow-lg shadow-blue-500/10">
          <Users className="w-10 h-10 text-blue-500" />
          <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-md">BLUE</div>
        </div>
        <div className="text-center">
          <h3 className="font-black text-xl dark:text-white text-dark-gray leading-tight uppercase tracking-tighter">{match.player2.name}</h3>
          <p className="text-[10px] font-bold text-muted-gray uppercase tracking-widest mt-1">{match.player2.club}</p>
        </div>
      </div>
    </div>
  </div>
);

export default WatchLive;
