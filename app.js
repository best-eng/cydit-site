const LANG_KEY = 'cydit-lang-v2';

const store = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      /* storage unavailable (sandboxed preview) — ignore */
    }
  },
};

const ICON_CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
const ICON_CROSS =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

const svg = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const FEATURE_ICONS = [
  svg('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.6 3.1 3 7 3s7-1.4 7-3V6M5 12v6c0 1.6 3.1 3 7 3s7-1.4 7-3v-6"/>'),
  svg('<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="8" r="2.4"/><circle cx="9" cy="18" r="2.4"/><path d="M8.1 6.7l7.6 1M9 15.7L9 8.4M10.9 16.8l5.4-6.9"/>'),
  svg('<path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z"/>'),
  svg('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8.5 21h7"/>'),
  svg('<path d="M12 3.5l1.7 4.6L18 10l-4.3 1.9L12 16.5l-1.7-4.6L6 10l4.3-1.9z"/><path d="M18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>'),
  svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18"/>'),
];

const USE_ICONS = [
  svg('<path d="M12 3c3.4 1.6 5 5 5 8l-2.8 3H9.8L7 11c0-3 1.6-6.4 5-8z"/><circle cx="12" cy="9.5" r="1.6"/><path d="M9.2 17c-1.6.5-2.7 2-2.7 4 2 0 3.6-1 4.2-2.6M14.8 17c1.6.5 2.7 2 2.7 4-2 0-3.6-1-4.2-2.6"/>'),
  svg('<path d="M4 20l4-1L19 8a2 2 0 0 0-3-3L5 16l-1 4z"/><path d="M14.5 6.5l3 3"/>'),
  svg('<path d="M12 4l10 5-10 5L2 9z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>'),
  svg('<path d="M9 4a4 4 0 0 0-4 4 3.5 3.5 0 0 0-1 6 3.5 3.5 0 0 0 5 3M15 4a4 4 0 0 1 4 4 3.5 3.5 0 0 1 1 6 3.5 3.5 0 0 1-5 3M12 4v16"/>'),
];

