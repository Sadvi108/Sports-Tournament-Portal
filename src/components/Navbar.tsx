import React from 'react';
import { Sun, Moon, LogOut, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import dclixLogo from '@/assets/dclix-logo.svg';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname.includes('/admin/dashboard');

  const navItems = [
    { name: 'News', path: '#news' },
    { name: 'Rankings', path: '#rankings' },
    { name: 'Fixtures', path: '#fixtures' },
    { name: 'About', path: '#about' },
    { name: 'Features', path: '#features' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-deep-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-6 py-4 flex items-center justify-between transition-colors duration-300">
      <div 
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => navigate('/competition')}
      >
        <div className="w-12 h-12 rounded-2xl bg-rose-pink/10 text-rose-pink flex items-center justify-center border border-rose-pink/20 group-hover:scale-[1.03] transition-transform">
          <img src={dclixLogo} alt="D-CLIX" className="w-8 h-8" />
        </div>
        <span className="font-bold text-xl tracking-tight dark:text-white text-dark-gray">
          D-CLIX Arena
        </span>
      </div>

      <div className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="text-sm font-medium text-muted-gray hover:text-rose-pink dark:hover:text-rose-pink transition-colors"
          >
            {item.name}
          </a>
        ))}
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-muted-gray hover:text-rose-pink"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {!isDashboard ? (
          <>
            <button 
              onClick={() => navigate('/competition/taekwondo/admin/dashboard')}
              className="text-sm font-bold dark:text-white text-dark-gray hover:text-rose-pink transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/competition')}
              className="rose-btn-primary !py-2 !px-6 text-sm"
            >
              Register Now
            </button>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/competition')}
              className="text-sm font-bold dark:text-white text-dark-gray hover:text-rose-pink transition-colors"
            >
              Competition
            </button>
            <button 
              onClick={() => navigate('/competition/taekwondo/admin/dashboard')}
              className="text-sm font-bold dark:text-white text-dark-gray flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => navigate('/competition')}
              className="flex items-center gap-2 text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle (Simplified) */}
      <div className="lg:hidden flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-muted-gray">
          {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
