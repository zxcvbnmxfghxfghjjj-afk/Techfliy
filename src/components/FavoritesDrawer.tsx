import React from 'react';
import { Article, ARTICLES_DATA } from '../data/newsData';
import { X, Trash2, Bookmark, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onReadArticle: (article: Article) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  onReadArticle,
}) => {
  const { lang, t, savedArticleIds, toggleSaveArticle } = useApp();
  if (!isOpen) return null;

  const savedArticles = savedArticleIds.map((id) => {
    return ARTICLES_DATA.find((a: Article) => a.id === id);
  }).filter(Boolean) as Article[];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 h-full flex flex-col p-6 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-pink-500 fill-pink-500/20" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.pinnedFavorites}</h3>
            <span className="bg-pink-500/20 text-pink-500 text-xs font-bold px-2 py-0.5 rounded-full">
              {savedArticles.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content List */}
        {savedArticles.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-3">
            <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-400">
              <Bookmark className="w-8 h-8" />
            </div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t.noFavoritesYet}</p>
          </div>
        ) : (
          <div className="space-y-4 flex-1 overflow-y-auto pr-1">
            {savedArticles.map((article) => {
              const titleText = article.title[lang] || article.title.en;
              const readTimeText = article.readTime[lang] || article.readTime.en;

              return (
                <div
                  key={article.id}
                  className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex gap-3.5 group hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                >
                  <img
                    src={article.imageUrl}
                    alt={titleText}
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 dark:border-slate-800 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <h4
                      onClick={() => {
                        onReadArticle(article);
                        onClose();
                      }}
                      className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors line-clamp-2 cursor-pointer mt-0.5"
                    >
                      {titleText}
                    </h4>

                    <div className="flex items-center justify-between mt-3 text-[10px] text-slate-500 font-mono">
                      <span>{readTimeText}</span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleSaveArticle(article.id)}
                          className="text-slate-400 hover:text-pink-500 p-1 transition-colors cursor-pointer"
                          title={t.removeArticle}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            onReadArticle(article);
                            onClose();
                          }}
                          className="text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 font-bold cursor-pointer"
                        >
                          <span>{t.readFullArticle.split(' ')[0]}</span>
                          {lang === 'ar' ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
