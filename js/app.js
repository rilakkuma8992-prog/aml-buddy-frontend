// ============================================================
// AML Buddy desktop three-column interaction.
// The static DB in js/data.js is the fallback. In production, published FAQ
// records are loaded from Supabase so different devices share the same source.
// ============================================================

const CATEGORY_DEFS = [
  {id:"kyc-cdd", label:{zh:"KYC/CDD", en:"KYC/CDD", ja:"KYC/CDD"}},
  {id:"customer-risk-rating", label:{zh:"Customer Risk Rating", en:"Customer Risk Rating", ja:"Customer Risk Rating"}},
  {id:"sanctions-screening", label:{zh:"Sanctions/Screening", en:"Sanctions/Screening", ja:"Sanctions/Screening"}},
  {id:"str-sar", label:{zh:"STR/SAR", en:"STR/SAR", ja:"STR/SAR"}},
  {id:"record-keeping", label:{zh:"Record Keeping", en:"Record Keeping", ja:"Record Keeping"}},
  {id:"governance-reporting", label:{zh:"Governance/Reporting", en:"Governance/Reporting", ja:"Governance/Reporting"}},
  {id:"training", label:{zh:"Training", en:"Training", ja:"Training"}},
  {id:"system-data", label:{zh:"System/Data", en:"System/Data", ja:"System/Data"}},
  {id:"others", label:{zh:"Others", en:"Others", ja:"Others"}}
];

const USEFUL_LINKS = [
  {
    label:{zh:"OFAC制裁名單查詢", en:"OFAC Sanctions List Search", ja:"OFAC制裁リスト検索"},
    url:"https://sanctionssearch.ofac.treas.gov/"
  },
  {
    label:{zh:"聯合國安理會制裁清單", en:"UN Security Council Consolidated List", ja:"国連安保理制裁統合リスト"},
    url:"https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list"
  },
  {
    label:{zh:"歐盟制裁地圖", en:"EU Sanctions Map", ja:"EU制裁マップ"},
    url:"https://www.sanctionsmap.eu/"
  }
];

const LANGUAGE_OPTIONS = [
  {id:"zh", short:"ZH", label:{zh:"中文", en:"Chinese", ja:"中国語"}},
  {id:"en", short:"EN", label:{zh:"English", en:"English", ja:"英語"}},
  {id:"ja", short:"JP", label:{zh:"日本語", en:"Japanese", ja:"日本語"}}
];

const UI_TEXT = {
  zh: {
    documentTitle:"AML Buddy 互動原型 Demo",
    langLabel:"語言切換",
    menuButtonLabel:"開啟選單",
    closeMenuLabel:"關閉選單",
    mobileMenuTitle:"選單",
    mobileBizTitle:"業務別",
    mobileFaqTitle:"常見問題",
    homeListTitle:"問題選單",
    searchLabel:"搜尋",
    closeSearchLabel:"關閉搜尋",
    searchPlaceholder:"實質受益人",
    searchResults:"符合問題",
    noSearchResults:"查無符合的問題，請洽洗防窗口",
    popularKeywords:"常見關鍵字",
    recentSearches:"最近搜尋",
    chooseBiz:"請選擇業務別",
    usefulSites:"常用網站",
    usefulSitesTop:"常用",
    usefulSitesBottom:"網站",
    chooseQuestionCta:"選擇問題",
    chooseBusinessPrompt:"請選擇您的業務別",
    closeUsefulSitesLabel:"關閉常用網站",
    chooseQuestion:"請選擇您的問題",
    emptyAspectCategory:"尚無相關問題，內容陸續建置中",
    expandAll:"全部展開",
    collapseAll:"全部收合",
    emptyCategory:"此分類目前尚無常見問題",
    answerPanelTitle:"答案",
    answerBack:"返回",
    emptyAnswer:"請選擇您的問題",
    refLabel:"參考",
    revisionDate:"最後修訂日期",
    attachmentLabel:"附件連結",
    staleNotice:"最新版本可能無法及時更新，請以iKnow知識平台公告為準",
    contactFooterButton:"洽詢洗防窗口",
    footerNotice:"本頁面內容依據總行內規彙整，主要供海外分行／子行同仁參考，如遇當地規範另有規定，請以當地規範為準",
    footerCredits:"共同開發：Stanley Liu、Cindy Liou、Leah Fu",
    languageSheetTitle:"語言",
    languageSheetNote:"部分內容若尚未提供翻譯，將以中文顯示。",
    languageSave:"儲存",
    languageSaveNoChange:"目前語言",
    closeLanguageLabel:"關閉語言選單",
    modalTitle:"聯絡洗防窗口",
    modalBody:"找不到您要的答案嗎？<br>請聯繫洗防部 AML 專責窗口：分機 1234<br>或內部信箱 aml-support@bank.internal",
    modalClose:"我知道了"
  },
  en: {
    documentTitle:"AML Buddy Interactive Demo",
    langLabel:"Language",
    menuButtonLabel:"Open menu",
    closeMenuLabel:"Close menu",
    mobileMenuTitle:"Menu",
    mobileBizTitle:"Business Line",
    mobileFaqTitle:"FAQs",
    homeListTitle:"Question Menu",
    searchLabel:"Search",
    closeSearchLabel:"Close search",
    searchPlaceholder:"Beneficial owner",
    searchResults:"Matching Questions",
    noSearchResults:"No matching questions. Contact the AML office",
    popularKeywords:"Common Keywords",
    recentSearches:"Recent Searches",
    chooseBiz:"Select Business Line",
    usefulSites:"Useful Sites",
    usefulSitesTop:"Useful",
    usefulSitesBottom:"Sites",
    chooseQuestionCta:"Select Question",
    chooseBusinessPrompt:"Select Your Business Line",
    closeUsefulSitesLabel:"Close useful sites",
    chooseQuestion:"Select Your Question",
    emptyAspectCategory:"No related questions yet. Content is being added.",
    expandAll:"Expand all",
    collapseAll:"Collapse all",
    emptyCategory:"No frequently asked questions in this category yet.",
    answerPanelTitle:"Answer",
    answerBack:"Back",
    emptyAnswer:"Please select a question.",
    refLabel:"Reference",
    revisionDate:"Last Revision Date",
    attachmentLabel:"Attachment",
    staleNotice:"The latest version may not be updated immediately. Please refer to iKnow knowledge platform announcements.",
    contactFooterButton:"Contact the AML Office",
    footerNotice:"This page is compiled based on Head Office internal rules and is mainly for reference by overseas branch/subsidiary colleagues. If local regulations differ, local regulations prevail.",
    footerCredits:"Co-developed by Stanley Liu, Cindy Liou, and Leah Fu",
    languageSheetTitle:"Language",
    languageSheetNote:"Some content may fall back to Chinese when a translation is not yet available.",
    languageSave:"Save",
    languageSaveNoChange:"Current language",
    closeLanguageLabel:"Close language menu",
    modalTitle:"Contact AML Office",
    modalBody:"Cannot find the answer you need?<br>Please contact the AML Office: extension 1234<br>or internal mailbox aml-support@bank.internal",
    modalClose:"Got it"
  },
  ja: {
    documentTitle:"AML Buddy インタラクティブデモ",
    langLabel:"言語切替",
    menuButtonLabel:"メニューを開く",
    closeMenuLabel:"メニューを閉じる",
    mobileMenuTitle:"メニュー",
    mobileBizTitle:"業務区分",
    mobileFaqTitle:"よくある質問",
    homeListTitle:"質問メニュー",
    searchLabel:"検索",
    closeSearchLabel:"検索を閉じる",
    searchPlaceholder:"実質的支配者",
    searchResults:"該当する質問",
    noSearchResults:"該当する質問がありません。AML窓口へお問い合わせください",
    popularKeywords:"よく使うキーワード",
    recentSearches:"最近の検索",
    chooseBiz:"業務区分を選択してください",
    usefulSites:"よく使うサイト",
    usefulSitesTop:"便利",
    usefulSitesBottom:"サイト",
    chooseQuestionCta:"質問を選択",
    chooseBusinessPrompt:"業務区分を選択してください",
    closeUsefulSitesLabel:"よく使うサイトを閉じる",
    chooseQuestion:"質問を選択してください",
    emptyAspectCategory:"関連する質問はまだありません。内容は順次追加中です。",
    expandAll:"すべて展開",
    collapseAll:"すべて閉じる",
    emptyCategory:"この分類には現在よくある質問がありません。",
    answerPanelTitle:"回答",
    answerBack:"戻る",
    emptyAnswer:"質問を選択してください。",
    refLabel:"参考",
    revisionDate:"最終改訂日",
    attachmentLabel:"添付資料",
    staleNotice:"最新版が即時に反映されない場合があります。iKnow知識プラットフォームの公告を基準にしてください。",
    contactFooterButton:"AML窓口へお問い合わせください",
    footerNotice:"本ページの内容は本部内部規程に基づいて整理したもので、主に海外支店・子会社の同仁向け参考資料です。現地規制に別段の定めがある場合は、現地規制を優先してください。",
    footerCredits:"共同開発：Stanley Liu、Cindy Liou、Leah Fu",
    languageSheetTitle:"言語",
    languageSheetNote:"翻訳が未提供の内容は、中国語で表示される場合があります。",
    languageSave:"保存",
    languageSaveNoChange:"現在の言語",
    closeLanguageLabel:"言語メニューを閉じる",
    modalTitle:"AML窓口へ連絡",
    modalBody:"必要な回答が見つかりませんか？<br>AML専責窓口：内線 1234<br>または内部メール aml-support@bank.internal へご連絡ください",
    modalClose:"確認しました"
  }
};

