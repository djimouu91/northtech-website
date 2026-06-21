/* ============================================
   NORTHTECH ENGINEERING — MAIN.JS v1.0
   ============================================ */

/* === TRANSLATIONS === */
const T = {
  fr: {
    nav_services: 'Services',
    nav_about:    'À propos',
    nav_markets:  'Marchés',
    nav_contact:  'Contact',

    hero_tagline: 'Disponibilités ouvertes — Projets 2026',
    hero_badge:  'Ingénierie électrique certifiée',
    hero_title:  "L'ingénierie électrique<br><span class=\"shiny\">de précision.</span>",
    hero_sub:    "Études de réseaux électriques conformes aux normes CSA Z462, NFPA 70E et IEEE 1584.<br>Canada · Québec · Ontario",
    hero_cta1:   'Parlons de votre projet',
    hero_cta2:   'Nos services',

    stat_countries: 'Pays desservis',
    stat_langs:     'Langues',
    stat_conform:   'Conformité normative',
    stat_speed:     'Livraison accélérée',


    prob_tag:   'Vous vous reconnaissez ?',
    prob_title: 'Les problèmes que nous résolvons',
    prob_desc:  'Si l'un de ces défis vous est familier, NorthTech est le bon partenaire pour y répondre.',
    prob1: 'Réduire les risques d'arc flash dans vos installations industrielles',
    prob2: 'Assurer la conformité CSA Z462, NFPA 70E et IEEE 1584',
    prob3: 'Améliorer la coordination et la sélectivité des protections',
    prob4: 'Mettre à jour vos études électriques après des modifications du réseau',
    prob5: 'Calculer les courants de court-circuit pour le bon dimensionnement de l'appareillage',
    prob6: 'Identifier les harmoniques qui dégradent la qualité de votre alimentation',
    services_tag:   'Expertise',
    services_title: 'Nos services spécialisés',
    services_desc:  "Études complètes réalisées avec les logiciels de référence (ETAP, SKM Power Tools, PSCAD, EasyPower), conformes aux normes nord-américaines et internationales.",

    s1_title: 'Étude de court-circuit',
    s1_desc:  "Calcul des courants de défaut symétriques et asymétriques (méthode des impédances de séquence), vérification du pouvoir de coupure (Icu/Ics) des disjoncteurs, fusibles et switchgear — conforme IEEE Std 242 (Buff Book) et IEC 60909.",
    s2_title: 'Coordination des protections',
    s2_desc:  "Étude de sélectivité et de discrimination (ampèremétrique, chronométrique, logique) avec tracé des courbes TCC. Paramétrage des relais de protection conforme IEEE Std 242 et ANSI/IEEE Std 1015 (Blue Book).",
    s3_title: 'Étude arc flash',
    s3_desc:  "Calcul de l'énergie incidente (cal/cm²) par la méthode IEEE 1584-2018, détermination des distances de protection (arc flash boundary, restricted approach), catégories EPI et étiquettes réglementaires conformes NFPA 70E et CSA Z462.",
    s4_title: 'Schémas unifilaires',
    s4_desc:  "Relevé terrain et génération de SLD conformes ANSI/IEEE Std 315. Livrables en SVG, PDF et AutoCAD DWG.",
    s5_title: 'Écoulement de puissance',
    s5_desc:  "Simulation de l'écoulement de puissance en régime permanent (Newton-Raphson / Gauss-Seidel), analyse des chutes de tension, optimisation du facteur de puissance et vérification des limites thermiques — conforme IEEE Std 399 (Brown Book).",
    s6_title: 'Analyse harmonique',
    s6_desc:  "Évaluation du THD courant et tension, calcul des facteurs de distorsion harmonique par ordre et recommandations de filtrage passif/actif — conforme IEEE 519-2022 et IEEE 1250.",

    s7_title: 'Collecte de données terrain',
    s7_desc:  "Inventaire des actifs électriques, relevé des plaques signalétiques et mesures sur site via outils numériques, pour alimenter vos études et schémas unifilaires.",
    s7_tag1:  'Audit terrain',
    s7_tag2:  "Inventaire d'actifs",
    s7_tag3:  'Relevé numérique',

    badge_required: 'Obligation légale',

    about_tag:    'Notre différence',
    about_title:  'Pourquoi choisir NorthTech ?',
    about1_title: 'Rigueur normative',
    about1_desc:  'Chaque étude respecte strictement les normes CSA, NFPA, IEEE et CEI en vigueur. Aucun compromis.',
    about2_title: 'Expertise terrain',
    about2_desc:  'Relevé terrain et études sous un même toit — aucune sous-traitance, données maîtrisées de bout en bout.',
    about3_title: 'Livraison rapide',
    about3_desc:  "Workflows IA-augmentés avec ETAP, PSCAD et EasyPower : livraison 2× plus rapide que la moyenne du secteur, sans compromis sur la qualité.",
    about4_title: 'Trilingue FR · EN · AR',
    about4_desc:  "Unique au Québec : service complet en français, anglais et arabe — pour les clients canadiens partout au pays.",

    gallery_tag:   'Sur le terrain',
    gallery_title: 'Notre expertise en infrastructure électrique',
    gallery_desc:  "De la sous-station à l'armoire de distribution, nous intervenons directement sur les équipements pour des relevés précis et des études fiables.",
    gallery2_caption: 'Inspection et relevé terrain',
    gallery3_caption: 'Programmation de relais de protection',
    gallery4_caption: 'Conception et mise à jour des schémas unifilaires',
    gallery5_caption: "Réseaux de transport d'électricité",
    gallery6_caption: 'Énergie commerciale et industrielle',

    markets_tag:   'Couverture nationale',
    markets_title: 'Notre territoire',
    markets_desc:  "NorthTech dessert le marché canadien d'un bout à l'autre du pays, avec une expertise locale et une connaissance approfondie des normes CSA.",
    m1_country: 'Canada',         m1_sub: 'Québec · Ontario · Autres provinces',
    m2_country: 'États-Unis',     m2_sub: 'USA — National',
    m3_country: 'Algérie',        m3_sub: 'Afrique du Nord',
    m1_clients: 'Industrie · Hydro-Québec · Mines · Construction · Municipalités',
    m2_clients: 'Industriel · Data Centers · Fortune 500',
    m3_clients: 'Sonatrach · Cimenteries · Mines',

    comply_label: 'Normes maîtrisées',

    contact_tag:    'Contactez-nous',
    contact_title:  "Des services d'ingénierie électrique sur lesquels vous pouvez compter",
    contact_desc:   "Peu importe votre projet — étude, relevé terrain ou schéma unifilaire — NorthTech est là pour répondre à vos questions et vous accompagner. Parlez à un ingénieur dès aujourd'hui.",
    contact_remote: 'Service à distance disponible',

    form_name:           'Nom complet *',
    form_company:        'Entreprise',
    form_email:          'Courriel *',
    form_country:        'Pays *',
    form_country_ph:     '-- Sélectionner --',
    form_country_other:  'Autre / Other',
    form_service:        'Service demandé *',
    form_service_ph:     '-- Sélectionner un service --',
    form_relay:          'Programmation de relais de protection',
    form_consult:        'Consultation technique',
    form_package:        'Forfait complet',
    pricing_tag:         'Tarification',
    pricing_title:       'Estimations de coûts — Marché canadien 2026',
    pricing_desc:        'Le forfait arc flash complet inclut : relevé terrain, modélisation, court-circuit (IEEE/IEC), coordination (TCC), énergie incidente IEEE 1584-2018, SLD mis à jour et étiquettes réglementaires NFPA 70E / CSA Z462. Fourchette indicative ±15%.',
    pricing_from:        'À partir de',
    pricing_cta:         'Obtenir un devis',
    pricing_quote:       'Devis personnalisé',
    pricing_popular:     'Le plus demandé',
    p1_tag:              'Petit commercial',
    p1_nodes:            '< 20 panneaux / nœuds',
    p1_range:            '- 8k$',
    p2_tag:              'Industriel moyen',
    p2_nodes:            '20 – 50 panneaux / nœuds',
    p2_range:            '- 16k$',
    p3_tag:              'Grand industriel',
    p3_nodes:            '50 – 100 panneaux / nœuds',
    p3_range:            '- 25k$',
    p4_tag:              'Complexe / Multi-sites',
    p4_nodes:            '100+ panneaux / nœuds',
    p4_range:            "jusqu'à 75k$+",
    p_i1:                'Relevé terrain & modélisation ETAP / SKM',
    p_i2:                'Calcul court-circuit (IEEE Std 242 / IEC 60909)',
    p_i3:                'Coordination des protections — courbes TCC',
    p_i4:                'Énergie incidente IEEE 1584-2018',
    p_i5:                'SLD mis à jour (AutoCAD DWG / PDF)',
    p_i6:                'Étiquettes arc flash (ANSI Z535.4)',
    p_i7:                'Rapport signé par ingénieur + 1 révision',
    pricing_note1:       'Taux de base ~$130 / nœud (marché Ontario 2026)',
    pricing_note2:       'Mise à jour d\'étude existante : économie de ~30%',
    pricing_note3:       'SLD existant et à jour : réduction de 25–30% du coût',
    pricing_note4:       'Études individuelles — court-circuit, coordination ou SLD sur devis',
    form_message:        'Message / Description du projet',
    cta_consult_title:   'Consultation gratuite',
    cta_consult_desc:    'Échangez avec un ingénieur NorthTech sur votre projet — sans frais ni engagement. Réponse garantie sous 24h ouvrables.',
    cta_consult_btn:     'Demander une consultation',
    cta_quote_title:     'Demande de devis',
    cta_quote_desc:      'Obtenez une estimation personnalisée basée sur vos équipements, la taille de votre réseau et les normes applicables à votre secteur.',
    cta_quote_btn:       'Obtenir un devis',
    form_submit:         'Envoyer la demande',
    form_note:           'Réponse garantie sous 24h ouvrables',
    form_success:        'Demande envoyée ! Nous vous répondons sous 24h.',

    footer_tagline:      "L'ingénierie électrique de précision.",
    footer_col_services: 'Services',
    footer_col_markets:  'Marchés',
    footer_copy:         '© 2025 NorthTech Engineering Inc. Tous droits réservés.',
    footer_legal:        'NorthTech Ingénierie Inc. (Québec) · northtech.ca',
  },

  en: {
    nav_services: 'Services',
    nav_about:    'About',
    nav_markets:  'Markets',
    nav_contact:  'Contact',

    hero_tagline: 'Now booking — 2026 projects',
    hero_badge: 'Certified electrical engineering',
    hero_title: 'Precision electrical<br><span class="shiny">engineering studies.</span>',
    hero_sub:   'Power system studies compliant with CSA Z462, NFPA 70E and IEEE 1584 standards.<br>Canada · Quebec · Ontario',
    hero_cta1:  "Let's Talk About Your Project",
    hero_cta2:  'Our Services',

    stat_countries: 'Countries Served',
    stat_langs:     'Languages',
    stat_conform:   'Code Compliance',
    stat_speed:     'Faster Delivery',


    prob_tag:   'Sound familiar?',
    prob_title: 'Problems we solve',
    prob_desc:  'If any of these challenges apply to you, NorthTech is the right partner.',
    prob1: 'Reduce arc flash hazards in industrial facilities',
    prob2: 'Ensure CSA Z462, NFPA 70E and IEEE 1584 compliance',
    prob3: 'Improve protection coordination and selectivity',
    prob4: 'Update outdated electrical studies after system changes',
    prob5: 'Calculate short-circuit currents for proper equipment sizing',
    prob6: 'Identify harmonics degrading your power quality',
    services_tag:   'Expertise',
    services_title: 'Our Specialized Services',
    services_desc:  'Comprehensive studies performed with industry-leading software (ETAP, SKM Power Tools, PSCAD, EasyPower), fully compliant with North American and international standards.',

    s1_title: 'Short Circuit Study',
    s1_desc:  'Calculate maximum fault currents and verify equipment ratings (breakers, fuses, switchgear) per IEEE 1584 and IEC 60909.',
    s2_title: 'Protective Device Coordination',
    s2_desc:  'Analyze protection selectivity to ensure minimum power interruption during electrical faults.',
    s3_title: 'Arc Flash Study',
    s3_desc:  'Calculate incident energy (cal/cm²), arc flash boundary, required PPE categories, and generate NFPA 70E / CSA Z462 compliant warning labels.',
    s4_title: 'Single-Line Diagrams',
    s4_desc:  'Field survey and SLD generation compliant with ANSI/IEEE Std 315. Deliverables in SVG, PDF, and AutoCAD DWG.',
    s5_title: 'Load Flow Analysis',
    s5_desc:  'Analyze active and reactive power distribution across the network to optimize voltage profiles and power factor.',
    s6_title: 'Harmonic Analysis',
    s6_desc:  'Evaluate harmonic distortion (THD) and provide filter recommendations compliant with IEEE 519.',

    s7_title: 'Field Data Collection',
    s7_desc:  'On-site inventory of electrical assets, nameplate data collection, and field measurements via digital tools — feeding directly into your studies and single-line diagrams.',
    s7_tag1:  'Field Audit',
    s7_tag2:  'Asset Inventory',
    s7_tag3:  'Digital Survey',

    badge_required: 'Legal requirement',

    about_tag:    'Our difference',
    about_title:  'Why Choose NorthTech?',
    about1_title: 'Standards Rigor',
    about1_desc:  'Every study strictly complies with current CSA, NFPA, IEEE, and IEC standards. No shortcuts.',
    about2_title: 'Field Expertise',
    about2_desc:  'Field surveys and engineering studies under one roof — no subcontracting, full data control end-to-end.',
    about3_title: 'Fast Delivery',
    about3_desc:  'AI-augmented workflows with ETAP, PSCAD and EasyPower deliver results 2× faster than the industry average, without compromising quality.',
    about4_title: 'Trilingual FR · EN · AR',
    about4_desc:  'Unique in Quebec: full service in French, English, and Arabic — for Canadian clients across the country.',

    gallery_tag:   'In the Field',
    gallery_title: 'Hands-On Electrical Infrastructure Expertise',
    gallery_desc:  'From substations to switchgear rooms, we work directly with equipment to ensure accurate field data and reliable studies.',
    gallery2_caption: 'Field Inspection & Survey',
    gallery3_caption: 'Protection Relay Programming',
    gallery4_caption: 'Single-Line Diagram Design & Updates',
    gallery5_caption: 'Power Transmission Networks',
    gallery6_caption: 'Commercial & Industrial Energy',

    markets_tag:   'National Coverage',
    markets_title: 'Our Territory',
    markets_desc:  'NorthTech serves the Canadian market from coast to coast, with local expertise and in-depth knowledge of CSA standards.',
    m1_country: 'Canada',        m1_sub: 'Quebec · Ontario · Other provinces',
    m2_country: 'United States', m2_sub: 'USA — Nationwide',
    m3_country: 'Algeria',       m3_sub: 'North Africa',
    m1_clients: 'Industry · Hydro-Québec · Mining · Construction · Municipalities',
    m2_clients: 'Industrial · Data Centers · Fortune 500',
    m3_clients: 'Sonatrach · Cement Plants · Mining',

    comply_label: 'Standards mastered',

    contact_tag:    'Contact Us',
    contact_title:  "Electrical Engineering Services You Can Count On",
    contact_desc:   "Whatever your project — power study, field survey, or single-line diagram — NorthTech is here to answer your questions and support you every step of the way. Speak with an engineer today.",
    contact_remote: 'Remote service available',

    form_name:           'Full Name *',
    form_company:        'Company',
    form_email:          'Email *',
    form_country:        'Country *',
    form_country_ph:     '-- Select --',
    form_country_other:  'Other',
    form_service:        'Service Requested *',
    form_service_ph:     '-- Select a service --',
    form_relay:          'Protection Relay Programming',
    form_consult:        'Technical Consultation',
    form_package:        'Complete Package',
    pricing_tag:         'Pricing',
    pricing_title:       'Cost Estimates — Canadian Market 2026',
    pricing_desc:        'Full arc flash package includes: field data collection, system modeling, short-circuit analysis (IEEE/IEC), protective device coordination (TCC curves), incident energy calculation per IEEE 1584-2018, updated SLD, and NFPA 70E / CSA Z462 compliant arc flash labels. Indicative range ±15%.',
    pricing_from:        'Starting at',
    pricing_cta:         'Get a Quote',
    pricing_quote:       'Custom Quote',
    pricing_popular:     'Most Requested',
    p1_tag:              'Small Commercial',
    p1_nodes:            '< 20 panels / nodes',
    p1_range:            '– 8k$',
    p2_tag:              'Mid-Size Industrial',
    p2_nodes:            '20 – 50 panels / nodes',
    p2_range:            '– 16k$',
    p3_tag:              'Large Industrial',
    p3_nodes:            '50 – 100 panels / nodes',
    p3_range:            '– 25k$',
    p4_tag:              'Complex / Multi-Site',
    p4_nodes:            '100+ panels / nodes',
    p4_range:            'up to 75k$+',
    p_i1:                'Field survey & modeling (ETAP / SKM)',
    p_i2:                'Short-circuit study (IEEE Std 242 / IEC 60909)',
    p_i3:                'Protective device coordination — TCC curves',
    p_i4:                'Incident energy calculation (IEEE 1584-2018)',
    p_i5:                'Updated SLD (AutoCAD DWG / PDF)',
    p_i6:                'Arc flash labels (ANSI Z535.4)',
    p_i7:                'PE-stamped report + 1 revision round',
    pricing_note1:       'Base rate ~$130 / node (Ontario 2026 market)',
    pricing_note2:       'Existing study update: save ~30% vs. new study',
    pricing_note3:       'Current & accurate SLD on hand: 25–30% cost reduction',
    pricing_note4:       'Standalone studies available — short-circuit, coordination, or SLD on request',
    form_message:        'Message / Project Description',
    cta_consult_title:   'Free Consultation',
    cta_consult_desc:    'Talk to a NorthTech engineer about your project — no cost, no commitment. Response guaranteed within 24 business hours.',
    cta_consult_btn:     'Request a Free Consultation',
    cta_quote_title:     'Request a Quote',
    cta_quote_desc:      'Get a personalized estimate based on your equipment, network size, and applicable standards for your sector.',
    cta_quote_btn:       'Get a Quote',
    form_submit:         'Send Request',
    form_note:           'Response guaranteed within 24 business hours',
    form_success:        "Request sent! We'll get back to you within 24h.",

    footer_tagline:      'Precision electrical engineering studies.',
    footer_col_services: 'Services',
    footer_col_markets:  'Markets',
    footer_copy:         '© 2025 NorthTech Engineering Inc. All rights reserved.',
    footer_legal:        'NorthTech Ingénierie Inc. (Quebec) · northtech.ca',
  },

  ar: {
    nav_services: 'الخدمات',
    nav_about:    'من نحن',
    nav_markets:  'الأسواق',
    nav_contact:  'اتصل بنا',

    hero_tagline: 'الحجز مفتوح — مشاريع 2026',
    hero_badge: 'هندسة كهربائية معتمدة',
    hero_title: 'هندسة كهربائية.<br><span class="shiny">دقة. احتراف.</span>',
    hero_sub:   'دراسات منظومات الطاقة وفق معايير CSA Z462 و NFPA 70E و IEEE 1584.<br>كندا · كيبيك · أونتاريو',
    hero_cta1:  'تحدث معنا عن مشروعك',
    hero_cta2:  'خدماتنا',

    stat_countries: 'دول نخدمها',
    stat_langs:     'لغات',
    stat_conform:   'مطابقة المعايير',
    stat_speed:     'تسليم أسرع',


    prob_tag:   'هل تواجه هذه التحديات؟',
    prob_title: 'المشاكل التي نحلها',
    prob_desc:  'إذا كان أيٌّ من هذه التحديات مألوفاً لديك، فإن NorthTech هو الشريك المناسب.',
    prob1: 'تقليل مخاطر الانبهار الكهربائي (arc flash) في المنشآت الصناعية',
    prob2: 'ضمان الامتثال لمعايير CSA Z462 و NFPA 70E و IEEE 1584',
    prob3: 'تحسين تنسيق وانتقائية الحمايات الكهربائية',
    prob4: 'تحديث الدراسات الكهربائية بعد التعديلات على الشبكة',
    prob5: 'حساب تيارات القصر لتحديد مقاسات المعدات بدقة',
    prob6: 'تحديد التوافقيات (harmoniques) التي تُضعف جودة التغذية الكهربائية',
    services_tag:   'خبرتنا',
    services_title: 'خدماتنا المتخصصة',
    services_desc:  'دراسات شاملة باستخدام برامج متخصصة (ETAP, SKM, PSCAD, EasyPower) ومطابقة للمعايير الأمريكية الشمالية والدولية.',

    s1_title: 'دراسة قصر الدارة',
    s1_desc:  'حساب تيارات العطل القصوى والتحقق من مواصفات الأجهزة (قواطع، مصهرات، لوحات توزيع) وفق IEEE 1584 و IEC 60909.',
    s2_title: 'تنسيق أجهزة الحماية',
    s2_desc:  'تحليل انتقائية الحماية لضمان الحد الأدنى من انقطاع التيار أثناء الأعطال الكهربائية.',
    s3_title: 'دراسة قوس الكهرباء',
    s3_desc:  'حساب طاقة الحادثة (cal/cm²) وحدود قوس الكهرباء وتحديد معدات الوقاية الشخصية وفق CSA Z462 و NFPA 70E.',
    s4_title: 'مخططات أحادية الخط',
    s4_desc:  'مسح ميداني وإنشاء مخططات SLD وفق ANSI/IEEE Std 315 بصيغ SVG و PDF و AutoCAD DWG.',
    s5_title: 'تحليل تدفق الطاقة',
    s5_desc:  'تحليل توزيع الطاقة الفعالة والتفاعلية عبر الشبكة لتحسين ملفات الجهد وعامل الطاقة.',
    s6_title: 'تحليل التوافقيات',
    s6_desc:  'تقييم التشويه التوافقي الكلي (THD) وتقديم توصيات التصفية وفق معيار IEEE 519.',

    s7_title: 'جمع البيانات الميدانية',
    s7_desc:  'جرد الأصول الكهربائية، تسجيل بيانات اللوحات التعريفية، وقياسات ميدانية باستخدام أدوات رقمية، لتغذية دراساتكم ومخططاتكم أحادية الخط مباشرة.',
    s7_tag1:  'تدقيق ميداني',
    s7_tag2:  'جرد الأصول',
    s7_tag3:  'مسح رقمي',

    badge_required: 'إلزامي قانونياً',

    about_tag:    'ما يميزنا',
    about_title:  'لماذا تختار NorthTech؟',
    about1_title: 'صرامة المعايير',
    about1_desc:  'كل دراسة تُنجز بدقة وفق معايير CSA و NFPA و IEEE و IEC السارية. لا تنازل.',
    about2_title: 'خبرة ميدانية',
    about2_desc:  'المسح الميداني والدراسات تحت سقف واحد — لا مقاولة من الباطن، بيانات محكومة من البداية للنهاية.',
    about3_title: 'تسليم سريع',
    about3_desc:  'سير عمل مدعومة بالذكاء الاصطناعي مع ETAP و PSCAD و EasyPower: تسليم أسرع بمرتين من متوسط الصناعة دون المساس بالجودة.',
    about4_title: 'ثلاث لغات: FR · EN · AR',
    about4_desc:  'خدمة كاملة بالفرنسية والإنجليزية والعربية — لعملائنا الكنديين عبر أنحاء البلاد.',

    gallery_tag:   'في الميدان',
    gallery_title: 'خبرة ميدانية في البنية التحتية الكهربائية',
    gallery_desc:  'من محطات التحويل إلى لوحات التوزيع، نعمل مباشرة على المعدات لضمان بيانات ميدانية دقيقة ودراسات موثوقة.',
    gallery2_caption: 'الفحص والمسح الميداني',
    gallery3_caption: 'برمجة مرحلات الحماية',
    gallery4_caption: 'تصميم وتحديث المخططات أحادية الخط',
    gallery5_caption: 'شبكات نقل الكهرباء',
    gallery6_caption: 'الطاقة التجارية والصناعية',

    markets_tag:   'تغطية وطنية',
    markets_title: 'منطقتنا',
    markets_desc:  'تخدم NorthTech السوق الكندي من المحيط إلى المحيط بخبرة محلية ومعرفة عميقة بمعايير CSA.',
    m1_country: 'كندا',                  m1_sub: 'كيبيك · أونتاريو · سائر المقاطعات',
    m2_country: 'الولايات المتحدة',      m2_sub: 'USA — على المستوى الوطني',
    m3_country: 'الجزائر',               m3_sub: 'شمال أفريقيا',
    m1_clients: 'الصناعة · هيدرو-كيبيك · التعدين · البناء · البلديات',
    m2_clients: 'الصناعة · مراكز البيانات · Fortune 500',
    m3_clients: 'سوناطراك · مصانع الإسمنت · المناجم',

    comply_label: 'المعايير المتقنة',

    contact_tag:    'تواصل معنا',
    contact_title:  'خدمات هندسة كهربائية يمكنك الاعتماد عليها',
    contact_desc:   'مهما كان مشروعك — دراسة، مسح ميداني، أو مخطط أحادي الخط — NorthTech هنا للإجابة على أسئلتك ومرافقتك في كل خطوة. تحدث مع مهندس اليوم.',
    contact_remote: 'الخدمة عن بُعد متاحة',

    form_name:           'الاسم الكامل *',
    form_company:        'الشركة',
    form_email:          'البريد الإلكتروني *',
    form_country:        'البلد *',
    form_country_ph:     '-- اختر --',
    form_country_other:  'أخرى / Other',
    form_service:        'الخدمة المطلوبة *',
    form_service_ph:     '-- اختر خدمة --',
    form_relay:          'برمجة مرحلات الحماية',
    form_consult:        'استشارة تقنية',
    form_package:        'الحزمة الكاملة',
    pricing_tag:         'التسعير',
    pricing_title:       'تقديرات التكاليف — السوق الكندي 2026',
    pricing_desc:        'تشمل حزمة قوس الكهرباء الكاملة: مسح ميداني، نمذجة النظام، دراسة قصر الدائرة (IEEE/IEC)، تنسيق الحماية (TCC)، حساب الطاقة الحادثة وفق IEEE 1584-2018، مخطط SLD محدّث وملصقات NFPA 70E / CSA Z462. نطاق تقديري ±15%.',
    pricing_from:        'ابتداءً من',
    pricing_cta:         'احصل على عرض سعر',
    pricing_quote:       'عرض سعر مخصص',
    pricing_popular:     'الأكثر طلباً',
    p1_tag:              'تجاري صغير',
    p1_nodes:            '< 20 لوحة / عقدة',
    p1_range:            '– 8k$',
    p2_tag:              'صناعي متوسط',
    p2_nodes:            '20 – 50 لوحة / عقدة',
    p2_range:            '– 16k$',
    p3_tag:              'صناعي كبير',
    p3_nodes:            '50 – 100 لوحة / عقدة',
    p3_range:            '– 25k$',
    p4_tag:              'معقد / متعدد المواقع',
    p4_nodes:            '100+ لوحة / عقدة',
    p4_range:            'حتى 75k$+',
    p_i1:                'مسح ميداني ونمذجة ETAP / SKM',
    p_i2:                'دراسة قصر الدائرة (IEEE Std 242 / IEC 60909)',
    p_i3:                'تنسيق الحماية — منحنيات TCC',
    p_i4:                'حساب الطاقة الحادثة (IEEE 1584-2018)',
    p_i5:                'مخطط SLD محدّث (AutoCAD DWG / PDF)',
    p_i6:                'ملصقات قوس الكهرباء (ANSI Z535.4)',
    p_i7:                'تقرير موقّع من مهندس + جولة مراجعة واحدة',
    pricing_note1:       'السعر الأساسي ~$130 / عقدة (سوق أونتاريو 2026)',
    pricing_note2:       'تحديث دراسة موجودة: توفير ~30% مقارنة بدراسة جديدة',
    pricing_note3:       'مخطط SLD حديث ودقيق: خفض التكلفة بنسبة 25–30%',
    pricing_note4:       'دراسات منفردة متاحة — قصر دائرة، تنسيق حماية، أو SLD عند الطلب',
    form_message:        'الرسالة / وصف المشروع',
    cta_consult_title:   'استشارة مجانية',
    cta_consult_desc:    'تحدث مع مهندس NorthTech حول مشروعك — بدون تكلفة أو التزام. رد مضمون خلال 24 ساعة عمل.',
    cta_consult_btn:     'طلب استشارة مجانية',
    cta_quote_title:     'طلب عرض سعر',
    cta_quote_desc:      'احصل على تقدير مخصص بناءً على معداتك وحجم شبكتك والمعايير المطبقة في قطاعك.',
    cta_quote_btn:       'احصل على عرض سعر',
    form_submit:         'إرسال الطلب',
    form_note:           'رد مضمون خلال 24 ساعة عمل',
    form_success:        'تم إرسال الطلب! سنرد عليك خلال 24 ساعة.',

    footer_tagline:      'هندسة كهربائية. دقة. احتراف.',
    footer_col_services: 'الخدمات',
    footer_col_markets:  'الأسواق',
    footer_copy:         '© 2025 NorthTech Engineering Inc. جميع الحقوق محفوظة.',
    footer_legal:        'NorthTech Ingénierie Inc. (Québec) · northtech.ca',
  }
};

