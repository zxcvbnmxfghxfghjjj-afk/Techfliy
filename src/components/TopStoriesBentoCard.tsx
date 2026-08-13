import React from 'react';
import { Article } from '../data/newsData';
import { ChevronRight, ChevronLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface TopStoriesBentoCardProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
  onSeeAll: () => void;
}

export const TopStoriesBentoCard: React.FC<TopStoriesBentoCardProps> = ({
  articles,
  onReadArticle,
  onSeeAll,
}) => {
  const { lang, t } = useApp();

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 lg:p-6 flex flex-col justify-between h-full shadow-xs transition-colors">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.topStories}</h2>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <button 
            onClick={onSeeAll}
            className="text-sky-600 dark:text-sky-400 text-xs font-bold hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>{t.seeAll}</span>
            {lang === 'ar' ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Stories List */}
        <div className="space-y-4">
          {articles.map((item, index) => {
            const titleText = item.title[lang] || item.title.en;
            const publishedAtText = item.publishedAt[lang] || item.publishedAt.en;
            const readTimeText = item.readTime[lang] || item.readTime.en;

            return (
              <React.Fragment key={item.id}>
                {index > 0 && <div className="h-px bg-slate-100 dark:bg-slate-800/80"></div>}
                <div
                  onClick={() => onReadArticle(item)}
                  className="group cursor-pointer p-1.5 -mx-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
                >
                  <div className="flex gap-3.5 items-start">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 bg-cover bg-center border border-slate-200 dark:border-slate-700/50 group-hover:border-sky-500/40 transition-colors"
                      style={{ backgroundImage: `url("${item.imageUrl}")` }}
                    />
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${item.categoryColor}`}>
                        {item.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold leading-snug text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 mt-0.5">
                        {titleText}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-mono">
                        <span>{publishedAtText}</span>
                        <span>•</span>
                        <span>{readTimeText}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Free Platform Guarantee Banner (Replacing Pro Modal Banner) */}
      <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-gradient-to-br from-sky-50 dark:from-slate-800 to-indigo-50/50 dark:to-slate-900 border border-sky-200 dark:border-sky-500/30 rounded-2xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> {t.freePlatformNotice}
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 100% FREE
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === 'ar'
              ? 'تيكفلاي خالية تماماً من الرسوم أو الاشتراكات المدفوعة. استمتع بقراءة غير محدودة وقراءة صوتية مجانية.'
              : 'Techfliy is completely free with no paywalls or subscription fees. Enjoy unlimited reading & native voice audio.'}
          </p>
        </div>
      </div>
    </div>
  );
};
