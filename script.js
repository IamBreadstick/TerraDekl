const yearElement = document.querySelector("#year");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const languageSwitcher = document.querySelector(".language-switcher");
const languageSummaryCode = document.querySelector(".language-switcher summary .lang-code");
const languageSummaryFlag = document.querySelector(".language-switcher summary .lang-flag");
const languageOptions = document.querySelectorAll(".language-option");
const pageDescriptionMeta = document.querySelector('meta[name="description"]');
const LANGUAGE_STORAGE_KEY = "terradekl-language";
const currentPage = document.body.dataset.page || "home";

const translations = {
  EN: {
    htmlLang: "en",
    pages: {
      home: {
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
        aboutEyebrow: "About TerraDekl",
        aboutHeading: "A simple product site with room to grow.",
        aboutText:
          "Start with this layout as a static catalog, then connect it to a store platform, headless CMS, or custom backend when you are ready to add inventory, carts, and checkout.",
        contactEyebrow: "Contact",
        contactHeading: "Ready to turn this into a full storefront?",
        legalHelpEyebrow: "Need Help?",
        legalIntro:
          "Questions about products or your order? Contact us and we will help you choose the right custom terrarium lid setup.",
        legalHeading: "Legal",
        storePoliciesHeading: "Store Policies",
        paymentHeading: "Payment & Shipping",
        legalLinks: [
          "Privacy Policy",
          "Terms and Conditions of Sale",
          "Returns and Refund Policy",
          "Shipping and Delivery Policy",
        ],
      },
      order: {
        title: "TerraDekl | Custom Lid Order",
        description:
          "Submit a custom terrarium lid request to TerraDekl with all required order details.",
        backToSite: "Back to Site",
        eyebrow: "Custom Orders",
        intro:
          "Complete the form with the details below. The more exact your measurements are, the faster we can quote and produce your lid.",
        requiredHeading: "Required Information",
        requiredList: [
          "Full name and email for follow-up",
          "Terrarium top opening dimensions in cm",
          "Quantity needed",
          "Optional reference photos in image format only",
        ],
        orderNote:
          "Send drawings or photos after submission to orders@terradekl.com with your full name in the subject line.",
        pricingStrong:
          "Pricing is confirmed after we review your submitted dimensions and reference images.",
        pricingText:
          "Once we have checked the details, we will follow up with the final quote.",
        labels: {
          fullName: "Full Name",
          email: "Email",
          dimensions: "Dimensions",
          referenceImages: "Reference Images",
          quantity: "Quantity",
          submit: "Send Order Request",
        },
        dimensionsPlaceholder:
          "Example: 45 cm x 30 cm. Add any extra dimension notes here.",
        fieldHint:
          "Images only. SVG, documents, and other file types are not allowed.",
      },
      terms: {
        title: "TerraDekl | Terms and Conditions of Sale",
        description:
          "Read TerraDekl's terms and conditions of sale for custom terrarium lid orders.",
        backToSite: "Back to Site",
        eyebrow: "Legal",
        heading: "Terms and Conditions of Sale",
        intro:
          "These terms apply to custom terrarium lid orders placed with TerraDekl.",
        sections: [
          {
            title: "1. Orders",
            text:
              "Every order is custom-made based on the dimensions and reference materials submitted by the customer. Customers are responsible for making sure all measurements and details are accurate before production begins.",
          },
          {
            title: "2. Pricing",
            text:
              "Pricing is determined only after we review the submitted dimensions, specifications, and any reference images. A final quote will be provided after review.",
          },
          {
            title: "3. Production",
            text:
              "Production starts only after the quote has been accepted. Lead times may vary depending on complexity, materials, and current order volume.",
          },
          {
            title: "4. Changes and Cancellations",
            text:
              "Because each item is made to order, changes or cancellations may not be possible once production has started.",
          },
          {
            title: "5. Returns and Issues",
            text:
              "Custom products are generally non-returnable unless they arrive damaged or do not match the agreed order specifications.",
          },
          {
            title: "6. Contact",
            text:
              "For any questions about these terms or an existing order, contact hello@terradekl.com.",
          },
        ],
        summaryEyebrow: "Important",
        summaryIntro:
          "By placing an order, you confirm that the submitted measurements and files are accurate to the best of your knowledge.",
        summaryStrong: "Final pricing is confirmed only after review.",
        summaryText:
          "If anything in the request is unclear, TerraDekl may contact you for clarification before issuing a quote or starting production.",
      },
      privacy: {
        title: "TerraDekl | Privacy Policy",
        description:
          "Read TerraDekl's privacy policy for website visitors and custom terrarium lid order requests.",
        backToSite: "Back to Site",
        eyebrow: "Legal",
        heading: "Privacy Policy",
        intro:
          "This privacy policy explains how TerraDekl handles information submitted through the website and custom order requests.",
        sections: [
          {
            title: "1. Information We Collect",
            text:
              "We may collect the contact details and order information you submit, including your name, email address, dimensions, quantity, and any reference images you choose to provide.",
          },
          {
            title: "2. How We Use Your Information",
            text:
              "We use the submitted information to review your request, prepare a quote, communicate with you about your order, and provide customer support.",
          },
          {
            title: "3. File Submissions",
            text:
              "Any reference images you send are used only for evaluating your custom order request and related production requirements.",
          },
          {
            title: "4. Data Sharing",
            text:
              "TerraDekl does not sell your personal information. Information may only be shared when necessary to fulfill your request, comply with legal obligations, or operate essential business services.",
          },
          {
            title: "5. Data Retention",
            text:
              "We keep submitted information only for as long as reasonably needed to manage inquiries, prepare quotes, complete orders, and meet legal or accounting obligations.",
          },
          {
            title: "6. Contact",
            text:
              "For questions about this privacy policy or your personal data, contact hello@terradekl.com.",
          },
        ],
        summaryEyebrow: "Important",
        summaryIntro:
          "By submitting an order request, you agree that TerraDekl may use the provided information to review and respond to your request.",
        summaryStrong:
          "Your information is used only for order-related purposes.",
        summaryText:
          "If you want information updated or removed, contact TerraDekl directly using the email address above.",
      },
    },
  },
  SL: {
    htmlLang: "sl",
    pages: {
      home: {
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
        aboutEyebrow: "O TerraDekl",
        aboutHeading: "Preprosta produktna stran z veliko prostora za rast.",
        aboutText:
          "Začnite s to postavitvijo kot statičnim katalogom, nato pa jo povežite s trgovinsko platformo, headless CMS sistemom ali prilagojenim backendom, ko boste pripravljeni dodati zalogo, košarico in plačilo.",
        contactEyebrow: "Kontakt",
        contactHeading: "Ste pripravljeni to nadgraditi v celovito trgovino?",
        legalHelpEyebrow: "Potrebujete pomoč?",
        legalIntro:
          "Vprašanja o izdelkih ali vašem naročilu? Kontaktirajte nas in pomagali vam bomo izbrati pravo rešitev za pokrov terarija po meri.",
        legalHeading: "Pravno",
        storePoliciesHeading: "Politike Trgovine",
        paymentHeading: "Plačilo in Dostava",
        legalLinks: [
          "Politika zasebnosti",
          "Pogoji prodaje",
          "Politika vračil in povračil",
          "Politika pošiljanja in dostave",
        ],
      },
      order: {
        title: "TerraDekl | Naročilo Pokrova po Meri",
        description:
          "Oddajte povpraševanje za pokrov terarija po meri pri TerraDekl z vsemi potrebnimi podatki.",
        backToSite: "Nazaj na Stran",
        eyebrow: "Naročila po meri",
        intro:
          "Izpolnite obrazec s spodnjimi podatki. Bolj natančne kot bodo meritve, hitreje vam bomo lahko pripravili ponudbo in izdelali pokrov.",
        requiredHeading: "Potrebne Informacije",
        requiredList: [
          "Polno ime in e-pošta za nadaljnji stik",
          "Mere zgornje odprtine terarija v cm",
          "Potrebna količina",
          "Neobvezne referenčne fotografije samo v slikovnem formatu",
        ],
        orderNote:
          "Risbe ali fotografije po oddaji pošljite na orders@terradekl.com z vašim polnim imenom v zadevi sporočila.",
        pricingStrong:
          "Cena je potrjena šele po pregledu poslanih mer in referenčnih slik.",
        pricingText:
          "Ko preverimo podrobnosti, vam bomo poslali končno ponudbo.",
        labels: {
          fullName: "Polno Ime",
          email: "E-pošta",
          dimensions: "Mere",
          referenceImages: "Referenčne Slike",
          quantity: "Količina",
          submit: "Pošlji Povpraševanje",
        },
        dimensionsPlaceholder:
          "Primer: 45 cm x 30 cm. Tukaj dodajte dodatne opombe glede mer.",
        fieldHint:
          "Dovoljene so samo slike. SVG, dokumenti in druge vrste datotek niso dovoljene.",
      },
      terms: {
        title: "TerraDekl | Pogoji Prodaje",
        description:
          "Preberite TerraDekl pogoje prodaje za naročila pokrovov terarijev po meri.",
        backToSite: "Nazaj na Stran",
        eyebrow: "Pravno",
        heading: "Pogoji Prodaje",
        intro:
          "Ti pogoji veljajo za naročila pokrovov terarijev po meri pri TerraDekl.",
        sections: [
          {
            title: "1. Naročila",
            text:
              "Vsako naročilo je izdelano po meri na podlagi mer in referenčnih materialov, ki jih pošlje stranka. Stranka je odgovorna za pravilnost vseh mer in podatkov pred začetkom proizvodnje.",
          },
          {
            title: "2. Cena",
            text:
              "Cena se določi šele po pregledu poslanih mer, specifikacij in morebitnih referenčnih slik. Končna ponudba bo poslana po pregledu.",
          },
          {
            title: "3. Izdelava",
            text:
              "Izdelava se začne šele po potrditvi ponudbe. Čas izdelave se lahko razlikuje glede na zahtevnost, materiale in trenutno količino naročil.",
          },
          {
            title: "4. Spremembe in Odpovedi",
            text:
              "Ker je vsak izdelek narejen po meri, spremembe ali odpovedi po začetku izdelave morda ne bodo več mogoče.",
          },
          {
            title: "5. Vračila in Težave",
            text:
              "Izdelkov po meri praviloma ni mogoče vrniti, razen če prispejo poškodovani ali ne ustrezajo dogovorjenim specifikacijam naročila.",
          },
          {
            title: "6. Kontakt",
            text:
              "Za vsa vprašanja glede teh pogojev ali obstoječega naročila nas kontaktirajte na hello@terradekl.com.",
          },
        ],
        summaryEyebrow: "Pomembno",
        summaryIntro:
          "Z oddajo naročila potrjujete, da so poslane mere in datoteke po vašem najboljšem vedenju točne.",
        summaryStrong: "Končna cena je potrjena šele po pregledu.",
        summaryText:
          "Če je karkoli v zahtevku nejasno, vas lahko TerraDekl kontaktira za pojasnilo pred izdajo ponudbe ali začetkom izdelave.",
      },
      privacy: {
        title: "TerraDekl | Politika Zasebnosti",
        description:
          "Preberite politiko zasebnosti TerraDekl za obiskovalce spletne strani in povpraševanja za pokrove terarijev po meri.",
        backToSite: "Nazaj na Stran",
        eyebrow: "Pravno",
        heading: "Politika Zasebnosti",
        intro:
          "Ta politika zasebnosti pojasnjuje, kako TerraDekl ravna z informacijami, poslanimi prek spletne strani in zahtevkov za naročila po meri.",
        sections: [
          {
            title: "1. Katere Podatke Zbiramo",
            text:
              "Zbiramo lahko kontaktne podatke in podatke o naročilu, ki nam jih posredujete, vključno z vašim imenom, e-poštnim naslovom, merami, količino in morebitnimi referenčnimi slikami, ki jih želite priložiti.",
          },
          {
            title: "2. Kako Uporabljamo Vaše Podatke",
            text:
              "Poslane podatke uporabljamo za pregled vašega zahtevka, pripravo ponudbe, komunikacijo glede naročila in zagotavljanje podpore strankam.",
          },
          {
            title: "3. Poslane Datoteke",
            text:
              "Vse referenčne slike, ki nam jih pošljete, uporabljamo samo za oceno vašega zahtevka za naročilo po meri in povezanih proizvodnih zahtev.",
          },
          {
            title: "4. Deljenje Podatkov",
            text:
              "TerraDekl vaših osebnih podatkov ne prodaja. Podatki se lahko delijo samo, kadar je to potrebno za izpolnitev vašega zahtevka, skladnost z zakonskimi obveznostmi ali izvajanje bistvenih poslovnih storitev.",
          },
          {
            title: "5. Hramba Podatkov",
            text:
              "Poslane podatke hranimo le toliko časa, kolikor je razumno potrebno za upravljanje povpraševanj, pripravo ponudb, izvedbo naročil ter izpolnjevanje zakonskih ali računovodskih obveznosti.",
          },
          {
            title: "6. Kontakt",
            text:
              "Za vprašanja o tej politiki zasebnosti ali vaših osebnih podatkih pišite na hello@terradekl.com.",
          },
        ],
        summaryEyebrow: "Pomembno",
        summaryIntro:
          "Z oddajo zahtevka za naročilo se strinjate, da lahko TerraDekl uporabi posredovane podatke za pregled in odgovor na vaš zahtevek.",
        summaryStrong:
          "Vaši podatki se uporabljajo samo za namene, povezane z naročilom.",
        summaryText:
          "Če želite posodobitev ali izbris podatkov, kontaktirajte TerraDekl neposredno prek zgornjega e-poštnega naslova.",
      },
    },
  },
  DE: {
    htmlLang: "de",
    pages: {
      home: {
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
        aboutEyebrow: "Über TerraDekl",
        aboutHeading: "Eine einfache Produktseite mit Raum zum Wachsen.",
        aboutText:
          "Starten Sie mit diesem Layout als statischem Katalog und verbinden Sie es später mit einer Shop-Plattform, einem Headless CMS oder einem eigenen Backend, wenn Sie Bestand, Warenkorb und Checkout hinzufügen möchten.",
        contactEyebrow: "Kontakt",
        contactHeading: "Bereit, daraus einen vollständigen Store zu machen?",
        legalHelpEyebrow: "Brauchen Sie Hilfe?",
        legalIntro:
          "Fragen zu Produkten oder Ihrer Bestellung? Kontaktieren Sie uns und wir helfen Ihnen, die richtige Lösung für Ihren individuellen Terrarium-Deckel zu finden.",
        legalHeading: "Rechtliches",
        storePoliciesHeading: "Shop-Richtlinien",
        paymentHeading: "Zahlung und Versand",
        legalLinks: [
          "Datenschutzrichtlinie",
          "Verkaufsbedingungen",
          "Rückgabe- und Erstattungsrichtlinie",
          "Versand- und Lieferbedingungen",
        ],
      },
      order: {
        title: "TerraDekl | Bestellung Individueller Deckel",
        description:
          "Senden Sie TerraDekl eine Anfrage für einen individuellen Terrarium-Deckel mit allen erforderlichen Details.",
        backToSite: "Zurück zur Seite",
        eyebrow: "Sonderanfertigungen",
        intro:
          "Füllen Sie das Formular mit den untenstehenden Angaben aus. Je genauer Ihre Maße sind, desto schneller können wir ein Angebot erstellen und Ihren Deckel produzieren.",
        requiredHeading: "Benötigte Informationen",
        requiredList: [
          "Vollständiger Name und E-Mail für Rückfragen",
          "Maße der oberen Terrarium-Öffnung in cm",
          "Benötigte Menge",
          "Optionale Referenzfotos nur im Bildformat",
        ],
        orderNote:
          "Senden Sie Zeichnungen oder Fotos nach dem Absenden an orders@terradekl.com und geben Sie Ihren vollständigen Namen im Betreff an.",
        pricingStrong:
          "Der Preis wird erst nach Prüfung Ihrer eingereichten Maße und Referenzbilder bestätigt.",
        pricingText:
          "Sobald wir die Details geprüft haben, senden wir Ihnen das endgültige Angebot.",
        labels: {
          fullName: "Vollständiger Name",
          email: "E-Mail",
          dimensions: "Maße",
          referenceImages: "Referenzbilder",
          quantity: "Menge",
          submit: "Bestellanfrage Senden",
        },
        dimensionsPlaceholder:
          "Beispiel: 45 cm x 30 cm. Fügen Sie hier zusätzliche Maßangaben hinzu.",
        fieldHint:
          "Nur Bilder sind erlaubt. SVG, Dokumente und andere Dateitypen sind nicht zulässig.",
      },
      terms: {
        title: "TerraDekl | Verkaufsbedingungen",
        description:
          "Lesen Sie die TerraDekl Verkaufsbedingungen für individuelle Terrarium-Deckelbestellungen.",
        backToSite: "Zurück zur Seite",
        eyebrow: "Rechtliches",
        heading: "Verkaufsbedingungen",
        intro:
          "Diese Bedingungen gelten für individuelle Terrarium-Deckelbestellungen bei TerraDekl.",
        sections: [
          {
            title: "1. Bestellungen",
            text:
              "Jede Bestellung wird auf Grundlage der vom Kunden eingereichten Maße und Referenzmaterialien individuell angefertigt. Kunden sind dafür verantwortlich, dass alle Maße und Angaben vor Produktionsbeginn korrekt sind.",
          },
          {
            title: "2. Preise",
            text:
              "Die Preisfestlegung erfolgt erst nach Prüfung der eingereichten Maße, Spezifikationen und eventueller Referenzbilder. Ein endgültiges Angebot wird nach der Prüfung übermittelt.",
          },
          {
            title: "3. Produktion",
            text:
              "Die Produktion beginnt erst nach Annahme des Angebots. Die Lieferzeiten können je nach Komplexität, Materialien und aktueller Auftragslage variieren.",
          },
          {
            title: "4. Änderungen und Stornierungen",
            text:
              "Da jedes Produkt individuell angefertigt wird, sind Änderungen oder Stornierungen nach Produktionsbeginn möglicherweise nicht mehr möglich.",
          },
          {
            title: "5. Rückgaben und Probleme",
            text:
              "Individuell angefertigte Produkte sind grundsätzlich von der Rückgabe ausgeschlossen, es sei denn, sie kommen beschädigt an oder entsprechen nicht den vereinbarten Bestellspezifikationen.",
          },
          {
            title: "6. Kontakt",
            text:
              "Bei Fragen zu diesen Bedingungen oder zu einer bestehenden Bestellung kontaktieren Sie uns unter hello@terradekl.com.",
          },
        ],
        summaryEyebrow: "Wichtig",
        summaryIntro:
          "Mit Ihrer Bestellung bestätigen Sie, dass die eingereichten Maße und Dateien nach bestem Wissen korrekt sind.",
        summaryStrong: "Der endgültige Preis wird erst nach Prüfung bestätigt.",
        summaryText:
          "Wenn etwas in der Anfrage unklar ist, kann TerraDekl Sie vor der Angebotserstellung oder vor Produktionsbeginn zur Klärung kontaktieren.",
      },
      privacy: {
        title: "TerraDekl | Datenschutzrichtlinie",
        description:
          "Lesen Sie die Datenschutzrichtlinie von TerraDekl für Website-Besucher und Anfragen zu individuellen Terrarium-Deckeln.",
        backToSite: "Zurück zur Seite",
        eyebrow: "Rechtliches",
        heading: "Datenschutzrichtlinie",
        intro:
          "Diese Datenschutzrichtlinie erläutert, wie TerraDekl mit Informationen umgeht, die über die Website und individuelle Bestellanfragen übermittelt werden.",
        sections: [
          {
            title: "1. Welche Daten Wir Erfassen",
            text:
              "Wir können die Kontakt- und Bestelldaten erfassen, die Sie uns übermitteln, einschließlich Ihres Namens, Ihrer E-Mail-Adresse, Maße, Menge und aller Referenzbilder, die Sie bereitstellen möchten.",
          },
          {
            title: "2. Wie Wir Ihre Daten Verwenden",
            text:
              "Wir verwenden die übermittelten Informationen, um Ihre Anfrage zu prüfen, ein Angebot zu erstellen, mit Ihnen über Ihre Bestellung zu kommunizieren und Kundensupport bereitzustellen.",
          },
          {
            title: "3. Dateiübermittlungen",
            text:
              "Alle Referenzbilder, die Sie senden, werden ausschließlich zur Bewertung Ihrer individuellen Bestellanfrage und der damit verbundenen Produktionsanforderungen verwendet.",
          },
          {
            title: "4. Datenweitergabe",
            text:
              "TerraDekl verkauft Ihre personenbezogenen Daten nicht. Informationen werden nur dann weitergegeben, wenn dies zur Erfüllung Ihrer Anfrage, zur Einhaltung gesetzlicher Verpflichtungen oder zum Betrieb wesentlicher Geschäftsdienste erforderlich ist.",
          },
          {
            title: "5. Datenspeicherung",
            text:
              "Wir speichern übermittelte Informationen nur so lange, wie es vernünftigerweise erforderlich ist, um Anfragen zu bearbeiten, Angebote zu erstellen, Bestellungen abzuschließen und gesetzliche oder buchhalterische Pflichten zu erfüllen.",
          },
          {
            title: "6. Kontakt",
            text:
              "Bei Fragen zu dieser Datenschutzrichtlinie oder zu Ihren personenbezogenen Daten kontaktieren Sie hello@terradekl.com.",
          },
        ],
        summaryEyebrow: "Wichtig",
        summaryIntro:
          "Mit dem Absenden einer Bestellanfrage stimmen Sie zu, dass TerraDekl die bereitgestellten Informationen verwenden darf, um Ihre Anfrage zu prüfen und darauf zu antworten.",
        summaryStrong:
          "Ihre Informationen werden nur für bestellbezogene Zwecke verwendet.",
        summaryText:
          "Wenn Sie eine Aktualisierung oder Löschung Ihrer Daten wünschen, kontaktieren Sie TerraDekl direkt über die oben genannte E-Mail-Adresse.",
      },
    },
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
  const languageContent = translations[languageCode];
  const content = languageContent?.pages?.[currentPage];

  if (!languageContent || !content) {
    return;
  }

  document.documentElement.lang = languageContent.htmlLang;
  document.title = content.title;

  if (pageDescriptionMeta) {
    pageDescriptionMeta.setAttribute("content", content.description);
  }

  navLinks.forEach((link, index) => {
    if (content.nav?.[index]) {
      link.textContent = content.nav[index];
    }
  });

  if (currentPage === "home") {
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
    setTextList(
      ".product-card .product-body p:not(.product-tag)",
      content.productDescriptions
    );

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
    setText("#about .eyebrow", content.aboutEyebrow);
    setText("#about h2", content.aboutHeading);
    setText("#about .story > p", content.aboutText);
    setText("#contact .eyebrow", content.contactEyebrow);
    setText("#contact h2", content.contactHeading);
    setText("#legal .legal-column-contact .eyebrow", content.legalHelpEyebrow);
    setText("#legal .legal-intro", content.legalIntro);
    setText("#legal .legal-column:nth-child(2) .legal-heading", content.legalHeading);
    setText(
      "#legal .legal-column:nth-child(3) .legal-heading",
      content.storePoliciesHeading
    );
    setText(
      "#legal .legal-column-payments .legal-heading",
      content.paymentHeading
    );
    const legalLinks = document.querySelectorAll("[data-i18n-link]");
    legalLinks.forEach((link, index) => {
      if (content.legalLinks?.[index]) {
        link.textContent = content.legalLinks[index];
      }
    });
  }

  if (currentPage === "order") {
    setText(".order-header .button-secondary", content.backToSite);
    setText(".order-guide .eyebrow", content.eyebrow);
    setText(".order-guide .eyebrow + p", content.intro);
    setText(".order-guide h2", content.requiredHeading);
    setTextList(".order-guide ul li", content.requiredList);

    const orderNotes = document.querySelectorAll(".order-guide .order-note");
    if (orderNotes[0]) {
      orderNotes[0].innerHTML =
        'Send drawings or photos after submission to <a href="mailto:orders@terradekl.com">orders@terradekl.com</a> with your full name in the subject line.';
      orderNotes[0].textContent = content.orderNote;
      orderNotes[0].innerHTML = content.orderNote.replace(
        "orders@terradekl.com",
        '<a href="mailto:orders@terradekl.com">orders@terradekl.com</a>'
      );
    }

    if (orderNotes[1]) {
      orderNotes[1].innerHTML = `<strong>${content.pricingStrong}</strong> ${content.pricingText}`;
    }

    const orderLabels = document.querySelectorAll(".order-form label");
    if (orderLabels[0]) {
      orderLabels[0].childNodes[0].textContent = content.labels.fullName + "\n              ";
    }
    if (orderLabels[1]) {
      orderLabels[1].childNodes[0].textContent = content.labels.email + "\n              ";
    }
    if (orderLabels[2]) {
      orderLabels[2].childNodes[0].textContent = content.labels.dimensions + "\n              ";
    }
    if (orderLabels[3]) {
      orderLabels[3].childNodes[0].textContent = content.labels.referenceImages + "\n              ";
    }
    if (orderLabels[4]) {
      orderLabels[4].childNodes[0].textContent = content.labels.quantity + "\n              ";
    }

    const dimensionsField = document.querySelector('textarea[name="dimensions"]');
    if (dimensionsField instanceof HTMLTextAreaElement) {
      dimensionsField.placeholder = content.dimensionsPlaceholder;
    }

    setText(".field-hint", content.fieldHint);
    setText('.order-form button[type="submit"]', content.labels.submit);
  }

  if (currentPage === "terms") {
    setText(".order-header .button-secondary", content.backToSite);
    setText(".order-guide .eyebrow", content.eyebrow);
    setText(".order-guide h1", content.heading);
    setText(".order-guide h1 + p", content.intro);

    const termHeadings = document.querySelectorAll(".order-guide h2");
    const termParagraphs = document.querySelectorAll(".order-guide h2 + p");
    content.sections.forEach((section, index) => {
      if (termHeadings[index]) {
        termHeadings[index].textContent = section.title;
      }
      if (termParagraphs[index]) {
        if (index === content.sections.length - 1) {
          termParagraphs[index].innerHTML = section.text.replace(
            "hello@terradekl.com",
            '<a href="mailto:hello@terradekl.com">hello@terradekl.com</a>'
          );
        } else {
          termParagraphs[index].textContent = section.text;
        }
      }
    });

    const summaryEyebrow = document.querySelector(".order-form-panel .eyebrow");
    const summaryParagraphs = document.querySelectorAll(".order-form-panel > p:not(.eyebrow)");
    if (summaryEyebrow) {
      summaryEyebrow.textContent = content.summaryEyebrow;
    }
    if (summaryParagraphs[0]) {
      summaryParagraphs[0].textContent = content.summaryIntro;
    }
    if (summaryParagraphs[1]) {
      summaryParagraphs[1].innerHTML = `<strong>${content.summaryStrong}</strong>`;
    }
    if (summaryParagraphs[2]) {
      summaryParagraphs[2].textContent = content.summaryText;
    }
  }

  if (currentPage === "privacy") {
    setText(".order-header .button-secondary", content.backToSite);
    setText(".order-guide .eyebrow", content.eyebrow);
    setText(".order-guide h1", content.heading);
    setText(".order-guide h1 + p", content.intro);

    const privacyHeadings = document.querySelectorAll(".order-guide h2");
    const privacyParagraphs = document.querySelectorAll(".order-guide h2 + p");
    content.sections.forEach((section, index) => {
      if (privacyHeadings[index]) {
        privacyHeadings[index].textContent = section.title;
      }
      if (privacyParagraphs[index]) {
        if (index === content.sections.length - 1) {
          privacyParagraphs[index].innerHTML = section.text.replace(
            "hello@terradekl.com",
            '<a href="mailto:hello@terradekl.com">hello@terradekl.com</a>'
          );
        } else {
          privacyParagraphs[index].textContent = section.text;
        }
      }
    });

    const summaryEyebrow = document.querySelector(".order-form-panel .eyebrow");
    const summaryParagraphs = document.querySelectorAll(".order-form-panel > p:not(.eyebrow)");
    if (summaryEyebrow) {
      summaryEyebrow.textContent = content.summaryEyebrow;
    }
    if (summaryParagraphs[0]) {
      summaryParagraphs[0].textContent = content.summaryIntro;
    }
    if (summaryParagraphs[1]) {
      summaryParagraphs[1].innerHTML = `<strong>${content.summaryStrong}</strong>`;
    }
    if (summaryParagraphs[2]) {
      summaryParagraphs[2].textContent = content.summaryText;
    }
  }
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

const quantitySteppers = document.querySelectorAll(".quantity-stepper");

for (const stepper of quantitySteppers) {
  const input = stepper.querySelector(".quantity-input");
  const decrementButton = stepper.querySelector('[data-step="decrement"]');
  const incrementButton = stepper.querySelector('[data-step="increment"]');

  if (!(input instanceof HTMLInputElement)) {
    continue;
  }

  const syncMinimumValue = () => {
    const minimum = Number(input.min || 0);

    if (!Number.isNaN(minimum) && Number(input.value) < minimum) {
      input.value = String(minimum);
    }
  };

  decrementButton?.addEventListener("click", () => {
    input.stepDown();
    syncMinimumValue();
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });

  incrementButton?.addEventListener("click", () => {
    input.stepUp();
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });

  input.addEventListener("blur", syncMinimumValue);
}

const orderForms = document.querySelectorAll(".order-form");

for (const form of orderForms) {
  if (!(form instanceof HTMLFormElement)) {
    continue;
  }

  const submitButton = form.querySelector('button[type="submit"]');

  if (!(submitButton instanceof HTMLButtonElement)) {
    continue;
  }

  const fields = Array.from(form.elements).filter((element) => {
    if (
      !(element instanceof HTMLInputElement) &&
      !(element instanceof HTMLTextAreaElement) &&
      !(element instanceof HTMLSelectElement)
    ) {
      return false;
    }

    return !element.disabled && element.type !== "file";
  });

  const isFieldComplete = (field) => {
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      if (field.type === "number") {
        return field.value !== "" && field.checkValidity();
      }

      return field.value.trim() !== "" && field.checkValidity();
    }

    return field.value.trim() !== "" && field.checkValidity();
  };

  const syncSubmitState = () => {
    const isValid = fields.every(isFieldComplete);
    submitButton.disabled = !isValid;
  };

  syncSubmitState();

  for (const field of fields) {
    field.addEventListener("input", syncSubmitState);
    field.addEventListener("change", syncSubmitState);
    field.addEventListener("blur", syncSubmitState);
  }

  form.addEventListener("submit", (event) => {
    syncSubmitState();

    if (submitButton.disabled || !form.reportValidity()) {
      event.preventDefault();
    }
  });
}
