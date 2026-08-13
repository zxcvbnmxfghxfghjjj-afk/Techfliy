export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface Translations {
  appName: string;
  discover: string;
  aiAndRobots: string;
  hardware: string;
  software: string;
  cybersecurity: string;
  gaming: string;
  spaceTech: string;
  allCategories: string;
  searchPlaceholder: string;
  aiInsight: string;
  favorites: string;
  pinnedFavorites: string;
  savedForLater: string;
  noFavoritesYet: string;
  savedCountMessage: string;
  viewAllSaved: string;
  readFullArticle: string;
  saveArticle: string;
  removeArticle: string;
  share: string;
  updatedAt: string;
  readTime: string;
  topStories: string;
  seeAll: string;
  liveUpdates: string;
  breaking: string;
  clearFilters: string;
  filterLabel: string;
  resultsCount: string;
  listenToAudio: string;
  pauseAudio: string;
  playAudio: string;
  audioNarration: string;
  synthesizedHdVoice: string;
  keyTakeaways: string;
  helpful: string;
  linkCopied: string;
  communityComments: string;
  dailyPodcastTitle: string;
  dailyPodcastSubtitle: string;
  aiVoiceSynthesized: string;
  freePlatformNotice: string;
  futureSpaceTech: string;
  joinLivestream: string;
  watchLive: string;
  liveBroadcast: string;
  aiBenchmarksTitle: string;
  aiBenchmarksSubtitle: string;
  reasoning: string;
  code: string;
  math: fontString;
  latency: string;
  aiBriefingTitle: string;
  aiBriefingSubtitle: string;
  enterTopicPlaceholder: string;
  analyze: string;
  orSelectTrending: string;
  synthesizingText: string;
  executiveTakeaways: string;
  verdict: string;
  systemStatusOptimal: string;
  privacyPolicy: string;
  termsOfService: string;
  darkMode: string;
  lightMode: string;
  liveTelemetry: string;
  liveChat: string;
  typeMessage: string;
  send: string;
}

type fontString = string;

