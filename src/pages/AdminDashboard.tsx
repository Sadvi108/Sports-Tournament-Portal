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
  Hash
} from 'lucide-react';
import Navbar from '../components/Navbar';

const AdminDashboard: React.FC = () => {
  const summaryCards = [
    { label: 'Registrations', value: '0', icon: Trophy },
    { label: 'Hotel Bookings', value: '0', icon: Calendar },
    { label: 'Meal Plans', value: '0', icon: Utensils },
    { label: 'Total Spent', value: '$0.00', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-deep-black bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-5xl font-semibold tracking-tight dark:text-white text-dark-gray">
              Welcome, <span className="text-rose-pink">callmesadvi</span>
            </h1>
            <p className="text-muted-gray text-lg font-medium">
              Manage your tournament bookings and access your information
            </p>
          </div>
          <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all text-muted-gray hover:text-rose-pink">
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
                <p className="text-muted-gray font-medium">No tournament registrations yet</p>
                <button className="rose-btn-primary">
                  Register Now
                </button>
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
                  { label: 'Name', value: 'callmesadvi', icon: User },
                  { label: 'Email', value: 'callmesadvi@gmail.com', icon: Mail },
                  { label: 'Phone', value: 'Not provided', icon: Phone },
                  { label: 'Player ID', value: 'temp_1759206511443', icon: Hash },
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
