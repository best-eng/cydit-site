const STORAGE_KEY = 'cydit-site-complete-content-v1';
const AUTH_KEY = 'cydit-site-complete-auth-v1';
const LANG_KEY = 'cydit-site-complete-lang-v1';
const EDIT_LANG_KEY = 'cydit-site-complete-edit-lang-v1';

const defaultContent = {
  links: {
    email: 'hello@cydit.app',
    telegram: 'https://t.me/cydit',
  },
  images: {
    brandLogo: 'assets/brand/cydit-mark.svg',
    heroMainImage: 'assets/screens/home.png',
    heroSideImage: 'assets/screens/capture.png',
  },
  sections: {
    hero: true,
    metrics: true,
    product: true,
    flow: true,
    screens: true,
    launch: true,
    footer: true,
  },
  ru: {
    brandName: 'Cydit',
    nav: [
      { label: 'Продукт', href: '#product' },
      { label: 'Маршрут AI', href: '#flow' },
      { label: 'Экраны', href: '#screens' },
      { label: 'Запуск', href: '#launch' },
    ],
    loginButton: 'Войти',
    openApp: 'Открыть Cydit',
    heroEyebrow: 'AI память для живых мыслей',
    heroTitle: 'Cydit собирает мысли в понятную систему',
    heroText:
      'Говорите или пишите как есть. Cydit выделяет смысл, цель, план, следующий шаг и сохраняет это как память, к которой можно вернуться.',
    heroPrimary: 'Начать',
    heroSecondary: 'Смотреть экраны',
    signals: ['Голос', 'Память', 'План', 'Инсайт'],
    metrics: [
      { value: 'JSON', label: 'единый AI контракт' },
      { value: 'Voice first', label: 'голос как главный ввод' },
      { value: 'Memory', label: 'связи между мыслями' },
      { value: 'Fallback', label: 'работает даже при сбое AI' },
    ],
    productEyebrow: 'Суть продукта',
    productTitle: 'Не чат. Система мышления.',
    features: [
      { number: '01', title: 'Разбор мысли', text: 'AI выделяет категорию, эмоцию, намерение, цель и следующий шаг.' },
      { number: '02', title: 'Память', text: 'Мысли соединяются с повторяющимися темами и активными контекстами.' },
      { number: '03', title: 'Действие', text: 'Идеи превращаются в задачи, цели и короткий план без лишнего шума.' },
    ],
    flowEyebrow: 'Маршрут AI',
    flowTitle: 'От сырой мысли до следующего шага',
    flow: [
      { number: '1', label: 'Мысль' },
      { number: '2', label: 'Запись' },
      { number: '3', label: 'AI анализ' },
      { number: '4', label: 'План' },
      { number: '5', label: 'Память' },
    ],
    screensEyebrow: 'Реальные экраны',
    screensTitle: 'Интерфейс приложения уже говорит за себя',
    screens: [
      { image: 'assets/screens/home.png', title: 'Главная', alt: 'Главный экран Cydit' },
      { image: 'assets/screens/memory.png', title: 'Память', alt: 'Экран памяти Cydit' },
      { image: 'assets/screens/insights.png', title: 'Инсайты', alt: 'Экран инсайтов Cydit' },
      { image: 'assets/screens/settings.png', title: 'Настройки', alt: 'Экран настроек Cydit' },
    ],
    launchEyebrow: 'Beta ready',
    launchTitle: 'Cydit готов к первым пользователям',
    launchText: 'Сайт можно показывать инвесторам, первым пользователям и команде. Контент управляется из скрытой админ-панели.',
    launchCta: 'Войти в аккаунт',
    footerText: 'AI память, которая превращает мысли в движение.',
    telegramLabel: 'Telegram',
    loginEyebrow: 'Вход',
    loginTitle: 'Войти в Cydit',
    loginField: 'Email / login',
    passwordField: 'Пароль',
    adminEyebrow: 'Admin',
    adminTitle: 'Редактор сайта',
    logout: 'Выйти',
    save: 'Сохранить изменения',
    reset: 'Сбросить',
    saved: 'Сохранено',
    resetDone: 'Контент сброшен',
    exportDone: 'JSON скопирован в буфер обмена',
    userLogged: 'Вход выполнен. Админ-панель доступна только владельцу.',
    adminLogged: 'Админ-панель открыта.',
    emptyLogin: 'Введите логин и пароль.',
  },
  en: {
    brandName: 'Cydit',
    nav: [
      { label: 'Product', href: '#product' },
      { label: 'AI route', href: '#flow' },
      { label: 'Screens', href: '#screens' },
      { label: 'Launch', href: '#launch' },
    ],
    loginButton: 'Login',
    openApp: 'Open Cydit',
    heroEyebrow: 'AI memory for living thoughts',
    heroTitle: 'Cydit gathers thoughts into a clear system',
    heroText:
      'Speak or type naturally. Cydit extracts meaning, goals, plans, and next steps, then keeps everything as memory you can return to.',
    heroPrimary: 'Start',
    heroSecondary: 'View screens',
    signals: ['Voice', 'Memory', 'Plan', 'Insight'],
    metrics: [
      { value: 'JSON', label: 'single AI contract' },
      { value: 'Voice first', label: 'voice as primary input' },
      { value: 'Memory', label: 'connections between thoughts' },
      { value: 'Fallback', label: 'keeps working when AI fails' },
    ],
    productEyebrow: 'Product core',
    productTitle: 'Not a chat. A thinking system.',
    features: [
      { number: '01', title: 'Thought parsing', text: 'AI extracts category, emotion, intent, goal, and next step.' },
      { number: '02', title: 'Memory', text: 'Thoughts connect to recurring themes and active contexts.' },
      { number: '03', title: 'Action', text: 'Ideas become tasks, goals, and short plans without noise.' },
    ],
    flowEyebrow: 'AI route',
    flowTitle: 'From raw thought to next step',
    flow: [
      { number: '1', label: 'Thought' },
      { number: '2', label: 'Record' },
      { number: '3', label: 'AI analysis' },
      { number: '4', label: 'Plan' },
      { number: '5', label: 'Memory' },
    ],
    screensEyebrow: 'Real screens',
    screensTitle: 'The app interface speaks for itself',
    screens: [
      { image: 'assets/screens/home.png', title: 'Home', alt: 'Cydit home screen' },
      { image: 'assets/screens/memory.png', title: 'Memory', alt: 'Cydit memory screen' },
      { image: 'assets/screens/insights.png', title: 'Insights', alt: 'Cydit insights screen' },
      { image: 'assets/screens/settings.png', title: 'Settings', alt: 'Cydit settings screen' },
    ],
    launchEyebrow: 'Beta ready',
    launchTitle: 'Cydit is ready for first users',
    launchText: 'The site can be shown to investors, early users, and the team. Content is managed from a hidden admin panel.',
    launchCta: 'Login to account',
    footerText: 'AI memory that turns thoughts into motion.',
    telegramLabel: 'Telegram',
    loginEyebrow: 'Login',
    loginTitle: 'Login to Cydit',
    loginField: 'Email / login',
    passwordField: 'Password',
    adminEyebrow: 'Admin',
    adminTitle: 'Site editor',
    logout: 'Logout',
    save: 'Save changes',
    reset: 'Reset',
    saved: 'Saved',
    resetDone: 'Content reset',
    exportDone: 'JSON copied to clipboard',
    userLogged: 'Logged in. Admin panel is available only to the owner.',
    adminLogged: 'Admin panel is open.',
    emptyLogin: 'Enter login and password.',
  },
};

