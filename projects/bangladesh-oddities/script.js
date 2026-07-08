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
    date: "2026-06-08",
    category: "Map",
    title_en: "This map hides some real Bangladesh weirdness — tap a pin",
    title_bn: "এই ম্যাপে কিছু আসল অদ্ভুত তথ্য লুকানো আছে — পিনে চাপ দিয়ে দেখুন",
    sub_en: "Every pin here links to a sourced, verifiable story — not filler.",
    sub_bn: "প্রতিটা পিনের পেছনে একটা সোর্স করা, যাচাই করা যায় এমন গল্প আছে — কোনো বানানো কথা না।"
  },
  {
    type: "chart",
    id: "tigers",
    date: "2026-06-10",
    category: "Nature",
    title_en: "The Sundarbans has more tigers now than it did a decade ago",
    title_bn: "সুন্দরবনে বাঘ কমছে না, উল্টো বাড়ছে",
    sub_en: "A camera-trap census across 605 forest blocks counted 125 tigers in 2024, up from 106 in 2014. Anti-poaching patrols and community rangers get most of the credit.",
    sub_bn: "২০২৪ সালে সুন্দরবনের ৬০৫টা ব্লকে ক্যামেরা-ট্র্যাপ জরিপ চালিয়ে বাঘ পাওয়া গেছে ১২৫টা, যেখানে ২০১৪ সালে ছিল ১০৬টা। পাচার ঠেকানো আর কমিউনিটি রেঞ্জারদের কাজটাই এর পেছনে বড় কারণ।",
    source_url: "https://news.mongabay.com/2024/10/tiger-population-census-in-bangladesh-shows-a-hopeful-upward-trend-in-the-sundarbans/",
    pin: { left:26, top:80, label_en:"Sundarbans", label_bn:"সুন্দরবন" }
  },
  {
    type: "chart",
    id: "hilsa",
    date: "2026-06-12",
    category: "Data",
    title_en: "Bangladesh alone lands about 86% of the world's hilsa catch",
    title_bn: "দুনিয়ার মোট ইলিশের প্রায় ৮৬%-ই ওঠে বাংলাদেশের জালে",
    sub_en: "Hilsa is the national fish, and in a good year the catch is worth over $1.7 billion. It's still cheaper per kilo than beef during peak season — try explaining that to someone abroad.",
    sub_bn: "ইলিশ বাংলাদেশের জাতীয় মাছ, আর ভালো বছরে এর বাজারমূল্য দাঁড়ায় ১৭০ কোটি ডলারেরও বেশি। তারপরও ভরা মৌসুমে কেজি হিসেবে গরুর মাংসের চেয়ে ইলিশ সস্তা পড়ে — প্রবাসে থাকা কাউকে এটা বোঝানোর চেষ্টা করে দেখুন।",
    source_url: "https://seafoodnetworkbd.com/hilsa-production-doubled-in-bangladesh-surpassing-previous-records",
    pin: { left:58, top:66, label_en:"Hilsa country", label_bn:"ইলিশের দেশ" }
  },
  {
    type: "chart",
    id: "garments",
    date: "2026-06-14",
    category: "Data",
    title_en: "A country about the size of Iowa is the world's #2 garment exporter",
    title_bn: "আয়তনে মোটামুটি আইওয়া রাজ্যের সমান একটা দেশ, তবু পোশাক রপ্তানিতে বিশ্বে ২ নম্বরে",
    sub_en: "Only China ships more clothes. In 2024, Bangladesh exported $38.48 billion worth of garments — just ahead of Vietnam — according to WTO trade data.",
    sub_bn: "শুধু চীনই বাংলাদেশের চেয়ে বেশি পোশাক রপ্তানি করে। ডব্লিউটিও-র হিসাব বলছে, ২০২৪ সালে বাংলাদেশ থেকে রপ্তানি হয়েছে ৩৮.৪৮ বিলিয়ন ডলারের পোশাক — যা ভিয়েতনামের চেয়েও একটু এগিয়ে।",
    source_url: "https://bd.apparelresources.com/business-news/trade/bangladesh-maintains-spot-worlds-second-largest-apparel-exporter-2024/"
  },
  {
    type: "chart",
    id: "poverty",
    date: "2026-06-16",
    category: "Development",
    title_en: "In twelve years, Bangladesh roughly halved its poverty rate",
    title_bn: "মাত্র বারো বছরে বাংলাদেশে দারিদ্র্যের হার প্রায় অর্ধেক হয়ে গেছে",
    sub_en: "The World Bank puts moderate poverty at 37.1% in 2010, down to 18.7% in 2022 — about 34 million people lifted out of poverty. Around 62 million are still one bad harvest or illness away from slipping back.",
    sub_bn: "বিশ্বব্যাংকের হিসাবে ২০১০ সালে বাংলাদেশে দারিদ্র্যের হার ছিল ৩৭.১%, ২০২২ সালে তা নেমে আসে ১৮.৭%-এ — মানে প্রায় ৩ কোটি ৪০ লাখ মানুষ দারিদ্র্য থেকে বেরিয়ে এসেছে। তবে এখনও প্রায় ৬ কোটি ২০ লাখ মানুষ আছে, যাদের একটা খারাপ ফসল বা অসুখেই আবার গরিব হয়ে যাওয়ার শঙ্কা।",
    source_url: "https://www.worldbank.org/en/news/press-release/2025/11/25/job-creation-key-to-equality-and-faster-poverty-reduction-in-bangladesh-says-world-bank"
  },
  {
    type: "text",
    date: "2026-06-18",
    category: "History",
    title_en: "A famine in 1974 led, thirty years later, to a Nobel Prize",
    title_bn: "১৯৭৪ সালের একটা দুর্ভিক্ষ থেকেই শুরু, তিন দশক পর এল নোবেল পুরস্কার",
    body_en: "Economist Muhammad Yunus watched famine tear through Bangladesh and started handing out small, collateral-free loans to villagers in Jobra. That experiment grew into Grameen Bank — over seven million borrowers by 2006, more than 95% of them women — and it won Yunus and the bank the Nobel Peace Prize.",
    body_bn: "দুর্ভিক্ষে দেশ যখন বিপর্যস্ত, অর্থনীতিবিদ মুহাম্মদ ইউনূস তখন চট্টগ্রামের জোবরা গ্রামে মানুষদের কোনো জামানত ছাড়াই ছোট ছোট ঋণ দেওয়া শুরু করেন। সেই পরীক্ষা থেকেই জন্ম নেয় গ্রামীণ ব্যাংক — ২০০৬ সাল নাগাদ যার ঋণগ্রহীতার সংখ্যা ৭০ লাখ ছাড়িয়ে যায়, যার ৯৫%-এরও বেশি নারী। এই কাজের স্বীকৃতিতেই ইউনূস আর গ্রামীণ ব্যাংক একসাথে পায় নোবেল শান্তি পুরস্কার।",
    source_url: "https://www.nobelprize.org/prizes/peace/2006/press-release/",
    pin: { left:56, top:58, label_en:"Jobra, Chattogram", label_bn:"জোবরা, চট্টগ্রাম" }
  },
  {
    type: "text",
    date: "2026-06-20",
    category: "Culture",
    title_en: "Nobody actually knows how many rickshaws are in Dhaka",
    title_bn: "ঢাকায় আসলে কয়টা রিকশা আছে, এটা ঠিকঠাক কেউ জানে না",
    body_en: "Dhaka is often called the rickshaw capital of the world, but the official count and the real one barely talk to each other. Back in 1998, Dhaka had 112,572 registered rickshaws — while one independent study counted over 2.2 million rickshaw pullers working the city alone. Most of what you see on the road today runs with no license at all.",
    body_bn: "ঢাকাকে বলা হয় দুনিয়ার “রিকশার রাজধানী”, কিন্তু সরকারি খাতা আর রাস্তার বাস্তবতার মধ্যে আকাশ-পাতাল ফারাক। ১৯৯৮ সালে ঢাকায় লাইসেন্সধারী রিকশা ছিল মোটে ১ লাখ ১২ হাজার ৫৭২টা — অথচ একটা স্বতন্ত্র গবেষণায় দেখা গেছে, শুধু ঢাকাতেই রিকশাচালক আছেন ২২ লাখেরও বেশি। মানে রাস্তায় যত রিকশা দেখেন, তার বড় অংশেরই আসলে কোনো লাইসেন্স নেই।",
    source_url: "https://en.wikipedia.org/wiki/Rickshaws_in_Bangladesh",
    pin: { left:66, top:40, label_en:"Dhaka rickshaws", label_bn:"ঢাকার রিকশা" }
  },
  {
    type: "text",
    date: "2026-06-22",
    category: "Development",
    title_en: "One cyclone killed 300,000+ people. A similar one, decades later, killed 35",
    title_bn: "একরকম ঝড়ে আগে মারা যেত লাখ লাখ মানুষ, এখন যায় হাতে গোনা কয়েকজন",
    body_en: "The 1970 Bhola cyclone killed an estimated 300,000 to 500,000 people — still the deadliest cyclone ever recorded anywhere. Bangladesh's answer was the Cyclone Preparedness Programme: trained volunteers, early warning by radio and megaphone, and thousands of concrete shelters along the coast. Cyclone Sitrang, a comparably strong storm in 2022, killed around 35.",
    body_bn: "১৯৭০ সালের ভোলা ঘূর্ণিঝড়ে মারা গিয়েছিল আনুমানিক ৩ থেকে ৫ লাখ মানুষ — ইতিহাসে রেকর্ড করা সবচেয়ে ভয়াবহ ঘূর্ণিঝড় এখনও এটাই। এরপর বাংলাদেশ গড়ে তোলে সাইক্লোন প্রিপেয়ার্ডনেস প্রোগ্রাম — প্রশিক্ষিত স্বেচ্ছাসেবক, রেডিও-মাইকে আগাম সতর্কবার্তা, আর উপকূল জুড়ে হাজার হাজার কংক্রিটের সাইক্লোন শেল্টার। ২০২২ সালে প্রায় কাছাকাছি শক্তির ঘূর্ণিঝড় সিত্রাংয়ে মারা গিয়েছিলেন মোটে ৩৫ জন।",
    source_url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9657222/",
    pin: { left:62, top:86, label_en:"Cyclone coast", label_bn:"উপকূল" }
  },
  {
    type: "text",
    date: "2026-06-24",
    category: "Development",
    title_en: "The world's largest off-grid solar program runs on Bangladeshi rooftops",
    title_bn: "দুনিয়ার সবচেয়ে বড় অফ-গ্রিড সোলার প্রোগ্রাম চলছে বাংলাদেশের টিনের চালে",
    body_en: "Through IDCOL's Solar Home System program, more than 4.1 million solar units were installed by 2018, bringing electricity to about 20 million people the national grid never reached. Along the way it cut roughly 9.6 million tonnes of CO2 and 4.4 billion liters of kerosene burning.",
    body_bn: "আইডিকল-এর সোলার হোম সিস্টেম প্রোগ্রামের মাধ্যমে ২০১৮ সাল নাগাদ বসানো হয়ে গেছে ৪১ লাখেরও বেশি সোলার ইউনিট — জাতীয় গ্রিড যেখানে কখনো পৌঁছায়নি, সেখানকার প্রায় ২ কোটি মানুষের ঘরে পৌঁছে গেছে বিদ্যুৎ। সাথে সাথে বেঁচে গেছে প্রায় ৯৬ লাখ টন কার্বন নিঃসরণ, আর ৪৪০ কোটি লিটার কেরোসিন পোড়ানো।",
    source_url: "https://www.worldbank.org/en/news/press-release/2021/04/07/bangladesh-solar-home-systems-provide-clean-energy-for-20-million-people"
  },
  {
    type: "text",
    date: "2026-06-26",
    category: "Development",
    title_en: "Migrant workers send home more than most industries earn",
    title_bn: "প্রবাসীরা যা পাঠান, দেশের অনেক শিল্পের আয়ও তার ধারেকাছে নেই",
    body_en: "Bangladesh is the world's 7th largest recipient of remittances — workers abroad sent home almost $22.1 billion in 2021 alone, per the World Bank. It doesn't arrive as one headline-making investment; it lands as thousands of small monthly transfers, in almost every district of the country.",
    body_bn: "বিশ্বব্যাংকের হিসাবে প্রবাসী আয়ে বাংলাদেশের অবস্থান দুনিয়াতে সপ্তম — শুধু ২০২১ সালেই প্রবাসীরা দেশে পাঠিয়েছেন প্রায় ২২১০ কোটি ডলার। এটা কোনো একটা বড় বিনিয়োগ হিসেবে আসে না, বরং প্রতি মাসের হাজারো ছোট ছোট রেমিট্যান্স হিসেবে আসে — আর দেশের প্রায় প্রতিটা জেলাতেই এর ছাপ পাওয়া যায়।",
    source_url: "https://en.wikipedia.org/wiki/Remittances_to_Bangladesh"
  },
  {
    type: "text",
    date: "2026-06-28",
    category: "Nature",
    title_en: "The Sundarbans floods and drains twice a day — and the tigers adapted",
    title_bn: "সুন্দরবনে দিনে দুইবার জোয়ার-ভাটা হয় — বাঘেরাও সেই ছন্দে বাঁচতে শিখে গেছে",
    body_en: "The world's largest single mangrove forest straddles the Bangladesh-India border, and most of it is tidal — land and water genuinely trade places every day. Its Royal Bengal tigers are known to swim between islands, something almost no other tiger population does as a matter of routine.",
    body_bn: "দুনিয়ার সবচেয়ে বড় ম্যানগ্রোভ বন সুন্দরবন, যা ছড়িয়ে আছে বাংলাদেশ আর ভারতের সীমানা জুড়ে। এর বেশিরভাগ অংশে দিনে দুইবার জোয়ার-ভাটা হয় — মানে জল আর স্থল রোজ সত্যি সত্যিই জায়গা বদল করে। এখানকার রয়েল বেঙ্গল টাইগাররা এক দ্বীপ থেকে আরেক দ্বীপে নিয়মিত সাঁতরে পার হয় — দুনিয়ার আর কোনো বাঘের দলের মধ্যে এই অভ্যাসটা এভাবে দেখা যায় না।",
    source_url: "https://en.wikipedia.org/wiki/Sundarbans"
  },
  {
    type: "text",
    date: "2026-06-30",
    category: "Culture",
    title_en: "A student protest march became a UNESCO-listed tradition",
    title_bn: "ছাত্রদের একটা প্রতিবাদ মিছিলই একদিন হয়ে গেল ইউনেস্কো-স্বীকৃত ঐতিহ্য",
    body_en: "In 1989, Dhaka University's Fine Arts students organized a colorful procession on Pohela Boishakh to push back against military rule — masks, giant papier-mache figures, all of it. It's been held every New Year since, and in 2016 UNESCO added it to its Intangible Cultural Heritage list.",
    body_bn: "১৯৮৯ সালে ঢাকা বিশ্ববিদ্যালয়ের চারুকলার শিক্ষার্থীরা সামরিক শাসনের বিরুদ্ধে প্রতিবাদ জানাতে বের করেছিলেন এক রঙিন শোভাযাত্রা — মুখোশ, বিশাল সব প্রতিকৃতি, পুরোটাই একদম অন্যরকম এক দৃশ্য। এরপর থেকে প্রতি পহেলা বৈশাখেই এটা রীতি হয়ে গেছে, আর ২০১৬ সালে ইউনেস্কো একে জায়গা দেয় তাদের ইনট্যানজিবল কালচারাল হেরিটেজ তালিকায়।",
    source_url: "https://en.wikipedia.org/wiki/Mangal_Shobhajatra",
    pin: { left:64, top:38, label_en:"Dhaka University", label_bn:"ঢাকা বিশ্ববিদ্যালয়" }
  },
  {
    type: "text",
    date: "2026-07-02",
    category: "Data",
    title_en: "Bangladesh cannot agree on how many rivers it has",
    title_bn: "বাংলাদেশে আসলে কয়টা নদী আছে, এই হিসাবেই কারো সাথে কারো মিল নেই",
    body_en: "Ask three government sources and you get three answers: Banglapedia says 700, one Water Development Board study says 405, and a more recent count puts it at 907. Rivers here shift course, silt up, and vanish fast enough that nobody's number stays right for long.",
    body_bn: "সরকারি তিনটা সোর্সের কাছে জিজ্ঞেস করলে পাবেন তিনটা আলাদা উত্তর — বাংলাপিডিয়া বলে ৭০০টা নদী, পানি উন্নয়ন বোর্ডের এক গবেষণা বলে ৪০৫টা, আবার সাম্প্রতিক এক হিসাবে সেটা গিয়ে দাঁড়ায় ৯০৭-এ। নদী এখানে এত দ্রুত ভাঙে, ভরাট হয়, এমনকি হারিয়েও যায় যে কারো হিসাবই বেশিদিন ঠিক থাকে না।",
    source_url: "https://en.wikipedia.org/wiki/List_of_rivers_of_Bangladesh"
  }
];

