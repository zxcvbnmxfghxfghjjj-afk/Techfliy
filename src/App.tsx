import React, { useState, useMemo } from 'react';
import { ARTICLES_DATA, Article } from './data/newsData';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroBentoCard } from './components/HeroBentoCard';
import { TopStoriesBentoCard } from './components/TopStoriesBentoCard';
import { FavoritesBentoCard } from './components/FavoritesBentoCard';
import { SpaceTechBentoCard } from './components/SpaceTechBentoCard';
import { AiBenchmarkBentoCard } from './components/AiBenchmarkBentoCard';
import { AudioPodcastBentoCard } from './components/AudioPodcastBentoCard';
import { ArticleModal } from './components/ArticleModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { SpaceStreamModal } from './components/SpaceStreamModal';
import { AiTopicSummarizerModal } from './components/AiTopicSummarizerModal';
import { Footer } from './components/Footer';
import { Check, Filter } from 'lucide-react';

function MainApp() {
  const {
    lang,
    t,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    toastMessage,
    showToast,
  } = useApp();

  // Modal States
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [isSpaceStreamOpen, setIsSpaceStreamOpen] = useState<boolean>(false);
  const [isAiSummarizerOpen, setIsAiSummarizerOpen] = useState<boolean>(false);

  // Copy share link
  const handleShare = (article: Article) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    const titleText = article.title[lang] || article.title.en;
    showToast(`${t.linkCopied} "${titleText.slice(0, 30)}..."`);
  };

  // Filtered Articles based on Search & Category
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const titleEn = article.title.en.toLowerCase();
      const titleAr = article.title.ar.toLowerCase();
      const summaryEn = article.summary.en.toLowerCase();
      const summaryAr = article.summary.ar.toLowerCase();

      const matchesSearch =
        !query ||
        titleEn.includes(query) ||
        titleAr.includes(query) ||
        summaryEn.includes(query) ||
        summaryAr.includes(query) ||
        article.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured breaking story (hero) and remaining top stories
  const heroArticle = filteredArticles[0] || ARTICLES_DATA[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/60 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-sky-500 selection:text-white transition-colors duration-300">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-50 bg-sky-500 text-slate-950 font-bold px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-sky-400 text-xs sm:text-sm animate-bounce">
          <Check className="w-4 h-4 text-slate-950" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenAiSummarizer={() => setIsAiSummarizerOpen(true)}
      />

      {/* Main Bento Grid Content */}
      <main className="flex-grow p-4 lg:p-6 max-w-7xl mx-auto w-full">
        {/* Category & Search Active Filter Header */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="mb-4 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 px-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
              <Filter className="w-4 h-4 text-sky-500" />
              <span>
                {t.filterLabel}: <strong className="text-sky-600 dark:text-sky-400">{selectedCategory}</strong>
                {searchQuery && ` • Query: "${searchQuery}"`}
              </span>
              <span className="text-slate-400">({filteredArticles.length} {t.resultsCount})</span>
            </div>

            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-sky-600 dark:text-sky-400 hover:underline font-bold cursor-pointer"
            >
              {t.clearFilters}
            </button>
          </div>
        )}

        {/* 12-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-fr">
          {/* Bento Card 1: Featured Breaking Hero (8 cols) */}
          <HeroBentoCard
            article={heroArticle}
            onReadArticle={setActiveArticle}
            onShare={handleShare}
          />

          {/* Bento Card 2: Top Stories List (4 cols, 12 row-span) */}
          <TopStoriesBentoCard
            articles={remainingArticles.length > 0 ? remainingArticles : ARTICLES_DATA.slice(1)}
            onReadArticle={setActiveArticle}
            onSeeAll={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
          />

          {/* Bento Card 3: Pinned Favorites Widget (4 cols) */}
          <FavoritesBentoCard
            onOpenFavorites={() => setIsFavoritesOpen(true)}
          />

          {/* Bento Card 4: Space Tech Livestream Card (4 cols) */}
          <SpaceTechBentoCard
            onOpenStreamModal={() => setIsSpaceStreamOpen(true)}
          />

          {/* Bento Card 5: AI Model Benchmark Comparison Matrix (8 cols) */}
          <AiBenchmarkBentoCard />

          {/* Bento Card 6: Daily 2-Min Audio Tech Briefing Podcast (4 cols) */}
          <AudioPodcastBentoCard />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ArticleModal
        article={activeArticle}
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        onShare={handleShare}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        onReadArticle={setActiveArticle}
      />

      <SpaceStreamModal
        isOpen={isSpaceStreamOpen}
        onClose={() => setIsSpaceStreamOpen(false)}
      />

      <AiTopicSummarizerModal
        isOpen={isAiSummarizerOpen}
        onClose={() => setIsAiSummarizerOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
