
const morningAdhkar = [
  {
    text: "أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ...",
    repeat: "مرة واحدة",
    source: "آية الكرسي — سورة البقرة: 255"
  },
  {
    text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    repeat: "مرة واحدة",
    source: "صحيح مسلم"
  },
  {
    text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    repeat: "مرة واحدة",
    source: "سنن الترمذي"
  },
  {
    text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    repeat: "مرة واحدة",
    source: "صحيح البخاري — سيد الاستغفار"
  },
  {
    text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    repeat: "4 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    repeat: "10 مرات",
    source: "صحيح البخاري"
  },
  {
    text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    repeat: "100 مرة",
    source: "صحيح مسلم"
  },
  {
    text: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  }
];

const eveningAdhkar = [
  {
    text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    repeat: "مرة واحدة",
    source: "صحيح مسلم"
  },
  {
    text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    repeat: "مرة واحدة",
    source: "سنن الترمذي"
  },
  {
    text: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    repeat: "3 مرات",
    source: "صحيح مسلم"
  },
  {
    text: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ اللهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
    repeat: "4 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
    repeat: "3 مرات",
    source: "سنن أبي داود"
  },
  {
    text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
    repeat: "مرة واحدة",
    source: "صحيح البخاري — سيد الاستغفار"
  },
  {
    text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    repeat: "100 مرة",
    source: "صحيح مسلم"
  }
];

const tasbeehOptions = [
  { label: "الله أكبر",       text: "اللهُ أَكْبَرُ",                          target: 34  },
  { label: "الحمد لله",       text: "الْحَمْدُ لِلَّهِ",                       target: 33  },
  { label: "سبحان الله",      text: "سُبْحَانَ اللهِ",                        target: 33  },
  { label: "لا إله إلا الله", text: "لَا إِلَهَ إِلَّا اللهُ",               target: 100 },
  { label: "الاستغفار",       text: "أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ", target: 100 },
];

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
let count         = 0;
let sessionTotal  = 0;
let rounds        = 0;
let selectedIdx   = 0;
const CIRCUMFERENCE = 2 * Math.PI * 108; // r=108 from SVG

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  const map = { home: 0, morning: 1, evening: 2, tasbeeh: 3 };
  document.querySelectorAll('.nav-btn').forEach((b, i) =>
    b.classList.toggle('active-nav', i === map[name])
  );
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ══════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════ */
const THEME_KEY = 'adhkar-theme';

function toggleTheme() {
  const body = document.body;
  const btn  = document.getElementById('theme-toggle-btn');
  const isGreen = body.classList.contains('theme-green');

  if (isGreen) {
    body.classList.remove('theme-green');
    btn.textContent = '🌗';
    btn.title = 'التحويل إلى الثيم الأخضر';
    localStorage.setItem(THEME_KEY, 'gold');
  } else {
    body.classList.add('theme-green');
    btn.textContent = '🌕';
    btn.title = 'التحويل إلى الثيم الذهبي';
    localStorage.setItem(THEME_KEY, 'green');
  }
  updateArcColor();
}

function updateArcColor() {
  const arc   = document.getElementById('progress-arc');
  const color = getComputedStyle(document.documentElement)
                  .getPropertyValue('--accent').trim()
                || (document.body.classList.contains('theme-green') ? '#C9A84C' : '#EF9F27');
  arc.setAttribute('stroke', color);
}

function loadSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const btn   = document.getElementById('theme-toggle-btn');
  if (saved === 'green') {
    document.body.classList.add('theme-green');
    btn.textContent = '🌕';
    btn.title = 'التحويل إلى الثيم الذهبي';
  } else {
    btn.textContent = '🌗';
    btn.title = 'التحويل إلى الثيم الأخضر';
  }
}

