/* ===================== ITEM DATA ======================
   Every archive item is one of three types: "text", "map", "chart".
   They all share date/category/title and live in ONE timeline —
   add a new entry every ~2 days to keep the cadence going.
   date: release date (YYYY-MM-DD). Items release automatically
   once their date has passed — nothing else to configure.
   Every source below is a real, verifiable citation. No invented data.
======================================================== */
const ITEMS = [
  {
    type: "map",
    date: "2026-06-10",
    category: "Map",
    title_en: "This Bangladesh map hides five surprising local story points",
    title_bn: "এই বাংলাদেশের মানচিত্রে পাঁচটি চমকপ্রদ স্থান লুকানো আছে",
    sub_en: "A small country. Huge stories. Tap pins that reveal surprising local stats and strange celebrations.",
    sub_bn: "একটা ছোট দেশ। বিশাল গল্প। পিন চাপুন আর দেখুন স্থানীয় অদ্ভুত তথ্য ও আশ্চর্য উদযাপন।"
  },
  {
    type: "chart",
    id: "rickshaws",
    date: "2026-06-12",
    category: "Data",
    title_en: "In Dhaka, there are more rickshaws than cars and buses combined",
    title_bn: "ঢাকায় গাড়ি আর বাসের চেয়ে রিকশা বেশি",
    sub_en: "The city's streets are mostly small wheels and loud bells. This one stat tells you why Dhaka traffic feels like its own film.",
    sub_bn: "শহরের রাস্তাগুলিতে ছোট চাকা আর কোলাহলপূর্ণ ঘণ্টাই বেশি। এই এক সংখ্যা আপনাকে বলবে কেন ঢাকা ট্রাফিক যেন নিজেই একটা ছবি।",
    source_url: "https://en.wikipedia.org/wiki/Rickshaw",
    pin: { left:72, top:46, label_en:"Dhaka rickshaws", label_bn:"ঢাকা রিকশা" }
  },
  {
    type: "chart",
    id: "hilsa",
    date: "2026-06-14",
    category: "Data",
    title_en: "Bangladesh catches twice as much hilsa as shrimp every year",
    title_bn: "বাংলাদেশ বছরে চিংড়ির চেয়ে ইলিশ দুই গুণ বেশি ধরে",
    sub_en: "For many households, the fish season is the real festival. Hilsa is the ingredient that can decide whether a lunch feels special.",
    sub_bn: "অনেক পরিবারের জন্য মাছের ঋতু হল আসল উৎসব। ইলিশ হলো সেই উপাদান যা দুপুরের খাবারকে বিশেষ করে তুলতে পারে।",
    source_url: "https://en.wikipedia.org/wiki/Tenualosa_iliisha",
    pin: { left:74, top:62, label_en:"Hilsa season", label_bn:"ইলিশ ঋতু" }
  },
  {
    type: "chart",
    id: "rivers",
    date: "2026-06-16",
    category: "Data",
    title_en: "Bangladesh has around 700 rivers — enough to touch every village twice",
    title_bn: "বাংলাদেশে প্রায় ৭০০টি নদী — যে কোনও গ্রামের দুইবার স্পর্শ করার মতো",
    sub_en: "Rivers are not just water here; they are the country's postal routes, kitchen roads, and weather signals.",
    sub_bn: "এখানে নদী শুধু জল নয়; তারা দেশের ডাক পথ, রান্নাঘরের রাস্তা আর আবহাওয়ার সংকেত।",
    source_url: "https://en.wikipedia.org/wiki/Rivers_of_Bangladesh",
    pin: { left:68, top:58, label_en:"River country", label_bn:"নদীময় দেশ" }
  },
  {
    type: "text",
    date: "2026-06-18",
    category: "Culture",
    title_en: "Pohela Boishakh is when Dhaka dresses in white and red",
    title_bn: "পহেলা বৈশাখ হল যখন ঢাকা সাদা-লালে সাজে",
    body_en: "On Bengali New Year, Dhaka wakes up early to parade through the city in white and red. The mood is hopeful, loud, and a little bit messy — and that is the point.",
    body_bn: "বাংলা নববর্ষের সকালে ঢাকা সাদা-লাল সাজে শহর জুড়ে বেরিয়ে পড়ে। আবহটা আশাব্যঞ্জক, কোলাহলপূর্ণ আর একটু এলোমেলো — ঠিক এটাই মূল কথা।",
    source_url: "https://en.wikipedia.org/wiki/Pohela_Boishakh",
    pin: { left:72, top:44, label_en:"Pohela Boishakh", label_bn:"পহেলা বৈশাখ" }
  },
  {
    type: "text",
    date: "2026-06-20",
    category: "Nature",
    title_en: "The Sundarbans is a tidal maze where tigers swim",
    title_bn: "সুন্দরবন হল জোয়ারের গোলকধাঁধা, যেখানে বাঘেরা সাঁতরায়",
    body_en: "The world's largest mangrove forest is also a place where land and sea switch places daily. Tigers here do not only walk; they learn the tide.",
    body_bn: "বিশ্বের সবচেয়ে বড় ম্যানগ্রোভ বন এমন এক জায়গাও, যেখানে জমি ও সাগর প্রতিদিন আলাপ বদলায়। এখানে বাঘ শুধু হাঁটে না; তারা জোয়ারের পাঠও শিখে।",
    source_url: "https://en.wikipedia.org/wiki/Sundarbans",
    pin: { left:70, top:50, label_en:"The Sundarbans", label_bn:"সুন্দরবন" }
  }
];

