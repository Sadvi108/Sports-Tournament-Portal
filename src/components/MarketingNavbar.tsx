import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import dclixLogo from '@/assets/dclix-logo.svg';

type NavItem = { label: string; to: string };

export default function MarketingNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const items: NavItem[] = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about-dclix' },
      { label: 'Pricing', to: '/plan-pricing' },
      { label: 'D-Clix Edu-Hub', to: '/eduhub' },
      { label: 'D-Clix Referral Program', to: '/referral' },
    ],
    [],
  );

  const onNavigate = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-deep-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-rose-pink/10 text-rose-pink flex items-center justify-center border border-rose-pink/20">
            <img src={dclixLogo} alt="D-CLIX" className="w-12 h-12" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight text-lg dark:text-white text-dark-gray">D-Clix</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-gray">Club Management</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {items.map((it) => {
            const active = location.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                className={
                  active
                    ? 'text-sm font-semibold text-rose-pink'
                    : 'text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors'
                }
              >
                {it.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-muted-gray hover:text-rose-pink"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button
            onClick={() => navigate('/competition/taekwondo/admin/dashboard')}
            className="rose-btn-primary !py-2.5 !px-6 text-sm"
          >
            Club Login
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-muted-gray hover:text-rose-pink"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-muted-gray hover:text-rose-pink"
            aria-label="Open menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 dark:border-white/5"
          >
            <div className="px-6 py-6 space-y-3 bg-white/70 dark:bg-deep-black/70">
              {items.map((it) => (
                <button
                  key={it.to}
                  onClick={() => onNavigate(it.to)}
                  className="w-full text-left py-3 px-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark-gray dark:text-white font-semibold"
                >
                  {it.label}
                </button>
              ))}
              <button
                onClick={() => onNavigate('/competition/taekwondo/admin/dashboard')}
                className="w-full rose-btn-primary !rounded-2xl"
              >
                Club Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

