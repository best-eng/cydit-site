const LANG_KEY = 'cydit-lang-v2';

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
      { label: 'Сравнение', href: '#compare' },
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
      { quarter: 'Q3 2024', badge: 'Уже доступно', title: 'Публичная бета', text: 'Голосовой захват, AI-память, базовый граф знаний, приложение для iOS и веба.' },
      { quarter: 'Q4 2024', badge: '', title: 'Движок AI-памяти', text: 'Глубокая долгосрочная память, семантический поиск, определение связей.' },
      { quarter: 'Q1 2025', badge: '', title: 'Граф знаний', text: 'Полный визуальный граф знаний, связи между воспоминаниями, экспорт графа.' },
      { quarter: 'Q2 2025', badge: '', title: 'AI OS платформа', text: 'Полноценная AI-операционная система, интеграции, командные пространства.' },
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
      { label: 'Compare', href: '#compare' },
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
      { quarter: 'Q3 2024', badge: 'Live Now', title: 'Public Beta', text: 'Voice capture, AI memory, basic knowledge graph, iOS & web app.' },
      { quarter: 'Q4 2024', badge: '', title: 'AI Memory Engine', text: 'Deep long-term memory, semantic search, relationship detection.' },
      { quarter: 'Q1 2025', badge: '', title: 'Knowledge Graph', text: 'Full visual knowledge graph, cross-memory connections, graph export.' },
      { quarter: 'Q2 2025', badge: '', title: 'AI OS Platform', text: 'Complete AI operating system, integrations, team workspaces.' },
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

let lang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ru';

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
  renderCompare(c);
  renderRoadmap(c);
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

function renderScreens(c) {
  document.getElementById('screenGrid').innerHTML = c.screens
    .map(
      (item) => `
        <figure>
          <img src="${esc(item.image)}" alt="${esc(item.alt)}" loading="lazy" />
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
  localStorage.setItem(LANG_KEY, lang);
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

render();
observeReveal();
