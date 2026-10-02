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
  'meta.description': 'Speak — Cydit turns thoughts into goals, tasks and the next step. Closed beta on Android.',
  skip: 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.features': 'Features',
  'nav.how': 'How it works',
  'nav.for': 'Who it is for',
  'nav.plans': 'Plans',
  'nav.faq': 'FAQ',
  'lang.label': 'Language',
  'menu.label': 'Menu',
  'cta.short': 'Early access',

  'hero.title': 'Speak. Cydit turns thoughts<br /><span class="grad">into action.</span>',
  'hero.lead':
    'Capture thoughts by voice or text — get goals, tasks and the next step. Your second brain in one app.',
  'hero.primary': 'Get early access',
  'hero.secondary': 'How it works',
  'hero.status': 'Closed beta on Android',
  'hero.alt': 'Cydit home screen: focus of the day, voice capture and the main goal',
  'chip.goals': 'Goals',
  'chip.tasks': 'Tasks',
  'chip.ideas': 'Ideas',
  'chip.reminders': 'Reminders',
  'chip.insights': 'Insights',
  'chip.calendar': 'Calendar',

  'f.1.t': 'Voice thoughts',
  'f.1.d': 'Just speak — Cydit records and understands.',
  'f.2.t': 'Auto-categorization',
  'f.2.d': 'Works out what it is: a goal, a task, an idea or a decision.',
  'f.3.t': 'Smart insights',
  'f.3.d': 'Notices what repeats and suggests the next step.',
  'f.4.t': 'Calendar',
  'f.4.d': 'Sees the events of your day and finds a window for focus.',
  'f.5.t': 'Progress',
  'f.5.d': 'Shows what is done for every goal and step.',
  'f.6.t': 'Security',
  'f.6.d': 'Your data stays under your control: export and delete at any time.',

  'how.eyebrow': 'How it works',
  'how.title': 'From a thought to a result — four steps',
  'how.1.t': 'Speak',
  'how.1.d': 'Capture a thought by voice or text.',
  'how.2.t': 'Cydit analyzes',
  'how.2.d': 'Understands the meaning, the intent and the goal.',
  'how.3.t': 'Get the result',
  'how.3.d': 'A goal, steps and the next move.',
  'how.4.t': 'Act',
  'how.4.d': 'Follow the route and come back on time.',

  'ex.eyebrow': 'An example from the app',
  'ex.title': 'One thought — many possibilities',
  'ex.quote': '“I want to go to Dubai in a week, but I am 100 thousand rubles short”',
  'ex.creates': 'Cydit creates:',
  'ex.1.t': 'Goal',
  'ex.1.d': 'Save 100 thousand rubles for the Dubai trip',
  'ex.2.t': 'Task',
  'ex.2.d': 'Make a plan to save the missing amount',
  'ex.3.t': 'Next step',
  'ex.3.d': 'Look into extra income or ways to save',
  'ex.4.t': 'When to return',
  'ex.4.d': 'After you take today’s step',
  'ex.note': 'The wording comes from the app screens.',
  'ex.alt': 'Goals screen with step-by-step progress',

  'ins.eyebrow': 'Insights that move you forward',
  'ins.title': 'Cydit notices what repeats in your thoughts',
  'ins.sub':
    'Your Portrait builds up from what you record: what repeats, what has changed and what is worth focusing on. These are observations, not verdicts — you can agree with them or not.',
  'ins.cta': 'See the screens',
  'ins.card.label': 'Sample observation',
  'ins.card.p7': '7 days',
  'ins.card.p30': '30 days',
  'ins.card.p90': '90 days',
  'ins.card.k1': 'I notice',
  'ins.card.v1': 'You turn plans into concrete actions.',
  'ins.card.k2': 'Why this may matter',
  'ins.card.v2': 'In your recent rhythm, planning is tied to action.',
  'ins.card.k3': 'You could try',
  'ins.card.v3': 'Keeping the first action concrete and time-boxed.',
  'ins.card.progress': 'The Portrait is taking shape · 18 of 30 signals',
  'ins.card.yes': 'Yes, this feels like me',
  'ins.card.maybe': 'Not sure yet',

  'nav2.eyebrow': 'Goal navigator',
  'nav2.title': 'Cydit leads you to the goal step by step',
  'nav2.sub':
    'Every goal has a route. Cydit shows the next action, explains why it is that one, and keeps track of the status.',
  'nav2.1.t': 'Route',
  'nav2.1.d': 'A goal breaks down into steps. The route can be rebuilt.',
  'nav2.2.t': 'Next action',
  'nav2.2.d': 'One concrete step instead of a long list.',
  'nav2.3.t': 'Goal status',
  'nav2.3.d': 'On track, at risk or delayed — based on completed steps.',
  'nav2.4.t': 'Why',
  'nav2.4.d': 'Every recommendation explains what it is based on.',
  'nav2.b1': 'Next action: look into the constraints',
  'nav2.b2': '2 of 5 steps completed',
  'nav2.b3': 'Goal status: on track',
  'nav2.b4': 'Get the next step?',

  'scr.eyebrow': 'All your thoughts in one place',
  'scr.title': 'More than just notes',
  'scr.sub':
    'Cydit is not a notebook. It is a system for working with thoughts, ideas and goals. The screenshots come from the beta build of the app.',
  'scr.tabs': 'App screens',
  'scr.home.t': 'Home',
  'scr.home.d': 'Focus of the day, the main goal and the next step — on one screen.',
  'scr.home.alt': 'Home screen',
  'scr.capture.t': 'New thought',
  'scr.capture.d': 'Tap the microphone or type. One button — “Save and understand”.',
  'scr.capture.alt': 'New thought screen',
  'scr.analysis.t': 'Thought breakdown',
  'scr.analysis.d': 'The point, the intent and the next move. You can rate it, edit it or turn it into a plan.',
  'scr.analysis.alt': 'Thought breakdown screen',
  'scr.goals.t': 'Goals',
  'scr.goals.d': 'Step-by-step progress and the next action for every goal.',
  'scr.goals.alt': 'Goals screen',

  'for.eyebrow': 'Who Cydit is for',
  'for.title': 'For everyone who wants more',
  'for.sub':
    'Students, founders, creative people, professionals — if you have many thoughts, ideas and goals, Cydit helps put them in order and turn them into results.',
  'for.1.t': 'Students',
  'for.1.d': 'Organize your studies and personal goals',
  'for.2.t': 'Founders',
  'for.2.d': 'Structure ideas and grow projects',
  'for.3.t': 'Creative people',
  'for.3.d': 'Keep ideas and inspiration',
  'for.4.t': 'Professionals',
  'for.4.d': 'Plan tasks and growth',

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

  'road.eyebrow': 'Roadmap',
  'road.title': 'What works now and what comes next',
  'road.1.badge': 'Now',
  'road.1.t': 'Closed beta on Android',
  'road.1.d':
    'Voice and text, thought breakdown, memory, goals with a route, tasks and calendar. Dark and light theme, Russian and English. Version 2.0.',
  'road.2.badge': 'Next',
  'road.2.t': 'PLUS and PRO plans',
  'road.2.d': 'Buying a plan right in the app.',
  'road.3.badge': 'Next',
  'road.3.t': 'Weekly review and notifications',
  'road.3.d': 'Weekly review emails and richer notifications.',
  'road.4.badge': 'Later',
  'road.4.t': 'iOS and web',
  'road.4.d': 'Versions for other platforms.',

  'plans.eyebrow': 'Plans',
  'plans.title': 'Choose your mode',
  'plans.sub':
    'The modes differ in the number of AI requests and in how deep the memory work goes. Purchases come later — prices will be announced with them.',
  'plans.cta': 'Join the beta',
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

  'faq.eyebrow': 'Frequently asked questions',
  'faq.title': 'Still have questions?',
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
  'faq.5.q': 'Is Cydit free?',
  'faq.5.a':
    'There are no purchases in the beta. The app has three modes — FREE, PLUS and PRO: they differ in the number of AI requests and in how deep the memory work goes. Prices will be announced when purchases arrive.',
  'faq.6.q': 'Is my data safe?',
  'faq.6.a':
    'Your memory stays under your control: you can export your data and delete your account together with thoughts, goals and tasks. The text of thoughts and AI responses does not go into product analytics.',
  'faq.7.q': 'How do I get into the beta?',
  'faq.7.a': 'Leave your email in the form below — we will write when access opens.',

  'access.eyebrow': 'Early access',
  'access.title': 'Your second brain.<br />In your pocket.',
  'access.text': 'Leave your email — we will write when access to the Cydit beta opens.',
  'access.emailLabel': 'Email',
  'access.button': 'Join the beta',

  'footer.product': 'Product',
  'footer.contacts': 'Contacts',
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
  header.classList.toggle('is-scrolled', open || window.scrollY > 24);
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
  header.classList.toggle('is-scrolled', nav.classList.contains('is-open') || window.scrollY > 24);
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