const SUPABASE_CONFIG = window.AML_BUDDY_SUPABASE || {};
const SUPABASE_TABLE = SUPABASE_CONFIG.table || "aml_buddy_faqs";
const HAS_SUPABASE_CONFIG = Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey && window.supabase?.createClient);
const supabaseClient = HAS_SUPABASE_CONFIG
  ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
  : null;
const HAS_DYNAMIC_API = HAS_SUPABASE_CONFIG || window.location.protocol === "file:" || ["localhost","127.0.0.1"].includes(window.location.hostname);
const API_BASE = window.location.protocol === "file:" ? `http://127.0.0.1:${window.location.port || "3000"}` : "";
const API_FAQS_URL = API_BASE + "/api/faqs?status=published&format=full";
const API_REFRESH_MS = 5000;
const ADMIN_STORAGE_KEY = "amlBuddyAdminOfficialFaqs.v3";
const OFFICIAL_FAQ_ATTACHMENT_LINK = "https://www.google.com/";

let activeDB = DB;
let activeFaqSignature = "";

function buildEmptyTopics(){
  return Object.fromEntries(CATEGORY_DEFS.map(category => [
    category.id,
    {
      label:category.label,
      category:category.id,
      questions:[]
    }
  ]));
}

function buildEmptyAspects(){
  return Object.fromEntries(Object.keys(ASPECTS).map(aspectId => [
    aspectId,
    {topics:buildEmptyTopics()}
  ]));
}

function buildEmptyDb(){
  return {
    corporate:{
      label:DB.corporate?.label || {zh:"企金", en:"Corporate Banking", ja:"法人金融"},
      aspects:buildEmptyAspects()
    },
    consumer:{
      label:DB.consumer?.label || {zh:"消金", en:"Consumer Banking", ja:"個人金融"},
      aspects:buildEmptyAspects()
    }
  };
}

function normalizeLocalizedObject(value, fallback = ""){
  if(value && typeof value === "object"){
    return {
      zh:value.zh || fallback || "",
      en:value.en || "",
      ja:value.ja || ""
    };
  }

  return {
    zh:value || fallback || "",
    en:"",
    ja:""
  };
}

function getOfficialSourceNoFromId(id){
  const match = String(id || "").match(/^FAQ-(\d{3})$/);
  if(!match) return "";
  const numeric = Number(match[1]);
  if(!Number.isInteger(numeric) || numeric < 1 || numeric > 50) return "";
  return String(numeric);
}

function getFaqAttachmentLink(faq){
  return getOfficialSourceNoFromId(faq?.id)
    ? OFFICIAL_FAQ_ATTACHMENT_LINK
    : faq?.link || "";
}

function applyFaqItemTranslations(item, faq){
  const sourceNo = getOfficialSourceNoFromId(faq?.id);
  item.sourceNo = sourceNo;
  if(!sourceNo){
    return item;
  }
  const translations = window.FAQ_TRANSLATIONS || {};
  const translated = translations[faq.id] || translations[String(sourceNo)] || translations[sourceNo];
  if(!translated){
    return item;
  }

  ["q","a","ref"].forEach(field => {
    if(translated[field]){
      item[field] = {
        ...item[field],
        ...translated[field]
      };
    }
  });

  return item;
}

function getFaqBizIds(value){
  const text = String(value || "").toLowerCase();
  const hasCorporate = text.includes("企金") || text.includes("corporate");
  const hasConsumer = text.includes("消金") || text.includes("consumer");
  if((hasCorporate && hasConsumer) || (!hasCorporate && !hasConsumer)){
    return ["corporate","consumer"];
  }
  return hasConsumer ? ["consumer"] : ["corporate"];
}

function getFaqAspectId(value){
  const text = String(value || "").trim().toLowerCase();
  if(text === "practical" || text === "實務面" || text === "operational"){
    return "practical";
  }
  return "regulatory";
}

function getFaqCategoryId(value){
  const text = String(value || "").trim();
  const normalizedText = text.toLowerCase();
  if(text === "KYC/CDD/EDD"){
    return "kyc-cdd";
  }

  const matched = CATEGORY_DEFS.find(category =>
    category.id === normalizedText ||
    Object.values(category.label).some(label => String(label).toLowerCase() === normalizedText)
  );

  return matched?.id || "others";
}

function buildDbFromFaqs(faqs){
  const nextDB = buildEmptyDb();

  faqs.forEach(faq => {
    const aspectId = getFaqAspectId(faq.aspect);
    const categoryId = getFaqCategoryId(faq.category);
    const item = {
      id:faq.id || "",
      sourceNo:"",
      revisionDate:faq.updated || faq.effective || REVISION_DATE,
      link:getFaqAttachmentLink(faq),
      q:normalizeLocalizedObject(faq.q, faq.question),
      a:normalizeLocalizedObject(faq.a, faq.answer),
      ref:normalizeLocalizedObject(faq.ref, faq.reference)
    };
    applyFaqItemTranslations(item, faq);

    getFaqBizIds(faq.biz).forEach(bizId => {
      const topic = nextDB[bizId]?.aspects?.[aspectId]?.topics?.[categoryId];
      if(topic){
        topic.questions.push(item);
      }
    });
  });

  return nextDB;
}

function makeFaqSignature(faqs){
  return JSON.stringify(faqs.map(faq => [
    faq.id,
    faq.status,
    faq.updated,
    faq.version,
    faq.biz,
    faq.aspect,
    faq.category,
    faq.q?.zh || faq.question || "",
    faq.a?.zh || faq.answer || "",
    faq.ref?.zh || faq.reference || "",
    faq.link || ""
  ]));
}

function applyFaqs(faqs, options = {}){
  const signature = makeFaqSignature(faqs);
  if(signature === activeFaqSignature){
    return false;
  }

  activeFaqSignature = signature;
  activeDB = buildDbFromFaqs(faqs);
  if(!activeDB[selectedBiz]){
    selectedBiz = Object.keys(activeDB)[0] || "";
    selectedQuestion = null;
  }
  if(options.render !== false){
    render();
  }
  return true;
}

function loadFaqsFromLocalStorage(options = {}){
  if(HAS_SUPABASE_CONFIG){
    return false;
  }
  try{
    const raw = window.localStorage.getItem(ADMIN_STORAGE_KEY);
    if(!raw){
      return false;
    }
    const adminState = JSON.parse(raw);
    const faqs = Array.isArray(adminState.faqs)
      ? adminState.faqs.flatMap(faq => {
          if(faq.status === "deleted"){
            return [];
          }
          if(faq.status === "published"){
            return [faq];
          }
          if(faq.previous){
            return [{...faq.previous,status:"published"}];
          }
          return [];
        })
      : [];
    if(faqs.length === 0){
      return false;
    }
    return applyFaqs(faqs, options);
  }catch(error){
    return false;
  }
}

function normalizeSupabaseFaqRow(row){
  const payload = row?.payload && typeof row.payload === "object" ? row.payload : {};
  return {
    ...payload,
    id:row.id || payload.id,
    status:row.status || payload.status || "published",
    biz:payload.biz || row.biz || "",
    aspect:payload.aspect || row.aspect || "",
    category:payload.category || row.category || "",
    owner:payload.owner || row.owner || "",
    version:payload.version || row.version || "",
    updated:payload.updated || row.updated_on || "",
    effective:payload.effective || row.effective || "",
    nextReview:payload.nextReview || row.next_review || "",
    q:payload.q || {zh:payload.question || "",en:"",ja:""},
    a:payload.a || {zh:payload.answer || "",en:"",ja:""},
    ref:payload.ref || {zh:payload.reference || "",en:"",ja:""},
    source:payload.source || "",
    article:payload.article || "",
    link:payload.link || ""
  };
}

