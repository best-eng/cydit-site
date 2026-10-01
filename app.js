const CONFIG = {
  email: 'hello@cydit.app',
  telegram: 'https://t.me/cydit',
  // Адрес, куда форма раннего доступа отправляет заявку: POST, JSON { email, lang, source }.
  // Пока он пустой, форма открывает готовое письмо на CONFIG.email.
  waitlistEndpoint: '',
};

const LANG_KEY = 'cydit-lang';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
      /* хранилище недоступно — язык просто не запомнится */
    }
  },
};

/* Русский текст лежит в index.html; здесь только английская версия и сообщения формы. */
const messages = {
  ru: {
    'form.invalid': 'Проверь адрес почты — похоже, в нём ошибка.',
    'form.sending': 'Отправляем…',
    'form.sent': 'Заявка принята. Напишем, когда откроем доступ.',
    'form.mail': 'Открываем письмо с заявкой. Если оно не появилось, напиши на ',
    'form.error': 'Не получилось отправить. Напиши нам на ',
    'mail.subject': 'Ранний доступ к Cydit',
    'mail.body': 'Хочу попасть в бету Cydit. Моя почта: ',
  },
  en: {
    'form.invalid': 'Check the email address — it looks mistyped.',
    'form.sending': 'Sending…',
    'form.sent': 'Request received. We will write when access opens.',
    'form.mail': 'Opening an email with your request. If nothing appeared, write to ',
    'form.error': 'Could not send the request. Write to us at ',
    'mail.subject': 'Cydit early access',
    'mail.body': 'I would like to join the Cydit beta. My email: ',
  },
};

