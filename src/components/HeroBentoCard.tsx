import React from 'react';
import { Article } from '../data/newsData';
import { Bookmark, Share2, ArrowRight, ArrowLeft, Radio } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface HeroBentoCardProps {
  article: Article;
  onReadArticle: (article: Article) => void;
  onShare: (article: Article) => void;
}

export const HeroBentoCard: React.FC<HeroBentoCardProps> = ({
  article,
  onReadArticle,
  onShare,
}) => {
  const { lang, t, savedArticleIds, toggleSaveArticle } = useApp();
  const isSaved = savedArticleIds.includes(article.id);

  const titleText = article.title[lang] || article.title.en;
  const summaryText = article.summary[lang] || article.summary.en;
  const badgeText = article.badge ? (article.badge[lang] || article.badge.en) : t.breaking;
  const publishedAtText = article.publishedAt[lang] || article.publishedAt.en;
  const readTimeText = article.readTime[lang] || article.readTime.en;

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-8 lg:row-span-8 bg-slate-900 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden relative group transition-all hover:border-sky-400 dark:hover:border-slate-700 min-h-[440px] flex flex-col justify-end shadow-md">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center"
        style={{ backgroundImage: `url("${article.imageUrl}")` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 z-10" />

      {/* Top Badges */}
      <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-sky-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-sky-500/20">
            {badgeText}
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-full text-sky-400 text-xs font-bold font-mono">
          <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
          <span>{t.liveUpdates}</span>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="relative z-20 p-6 md:p-8 w-full">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 max-w-3xl text-slate-100 group-hover:text-sky-200 transition-colors">
          {titleText}
        </h1>

        <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
          {summaryText}
        </p>

        {/* Footer Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onReadArticle(article)}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
            >
              <span>{t.readFullArticle}</span>
              {lang === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>

            <button
              onClick={() => toggleSaveArticle(article.id)}
              className={`p-2.5 rounded-xl transition-all border cursor-pointer ${
                isSaved
                  ? 'bg-pink-500/20 border-pink-500/50 text-pink-400'
                  : 'bg-slate-800/80 hover:bg-slate-700 rounded-xl text-sky-400 border-slate-700/80'
              }`}
              title={isSaved ? t.removeArticle : t.saveArticle}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-pink-400' : ''}`} />
            </button>

            <button
              onClick={() => onShare(article)}
              className="p-2.5 bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700/80 text-slate-300 hover:text-white cursor-pointer"
              title={t.share}
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs font-mono">
            <span>{readTimeText}</span>
            <span>•</span>
            <span className="text-slate-400">{t.updatedAt} {publishedAtText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
