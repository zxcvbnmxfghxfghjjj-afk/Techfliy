import React, { useState, useEffect } from 'react';
import { Article } from '../data/newsData';
import { X, Bookmark, Share2, Volume2, Sparkles, ThumbsUp, MessageSquare, Clock, Check, Pause, Play } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { speechService } from '../utils/speech';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onShare: (article: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onShare,
}) => {
  const { lang, t, savedArticleIds, toggleSaveArticle } = useApp();
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (article) {
      setLikes(article.likesCount);
      setHasLiked(false);
      setIsPlayingAudio(false);
      speechService.stop();
    }
  }, [article]);

  if (!isOpen || !article) return null;

  const isSaved = savedArticleIds.includes(article.id);
  const titleText = article.title[lang] || article.title.en;
  const summaryText = article.summary[lang] || article.summary.en;
  const contentParagraphs = article.content[lang] || article.content.en;
  const takeawaysList = article.keyTakeaways[lang] || article.keyTakeaways.en;
  const publishedAtText = article.publishedAt[lang] || article.publishedAt.en;
  const readTimeText = article.readTime[lang] || article.readTime.en;
  const authorRoleText = article.author.role[lang] || article.author.role.en;
  const badgeText = article.badge ? (article.badge[lang] || article.badge.en) : null;

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCopyLink = () => {
    onShare(article);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleSpeech = () => {
    if (isPlayingAudio) {
      speechService.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const fullSpeechText = `${titleText}. ${summaryText}. ${contentParagraphs.join(' ')}`;
      speechService.speak({
        text: fullSpeechText,
        lang: lang,
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false),
      });
    }
  };

  const fontSizeClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-relaxed',
    xlarge: 'text-lg sm:text-xl leading-relaxed',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${article.categoryColor}`}>
              {article.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{readTimeText}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Selector */}
            <div className="hidden sm:flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'normal' ? 'bg-sky-500 text-white font-bold' : 'hover:text-slate-900 dark:hover:text-white'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'large' ? 'bg-sky-500 text-white font-bold' : 'hover:text-slate-900 dark:hover:text-white'}`}
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => toggleSaveArticle(article.id)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-pink-500/20 border-pink-500/40 text-pink-500'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
              }`}
              title={isSaved ? t.removeArticle : t.saveArticle}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-pink-500' : ''}`} />
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                speechService.stop();
                setIsPlayingAudio(false);
                onClose();
              }}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Article Banner Image */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
            <img
              src={article.imageUrl}
              alt={titleText}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            {badgeText && (
              <span className="absolute top-4 left-4 rtl:right-4 rtl:left-auto bg-sky-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                {badgeText}
              </span>
            )}
          </div>

          {/* Title and Author Metadata */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-4">
              {titleText}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full border border-sky-500/40 object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{article.author.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{authorRoleText}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-500" />
                  {publishedAtText}
                </span>
                <span>•</span>
                <span>{article.viewsCount.toLocaleString()} {lang === 'ar' ? 'مشاهدة' : 'views'}</span>
              </div>
            </div>
          </div>

          {/* Audio Reader Controls */}
          <div className="bg-sky-500/10 border border-sky-500/30 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center font-bold">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-sky-700 dark:text-sky-300">{t.listenToAudio}</h5>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.synthesizedHdVoice}</p>
              </div>
            </div>

            <button
              onClick={toggleSpeech}
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>{t.pauseAudio}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 rtl:rotate-180" />
                  <span>{t.playAudio}</span>
                </>
              )}
            </button>
          </div>

          {/* Key Takeaways Box */}
          {takeawaysList && takeawaysList.length > 0 && (
            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
              <h4 className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-500" /> {t.keyTakeaways}
              </h4>
              <ul className="space-y-2">
                {takeawaysList.map((takeaway, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Paragraphs */}
          <div className={`space-y-4 text-slate-700 dark:text-slate-300 ${fontSizeClasses[fontSize]}`}>
            {contentParagraphs.map((p, index) => (
              <p key={index} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Article Footer Interactivity */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  hasLiked
                    ? 'bg-sky-500 text-white border-sky-400'
                    : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span>{likes} {t.helpful}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? t.linkCopied : t.share}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span>{article.commentsCount} {t.communityComments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