const RELEASE_INTERVAL_DAYS = 2;
const CATEGORY_BN = {
  "Map":"মানচিত্র", "Data":"ডেটা", "Culture":"সংস্কৃতি", "Nature":"প্রকৃতি",
  "Development":"উন্নয়ন", "History":"ইতিহাস"
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
function chartTigers(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart showing Sundarbans tiger population in 2014, 2018, and 2024">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="40" y1="86" x2="380" y2="86" class="gridline"/>
      <line x1="40" y1="32" x2="380" y2="32" class="gridline"/>
      <text x="34" y="143" class="axis-label" text-anchor="end">0</text>
      <text x="34" y="90" class="axis-label" text-anchor="end">60</text>
      <text x="34" y="36" class="axis-label" text-anchor="end">120</text>

      <rect x="90" y="38" width="70" height="102" rx="8" class="bar bar-control"><title>2014: 106 tigers</title></rect>
      <rect x="200" y="31" width="70" height="109" rx="8" class="bar bar-striped"><title>2018: 114 tigers</title></rect>
      <rect x="310" y="20" width="70" height="120" rx="8" class="bar bar-black"><title>2024: 125 tigers</title></rect>
      <text x="125" y="32" class="bar-value" text-anchor="middle">106</text>
      <text x="235" y="25" class="bar-value" text-anchor="middle">114</text>
      <text x="345" y="14" class="bar-value" text-anchor="middle">125</text>

      <text x="125" y="156" class="axis-cat" text-anchor="middle">2014</text>
      <text x="235" y="156" class="axis-cat" text-anchor="middle">2018</text>
      <text x="345" y="156" class="axis-cat" text-anchor="middle">2024</text>
    </svg>
    <div class="chart-legend">
      <span class="legend-item">${bilingual("Tigers counted by camera-trap census","ক্যামেরা-ট্র্যাপ জরিপে গোনা বাঘ")}</span>
    </div>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th>${bilingual("Year","সাল")}</th><th>${bilingual("Tigers","বাঘ")}</th></tr></thead>
        <tbody>
          <tr><td>2014</td><td>106</td></tr>
          <tr><td>2018</td><td>114</td></tr>
          <tr><td>2024</td><td>125</td></tr>
        </tbody>
      </table>
    </details>`;
}

function chartHilsa(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart comparing Bangladesh's annual hilsa and shrimp catch">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="40" y1="80" x2="380" y2="80" class="gridline"/>
      <text x="34" y="143" class="axis-label" text-anchor="end">0</text>
      <text x="34" y="84" class="axis-label" text-anchor="end">250k</text>

      <rect x="110" y="79" width="70" height="61" rx="8" class="bar bar-control"><title>Shrimp &amp; prawn (2023-24): 260,486 tonnes</title></rect>
      <rect x="240" y="20" width="70" height="120" rx="8" class="bar bar-striped"><title>Hilsa (2024-25): about 500,000 tonnes</title></rect>
      <text x="145" y="73" class="bar-value" text-anchor="middle">260k</text>
      <text x="275" y="14" class="bar-value" text-anchor="middle">500k</text>

      ${svgBilingual(145, 156, "axis-cat", "Shrimp","চিংড়ি", 'text-anchor="middle"')}
      ${svgBilingual(275, 156, "axis-cat", "Hilsa","ইলিশ", 'text-anchor="middle"')}
    </svg>
    <div class="chart-legend">
      <span class="legend-item"><i class="sw sw-control"></i>${bilingual("Shrimp & prawn, 2023-24","চিংড়ি, ২০২৩-২৪")}</span>
      <span class="legend-item"><i class="sw sw-striped"></i>${bilingual("Hilsa, 2024-25","ইলিশ, ২০২৪-২৫")}</span>
    </div>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th></th><th>${bilingual("Annual catch","বার্ষিক আহরণ")}</th></tr></thead>
        <tbody>
          <tr><td>${bilingual("Shrimp & prawn (FY2023-24)","চিংড়ি (২০২৩-২৪ অর্থবছর)")}</td><td>260,486 tonnes</td></tr>
          <tr><td>${bilingual("Hilsa (FY2024-25)","ইলিশ (২০২৪-২৫ অর্থবছর)")}</td><td>~500,000 tonnes</td></tr>
        </tbody>
      </table>
    </details>`;
}

function chartGarments(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart comparing 2024 apparel export value of China, Bangladesh, and Vietnam">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="40" y1="86" x2="380" y2="86" class="gridline"/>
      <line x1="40" y1="32" x2="380" y2="32" class="gridline"/>
      <text x="34" y="143" class="axis-label" text-anchor="end">$0</text>
      <text x="34" y="90" class="axis-label" text-anchor="end">$80B</text>
      <text x="34" y="36" class="axis-label" text-anchor="end">$160B</text>

      <rect x="90" y="20" width="70" height="120" rx="8" class="bar bar-black"><title>China: $165.24B</title></rect>
      <rect x="200" y="112" width="70" height="28" rx="8" class="bar bar-striped"><title>Bangladesh: $38.48B</title></rect>
      <rect x="310" y="115" width="70" height="25" rx="8" class="bar bar-control"><title>Vietnam: $33.94B</title></rect>
      <text x="125" y="14" class="bar-value" text-anchor="middle">$165.2B</text>
      <text x="235" y="106" class="bar-value" text-anchor="middle">$38.5B</text>
      <text x="345" y="109" class="bar-value" text-anchor="middle">$33.9B</text>

      ${svgBilingual(125, 156, "axis-cat", "China","চীন", 'text-anchor="middle"')}
      ${svgBilingual(235, 156, "axis-cat", "Bangladesh","বাংলাদেশ", 'text-anchor="middle"')}
      ${svgBilingual(345, 156, "axis-cat", "Vietnam","ভিয়েতনাম", 'text-anchor="middle"')}
    </svg>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th></th><th>${bilingual("2024 apparel exports","২০২৪ পোশাক রপ্তানি")}</th><th>${bilingual("World share","বৈশ্বিক শেয়ার")}</th></tr></thead>
        <tbody>
          <tr><td>${bilingual("China","চীন")}</td><td>$165.24B</td><td>29.64%</td></tr>
          <tr><td>${bilingual("Bangladesh","বাংলাদেশ")}</td><td>$38.48B</td><td>6.90%</td></tr>
          <tr><td>${bilingual("Vietnam","ভিয়েতনাম")}</td><td>$33.94B</td><td>6.09%</td></tr>
        </tbody>
      </table>
    </details>`;
}

function chartPoverty(){
  return `
    <svg class="chart" viewBox="0 0 420 180" role="img" aria-label="Bar chart comparing Bangladesh's moderate poverty rate in 2010 and 2022">
      <line x1="40" y1="20" x2="40" y2="140" class="axis-line"/>
      <line x1="40" y1="140" x2="380" y2="140" class="axis-line"/>
      <line x1="40" y1="80" x2="380" y2="80" class="gridline"/>
      <text x="34" y="143" class="axis-label" text-anchor="end">0%</text>
      <text x="34" y="84" class="axis-label" text-anchor="end">20%</text>

      <rect x="120" y="29" width="80" height="111" rx="8" class="bar bar-before"><title>2010: 37.1%</title></rect>
      <rect x="260" y="84" width="80" height="56" rx="8" class="bar bar-after"><title>2022: 18.7%</title></rect>
      <text x="160" y="23" class="bar-value" text-anchor="middle">37.1%</text>
      <text x="300" y="78" class="bar-value" text-anchor="middle">18.7%</text>

      <text x="160" y="156" class="axis-cat" text-anchor="middle">2010</text>
      <text x="300" y="156" class="axis-cat" text-anchor="middle">2022</text>
    </svg>
    <div class="chart-legend">
      <span class="legend-item"><i class="sw sw-black"></i>${bilingual("2010","২০১০")}</span>
      <span class="legend-item"><i class="sw sw-striped"></i>${bilingual("2022","২০২২")}</span>
    </div>
    <details class="chart-table">
      <summary>${bilingual("See it as a table","টেবিল হিসেবে দেখুন")}</summary>
      <table>
        <thead><tr><th>${bilingual("Year","সাল")}</th><th>${bilingual("Moderate poverty rate","মধ্যম দারিদ্র্যের হার")}</th></tr></thead>
        <tbody>
          <tr><td>2010</td><td>37.1%</td></tr>
          <tr><td>2022</td><td>18.7%</td></tr>
        </tbody>
      </table>
    </details>`;
}

const CHART_BUILDERS = { tigers: chartTigers, hilsa: chartHilsa, garments: chartGarments, poverty: chartPoverty };

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
