import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, icon: Icon, error, className, ...props }) => {
  return (
    <div className="w-full space-y-2">
      <label className="text-[10px] font-orbitron uppercase tracking-[0.2em] dark:text-titanium-silver/70 text-brand-dark/70 px-1">
        {label}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 dark:text-titanium-silver text-brand-dark/40 group-focus-within:text-brand-red transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          className={`
            w-full bg-white dark:bg-brand-dark/40 border border-brand-dark/10 dark:border-white/10 rounded-2xl py-4 
            ${Icon ? 'pl-12' : 'px-6'} pr-6 
            text-brand-dark dark:text-white placeholder:text-brand-dark/20 dark:placeholder:text-titanium-silver/30 
            focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20
            transition-all duration-300
            ${error ? 'border-red-500/50' : ''}
            ${className || ''}
          `}
          {...props}
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity" />
      </div>
      {error && <p className="text-[10px] text-red-500 font-medium px-1">{error}</p>}
    </div>
  );
};

export default Input;