/* ══════════════════════════════════════════
   RENDER ADHKAR
══════════════════════════════════════════ */
function renderAdhkar(list, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = list.map((d, i) => `
    <div class="dhikr-card">
      <div class="dhikr-number">الذكر ${i + 1}</div>
      <div class="dhikr-text">${d.text}</div>
      <div class="dhikr-meta">
        <span class="dhikr-repeat">🔁 ${d.repeat}</span>
        <span class="dhikr-source">${d.source}</span>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════
   RENDER TASBEEH OPTIONS
══════════════════════════════════════════ */
function renderTasbeehOptions() {
  const container = document.getElementById('tasbeeh-options');
  container.innerHTML = tasbeehOptions.map((t, i) => `
    <button class="tasbeeh-select-btn ${i === 0 ? 'active-tasbeeh' : ''}"
      onclick="selectTasbeeh(${i})">${t.label}</button>
  `).join('');
}

function selectTasbeeh(i) {
  selectedIdx = i;
  document.querySelectorAll('.tasbeeh-select-btn').forEach((b, j) =>
    b.classList.toggle('active-tasbeeh', j === i)
  );
  document.getElementById('counter-text').textContent = tasbeehOptions[i].text;
  document.getElementById('target-label').textContent  = tasbeehOptions[i].target;
  count = 0;
  document.getElementById('counter-num').textContent = '0';
  document.getElementById('done-msg').classList.remove('show');
  updateArc();
}

/* ══════════════════════════════════════════
   COUNTER LOGIC
══════════════════════════════════════════ */
function tapCounter() {
  const target = tasbeehOptions[selectedIdx].target;

  if (count >= target) {
    count = 0;
    document.getElementById('done-msg').classList.remove('show');
  }

  count++;
  sessionTotal++;
  document.getElementById('counter-num').textContent = count;
  document.getElementById('stat-total').textContent  = sessionTotal;

  updateArc();
  triggerPulse();

  if (count >= target) {
    rounds++;
    document.getElementById('stat-rounds').textContent = rounds;
    document.getElementById('done-msg').classList.add('show');
    setTimeout(() => document.getElementById('done-msg').classList.remove('show'), 3000);
  }
}

function undoCount() {
  if (count > 0) {
    count--;
    sessionTotal = Math.max(0, sessionTotal - 1);
  }
  document.getElementById('counter-num').textContent = count;
  document.getElementById('stat-total').textContent  = sessionTotal;
  document.getElementById('done-msg').classList.remove('show');
  updateArc();
}

function resetCounter() {
  count = 0;
  document.getElementById('counter-num').textContent = '0';
  document.getElementById('done-msg').classList.remove('show');
  updateArc();
}

function updateArc() {
  const target  = tasbeehOptions[selectedIdx].target;
  const pct     = Math.min(count / target, 1);
  const offset  = CIRCUMFERENCE - pct * CIRCUMFERENCE;
  document.getElementById('progress-arc').style.strokeDashoffset = offset;
}

function triggerPulse() {
  const ring = document.getElementById('counter-ring');
  ring.classList.remove('pulse', 'pressed');
  void ring.offsetWidth; // reflow to restart animation
  ring.classList.add('pulse', 'pressed');
  setTimeout(() => ring.classList.remove('pressed'), 160);
}

/* keyboard shortcut: Space or Enter = tap */
document.addEventListener('keydown', e => {
  if ((e.code === 'Space' || e.code === 'Enter') &&
      document.getElementById('page-tasbeeh').classList.contains('active')) {
    e.preventDefault();
    tapCounter();
  }
});

/* ══════════════════════════════════════════
   STARS BACKGROUND
══════════════════════════════════════════ */
function createStars() {
  const container = document.getElementById('stars');
  const count     = 60;
  for (let i = 0; i < count; i++) {
    const star   = document.createElement('div');
    star.className = 'star';
    const size   = Math.random() * 2 + 1;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${2 + Math.random() * 3}s;
    `;
    container.appendChild(star);
  }
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadSavedTheme();
  createStars();
  renderAdhkar(morningAdhkar, 'morning-list');
  renderAdhkar(eveningAdhkar, 'evening-list');
  renderTasbeehOptions();
  document.getElementById('progress-arc').style.strokeDasharray  = CIRCUMFERENCE;
  document.getElementById('progress-arc').style.strokeDashoffset = CIRCUMFERENCE;
  updateArcColor();
});