/* ---------- Появление блоков ---------- */

const revealNodes = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  revealNodes.forEach((node) => revealObserver.observe(node));
}

/* ---------- Экраны: выбранный телефон в центре, соседние — по бокам ---------- */

const showcase = document.querySelector('.showcase');
const tabs = [...document.querySelectorAll('.tab')];
const shots = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
const captions = [...document.querySelectorAll('.captions p')];
let rotation = null;
let showcaseObserver = null;

function selectTab(index, focus) {
  const count = tabs.length;
  const prev = (index - 1 + count) % count;
  const next = (index + 1) % count;
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    shots[i].classList.toggle('is-active', selected);
    shots[i].classList.toggle('is-prev', i === prev && !selected);
    shots[i].classList.toggle('is-next', i === next && !selected && i !== prev);
    captions[i].classList.toggle('is-active', selected);
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

/* После первого действия пользователя автопереключение больше не включается */
function takeOver(index, focus) {
  stopRotation();
  showcaseObserver?.disconnect();
  selectTab(index, focus);
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => takeOver(index, false));
  tab.addEventListener('keydown', (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    takeOver((index + step + tabs.length) % tabs.length, true);
  });
});

shots.forEach((shot, index) => {
  shot.addEventListener('click', () => {
    if (!shot.classList.contains('is-active')) takeOver(index, false);
  });
});

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