async function loadFaqsFromSupabase(){
  if(!supabaseClient){
    return false;
  }
  const {data,error} = await supabaseClient
    .from(SUPABASE_TABLE)
    .select("id,status,biz,aspect,category,owner,version,updated_on,effective,next_review,payload,deleted_at")
    .eq("status","published")
    .is("deleted_at", null)
    .order("id",{ascending:true});
  if(error){
    throw error;
  }
  const faqs = (data || []).map(normalizeSupabaseFaqRow);
  if(faqs.length === 0){
    return false;
  }
  return applyFaqs(faqs);
}

async function loadFaqsFromApi(){
  if(HAS_SUPABASE_CONFIG){
    try{
      return await loadFaqsFromSupabase();
    }catch(error){
      console.warn("loadFaqsFromSupabase failed", error);
      return false;
    }
  }
  if(!HAS_DYNAMIC_API){
    return false;
  }
  try{
    const response = await fetch(API_FAQS_URL);
    if(!response.ok){
      return;
    }

    const payload = await response.json();
    const faqs = Array.isArray(payload.faqs) ? payload.faqs : Array.isArray(payload.items) ? payload.items : [];
    return applyFaqs(faqs);
  }catch(error){
    return false;
  }
}

let currentLang = "zh";
let selectedBiz = Object.keys(activeDB)[0] || "";
let expandedAspects = new Set();
let expandedCategories = new Set();
let selectedQuestion = null;
let searchQuery = "";
let recentSearches = [];
let recentSearchTimer = null;
let isMobileMenuOpen = false;
let mobileMenuCloseTimer = null;
let isMobileSitesOpen = false;
let mobileSitesCloseTimer = null;
let isHeaderSearchOpen = false;
let mobileMenuReturnState = null;
let selectedQuestionReturnMode = "";
let hasChosenBiz = false;
let homeListScrollY = 0;

function t(key){
  return UI_TEXT[currentLang][key];
}

function localize(value){
  if(value && typeof value === "object"){
    return value[currentLang] || value.zh || value.en || value.ja || "";
  }
  return value || "";
}

function allLocalizedText(value){
  if(value && typeof value === "object"){
    return Object.values(value).join(" ");
  }
  return value || "";
}

function normalizeSearch(value){
  return String(value || "").trim().toLocaleLowerCase();
}

function getSearchTerms(query){
  const normalizedQuery = normalizeSearch(query);
  if(!normalizedQuery){
    return [];
  }

  const terms = [String(query)];
  SEARCH_KEYWORDS.forEach(keyword => {
    const keywordText = [
      allLocalizedText(keyword.label),
      allLocalizedText(keyword.query)
    ].join(" ");

    if(normalizeSearch(keywordText).includes(normalizedQuery) || normalizedQuery.includes(normalizeSearch(localize(keyword.label)))){
      terms.push(...Object.values(keyword.query));
    }
  });

  return [...new Set(terms.filter(Boolean))];
}

function formatQuestionCount(count){
  return String(count);
}

