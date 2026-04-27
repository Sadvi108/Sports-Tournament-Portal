import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Utensils, 
  CreditCard, 
  LogOut,
  User,
  Mail,
  Phone,
  Hash,
  ArrowUpRight,
  Sparkles,
  Bell,
  Activity,
  CalendarDays,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { sport } = useParams();

  const sportLabel = (sport || 'competition')
    .split('-')
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
    .join(' ');

  const currentUser = {
    name: 'User',
    email: 'user@example.com',
    phone: 'Not provided',
    id: '—',
  };

  const summaryCards = [
    { label: 'Registrations', value: '0', icon: Trophy },
    { label: 'Hotel Bookings', value: '0', icon: Calendar },
    { label: 'Meal Plans', value: '0', icon: Utensils },
    { label: 'Total Spent', value: '$0.00', icon: CreditCard },
  ];

  const highlights = [
    { title: 'Instant registrations', desc: 'Create players and clubs in minutes.', icon: Sparkles },
    { title: 'Fixtures & schedules', desc: 'Keep matches organized and on time.', icon: CalendarDays },
    { title: 'Secure access', desc: 'Clean, role-ready dashboard structure.', icon: ShieldCheck },
  ];

  const announcements = [
    { title: 'Orange theme enabled', meta: 'UI update', icon: Sparkles },
    { title: 'Add your first players to unlock registrations', meta: 'Getting started', icon: Trophy },
    { title: 'Go live when your fixtures are ready', meta: 'Live activity', icon: Activity },
  ];

  const nextSteps = [
    { title: 'Register Players', desc: 'Add athletes to your tournament roster.', action: () => navigate(`/competition/${sport || 'taekwondo'}/player/register`) },
    { title: 'Register Clubs', desc: 'Create clubs and assign participants.', action: () => navigate(`/competition/${sport || 'taekwondo'}/club/register`) },
    { title: 'Watch Live', desc: 'Follow matches and live updates.', action: () => navigate(`/competition/${sport || 'taekwondo'}/live`) },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-deep-black bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <div className="space-y-2">
            <h1 className="text-5xl font-semibold tracking-tight dark:text-white text-dark-gray">
              Welcome, <span className="text-rose-pink">{currentUser.name}</span>
            </h1>
            <p className="text-muted-gray text-lg font-medium">Manage registrations, schedules, and live activity for {sportLabel}.</p>
            <div className="flex flex-wrap gap-3 pt-3">
              <button
                onClick={() => navigate(`/competition/${sport || 'taekwondo'}/player/register`)}
                className="rose-btn-primary !py-3 !px-6 text-sm inline-flex items-center gap-2"
              >
                Register Player
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate(`/competition/${sport || 'taekwondo'}/club/register`)}
                className="px-6 py-3 rounded-full border-2 border-gray-200 dark:border-white/10 font-semibold dark:text-white text-dark-gray hover:border-rose-pink hover:text-rose-pink transition-colors text-sm inline-flex items-center gap-2"
              >
                Register Club
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate(`/competition/${sport || 'taekwondo'}/live`)}
                className="px-6 py-3 rounded-full border-2 border-gray-200 dark:border-white/10 font-semibold dark:text-white text-dark-gray hover:border-rose-pink hover:text-rose-pink transition-colors text-sm inline-flex items-center gap-2"
              >
                Watch Live
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate('/competition')}
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all text-muted-gray hover:text-rose-pink w-full lg:w-auto"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-widest">Logout</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="dark-card p-8 flex justify-between items-start bg-white dark:bg-white/5 shadow-xl dark:shadow-none"
            >
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-gray">{card.label}</p>
                <p className="text-3xl font-semibold dark:text-white text-dark-gray">{card.value}</p>
              </div>
              <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                <card.icon className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-xl dark:shadow-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">What’s New</h3>
                  <p className="text-muted-gray text-sm">Quick updates and useful guidance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((h) => (
                  <div key={h.title} className="p-7 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center mb-5">
                      <h.icon className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-semibold dark:text-white text-dark-gray">{h.title}</div>
                    <div className="text-muted-gray text-sm font-medium mt-2">{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-xl dark:shadow-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Upcoming Fixtures</h3>
                  <p className="text-muted-gray text-sm">Your schedule will appear here once created</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'No fixtures yet', meta: 'Create fixtures to show match times' },
                  { title: 'No venues yet', meta: 'Add locations to improve planning' },
                ].map((item) => (
                  <div key={item.title} className="p-7 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-between gap-6">
                    <div className="space-y-1">
                      <div className="text-base font-semibold dark:text-white text-dark-gray">{item.title}</div>
                      <div className="text-muted-gray text-sm font-medium">{item.meta}</div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-xl dark:shadow-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Announcements</h3>
                  <p className="text-muted-gray text-sm">Platform updates and reminders</p>
                </div>
              </div>

              <div className="space-y-4">
                {announcements.map((a) => (
                  <div key={a.title} className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-rose-pink/10 text-rose-pink border border-rose-pink/20">
                      <a.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold dark:text-white text-dark-gray leading-snug">{a.title}</div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gray">{a.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-xl dark:shadow-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Next Best Actions</h3>
                  <p className="text-muted-gray text-sm">Recommended steps to get started</p>
                </div>
              </div>

              <div className="space-y-4">
                {nextSteps.map((s) => (
                  <button
                    key={s.title}
                    onClick={s.action}
                    className="w-full text-left p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-rose-pink/30 transition-colors group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="font-semibold dark:text-white text-dark-gray">{s.title}</div>
                        <div className="text-muted-gray text-sm font-medium">{s.desc}</div>
                      </div>
                      <div className="w-11 h-11 rounded-2xl bg-rose-pink/10 border border-rose-pink/20 text-rose-pink flex items-center justify-center group-hover:bg-rose-pink/15 transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tournament Registrations Panel */}
          <div className="lg:col-span-2">
            <div className="dark-card p-10 min-h-[400px] flex flex-col bg-white dark:bg-white/5 shadow-xl dark:shadow-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Tournament Registrations</h3>
                  <p className="text-muted-gray text-sm">Your active tournament registrations</p>
                </div>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-muted-gray/30">
                  <Trophy className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <p className="text-muted-gray font-medium">No tournament registrations yet</p>
                  <p className="text-muted-gray text-sm">
                    Add players and clubs first, then start creating and tracking tournament entries.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => navigate(`/competition/${sport || 'taekwondo'}/player/register`)}
                    className="rose-btn-primary !py-3 !px-6 text-sm"
                  >
                    Add Players
                  </button>
                  <button
                    onClick={() => navigate(`/competition/${sport || 'taekwondo'}/club/register`)}
                    className="px-6 py-3 rounded-full border-2 border-gray-200 dark:border-white/10 font-semibold dark:text-white text-dark-gray hover:border-rose-pink hover:text-rose-pink transition-colors text-sm"
                  >
                    Add Clubs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Player Information Panel */}
          <div className="lg:col-span-1">
            <div className="dark-card p-10 h-full bg-white dark:bg-white/5 shadow-xl dark:shadow-none">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-rose-pink/10 text-rose-pink">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Player Info</h3>
              </div>

              <div className="space-y-8">
                {[
                  { label: 'Name', value: currentUser.name, icon: User },
                  { label: 'Email', value: currentUser.email, icon: Mail },
                  { label: 'Phone', value: currentUser.phone, icon: Phone },
                  { label: 'Player ID', value: currentUser.id, icon: Hash },
                ].map((info) => (
                  <div key={info.label} className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gray">
                      <info.icon className="w-3 h-3 text-rose-pink" />
                      {info.label}
                    </div>
                    <p className="text-lg font-bold dark:text-white text-dark-gray">{info.value}</p>
                    <div className="h-px w-full bg-gray-100 dark:bg-white/5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