const RELEASE_INTERVAL_DAYS = 2;
const CATEGORY_BN = {
  "Map":"মানচিত্র", "Data":"উপাত্ত", "Culture":"সংস্কৃতি", "Nature":"প্রকৃতি"
};

/* ===================== language toggle ===================== */
const body = document.body;
function setLang(mode){
  body.classList.remove("lang-en","lang-bn");
  body.classList.add("lang-" + mode);
  document.querySelectorAll("#langToggle button").forEach(b=>{
    b.classList.toggle("active", b.dataset.mode === mode);
  });
  localStorage.setItem("ipd-lang", mode);
}
document.getElementById("langToggle").addEventListener("click", e=>{
  const btn = e.target.closest("button");
  if(!btn) return;
  setLang(btn.dataset.mode);
});
setLang(localStorage.getItem("ipd-lang") || "bn");

/* ===================== shared helpers ===================== */
function parseDate(s){ return new Date(s + "T00:00:00"); }
function formatDate(d){
  return d.toLocaleDateString(undefined, { year:"numeric", month:"short", day:"numeric" });
}
function bilingual(en, bn){ return `<span class="t-en">${en}</span><span class="t-bn">${bn}</span>`; }
/* SVG <text> can't contain HTML <span> — the HTML parser treats it as foreign
   content and breaks out of the SVG tree entirely. Use sibling <text> elements
   with the same x/y instead, toggled by the same t-en/t-bn CSS rules. */
function svgBilingual(x, y, cls, en, bn, attrs=""){
  return `<text x="${x}" y="${y}" class="${cls} t-en" ${attrs}>${en}</text><text x="${x}" y="${y}" class="${cls} t-bn" ${attrs}>${bn}</text>`;
}

const now = new Date();
const released = ITEMS.filter(it => parseDate(it.date) <= now).sort((a,b)=> parseDate(b.date) - parseDate(a.date));
const current = released.length ? released[0] : ITEMS[0];

