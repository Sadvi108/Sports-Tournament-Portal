import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { sports, type Sport } from '../utils/sportsData';
import { 
  Trophy, 
  Hotel, 
  Utensils, 
  CreditCard, 
  Layout, 
  Zap, 
  LifeBuoy,
  Clock,
  ChevronRight,
  TrendingUp,
  Award,
  Globe,
  DollarSign,
  Tv,
  UserPlus,
  Users,
  Settings,
  ArrowLeft
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);
  const navigate = useNavigate();

  const handleSportSelect = (sport: Sport) => {
    setSelectedSport(sport);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navOptions = [
    { id: 'live', label: 'Watch Live Event', desc: 'Real-time match tracking and live brackets', icon: Tv, path: (s: string) => `/competition/${s}/live` },
    { id: 'club', label: 'New Club Registration', desc: 'Register your academy for the upcoming season', icon: UserPlus, path: (s: string) => `/competition/${s}/club/register` },
    { id: 'player', label: 'Player Registration', desc: 'Register athletes and manage team rosters', icon: Users, path: (s: string) => `/competition/${s}/player/register` },
    { id: 'admin', label: 'Competition Setting', desc: 'Admin panel for tournament configuration', icon: Settings, path: (s: string) => `/competition/${s}/admin/dashboard` },
  ];

  const features = [
    { icon: Trophy, title: 'Tournament Registration', desc: 'Quick and easy registration process with secure payment processing' },
    { icon: Hotel, title: 'Hotel Booking', desc: 'Book accommodation at partner hotels with special tournament rates' },
    { icon: Utensils, title: 'Meal Plans', desc: 'Pre-order meals with dietary preferences and special requirements' },
    { icon: CreditCard, title: 'Secure Payments', desc: 'Safe and secure payment processing with multiple payment options' },
    { icon: Layout, title: 'Player Dashboard', desc: 'Access your bookings, QR codes, and invoices anytime' },
    { icon: Zap, title: 'Real-time Updates', desc: 'Get instant notifications about your registration status' },
    { icon: LifeBuoy, title: '24/7 Support', desc: 'Our team is here to help you every step of the way' },
  ];

  const news = [
    { 
      badge: 'Breaking News', 
      badgeColor: 'bg-rose-pink', 
      time: '2 hours ago', 
      title: 'Registration Extended: New Deadline Announced', 
      summary: "Due to popular demand, we've extended the registration deadline to May 15, 2025. Don't miss your chance to compete!",
      image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800'
    },
    { 
      badge: 'Venue', 
      badgeColor: 'bg-yellow-500', 
      time: '1 day ago', 
      title: 'New State-of-the-Art Facility Unveiled', 
      summary: 'The National Sports Complex has completed renovations, featuring upgraded courts and world-class amenities.',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=800'
    },
    { 
      badge: 'Tips', 
      badgeColor: 'bg-gray-500', 
      time: '3 days ago', 
      title: 'Expert Training Tips for Tournament Success', 
      summary: 'Professional coaches share their top strategies for peak performance during the championship tournament.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section / Sport Selection Area */}
      <section className="relative pt-40 pb-32 px-6 bg-hero-gradient dark:bg-deep-black overflow-hidden border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-hero-gradient opacity-40 pointer-events-none" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-rose-pink/5 rounded-full blur-[150px] animate-pulse-slow" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!selectedSport ? (
              <motion.div
                key="selector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-16"
              >
                <div className="text-center space-y-8">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center">
                    <div className="rose-badge">
                      <Trophy className="w-3 h-3" />
                      2025 Championship Tournament
                    </div>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-dark-gray dark:text-white"
                  >
                    Select Your<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-pink to-rose-pink-light">Combat Sport</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-gray max-w-2xl mx-auto text-lg md:text-xl font-medium"
                  >
                    Choose a discipline below to access tournament registrations, live brackets, and official announcements.
                  </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {sports.map((sport, index) => (
                    <motion.div
                      key={sport.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => handleSportSelect(sport)}
                      className="dark-card p-8 flex flex-col items-center justify-center text-center group cursor-pointer bg-white dark:bg-white/5"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-rose-pink/5 dark:bg-rose-pink/10 flex items-center justify-center text-rose-pink mb-4 group-hover:bg-rose-pink group-hover:text-white transition-all shadow-lg shadow-rose-pink/5">
                        <sport.icon className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest dark:text-white text-dark-gray group-hover:text-rose-pink transition-colors">
                        {sport.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-16"
              >
                <div className="text-center space-y-6">
                  <button 
                    onClick={() => setSelectedSport(null)}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-gray hover:text-rose-pink transition-colors mx-auto"
                  >
                    <ArrowLeft className="w-4 h-4" /> Change Sport
                  </button>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-3xl bg-rose-pink/10 flex items-center justify-center text-rose-pink mb-6 shadow-2xl shadow-rose-pink/20">
                      <selectedSport.icon className="w-12 h-12" />
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter dark:text-white text-dark-gray leading-none">
                      {selectedSport.name} <span className="text-rose-pink italic">Portal</span>
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {navOptions.map((opt, i) => (
                    <motion.div
                      key={opt.id}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => navigate(opt.path(selectedSport.id))}
                      className="dark-card p-10 flex items-center justify-between group cursor-pointer bg-white dark:bg-white/5 shadow-2xl dark:shadow-none border-l-8 border-rose-pink"
                    >
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-rose-pink/10 text-rose-pink flex items-center justify-center group-hover:bg-rose-pink group-hover:text-white transition-all shadow-lg">
                          <opt.icon className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-2xl font-black uppercase tracking-tighter dark:text-white text-dark-gray group-hover:text-rose-pink transition-colors">
                            {opt.label}
                          </h3>
                          <p className="text-muted-gray text-sm font-medium">{opt.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-gray group-hover:text-rose-pink group-hover:translate-x-2 transition-all" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="relative z-10 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Athletes', value: '500+', icon: TrendingUp },
            { label: 'Countries', value: '12', icon: Globe },
            { label: 'Sports', value: '8', icon: Award },
            { label: 'Prize Pool', value: '$50K', icon: DollarSign },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-black text-rose-pink mb-1">{stat.value}</div>
              <div className="text-xs font-orbitron uppercase tracking-widest text-muted-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Everything You Need Section */}
      <section className="py-32 px-6 dark:bg-deep-black bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter dark:text-white text-dark-gray">Everything You Need</h2>
            <p className="text-muted-gray max-w-2xl mx-auto text-lg font-medium">Our comprehensive platform handles every aspect of your tournament experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="dark-card p-8 group hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-white dark:bg-white/5"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 flex items-center justify-center text-rose-pink mb-6 group-hover:bg-rose-pink group-hover:text-white transition-all shadow-md">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white text-dark-gray">{feature.title}</h3>
                <p className="text-muted-gray text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-32 px-6 dark:bg-deep-black bg-gray-50 transition-colors duration-300" id="news">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-5xl font-black uppercase tracking-tighter dark:text-white text-dark-gray">Latest News</h2>
              <p className="text-muted-gray text-lg font-medium">Stay updated with tournament announcements and highlights</p>
            </div>
            <button className="text-rose-pink font-bold flex items-center gap-2 hover:underline">
              View All News <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="dark-card overflow-hidden group flex flex-col h-full bg-white dark:bg-white/5 shadow-xl dark:shadow-none"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${item.badgeColor}`}>
                    {item.badge}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] text-muted-gray font-bold uppercase tracking-widest">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-dark-gray leading-tight group-hover:text-rose-pink transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-gray text-sm leading-relaxed flex-grow">
                    {item.summary}
                  </p>
                  <button className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-rose-pink group-hover:gap-4 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer className="py-12 px-6 dark:bg-deep-black bg-white border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-rose-pink" />
            <span className="font-black text-lg tracking-tighter dark:text-white text-dark-gray uppercase italic">D-CLIX Arena</span>
          </div>
          <div className="text-muted-gray text-[10px] font-orbitron uppercase tracking-[0.2em]">
            RAIG TECHNOLOGIES © 2026 • VISOFT SOLUTION
          </div>
          <div className="flex items-center gap-6">
            <button className="text-muted-gray hover:text-rose-pink transition-colors text-xs font-bold uppercase">Privacy</button>
            <button className="text-muted-gray hover:text-rose-pink transition-colors text-xs font-bold uppercase">Terms</button>
            <button className="text-muted-gray hover:text-rose-pink transition-colors text-xs font-bold uppercase">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
