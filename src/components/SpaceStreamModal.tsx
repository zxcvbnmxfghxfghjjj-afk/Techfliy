import React, { useState } from 'react';
import { X, Rocket, Flame, Users, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface SpaceStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpaceStreamModal: React.FC<SpaceStreamModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useApp();

  const [chatMessages, setChatMessages] = useState([
    { user: 'AstroFan_99', text: lang === 'ar' ? 'إطلاق ستارشيب رائع جداً! 🚀' : 'Starship flight test looking crisp! 🚀', time: '11:24' },
    { user: 'TechSurfer', text: lang === 'ar' ? 'تم تجهيز ضغط وقود الميثان بالكامل.' : 'Methane boost pumps pre-chilled.', time: '11:25' },
    { user: 'BentoUser', text: lang === 'ar' ? 'السرعة الفضائية تتجاوز 24,000 كم/ساعة!' : 'Telemetry speed 24,000 km/h!', time: '11:25' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  if (!isOpen) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { user: lang === 'ar' ? 'أنت' : 'You', text: newMessage, time: '11:26' },
    ]);
    setNewMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Stream Header */}
        <div className="bg-slate-900 dark:bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono">
              {t.liveBroadcast}
            </span>
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-sky-400" /> Starbase Broadcast
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span>48,290 {lang === 'ar' ? 'مشاهد' : 'Viewers'}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player + Chat Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* Simulated Video Player */}
          <div className="lg:col-span-8 bg-black relative flex flex-col justify-between p-6 min-h-[300px]">
            {/* Background Simulated Rocket Launch Canvas */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1000')] bg-cover bg-center opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40"></div>

            {/* Video Overlay Telemetry HUD */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono">
              <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-sky-400 flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{t.liveTelemetry}</span>
              </div>

              <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-emerald-400 font-bold">
                T+ 00:04:22
              </div>
            </div>

            {/* Center Play Watermark */}
            <div className="relative z-10 text-center my-auto">
              <span className="text-3xl sm:text-4xl font-black italic text-white tracking-wider drop-shadow-lg">
                STARSHIP FLIGHT TEST
              </span>
              <p className="text-xs text-sky-200 mt-1 font-mono">Starbase, Boca Chica, Texas</p>
            </div>

            {/* Bottom HUD Metrics */}
            <div className="relative z-10 grid grid-cols-3 gap-2 text-center bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-400 text-[10px] block">{lang === 'ar' ? 'الارتفاع' : 'ALTITUDE'}</span>
                <span className="text-sky-400 font-bold">142.8 km</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">{lang === 'ar' ? 'السرعة' : 'SPEED'}</span>
                <span className="text-emerald-400 font-bold">26,800 km/h</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">{lang === 'ar' ? 'الوقود' : 'PROPELLANT'}</span>
                <span className="text-purple-400 font-bold">88%</span>
              </div>
            </div>
          </div>

          {/* Live Chat Feed */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between p-4 min-h-[220px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">{t.liveChat}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 text-xs pr-1">
              {chatMessages.map((msg, i) => (
                <div key={i} className="bg-white dark:bg-slate-950/60 p-2 rounded-xl border border-slate-200 dark:border-slate-800/60 shadow-2xs">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5">
                    <span className="font-bold text-sky-600 dark:text-sky-400">{msg.user}</span>
                    <span className="font-mono">{msg.time}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{msg.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={t.typeMessage}
                className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
              />
              <button
                type="submit"
                className="bg-sky-500 text-slate-950 p-2 rounded-xl font-bold hover:bg-sky-400 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
