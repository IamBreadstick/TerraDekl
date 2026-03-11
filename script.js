const yearElement = document.querySelector("#year");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const languageSwitcher = document.querySelector(".language-switcher");
const languageSummaryCode = document.querySelector(".language-switcher summary .lang-code");
const languageSummaryFlag = document.querySelector(".language-switcher summary .lang-flag");
const languageOptions = document.querySelectorAll(".language-option");
const pageDescriptionMeta = document.querySelector('meta[name="description"]');
const LANGUAGE_STORAGE_KEY = "terradekl-language";

const translations = {
  EN: {
    htmlLang: "en",
    title: "TerraDekl | Product Showcase",
    description:
      "TerraDekl presents modern product collections with a clean, tactile shopping experience.",
    nav: ["Products", "Custom Orders", "About", "Contact"],
    heroEyebrow: "Curated goods for grounded spaces",
    heroTitle: "Products with texture, warmth, and a clear point of view.",
    heroText:
      "TerraDekl is a flexible storefront layout for showcasing featured products, seasonal collections, and your brand story without a heavy framework.",
    heroButtons: ["Shop Featured", "Our Story"],
    heroStats: ["Featured products", "Curated collections", "Order dispatch"],
    visualLabels: ["New Arrival", "Collection"],
    visualTitles: ["Stoneware Set", "Desert Edit"],
    productsEyebrow: "Products",
    productsHeading: "Built to make the catalog feel tangible.",
    productsText:
      "Replace these placeholders with real product data once you wire the page into your storefront or CMS.",
    productTags: ["Decor", "Tableware", "Lighting", "Textiles"],
    productNames: [
      "Clay Ridge Vase",
      "Dune Dinner Set",
      "Amber Arc Lamp",
      "Woven Mesa Throw",
    ],
    productDescriptions: [
      "Hand-finished silhouette designed for warm neutral interiors.",
      "Soft matte ceramic pieces for everyday meals and hosting.",
      "Diffuse evening light with a sculptural brass-toned frame.",
      "Layered texture with heavyweight cotton and desert-striping.",
    ],
    productAction: "View Product",
    customEyebrow: "Custom Orders",
    customHeading: "We offer custom orders for terrarium lids.",
    customCta: "Start Your Order",
    collectionBadges: ["Spring / Summer", "Limited release", "Best sellers"],
    collectionNames: ["Earthlight", "Studio Forms", "Quiet Table"],
    collectionActions: ["Explore selection", "See pieces", "See pieces"],
    aboutEyebrow: "About TerraDekl",
    aboutHeading: "A simple product site with room to grow.",
    aboutText:
      "Start with this layout as a static catalog, then connect it to a store platform, headless CMS, or custom backend when you are ready to add inventory, carts, and checkout.",
    contactEyebrow: "Contact",
    contactHeading: "Ready to turn this into a full storefront?",
    footerText: "Product showcase template for modern retail brands.",
  },
  SL: {
    htmlLang: "sl",
    title: "TerraDekl | Predstavitev Izdelkov",
    description:
      "TerraDekl predstavlja sodobne kolekcije izdelkov s čisto in otipljivo nakupno izkušnjo.",
    nav: ["Izdelki", "Naročila po meri", "O nas", "Kontakt"],
    heroEyebrow: "Izbrani izdelki za tople domove",
    heroTitle: "Izdelki s teksturo, toplino in jasnim značajem.",
    heroText:
      "TerraDekl je prilagodljiva postavitev trgovine za predstavitev izpostavljenih izdelkov, sezonskih kolekcij in vaše zgodbe brez težavnega ogrodja.",
    heroButtons: ["Poglej Izdelke", "Naša Zgodba"],
    heroStats: ["Izpostavljeni izdelki", "Kurirane kolekcije", "Odprema naročil"],
    visualLabels: ["Novost", "Kolekcija"],
    visualTitles: ["Komplet iz kamnine", "Puščavski izbor"],
    productsEyebrow: "Izdelki",
    productsHeading: "Katalog je zasnovan tako, da deluje bolj otipljivo.",
    productsText:
      "Te primere zamenjajte z dejanskimi podatki o izdelkih, ko stran povežete s trgovino ali CMS sistemom.",
    productTags: ["Dekor", "Namizni program", "Svetila", "Tekstil"],
    productNames: [
      "Vaza Clay Ridge",
      "Jedilni komplet Dune",
      "Svetilka Amber Arc",
      "Odeja Woven Mesa",
    ],
    productDescriptions: [
      "Ročno obdelana silhueta za tople in nevtralne interierje.",
      "Mehki mat keramični kosi za vsakodnevne obroke in druženja.",
      "Mehka večerna svetloba s kiparskim medeninastim okvirjem.",
      "Plastena tekstura iz težjega bombaža z puščavskimi črtami.",
    ],
    productAction: "Poglej Izdelek",
    customEyebrow: "Naročila po meri",
    customHeading: "Ponujamo naročila po meri za pokrove terarijev.",
    customCta: "Oddaj Naročilo",
    collectionBadges: ["Pomlad / Poletje", "Omejena izdaja", "Najbolj prodajano"],
    collectionNames: ["Earthlight", "Studio Forms", "Quiet Table"],
    collectionActions: ["Razišči izbor", "Poglej izdelke", "Poglej izdelke"],
    aboutEyebrow: "O TerraDekl",
    aboutHeading: "Preprosta produktna stran z veliko prostora za rast.",
    aboutText:
      "Začnite s to postavitvijo kot statičnim katalogom, nato pa jo povežite s trgovinsko platformo, headless CMS sistemom ali prilagojenim backendom, ko boste pripravljeni dodati zalogo, košarico in plačilo.",
    contactEyebrow: "Kontakt",
    contactHeading: "Ste pripravljeni to nadgraditi v celovito trgovino?",
    footerText: "Predloga produktne predstavitve za sodobne maloprodajne znamke.",
  },
  DE: {
    htmlLang: "de",
    title: "TerraDekl | Produktpräsentation",
    description:
      "TerraDekl präsentiert moderne Produktkollektionen mit einem klaren und haptischen Einkaufserlebnis.",
    nav: ["Produkte", "Sonderanfertigungen", "Über uns", "Kontakt"],
    heroEyebrow: "Kuratiertes Sortiment für geerdete Räume",
    heroTitle: "Produkte mit Textur, Wärme und klarem Charakter.",
    heroText:
      "TerraDekl ist ein flexibles Storefront-Layout zur Präsentation von Highlights, saisonalen Kollektionen und Ihrer Markenstory ohne schweres Framework.",
    heroButtons: ["Highlights ansehen", "Unsere Story"],
    heroStats: ["Highlight-Produkte", "Kuratierte Kollektionen", "Versandzeit"],
    visualLabels: ["Neu eingetroffen", "Kollektion"],
    visualTitles: ["Steingut-Set", "Wüstenauswahl"],
    productsEyebrow: "Produkte",
    productsHeading: "So wird der Katalog spürbarer und greifbarer.",
    productsText:
      "Ersetzen Sie diese Platzhalter durch echte Produktdaten, sobald Sie die Seite mit Ihrem Shop oder CMS verbinden.",
    productTags: ["Dekor", "Geschirr", "Beleuchtung", "Textilien"],
    productNames: [
      "Clay Ridge Vase",
      "Dune Dinner Set",
      "Amber Arc Lampe",
      "Woven Mesa Decke",
    ],
    productDescriptions: [
      "Handveredelte Silhouette für warme, neutrale Innenräume.",
      "Weiche matte Keramik für Alltag und Gastgebermomente.",
      "Diffuses Abendlicht mit skulpturalem Rahmen in Messingoptik.",
      "Mehrlagige Struktur aus schwerer Baumwolle mit Wüstenstreifen.",
    ],
    productAction: "Produkt ansehen",
    customEyebrow: "Sonderanfertigungen",
    customHeading: "Wir bieten Sonderanfertigungen für Terrarium-Deckel an.",
    customCta: "Bestellung starten",
    collectionBadges: ["Frühjahr / Sommer", "Limitierte Auflage", "Bestseller"],
    collectionNames: ["Earthlight", "Studio Forms", "Quiet Table"],
    collectionActions: ["Auswahl entdecken", "Produkte ansehen", "Produkte ansehen"],
    aboutEyebrow: "Über TerraDekl",
    aboutHeading: "Eine einfache Produktseite mit Raum zum Wachsen.",
    aboutText:
      "Starten Sie mit diesem Layout als statischem Katalog und verbinden Sie es später mit einer Shop-Plattform, einem Headless CMS oder einem eigenen Backend, wenn Sie Bestand, Warenkorb und Checkout hinzufügen möchten.",
    contactEyebrow: "Kontakt",
    contactHeading: "Bereit, daraus einen vollständigen Store zu machen?",
    footerText: "Produktpräsentationsvorlage für moderne Retail-Marken.",
  },
};

