import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, translations, Translations } from '../types/i18n';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: Translations;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  savedArticleIds: string[];
  toggleSaveArticle: (id: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedTheme = localStorage.getItem('techfliy_theme');
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
    return 'dark';
  });

  const [lang, setLangState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLang = localStorage.getItem('techfliy_lang');
        if (savedLang === 'en' || savedLang === 'ar') return savedLang;
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
    return 'en';
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>([
    'openai-strawberry',
    'nvidia-rtx-5090',
    'react-19-server-components'
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[lang];

  // Sync theme with HTML class & localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('techfliy_theme', theme);
    } catch (e) {}
  }, [theme]);

  // Sync dir attribute with language & localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    root.setAttribute('lang', lang);
    try {
      localStorage.setItem('techfliy_lang', lang);
    } catch (e) {}
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const toggleSaveArticle = (id: string) => {
    if (savedArticleIds.includes(id)) {
      setSavedArticleIds(savedArticleIds.filter((item) => item !== id));
      showToast(lang === 'ar' ? 'تمت إزالة المقال من المحفوظات' : 'Removed from Saved Favorites');
    } else {
      setSavedArticleIds([...savedArticleIds, id]);
      showToast(lang === 'ar' ? 'تم حفظ المقال في المفضلة المثبتة!' : 'Saved to Pinned Favorites!');
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        toggleLang,
        setLang,
        t,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        savedArticleIds,
        toggleSaveArticle,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
