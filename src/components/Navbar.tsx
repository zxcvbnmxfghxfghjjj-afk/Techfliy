import React from 'react';
import { Search, Bookmark, Sparkles, X, Sun, Moon, Languages } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NavbarProps {
  onOpenFavorites: () => void;
  onOpenAiSummarizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFavorites,
  onOpenAiSummarizer,
}) => {
  const {
    theme,
    toggleTheme,
    lang,
    toggleLang,
    t,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    savedArticleIds,
  } = useApp();

  const navCategories = [
    { name: t.discover, category: 'All' },
    { name: t.aiAndRobots, category: 'Artificial Intelligence' },
    { name: t.hardware, category: 'Hardware' },
    { name: t.software, category: 'Software' },
    { name: t.cybersecurity, category: 'Cybersecurity' },
    { name: t.gaming, category: 'Gaming' },
  ];

  return (
    <nav className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30 transition-colors">
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Brand Logo */}
        <div 
          onClick={() => {
            setSelectedCategory('All');
            setSearchQuery('');
          }} 
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <span className="text-2xl font-black tracking-tighter text-sky-600 dark:text-sky-400 group-hover:text-sky-500 transition-colors">
            {t.appName}
          </span>
          <span className="text-[10px] bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 px-1.5 py-0.5 rounded font-mono font-bold uppercase">
            FREE
          </span>
        </div>

        {/* Category Navigation Pills */}
        <div className="hidden md:flex gap-1 lg:gap-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300">
          {navCategories.map((item) => {
            const isActive = selectedCategory === item.category;
            return (
              <button
                key={item.category}
                onClick={() => {
                  setSelectedCategory(item.category);
                  setSearchQuery('');
                }}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 font-bold border border-sky-200 dark:border-sky-500/30 shadow-xs'
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search input */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 text-xs rounded-full py-2 px-9 w-40 md:w-56 lg:w-64 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
          <Search className={`absolute ${lang === 'ar' ? 'right-3' : 'left-3'} top-2.5 w-3.5 h-3.5 text-slate-400`} />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute ${lang === 'ar' ? 'left-2.5' : 'right-2.5'} top-2.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* AI Brief Generator Trigger */}
        <button
          onClick={onOpenAiSummarizer}
          className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-300 dark:border-sky-500/30 hover:border-sky-500 text-sky-600 dark:text-sky-400 px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:shadow-xs"
          title={t.aiBriefingTitle}
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 animate-pulse" />
          <span>{t.aiInsight}</span>
        </button>

        {/* Language Switcher Button (EN / AR) */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-xs font-bold transition-colors border border-slate-200 dark:border-slate-700"
          title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        >
          <Languages className="w-3.5 h-3.5 text-sky-500" />
          <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
        </button>

        {/* Dark / Light Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full transition-colors border border-slate-200 dark:border-slate-700"
          title={theme === 'dark' ? t.lightMode : t.darkMode}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>

        {/* Favorites button */}
        <button
          onClick={onOpenFavorites}
          className="relative p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full transition-colors border border-slate-200 dark:border-slate-700"
          title={t.favorites}
        >
          <Bookmark className="w-4 h-4 text-pink-500 fill-pink-500/20" />
          {savedArticleIds.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
              {savedArticleIds.length}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