function escapeHtml(value){
  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function getBizEntries(){
  return Object.entries(activeDB).map(([id, biz]) => ({id, ...biz}));
}

function getAspectEntries(){
  return Object.entries(ASPECTS).map(([id, label]) => ({id, label}));
}

function getGroupKey(aspectId, categoryId){
  return `${aspectId}:${categoryId}`;
}

function getTopicEntries(bizId, aspectId){
  return Object.entries(activeDB[bizId]?.aspects?.[aspectId]?.topics || {}).map(([id, topic]) => ({id, ...topic}));
}

function getAllTopicEntries(bizId){
  return getAspectEntries().flatMap(aspect =>
    getTopicEntries(bizId, aspect.id).map(topic => ({...topic, aspect:aspect.id}))
  );
}

function getTopic(bizId, aspectId, topicId){
  return activeDB[bizId]?.aspects?.[aspectId]?.topics?.[topicId];
}

function getQuestionCount(bizId){
  return getAllTopicEntries(bizId).reduce((sum, topic) => sum + topic.questions.length, 0);
}

function buildQuestionHaystack(bizId, aspectId, topic, item){
  const category = CATEGORY_DEFS.find(categoryItem => categoryItem.id === topic.category);
  const aspect = ASPECTS[aspectId];

  return [
    allLocalizedText(activeDB[bizId]?.label),
    allLocalizedText(category?.label),
    allLocalizedText(aspect),
    allLocalizedText(item.q),
    allLocalizedText(item.a),
    allLocalizedText(item.ref),
    item.revisionDate
  ].join(" ");
}

function questionMatches(bizId, aspectId, topic, item, query){
  const terms = getSearchTerms(query);
  if(terms.length === 0){
    return true;
  }
  const haystack = normalizeSearch(buildQuestionHaystack(bizId, aspectId, topic, item));
  return terms.some(term => haystack.includes(normalizeSearch(term)));
}

function findQuestionMatches(query){
  const matches = [];
  getBizEntries().forEach(biz => {
    getAspectEntries().forEach(aspect => {
      getTopicEntries(biz.id, aspect.id).forEach(topic => {
        topic.questions.forEach((item, idx) => {
          if(questionMatches(biz.id, aspect.id, topic, item, query)){
            matches.push({biz:biz.id, aspect:aspect.id, topic:topic.id, category:topic.category, idx});
          }
        });
      });
    });
  });
  return matches;
}

function getMatchDetail(match){
  const biz = activeDB[match.biz];
  const topic = getTopic(match.biz, match.aspect, match.topic);
  const item = topic?.questions?.[match.idx];
  const aspect = ASPECTS[match.aspect];
  const category = CATEGORY_DEFS.find(categoryItem => categoryItem.id === topic?.category);

  return {
    ...match,
    question:localize(item?.q),
    bizLabel:localize(biz?.label),
    aspectLabel:localize(aspect),
    categoryLabel:localize(category?.label)
  };
}

function recordRecentSearch(rawQuery){
  const query = String(rawQuery || "").trim();
  if(!query){
    return;
  }

  const normalizedQuery = normalizeSearch(query);
  recentSearches = [
    query,
    ...recentSearches.filter(item => normalizeSearch(item) !== normalizedQuery)
  ].slice(0,5);
}

function clearRecentSearchTimer(){
  if(recentSearchTimer){
    clearTimeout(recentSearchTimer);
    recentSearchTimer = null;
  }
}

function queueRecentSearch(rawQuery){
  clearRecentSearchTimer();
  const query = String(rawQuery || "").trim();
  if(!query){
    return;
  }

  recentSearchTimer = setTimeout(() => {
    recordRecentSearch(query);
    renderSearchDropdown();
    openSearchDropdown();
  }, 500);
}

function commitSearch(rawQuery){
  clearRecentSearchTimer();
  applySearch(rawQuery, {record:true});
  openSearchDropdown();
}

function buildCategoryGroups(bizId){
  const normalizedQuery = normalizeSearch(searchQuery);

  return getAspectEntries().map(aspect => ({
    ...aspect,
    categories:CATEGORY_DEFS.map(category => ({
      ...category,
      aspectId:aspect.id,
      categoryId:category.id,
      groupKey:getGroupKey(aspect.id, category.id),
      topics:getTopicEntries(bizId, aspect.id)
        .filter(topic => topic.category === category.id)
        .map(topic => ({
          ...topic,
          aspect:aspect.id,
          questions:normalizedQuery
            ? topic.questions.filter(item => questionMatches(bizId, aspect.id, topic, item, normalizedQuery))
            : topic.questions
        }))
        .filter(topic => !normalizedQuery || topic.questions.length > 0)
    }))
  }));
}

function getAllCategoryGroups(bizId){
  return buildCategoryGroups(bizId).flatMap(aspect => aspect.categories);
}

function getAllCategoryKeys(){
  return getAspectEntries().flatMap(aspect =>
    CATEGORY_DEFS.map(category => getGroupKey(aspect.id, category.id))
  );
}

function getAllAspectKeys(){
  return getAspectEntries().map(aspect => aspect.id);
}

function selectBiz(bizId){
  selectedBiz = bizId;
  expandedAspects = new Set();
  expandedCategories = new Set();
  selectedQuestion = null;
  clearRecentSearchTimer();
  searchQuery = "";
  refreshUi();
}

function updateBizSelectVisibility(){
  document.body.classList.toggle("show-biz-select", !hasChosenBiz);
  const screen = document.getElementById("bizSelectScreen");
  if(screen){
    screen.setAttribute("aria-hidden", hasChosenBiz ? "true" : "false");
  }
}

function chooseBizFromSelectScreen(bizId){
  if(!activeDB[bizId]){
    return;
  }
  selectedBiz = bizId;
  hasChosenBiz = true;
  expandedAspects = new Set();
  expandedCategories = new Set();
  selectedQuestion = null;
  selectedQuestionReturnMode = "";
  clearRecentSearchTimer();
  searchQuery = "";
  updateBizSelectVisibility();
  refreshUi();
}

function returnToBizSelect(){
  hasChosenBiz = false;
  selectedQuestion = null;
  selectedQuestionReturnMode = "";
  closeHeaderSearch();
  updateBizSelectVisibility();
  refreshUi();
}

function renderBizSelectScreen(){
  const screen = document.getElementById("bizSelectScreen");
  if(!screen){
    return;
  }

  screen.innerHTML = `
    <div class="lang-switcher biz-select-lang-switcher" id="bizSelectLangSwitcher">
      <button class="biz-select-lang-btn mobile-language-trigger" type="button" id="bizSelectLanguageButton" aria-haspopup="listbox" aria-expanded="false" aria-label="${escapeHtml(t("langLabel"))}" data-language-trigger>
        <span id="bizSelectLanguageLabel">${escapeHtml(getLanguageOption(currentLang).short)}</span>
      </button>
      <div class="lang-dropdown" id="bizSelectLangDropdown"></div>
    </div>
    <div class="biz-select-inner">
      <p class="biz-select-prompt">${escapeHtml(t("chooseBusinessPrompt"))}</p>
      <div class="biz-select-actions">
        ${getBizEntries().map(biz => `
          <button class="biz-select-card" type="button" data-select-biz="${escapeHtml(biz.id)}">
            <span class="biz-select-icon">${renderBizEntryIcon(biz.id)}</span>
            <span class="biz-select-label">${escapeHtml(localize(biz.label))}</span>
          </button>
        `).join("")}
      </div>
    </div>
    <img class="splash-footer-logo" src="./assets/tree-logo.svg" alt="">`;
}

function bindBizSelectEvents(){
  document.querySelectorAll("[data-select-biz]").forEach(button => {
    button.onclick = () => chooseBizFromSelectScreen(button.dataset.selectBiz);
  });

  bindLanguageDropdown(document.getElementById("bizSelectLangSwitcher"));
}

function toggleAspect(aspectId){
  if(expandedAspects.has(aspectId)){
    expandedAspects.delete(aspectId);
  }else{
    expandedAspects.add(aspectId);
  }
  refreshUi();
}

function toggleCategory(aspectId, categoryId){
  const groupKey = getGroupKey(aspectId, categoryId);
  if(expandedCategories.has(groupKey)){
    expandedCategories.delete(groupKey);
  }else{
    expandedCategories.add(groupKey);
  }
  refreshUi();
}

function toggleAllCategories(){
  const groups = getAllCategoryGroups(selectedBiz);
  const aspectKeys = getAllAspectKeys();
  const allOpen = aspectKeys.every(aspectId => expandedAspects.has(aspectId)) &&
    groups.every(group => expandedCategories.has(group.groupKey));
  expandedAspects = allOpen ? new Set() : new Set(aspectKeys);
  expandedCategories = allOpen ? new Set() : new Set(groups.map(group => group.groupKey));
  refreshUi();
}

function captureMobileMenuReturnState(){
  const content = document.querySelector("#mobileMenuLayer .mobile-menu-content");
  mobileMenuReturnState = {
    biz:selectedBiz,
    expandedAspects:[...expandedAspects],
    expandedCategories:[...expandedCategories],
    scrollTop:content?.scrollTop || 0
  };
}

function restoreMobileMenuReturnState(){
  const state = mobileMenuReturnState;
  if(!state || !activeDB[state.biz]){
    return false;
  }

  selectedBiz = state.biz;
  expandedAspects = new Set(state.expandedAspects || []);
  expandedCategories = new Set(state.expandedCategories || []);
  selectedQuestion = null;
  selectedQuestionReturnMode = "";
  closeHeaderSearch();
  renderAppPanels();
  renderMobileMenu();
  bindAppEvents();
  openMobileMenu();

  const content = document.querySelector("#mobileMenuLayer .mobile-menu-content");
  if(content){
    restoreMobileMenuScroll(content, state.scrollTop || 0);
  }
  return true;
}

function selectQuestion(aspectId, topicId, idx, options = {}){
  selectedQuestion = {biz:selectedBiz, aspect:aspectId, topic:topicId, idx};
  selectedQuestionReturnMode = options.returnMode || "";
  refreshUi();
}

function jumpToAnswer(bizId, aspectId, topicId, idx){
  selectedBiz = bizId;
  const topic = getTopic(bizId, aspectId, topicId);
  if(topic){
    expandedAspects.add(aspectId);
    expandedCategories.add(getGroupKey(aspectId, topic.category));
  }
  selectedQuestion = {biz:bizId, aspect:aspectId, topic:topicId, idx};
  selectedQuestionReturnMode = "";
  refreshUi();
}

function returnToQuestionStart(){
  const shouldRestoreMobileMenu = selectedQuestionReturnMode === "mobile-menu";
  const shouldRestoreHomeList = selectedQuestionReturnMode === "home-list";
  selectedQuestion = null;
  selectedQuestionReturnMode = "";
  closeHeaderSearch();
  if(shouldRestoreMobileMenu && restoreMobileMenuReturnState()){
    return;
  }
  closeMobileMenu({instant:true});
  refreshUi();
  if(shouldRestoreHomeList){
    const targetScrollY = homeListScrollY;
    requestAnimationFrame(() => window.scrollTo(0, targetScrollY));
  }
}

function applySearch(rawQuery, options = {}){
  searchQuery = String(rawQuery || "").trim();

  if(options.record){
    recordRecentSearch(searchQuery);
  }

  if(!searchQuery){
    selectedQuestion = null;
    refreshUi();
    return;
  }

  const matches = findQuestionMatches(searchQuery);
  if(matches.length > 0){
    const selectedMatch = selectedQuestion && matches.find(match =>
      match.biz === selectedQuestion.biz &&
      match.aspect === selectedQuestion.aspect &&
      match.topic === selectedQuestion.topic &&
      match.idx === selectedQuestion.idx
    );
    const anchorMatch = selectedMatch || matches.find(match => match.biz === selectedBiz) || matches[0];
    selectedBiz = anchorMatch.biz;
    expandedAspects = new Set(
      matches
        .filter(match => match.biz === selectedBiz)
        .map(match => match.aspect)
    );
    expandedCategories = new Set(
      matches
        .filter(match => match.biz === selectedBiz)
        .map(match => getGroupKey(match.aspect, match.category))
    );
    if(!selectedMatch){
      selectedQuestion = null;
    }
  }else{
    selectedQuestion = null;
    expandedAspects = new Set(getAllAspectKeys());
    expandedCategories = new Set(getAllCategoryKeys());
  }

  refreshUi();
}

function changeLanguage(lang){
  if(lang !== currentLang){
    currentLang = lang;
    render();
  }
}

function setLanguageTriggersExpanded(isExpanded){
  document.querySelectorAll("[data-language-trigger]").forEach(button => {
    button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });
}

function closeModal(){
  document.getElementById("modalLayer").innerHTML = "";
  setLanguageTriggersExpanded(false);
}

function closeAllLanguageDropdowns(){
  document.querySelectorAll(".lang-switcher").forEach(el => {
    el.classList.remove("is-open");
  });
  setLanguageTriggersExpanded(false);
}

function toggleLanguageDropdown(switcherEl){
  if(!switcherEl){
    return;
  }
  const isOpen = switcherEl.classList.contains("is-open");
  closeMobileMenu({instant:true});
  closeMobileSitesDropdown({instant:true});
  closeHeaderSearch();
  closeAllLanguageDropdowns();
  if(!isOpen){
    switcherEl.classList.add("is-open");
    switcherEl.querySelector("[data-language-trigger]")?.setAttribute("aria-expanded", "true");
  }
}

function renderLanguageOptionsHtml(){
  return LANGUAGE_OPTIONS.map(option => `
    <button class="lang-dropdown-option ${option.id === currentLang ? "is-selected" : ""}" type="button" data-lang-dropdown-option="${option.id}">${escapeHtml(localize(option.label))}</button>
  `).join("");
}

function bindLanguageDropdown(switcherEl){
  if(!switcherEl){
    return;
  }
  const dropdown = switcherEl.querySelector(".lang-dropdown");
  if(dropdown){
    dropdown.innerHTML = renderLanguageOptionsHtml();
    dropdown.querySelectorAll("[data-lang-dropdown-option]").forEach(button => {
      button.onclick = event => {
        event.stopPropagation();
        const lang = button.dataset.langDropdownOption;
        closeAllLanguageDropdowns();
        if(lang !== currentLang){
          changeLanguage(lang);
        }
      };
    });
  }
  const trigger = switcherEl.querySelector("[data-language-trigger]");
  if(trigger){
    trigger.onclick = event => {
      event.stopPropagation();
      toggleLanguageDropdown(switcherEl);
    };
  }
}

function getLanguageOption(lang){
  return LANGUAGE_OPTIONS.find(option => option.id === lang) || LANGUAGE_OPTIONS[0];
}

function syncMobileMenuState(){
  document.body.classList.toggle("is-mobile-menu-open", isMobileMenuOpen);
}

function openMobileMenu(){
  closeMobileSitesDropdown({instant:true});
  closeHeaderSearch();
  closeSearchDropdown();
  clearTimeout(mobileMenuCloseTimer);
  document.body.classList.remove("is-mobile-menu-closing");
  isMobileMenuOpen = true;
  syncMobileMenuState();
}

function openMobileMenuForBiz(bizId){
  if(!activeDB[bizId]){
    return;
  }

  selectedBiz = bizId;
  selectedQuestion = null;
  expandedAspects = new Set();
  expandedCategories = new Set();
  clearRecentSearchTimer();
  searchQuery = "";
  renderAppPanels();
  renderMobileMenu();
  bindAppEvents();
  openMobileMenu();
}

function closeMobileMenu(options = {}){
  if(!isMobileMenuOpen && !document.body.classList.contains("is-mobile-menu-closing")){
    return;
  }
  clearTimeout(mobileMenuCloseTimer);
  isMobileMenuOpen = false;
  if(options.instant){
    document.body.classList.remove("is-mobile-menu-open", "is-mobile-menu-closing");
    syncMobileMenuState();
    return;
  }
  document.body.classList.add("is-mobile-menu-closing");
  syncMobileMenuState();
  mobileMenuCloseTimer = setTimeout(() => {
    document.body.classList.remove("is-mobile-menu-closing");
  }, 260);
}

function syncMobileSitesState(){
  document.body.classList.toggle("is-mobile-sites-open", isMobileSitesOpen);
  const button = document.getElementById("mobileSitesButton");
  if(button){
    button.setAttribute("aria-expanded", String(isMobileSitesOpen));
    button.setAttribute("aria-label", isMobileSitesOpen ? t("closeUsefulSitesLabel") : t("usefulSites"));
  }
}

function openMobileSitesDropdown(){
  closeMobileMenu({instant:true});
  closeHeaderSearch();
  closeSearchDropdown();
  clearTimeout(mobileSitesCloseTimer);
  document.body.classList.remove("is-mobile-sites-closing");
  isMobileSitesOpen = true;
  renderMobileSitesDropdown();
  syncMobileSitesState();
}

function closeMobileSitesDropdown(options = {}){
  if(!isMobileSitesOpen && !document.body.classList.contains("is-mobile-sites-closing")){
    return;
  }
  clearTimeout(mobileSitesCloseTimer);
  isMobileSitesOpen = false;
  if(options.instant){
    document.body.classList.remove("is-mobile-sites-open", "is-mobile-sites-closing");
    syncMobileSitesState();
    return;
  }
  document.body.classList.add("is-mobile-sites-closing");
  syncMobileSitesState();
  mobileSitesCloseTimer = setTimeout(() => {
    document.body.classList.remove("is-mobile-sites-closing");
  }, 220);
}

function syncHeaderSearchState(){
  document.body.classList.toggle("is-header-search-open", isHeaderSearchOpen);
  const button = document.getElementById("mobileHeaderSearchButton");
  if(button){
    button.setAttribute("aria-expanded", String(isHeaderSearchOpen));
    button.setAttribute("aria-label", isHeaderSearchOpen ? t("closeSearchLabel") : t("searchLabel"));
  }
  const input = document.getElementById("mobileHeaderKeywordSearch");
  if(input){
    input.placeholder = t("searchPlaceholder");
    input.value = searchQuery;
  }
  const closeButton = document.getElementById("mobileHeaderSearchClose");
  if(closeButton){
    closeButton.setAttribute("aria-label", t("closeSearchLabel"));
  }
}

function openHeaderSearch(){
  closeMobileMenu({instant:true});
  closeMobileSitesDropdown({instant:true});
  closeSearchDropdown();
  isHeaderSearchOpen = true;
  syncHeaderSearchState();
  renderMobileHeaderSearchResultsOnly();
  setTimeout(() => {
    document.getElementById("mobileHeaderKeywordSearch")?.focus();
  }, 0);
}

function closeHeaderSearch(){
  if(!isHeaderSearchOpen){
    return;
  }
  isHeaderSearchOpen = false;
  syncHeaderSearchState();
}

function openContactModal(){
  document.getElementById("modalLayer").innerHTML = `
    <div class="modal-mask" role="presentation">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="contactTitle">
        <h4 id="contactTitle">${escapeHtml(t("modalTitle"))}</h4>
        <p>${t("modalBody")}</p>
        <button class="modal-close" type="button" onclick="closeModal()">${escapeHtml(t("modalClose"))}</button>
      </div>
    </div>`;
}

function renderBizList(){
  return `
    <div class="biz-list">
      ${getBizEntries().map(biz => `
        <button class="biz-button ${biz.id === selectedBiz ? "is-active" : ""}" type="button" data-biz="${biz.id}">
          <span>
            <span class="biz-name">${escapeHtml(localize(biz.label))}</span>
          </span>
          <span class="biz-count">${getQuestionCount(biz.id)}</span>
        </button>
      `).join("")}
    </div>`;
}

function renderUsefulLinks(){
  return `
    <div class="site-links">
      ${USEFUL_LINKS.map(link => `
        <a class="site-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(localize(link.label))}</a>
      `).join("")}
    </div>`;
}

function renderBizEntryIcon(bizId){
  if(bizId === "consumer"){
    return `
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <circle cx="24" cy="16" r="7"></circle>
        <path d="M12 39c1.9-8.3 6.5-12.4 12-12.4S34.1 30.7 36 39"></path>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M7 39h34"></path>
      <path d="M10 21h28"></path>
      <path d="M13 21v18"></path>
      <path d="M21 21v18"></path>
      <path d="M29 21v18"></path>
      <path d="M37 21v18"></path>
      <path d="M9 18 24 9l15 9"></path>
      <path d="M17 39h14"></path>
    </svg>`;
}

function renderSearchPanelContent(){
  if(searchQuery){
    const matches = findQuestionMatches(searchQuery);
    return matches.length > 0
      ? `
        <div class="search-section">
          <div class="search-section-title">${escapeHtml(t("searchResults"))}</div>
          <div class="search-result-list">
            ${matches.map(match => {
              const detail = getMatchDetail(match);
              return `
                <button class="search-result-item" type="button" data-search-biz="${escapeHtml(match.biz)}" data-search-aspect="${escapeHtml(match.aspect)}" data-search-topic="${escapeHtml(match.topic)}" data-search-idx="${match.idx}">
                  <span class="search-result-question">${escapeHtml(detail.question)}</span>
                  <span class="search-result-meta">${escapeHtml(detail.bizLabel)} / ${escapeHtml(detail.aspectLabel)} / ${escapeHtml(detail.categoryLabel)}</span>
                </button>
              `;
            }).join("")}
          </div>
        </div>`
      : `
        <div class="search-section">
          <button class="search-no-result" type="button" data-search-contact>
            ${escapeHtml(t("noSearchResults"))}
          </button>
        </div>`;
  }

  return `
    <div class="search-section">
      <div class="search-section-title">${escapeHtml(t("popularKeywords"))}</div>
      <div class="keyword-tags">
        ${SEARCH_KEYWORDS.map(keyword => `
          <button class="keyword-tag" type="button" data-keyword-query="${escapeHtml(localize(keyword.query))}">
            ${escapeHtml(localize(keyword.label))}
          </button>
        `).join("")}
      </div>
    </div>
    <div class="search-section">
      <div class="search-section-title">${escapeHtml(t("recentSearches"))}</div>
      <div class="recent-searches">
        ${recentSearches.map(query => `
          <button class="keyword-tag recent-search-tag" type="button" data-recent-query="${escapeHtml(query)}">
            ${escapeHtml(query)}
          </button>
        `).join("")}
      </div>
    </div>`;
}

function bindSearchPanelEvents(container){
  if(!container){
    return;
  }

  container.querySelectorAll("[data-keyword-query]").forEach(button => {
    button.onclick = event => {
      event.stopPropagation();
      commitSearch(button.dataset.keywordQuery);
      if(!button.closest("#mobileMenuLayer") && !button.closest("#mobileHeaderSearch")){
        openSearchDropdown();
      }
    };
  });

  container.querySelectorAll("[data-recent-query]").forEach(button => {
    button.onclick = event => {
      event.stopPropagation();
      commitSearch(button.dataset.recentQuery);
      if(!button.closest("#mobileMenuLayer") && !button.closest("#mobileHeaderSearch")){
        openSearchDropdown();
      }
    };
  });

  container.querySelectorAll("[data-search-biz][data-search-aspect][data-search-topic][data-search-idx]").forEach(button => {
    button.onclick = event => {
      event.stopPropagation();
      const shouldCloseMenu = Boolean(button.closest("#mobileMenuLayer"));
      const shouldCloseHeaderSearch = Boolean(button.closest("#mobileHeaderSearch"));
      recordRecentSearch(searchQuery);
      closeSearchDropdown();
      jumpToAnswer(button.dataset.searchBiz, button.dataset.searchAspect, button.dataset.searchTopic, Number(button.dataset.searchIdx));
      if(shouldCloseMenu){
        closeMobileMenu();
      }
      if(shouldCloseHeaderSearch){
        closeHeaderSearch();
      }
    };
  });

  container.querySelectorAll("[data-search-contact]").forEach(button => {
    button.onclick = event => {
      event.stopPropagation();
      recordRecentSearch(searchQuery);
      closeSearchDropdown();
      openContactModal();
      if(button.closest("#mobileMenuLayer")){
        closeMobileMenu();
      }
      if(button.closest("#mobileHeaderSearch")){
        closeHeaderSearch();
      }
    };
  });
}

function renderMobileSearchPanel(){
  return `
    <section class="mobile-menu-section mobile-search-section">
      <div class="mobile-search-wrap">
        <div class="search-box mobile-search-box">
          <input id="mobileKeywordSearch" class="keyword-search mobile-keyword-search" type="search" placeholder="${escapeHtml(t("searchPlaceholder"))}" value="${escapeHtml(searchQuery)}" autocomplete="off">
          <button class="search-icon-btn mobile-search-submit" type="button" aria-label="${escapeHtml(t("searchLabel"))}"></button>
        </div>
        <div class="mobile-search-results" id="mobileSearchResults">
          ${renderSearchPanelContent()}
        </div>
      </div>
    </section>`;
}

function renderMobileSearchResultsOnly(){
  const results = document.getElementById("mobileSearchResults");
  if(!results){
    return;
  }
  results.innerHTML = renderSearchPanelContent();
  bindSearchPanelEvents(results);
}

function renderMobileHeaderSearchResultsOnly(){
  const results = document.getElementById("mobileHeaderSearchResults");
  if(!results){
    return;
  }
  results.innerHTML = renderSearchPanelContent();
  bindSearchPanelEvents(results);
}

function bindMobileSearchEvents(){
  const mobileInput = document.getElementById("mobileKeywordSearch");
  if(!mobileInput){
    return;
  }

  const runMobileSearch = () => {
    commitSearch(mobileInput.value);
  };

  mobileInput.placeholder = t("searchPlaceholder");
  mobileInput.oninput = event => {
    searchQuery = String(event.target.value || "").trim();
    renderMobileSearchResultsOnly();
  };
  mobileInput.onkeydown = event => {
    if(event.key === "Enter"){
      event.preventDefault();
      runMobileSearch();
    }
  };

  const submitButton = document.querySelector(".mobile-search-submit");
  if(submitButton){
    submitButton.setAttribute("aria-label", t("searchLabel"));
    submitButton.onclick = runMobileSearch;
  }

  renderMobileSearchResultsOnly();
}

function bindMobileHeaderSearchEvents(){
  const input = document.getElementById("mobileHeaderKeywordSearch");
  if(!input){
    return;
  }

  const commitHeaderSearch = () => {
    commitSearch(input.value);
    renderMobileHeaderSearchResultsOnly();
  };

  input.placeholder = t("searchPlaceholder");
  input.value = searchQuery;
  input.oninput = event => {
    searchQuery = String(event.target.value || "").trim();
    renderMobileHeaderSearchResultsOnly();
  };
  input.onkeydown = event => {
    if(event.key === "Enter"){
      event.preventDefault();
      commitHeaderSearch();
    }
  };

  const closeButton = document.getElementById("mobileHeaderSearchClose");
  if(closeButton){
    closeButton.setAttribute("aria-label", t("closeSearchLabel"));
    closeButton.onclick = closeHeaderSearch;
  }

  renderMobileHeaderSearchResultsOnly();
}

function renderBizPanel(){
  return `
    <aside class="app-panel biz-panel">
      <div class="biz-section">
        <div class="panel-head">
          <h2 class="panel-title">${escapeHtml(t("chooseBiz"))}</h2>
        </div>
        <div class="panel-body">
          ${renderBizList()}
        </div>
      </div>
      <div class="sites-section">
        <h3 class="sites-title">${escapeHtml(t("usefulSites"))}</h3>
        ${renderUsefulLinks()}
      </div>
    </aside>`;
}

function renderQuestionList(group){
  const questionTotal = group.topics.reduce((sum, topic) => sum + topic.questions.length, 0);

  if(questionTotal === 0){
    return `<div class="empty-category">${escapeHtml(t("emptyAspectCategory"))}</div>`;
  }

  return `
    <div class="question-list">
      ${group.topics.map(topic => `
        ${topic.questions.map(item => {
          const sourceTopic = getTopic(selectedBiz, group.aspectId, topic.id);
          const idx = sourceTopic?.questions.indexOf(item) ?? -1;
          const isSelected = selectedQuestion &&
            selectedQuestion.biz === selectedBiz &&
            selectedQuestion.aspect === group.aspectId &&
            selectedQuestion.topic === topic.id &&
            selectedQuestion.idx === idx;

          return `
            <button class="question-button ${isSelected ? "is-selected" : ""}" type="button" data-aspect="${group.aspectId}" data-topic="${topic.id}" data-idx="${idx}">
              ${escapeHtml(localize(item.q))}
            </button>`;
        }).join("")}
      `).join("")}
    </div>`;
}

function renderCategoryStack(aspectGroups){
  return `
    <div class="aspect-stack">
      ${aspectGroups.map(aspect => {
        const isAspectOpen = expandedAspects.has(aspect.id);
        const aspectQuestionTotal = aspect.categories.reduce((sum, group) =>
          sum + group.topics.reduce((topicSum, topic) => topicSum + topic.questions.length, 0), 0
        );

        return `
        <section class="topic-block aspect-block ${isAspectOpen ? "is-open" : ""}">
          <button class="topic-toggle aspect-toggle" type="button" data-aspect-toggle="${aspect.id}" aria-expanded="${isAspectOpen}">
            <span class="toggle-icon">${isAspectOpen ? "−" : "+"}</span>
            <span class="topic-name">${escapeHtml(localize(aspect.label))}</span>
            <span class="topic-count">${escapeHtml(formatQuestionCount(aspectQuestionTotal))}</span>
          </button>
          ${isAspectOpen ? `
            <div class="topic-stack nested-topic-stack">
              ${aspect.categories.map(group => {
                const isOpen = expandedCategories.has(group.groupKey);
                const questionTotal = group.topics.reduce((sum, topic) => sum + topic.questions.length, 0);

                return `
                  <section class="topic-block ${isOpen ? "is-open" : ""}">
                    <button class="topic-toggle" type="button" data-aspect="${group.aspectId}" data-category="${group.categoryId}" aria-expanded="${isOpen}">
                      <span class="toggle-icon">${isOpen ? "−" : "+"}</span>
                      <span class="topic-name">${escapeHtml(localize(group.label))}</span>
                      <span class="topic-count">${escapeHtml(formatQuestionCount(questionTotal))}</span>
                    </button>
                    ${isOpen ? renderQuestionList(group) : ""}
                  </section>`;
              }).join("")}
            </div>
          ` : ""}
        </section>
        `;
      }).join("")}
    </div>`;
}

function renderCategoryPanel(){
  const aspectGroups = buildCategoryGroups(selectedBiz);
  const allGroups = aspectGroups.flatMap(aspect => aspect.categories);
  const aspectKeys = getAllAspectKeys();
  const allOpen = aspectKeys.every(aspectId => expandedAspects.has(aspectId)) &&
    allGroups.every(group => expandedCategories.has(group.groupKey));

  return `
    <section class="app-panel category-panel">
      <div class="panel-head">
        <div class="panel-head-row">
          <h2 class="panel-title">${escapeHtml(t("chooseQuestion"))}</h2>
          <button class="expand-all-btn" type="button" data-toggle-all="true">${escapeHtml(allOpen ? t("collapseAll") : t("expandAll"))}</button>
        </div>
      </div>
      <div class="panel-body">
        ${renderCategoryStack(aspectGroups)}
      </div>
    </section>`;
}

function getMobileQuestionSectionState(){
  const aspectGroups = buildCategoryGroups(selectedBiz);
  const allGroups = aspectGroups.flatMap(aspect => aspect.categories);
  const aspectKeys = getAllAspectKeys();
  const allOpen = aspectKeys.every(aspectId => expandedAspects.has(aspectId)) &&
    allGroups.every(group => expandedCategories.has(group.groupKey));

  return {aspectGroups, allOpen};
}

function renderMobileQuestionSection(){
  const {aspectGroups, allOpen} = getMobileQuestionSectionState();
  return `
    <div class="mobile-section-head">
      <h3 class="mobile-section-title">${escapeHtml(t("mobileFaqTitle"))}</h3>
      <button class="expand-all-btn mobile-expand-all" type="button" data-toggle-all="true">${escapeHtml(allOpen ? t("collapseAll") : t("expandAll"))}</button>
    </div>
    <div class="mobile-menu-card mobile-question-card">
      ${renderCategoryStack(aspectGroups)}
    </div>`;
}

function renderHomeQuestionTree(){
  const {aspectGroups} = getMobileQuestionSectionState();
  return `
    <div class="mobile-menu-card mobile-question-card">
      ${renderCategoryStack(aspectGroups)}
    </div>`;
}

function renderAnswerPanel(){
  let answerHtml = `
    <div class="answer-empty">
      <span class="answer-empty-text answer-empty-question-prompt">${escapeHtml(t("emptyAnswer"))}</span>
      <div class="answer-empty-mobile-choice">
        <div class="home-question-tree" id="homeQuestionTree">
          ${renderHomeQuestionTree()}
        </div>
      </div>
    </div>`;

  if(selectedQuestion){
    const item = getTopic(selectedQuestion.biz, selectedQuestion.aspect, selectedQuestion.topic)?.questions?.[selectedQuestion.idx];
    if(item){
      answerHtml = `
        <div class="answer-content">
          <h2 class="answer-question">${escapeHtml(localize(item.q))}</h2>
          <div class="answer-card answer-main">
            <p class="answer-text">${escapeHtml(localize(item.a))}</p>
          </div>
          <div class="answer-card answer-meta">
            <p class="answer-label">${escapeHtml(t("refLabel"))}</p>
            <p class="meta-text">${escapeHtml(localize(item.ref))}</p>
            <p class="answer-label meta-label">${escapeHtml(t("revisionDate"))}</p>
            <p class="meta-text">${escapeHtml(item.revisionDate)}</p>
            ${item.link ? `
              <p class="answer-label meta-label">${escapeHtml(t("attachmentLabel"))}</p>
              <p class="meta-text"><a href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.link)}</a></p>
            ` : ""}
            <p class="meta-disclaimer">* ${escapeHtml(t("staleNotice"))}</p>
          </div>
        </div>`;
    }
  }

  let panelHeadHtml;
  if(selectedQuestion){
    panelHeadHtml = `
      <div class="panel-head">
        <button class="answer-back-btn" type="button" data-answer-back>${escapeHtml(t("answerBack"))}</button>
      </div>`;
  }else{
    const {allOpen} = getMobileQuestionSectionState();
    panelHeadHtml = `
      <div class="panel-head panel-head-home-list">
        <button class="answer-back-btn" type="button" data-home-list-back>${escapeHtml(t("answerBack"))}</button>
        <h2 class="home-list-title">${escapeHtml(t("homeListTitle"))}</h2>
        <button class="expand-all-btn mobile-expand-all home-list-expand-all" type="button" data-toggle-all="true">${escapeHtml(allOpen ? t("collapseAll") : t("expandAll"))}</button>
      </div>`;
  }

  return `
    <section class="app-panel answer-panel">
      ${panelHeadHtml}
      <div class="panel-body">
        <div class="answer-shell">${answerHtml}</div>
      </div>
      <div class="contact-card">
        <button class="contact-card-btn" type="button" onclick="openContactModal()">${escapeHtml(t("contactFooterButton"))}</button>
      </div>
    </section>`;
}