const en = {
  'meta.title': 'Cydit — AI Operating System for Your Mind',
  'meta.description':
    'Cydit turns thoughts, spoken or typed, into memory, goals, tasks and the next step. Closed beta on Android.',
  skip: 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.product': 'Product',
  'nav.how': 'How it works',
  'nav.screens': 'Screens',
  'nav.plans': 'Plans',
  'nav.faq': 'FAQ',
  'lang.label': 'Language',
  'menu.label': 'Menu',
  'cta.short': 'Early access',

  'hero.status': 'Closed beta · Android',
  'hero.title': 'Turn your thoughts into a system that thinks with you',
  'hero.lead':
    'Speak or type as it comes. Cydit understands every thought and turns it into memory, goals, tasks and the next step — so nothing gets lost and everything moves forward.',
  'hero.primary': 'Get early access',
  'hero.secondary': 'How it works',
  'hero.alt': 'Cydit home screen: focus of the day, voice capture and the main goal',
  'path.label': 'Thought, understanding, action',
  'path.1': 'Thought',
  'path.2': 'Understanding',
  'path.3': 'Action',

  'strip.1.t': 'Voice',
  'strip.1.d': 'capture at the speed of thought',
  'strip.2.t': 'Living memory',
  'strip.2.d': 'ideas connect over time',
  'strip.3.t': 'Auto-organized',
  'strip.3.d': 'no folders, no manual sorting',
  'strip.4.t': 'Through to action',
  'strip.4.d': 'every thought becomes a step',

  'manifesto.eyebrow': 'Our belief',
  'manifesto.text':
    'Your mind was never meant to be a filing cabinet. Cydit gives every thought <span class="grad">a place to live, connect</span> and become action.',

  'product.eyebrow': 'Product core',
  'product.title': 'Not a chat. A thinking system.',
  'product.sub': 'A chat answers and forgets. Cydit remembers, connects and carries a thought through to a step.',
  'bento.memory.t': 'Memory that connects',
  'bento.memory.d':
    'Every thought is saved with a type and tags and linked to what you were thinking about before. It is easy to come back to when you need it again.',
  'bento.memory.f1': 'Thoughts',
  'bento.memory.f2': 'Ideas',
  'bento.memory.f3': 'Decisions',
  'bento.voice.t': 'Voice and text',
  'bento.voice.d': 'Tap and say what matters, or just type. Cydit transcribes and saves the thought.',
  'bento.understand.t': 'Understands the meaning',
  'bento.understand.d': 'The breakdown picks out the point, the intent and the goal — and suggests the next move.',
  'bento.understand.intent': 'save money for the trip',
  'bento.goals.t': 'Goals with progress',
  'bento.goals.d': 'A thought becomes a goal with steps. You see what is done and which action comes next.',
  'bento.goals.done': '2 of 5 steps done',
  'bento.goals.next': 'Next action',
  'bento.calendar.t': 'Calendar and free windows',
  'bento.calendar.d': 'Cydit sees the calendar events on your device and suggests a window for focused work.',
  'wd.1': 'Mo',
  'wd.2': 'Tu',
  'wd.3': 'We',
  'wd.4': 'Th',
  'wd.5': 'Fr',
  'wd.6': 'Sa',
  'wd.7': 'Su',
  'bento.consent.t': 'Nothing without your yes',
  'bento.consent.d': 'Goals and tasks appear only after you confirm them. Cydit suggests — you decide.',
  'bento.consent.no': 'Decline',
  'bento.consent.yes': 'Confirm',

  'how.eyebrow': 'How it works',
  'how.title': 'From a raw thought to the next step',
  'how.1.t': 'Capture',
  'how.1.d': 'Voice or text',
  'how.2.t': 'Understand',
  'how.2.d': 'AI works out the meaning',
  'how.3.t': 'Connect',
  'how.3.d': 'Links it to memory',
  'how.4.t': 'Plan',
  'how.4.d': 'A goal and steps',
  'how.5.t': 'Return',
  'how.5.d': 'Reminds you to come back',
  'ex.in.label': 'You say',
  'ex.in.quote': '“I want to go to Dubai in a week, but I am 100 thousand rubles short.”',
  'ex.out.label': 'Cydit breaks it down',
  'ex.out.title': 'Dubai trip plan',
  'ex.out.summary': '100 thousand rubles short for a trip in a week.',
  'ex.out.intent': 'save money for the trip',
  'ex.out.nextLabel': 'Your next move',
  'ex.out.next': 'Make a plan to save the missing amount.',
  'ex.note': 'The example is put together from real app screens.',

  'screens.eyebrow': 'Real screens',
  'screens.title': 'The interface speaks for itself',
  'screens.sub': 'These screenshots come from the beta build of the app, not from a design mock-up.',
  'screens.tabs': 'App screens',
  'screens.home.t': 'Home',
  'screens.home.d': 'Focus of the day, the main goal and the next step — on one screen.',
  'screens.home.alt': 'Home screen',
  'screens.capture.t': 'New thought',
  'screens.capture.d': 'Tap the microphone or type. One button — “Save and understand”.',
  'screens.capture.alt': 'New thought screen',
  'screens.analysis.t': 'Thought breakdown',
  'screens.analysis.d': 'The point, the intent and the next move. You can rate it, edit it or turn it into a plan.',
  'screens.analysis.alt': 'Thought breakdown screen',
  'screens.goals.t': 'Goals',
  'screens.goals.d': 'Step-by-step progress and the next action for every goal.',
  'screens.goals.alt': 'Goals screen',

  'use.eyebrow': 'Use cases',
  'use.title': 'Built for the way you think',
  'use.1.t': 'Founders and builders',
  'use.1.d': 'Capture strategy, ideas and decisions — never lose the thread between meetings.',
  'use.2.t': 'Writers and creators',
  'use.2.d': 'Turn sparks of ideas into plans and an archive that is easy to search.',
  'use.3.t': 'Students and researchers',
  'use.3.d': 'Gather questions, conclusions and ideas into one memory that grows with you.',
  'use.4.t': 'Busy minds',
  'use.4.d': 'Offload your memory — Cydit remembers, sorts and reminds while you stay focused.',

  'cmp.eyebrow': 'Why Cydit',
  'cmp.title': 'Not notes and not a chat',
  'cmp.col.0': 'What is compared',
  'cmp.col.1': 'Notes',
  'cmp.col.2': 'Chatbot',
  'cmp.r1.h': 'What it does with a thought',
  'cmp.r1.a': 'Stores the text',
  'cmp.r1.b': 'Answers the question',
  'cmp.r1.c': 'Breaks it down: point, intent, goal',
  'cmp.r2.h': 'Memory',
  'cmp.r2.a': 'Only what you wrote down',
  'cmp.r2.b': 'Mostly within one conversation',
  'cmp.r2.c': 'Links thoughts to each other',
  'cmp.r3.h': 'Order',
  'cmp.r3.a': 'Folders and tags by hand',
  'cmp.r3.b': 'A feed of messages',
  'cmp.r3.c': 'Type and tags are set during the breakdown',
  'cmp.r4.h': 'What next',
  'cmp.r4.a': 'You decide on your own',
  'cmp.r4.b': 'Advice in the reply',
  'cmp.r4.c': 'A goal, steps and the next move',
  'cmp.r5.h': 'Coming back to a thought',
  'cmp.r5.a': 'If you remember',
  'cmp.r5.b': 'If you find the conversation',
  'cmp.r5.c': 'Focus of the day and reminders',

  'status.eyebrow': 'Status',
  'status.title': 'What works now and what comes next',
  'status.now.label': 'Now · closed beta',
  'status.now.1': 'Android app, version 2.0',
  'status.now.2': 'Voice and text capture',
  'status.now.3': 'Thought breakdown: point, intent, next move',
  'status.now.4': 'Memory, goals, tasks and calendar',
  'status.now.5': 'Dark and light theme, Russian and English',
  'status.now.6': 'Data export and account deletion',
  'status.next.label': 'Next',
  'status.next.1': 'Buying PLUS and PRO in the app',
  'status.next.2': 'Weekly review emails',
  'status.next.3': 'Richer notifications',
  'status.next.4': 'iOS and web versions',

  'plans.eyebrow': 'Plans',
  'plans.title': 'Three access modes',
  'plans.sub':
    'The modes differ in the number of AI requests and in how deep the memory work goes. Purchases come later — prices will be announced with them.',
  'plans.free.sub': 'Starter mode',
  'plans.free.1': '10 AI requests per month',
  'plans.free.2': 'Unlimited thoughts',
  'plans.free.3': 'Voice capture',
  'plans.plus.sub': 'Daily work mode',
  'plans.plus.1': '200 AI requests per month',
  'plans.plus.2': 'Everything in FREE',
  'plans.plus.3': 'AI thought analysis',
  'plans.plus.4': 'AI memory search',
  'plans.plus.5': 'Advanced insights',
  'plans.pro.badge': 'Maximum',
  'plans.pro.sub': 'Maximum mode for AI and memory',
  'plans.pro.1': 'Unlimited AI requests',
  'plans.pro.2': 'Everything in PLUS',
  'plans.pro.3': 'Full AI memory',
  'plans.pro.4': 'Priority processing',

  'privacy.eyebrow': 'Privacy',
  'privacy.title': 'Your thoughts are protected',
  'privacy.sub': 'Cydit keeps your memory under your control and gives you the tools to manage your data.',
  'privacy.1.t': 'Data protection',
  'privacy.1.d': 'Access to data is closed off by authentication and security rules.',
  'privacy.2.t': 'AI processing',
  'privacy.2.d':
    'For a breakdown the thought is sent through a protected AI gateway. Response content is not written to analytics logs.',
  'privacy.3.t': 'Minimal access',
  'privacy.3.d': 'The text of your thoughts and AI responses is not used in product analytics.',
  'privacy.4.t': 'Data control',
  'privacy.4.d': 'You can export your data and delete your account at any time.',

  'faq.title': 'Questions, answered',
  'faq.1.q': 'What is Cydit?',
  'faq.1.a':
    'Cydit is an AI operating system for your mind. You capture a thought by voice or text, and Cydit turns it into memory, goals, tasks and the next step you can return to at any time.',
  'faq.2.q': 'How is it different from notes and chatbots?',
  'faq.2.a':
    'Notes store what you wrote down. A chat answers the question and moves on. Cydit breaks the thought down, links it to earlier ones and carries it through to a goal and the next step.',
  'faq.3.q': 'Do I have to sort anything by hand?',
  'faq.3.a':
    'No. A thought gets its type and tags during the breakdown. Cydit suggests goals and tasks itself, and creates them only after you confirm.',
  'faq.4.q': 'Which platforms are supported?',
  'faq.4.a': 'A closed beta is running on Android. iOS and web versions are planned.',
  'faq.5.q': 'How much does it cost?',
  'faq.5.a':
    'There are no purchases in the beta. The app has three modes — FREE, PLUS and PRO: they differ in the number of AI requests and in how deep the memory work goes. Prices will be announced when purchases arrive.',
  'faq.6.q': 'What about my data?',
  'faq.6.a':
    'Your memory stays under your control: you can export your data and delete your account together with thoughts, goals and tasks. The text of thoughts and AI responses does not go into product analytics.',
  'faq.7.q': 'How do I get into the beta?',
  'faq.7.a': 'Leave your email in the form below — we will write when access opens.',

  'access.eyebrow': 'Early access',
  'access.title': 'More clarity.<br />More you.',
  'access.text': 'Leave your email — we will write when access to the Cydit beta opens.',
  'access.emailLabel': 'Email',
  'access.button': 'Join the beta',

  'footer.tagline': 'Thoughts · Plans · Actions. Real life.',
  'footer.label': 'Contacts',
};

