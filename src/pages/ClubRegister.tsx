import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ChevronDown,
  Info,
  CheckCircle2
} from 'lucide-react';
import { sports } from '../utils/sportsData';
import Navbar from '../components/Navbar';

const ClubRegister: React.FC = () => {
  const { sport: sportId } = useParams();
  const navigate = useNavigate();
  const sport = sports.find(s => s.id === sportId);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!sport) return <div className="p-20 text-center">Sport not found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-deep-black bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-rose-pink/10 text-rose-pink shadow-lg shadow-rose-pink/5">
            <Building2 className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight dark:text-white text-dark-gray uppercase leading-none">
              Club <span className="text-rose-pink">Registration</span>
            </h1>
            <p className="text-muted-gray font-medium mt-2 uppercase text-xs tracking-widest">Register your club to participate in tournaments</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Club Details Section */}
          <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-2xl dark:shadow-none space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/5 pb-6 mb-2">
              <div className="w-2 h-8 bg-rose-pink rounded-full" />
              <h2 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Club Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Row 1 */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Club Code <span className="text-rose-pink">*</span></label>
                <input required className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Club Name <span className="text-rose-pink">*</span></label>
                <input required className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>

              {/* Row 2 */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Head Instructor Name</label>
                <input className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Club Type <span className="opacity-50 font-normal">(Pre-selected from sport type)</span></label>
                <div className="relative">
                  <select disabled className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none transition-all appearance-none cursor-not-allowed text-rose-pink font-bold">
                    <option>{sport.id.toUpperCase()}-{sport.name}</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-gray pointer-events-none" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Address Line1</label>
                <textarea rows={3} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Address Line2</label>
                <textarea rows={3} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all resize-none" />
              </div>

              {/* Row 4 */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">State</label>
                <input className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Country</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all appearance-none cursor-pointer">
                    <option>Malaysia</option>
                    <option>Singapore</option>
                    <option>Thailand</option>
                    <option>Indonesia</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-gray pointer-events-none" />
                </div>
              </div>

              {/* Row 5 */}
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Phone Code</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all appearance-none cursor-pointer">
                    <option>+60 (Malaysia)</option>
                    <option>+65 (Singapore)</option>
                    <option>+66 (Thailand)</option>
                    <option>+62 (Indonesia)</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-gray pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">WhatsappNo</label>
                <input className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" placeholder="e.g. 123456789" />
              </div>
            </div>
          </div>

          {/* Login Credentials Section */}
          <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-2xl dark:shadow-none space-y-8">
            <div className="flex items-center gap-3 border-b border-gray-100 dark:border-white/5 pb-6 mb-2">
              <div className="w-2 h-8 bg-rose-pink rounded-full" />
              <h2 className="text-2xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Login Credentials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Login Email <span className="text-rose-pink">*</span></label>
                <input type="email" required className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Password <span className="text-rose-pink">*</span></label>
                <input type="password" required className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-gray px-1">Confirm Password <span className="text-rose-pink">*</span></label>
                <input type="password" required className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-rose-pink/50 transition-all" />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="rose-btn-primary !rounded-2xl !py-4 flex-1 md:flex-none md:min-w-[200px]">
                Save Club
              </button>
              <button type="button" onClick={() => navigate('/')} className="bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-muted-gray dark:text-white font-bold py-4 px-10 rounded-2xl transition-all active:scale-95 flex-1 md:flex-none">
                Cancel
              </button>
            </div>
          </div>
        </form>

        {/* Notice Section */}
        <div className="dark-card p-10 bg-white dark:bg-white/5 shadow-xl dark:shadow-none border-l-8 border-rose-pink space-y-8">
          <div className="flex items-center gap-4">
            <Info className="w-8 h-8 text-rose-pink" />
            <h2 className="text-xl font-semibold dark:text-white text-dark-gray uppercase tracking-tight">Notice for D-Clix Users / Notis untuk Pengguna D-Clix</h2>
          </div>
          <div className="space-y-8 text-sm leading-relaxed">
            <div className="space-y-4">
              <p className="font-semibold dark:text-white text-dark-gray text-base">All existing and past D-Clix users can use their current club code, ID, and password to log in and register players for this tournament.</p>
              <p className="font-bold text-rose-pink text-base italic">Semua pengguna D-Clix sedia ada dan lampau boleh menggunakan kod kelab, ID dan kata laluan semasa mereka untuk log masuk dan mendaftar pemain untuk kejohanan ini.</p>
            </div>
            
            <div className="space-y-2 text-muted-gray">
              <p>If you encounter any issues or have forgotten your ID or password, contact D-Clix directly for assistance with access.</p>
              <p className="italic">Jika anda menghadapi sebarang masalah atau telah melupakan ID atau kata laluan anda, hubungi D-Clix secara langsung untuk bantuan akses.</p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/5 text-muted-gray/60 italic font-medium">
              <p>This integrates seamlessly with the D-Clix club management system for martial arts and sports clubs in Malaysia.</p>
              <p>Integrasi lancar dengan sistem pengurusan kelab D-Clix untuk kelab seni bela diri dan sukan di Malaysia.</p>
            </div>
          </div>
        </div>

        {/* Success Modal Simulation */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-dark-gray p-12 rounded-[40px] border border-rose-pink/30 text-center max-w-md w-full shadow-2xl relative overflow-hidden"
              >
                <div className="w-24 h-24 bg-rose-pink/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-rose-pink">
                  <CheckCircle2 className="w-12 h-12 text-rose-pink" />
                </div>
                <h2 className="text-4xl font-semibold uppercase tracking-tight mb-4 dark:text-white text-dark-gray">Success!</h2>
                <p className="text-muted-gray mb-10 font-medium">Your club has been registered. Redirecting to your dashboard...</p>
                <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2 }}
                    onAnimationComplete={() => navigate(`/competition/${sportId}/admin/dashboard`)}
                    className="h-full bg-rose-pink"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ClubRegister;
