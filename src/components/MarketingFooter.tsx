import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarketingFooter() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/5 bg-white dark:bg-deep-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="text-2xl font-black tracking-tighter dark:text-white text-dark-gray">D-Clix</div>
          <div className="text-sm text-muted-gray font-medium">
            Grow revenue and streamline your club with a modern, reliable club management system.
          </div>
          <div className="flex items-center gap-3 text-muted-gray">
            <a className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:text-rose-pink transition-colors" href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:text-rose-pink transition-colors" href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:text-rose-pink transition-colors" href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-black uppercase tracking-[0.2em] text-muted-gray">Contact</div>
          <div className="flex items-start gap-3 text-sm">
            <Phone className="w-5 h-5 text-rose-pink mt-0.5" />
            <div className="dark:text-white text-dark-gray font-bold">+603-7804 1412</div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 text-rose-pink mt-0.5" />
            <div className="text-muted-gray font-medium">
              Suite 442 Level 4 Block A, Kelana Centre Point, Jalan SS 7/19, SS7, 47301 Petaling Jaya, Selangor
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-black uppercase tracking-[0.2em] text-muted-gray">Links</div>
          <div className="grid grid-cols-2 gap-3">
            <Link className="text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors" to="/">Home</Link>
            <Link className="text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors" to="/about-dclix">About</Link>
            <Link className="text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors" to="/plan-pricing">Pricing</Link>
            <Link className="text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors" to="/eduhub">Edu-Hub</Link>
            <Link className="text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors" to="/referral">Referral</Link>
            <Link className="text-sm font-bold text-muted-gray hover:text-rose-pink transition-colors" to="/competition">Competition Portal</Link>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a className="text-xs font-bold text-muted-gray hover:text-rose-pink transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-bold text-muted-gray hover:text-rose-pink transition-colors" href="#">Terms & Condition</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-muted-gray flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2025 by Raig Technologies (M) Sdn Bhd</div>
          <div className="font-black uppercase tracking-[0.2em]">D-Clix Club Management System</div>
        </div>
      </div>
    </footer>
  );
}

