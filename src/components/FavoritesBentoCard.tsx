import React from 'react';
import { Bookmark, Heart, ChevronRight, ChevronLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ARTICLES_DATA } from '../data/newsData';

interface FavoritesBentoCardProps {
  onOpenFavorites: () => void;
}

export const FavoritesBentoCard: React.FC<FavoritesBentoCardProps> = ({
  onOpenFavorites,
}) => {
  const { lang, t, savedArticleIds } = useApp();
  const savedArticles = ARTICLES_DATA.filter((a) => savedArticleIds.includes(a.id));

  return (
    <div 
      onClick={onOpenFavorites}
      className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between hover:border-pink-500/40 transition-all cursor-pointer group min-h-[190px] shadow-xs"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 bg-pink-500/10 dark:bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
          <Heart className="w-5 h-5 fill-pink-500/40" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {t.pinnedFavorites}
          </span>
          {lang === 'ar' ? (
            <ChevronLeft className="w-4 h-4 text-slate-500 group-hover:text-pink-500 transition-all" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-pink-500 transition-all" />
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-slate-100 group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
          {t.savedForLater}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {savedArticles.length === 0
            ? t.noFavoritesYet
            : `${savedArticles.length} ${t.savedCountMessage}`}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {savedArticles.slice(0, 3).map((art) => (
            <div
              key={art.id}
              className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 bg-cover bg-center"
              style={{ backgroundImage: `url("${art.imageUrl}")` }}
              title={art.title[lang] || art.title.en}
            />
          ))}
          {savedArticles.length > 3 && (
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-300">
              +{savedArticles.length - 3}
            </div>
          )}
          {savedArticles.length === 0 && (
            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              <Bookmark className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 hover:underline">
          {t.viewAllSaved}
        </span>
      </div>
    </div>
  );
};
