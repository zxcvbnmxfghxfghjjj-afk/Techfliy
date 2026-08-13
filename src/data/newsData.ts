export interface LocalizedString {
  en: string;
  ar: string;
}

export interface LocalizedStringArray {
  en: string[];
  ar: string[];
}

export interface Article {
  id: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  summary: LocalizedString;
  content: LocalizedStringArray;
  category: 'Artificial Intelligence' | 'Hardware' | 'Software' | 'Cybersecurity' | 'Gaming' | 'Space Tech';
  categoryColor: string;
  badge?: LocalizedString;
  author: {
    name: string;
    avatar: string;
    role: LocalizedString;
  };
  publishedAt: LocalizedString;
  readTime: LocalizedString;
  imageUrl: string;
  isBreaking?: boolean;
  viewsCount: number;
  likesCount: number;
  commentsCount: number;
  keyTakeaways: LocalizedStringArray;
}

export const ARTICLES_DATA: Article[] = [
  // --- AI & ROBOTS CATEGORY ---
  {
    id: 'openai-strawberry',
    title: {
      en: "OpenAI Reveals 'Strawberry' Reasoning Model, Aiming for Human-Level Logic",
      ar: "أوبن أيه أي تكشف عن نموذج 'ستروبري' للتفكير، هادفة لتحقيق منطق يداني المستوى البشري"
    },
    summary: {
      en: "The latest breakthrough in Large Language Models promises to solve complex math and engineering problems that previously baffled AI.",
      ar: "اختراق جديد في نماذج اللغات الضخمة يعد بحل المسائل الرياضية والهندسية المعقدة التي كانت تستعصي سابقاً على الذكاء الاصطناعي."
    },
    content: {
      en: [
        "OpenAI has officially unveiled its new reasoning model codebase, internally dubbed 'Strawberry' (o1), designed to systematically pause and think through multi-step logic before generating a response.",
        "Unlike conventional autoregressive models that generate output token by token immediately, Strawberry utilizes advanced chain-of-thought processing at inference time. This enables the model to self-correct math equations, debug complex algorithms, and verify edge cases before committing to a final answer.",
        "In early benchmark evaluations on competitive programming contests (Codeforces) and high-school math olympiads (AIME), Strawberry scored in the 89th percentile, outperforming previous frontier models by over 35%.",
        "Industry analysts speculate that this architectural shift toward inference-time compute represents a major milestone toward Artificial General Intelligence (AGI), moving beyond simple pattern matching to true synthetic reasoning."
      ],
      ar: [
        "أعلنت شركة أوبن أيه أي رسمياً عن نموذج التفكير المنطقي الجديد الملقب بـ 'ستروبري' (o1)، والمصمم للتوقف والتفكير المنهجي المنظم عبر خطوات منطقية متسلسلة قبل توليد الإجابات.",
        "على عكس النماذج التقليدية التي تخرج النصوص فوراً كلمة بكلمة، يستخدم هذا النموذج معالجة متقدمة لسلسلة الأفكار أثناء زمن الاستدلال. يتيح ذلك للنموذج تصحيح المعادلات الرياضية وإصلاح أخطاء البرمجيات بنفسه.",
        "في اختبارات القياس الأولى على مسابقات البرمجة التنافسية وأولمبياد الرياضيات، حقق النموذج نتاجات أعلى بـ 35% من كافة النماذج الفائقة السابقة.",
        "ويرى المحللون التقنيون أن هذا التحول الهندسي نحو الحوسبة المكثفة أثناء وقت الاستدلال يمثل محطة فارقة نحو الذكاء الاصطناعي العام (AGI)."
      ]
    },
    category: 'Artificial Intelligence',
    categoryColor: 'text-sky-500 dark:text-sky-400',
    badge: { en: 'Breaking AI', ar: 'عاجل تقني' },
    author: {
      name: 'Dr. Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role: { en: 'Chief AI Analyst', ar: 'كبير محللي الذكاء الاصطناعي' }
    },
    publishedAt: { en: '4 mins ago', ar: 'منذ 4 دقائق' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    isBreaking: true,
    viewsCount: 14200,
    likesCount: 1890,
    commentsCount: 342,
    keyTakeaways: {
      en: [
        "Uses inference-time compute to pause and deliberate before answering.",
        "Scored in 89th percentile on Codeforces competitive programming tests.",
        "Drastically reduces hallucinations in complex math and code synthesis."
      ],
      ar: [
        "يعتمد على الحوسبة عند التوليد للتأمل والمراجعة قبل إعطاء الإجابة.",
        "حققت نتائج في أعلى 89% في اختبارات البرمجة المعقدة.",
        "يقلل بشكل هائل من حالات التوهّم في الحسابات والتكواد البرمجية."
      ]
    }
  },
  {
    id: 'google-quantum-qubit',
    title: {
      en: "Google Quantum AI Demonstrates Fault-Tolerant Logical Qubits Below Error Threshold",
      ar: "جوجل للذكاء الاصطناعي الكمومي تحقق كيوبتات منطقية مقاومة للأخطاء تحت العتبة الحرجة"
    },
    summary: {
      en: "Achieving quantum error correction threshold marks a pivotal shift from noisy experimental systems to scalable quantum computation.",
      ar: "يمثل تحقيق عتبة تصحيح الأخطاء الكمومية تحولاً محتورياً من الأنظمة التجريبية الضوضائية إلى الحوسبة الكمومية القابلة للتوسع."
    },
    content: {
      en: [
        "Google's Quantum AI laboratory announced a landmark experimental result: scaling logical qubits reduces error rate exponentially, satisfying the long-sought threshold theorem.",
        "By interleaving physical qubits with error-detecting syndromes across a 2D surface code lattice, the Sycamore processor suppressed quantum noise during sustained calculations.",
        "This achievement opens the door to practical quantum simulation of complex molecular catalysts and material science within the decade."
      ],
      ar: [
        "أعلن مختبر الذكاء الاصطناعي الكمومي لدى جوجل عن نتيجة تجريبية تاريخية: زيادة عدد الكيوبتات المنطقية يقلل معدل الخطأ بشكل أسّي.",
        "عبر توزيع الكيوبتات الفيزيائية مع مصفوفات اكتشاف الأخطاء عبر شبكة سطحية ثنائية الأبعاد، نجح معالج 'سيكامور' في كبح الضوضاء الكمومية.",
        "يفتح هذا الإنجاز الباب أمام عمليات المحاكاة الكمومية العملية للمركبات الجزيئية والمعادن المتقدمة خلال هذا العقد."
      ]
    },
    category: 'Artificial Intelligence',
    categoryColor: 'text-sky-500 dark:text-sky-400',
    badge: { en: 'Quantum Breakthrough', ar: 'إنجاز كمومي' },
    author: {
      name: 'Dr. Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role: { en: 'Chief AI Analyst', ar: 'كبير محللي الذكاء الاصطناعي' }
    },
    publishedAt: { en: '2 hours ago', ar: 'منذ ساعتين' },
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600',
    viewsCount: 11400,
    likesCount: 1560,
    commentsCount: 290,
    keyTakeaways: {
      en: [
        "Surface code error correction achieved below noise threshold.",
        "Exponential reduction in phase flip errors as lattice scales.",
        "Key step toward industrial-scale quantum chemical modeling."
      ],
      ar: [
        "تصحيح الأخطاء السطحية تحقق تحت العتبة الحرجة للضوضاء.",
        "انخفاض أسّي في أخطاء انقلابات الطور مع زيادة حجم المصفوفة.",
        "خطوة حاسمة نحو النمذجة الكيميائية الكمومية الصناعية."
      ]
    }
  },
  {
    id: 'figure-02-humanoid',
    title: {
      en: "Figure 02 Humanoid Robots Begin Autonomous Assembly Tasks in Automotive Plants",
      ar: "روبوتات Figure 02 البشرية تبدأ مهام التجميع الذاتي في مصانع السيارات"
    },
    summary: {
      en: "Equipped with tactile sensors and neural motor policies, humanoid workers handle intricate wire harness assembly without human assistance.",
      ar: "مزودة بحساسات لمس وسياسات عصبية حرشية، تقوم الروبوتات البشرية بتجميع شبكات الأسلاك المعقدة دون مساعدة بشرية."
    },
    content: {
      en: [
        "Humanoid robotics startup Figure has announced successful deployment of its second-generation robot, Figure 02, inside commercial manufacturing lines.",
        "Featuring 16 degrees of freedom per hand with integrated tactile force sensing, the robot processes camera feeds locally via onboard neural vision processing.",
        "Over 10,000 autonomous cycles have been recorded with zero safety incidents, executing sub-millimeter precision placement."
      ],
      ar: [
        "أعلنت شركة Figure الواعدة عن النشر الناجح للجيل الثاني من روبوتاتها البشرية Figure 02 داخل خطوط الإنتاج التجاري.",
        "بيدين تتمتعان بـ 16 درجة حرية ومزودتين بأجهزة استشعار لمسية، يعالج الروبوت خلاصات الكاميرات محلياً عبر معالج رؤية عصبي onboard.",
        "تم تسجيل أكثر من 10,000 دورة عمل مستقلة دون أي حوادث سلامة وبدقة عالية جداً."
      ]
    },
    category: 'Artificial Intelligence',
    categoryColor: 'text-amber-500 dark:text-amber-400',
    badge: { en: 'Robotics', ar: 'روبوتات' },
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      role: { en: 'Senior Hardware Editor', ar: 'محرر العتاد والأجهزة' }
    },
    publishedAt: { en: '5 hours ago', ar: 'منذ 5 ساعات' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
    viewsCount: 8900,
    likesCount: 1100,
    commentsCount: 145,
    keyTakeaways: {
      en: [
        "Local neural vision policy runs on low-power edge TPU.",
        "16-DOF robotic hands handle flexible wire harnesses.",
        "Full 20-hour operational battery shift."
      ],
      ar: [
        "سياسات الرؤية العصبية تعمل محلياً على شريحة Edge TPU منخفضة الطاقة.",
        "أيدٍ متعددة المفاصل للتعامل مع الأسلاك المرنة.",
        "بطارية تشغيل تدوم لوردية كاملة مدتها 20 ساعة."
      ]
    }
  },
  {
    id: 'claude-3-5-sonnet-agents',
    title: {
      en: "Anthropic Releases Computer Use Capability for Claude 3.5 Sonnet Agents",
      ar: "أنثروبيك تطلق ميزة 'استخدام الكمبيوتر' لوكلاء نموذج Claude 3.5 Sonnet"
    },
    summary: {
      en: "AI models can now directly view screens, move cursors, click buttons, and fill forms across desktop operating systems.",
      ar: "أصبح بإمكان نماذج الذكاء الاصطناعي الآن رؤية الشاشة مباشرة، تحريك المؤشر، النقر على الأزرار وتعبئة الاستمارات عبر أنظمة التشغيل."
    },
    content: {
      en: [
        "Anthropic has launched an experimental public beta enabling Claude 3.5 Sonnet to interact directly with graphical desktop software.",
        "By analyzing screenshot inputs, translating coordinates, and sending keystrokes, the AI agent can fill spreadsheets, execute multi-app administrative workflows, and write code visually.",
        "Developers and enterprise benchmarkers report major productivity gains in automated QA testing and data migration tasks."
      ],
      ar: [
        "أطلقت شركة أنثروبيك نسخة تجريبية عامة تمكّن نموذج Claude 3.5 Sonnet من التفاعل المباشر مع برامج سطح المكتب الرسومية.",
        "من خلال تحليلات لقطات الشاشة وترجمة الإحداثيات، يستطيع وكيل الذكاء الاصطناعي تعبئة جداول البيانات وإتمام أتمتة المهام المعقدة.",
        "أفاد المطورون بإنتاجية مضاعفة في عمليات اختبار جودة البرمجيات ونقل البيانات."
      ]
    },
    category: 'Artificial Intelligence',
    categoryColor: 'text-sky-500 dark:text-sky-400',
    badge: { en: 'AI Automation', ar: 'أتمتة ذكية' },
    author: {
      name: 'Dr. Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role: { en: 'Chief AI Analyst', ar: 'كبير محللي الذكاء الاصطناعي' }
    },
    publishedAt: { en: '8 hours ago', ar: 'منذ 8 ساعات' },
    readTime: { en: '3 min read', ar: '3 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
    viewsCount: 16500,
    likesCount: 2210,
    commentsCount: 310,
    keyTakeaways: {
      en: [
        "AI can control mouse, keyboard, and web browsers autonomously.",
        "Drastic speedup for administrative data workflows.",
        "Safety guardrails implemented against unintended actions."
      ],
      ar: [
        "الذكاء الاصطناعي قادر على التكم بفأرة ولوحة المفاتيح والمتصفح بنفسه.",
        "تسريع هائل لمهام الإدخال ونقل البيانات المعقدة.",
        "إجراءات أمان صارمة لمنع السلوكيات غير المقصودة."
      ]
    }
  },

  // --- HARDWARE CATEGORY ---
  {
    id: 'nvidia-rtx-5090',
    title: {
      en: "Nvidia RTX 5090 Leaks Point to Massive Performance Jump with Blackwell Architecture",
      ar: "تسريبات بطاقات Nvidia RTX 5090 تشير لقفزة أداء هائلة بمعمارية بلاكويل"
    },
    summary: {
      en: "Architectural schematics suggest 24,576 CUDA cores and GDDR7 memory bandwidth exceeding 1.7 TB/s for the upcoming flagship GPU.",
      ar: "مخططات هندسية تعكس وجود 24,576 نوات CUDA ونطاق ذاكرة GDDR7 يتجاوز 1.7 تيرابايت/ثانية للبطاقة الرائدة القادمة."
    },
    content: {
      en: [
        "Leaked documentation from board partner supply chains suggests Nvidia is preparing to launch its next-generation GeForce RTX 5090 based on the Blackwell architecture.",
        "The flagship graphics card is reported to feature 32GB of ultra-fast GDDR7 memory running on a 512-bit bus, delivering memory bandwidth in excess of 1.7 TB/s.",
        "Early ray-tracing simulations indicate a 50% to 70% generational uplift over the RTX 4090, driven in part by new neural rendering accelerators and DLSS 4 frame generation advancements."
      ],
      ar: [
        "تشير الوثائق المسرّبة من سلاسل التوريد إلى أن شركة إنفيديا تستعد لإطلاق بطاقتها الرائدة RTX 5090 القائمة على معمارية بلاكويل.",
        "من المتوقع أن تأتي البطاقة بذاكرة فائقة السرعة سعة 32 جيجابايت من نوع GDDR7 مع ناقل 512-بت بنطاق نقل يتجاوز 1.7 تيرابايت/ثانية.",
        "تظهر اختبارات تتبع الأشعة المبدئية تفوقاً بنسبة 50% إلى 70% مقارنة بالجيل السابق RTX 4090."
      ]
    },
    category: 'Hardware',
    categoryColor: 'text-indigo-500 dark:text-indigo-400',
    badge: { en: 'Hardware Leak', ar: 'تسريبات عتاد' },
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      role: { en: 'Senior Hardware Editor', ar: 'محرر العتاد والأجهزة' }
    },
    publishedAt: { en: '1 hour ago', ar: 'منذ ساعة واحدة' },
    readTime: { en: '3 min read', ar: '3 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
    viewsCount: 19800,
    likesCount: 2240,
    commentsCount: 415,
    keyTakeaways: {
      en: [
        "32GB GDDR7 VRAM with 512-bit memory bus.",
        "Estimated 60% boost in path-tracing performance.",
        "Expected official announcement at upcoming tech expo."
      ],
      ar: [
        "ذاكرة VRAM بسعة 32 جيجابايت من نوع GDDR7 بناقل 512-بت.",
        "زيادة تتجاوز 60% في أداء تتبع المسارات الضوئية.",
        "الإعلان الرسمي المتوقع في المعرض التقني القادم."
      ]
    }
  },
  {
    id: 'apple-m4-max-silicon',
    title: {
      en: "Apple M4 Max Chip Benchmarks Crush Desktop Workstations in Single-Core Speed",
      ar: "اختبارات شريحة Apple M4 Max تتفوق على محطات العمل المكتبي في سرعة النواة الواحدة"
    },
    summary: {
      en: "3nm N3E fabrication combined with hardware-accelerated ray tracing brings server-grade compute to thin laptop form factors.",
      ar: "تصنيع بدقة 3 نانومتر N3E مع تسريع تتبع الأشعة العتادي يمنح المحمول أداء يساوي السيرفرات."
    },
    content: {
      en: [
        "Geekbench 6 scores for Apple's newly announced M4 Max processor reveal single-core metrics exceeding 4,000 points—the highest ever recorded on consumer silicon.",
        "With 16 CPU cores, 40 GPU cores, and a unified memory bandwidth of 546 GB/s, the processor handles local 70B parameter LLM execution and 8K ProRes video renders seamlessly.",
        "Thermal efficiency testing shows maximum power draw under sustained multi-threaded workload capped at just 85W."
      ],
      ar: [
        "كشفت نتائج اختبارات Geekbench 6 لشريحة M4 Max الجديدة من أبل عن كسر حجز 4,000 نقطة في النواة الواحدة—وهو رقم قياسي غير مسبوق في المعالجات الاستهلاكية.",
        "تتميز بـ 16 نواة معالجة و40 نواة رسومية مع نطاق ذاكرة موحدة تصل إلى 546 جيجابايت/ثانية لتشغيل النماذج الضخمة وتحرير فيديوهات 8K.",
        "أظهرت الاختبارات كفاءة حرارية عالية باستهلاك لا يتجاوز 85 واط تحت أقصى ضغط."
      ]
    },
    category: 'Hardware',
    categoryColor: 'text-indigo-500 dark:text-indigo-400',
    badge: { en: 'Chipset Benchmark', ar: 'اختبارات معالجات' },
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      role: { en: 'Senior Hardware Editor', ar: 'محرر العتاد والأجهزة' }
    },
    publishedAt: { en: '3 hours ago', ar: 'منذ 3 ساعات' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    viewsCount: 14300,
    likesCount: 1720,
    commentsCount: 289,
    keyTakeaways: {
      en: [
        "Single-core score surpasses 4,000 on Geekbench 6.",
        "546 GB/s unified memory bandwidth for local AI models.",
        "Low power draw under peak multi-threaded loads."
      ],
      ar: [
        "تجاوز أداء النواة الواحدة 4000 نقطة على Geekbench 6.",
        "ذاكرة موحدة بسرعة 546 جيجابايت/ثانية لنماذج الذكاء الاصطناعي المحلي.",
        "استهلاك منخفض جداً للطاقة أثناء الضغط العالي."
      ]
    }
  },
  {
    id: 'tsmc-2nm-production',
    title: {
      en: "TSMC Begins Trial Production of 2nm N2 Gate-All-Around Nanosheet Chips",
      ar: "TSMC تبدأ الإنتاج التجريبي لشرائح 2 نانومتر بتقنية النانو شيت النفقية"
    },
    summary: {
      en: "Next-gen transistor node introduces GAA FET technology, offering 15% speed enhancement and 30% power reduction.",
      ar: "الجيل الجديد من الترانزستورات يقدم تقنية GAA FET لزيادة السرعة بـ 15% وتخفيض استهلاك الطاقة بـ 30%."
    },
    content: {
      en: [
        "Taiwan Semiconductor Manufacturing Co. (TSMC) has officially transitioned its Baoshan Fab 20 to risk production for its upcoming 2nm (N2) node.",
        "Moving away from traditional FinFET, the N2 process incorporates Gate-All-Around (GAA) nanosheet architecture, improving electrostatic control and reducing leakage current.",
        "Mass commercial volume production is slated for late 2025, with Apple and Nvidia expected to be the anchor launch customers."
      ],
      ar: [
        "بدأت شركة TSMC تايوان لصناعة أشباه الموصلات التشغيل التجريبي لمصنعها الجديد لشرائح بدقة 2 نانومتر (N2).",
        "تتخلى المعمارية الجديدة عن FinFET لصالح GAA نانو شيت، مما يعزز التحكم الكهرومغناطيسي ويقلل التسريب الكهربائي.",
        "من المقرر بدء الإنتاج التجاري الموسّع بنهاية 2025 مع كبار العملاء أبل وإنفيديا."
      ]
    },
    category: 'Hardware',
    categoryColor: 'text-indigo-500 dark:text-indigo-400',
    badge: { en: 'Semiconductors', ar: 'أشباه الموصلات' },
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      role: { en: 'Senior Hardware Editor', ar: 'محرر العتاد والأجهزة' }
    },
    publishedAt: { en: '6 hours ago', ar: 'منذ 6 ساعات' },
    readTime: { en: '3 min read', ar: '3 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600',
    viewsCount: 11200,
    likesCount: 1390,
    commentsCount: 198,
    keyTakeaways: {
      en: [
        "GAA nanosheet architecture replaces FinFET.",
        "15% frequency increase at same power envelope.",
        "Commercial rollout set for flagship 2026 devices."
      ],
      ar: [
        "تقنية GAA نانو شيت تحل محل تقنية FinFET.",
        "زيادة التردد بـ 15% بنفس مستوى استهلاك الطاقة.",
        "بدء الوصول لأجهزة 2026 الرائدة."
      ]
    }
  },

  // --- SOFTWARE CATEGORY ---
  {
    id: 'react-19-server-components',
    title: {
      en: "React 19 Official Release: Server Actions, Asset Loading & Simplified Hooks",
      ar: "الإطلاق الرسمي لـ React 19: إجراءات الخادم، تحميل الموارد وتبسيط الخطاطيف"
    },
    summary: {
      en: "The Meta web engine team ships built-in support for Actions, async transition states, and automatic memoization.",
      ar: "فريق تطوير محرك الويب لدى ميتا يطلق دعماً مدمجاً للإجراءات، حالات الانتقال اللاتزامنية والتخزين المؤقت التلقائي."
    },
    content: {
      en: [
        "React 19 has reached general availability, marking one of the most substantial architectural overhauls in the open-source library's decade-long history.",
        "Features like `useActionState` and `useFormStatus` eliminate boilerplate code when handling asynchronous mutation flows, optimistic updates, and server actions.",
        "Furthermore, the React Compiler (forgetting `useMemo` and `useCallback`) is now active by default in supporting bundlers, automatically optimizing component re-render cascades."
      ],
      ar: [
        "أصبح React 19 متاحاً للعموم رسمياً، مما يمثل واحداً من أكبر التحديثات المعمارية في تاريخ المكتبة المفتوحة المصدر.",
        "تزيل الخطاطيف الجديدة مثل `useActionState` و `useFormStatus` الكود المتكرر عند التعامل مع التغييرات اللاتزامنية وتحديثات النماذج.",
        "إضافة إلى ذلك، أصبح مترجم React التلقائي مفعلاً لضبط إعادة صياغة المكونات دون الحاجة للتخزين المؤقت اليدوي."
      ]
    },
    category: 'Software',
    categoryColor: 'text-cyan-500 dark:text-cyan-400',
    badge: { en: 'Major Release', ar: 'إصدار رئيسي' },
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      role: { en: 'Lead Software Architect', ar: 'كبير مهندسي البرمجيات' }
    },
    publishedAt: { en: '2 hours ago', ar: 'منذ ساعتين' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600',
    viewsCount: 18400,
    likesCount: 2890,
    commentsCount: 395,
    keyTakeaways: {
      en: [
        "First-class native support for Server Actions & Form Mutations.",
        "Automatic memoization compiler minimizes re-renders.",
        "Improved document head metadata & asset preloading."
      ],
      ar: [
        "دعم مباشر لإجراءات الخادم ونماذج البيانات.",
        "مترجم حفظ مؤقت تلقائي يقلل عمليات إعادة الرسم.",
        "تحسين تحميل الموارد وعناوين الصفحات."
      ]
    }
  },
  {
    id: 'python-3-13-no-gil',
    title: {
      en: "Python 3.13 Introduces Experimental Free-Threaded No-GIL Mode and JIT Compiler",
      ar: "باثيون 3.13 تقدم نمط تعددي الخيوط الحقيقي بدون GIL ومترجم JIT فائق"
    },
    summary: {
      en: "Removing the Global Interpreter Lock unlocks true multi-core CPU parallelism for data science and AI code bases.",
      ar: "إلغاء قفل المفسر العام GIL يحرر القدرة المعالجية كاملة لتعدد الأنوية في علوم البيانات والذكاء الاصطناعي."
    },
    content: {
      en: [
        "Python 3.13 has introduced an experimental build flag that disables the Global Interpreter Lock (GIL), enabling multi-threaded Python programs to execute in parallel across multiple CPU cores.",
        "Additionally, a copy-and-patch JIT compiler converts Python bytecode directly into machine instructions, delivering a 15-25% execution speed improvement on compute-bound loops.",
        "Core developers describe this release as the foundation for the next decade of high-performance Python application development."
      ],
      ar: [
        "قدمت نسخة بايثون 3.13 نمط بناء تجريبي يلغي قفل المفسر العام (GIL)، مما يتيح للبرامج متعددة الخيوط العمل بالتوازي الفعلي عبر أنوية معالج متعددة.",
        "إضافة لذلك، يحول مترجم JIT أكواد بايثون مباشرة لإرشادات الآلة مما يزيد سرعة التنفيذ بنسبة 15-25%.",
        "يعتبر المطورون هذا الإصدار حجر الأساس لعقد جديد من تطبيقات بايثون عالية الأداء."
      ]
    },
    category: 'Software',
    categoryColor: 'text-cyan-500 dark:text-cyan-400',
    badge: { en: 'Programming', ar: 'لغات البرمجة' },
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      role: { en: 'Lead Software Architect', ar: 'كبير مهندسي البرمجيات' }
    },
    publishedAt: { en: '5 hours ago', ar: 'منذ 5 ساعات' },
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600',
    viewsCount: 12900,
    likesCount: 1840,
    commentsCount: 210,
    keyTakeaways: {
      en: [
        "No-GIL build allows true CPU parallelism across threads.",
        "Copy-and-patch JIT speeds up heavy numeric loops.",
        "Full backward compatibility maintained for existing packages."
      ],
      ar: [
        "نمط بدون GIL يتيح بالتوازي الفعلي للخيوط البرمجية.",
        "مترجم JIT يسرّع الحلقات التكرارية الحسابية.",
        "توافقية كاملة مع الحزم والكتب القديمة."
      ]
    }
  },

  // --- CYBERSECURITY CATEGORY ---
  {
    id: 'chromium-zero-day',
    title: {
      en: "New Zero-Day Vulnerability Found in Chromium Engine Affects Major Browsers",
      ar: "اكتشاف ثغرة يوم الصفر في محرك Chromium تؤثر على معظم المتصفحات"
    },
    summary: {
      en: "Security researchers urge immediate updates for Chrome, Edge, and Brave following active exploitation in the wild.",
      ar: "باحثون أمنيون يحثون على التحديث الفوري لمتصفحات كروم وإيدج وبريف بعد استغلال الثغرة فعلياً."
    },
    content: {
      en: [
        "A high-severity zero-day flaw in V8 JavaScript engine has been discovered, prompting emergency security patches across all major Chromium-based web browsers.",
        "The vulnerability (CVE-2026-9042) allows remote attackers to execute arbitrary code via specially crafted HTML pages.",
        "Major browser vendors have already released patch updates. Users are strongly advised to verify their browser version and restart immediately."
      ],
      ar: [
        "تم اكتشاف ثغرة يوم صفر عالية الخطورة في محرك V8 لجافاسكريبت، مما استدعى إصدار تحديثات أمنية طارئة لكافة متصفحات كروم وإيدج.",
        "تتيح الثغرة (CVE-2026-9042) للمهاجمين تنفيذ أكواد خبيثة عن بعد عبر صفحات HTML خبيثة.",
        "أطلقت الشركات التحديثات، ويُنصح المستخدمون بتحديث متصفحاتهم وإعادة تشغيلها فوراً."
      ]
    },
    category: 'Cybersecurity',
    categoryColor: 'text-emerald-500 dark:text-emerald-400',
    badge: { en: 'Security Alert', ar: 'تنبيه أمني' },
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      role: { en: 'Cybersecurity Lead', ar: 'قائد الأمن السيبراني' }
    },
    publishedAt: { en: '4 hours ago', ar: 'منذ 4 ساعات' },
    readTime: { en: '2 min read', ar: 'دقيقتان قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
    viewsCount: 15300,
    likesCount: 980,
    commentsCount: 188,
    keyTakeaways: {
      en: [
        "V8 JavaScript engine type-confusion bug patched.",
        "Patch deployed to Chrome v128+ and Edge v128+.",
        "No user action required other than clicking Update & Relaunch."
      ],
      ar: [
        "إصلاح خلل الارتباك بالنوع في محرك جافاسكريبت V8.",
        "التحديث متاح حالياً لنسخ كروم و إيدج.",
        "يتطلب الأمر فقط الضغط على إعاده تشغيل المتصفح."
      ]
    }
  },
  {
    id: 'nist-post-quantum-standards',
    title: {
      en: "NIST Finalizes World's First Post-Quantum Cryptography Encryption Standards",
      ar: "معهد NIST يعتمد أول معايير تشفير بالمركبات الحجمية المقاومة للحوسبة الكمومية"
    },
    summary: {
      en: "Governments and banking infrastructure begin transitioning from RSA/ECC to lattice-based post-quantum algorithms.",
      ar: "الحكومات والمؤسسات المصرفية تبدأ الانتقال من خوارزميات RSA إلى خوارزميات التشفير الشبكية المقاومة للكموم."
    },
    content: {
      en: [
        "The U.S. National Institute of Standards and Technology (NIST) has released its official algorithms for post-quantum encryption (ML-KEM and ML-DSA).",
        "Designed to withstand future decryption attacks from fault-tolerant quantum supercomputers, these lattice-based algorithms secure web traffic, digital signatures, and encrypted communication.",
        "Global cybersecurity agencies strongly recommend technology leaders migrate key exchange mechanisms before 2028."
      ],
      ar: [
        "أصدر المعهد الوطني الأمريكي للمعايير والتقنية (NIST) الخوارزميات الرسمية لتشفير ما بعد عصر الكموم (ML-KEM و ML-DSA).",
        "صُممت هذه الخوارزميات لتصمد أمام هجمات التفكيك الكمومي المستقبلية وتأمين حركة المرور الإلكترونية والتوقيعات الرقمية.",
        "توصي الوكالات الأمنية قادة التكنولوجيا ببدء نقل مفاتيح التشفير قبل عام 2028."
      ]
    },
    category: 'Cybersecurity',
    categoryColor: 'text-emerald-500 dark:text-emerald-400',
    badge: { en: 'Crypto Standards', ar: 'معايير التشفير' },
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      role: { en: 'Cybersecurity Lead', ar: 'قائد الأمن السيبراني' }
    },
    publishedAt: { en: '7 hours ago', ar: 'منذ 7 ساعات' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600',
    viewsCount: 10400,
    likesCount: 1420,
    commentsCount: 165,
    keyTakeaways: {
      en: [
        "Lattice-based algorithms protect against future quantum attacks.",
        "Replaces traditional RSA and Elliptic Curve Cryptography.",
        "Migration guidelines published for enterprise TLS networks."
      ],
      ar: [
        "خوارزميات شبكية تحمي البيانات من الهجمات الكمومية القادمة.",
        "تستبدل معايير RSA القديمة وتشفير المنحنيات البيضاوية.",
        "نشر خطة تنفيذية للمؤسسات والشركات البرمجية."
      ]
    }
  },

  // --- GAMING CATEGORY ---
  {
    id: 'nintendo-switch-2',
    title: {
      en: "Nintendo Switch 2: Everything We Know About Specs, Backward Compatibility & Pricing",
      ar: "نينتندو سويتش 2: كل ما نعرفه عن المواصفات، التوافق العكسي والسعر"
    },
    summary: {
      en: "Developer kits confirm custom Nvidia DLSS SoC, dual-screen magnetic Joy-Cons, and 1080p OLED display panel.",
      ar: "حزم المطورين تؤكد معالج شريحة نيفيديا المخصص مع تقنية DLSS ومقابض مغناطيسية وشاشة OLED بدقة 1080p."
    },
    content: {
      en: [
        "Details surrounding Nintendo's successor to the ultra-popular Switch handheld console continue to crystallize.",
        "Equipped with a custom Nvidia T239 chip supporting DLSS super-resolution and HDR, the Switch 2 aims to target 60 FPS gameplay at 1080p handheld and up to 4K docked.",
        "Crucially, sources confirm full digital and physical backward compatibility for original Nintendo Switch game library."
      ],
      ar: [
        "تتوالى التفاصيل المؤكدة حول الجهاز المنزلي المحمول الجديد الخالف لجهاز نينتندو سويتش الشهير.",
        "مزود بشريحة نيفيديا T239 المخصصة الداعمة لدقة DLSS وتقنية HDR، بهدف تشغيل الألعاب بسرعة 60 إطاراً بدقة 1080p محمولاً ودقة 4K موصولاً.",
        "أكدت المصادر التوافق العكسي التام للتشغيل المباشر لألعاب السويتش الحالي سواء الرقمية أو الأقراص."
      ]
    },
    category: 'Gaming',
    categoryColor: 'text-purple-500 dark:text-purple-400',
    badge: { en: 'Console News', ar: 'أخبار الأجهزة' },
    author: {
      name: 'Lucas Wright',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      role: { en: 'Gaming Desk Lead', ar: 'رئيس قسم الألعاب' }
    },
    publishedAt: { en: '6 hours ago', ar: 'منذ 6 ساعات' },
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
    viewsCount: 22100,
    likesCount: 3410,
    commentsCount: 520,
    keyTakeaways: {
      en: [
        "Custom Nvidia SoC with DLSS frame reconstruction.",
        "100% backward compatible with current Switch physical cards.",
        "Magnetic latch mechanism for new Joy-Con controllers."
      ],
      ar: [
        "معالج نيفيديا مخصص يدعم اعاده بناء الإطارات DLSS.",
        "توافق عكسي 100% مع بطاقات الألعاب الحالية.",
        "مقابض جوي-كون جديدة بمنافذ إغلاق مغناطيسية."
      ]
    }
  },
  {
    id: 'unreal-engine-5-5',
    title: {
      en: "Epic Games Launches Unreal Engine 5.5 Featuring MegaLights and Real-Time Path Tracing",
      ar: "إبيك جيمز تطلق محرك Unreal Engine 5.5 بميزات إضاءة MegaLights وتتبع المسارات الفوري"
    },
    summary: {
      en: "New rendering engine allows games to render thousands of dynamic shadow-casting lights simultaneously at 60 FPS.",
      ar: "محرك الرسوميات الجديد يتيح للألعاب معالجة آلاف الأضواء المتحركة ذات الظلال في وقت واحد بسرعة 60 إطاراً."
    },
    content: {
      en: [
        "Epic Games has released Unreal Engine 5.5, showcasing MegaLights—a breakthrough lighting technology dubbed 'Nanite for lights'.",
        "Game artists can now place thousands of movable, shadowed light sources in a single scene without suffering traditional draw call bottlenecks.",
        "The engine update also enhances MetaHuman animator tools and improves mobile hardware scalability for mobile game developers."
      ],
      ar: [
        "أطلقت إبيك جيمز محرك Unreal Engine 5.5 المحدث مع ميزة MegaLights - وهي تقنية ثورية للإضاءة توصف بـ 'نانيت للأضواء'.",
        "يمكن لمصممي الألعاب وضع آلاف المصادر الضوئية المظللة في المشهد الواحد دون بطء في أداء الرسوميات.",
        "كما يجلب المحرك تحسينات لأدوات تحريك الوجوه MetaHuman وزيادة كفاءة الألعاب على الهواتف."
      ]
    },
    category: 'Gaming',
    categoryColor: 'text-purple-500 dark:text-purple-400',
    badge: { en: 'Game Dev', ar: 'تطوير الألعاب' },
    author: {
      name: 'Lucas Wright',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      role: { en: 'Gaming Desk Lead', ar: 'رئيس قسم الألعاب' }
    },
    publishedAt: { en: '9 hours ago', ar: 'منذ 9 ساعات' },
    readTime: { en: '4 min read', ar: '4 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600',
    viewsCount: 16200,
    likesCount: 2100,
    commentsCount: 275,
    keyTakeaways: {
      en: [
        "MegaLights supports thousands of shadowed lights in real time.",
        "Improved Nanite geometry streaming efficiency.",
        "Production-ready path tracing for high-end cinematic titles."
      ],
      ar: [
        "تقنية MegaLights تدعم آلاف الأضواء المظللة فورياً.",
        "تحسين معالجة التدفق الهندسي بتقنية Nanite.",
        "تتبع مسارات الضوء الفوري المخصص للألعاب السينمائية."
      ]
    }
  },

  // --- SPACE TECH CATEGORY ---
  {
    id: 'spacex-starship-flight-test',
    title: {
      en: "SpaceX Prepares Starship Flight Test with In-Space Propellant Transfer & Mechazilla Catch",
      ar: "سبايس إكس تستعد لاختبار مركبة ستاربايس بالنقل الفضائي للوقود والالتقاط بذراع الميكازيلا"
    },
    summary: {
      en: "The massive 120-meter rocket system aims for complete orbital refuel simulation ahead of NASA's Artemis III lunar mission.",
      ar: "يهدف نظام الصاروخ البالغ طوله 120 متراً لمحاكاة تزويد الوقود المداري قبل مهمة أرتيميس 3 للقمر."
    },
    content: {
      en: [
        "SpaceX technicians at Starbase, Boca Chica have stacked Integrated Flight Test 6 on the orbital launch mount.",
        "Key objectives include reigniting a Raptor engine in zero-gravity vacuum and performing a targeted booster catch using the launch tower's chopsticks arm.",
        "Successful propellant transfer tests will validate orbital refueling architecture required for human lunar landings."
      ],
      ar: [
        "قام مهندسو سبايس إكس في قاعدة ستاربايس بتثبيت النموذج التجريبي السادس على منصة الإطلاق المدارية.",
        "تتضمن الأهداف الرئيسية إعادة تشغيل محرك رابتور في الفراغ وتنفيذ التقاط الدافع ببرج الإطلاق.",
        "سوف يثبت نجاح نقل الوقود الفضائي إمكانية العودة المأهولة لسطح القمر."
      ]
    },
    category: 'Space Tech',
    categoryColor: 'text-rose-500 dark:text-rose-400',
    badge: { en: 'Space Launch', ar: 'إطلاق فضائي' },
    author: {
      name: 'Dr. Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      role: { en: 'Chief AI Analyst', ar: 'كبير محللي الذكاء الاصطناعي' }
    },
    publishedAt: { en: '10 hours ago', ar: 'منذ 10 ساعات' },
    readTime: { en: '5 min read', ar: '5 دقائق قراءة' },
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600',
    viewsCount: 28900,
    likesCount: 4120,
    commentsCount: 680,
    keyTakeaways: {
      en: [
        "Orbital propellant transfer test between two Starship vehicles.",
        "Targeted booster catch attempt by launch chopsticks.",
        "Paves the way for Artemis III crewed lunar landing."
      ],
      ar: [
        "اختبار نقل الوقود المداري بين مركبين من نوع ستارشيب.",
        "محاولة التقاط الصاروخ الدافع بواسطة الذراعين البرجية.",
        "يمهّد الطريق لمهمة أرتيميس 3 المأهولة لسطح القمر."
      ]
    }
  }
];

export interface AIModelBenchmark {
  modelName: string;
  creator: string;
  reasoningScore: number;
  codeScore: number;
  mathScore: number;
  latencyMs: number;
  tag: LocalizedString;
}

export const AI_BENCHMARKS: AIModelBenchmark[] = [
  { modelName: 'OpenAI o1 (Strawberry)', creator: 'OpenAI', reasoningScore: 94, codeScore: 92, mathScore: 96, latencyMs: 1400, tag: { en: 'Leader', ar: 'المتصدر' } },
  { modelName: 'Gemini 2.5 Flash', creator: 'Google', reasoningScore: 91, codeScore: 95, mathScore: 93, latencyMs: 320, tag: { en: 'Ultra-Fast', ar: 'فائق السرعة' } },
  { modelName: 'Claude 3.5 Sonnet', creator: 'Anthropic', reasoningScore: 89, codeScore: 94, mathScore: 88, latencyMs: 850, tag: { en: 'Code Lead', ar: 'رواد البرمجة' } },
  { modelName: 'Llama 3.3 70B', creator: 'Meta', reasoningScore: 84, codeScore: 86, mathScore: 82, latencyMs: 410, tag: { en: 'Open Source', ar: 'مفتوح المصدر' } }
];