const adminUi = {
  ru: {
    global: 'Общее',
    visibility: 'Видимость секций',
    texts: 'Тексты',
    navigation: 'Навигация',
    signals: 'Сигналы',
    metrics: 'Метрики',
    features: 'Блоки продукта',
    flow: 'Маршрут',
    screens: 'Скриншоты',
    add: 'Добавить',
    remove: 'Удалить',
    export: 'Экспорт JSON',
    reset: 'Сбросить',
    logo: 'Логотип',
    heroMainImage: 'Главное фото hero',
    heroSideImage: 'Второе фото hero',
    email: 'Почта',
    telegram: 'Telegram',
    title: 'Заголовок',
    text: 'Текст',
    label: 'Подпись',
    image: 'Фото',
    alt: 'Alt текст',
    href: 'Ссылка',
    number: 'Номер',
    value: 'Значение',
  },
  en: {
    global: 'Global',
    visibility: 'Section visibility',
    texts: 'Texts',
    navigation: 'Navigation',
    signals: 'Signals',
    metrics: 'Metrics',
    features: 'Product blocks',
    flow: 'Flow',
    screens: 'Screenshots',
    add: 'Add',
    remove: 'Remove',
    export: 'Export JSON',
    reset: 'Reset',
    logo: 'Logo',
    heroMainImage: 'Hero main image',
    heroSideImage: 'Hero side image',
    email: 'Email',
    telegram: 'Telegram',
    title: 'Title',
    text: 'Text',
    label: 'Label',
    image: 'Image',
    alt: 'Alt text',
    href: 'Link',
    number: 'Number',
    value: 'Value',
  },
};