/* ---------- Язык ---------- */

const i18nNodes = [...document.querySelectorAll('[data-i18n]')].map((node) => ({
  node,
  key: node.dataset.i18n,
  html: node.hasAttribute('data-i18n-html'),
  ru: node.hasAttribute('data-i18n-html') ? node.innerHTML : node.textContent,
}));

const i18nAttrs = [
  ['data-i18n-aria', 'aria-label'],
  ['data-i18n-alt', 'alt'],
].flatMap(([source, target]) =>
  [...document.querySelectorAll(`[${source}]`)].map((node) => ({
    node,
    target,
    key: node.getAttribute(source),
    ru: node.getAttribute(target),
  })),
);

const descriptionMeta = document.querySelector('meta[name="description"]');
const ruMeta = { title: document.title, description: descriptionMeta.content };

let lang = store.get(LANG_KEY) === 'en' ? 'en' : 'ru';

function t(key) {
  return messages[lang][key];
}

function applyLanguage() {
  const isEn = lang === 'en';
  document.documentElement.lang = lang;
  document.title = isEn ? en['meta.title'] : ruMeta.title;
  descriptionMeta.content = isEn ? en['meta.description'] : ruMeta.description;

  i18nNodes.forEach(({ node, key, html, ru }) => {
    const value = isEn && key in en ? en[key] : ru;
    if (html) node.innerHTML = value;
    else node.textContent = value;
  });
  i18nAttrs.forEach(({ node, target, key, ru }) => {
    node.setAttribute(target, isEn && key in en ? en[key] : ru);
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  labelCompareCells();
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.lang === lang) return;
    lang = button.dataset.lang;
    store.set(LANG_KEY, lang);
    applyLanguage();
  });
});