/* === PAGE TITLES === */
const PAGE_TITLES = {
  fr: 'NorthTech Engineering — Études électriques de précision',
  en: 'NorthTech Engineering — Precision Power System Studies',
  ar: 'NorthTech Engineering — دراسات كهربائية متخصصة',
};

/* === LANGUAGE SWITCHER === */
let lang = localStorage.getItem('nt_lang') || 'fr';

function applyLang(code) {
  lang = code;
  localStorage.setItem('nt_lang', code);
  const dict = T[code] || T.fr;

  document.documentElement.lang = code;
  document.title = PAGE_TITLES[code] || PAGE_TITLES.fr;
  document.body.classList.toggle('rtl', code === 'ar');
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';

  // Update all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === code);
    btn.setAttribute('aria-pressed', btn.dataset.lang === code ? 'true' : 'false');
  });

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = dict[key];
    if (val === undefined) return;

    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      el.placeholder = val;
    } else if (tag === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
}

/* === MOBILE NAV === */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close on any nav link click
  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
}

/* === HEADER SCROLL SHADOW === */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* === ACTIVE NAV LINK === */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav__link');

  const onScroll = () => {
    const top = window.scrollY + 100;
    sections.forEach(sec => {
      const active = top >= sec.offsetTop && top < sec.offsetTop + sec.offsetHeight;
      links.forEach(link => {
        if (link.getAttribute('href') === `#${sec.id}`) {
          link.classList.toggle('active', active);
        }
      });
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* === SCROLL ANIMATIONS (IntersectionObserver) === */
function initFadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // Stagger siblings inside the same grid parent
      const siblings = [...el.parentElement.querySelectorAll('.fade-in')];
      const idx = siblings.indexOf(el);
      setTimeout(() => el.classList.add('visible'), idx * 90);
      observer.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* === CONTACT FORM === */
function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  // Remove error on user input
  form.querySelectorAll('input, select, textarea').forEach(f => {
    f.addEventListener('input', () => f.classList.remove('error'));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('.error').forEach(f => f.classList.remove('error'));

    form.querySelectorAll('[required]').forEach(f => {
      if (!f.value.trim()) { f.classList.add('error'); valid = false; }
    });

    const emailEl = form.querySelector('#f-email');
    if (emailEl?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.classList.add('error'); valid = false;
    }

    if (!valid) {
      form.querySelector('.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.style.opacity = '.65';

    // Simulate async submit (replace with Formspree / API call)
    setTimeout(() => {
      form.reset();
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      btn.style.opacity = '';
      applyLang(lang); // re-translate button text
    }, 900);
  });
}

/* === BOOT === */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  initNav();
  initHeaderScroll();
  initActiveNav();
  initFadeIn();
  initForm();
});
