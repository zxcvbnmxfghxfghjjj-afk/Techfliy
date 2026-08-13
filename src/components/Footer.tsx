import React from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { lang, t } = useApp();

  return (
    <footer className="py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col sm:flex-row items-center justify-between px-4 lg:px-8 text-[11px] text-slate-500 dark:text-slate-400 gap-2 select-none transition-colors">
      <div className="flex gap-6 items-center">
        <span>&copy; {new Date().getFullYear()} {t.appName} News Network</span>
        <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
          {t.privacyPolicy}
        </a>
        <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
          {t.termsOfService}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{t.systemStatusOptimal}</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono">
          <span className="w-2 h-2 rounded-full bg-sky-500"></span>
          <span>API: Currents v2.4 (Free Tier)</span>
        </div>
      </div>
    </footer>
  );
};