/* На узком экране таблица сравнения превращается в карточки — ячейкам нужны подписи колонок. */
function labelCompareCells() {
  const table = document.querySelector('.compare table');
  if (!table) return;
  const heads = [...table.querySelectorAll('thead th')].map((th) => th.textContent.trim());
  table.querySelectorAll('tbody tr').forEach((row) => {
    [...row.children].forEach((cell, index) => {
      if (cell.tagName === 'TD') cell.dataset.label = heads[index];
    });
  });
}

/* ---------- Шапка и меню ---------- */

const header = document.querySelector('.site-header');
const nav = document.getElementById('nav');
const menuToggle = document.querySelector('.menu-toggle');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}

menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-bar')) setMenu(false);
});

function onScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Подсветка пункта меню для раздела, который сейчас на экране */
const navLinks = new Map(
  [...nav.querySelectorAll('a')].map((link) => [link.getAttribute('href').slice(1), link]),
);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link, id) => link.classList.toggle('is-current', id === entry.target.id));
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
}

/* ---------- Голосовая волна: та же формула, что в _VoiceWavePainter приложения ---------- */

function mix(a, b, ratio) {
  return a.map((channel, i) => Math.round(channel + (b[i] - channel) * ratio));
}

function buildWave(container) {
  const wide = container.classList.contains('wave-wide');
  const bars = wide ? 44 : 18;
  const height = 48;
  const cyan = [64, 230, 242];
  const violet = [136, 112, 255];
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < bars; index += 1) {
    // у бокового портала огибающая растёт к микрофону, у широкой волны — к центру
    const distance = wide ? Math.abs(index - (bars - 1) / 2) / (bars / 2) : 1 - (index + 1) / bars;
    const envelope = (1 - distance * 0.72) ** 2;
    const wave = (Math.sin(index * 0.78) + 1) / 2;
    const counter = (Math.sin(index * 0.31) + 1) / 2;
    const size = Math.max(4, height * envelope * 0.86 * (0.35 + wave * 0.42 + counter * 0.23));
    const bar = document.createElement('i');
    bar.style.height = `${size.toFixed(1)}px`;
    bar.style.background = `rgb(${mix(cyan, violet, index / bars).join(' ')} / 0.92)`;
    bar.style.animationDelay = `${(-index * 0.09).toFixed(2)}s`;
    fragment.appendChild(bar);
  }
  container.appendChild(fragment);
}