function renderMobileMenu(){
  const layer = document.getElementById("mobileMenuLayer");
  if(!layer){
    return;
  }
  const menuTitle = localize(activeDB[selectedBiz]?.label) || t("mobileMenuTitle");

  layer.innerHTML = `
    <div class="mobile-menu-backdrop" data-mobile-menu-close></div>
    <aside class="mobile-menu-drawer" role="dialog" aria-modal="true" aria-labelledby="mobileMenuTitle">
      <div class="mobile-sheet-handle" aria-hidden="true"></div>
      <div class="mobile-menu-top">
        <button class="mobile-menu-close" type="button" aria-label="${escapeHtml(t("closeMenuLabel"))}" data-mobile-menu-close>
          <span></span>
          <span></span>
        </button>
        <h2 id="mobileMenuTitle">${escapeHtml(menuTitle)}</h2>
      </div>
      <div class="mobile-menu-content">
        <section class="mobile-menu-section" id="mobileQuestionSection">
          ${renderMobileQuestionSection()}
        </section>
      </div>
    </aside>`;

  syncMobileMenuState();
}

function renderMobileSitesDropdown(){
  const layer = document.getElementById("mobileSitesLayer");
  if(!layer){
    return;
  }

  layer.innerHTML = `
    <div class="mobile-sites-backdrop" data-mobile-sites-close></div>
    <section class="mobile-sites-dropdown" role="dialog" aria-modal="true" aria-labelledby="mobileSitesTitle">
      <div class="mobile-sheet-handle" aria-hidden="true"></div>
      <div class="mobile-sites-top">
        <button class="mobile-menu-close mobile-sites-close" type="button" aria-label="${escapeHtml(t("closeUsefulSitesLabel"))}" data-mobile-sites-close>
          <span></span>
          <span></span>
        </button>
        <h2 id="mobileSitesTitle">${escapeHtml(t("usefulSites"))}</h2>
      </div>
      <div class="mobile-sites-content">
        ${renderUsefulLinks()}
      </div>
    </section>`;

  syncMobileSitesState();
  bindMobileSitesDropdownEvents();
}