export const translations: Record<Language, Translations> = {
  en: {
    appName: 'TECHFLIY',
    discover: 'Discover',
    aiAndRobots: 'AI & Robots',
    hardware: 'Hardware',
    software: 'Software',
    cybersecurity: 'Cybersecurity',
    gaming: 'Gaming',
    spaceTech: 'Space Tech',
    allCategories: 'All Categories',
    searchPlaceholder: 'Search news, hardware, AI...',
    aiInsight: 'AI Insight',
    favorites: 'Favorites',
    pinnedFavorites: 'Pinned Favorites',
    savedForLater: 'Saved for Later',
    noFavoritesYet: 'No articles saved yet. Click bookmark on any story!',
    savedCountMessage: 'articles waiting for your attention',
    viewAllSaved: 'View All Saved →',
    readFullArticle: 'Read Full Article',
    saveArticle: 'Save for later',
    removeArticle: 'Remove from saved',
    share: 'Share',
    updatedAt: 'Updated',
    readTime: 'read',
    topStories: 'Top Stories',
    seeAll: 'See All',
    liveUpdates: 'LIVE UPDATES',
    breaking: 'Breaking',
    clearFilters: 'Clear Filters',
    filterLabel: 'Filter',
    resultsCount: 'results',
    listenToAudio: 'Listen to Audio Narration',
    pauseAudio: 'Pause Voice',
    playAudio: 'Listen Aloud',
    audioNarration: 'Audio Narration',
    synthesizedHdVoice: 'Free Native Web Speech Engine',
    keyTakeaways: 'Key Takeaways',
    helpful: 'Helpful',
    linkCopied: 'Link Copied!',
    communityComments: 'Community Comments',
    dailyPodcastTitle: 'Daily Tech Briefing',
    dailyPodcastSubtitle: '2-Min Voice Summary',
    aiVoiceSynthesized: 'Free Voice Synthesis',
    freePlatformNotice: 'Techfliy is 100% Free for Everyone',
    futureSpaceTech: 'THE FUTURE OF SPACE TECH',
    joinLivestream: 'Join the livestream from Starbase, Texas.',
    watchLive: 'Watch Live',
    liveBroadcast: 'LIVE BROADCAST',
    aiBenchmarksTitle: 'Frontier AI Model Benchmarks',
    aiBenchmarksSubtitle: 'Real-time competitive metrics on o1, Gemini 2.5, Claude 3.5 & Llama',
    reasoning: 'Reasoning',
    code: 'Code',
    math: 'Math',
    latency: 'Latency',
    aiBriefingTitle: 'AI Tech Briefing Generator',
    aiBriefingSubtitle: 'Gemini 2.5 Insight Engine',
    enterTopicPlaceholder: 'e.g. Quantum Computing, Llama 4, RISC-V...',
    analyze: 'Analyze',
    orSelectTrending: 'OR SELECT TRENDING TOPIC:',
    synthesizingText: 'Synthesizing tech analysis & market reports...',
    executiveTakeaways: 'Executive Takeaways:',
    verdict: 'Expert Verdict',
    systemStatusOptimal: 'System Status: Optimal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    liveTelemetry: 'RAPTOR ENGINES: ALL NOMINAL',
    liveChat: 'Live Audience Chat',
    typeMessage: 'Say something...',
    send: 'Send',
  },
  ar: {
    appName: 'تيكفلاي',
    discover: 'استكشف',
    aiAndRobots: 'الذكاء الاصطناعي والروبوتات',
    hardware: 'الأجهزة والعتاد',
    software: 'البرمجيات',
    cybersecurity: 'الأمن السيبراني',
    gaming: 'الألعاب والترفيه',
    spaceTech: 'تكنولوجيا الفضاء',
    allCategories: 'جميع التصنيفات',
    searchPlaceholder: 'ابحث في أخبار التقنية، الذكاء الاصطناعي...',
    aiInsight: 'تحليلات ذكية',
    favorites: 'المفضلة',
    pinnedFavorites: 'المفضلة المثبتة',
    savedForLater: 'محفوظات للقراءة لاحقاً',
    noFavoritesYet: 'لا توجد مقالات محفوظة بعد. اضغط على أيقونة الإشارة المرجعية للحفظ!',
    savedCountMessage: 'مقالات تنتظر قراءتك',
    viewAllSaved: 'عرض كافة المحفوظات ←',
    readFullArticle: 'اقرأ المقال كاملاً',
    saveArticle: 'حفظ للقراءة لاحقاً',
    removeArticle: 'إزالة من المحفوظات',
    share: 'مشاركة',
    updatedAt: 'تحديث',
    readTime: 'قراءة',
    topStories: 'أبرز الأخبار',
    seeAll: 'عرض الكل',
    liveUpdates: 'تحديثات مباشرة',
    breaking: 'عاجل',
    clearFilters: 'إلغاء التصفية',
    filterLabel: 'تصفية',
    resultsCount: 'نتيجة',
    listenToAudio: 'استمع إلى القراءة الصوتية',
    pauseAudio: 'إيقاف الصوت',
    playAudio: 'استمع صوتاً',
    audioNarration: 'القراءة الصوتية',
    synthesizedHdVoice: 'محرك نطق صوتی مجاني',
    keyTakeaways: 'أبرز النقاط الرئيسية',
    helpful: 'مفيد',
    linkCopied: 'تم نسخ الرابط!',
    communityComments: 'تعليقات المجتمع',
    dailyPodcastTitle: 'الملخص التقني اليومي',
    dailyPodcastSubtitle: 'موجز صوتی في دقيقتين',
    aiVoiceSynthesized: 'نطق صوتی مجاني',
    freePlatformNotice: 'تيكفلاي منصة مجانية بالكامل للجميع',
    futureSpaceTech: 'مستقبل تقنيات الفضاء',
    joinLivestream: 'انضم للبث المباشر من قاعدة ستاربايس في تكساس.',
    watchLive: 'شاهد البث المباشر',
    liveBroadcast: 'بث حي ومباشر',
    aiBenchmarksTitle: 'مؤشرات أداء نماذج الذكاء الاصطناعي',
    aiBenchmarksSubtitle: 'مقارنة فورية بين نماذج o1 و Gemini 2.5 و Claude 3.5 و Llama',
    reasoning: 'التفكير والتعلل',
    code: 'البرمجة',
    math: 'الرياضيات',
    latency: 'زمن الاستجابة',
    aiBriefingTitle: 'مولد الموجز التقني الذكي',
    aiBriefingSubtitle: 'محرك التحليل الذكي Gemini 2.5',
    enterTopicPlaceholder: 'مثال: الحوسبة الكمومية، Llama 4، معالجات RISC-V...',
    analyze: 'تحليل',
    orSelectTrending: 'أو اختر موضوعاً شائعاً:',
    synthesizingText: 'جاري جلب وتحليل البيانات التقنية...',
    executiveTakeaways: 'أهم المخرجات التنفيذية:',
    verdict: 'الرأي الفني والتقييم',
    systemStatusOptimal: 'حالة النظام: ممتازة',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع المضيء',
    liveTelemetry: 'محركات رابتور: تعمل بكفاءة كاملة',
    liveChat: 'محادثة الجمهور المباشرة',
    typeMessage: 'اكتب تعليقاً...',
    send: 'إرسال',
  },
};