const state = {
  content: loadContent(),
  lang: localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ru',
  editLang: localStorage.getItem(EDIT_LANG_KEY) === 'en' ? 'en' : 'ru',
  auth: loadAuth(),
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function merge(base, patch) {
  for (const [key, value] of Object.entries(patch || {})) {
    if (Array.isArray(value)) base[key] = value;
    else if (value && typeof value === 'object') base[key] = merge(base[key] || {}, value);
    else base[key] = value;
  }
  return base;
}

function loadContent() {
  try {
    return merge(clone(defaultContent), JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
  } catch (_) {
    return clone(defaultContent);
  }
}

function loadAuth() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || '{"role":"guest"}');
  } catch (_) {
    return { role: 'guest' };
  }
}

function saveContent() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.content));
}

function saveAuth() {
  localStorage.setItem(AUTH_KEY, JSON.stringify(state.auth));
}

function locale(lang = state.lang) {
  return state.content[lang] || state.content.ru;
}

function ui(key) {
  return adminUi[state.lang]?.[key] || adminUi.en[key] || key;
}

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function render() {
  const copy = locale();
  document.documentElement.lang = state.lang;
  document.title = `${copy.brandName} - ${copy.heroTitle}`;
  document.querySelector('[data-lang-toggle]').textContent = state.lang.toUpperCase();

  document.querySelectorAll('[data-text]').forEach((node) => {
    node.textContent = copy[node.dataset.text] ?? '';
  });

  document.querySelectorAll('[data-image]').forEach((node) => {
    const key = node.dataset.image;
    node.src = state.content.images[key] || '';
  });

  renderNav(copy);
  renderSignals(copy);
  renderMetrics(copy);
  renderFeatures(copy);
  renderFlow(copy);
  renderScreens(copy);
  renderLinks();
  renderSections();
  renderAdmin();
}

