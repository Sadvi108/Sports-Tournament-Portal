import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.q} className="dark-card bg-white dark:bg-white/5 overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => (v === idx ? null : idx))}
              className={isOpen ? "w-full flex items-center justify-between gap-6 p-6 text-left bg-rose-pink/5" : "w-full flex items-center justify-between gap-6 p-6 text-left"}
            >
              <div className="font-semibold dark:text-white text-dark-gray">{it.q}</div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className={isOpen ? 'text-rose-pink' : 'text-muted-gray'}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm text-muted-gray font-medium leading-relaxed">{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