const setText = (selector, value) => {
  const element = document.querySelector(selector);

  if (element && typeof value === "string") {
    element.textContent = value;
  }
};

const setTextList = (selector, values) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    if (values[index]) {
      element.textContent = values[index];
    }
  });
};

const applyTranslations = (languageCode) => {
  const content = translations[languageCode];

  if (!content) {
    return;
  }

  document.documentElement.lang = content.htmlLang;
  document.title = content.title;

  if (pageDescriptionMeta) {
    pageDescriptionMeta.setAttribute("content", content.description);
  }

  navLinks.forEach((link, index) => {
    if (content.nav[index]) {
      link.textContent = content.nav[index];
    }
  });

  setText(".hero-copy .eyebrow", content.heroEyebrow);
  setText(".hero-copy h1", content.heroTitle);
  setText(".hero-text", content.heroText);
  setTextList(".hero-actions a", content.heroButtons);
  setTextList(".hero-stats dd", content.heroStats);
  setText(".visual-card-large span", content.visualLabels[0]);
  setText(".visual-card-small span", content.visualLabels[1]);
  setText(".visual-card-large strong", content.visualTitles[0]);
  setText(".visual-card-small strong", content.visualTitles[1]);

  setText("#products .section-heading .eyebrow", content.productsEyebrow);
  setText("#products .section-heading h2", content.productsHeading);
  setText("#products .section-heading p:not(.eyebrow)", content.productsText);

  setTextList(".product-card .product-tag", content.productTags);
  setTextList(".product-card h3", content.productNames);
  setTextList(".product-card .product-body p:not(.product-tag)", content.productDescriptions);

  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    const actionLink = card.querySelector(".product-meta a");

    if (actionLink) {
      actionLink.textContent = content.productAction;
    }
  });

  setText("#custom-orders .section-heading .eyebrow", content.customEyebrow);
  setText("#custom-orders .section-heading h2", content.customHeading);
  setText("#custom-orders .order-cta", content.customCta);
  setTextList("#custom-orders .collection-panel p", content.collectionBadges);
  setTextList("#custom-orders .collection-panel h3", content.collectionNames);
  setTextList("#custom-orders .collection-panel a", content.collectionActions);

  setText("#about .eyebrow", content.aboutEyebrow);
  setText("#about h2", content.aboutHeading);
  setText("#about .story > p", content.aboutText);

  setText("#contact .eyebrow", content.contactEyebrow);
  setText("#contact h2", content.contactHeading);

  setText(".site-footer p:nth-child(2)", content.footerText);
};