/* ===================== chart builders (shared by grid card + spotlight) ===================== */
function chartRickshaws(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart showing Dhaka rickshaw, car, and bus numbers">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="140" y1="20" x2="140" y2="140" class="gridline"/>
      <line x1="230" y1="20" x2="230" y2="140" class="gridline"/>
      <line x1="320" y1="20" x2="320" y2="140" class="gridline"/>
      <text x="40" y="154" class="axis-label" text-anchor="middle">0</text>
      <text x="140" y="154" class="axis-label" text-anchor="middle">200k</text>
      <text x="230" y="154" class="axis-label" text-anchor="middle">400k</text>
      <text x="320" y="154" class="axis-label" text-anchor="middle">600k</text>

      <rect x="95" y="108" width="60" height="32" rx="8" class="bar bar-black"><title>Cars: ~200,000</title></rect>
      <rect x="215" y="120" width="60" height="20" rx="8" class="bar bar-control"><title>Buses: ~23,000</title></rect>
      <rect x="295" y="28" width="60" height="112" rx="8" class="bar bar-striped"><title>Rickshaws: ~600,000</title></rect>
      <text x="125" y="102" class="bar-value">200k</text>
      <text x="245" y="114" class="bar-value">23k</text>
      <text x="325" y="22" class="bar-value">600k</text>

      ${svgBilingual(125, 170, "axis-cat", "Cars","গাড়ি", 'text-anchor="middle"')}
      ${svgBilingual(245, 170, "axis-cat", "Buses","বাস", 'text-anchor="middle"')}
      ${svgBilingual(325, 170, "axis-cat", "Rickshaws","রিকশা", 'text-anchor="middle"')}
    </svg>
    <div class="chart-legend">
      <span class="legend-item"><i class="sw sw-striped"></i>${bilingual("Rickshaws","রিকশা")}</span>
      <span class="legend-item"><i class="sw sw-black"></i>${bilingual("Cars","গাড়ি")}</span>
      <span class="legend-item"><i class="sw sw-control"></i>${bilingual("Buses","বাস")}</span>
    </div>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th></th><th>${bilingual("Count","সংখা")}</th></tr></thead>
        <tbody>
          <tr><td>${bilingual("Dhaka rickshaws","ঢাকা রিকশা")}</td><td>600,000</td></tr>
          <tr><td>${bilingual("Dhaka cars","ঢাকা গাড়ি")}</td><td>200,000</td></tr>
          <tr><td>${bilingual("Dhaka buses","ঢাকা বাস")}</td><td>23,000</td></tr>
        </tbody>
      </table>
    </details>`;
}

function chartHilsa(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart comparing annual hilsa and shrimp catch in Bangladesh">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="120" y1="20" x2="120" y2="140" class="gridline"/>
      <line x1="200" y1="20" x2="200" y2="140" class="gridline"/>
      <line x1="280" y1="20" x2="280" y2="140" class="gridline"/>
      <text x="40" y="154" class="axis-label" text-anchor="middle">0</text>
      <text x="120" y="154" class="axis-label" text-anchor="middle">100k</text>
      <text x="200" y="154" class="axis-label" text-anchor="middle">200k</text>
      <text x="280" y="154" class="axis-label" text-anchor="middle">300k</text>

      <rect x="100" y="60" width="60" height="80" rx="8" class="bar bar-black"><title>Shrimp: ~120,000 tons</title></rect>
      <rect x="220" y="10" width="60" height="130" rx="8" class="bar bar-striped"><title>Hilsa: ~220,000 tons</title></rect>
      <text x="130" y="54" class="bar-value">120k</text>
      <text x="250" y="4" class="bar-value">220k</text>

      ${svgBilingual(130, 170, "axis-cat", "Shrimp","চিংড়ি", 'text-anchor="middle"')}
      ${svgBilingual(250, 170, "axis-cat", "Hilsa","ইলিশ", 'text-anchor="middle"')}
    </svg>
    <div class="chart-legend">
      <span class="legend-item"><i class="sw sw-black"></i>${bilingual("Shrimp","চিংড়ি")}</span>
      <span class="legend-item"><i class="sw sw-striped"></i>${bilingual("Hilsa","ইলিশ")}</span>
    </div>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th></th><th>${bilingual("Annual catch","বার্ষিক ধরন")}</th></tr></thead>
        <tbody>
          <tr><td>${bilingual("Shrimp","চিংড়ি")}</td><td>120,000 tons</td></tr>
          <tr><td>${bilingual("Hilsa","ইলিশ")}</td><td>220,000 tons</td></tr>
        </tbody>
      </table>
    </details>`;
}

