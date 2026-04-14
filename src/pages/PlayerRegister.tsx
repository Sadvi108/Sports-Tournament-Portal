import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check,
  ChevronLeft,
  Trophy,
  ArrowRight,
  Calendar,
  MapPin
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { sports } from '../utils/sportsData';

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
}

const PlayerRegister: React.FC = () => {
  const navigate = useNavigate();
  const { sport: sportId } = useParams();
  const sport = sports.find(s => s.id === sportId);
  
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const step = 3;

  // Randomized made-up tournament contents
  const tournaments: Tournament[] = [
    {
      id: '1',
      name: 'GRAND MASTERS INVITATIONAL CHAMPIONSHIP 2026',
      date: '15 Mar 2026 – 20 Mar 2026',
      location: 'GLOBAL SPORTS ARENA, KUALA LUMPUR'
    },
    {
      id: '2',
      name: 'ELITE WARRIORS REGIONAL CHALLENGE – SERIES 1',
      date: '12 Apr 2026 – 14 Apr 2026',
      location: 'NORTHERN EXPO CENTER, PENANG'
    },
    {
      id: '3',
      name: 'NATIONAL COMBAT GAMES & ATHLETE SELECTION 2026',
      date: '05 May 2026 – 10 May 2026',
      location: 'OLYMPIC HUB CENTER, JOHOR BAHRU'
    }
  ];

  const steps = [
    { id: 1, name: 'Player Info' },
    { id: 2, name: 'Emergency' },
    { id: 3, name: 'Tournament' },
  ];

  if (!sport) return <div className="p-20 text-center">Sport not found</div>;

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-deep-black bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedTournament ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h1 className="text-5xl font-black tracking-tighter dark:text-white text-dark-gray uppercase">
                  Upcoming <span className="text-rose-pink">{sport.name}</span> Events
                </h1>
                <p className="text-muted-gray text-lg font-medium">Select an active tournament to proceed with athlete entry</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tournaments.map((t) => (
                  <motion.div
                    key={t.id}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => setSelectedTournament(t)}
                    className="dark-card p-10 bg-white dark:bg-white/5 border-none shadow-2xl flex flex-col h-full group cursor-pointer relative overflow-hidden"
                  >
                    {/* Trophy Icon with Brand Rose Pink Accent */}
                    <div className="w-16 h-16 rounded-2xl bg-rose-pink/10 flex items-center justify-center mb-8 shadow-lg shadow-rose-pink/5">
                      <Trophy className="w-8 h-8 text-rose-pink" />
                    </div>

                    <div className="space-y-6 flex-grow">
                      <h3 className="text-2xl font-black dark:text-white text-dark-gray leading-tight uppercase tracking-tighter group-hover:text-rose-pink transition-colors">
                        {t.name}
                      </h3>

                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-3 bg-rose-pink/5 border border-rose-pink/20 px-4 py-2 rounded-full">
                          <Calendar className="w-4 h-4 text-rose-pink" />
                          <span className="text-xs font-black text-rose-pink uppercase tracking-widest">{t.date}</span>
                        </div>

                        <div className="flex items-start gap-3 text-muted-gray">
                          <MapPin className="w-4 h-4 text-rose-pink mt-1 shrink-0" />
                          <span className="text-sm font-bold leading-snug">{t.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-rose-pink">
                      <span className="text-xs font-black uppercase tracking-[0.2em]">Select Tournament</span>
                      <div className="w-8 h-8 rounded-full bg-rose-pink text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-12"
            >
              {/* Selected Tournament Banner */}
              <div className="dark-card p-8 bg-white dark:bg-white/5 border-l-8 border-rose-pink flex items-center justify-between shadow-2xl dark:shadow-none">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-rose-pink/10 text-rose-pink">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-rose-pink uppercase tracking-[0.2em]">Tournament Entry</p>
                    <h2 className="text-2xl font-black dark:text-white text-dark-gray uppercase tracking-tighter leading-tight">{selectedTournament.name}</h2>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTournament(null)}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-gray hover:text-rose-pink transition-colors px-6 py-3 rounded-xl bg-gray-50 dark:bg-white/5"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to List
                </button>
              </div>

              {/* Stepper */}
              <div className="flex items-center justify-center max-w-3xl mx-auto mb-20">
                {steps.map((s, i) => (
                  <React.Fragment key={s.id}>
                    <div className="flex flex-col items-center relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        step > s.id 
                        ? 'bg-rose-pink text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]' 
                        : step === s.id 
                        ? 'bg-rose-pink text-white border-4 border-rose-pink/20 scale-110' 
                        : 'bg-white/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray'
                      }`}>
                        {step > s.id ? <Check className="w-5 h-5" /> : s.id}
                      </div>
                      <span className={`absolute -bottom-8 whitespace-nowrap text-[10px] font-black uppercase tracking-widest ${
                        step >= s.id ? 'text-rose-pink' : 'text-muted-gray'
                      }`}>
                        {s.name}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-grow h-px mx-4 transition-colors duration-500 ${
                        step > s.id ? 'bg-rose-pink' : 'bg-gray-200 dark:bg-white/10'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Left Form Panel */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="dark-card p-12 bg-white dark:bg-white/5 shadow-2xl dark:shadow-none space-y-10"
                  >
                    <div className="space-y-2">
                      <h2 className="text-3xl font-black dark:text-white text-dark-gray uppercase tracking-tighter">Tournament Details</h2>
                      <p className="text-muted-gray font-medium">Select your tournament category and preferences</p>
                    </div>

                    <form className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-muted-gray px-1">Tournament Category *</label>
                          <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all appearance-none cursor-pointer">
                            <option className="bg-white dark:bg-dark-gray">Select category</option>
                            <option className="bg-white dark:bg-dark-gray">Kyorugi (Sparring)</option>
                            <option className="bg-white dark:bg-dark-gray">Poomsae (Forms)</option>
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-black uppercase tracking-widest text-muted-gray px-1">Skill Level *</label>
                          <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all appearance-none cursor-pointer">
                            <option className="bg-white dark:bg-dark-gray">Select skill level</option>
                            <option className="bg-white dark:bg-dark-gray">Beginner</option>
                            <option className="bg-white dark:bg-dark-gray">Intermediate</option>
                            <option className="bg-white dark:bg-dark-gray">Advanced</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-gray px-1">T-Shirt Size *</label>
                        <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all appearance-none cursor-pointer">
                          <option className="bg-white dark:bg-dark-gray">Select size</option>
                          <option className="bg-white dark:bg-dark-gray">XS</option>
                          <option className="bg-white dark:bg-dark-gray">S</option>
                          <option className="bg-white dark:bg-dark-gray">M</option>
                          <option className="bg-white dark:bg-dark-gray">L</option>
                          <option className="bg-white dark:bg-dark-gray">XL</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-gray px-1">Medical Conditions</label>
                        <textarea 
                          rows={3}
                          placeholder="Any medical conditions we should be aware of..."
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all resize-none"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-gray px-1">Dietary Restrictions</label>
                        <textarea 
                          rows={3}
                          placeholder="Vegetarian, vegan, allergies, etc..."
                          className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-8">
                        <button 
                          type="button"
                          onClick={() => setSelectedTournament(null)}
                          className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-gray hover:text-rose-pink transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <button 
                          type="button"
                          onClick={() => navigate(`/competition/${sportId}/admin/dashboard`)}
                          className="rose-btn-primary flex items-center gap-3"
                        >
                          Complete Registration <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>

                {/* Right Summary Panel */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="dark-card p-10 bg-white dark:bg-white/5 shadow-2xl dark:shadow-none space-y-10 sticky top-32"
                  >
                    <h3 className="text-2xl font-black dark:text-white text-dark-gray uppercase tracking-tighter">Order Summary</h3>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-muted-gray">Registration Fee</span>
                        <span className="dark:text-white text-dark-gray">$150</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-muted-gray">Processing Fee</span>
                        <span className="dark:text-white text-dark-gray">$0</span>
                      </div>
                      <div className="h-px w-full bg-gray-100 dark:bg-white/10" />
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-black uppercase tracking-tighter dark:text-white text-dark-gray">Total</span>
                        <span className="text-2xl font-black text-rose-pink">$150</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray">After registration, you can:</p>
                      <ul className="space-y-3">
                        {[
                          'Book hotel accommodation',
                          'Order meal plans',
                          'Access your player dashboard',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-xs font-bold dark:text-white text-dark-gray">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-pink mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default PlayerRegister;