function bindMobileSitesDropdownEvents(){
  document.querySelectorAll("[data-mobile-sites-close]").forEach(button => {
    button.onclick = closeMobileSitesDropdown;
  });

  document.querySelectorAll("#mobileSitesLayer .site-link").forEach(link => {
    link.onclick = closeMobileSitesDropdown;
  });
}

function isMobileMenuMounted(){
  return Boolean(document.querySelector("#mobileMenuLayer .mobile-menu-content"));
}

function renderAppPanels(){
  const app = document.getElementById("app");
  if(!app){
    return;
  }

  app.innerHTML = `
    ${renderBizPanel()}
    ${renderCategoryPanel()}
    ${renderAnswerPanel()}
  `;
}

function refreshMobileMenuSections(){
  const content = document.querySelector("#mobileMenuLayer .mobile-menu-content");
  if(!content){
    return;
  }

  const previousScrollTop = content.scrollTop;
  const bizSection = document.getElementById("mobileBizSection");
  const questionSection = document.getElementById("mobileQuestionSection");
  const mobileSearchInput = document.getElementById("mobileKeywordSearch");

  if(bizSection){
    bizSection.innerHTML = renderBizList();
  }
  if(questionSection){
    questionSection.innerHTML = renderMobileQuestionSection();
  }
  if(mobileSearchInput){
    mobileSearchInput.value = searchQuery;
  }
  renderMobileSearchResultsOnly();
  restoreMobileMenuScroll(content, previousScrollTop);
}