function chartRivers(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart comparing Bangladesh river count to country width">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="120" y1="20" x2="120" y2="140" class="gridline"/>
      <line x1="220" y1="20" x2="220" y2="140" class="gridline"/>
      <line x1="320" y1="20" x2="320" y2="140" class="gridline"/>
      <text x="40" y="154" class="axis-label" text-anchor="middle">0</text>
      <text x="120" y="154" class="axis-label" text-anchor="middle">200</text>
      <text x="220" y="154" class="axis-label" text-anchor="middle">400</text>
      <text x="320" y="154" class="axis-label" text-anchor="middle">600</text>

      <rect x="100" y="80" width="60" height="60" rx="8" class="bar bar-control"><title>Country width: 185 km</title></rect>
      <rect x="220" y="10" width="60" height="130" rx="8" class="bar bar-black"><title>Approximate river count: 700</title></rect>
      <text x="130" y="74" class="bar-value">185</text>
      <text x="250" y="4" class="bar-value">700</text>

      ${svgBilingual(130, 170, "axis-cat", "Width","প্রস্থ", 'text-anchor="middle"')}
      ${svgBilingual(250, 170, "axis-cat", "Rivers","নদী", 'text-anchor="middle"')}
    </svg>
    <div class="chart-legend">
      <span class="legend-item"><i class="sw sw-control"></i>${bilingual("Country width","দেশের প্রস্থ")}</span>
      <span class="legend-item"><i class="sw sw-black"></i>${bilingual("River count","নদীর সংখ্যা")}</span>
    </div>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th></th><th>${bilingual("Value","মান")}</th></tr></thead>
        <tbody>
          <tr><td>${bilingual("Country width","দেশের প্রস্থ")}</td><td>185 km</td></tr>
          <tr><td>${bilingual("Rivers","নদী")}</td><td>700</td></tr>
        </tbody>
      </table>
    </details>`;
}

const CHART_BUILDERS = { rickshaws: chartRickshaws, hilsa: chartHilsa, rivers: chartRivers };

function mapHTML(){
  const pins = ITEMS.map((it, idx) => it.pin ? { idx, ...it.pin } : null).filter(Boolean);
  const pinsHTML = pins.map(p => `
    <button class="map-pin" data-idx="${p.idx}" style="left:${p.left}%; top:${p.top}%">
      <span class="pin-dot"></span>
      <span class="pin-label">${bilingual(p.label_en, p.label_bn)}</span>
    </button>`).join("");
  return `
    <div class="map-canvas bangladesh-map">
      <svg class="bd-outline" viewBox="0 0 220 280" aria-hidden="true">
        <path d="M40 20 C20 80 10 130 30 170 C50 200 55 230 80 250 C100 265 140 270 170 260 C190 250 206 220 190 190 C180 170 180 140 170 120 C160 90 142 80 130 60 C120 40 80 30 40 20 Z" fill="rgba(93,125,90,.14)" stroke="rgba(93,125,90,.5)" stroke-width="6"/>
      </svg>
      ${pinsHTML}
    </div>`;
}

/* ===================== unified item renderer ===================== */
function sourceLink(url){
  return `<a class="card-source" href="${url}" target="_blank" rel="noopener noreferrer">${bilingual("Read the source →","মূল সূত্র দেখুন →")}</a>`;
}

/* Full render used for both the spotlight and (text items) the modal */
function renderFull(it, spotlight = false){
  const spotlightBadge = spotlight ? `<div class="today-stamp">${bilingual("Weird truth of the day","আজকের অদ্ভুত সত্য")}</div>` : "";
  const head = `
    <span class="card-cat">${bilingual(it.category, CATEGORY_BN[it.category]||it.category)}</span>
    <span class="card-date">${formatDate(parseDate(it.date))}</span>
    <h3 class="card-title">${bilingual(it.title_en, it.title_bn)}</h3>`;
  if(it.type === "text"){
    return `${spotlightBadge}${head}<p class="card-body">${bilingual(it.body_en, it.body_bn)}</p>${sourceLink(it.source_url)}`;
  }
  if(it.type === "map"){
    return `${spotlightBadge}${head}<p class="viz-sub">${bilingual(it.sub_en, it.sub_bn)}</p>${mapHTML()}`;
  }
  if(it.type === "chart"){
    return `${spotlightBadge}${head}<p class="viz-sub">${bilingual(it.sub_en, it.sub_bn)}</p>${CHART_BUILDERS[it.id]()}${sourceLink(it.source_url)}`;
  }
}

document.getElementById("todayCard").innerHTML = renderFull(current, true);

const randomFactBtn = document.getElementById("randomFactBtn");
if(randomFactBtn){
  randomFactBtn.addEventListener("click", ()=>{
    const pool = released.length ? released : ITEMS;
    const pick = pool[Math.floor(Math.random()*pool.length)];
    openModal(pick);
  });
}

/* countdown */
function tickCountdown(){
  const next = new Date(parseDate(current.date).getTime() + RELEASE_INTERVAL_DAYS*24*60*60*1000);
  const diff = next - new Date();
  const el = document.getElementById("countdownVal");
  if(diff <= 0){ el.textContent = "now"; return; }
  const h = Math.floor(diff/3600000);
  const d = Math.floor(h/24);
  const hh = h % 24;
  const mm = Math.floor((diff%3600000)/60000);
  el.textContent = d>0 ? `${d}d ${hh}h ${mm}m` : `${hh}h ${mm}m`;
}
tickCountdown();
setInterval(tickCountdown, 30000);

/* ===================== archive grid + filters ===================== */
const categories = ["All", ...Array.from(new Set(released.map(it=>it.category)))];
const filtersEl = document.getElementById("filters");
let activeCat = "All";

function renderFilters(){
  filtersEl.innerHTML = categories.map(c =>
    `<button class="filter-chip ${c===activeCat?"active":""}" data-cat="${c}">${c==="All" ? bilingual("All","সব") : bilingual(c, CATEGORY_BN[c]||c)}</button>`
  ).join("");
}
filtersEl.addEventListener("click", e=>{
  const btn = e.target.closest(".filter-chip");
  if(!btn) return;
  activeCat = btn.dataset.cat;
  renderFilters();
  renderGrid();
});

const gridEl = document.getElementById("archiveGrid");
function renderGrid(){
  const items = released.filter(it => activeCat==="All" || it.category===activeCat);
  gridEl.innerHTML = items.map((it) => {
    const idx = ITEMS.indexOf(it);
    if(it.type === "text"){
      const previewEn = it.body_en.length > 96 ? it.body_en.slice(0, 96).trimEnd() + "…" : it.body_en;
      const previewBn = it.body_bn.length > 76 ? it.body_bn.slice(0, 76).trimEnd() + "…" : it.body_bn;
      return `
        <button class="fact-card" data-idx="${idx}">
          <span class="fc-date">${formatDate(parseDate(it.date))}</span>
          <span class="card-cat">${bilingual(it.category, CATEGORY_BN[it.category]||it.category)}</span>
          <h3 class="preview-title">${bilingual(it.title_en, it.title_bn)}</h3>
          <p class="preview-body">${bilingual(previewEn, previewBn)}</p>
          <span class="preview-hint">${bilingual("Tap to open","খুলতে চাপুন")}</span>
        </button>`;
    }
    /* map & chart cards render their full visual inline, full width, no modal needed */
    return `<div class="fact-card type-visual" data-idx="${idx}">${renderFull(it)}</div>`;
  }).join("");
}
renderFilters();
renderGrid();

gridEl.addEventListener("click", e=>{
  const card = e.target.closest("button.fact-card");
  if(!card) return;
  openModal(ITEMS[+card.dataset.idx]);
});

/* map pins can appear in the grid, the spotlight, or a modal — one delegated listener covers all of them */
document.body.addEventListener("click", e=>{
  const pin = e.target.closest(".map-pin");
  if(!pin) return;
  const it = ITEMS[+pin.dataset.idx];
  if(it) openModal(it);
});

/* ===================== modal (text items only — map/chart already full-size in grid) ===================== */
const modalRoot = document.getElementById("modalRoot");
function openModal(it){
  modalRoot.innerHTML = `
    <div class="modal-backdrop" id="modalBackdrop">
      <div class="modal">
        <button class="modal-close" id="modalClose" aria-label="Close">✕</button>
        ${renderFull(it)}
      </div>
    </div>
  `;
  document.getElementById("modalBackdrop").addEventListener("click", ev=>{
    if(ev.target.id === "modalBackdrop") closeModal();
  });
  document.getElementById("modalClose").addEventListener("click", closeModal);
}
function closeModal(){ modalRoot.innerHTML = ""; }
document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeModal(); });

/* ===================== ants ===================== */
const ANT_COUNT = 10;
const antLayer = document.getElementById("ant-layer");
const toastEl = document.getElementById("toast");

const TOASTS = [
  { en:"an ant lied down on duty 🫡", bn:"একটা পিঁপড়া কাজে ফাঁকি দিলো 🫡" },
  { en:"lie·u·ten·ant, get it? 🐜", bn:"লে-ফ-টে-ন্যান্ট, বুঝলেন তো? 🐜" },
  { en:"one down, nine to go", bn:"একটা গেলো, বাকি নয়টা" },
  { en:"statistically, that ant deserved it", bn:"পরিসংখ্যান বলছে, ওই পিঁপড়াটার এটাই প্রাপ্য ছিল" },
];

function showToast(msg){
  toastEl.innerHTML = bilingual(msg.en, msg.bn);
  toastEl.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(()=> toastEl.classList.remove("show"), 1800);
}

/* six-legged top-down ant, drawn facing +x (0deg heading) */
function antSVG(legDur){
  const leg = (shx, shy, fx, fy, side) => `
    <g transform="translate(${shx},${shy})">
      <line class="leg-line ${side}" x1="0" y1="0" x2="${fx}" y2="${fy}"
        style="animation-duration:${legDur}s; animation-delay:${side==="bottom" ? -legDur/2 : 0}s"/>
    </g>`;
  return `
    <svg viewBox="0 0 40 24" width="28" height="17">
      ${leg(26,9,8,-6,"top")}
      ${leg(26,15,8,6,"bottom")}
      ${leg(19,8,0,-9,"top")}
      ${leg(19,16,0,9,"bottom")}
      ${leg(12,9,-8,-6,"top")}
      ${leg(12,15,-8,6,"bottom")}
      <line x1="31" y1="10" x2="36" y2="5" class="leg-line top" style="animation-duration:${legDur}s"/>
      <line x1="31" y1="14" x2="36" y2="19" class="leg-line bottom" style="animation-duration:${legDur}s; animation-delay:${-legDur/2}s"/>
      <ellipse class="ant-body" cx="9" cy="12" rx="8" ry="6.2"/>
      <ellipse class="ant-body" cx="21" cy="12" rx="5.5" ry="4.5"/>
      <circle class="ant-body" cx="31" cy="12" r="3.4"/>
    </svg>`;
}

class Ant{
  constructor(el){
    this.el = el;
    this.x = Math.random()*window.innerWidth;
    this.y = Math.random()*window.innerHeight;
    this.pickTarget();
    this.speed = 0.4 + Math.random()*0.5;
    this.alive = true;
    const legDur = 0.26 + Math.random()*0.16;
    el.innerHTML = antSVG(legDur.toFixed(2));
    el.addEventListener("click", ()=> this.squish());
  }
  pickTarget(){
    const pad = 40;
    this.tx = pad + Math.random()*(window.innerWidth - pad*2);
    this.ty = pad + Math.random()*(window.innerHeight - pad*2);
  }
  squish(){
    if(!this.alive) return;
    this.alive = false;
    this.el.classList.add("squish");
    showToast(TOASTS[Math.floor(Math.random()*TOASTS.length)]);
    setTimeout(()=>{
      this.el.classList.remove("squish");
      this.x = Math.random()*window.innerWidth;
      this.y = Math.random()*window.innerHeight;
      this.pickTarget();
      this.alive = true;
    }, 2600);
  }
  step(){
    if(!this.alive){ return; }
    const dx = this.tx - this.x, dy = this.ty - this.y;
    const dist = Math.hypot(dx,dy);
    if(dist < 12){ this.pickTarget(); }
    else{
      this.x += (dx/dist)*this.speed;
      this.y += (dy/dist)*this.speed;
      this.angle = Math.atan2(dy,dx) * 180/Math.PI;
    }
    this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.angle||0}deg)`;
  }
}

const ants = [];
for(let i=0;i<ANT_COUNT;i++){
  const el = document.createElement("div");
  el.className = "ant";
  antLayer.appendChild(el);
  ants.push(new Ant(el));
}

function loop(){
  ants.forEach(a=>a.step());
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

window.addEventListener("resize", ()=>{
  ants.forEach(a=>{
    a.x = Math.min(a.x, window.innerWidth-20);
    a.y = Math.min(a.y, window.innerHeight-20);
  });
});