function renderNav(copy) {
  document.getElementById('mainNav').innerHTML = copy.nav
    .map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`)
    .join('');
}

function renderSignals(copy) {
  document.getElementById('signalRow').innerHTML = copy.signals.map((item) => `<span>${esc(item)}</span>`).join('');
}

function renderMetrics(copy) {
  document.getElementById('metricBand').innerHTML = copy.metrics
    .map((item) => `<article><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span></article>`)
    .join('');
}

function renderFeatures(copy) {
  document.getElementById('featureGrid').innerHTML = copy.features
    .map(
      (item) => `
        <article class="feature-card">
          <span>${esc(item.number)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </article>`,
    )
    .join('');
}

function renderFlow(copy) {
  document.getElementById('flowTrack').innerHTML = copy.flow
    .map((item) => `<article><strong>${esc(item.number)}</strong><span>${esc(item.label)}</span></article>`)
    .join('');
}

function renderScreens(copy) {
  document.getElementById('screenGrid').innerHTML = copy.screens
    .map(
      (item) => `
        <figure>
          <img src="${esc(item.image)}" alt="${esc(item.alt)}" />
          <figcaption>${esc(item.title)}</figcaption>
        </figure>`,
    )
    .join('');
}

function renderLinks() {
  const email = state.content.links.email;
  const telegram = state.content.links.telegram;
  document.getElementById('emailLink').href = `mailto:${email}`;
  document.getElementById('emailLink').textContent = email;
  document.getElementById('telegramLink').href = telegram;
  document.getElementById('telegramLink').textContent = locale().telegramLabel;
}

function renderSections() {
  document.querySelectorAll('[data-section-node]').forEach((node) => {
    const key = node.dataset.sectionNode;
    node.hidden = state.content.sections[key] === false;
  });
}

function renderAdmin() {
  const panel = document.getElementById('adminPanel');
  panel.hidden = state.auth.role !== 'admin';
  if (panel.hidden) return;

  document.querySelector('[data-export-content]').textContent = ui('export');
  document.querySelector('[data-reset]').textContent = ui('reset');

  document.querySelectorAll('[data-edit-lang]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.editLang === state.editLang);
  });

  document.getElementById('adminForm').innerHTML = buildAdminForm();
}

function buildAdminForm() {
  const copy = locale(state.editLang);
  return `
    <fieldset>
      <legend>${esc(ui('global'))}</legend>
      ${textInput('links.email', ui('email'), state.content.links.email)}
      ${textInput('links.telegram', ui('telegram'), state.content.links.telegram)}
      ${imageInput('images.brandLogo', ui('logo'), state.content.images.brandLogo)}
      ${imageInput('images.heroMainImage', ui('heroMainImage'), state.content.images.heroMainImage)}
      ${imageInput('images.heroSideImage', ui('heroSideImage'), state.content.images.heroSideImage)}
    </fieldset>

    <fieldset>
      <legend>${esc(ui('visibility'))}</legend>
      ${Object.entries(state.content.sections)
        .map(([key, value]) => toggleInput(`sections.${key}`, key, value))
        .join('')}
    </fieldset>

    <fieldset>
      <legend>${esc(ui('texts'))} (${state.editLang.toUpperCase()})</legend>
      ${textInput(`${state.editLang}.brandName`, 'brandName', copy.brandName)}
      ${textInput(`${state.editLang}.loginButton`, 'loginButton', copy.loginButton)}
      ${textInput(`${state.editLang}.openApp`, 'openApp', copy.openApp)}
      ${textInput(`${state.editLang}.heroEyebrow`, 'heroEyebrow', copy.heroEyebrow)}
      ${textInput(`${state.editLang}.heroTitle`, 'heroTitle', copy.heroTitle)}
      ${textareaInput(`${state.editLang}.heroText`, 'heroText', copy.heroText)}
      ${textInput(`${state.editLang}.heroPrimary`, 'heroPrimary', copy.heroPrimary)}
      ${textInput(`${state.editLang}.heroSecondary`, 'heroSecondary', copy.heroSecondary)}
      ${textInput(`${state.editLang}.productEyebrow`, 'productEyebrow', copy.productEyebrow)}
      ${textInput(`${state.editLang}.productTitle`, 'productTitle', copy.productTitle)}
      ${textInput(`${state.editLang}.flowEyebrow`, 'flowEyebrow', copy.flowEyebrow)}
      ${textInput(`${state.editLang}.flowTitle`, 'flowTitle', copy.flowTitle)}
      ${textInput(`${state.editLang}.screensEyebrow`, 'screensEyebrow', copy.screensEyebrow)}
      ${textInput(`${state.editLang}.screensTitle`, 'screensTitle', copy.screensTitle)}
      ${textInput(`${state.editLang}.launchEyebrow`, 'launchEyebrow', copy.launchEyebrow)}
      ${textInput(`${state.editLang}.launchTitle`, 'launchTitle', copy.launchTitle)}
      ${textareaInput(`${state.editLang}.launchText`, 'launchText', copy.launchText)}
      ${textInput(`${state.editLang}.launchCta`, 'launchCta', copy.launchCta)}
      ${textInput(`${state.editLang}.footerText`, 'footerText', copy.footerText)}
      ${textInput(`${state.editLang}.telegramLabel`, 'telegramLabel', copy.telegramLabel)}
      ${textInput(`${state.editLang}.loginEyebrow`, 'loginEyebrow', copy.loginEyebrow)}
      ${textInput(`${state.editLang}.loginTitle`, 'loginTitle', copy.loginTitle)}
      ${textInput(`${state.editLang}.loginField`, 'loginField', copy.loginField)}
      ${textInput(`${state.editLang}.passwordField`, 'passwordField', copy.passwordField)}
      ${textInput(`${state.editLang}.adminEyebrow`, 'adminEyebrow', copy.adminEyebrow)}
      ${textInput(`${state.editLang}.adminTitle`, 'adminTitle', copy.adminTitle)}
      ${textInput(`${state.editLang}.logout`, 'logout', copy.logout)}
      ${textInput(`${state.editLang}.save`, 'save', copy.save)}
      ${textInput(`${state.editLang}.reset`, 'reset', copy.reset)}
    </fieldset>

    ${arrayEditor(ui('navigation'), `${state.editLang}.nav`, copy.nav, ['label', 'href'])}
    ${simpleArrayEditor(ui('signals'), `${state.editLang}.signals`, copy.signals)}
    ${arrayEditor(ui('metrics'), `${state.editLang}.metrics`, copy.metrics, ['value', 'label'])}
    ${arrayEditor(ui('features'), `${state.editLang}.features`, copy.features, ['number', 'title', 'text'])}
    ${arrayEditor(ui('flow'), `${state.editLang}.flow`, copy.flow, ['number', 'label'])}
    ${arrayEditor(ui('screens'), `${state.editLang}.screens`, copy.screens, ['image', 'title', 'alt'], true)}

    <div class="admin-actions admin-actions-bottom">
      <button class="primary-button" type="submit">${esc(copy.save)}</button>
    </div>
  `;
}

function textInput(path, label, value) {
  return `<label><span>${esc(label)}</span><input data-admin-path="${esc(path)}" value="${esc(value)}" /></label>`;
}

function textareaInput(path, label, value) {
  return `<label><span>${esc(label)}</span><textarea data-admin-path="${esc(path)}" rows="4">${esc(value)}</textarea></label>`;
}

function imageInput(path, label, value) {
  return `
    <label>
      <span>${esc(label)}</span>
      <input data-admin-path="${esc(path)}" value="${esc(value)}" />
      <input class="file-input" type="file" accept="image/*" data-upload-target="${esc(path)}" />
    </label>`;
}

function toggleInput(path, label, value) {
  return `
    <label class="toggle-row">
      <span>${esc(label)}</span>
      <input type="checkbox" data-admin-path="${esc(path)}" ${value ? 'checked' : ''} />
    </label>`;
}

function arrayEditor(title, path, rows, fields, imageFields = false) {
  return `
    <fieldset>
      <legend>${esc(title)}</legend>
      <div class="repeat-list" data-repeat="${esc(path)}">
        ${rows
          .map(
            (row, index) => `
              <article class="repeat-item">
                <div class="repeat-top">
                  <strong>${index + 1}</strong>
                  <button class="mini-button" type="button" data-remove-row="${esc(path)}" data-index="${index}">${esc(ui('remove'))}</button>
                </div>
                ${fields
                  .map((field) =>
                    field === 'text'
                      ? textareaInput(`${path}.${index}.${field}`, ui(field), row[field])
                      : imageFields && field === 'image'
                        ? imageInput(`${path}.${index}.${field}`, ui(field), row[field])
                        : textInput(`${path}.${index}.${field}`, ui(field), row[field]),
                  )
                  .join('')}
              </article>`,
          )
          .join('')}
      </div>
      <button class="secondary-button" type="button" data-add-row="${esc(path)}" data-fields="${esc(fields.join(','))}">${esc(ui('add'))} ${esc(title)}</button>
    </fieldset>`;
}

function simpleArrayEditor(title, path, rows) {
  return `
    <fieldset>
      <legend>${esc(title)}</legend>
      <div class="repeat-list">
        ${rows.map((value, index) => textInput(`${path}.${index}`, `${title} ${index + 1}`, value)).join('')}
      </div>
      <button class="secondary-button" type="button" data-add-simple="${esc(path)}">${esc(ui('add'))} ${esc(title)}</button>
    </fieldset>`;
}

function setPath(path, value) {
  const parts = path.split('.');
  let target = state.content;
  parts.slice(0, -1).forEach((part) => {
    target = target[Number.isNaN(Number(part)) ? part : Number(part)];
  });
  const last = parts.at(-1);
  target[Number.isNaN(Number(last)) ? last : Number(last)] = value;
}

function getPath(path) {
  return path.split('.').reduce((target, part) => target?.[Number.isNaN(Number(part)) ? part : Number(part)], state.content);
}

function syncAdminForm() {
  document.querySelectorAll('[data-admin-path]').forEach((field) => {
    const value = field.type === 'checkbox' ? field.checked : field.value;
    setPath(field.dataset.adminPath, value);
  });
}

function openLogin() {
  const dialog = document.getElementById('loginDialog');
  document.getElementById('loginMessage').textContent = '';
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

function closeLogin() {
  const dialog = document.getElementById('loginDialog');
  if (typeof dialog.close === 'function') dialog.close();
  else dialog.removeAttribute('open');
}

document.addEventListener('click', async (event) => {
  if (event.target.closest('[data-open-login]')) openLogin();

  if (event.target.closest('[data-close-login]')) closeLogin();

  if (event.target.closest('[data-lang-toggle]')) {
    state.lang = state.lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem(LANG_KEY, state.lang);
    render();
  }

  const editLang = event.target.closest('[data-edit-lang]');
  if (editLang) {
    syncAdminForm();
    state.editLang = editLang.dataset.editLang;
    localStorage.setItem(EDIT_LANG_KEY, state.editLang);
    render();
  }

  if (event.target.closest('[data-logout]')) {
    state.auth = { role: 'guest' };
    saveAuth();
    render();
  }

  if (event.target.closest('[data-reset]')) {
    state.content = clone(defaultContent);
    saveContent();
    render();
    window.alert(locale().resetDone);
  }

  if (event.target.closest('[data-export-content]')) {
    const json = JSON.stringify(state.content, null, 2);
    await navigator.clipboard?.writeText(json);
    window.alert(locale().exportDone);
  }

  const addRow = event.target.closest('[data-add-row]');
  if (addRow) {
    syncAdminForm();
    const fields = addRow.dataset.fields.split(',');
    getPath(addRow.dataset.addRow).push(Object.fromEntries(fields.map((field) => [field, ''])));
    render();
  }

  const addSimple = event.target.closest('[data-add-simple]');
  if (addSimple) {
    syncAdminForm();
    getPath(addSimple.dataset.addSimple).push('');
    render();
  }

  const removeRow = event.target.closest('[data-remove-row]');
  if (removeRow) {
    syncAdminForm();
    getPath(removeRow.dataset.removeRow).splice(Number(removeRow.dataset.index), 1);
    render();
  }
});

document.addEventListener('change', (event) => {
  const upload = event.target.closest('[data-upload-target]');
  if (!upload?.files?.length) return;
  const reader = new FileReader();
  reader.onload = () => {
    setPath(upload.dataset.uploadTarget, reader.result);
    saveContent();
    render();
  };
  reader.readAsDataURL(upload.files[0]);
});

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.login.value.trim();
  const password = form.elements.password.value.trim();
  const message = document.getElementById('loginMessage');

  if (!login || !password) {
    message.textContent = locale().emptyLogin;
    return;
  }

  if (login === 'sisadmin' && password === 'sisadmin') {
    state.auth = { role: 'admin', login };
    message.textContent = locale().adminLogged;
  } else {
    state.auth = { role: 'user', login };
    message.textContent = locale().userLogged;
  }
  saveAuth();
  render();
  setTimeout(closeLogin, 450);
});

document.getElementById('adminForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (state.auth.role !== 'admin') return;
  syncAdminForm();
  saveContent();
  render();
  window.alert(locale().saved);
});

render();