function restoreMobileMenuScroll(content, scrollTop){
  const applyScroll = () => {
    const maxScrollTop = Math.max(0, content.scrollHeight - content.clientHeight);
    content.scrollTop = Math.min(scrollTop, maxScrollTop);
  };

  applyScroll();
  requestAnimationFrame(applyScroll);
  setTimeout(applyScroll, 0);
}

function refreshUi(){
  if(isMobileMenuOpen && isMobileMenuMounted()){
    renderChrome();
    renderAppPanels();
    refreshMobileMenuSections();
    bindAppEvents();
    return;
  }

  render();
}

function renderSearchDropdown(){
  const dropdown = document.getElementById("searchDropdown");
  if(!dropdown){
    return;
  }

  dropdown.innerHTML = renderSearchPanelContent();
  bindSearchPanelEvents(dropdown);
}

function openSearchDropdown(){
  const wrap = document.getElementById("searchWrap");
  if(wrap){
    wrap.classList.add("is-open");
  }
}

function closeSearchDropdown(){
  const wrap = document.getElementById("searchWrap");
  if(wrap){
    wrap.classList.remove("is-open");
  }
}

function updateLayoutMetrics(){
  const topbar = document.querySelector(".topbar");
  if(!topbar){
    return;
  }

  const topbarHeight = Math.ceil(topbar.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--topbar-height", `${topbarHeight}px`);
}

function bindAppEvents(){
  document.querySelectorAll("[data-biz]").forEach(button => {
    button.onclick = () => selectBiz(button.dataset.biz);
  });

  document.querySelectorAll("[data-aspect-toggle]").forEach(button => {
    button.onclick = () => toggleAspect(button.dataset.aspectToggle);
  });

  document.querySelectorAll("[data-aspect][data-category]").forEach(button => {
    button.onclick = () => toggleCategory(button.dataset.aspect, button.dataset.category);
  });

  document.querySelectorAll("[data-toggle-all]").forEach(button => {
    button.onclick = () => toggleAllCategories();
  });

  document.querySelectorAll("[data-answer-back]").forEach(button => {
    button.onclick = returnToQuestionStart;
  });

  document.querySelectorAll("[data-home-list-back]").forEach(button => {
    button.onclick = returnToBizSelect;
  });

  document.querySelectorAll("[data-aspect][data-topic][data-idx]").forEach(button => {
    button.onclick = () => {
      const shouldCloseMenu = Boolean(button.closest("#mobileMenuLayer"));
      const isHomeList = Boolean(button.closest("#homeQuestionTree"));
      if(shouldCloseMenu){
        captureMobileMenuReturnState();
      }
      if(isHomeList){
        homeListScrollY = window.scrollY;
      }
      selectQuestion(
        button.dataset.aspect,
        button.dataset.topic,
        Number(button.dataset.idx),
        shouldCloseMenu ? {returnMode:"mobile-menu"} : (isHomeList ? {returnMode:"home-list"} : {})
      );
      if(shouldCloseMenu){
        closeMobileMenu();
      }
    };
  });

  document.querySelectorAll("[data-mobile-menu-close]").forEach(button => {
    button.onclick = closeMobileMenu;
  });

  document.querySelectorAll("[data-open-question-menu]").forEach(button => {
    button.onclick = openMobileMenu;
  });

  document.querySelectorAll("[data-open-question-menu-biz]").forEach(button => {
    button.onclick = () => openMobileMenuForBiz(button.dataset.openQuestionMenuBiz);
  });

  const mobileHeaderSearchButton = document.getElementById("mobileHeaderSearchButton");
  if(mobileHeaderSearchButton){
    mobileHeaderSearchButton.onclick = event => {
      event.stopPropagation();
      if(isHeaderSearchOpen){
        closeHeaderSearch();
      }else{
        openHeaderSearch();
      }
    };
  }

  document.querySelectorAll("[data-mobile-sites-close]").forEach(button => {
    button.onclick = closeMobileSitesDropdown;
  });

  document.querySelectorAll("#mobileSitesLayer .site-link").forEach(link => {
    link.onclick = closeMobileSitesDropdown;
  });

  bindMobileSearchEvents();
}

function bindChromeEvents(){
  document.querySelectorAll("[data-lang-option]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.langOption === currentLang);
    button.onclick = () => changeLanguage(button.dataset.langOption);
  });

  const mobileHeaderSearchButton = document.getElementById("mobileHeaderSearchButton");
  if(mobileHeaderSearchButton){
    mobileHeaderSearchButton.onclick = event => {
      event.stopPropagation();
      if(isHeaderSearchOpen){
        closeHeaderSearch();
      }else{
        openHeaderSearch();
      }
    };
  }

  const mobileSitesButton = document.getElementById("mobileSitesButton");
  if(mobileSitesButton){
    mobileSitesButton.onclick = () => {
      if(isMobileSitesOpen){
        closeMobileSitesDropdown();
      }else{
        openMobileSitesDropdown();
      }
    };
  }
  const mobileSitesTopLabel = document.getElementById("mobileSitesTopLabel");
  const mobileSitesBottomLabel = document.getElementById("mobileSitesBottomLabel");
  if(mobileSitesTopLabel){
    mobileSitesTopLabel.textContent = t("usefulSitesTop");
  }
  if(mobileSitesBottomLabel){
    mobileSitesBottomLabel.textContent = t("usefulSitesBottom");
  }
  syncMobileSitesState();

  const mobileLanguageButton = document.getElementById("mobileLanguageButton");
  if(mobileLanguageButton){
    mobileLanguageButton.setAttribute("aria-label", t("langLabel"));
  }

  const mobileLanguageLabel = document.getElementById("mobileLanguageLabel");
  if(mobileLanguageLabel){
    mobileLanguageLabel.textContent = getLanguageOption(currentLang).short;
  }

  bindLanguageDropdown(document.querySelector(".language-switch.lang-switcher"));

  const searchInput = document.getElementById("keywordSearch");
  if(searchInput){
    searchInput.placeholder = t("searchPlaceholder");
    searchInput.value = searchQuery;
    searchInput.onfocus = openSearchDropdown;
    searchInput.oninput = event => {
      applySearch(event.target.value);
      queueRecentSearch(event.target.value);
      openSearchDropdown();
    };
    searchInput.onkeydown = event => {
      if(event.key === "Enter"){
        event.preventDefault();
        commitSearch(event.target.value);
      }
    };
  }

  const searchButton = document.querySelector("#searchWrap .search-icon-btn");
  if(searchButton){
    searchButton.setAttribute("aria-label", t("searchLabel"));
    searchButton.onclick = () => commitSearch(searchInput?.value || "");
  }

  syncHeaderSearchState();
  bindMobileHeaderSearchEvents();
}

