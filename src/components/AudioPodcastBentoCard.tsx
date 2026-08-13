import React, { useState, useEffect } from 'react';
import { Play, Pause, Headphones, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { speechService } from '../utils/speech';

export const AudioPodcastBentoCard: React.FC = () => {
  const { lang, t } = useApp();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.25 | 1.5>(1);

  const podcastScript = {
    en: "Welcome to Techfliy Daily Briefing. Today in technology: OpenAI unveils Strawberry o1 reasoning model with human-level logic. Nvidia RTX 5090 leaks point to a massive performance jump with 32 gigabytes of GDDR7 memory. React 19 officially releases with native server actions. And SpaceX prepares Starship flight test with in-space propellant transfer.",
    ar: "أهلاً بكم في الموجز التقني اليومي من تيكفلاي. أهم الأخبار اليوم: أوبن أيه أي تكشف عن نموذج ستروبري للتفكير المنطقي. تسريبات بطاقات نيفيديا RTX 5090 تؤكد قفزة أداء هائلة بذاكرة 32 جيجابايت. وإطلاق React 19 رسمياً مع دعم إجراءات الخادم. وسبايس إكس تستعد لاختبار ستارشيب للوصول إلى سطح القمر."
  };

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            speechService.stop();
            return 0;
          }
          return prev + 1;
        });
      }, 300 / playbackSpeed);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const toggleSpeech = () => {
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setProgress(0);
      speechService.speak({
        text: podcastScript[lang],
        lang: lang,
        rate: playbackSpeed,
        onEnd: () => {
          setIsPlaying(false);
          setProgress(100);
        },
        onError: () => {
          setIsPlaying(false);
        }
      });
    }
  };

  return (
    <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-sky-500/40 transition-all min-h-[190px] shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
            <Headphones className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
              {t.dailyPodcastTitle}
            </span>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.dailyPodcastSubtitle}</h4>
          </div>
        </div>

        <button
          onClick={() => {
            const nextSpeed = playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1;
            setPlaybackSpeed(nextSpeed);
            if (isPlaying) {
              speechService.stop();
              setIsPlaying(false);
            }
          }}
          className="text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-lg transition-colors cursor-pointer"
          title="Playback speed"
        >
          {playbackSpeed}x
        </button>
      </div>

      {/* Audio Waveform Bars Visualizer */}
      <div className="flex items-end justify-between gap-1 h-10 px-2 my-2">
        {[40, 65, 30, 85, 95, 45, 75, 100, 60, 30, 80, 90, 50, 70, 40, 85, 60, 95, 30, 50].map(
          (height, idx) => {
            const active = (idx / 20) * 100 <= progress;
            return (
              <div
                key={idx}
                className={`w-1 rounded-full transition-all duration-300 ${
                  active ? 'bg-sky-500 dark:bg-sky-400' : 'bg-slate-200 dark:bg-slate-800'
                } ${isPlaying ? 'animate-pulse' : ''}`}
                style={{
                  height: `${isPlaying ? Math.max(20, Math.sin(progress + idx) * 40 + height * 0.6) : height * 0.6}%`,
                }}
              />
            );
          }
        )}
      </div>

      {/* Player Controls */}
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
          <span>{isPlaying ? `${progress}%` : '0:00'}</span>
          <span className="text-slate-400 dark:text-slate-500">{t.audioNarration}</span>
          <span>0:45</span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-lg overflow-hidden mb-3">
          <div 
            className="bg-sky-500 h-full transition-all duration-300" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-600 dark:text-slate-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.synthesizedHdVoice}</span>
          </div>

          <button
            onClick={toggleSpeech}
            className="w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center transition-transform active:scale-90 shadow-md shadow-sky-500/20 cursor-pointer"
            title={isPlaying ? t.pauseAudio : t.playAudio}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-slate-950" />
            ) : (
              <Play className="w-4 h-4 fill-slate-950 rtl:rotate-180" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
