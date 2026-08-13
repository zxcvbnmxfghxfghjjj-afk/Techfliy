import React, { useState } from 'react';
import { AI_BENCHMARKS } from '../data/newsData';
import { Cpu, Zap, Code, Brain } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AiBenchmarkBentoCard: React.FC = () => {
  const { lang, t } = useApp();
  const [metric, setMetric] = useState<'reasoning' | 'code' | 'math'>('reasoning');

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 lg:p-6 flex flex-col justify-between hover:border-sky-400 dark:hover:border-slate-700 transition-all shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">{t.aiBenchmarksTitle}</h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.aiBenchmarksSubtitle}</p>
        </div>

        {/* Metric Switcher Tabs */}
        <div className="flex bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs self-start sm:self-auto">
          <button
            onClick={() => setMetric('reasoning')}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              metric === 'reasoning'
                ? 'bg-sky-500 text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Brain className="w-3 h-3" /> {t.reasoning}
          </button>
          <button
            onClick={() => setMetric('code')}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              metric === 'code'
                ? 'bg-sky-500 text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Code className="w-3 h-3" /> {t.code}
          </button>
          <button
            onClick={() => setMetric('math')}
            className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              metric === 'math'
                ? 'bg-sky-500 text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Zap className="w-3 h-3" /> {t.math}
          </button>
        </div>
      </div>

      {/* Benchmarks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {AI_BENCHMARKS.map((item) => {
          const score =
            metric === 'reasoning'
              ? item.reasoningScore
              : metric === 'code'
              ? item.codeScore
              : item.mathScore;

          const tagText = item.tag[lang] || item.tag.en;

          return (
            <div
              key={item.modelName}
              className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3.5 flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mb-1 font-mono">
                  <span>{item.creator}</span>
                  <span className="bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 px-1.5 py-0.2 rounded font-bold">
                    {tagText}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1 mb-2">
                  {item.modelName}
                </h4>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <span className="capitalize">{t[metric]}</span>
                  <span className="text-sky-600 dark:text-sky-400 font-mono text-sm">{score}%</span>
                </div>

                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden mb-2">
                  <div
                    className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${score}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>{t.latency}</span>
                  <span>{item.latencyMs}ms</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
