import React from 'react';
import { Play, Rocket } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SpaceTechBentoCardProps {
  onOpenStreamModal: () => void;
}

export const SpaceTechBentoCard: React.FC<SpaceTechBentoCardProps> = ({
  onOpenStreamModal,
}) => {
  const { lang, t } = useApp();

  return (
    <div 
      className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-4 bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 dark:from-sky-700 dark:to-indigo-900 rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl hover:shadow-sky-500/20 transition-all cursor-pointer min-h-[190px] flex flex-col justify-between"
      onClick={onOpenStreamModal}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="bg-white/20 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            {t.liveBroadcast}
          </span>
          <Rocket className="w-5 h-5 text-sky-200 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:rotate-180" />
        </div>

        <div>
          <h3 className="text-xl font-black italic tracking-tight leading-none text-white mb-1">
            {t.futureSpaceTech}
          </h3>
          <p className="text-xs text-sky-100/90 max-w-[200px] leading-tight">
            {t.joinLivestream}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenStreamModal();
          }}
          className="bg-white text-indigo-950 hover:bg-sky-50 text-[10px] font-black py-2 px-4 rounded-full w-max uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
        >
          <Play className="w-3 h-3 fill-indigo-950 rtl:rotate-180" />
          <span>{t.watchLive}</span>
        </button>
      </div>

      {/* Background Rocket SVG Watermark */}
      <svg
        className="absolute -right-4 -bottom-4 rtl:-left-4 rtl:right-auto w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
      </svg>
    </div>
  );
};