const content = {
  links: {
    email: 'hello@cydit.app',
    telegram: 'https://t.me/cydit',
  },
  images: {
    heroMainImage: 'assets/screens/home.png',
    heroSideImage: 'assets/screens/capture.png',
  },
  ru: {
    brandName: 'Cydit',
    nav: [
      { label: 'Продукт', href: '#product' },
      { label: 'Как это работает', href: '#how' },
      { label: 'Сценарии', href: '#use-cases' },
      { label: 'Цены', href: '#pricing' },
      { label: 'Роадмап', href: '#roadmap' },
      { label: 'FAQ', href: '#faq' },
    ],
    signIn: 'Войти',
    ctaPrimary: 'Ранний доступ',
    heroBadge: 'AI-операционная система для мышления',
    heroTitle: 'Преврати разрозненные мысли в систему, которая думает вместе с тобой',
    heroText:
      'Говори или пиши как есть. Cydit ловит каждую мысль и превращает её в смысл, память, планы и следующий шаг — чтобы ничего не терялось, а всё двигалось вперёд.',
    heroPrimary: 'Получить ранний доступ',
    heroSecondary: 'Как это работает',
    signals: ['Голос', 'Долгая память', 'Граф знаний', 'До действия'],
    metrics: [
      { value: 'Голос', label: 'фиксируй со скоростью мысли' },
      { value: 'Живая память', label: 'идеи связываются со временем' },
      { value: 'Авто-порядок', label: 'без папок и ручной сортировки' },
      { value: 'До действия', label: 'каждая мысль становится шагом' },
    ],
    productEyebrow: 'Суть продукта',
    productTitle: 'Не чат. Система мышления.',
    productSub: 'Cydit построен вокруг одной идеи — твои мысли заслуживают большего, чем текстовое поле.',
    manifestoEyebrow: 'Наша идея',
    manifesto: {
      before: 'Твой разум не создан быть картотекой. Cydit даёт каждой мысли ',
      highlight: 'место, где она живёт, связывается',
      after: ' и превращается в действие.',
    },
    bentoEyebrow: 'Возможности',
    bentoTitle: 'Всё, что нужно твоему разуму — в одном месте',
    bento: [
      { title: 'Живой граф знаний', text: 'Каждая мысль становится узлом и связывается с темами, людьми и целями, которые растут со временем.', graph: true },
      { title: 'Голос', text: 'Говори как есть — Cydit мгновенно расшифрует и структурирует.' },
      { title: 'Авто-порядок', text: 'Без папок и тегов. Структура появляется сама.' },
      { title: 'Семантический поиск', text: 'Находи мысли по смыслу, а не по точным словам.' },
      { title: 'Всегда синхронно', text: 'iOS и веб в унисон. Твой разум — везде.' },
    ],
    useEyebrow: 'Сценарии',
    useTitle: 'Создан под то, как ты думаешь',
    cases: [
      { title: 'Основатели и билдеры', text: 'Фиксируй стратегию, идеи и решения — не теряй нить между встречами.' },
      { title: 'Авторы и креаторы', text: 'Превращай вспышки идей в планы, черновики и поисковый архив.' },
      { title: 'Студенты и исследователи', text: 'Связывай источники, лекции и вопросы в один растущий граф знаний.' },
      { title: 'Занятые головы', text: 'Разгрузи память — Cydit помнит, раскладывает и напоминает, а ты в фокусе.' },
    ],
    pricingEyebrow: 'Цены',
    pricingTitle: 'Простые цены на старте',
    pricingSub: 'Начни бесплатно. Апгрейд — когда второй мозг раскроется.',
    pricingNote: 'Цены раннего доступа — финальные тарифы могут измениться.',
    plans: [
      { name: 'Free', price: '0 ₽', period: '/навсегда', tagline: 'Начни фиксировать сегодня.', features: ['Голосовой и текстовый захват', 'Базовая AI-память', 'До 500 мыслей', 'iOS и веб'], cta: 'Начать', featured: false },
      { name: 'Pro', price: '1990 ₽', period: '/мес', tagline: 'Твой полноценный второй мозг.', features: ['Безлимит мыслей', 'Глубокая долгосрочная память', 'Граф знаний и поиск', 'Умные подсказки', 'Приоритетная поддержка'], cta: 'Ранний доступ', featured: true, badge: 'Популярно' },
      { name: 'Team', price: 'Индивид.', period: '', tagline: 'Думайте вместе.', features: ['Всё из Pro', 'Общие пространства', 'Командный граф знаний', 'Админ и SSO', 'Выделенная поддержка'], cta: 'Связаться', featured: false },
    ],
    features: [
      { title: 'Понимает каждую мысль', text: 'AI выделяет категорию, эмоцию, намерение, цель и следующий шаг из всего, что ты фиксируешь.' },
      { title: 'Память, которая связывает', text: 'Каждая мысль соединяется с повторяющимися темами и контекстами, формируя живой граф знаний.' },
      { title: 'Превращает идеи в действие', text: 'Заметки становятся задачами, целями и короткими планами — автоматически, без рутины.' },
      { title: 'Голосовой захват', text: 'Просто говори. Cydit расшифрует, структурирует и запомнит — чтобы ты оставался в потоке.' },
      { title: 'Умные подсказки', text: 'Cydit достаёт нужную память в нужный момент и подсказывает, что делать дальше.' },
      { title: 'Работает везде', text: 'Сегодня — iOS и веб, завтра — AI-платформа. Твой разум синхронизирован со всем.' },
    ],
    flowEyebrow: 'Как это работает',
    flowTitle: 'От сырой мысли до следующего шага',
    flow: [
      { number: '1', label: 'Захват', text: 'Голос или текст' },
      { number: '2', label: 'Понимание', text: 'AI разбирает смысл' },
      { number: '3', label: 'Связи', text: 'Соединяет с памятью' },
      { number: '4', label: 'План', text: 'Становится действием' },
      { number: '5', label: 'Возврат', text: 'Всегда найдётся' },
    ],
    screensEyebrow: 'Реальные экраны',
    screensTitle: 'Интерфейс говорит сам за себя',
    screens: [
      { image: 'assets/screens/home.png', title: 'Главная', alt: 'Главный экран Cydit' },
      { image: 'assets/screens/memory.png', title: 'Память', alt: 'Экран памяти Cydit' },
      { image: 'assets/screens/insights.png', title: 'Инсайты', alt: 'Экран инсайтов Cydit' },
      { image: 'assets/screens/settings.png', title: 'Настройки', alt: 'Экран настроек Cydit' },
    ],
    compareEyebrow: 'Почему Cydit',
    compareTitle: 'Никто даже близко',
    compare: {
      columns: [
        { name: 'Cydit', badge: 'AI OS', highlight: true },
        { name: 'Notion' },
        { name: 'Apple Notes' },
        { name: 'ChatGPT' },
        { name: 'Reflect' },
      ],
      rows: [
        { feature: 'Голосовой ввод', cells: [true, false, true, true, false] },
        { feature: 'Долгосрочная AI-память', cells: [true, false, false, false, false] },
        { feature: 'Понимание контекста', cells: [true, false, false, true, false] },
        { feature: 'Граф знаний', cells: [true, false, false, false, true] },
        { feature: 'Авто-организация', cells: [true, true, false, false, false] },
        { feature: 'Умные подсказки', cells: [true, false, false, true, false] },
        { feature: 'Определение связей', cells: [true, false, false, false, false] },
        { feature: 'AI-инсайты', cells: [true, false, false, false, false] },
      ],
    },
    roadmapEyebrow: 'Роадмап',
    roadmapTitle: 'Что впереди',
    roadmap: [
      { quarter: 'Q2 2026', badge: 'Уже доступно', title: 'Публичная бета', text: 'Голосовой захват, AI-память, базовый граф знаний, приложение для iOS и веба.' },
      { quarter: 'Q3 2026', badge: '', title: 'Движок AI-памяти', text: 'Глубокая долгосрочная память, семантический поиск, определение связей.' },
      { quarter: 'Q4 2026', badge: '', title: 'Граф знаний', text: 'Полный визуальный граф знаний, связи между воспоминаниями, экспорт графа.' },
      { quarter: 'Q1 2027', badge: '', title: 'AI OS платформа', text: 'Полноценная AI-операционная система, интеграции, командные пространства.' },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Отвечаем на вопросы',
    faq: [
      { q: 'Что такое Cydit?', a: 'Cydit — это AI-слой памяти для твоего мышления. Ты фиксируешь мысли голосом или текстом, а он превращает их в структурированную память, планы и следующие шаги, к которым можно вернуться в любой момент.' },
      { q: 'Чем он отличается от Notion или ChatGPT?', a: 'Notion хранит то, что ты напечатал; ChatGPT забывает тебя между чатами. Cydit помнит всё во времени, связывает это в граф знаний и сам подсказывает, что важно дальше.' },
      { q: 'Нужно ли что-то организовывать вручную?', a: 'Нет. Cydit сам раскладывает каждую мысль — без папок, тегов и ручной сортировки. Ты просто фиксируешь, он структурирует.' },
      { q: 'Какие платформы поддерживаются?', a: 'В публичной бете доступны iOS и веб; глубокая память, экспорт графа и командные пространства — уже в роадмапе.' },
      { q: 'Когда можно начать?', a: 'Публичная бета уже доступна. Вступай в лист ожидания, чтобы получить ранний доступ и влиять на развитие Cydit.' },
    ],
    ctaEyebrow: 'Ранний доступ',
    ctaTitle: 'Дай своему разуму второй мозг',
    ctaText: 'Вступай в лист ожидания и стань одним из первых, кто превращает мысли в работающую систему.',
    ctaPlaceholder: 'you@email.com',
    ctaButton: 'В лист ожидания',
    ctaSuccess: 'Ты в списке — скоро свяжемся. ✨',
    footerText: 'AI-память, которая превращает мысли в движение.',
  },
  en: {
    brandName: 'Cydit',
    nav: [
      { label: 'Product', href: '#product' },
      { label: 'How it works', href: '#how' },
      { label: 'Use cases', href: '#use-cases' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'FAQ', href: '#faq' },
    ],
    signIn: 'Sign in',
    ctaPrimary: 'Get Early Access',
    heroBadge: 'The AI operating system for your mind',
    heroTitle: 'Turn scattered thoughts into a system that thinks with you',
    heroText:
      'Speak or type naturally. Cydit captures every thought and turns it into meaning, memory, plans, and the next step — so nothing gets lost and everything moves forward.',
    heroPrimary: 'Get Early Access',
    heroSecondary: 'See how it works',
    signals: ['Voice-first', 'Long-term memory', 'Knowledge graph', 'Actionable'],
    metrics: [
      { value: 'Voice-first', label: 'capture at the speed of thought' },
      { value: 'Living memory', label: 'ideas that connect over time' },
      { value: 'Auto-organized', label: 'no folders, no manual sorting' },
      { value: 'Next-step ready', label: 'every thought becomes action' },
    ],
    productEyebrow: 'Product core',
    productTitle: 'Not a chat. A thinking system.',
    productSub: 'Your thoughts deserve more than a text box.',
    manifestoEyebrow: 'Our belief',
    manifesto: {
      before: 'Your mind was never meant to be a filing cabinet. Cydit gives every thought ',
      highlight: 'a place to live, connect',
      after: ', and become action.',
    },
    bentoEyebrow: 'Capabilities',
    bentoTitle: 'Everything your mind needs, in one place',
    bento: [
      { title: 'Living knowledge graph', text: 'Every thought becomes a node, connected to themes, people, and goals that grow over time.', graph: true },
      { title: 'Voice-first', text: 'Speak naturally; Cydit transcribes and structures instantly.' },
      { title: 'Auto-organized', text: 'No folders, no tags. Structure just happens.' },
      { title: 'Semantic search', text: 'Find any thought by meaning, not exact words.' },
      { title: 'Always in sync', text: 'iOS and web, in lockstep. Your mind, everywhere.' },
    ],
    useEyebrow: 'Use cases',
    useTitle: 'Built for the way you think',
    cases: [
      { title: 'Founders & builders', text: 'Capture strategy, product ideas, and decisions — never lose the thread between meetings.' },
      { title: 'Writers & creators', text: 'Turn fleeting sparks into outlines, drafts, and a searchable idea vault.' },
      { title: 'Students & researchers', text: 'Connect readings, lectures, and questions into one growing knowledge graph.' },
      { title: 'Busy minds', text: 'Offload the mental load — Cydit remembers, organizes, and reminds so you can focus.' },
    ],
    pricingEyebrow: 'Pricing',
    pricingTitle: 'Simple, early-access pricing',
    pricingSub: 'Start free. Upgrade when your second brain does.',
    pricingNote: 'Early-access pricing — final plans may change.',
    plans: [
      { name: 'Free', price: '$0', period: '/forever', tagline: 'Start capturing today.', features: ['Voice & text capture', 'Basic AI memory', 'Up to 500 thoughts', 'iOS & web'], cta: 'Get started', featured: false },
      { name: 'Pro', price: '$19', period: '/mo', tagline: 'Your full second brain.', features: ['Unlimited thoughts', 'Deep long-term memory', 'Knowledge graph & search', 'Smart suggestions', 'Priority support'], cta: 'Get Early Access', featured: true, badge: 'Popular' },
      { name: 'Team', price: 'Custom', period: '', tagline: 'Think together.', features: ['Everything in Pro', 'Shared workspaces', 'Team knowledge graph', 'Admin & SSO', 'Dedicated support'], cta: 'Contact us', featured: false },
    ],
    features: [
      { title: 'Understands every thought', text: 'AI extracts category, emotion, intent, goal, and the next step from anything you capture.' },
      { title: 'Memory that connects', text: 'Each thought links to recurring themes and active contexts, building a living knowledge graph.' },
      { title: 'Turns ideas into action', text: 'Notes become tasks, goals, and short plans — automatically, without the busywork.' },
      { title: 'Voice-first capture', text: 'Just talk. Cydit transcribes, structures, and remembers so you can stay in flow.' },
      { title: 'Smart suggestions', text: 'Cydit surfaces the right memory at the right moment and suggests what to do next.' },
      { title: 'Works everywhere', text: 'iOS and web today, an AI OS platform tomorrow — your mind, synced across everything.' },
    ],
    flowEyebrow: 'How it works',
    flowTitle: 'From raw thought to next step',
    flow: [
      { number: '1', label: 'Capture', text: 'Speak or type' },
      { number: '2', label: 'Understand', text: 'AI parses meaning' },
      { number: '3', label: 'Connect', text: 'Links to memory' },
      { number: '4', label: 'Plan', text: 'Becomes action' },
      { number: '5', label: 'Recall', text: 'Always findable' },
    ],
    screensEyebrow: 'Real screens',
    screensTitle: 'The interface speaks for itself',
    screens: [
      { image: 'assets/screens/home.png', title: 'Home', alt: 'Cydit home screen' },
      { image: 'assets/screens/memory.png', title: 'Memory', alt: 'Cydit memory screen' },
      { image: 'assets/screens/insights.png', title: 'Insights', alt: 'Cydit insights screen' },
      { image: 'assets/screens/settings.png', title: 'Settings', alt: 'Cydit settings screen' },
    ],
    compareEyebrow: 'Why Cydit',
    compareTitle: 'Nothing else comes close',
    compare: {
      columns: [
        { name: 'Cydit', badge: 'AI OS', highlight: true },
        { name: 'Notion' },
        { name: 'Apple Notes' },
        { name: 'ChatGPT' },
        { name: 'Reflect' },
      ],
      rows: [
        { feature: 'Voice-first input', cells: [true, false, true, true, false] },
        { feature: 'Long-term AI Memory', cells: [true, false, false, false, false] },
        { feature: 'Context understanding', cells: [true, false, false, true, false] },
        { feature: 'Knowledge Graph', cells: [true, false, false, false, true] },
        { feature: 'Auto organization', cells: [true, true, false, false, false] },
        { feature: 'Smart suggestions', cells: [true, false, false, true, false] },
        { feature: 'Relationship detection', cells: [true, false, false, false, false] },
        { feature: 'AI insights', cells: [true, false, false, false, false] },
      ],
    },
    roadmapEyebrow: 'Roadmap',
    roadmapTitle: 'The road ahead',
    roadmap: [
      { quarter: 'Q2 2026', badge: 'Live Now', title: 'Public Beta', text: 'Voice capture, AI memory, basic knowledge graph, iOS & web app.' },
      { quarter: 'Q3 2026', badge: '', title: 'AI Memory Engine', text: 'Deep long-term memory, semantic search, relationship detection.' },
      { quarter: 'Q4 2026', badge: '', title: 'Knowledge Graph', text: 'Full visual knowledge graph, cross-memory connections, graph export.' },
      { quarter: 'Q1 2027', badge: '', title: 'AI OS Platform', text: 'Complete AI operating system, integrations, team workspaces.' },
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Questions, answered',
    faq: [
      { q: 'What exactly is Cydit?', a: 'Cydit is an AI memory layer for your thinking. You capture thoughts by voice or text, and it turns them into structured memory, plans, and next steps you can return to anytime.' },
      { q: 'How is it different from Notion or ChatGPT?', a: 'Notion stores what you type; ChatGPT forgets you between chats. Cydit remembers everything over time, connects it into a knowledge graph, and proactively suggests what matters next.' },
      { q: 'Do I have to organize anything manually?', a: 'No. Cydit auto-organizes every thought — no folders, tags, or manual sorting. You just capture; it structures.' },
      { q: 'Which platforms are supported?', a: 'iOS and web are available in the public beta, with deeper memory, graph export, and team workspaces already on the roadmap.' },
      { q: 'When can I start?', a: 'The public beta is live now. Join the waitlist to get early access and shape where Cydit goes next.' },
    ],
    ctaEyebrow: 'Early access',
    ctaTitle: 'Give your mind a second brain',
    ctaText: 'Join the waitlist and be among the first to turn thoughts into a system that works for you.',
    ctaPlaceholder: 'you@email.com',
    ctaButton: 'Join the waitlist',
    ctaSuccess: 'You are on the list — we will be in touch soon. ✨',
    footerText: 'AI memory that turns thoughts into motion.',
  },
};

let lang = store.get(LANG_KEY) === 'en' ? 'en' : 'ru';

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function copy() {
  return content[lang] || content.ru;
}

function render() {
  const c = copy();
  document.documentElement.lang = lang;
  document.title = `${c.brandName} — ${c.heroTitle}`;
  document.querySelector('[data-lang-toggle]').textContent = lang.toUpperCase();

  document.querySelectorAll('[data-text]').forEach((node) => {
    node.textContent = c[node.dataset.text] ?? '';
  });
  document.querySelectorAll('[data-image]').forEach((node) => {
    node.src = content.images[node.dataset.image] || '';
  });
  document.querySelectorAll('[data-attr-placeholder]').forEach((node) => {
    node.placeholder = c[node.dataset.attrPlaceholder] ?? '';
  });

  renderNav(c);
  renderSignals(c);
  renderMetrics(c);
  renderFeatures(c);
  renderFlow(c);
  renderScreens(c);
  renderHeroMocks();
  renderManifesto(c);
  renderBento(c);
  renderUseCases(c);
  renderCompare(c);
  renderRoadmap(c);
  renderPricing(c);
  renderFaq(c);
  renderLinks(c);
}

function renderNav(c) {
  document.getElementById('mainNav').innerHTML = c.nav
    .map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`)
    .join('');
}

function renderSignals(c) {
  document.getElementById('signalRow').innerHTML = c.signals.map((item) => `<span>${esc(item)}</span>`).join('');
}

function renderMetrics(c) {
  document.getElementById('metricBand').innerHTML = c.metrics
    .map((item) => `<article><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span></article>`)
    .join('');
}

function renderFeatures(c) {
  document.getElementById('featureGrid').innerHTML = c.features
    .map(
      (item, i) => `
        <article class="feature-card">
          <span class="feature-icon">${FEATURE_ICONS[i % FEATURE_ICONS.length]}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </article>`,
    )
    .join('');
}

function renderFlow(c) {
  document.getElementById('flowTrack').innerHTML = c.flow
    .map(
      (item) => `
        <article class="flow-step">
          <span class="flow-num">${esc(item.number)}</span>
          <strong>${esc(item.label)}</strong>
          <span class="flow-sub">${esc(item.text)}</span>
        </article>`,
    )
    .join('');
}

/* ---- Drawn phone mockups (no external images) ---- */
function mockNav(active) {
  return `<div class="mock-nav">${[0, 1, 2, 3, 4]
    .map((n) => `<i${n === active ? ' class="on"' : ''}></i>`)
    .join('')}</div>`;
}

function mockInsight(label, pct) {
  return `<div class="mock-card"><span class="mock-spark"></span><div class="mock-cc"><div class="mock-ct"><b>${esc(label)}</b><span class="mock-pct">${esc(pct)}</span></div><span class="mock-line s"></span></div></div>`;
}

function mockThought() {
  return `<div class="mock-card"><span class="mock-spark"></span><div class="mock-cc"><span class="mock-line"></span><span class="mock-line s"></span></div></div>`;
}

function mockToggle(on) {
  return `<div class="mock-toggle"><span class="mock-line s"></span><span class="mock-sw${on ? ' on' : ''}"></span></div>`;
}

function mockPhone(type) {
  const body = {
    capture: `<div class="mock-mic"></div><div class="mock-input"></div><div class="mock-row"><span class="mock-h">AI insights</span><span class="mock-link">All</span></div>${mockInsight('Goal', '86%')}${mockInsight('#want', '78%')}`,
    home: `<div class="mock-title"></div><div class="mock-input"></div>${mockThought()}${mockThought()}${mockThought()}`,
    memory: `<div class="mock-row"><span class="mock-h">Memory</span></div><div class="mock-graph"><span></span><span></span><span></span><span></span><span></span></div>${mockThought()}${mockThought()}`,
    insights: `<div class="mock-row"><span class="mock-h">Insights</span><span class="mock-link">All</span></div>${mockInsight('Focus', '92%')}${mockInsight('Ideas', '74%')}${mockInsight('Mood', '63%')}`,
    settings: `<div class="mock-row"><span class="mock-h">Settings</span></div>${mockToggle(true)}${mockToggle(false)}${mockToggle(true)}${mockToggle(true)}`,
  }[type] || '';
  const active = { home: 0, memory: 1, capture: 2, insights: 3, settings: 4 }[type] ?? 0;
  return `<div class="mock-frame"><span class="mock-notch"></span><div class="mock-screen">${body}${mockNav(active)}</div></div>`;
}

function renderHeroMocks() {
  const main = document.getElementById('heroPhoneMain');
  const side = document.getElementById('heroPhoneSide');
  if (main) main.innerHTML = mockPhone('capture');
  if (side) side.innerHTML = mockPhone('insights');
}

function renderScreens(c) {
  const types = ['home', 'memory', 'insights', 'settings'];
  document.getElementById('screenGrid').innerHTML = c.screens
    .map(
      (item, i) => `
        <figure class="screen-item">
          ${mockPhone(types[i % types.length])}
          <figcaption>${esc(item.title)}</figcaption>
        </figure>`,
    )
    .join('');
}

function renderCompare(c) {
  const table = document.getElementById('compareTable');
  const data = c.compare;
  if (!table || !data) return;
  const cols = data.columns;
  table.innerHTML = `
    <thead>
      <tr>
        <th class="compare-feature-head"></th>
        ${cols
          .map(
            (col) => `
          <th class="${col.highlight ? 'is-cydit' : ''}">
            <span class="col-name">${esc(col.name)}</span>
            ${col.badge ? `<span class="col-badge">${esc(col.badge)}</span>` : ''}
          </th>`,
          )
          .join('')}
      </tr>
    </thead>
    <tbody>
      ${data.rows
        .map(
          (row) => `
        <tr>
          <th scope="row" class="compare-feature">${esc(row.feature)}</th>
          ${row.cells
            .map((cell, i) => {
              const brand = cols[i]?.highlight;
              const mark = cell
                ? `<span class="mark yes${brand ? ' brand' : ''}">${ICON_CHECK}</span>`
                : `<span class="mark no">${ICON_CROSS}</span>`;
              return `<td class="${brand ? 'is-cydit' : ''}">${mark}</td>`;
            })
            .join('')}
        </tr>`,
        )
        .join('')}
    </tbody>`;
}

function renderRoadmap(c) {
  const track = document.getElementById('roadmapTrack');
  if (!track || !c.roadmap) return;
  track.innerHTML = c.roadmap
    .map(
      (item) => `
      <article class="roadmap-item">
        <span class="roadmap-dot"></span>
        <div class="roadmap-card">
          <div class="roadmap-meta">
            <span class="roadmap-q">${esc(item.quarter)}</span>
            ${item.badge ? `<span class="roadmap-badge">${esc(item.badge)}</span>` : ''}
          </div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </div>
      </article>`,
    )
    .join('');
}

function renderFaq(c) {
  const list = document.getElementById('faqList');
  if (!list || !c.faq) return;
  list.innerHTML = c.faq
    .map(
      (item) => `
      <details class="faq-item">
        <summary>
          <span>${esc(item.q)}</span>
          <span class="faq-icon" aria-hidden="true"></span>
        </summary>
        <div class="faq-answer">${esc(item.a)}</div>
      </details>`,
    )
    .join('');
}

function renderManifesto(c) {
  const el = document.getElementById('manifestoText');
  if (!el || !c.manifesto) return;
  const m = c.manifesto;
  el.innerHTML = `${esc(m.before)}<span class="grad">${esc(m.highlight)}</span>${esc(m.after)}`;
}

function renderBento(c) {
  const grid = document.getElementById('bentoGrid');
  if (!grid || !c.bento) return;
  grid.innerHTML = c.bento
    .map(
      (item, i) => `
        <article class="bento-card${i === 0 ? ' bento-lg' : ''}">
          ${item.graph ? '<div class="bento-graph" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>' : ''}
          <div class="bento-copy">
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.text)}</p>
          </div>
        </article>`,
    )
    .join('');
}

function renderUseCases(c) {
  const grid = document.getElementById('useGrid');
  if (!grid || !c.cases) return;
  grid.innerHTML = c.cases
    .map(
      (item, i) => `
        <article class="use-card">
          <span class="use-icon">${USE_ICONS[i % USE_ICONS.length]}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </article>`,
    )
    .join('');
}

function renderPricing(c) {
  const grid = document.getElementById('pricingGrid');
  if (!grid || !c.plans) return;
  grid.innerHTML = c.plans
    .map(
      (plan) => `
        <article class="price-card${plan.featured ? ' featured' : ''}">
          ${plan.featured && plan.badge ? `<span class="price-badge">${esc(plan.badge)}</span>` : ''}
          <h3 class="price-name">${esc(plan.name)}</h3>
          <div class="price-amount"><strong>${esc(plan.price)}</strong><span>${esc(plan.period)}</span></div>
          <p class="price-tagline">${esc(plan.tagline)}</p>
          <ul class="price-features">
            ${plan.features.map((f) => `<li>${ICON_CHECK}<span>${esc(f)}</span></li>`).join('')}
          </ul>
          <a class="${plan.featured ? 'primary-button' : 'secondary-button'} price-cta" href="#get-started">${esc(plan.cta)}</a>
        </article>`,
    )
    .join('');
}

function renderLinks(c) {
  const email = content.links.email;
  const emailLink = document.getElementById('emailLink');
  const tgLink = document.getElementById('telegramLink');
  emailLink.href = `mailto:${email}`;
  emailLink.textContent = email;
  tgLink.href = content.links.telegram;
  tgLink.textContent = 'Telegram';
}

/* Language toggle */
document.querySelector('[data-lang-toggle]').addEventListener('click', () => {
  lang = lang === 'ru' ? 'en' : 'ru';
  store.set(LANG_KEY, lang);
  render();
});

/* Waitlist (front-end only — wire to a backend/form service later) */
const waitlistForm = document.getElementById('waitlistForm');
waitlistForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('waitlistEmail');
  if (!email.value.trim() || !email.checkValidity()) {
    email.reportValidity?.();
    return;
  }
  waitlistForm.hidden = true;
  const success = document.getElementById('waitlistSuccess');
  success.textContent = copy().ctaSuccess;
  success.hidden = false;
});

/* Scroll reveal */
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

/* Scroll progress bar */
const progressBar = document.getElementById('scrollProgress');
if (progressBar) {
  const updateProgress = () => {
    const h = document.documentElement;
    const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

render();
observeReveal();