const setLanguageSelection = (languageCode) => {
  const selectedOption = Array.from(languageOptions).find(
    (option) => option.dataset.code === languageCode
  );

  if (!selectedOption) {
    return;
  }

  const code = selectedOption.dataset.code;
  const flag = selectedOption.dataset.flag;
  const label = selectedOption.dataset.label;

  if (code && flag && label) {
    languageSummaryCode.textContent = code;
    languageSummaryFlag.textContent = flag;
    languageSummaryCode.setAttribute("aria-label", `${label} selected`);
  }

  for (const option of languageOptions) {
    option.classList.toggle("is-selected", option === selectedOption);
  }

  applyTranslations(languageCode);
  localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);
};

const sectionIdToLink = new Map();

for (const link of navLinks) {
  const sectionId = link.getAttribute("href")?.slice(1);

  if (sectionId) {
    sectionIdToLink.set(sectionId, link);
  }
}

const setActiveNavLink = (sectionId) => {
  for (const link of navLinks) {
    const isCurrent = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-current", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  }
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (
  languageSwitcher &&
  languageSummaryCode &&
  languageSummaryFlag &&
  languageOptions.length > 0
) {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage && translations[savedLanguage]) {
    setLanguageSelection(savedLanguage);
  } else {
    const selectedOption = Array.from(languageOptions).find((option) =>
      option.classList.contains("is-selected")
    );

    if (selectedOption?.dataset.code) {
      setLanguageSelection(selectedOption.dataset.code);
    }
  }

  for (const option of languageOptions) {
    option.addEventListener("click", () => {
      const code = option.dataset.code;

      if (code && translations[code]) {
        setLanguageSelection(code);
      }

      languageSwitcher.removeAttribute("open");
    });
  }
}

if (navLinks.length > 0) {
  setActiveNavLink("products");

  const sections = Array.from(sectionIdToLink.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection?.target?.id) {
        setActiveNavLink(visibleSection.target.id);
      }
    },
    {
      root: null,
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.2, 0.4, 0.6],
    }
  );

  for (const section of sections) {
    observer.observe(section);
  }

  for (const link of navLinks) {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("href")?.slice(1);

      if (sectionId) {
        setActiveNavLink(sectionId);
      }
    });
  }
}