document.querySelectorAll('[data-wave]').forEach(buildWave);

/* ---------- Появление блоков и кольцо прогресса ---------- */

function fillRing(ring) {
  const value = ring.querySelector('.ring-value');
  const progress = Number(ring.dataset.ring) || 0;
  value.style.strokeDashoffset = String(169.65 * (1 - progress));
}

const revealNodes = document.querySelectorAll('.reveal');

function show(node) {
  node.classList.add('is-visible');
  node.querySelectorAll('[data-ring]').forEach(fillRing);
}

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealNodes.forEach(show);
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  revealNodes.forEach((node) => revealObserver.observe(node));
}

/* ---------- Экраны: вкладки с автопереключением до первого действия пользователя ---------- */

const showcase = document.querySelector('.showcase');
const tabs = [...document.querySelectorAll('.showcase-tab')];
let rotation = null;

function selectTab(index, focus) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).classList.toggle('is-active', selected);
  });
  if (focus) tabs[index].focus();
}

function currentTab() {
  return tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
}

function stopRotation() {
  clearInterval(rotation);
  rotation = null;
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    stopRotation();
    showcaseObserver?.disconnect();
    selectTab(index, false);
  });
  tab.addEventListener('keydown', (event) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    stopRotation();
    showcaseObserver?.disconnect();
    selectTab((index + step + tabs.length) % tabs.length, true);
  });
});

let showcaseObserver = null;
if (!reducedMotion && 'IntersectionObserver' in window && showcase) {
  showcaseObserver = new IntersectionObserver(
    ([entry]) => {
      stopRotation();
      if (entry.isIntersecting) {
        rotation = setInterval(() => selectTab((currentTab() + 1) % tabs.length, false), 4200);
      }
    },
    { threshold: 0.45 },
  );
  showcaseObserver.observe(showcase);
  ['pointerenter', 'focusin'].forEach((type) => showcase.addEventListener(type, stopRotation));
}

/* ---------- Форма раннего доступа ---------- */

const form = document.getElementById('accessForm');
const emailInput = document.getElementById('accessEmail');
const formMessage = document.getElementById('accessMessage');

function setMessage(text, { error = false, withEmail = false } = {}) {
  formMessage.textContent = text;
  formMessage.classList.toggle('is-error', error);
  if (withEmail) {
    const link = document.createElement('a');
    link.href = `mailto:${CONFIG.email}`;
    link.textContent = CONFIG.email;
    formMessage.append(link, '.');
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (!email || !emailInput.checkValidity()) {
    emailInput.setAttribute('aria-invalid', 'true');
    setMessage(t('form.invalid'), { error: true });
    emailInput.focus();
    return;
  }
  emailInput.removeAttribute('aria-invalid');

  if (!CONFIG.waitlistEndpoint) {
    const subject = encodeURIComponent(t('mail.subject'));
    const body = encodeURIComponent(t('mail.body') + email);
    setMessage(t('form.mail'), { withEmail: true });
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    return;
  }

  const button = form.querySelector('button');
  button.disabled = true;
  setMessage(t('form.sending'));
  try {
    const response = await fetch(CONFIG.waitlistEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, lang, source: 'site' }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    form.reset();
    setMessage(t('form.sent'));
  } catch (_) {
    setMessage(t('form.error'), { error: true, withEmail: true });
  } finally {
    button.disabled = false;
  }
});

emailInput.addEventListener('input', () => {
  emailInput.removeAttribute('aria-invalid');
  if (formMessage.classList.contains('is-error')) setMessage('');
});

/* ---------- Контакты и год ---------- */

const emailLink = document.getElementById('emailLink');
emailLink.href = `mailto:${CONFIG.email}`;
emailLink.textContent = CONFIG.email;
document.getElementById('telegramLink').href = CONFIG.telegram;
document.getElementById('year').textContent = String(new Date().getFullYear());

applyLanguage();