function renderChrome(){
  document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : currentLang;
  document.title = t("documentTitle");
  updateLayoutMetrics();

  const languageSwitch = document.querySelector(".language-switch");
  if(languageSwitch){
    languageSwitch.setAttribute("aria-label", t("langLabel"));
  }
  const footerNotice = document.getElementById("footerNotice");
  if(footerNotice){
    footerNotice.textContent = t("footerNotice");
  }
  const footerCredits = document.getElementById("footerCredits");
  if(footerCredits){
    footerCredits.textContent = t("footerCredits");
  }

  renderSearchDropdown();
  bindChromeEvents();
}

function render(){
  renderChrome();
  renderAppPanels();
  renderMobileMenu();
  renderMobileSitesDropdown();
  renderBizSelectScreen();
  bindAppEvents();
  bindBizSelectEvents();
  updateBizSelectVisibility();
}

document.addEventListener("click", event => {
  const wrap = document.getElementById("searchWrap");
  if(wrap && !wrap.contains(event.target)){
    closeSearchDropdown();
  }
  const headerSearch = document.getElementById("mobileHeaderSearch");
  const headerSearchButton = document.getElementById("mobileHeaderSearchButton");
  if(isHeaderSearchOpen &&
    headerSearch &&
    !headerSearch.contains(event.target) &&
    !headerSearchButton?.contains(event.target)){
    closeHeaderSearch();
  }
  if(!event.target.closest(".lang-switcher")){
    closeAllLanguageDropdowns();
  }
});

document.addEventListener("keydown", event => {
  if(event.key === "Escape"){
    closeMobileMenu();
    closeMobileSitesDropdown();
    closeHeaderSearch();
    closeAllLanguageDropdowns();
  }
});

window.addEventListener("resize", updateLayoutMetrics);
window.addEventListener("storage", event => {
  if(!HAS_SUPABASE_CONFIG && event.key === ADMIN_STORAGE_KEY){
    loadFaqsFromLocalStorage();
  }
});

if(!HAS_SUPABASE_CONFIG){
  loadFaqsFromLocalStorage({render:false});
}
render();
loadFaqsFromApi().then(() => {
  if(!HAS_SUPABASE_CONFIG){
    loadFaqsFromLocalStorage();
  }
});
setInterval(() => {
  loadFaqsFromApi().then(() => {
    if(!HAS_SUPABASE_CONFIG){
      loadFaqsFromLocalStorage();
    }
  });
}, API_REFRESH_MS);
