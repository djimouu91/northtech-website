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
    prob_desc:  "Si l'un de ces défis vous est familier, NorthTech est le bon partenaire pour y répondre.",
    prob1: "Réduire les risques d'arc flash dans vos installations industrielles",
    prob2: 'Assurer la conformité CSA Z462, NFPA 70E et IEEE 1584',
    prob3: 'Améliorer la coordination et la sélectivité des protections',
    prob4: 'Mettre à jour vos études électriques après des modifications du réseau',
    prob5: "Calculer les courants de court-circuit pour le bon dimensionnement de l'appareillage",
    prob6: "Diagnostiquer les perturbations de qualité de l'énergie électrique — harmoniques",
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

    s8_title: "Gestion des actifs électriques",
    s8_desc:  "Registre numérique de vos équipements (transformateurs, disjoncteurs, tableaux), suivi de leur état de santé, planification de la maintenance préventive et rapports de conformité — pour maximiser la durée de vie de votre infrastructure.",
    s8_tag1:  'Registre numérique',
    s8_tag2:  'Maintenance préventive',
    s8_tag3:  "Rapports d'état",

    s9_title: "Étude GPR — Montée de potentiel de terre",
    s9_desc:  "Calcul de la montée de potentiel de terre (Ground Potential Rise) lors de défauts en sous-station — protection des personnes et des équipements de télécommunication selon IEEE Std 80 et CSA C22.3.",
    s9_tag1:  'IEEE Std 80',
    s9_tag2:  'Sous-stations HT',
    s9_tag3:  'Sécurité du personnel',

    s10_title: "Étude de surtension transitoire",
    s10_desc:  "Simulation des surtensions de manœuvre et de foudre pour valider la coordination des parafoudres et la tenue diélectrique des équipements — conforme IEEE C62.41 et IEC 62271.",
    s10_tag1:  'Surtension de manœuvre',
    s10_tag2:  'Parafoudres',
    s10_tag3:  'IEEE C62.41',

    badge_required: 'Obligation légale',

    about_tag:    'Notre différence',
    about_title:  'Pourquoi choisir NorthTech ?',
    about1_title: 'Rigueur normative',
    about1_desc:  'Chaque étude respecte strictement les normes CSA, NFPA, IEEE et CEI en vigueur. Aucun compromis.',
    about2_title: 'Expertise terrain',
    about2_desc:  'Relevé terrain et études sous un même toit — aucune sous-traitance, données maîtrisées de bout en bout.',
    about3_title: 'Livraison rapide',
    about3_desc:  "Workflows IA-augmentés avec ETAP, PSCAD et EasyPower : livraison 2× plus rapide que la moyenne du secteur, sans compromis sur la qualité.",
    about4_title: 'Bilingue FR · EN',
    about4_desc:  "Unique au Québec : service complet en français et en anglais — pour les clients canadiens d'un bout à l'autre du pays.",

    gallery_tag:   'Sur le terrain',
    gallery_title: 'Notre expertise en infrastructure électrique',
    gallery_desc:  "De la sous-station à l'armoire de distribution, nous intervenons directement sur les équipements pour des relevés précis et des études fiables.",
    gallery2_caption: 'Inspection et relevé terrain',
    gallery3_caption: 'Programmation de relais de protection',
    gallery4_caption: 'Conception et mise à jour des schémas unifilaires',
    gallery5_caption: "Réseaux de transport d'électricité",
    gallery6_caption: 'Énergie commerciale et industrielle',
    gallery7_caption: "Études GPR — Sous-stations haute tension",
    gallery8_caption: "Inspection et gestion des actifs électriques",

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
    prob6: 'Diagnose power quality disturbances — harmonics',
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

    s8_title: 'Electrical Asset Management',
    s8_desc:  'Digital registry of your electrical equipment (transformers, breakers, switchgear, panels), condition tracking, preventive maintenance scheduling, and compliance reporting — to maximize the lifespan of your infrastructure.',
    s8_tag1:  'Digital Registry',
    s8_tag2:  'Preventive Maintenance',
    s8_tag3:  'Condition Reports',

    s9_title: 'GPR Study — Ground Potential Rise',
    s9_desc:  'Calculate ground potential rise during substation faults — protecting personnel and telecommunication equipment per IEEE Std 80 and CSA C22.3.',
    s9_tag1:  'IEEE Std 80',
    s9_tag2:  'HV Substations',
    s9_tag3:  'Personnel Safety',

    s10_title: 'Transient Voltage Study',
    s10_desc:  'Simulate switching and lightning surges to validate surge arrester coordination and equipment dielectric withstand — compliant with IEEE C62.41 and IEC 62271.',
    s10_tag1:  'Switching Surges',
    s10_tag2:  'Surge Arresters',
    s10_tag3:  'IEEE C62.41',

    badge_required: 'Legal requirement',

    about_tag:    'Our difference',
    about_title:  'Why Choose NorthTech?',
    about1_title: 'Standards Rigor',
    about1_desc:  'Every study strictly complies with current CSA, NFPA, IEEE, and IEC standards. No shortcuts.',
    about2_title: 'Field Expertise',
    about2_desc:  'Field surveys and engineering studies under one roof — no subcontracting, full data control end-to-end.',
    about3_title: 'Fast Delivery',
    about3_desc:  'AI-augmented workflows with ETAP, PSCAD and EasyPower deliver results 2× faster than the industry average, without compromising quality.',
    about4_title: 'Bilingual FR · EN',
    about4_desc:  'Full service in French and English — for Canadian clients from coast to coast.',

    gallery_tag:   'In the Field',
    gallery_title: 'Hands-On Electrical Infrastructure Expertise',
    gallery_desc:  'From substations to switchgear rooms, we work directly with equipment to ensure accurate field data and reliable studies.',
    gallery2_caption: 'Field Inspection & Survey',
    gallery3_caption: 'Protection Relay Programming',
    gallery4_caption: 'Single-Line Diagram Design & Updates',
    gallery5_caption: 'Power Transmission Networks',
    gallery6_caption: 'Commercial & Industrial Energy',
    gallery7_caption: 'GPR Studies — High-Voltage Substations',
    gallery8_caption: 'Electrical Asset Inspection & Management',

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
    prob6: 'تشخيص اضطرابات جودة الطاقة الكهربائية — التوافقيات',
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
    about4_title: 'ثنائي FR · EN',
    about4_desc:  'خدمة كاملة بالفرنسية والإنجليزية — لعملائنا الكنديين من المحيط إلى المحيط.',

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


/* ============================================================
   SERVICE DETAIL MODALS
   ============================================================ */
var _currentService = null;

var MODALS = {
  fr: {
    s1: {
      title: "Étude de court-circuit",
      subtitle: "CSA C22.1 · IEC 60909 · IEEE Std 551",
      badge: null,
      overview: "Calcul des courants de défaut maximaux en chaque point du réseau pour vérifier que vos équipements de protection (disjoncteurs, fusibles, switchgear) sont correctement calibrés pour les interrompre en toute sécurité.",
      faq: [
        { q: "Pourquoi réaliser une étude de court-circuit ?",
          a: "Un équipement dont le pouvoir de coupure est inférieur au courant de défaut peut exploser lors d'un incident, causant des dommages majeurs et mettant en danger le personnel. Cette étude garantit la conformité de chaque équipement." },
        { q: "Quand faut-il la mettre à jour ?",
          a: "À chaque modification significative du réseau : ajout de transformateur, groupe électrogène, connexion à une nouvelle source ou modification de la topologie." },
        { q: "Quels livrables sont fournis ?",
          a: "Rapport avec courants de court-circuit en chaque noeud, vérification des calibres et recommandations de mise à niveau. Livrables en PDF et fichier ETAP/SKM." }
      ],
      tags: ["CSA C22.1","IEEE Std 551","IEC 60909","ETAP","SKM PowerTools"],
      cta: "Demander une étude"
    },
    s2: {
      title: "Coordination des protections",
      subtitle: "IEEE 242 · ETAP · Courbes TCC",
      badge: null,
      overview: "Analyse de la sélectivité des dispositifs de protection afin que lors d'un défaut, seul le dispositif le plus proche du défaut se déclenche — minimisant les interruptions et protégeant tout le réseau.",
      faq: [
        { q: "Qu'est-ce que la coordination des protections ?",
          a: "La coordination assure la séquence de déclenchement des protections pour que le défaut soit isolé au plus près de sa source, sans couper le reste de l'installation." },
        { q: "Quels outils et livrables ?",
          a: "Modélisation sous ETAP ou SKM, analyse des courbes temps-courant (TCC) et paramètres de réglage des relais. Livrable principal : rapport TCC avec réglages recommandés." },
        { q: "Pourquoi est-ce critique pour les installations industrielles ?",
          a: "Une mauvaise coordination entraîne des arrêts non planifiés, des difficultés avec les assureurs et des risques de cascade de défauts qui endommagent le réseau." }
      ],
      tags: ["IEEE 242","ETAP","SKM","Courbes TCC","Réglage relais"],
      cta: "Demander une étude"
    },
    s3: {
      title: "Étude arc flash",
      subtitle: "CSA Z462 · NFPA 70E · IEEE 1584-2018 · EasyPower",
      badge: "Obligation légale",
      overview: "Calcul de l'énergie incidente (cal/cm²) libérée lors d'un arc électrique, délimitation des zones de danger (arc flash boundary), détermination des EPI requis et génération des étiquettes réglementaires conformes à CSA Z462.",
      faq: [
        { q: "Qu'est-ce qu'un arc flash ?",
          a: "Un arc flash est une libération explosive d'énergie électrique à travers l'air entre deux conducteurs sous tension. Les températures atteignent 19 400 °C — plus chaudes que la surface du soleil — causant brûlures graves, explosions et décès." },
        { q: "Cette étude est-elle obligatoire ?",
          a: "Oui. La norme CSA Z462 et le Code canadien du travail exigent une évaluation du risque arc flash pour tout travail en présence de tension. Les employeurs non conformes s'exposent à des poursuites pénales et civiles." },
        { q: "Que comprend l'étude NorthTech ?",
          a: "Modélisation complète sous EasyPower/ETAP, calcul de l'énergie incidente sur chaque équipement, délimitation des zones, catégories EPI et génération des étiquettes réglementaires (voir étiquette ci-dessous)." },
        { q: "À quelle fréquence l'étude doit-elle être mise à jour ?",
          a: "Après tout changement significatif du réseau ou tous les 5 ans au minimum. Les études antérieures à la révision IEEE 1584-2018 doivent être refaites." }
      ],
      tags: ["CSA Z462","NFPA 70E","IEEE 1584-2018","EasyPower","ETAP","Étiquettes EPI"],
      cta: "Demander une étude arc flash",
      show_label: true
    },
    s4: {
      title: "Schémas unifilaires (SLD)",
      subtitle: "ANSI/IEEE Std 315 · AutoCAD · SVG",
      badge: null,
      overview: "Relevé terrain et conception des schémas unifilaires conformes ANSI/IEEE Std 315. Livrables en SVG vectoriel, PDF et AutoCAD DWG — fidèles à l'état réel de votre installation.",
      faq: [
        { q: "Pourquoi moderniser ses schémas unifilaires ?",
          a: "Des SLD obsolètes constituent un risque opérationnel et sécuritaire majeur. En cas d'urgence, le personnel et les secours s'y réfèrent pour comprendre rapidement l'architecture du réseau." },
        { q: "Quels formats livrez-vous ?",
          a: "SVG vectoriel (zoomable sans perte), PDF et AutoCAD DWG — compatibles avec tous les systèmes documentaires et prêts à imprimer à n'importe quelle échelle." },
        { q: "Réalisez-vous des relevés terrain ?",
          a: "Oui. NorthTech effectue des relevés complets : plaques signalétiques, câbles, paramètres des disjoncteurs et relais, pour que le schéma reflète l'état réel de l'installation." }
      ],
      tags: ["ANSI/IEEE Std 315","AutoCAD DWG","SVG","PDF","Relevé terrain"],
      cta: "Demander un SLD"
    },
    s5: {
      title: "Écoulement de puissance",
      subtitle: "IEEE 399 · ETAP · SKM",
      badge: null,
      overview: "Analyse de la distribution de puissance active (kW) et réactive (kVAR) pour optimiser les profils de tension, réduire les pertes et améliorer le facteur de puissance de vos installations.",
      faq: [
        { q: "À quoi sert une étude d'écoulement de puissance ?",
          a: "Elle vérifie que les tensions restent dans les limites acceptables (±5 %), identifie les équipements surchargés et optimise la répartition des charges pour réduire les pertes énergétiques." },
        { q: "Dans quels cas est-elle nécessaire ?",
          a: "Lors de l'ajout de charges importantes (moteurs, VFD, datacentres), d'intégration d'énergies renouvelables, d'extension du réseau ou en cas de problèmes de tension." },
        { q: "Quels livrables sont fournis ?",
          a: "Rapport load flow avec profils de tension, taux de chargement des transformateurs et câbles, facteur de puissance par noeud, et recommandations (banques de condensateurs, réglage de prises)." }
      ],
      tags: ["IEEE 399","ETAP","Load Flow","Profil de tension","Facteur de puissance"],
      cta: "Demander une analyse"
    },
    s6: {
      title: "Analyse harmonique",
      subtitle: "IEEE 519-2022 · IEC 61000 · IEEE 1250",
      badge: null,
      overview: "Évaluation des distorsions harmoniques courant et tension (THD) générées par les variateurs (VFD), onduleurs et charges non-linéaires, avec recommandations de filtrage conformes à IEEE 519-2022.",
      faq: [
        { q: "Quelles sont les conséquences des harmoniques ?",
          a: "Surchauffe des transformateurs et câbles, déclenchements intempestifs de disjoncteurs, perturbations des équipements électroniques sensibles et augmentation des pertes énergétiques." },
        { q: "Comment mesurez-vous les harmoniques ?",
          a: "Par campagne de mesure terrain avec analyseurs de qualité d'énergie (Fluke 435, 1760), combinée à la modélisation sous ETAP pour simuler différents scénarios de charge." },
        { q: "Quelles solutions recommandez-vous ?",
          a: "Filtres passifs harmoniques, filtres actifs de puissance (FAP), réactances de ligne pour VFD, transformateurs zig-zag, ou isolation des charges polluantes." }
      ],
      tags: ["IEEE 519-2022","THD","VFD","Filtres harmoniques","IEC 61000"],
      cta: "Demander une analyse"
    },
    s7: {
      title: "Collecte de données terrain",
      subtitle: "Audit · Inventaire · Relevé numérique",
      badge: null,
      overview: "Inventaire complet de vos actifs électriques sur site : plaques signalétiques, paramètres de configuration, documentation photographique et saisie numérique pour alimenter vos études avec des données précises et à jour.",
      faq: [
        { q: "Qu'est-ce qui est inventorié lors du relevé terrain ?",
          a: "Transformateurs (kVA, rapport, groupe de connexion), disjoncteurs (calibre, pouvoir de coupure, réglages), câbles (section, longueur, type), relais de protection et tout équipement de distribution." },
        { q: "Utilisez-vous des outils numériques ?",
          a: "Oui. NorthTech utilise des tablettes et applications spécialisées pour la saisie terrain en temps réel avec export direct vers ETAP et SKM." },
        { q: "Comment ce service se connecte-t-il aux études électriques ?",
          a: "Les données collectées alimentent directement les modèles de simulation. Des données terrain précises génèrent des études fiables et des recommandations pertinentes." }
      ],
      tags: ["Audit terrain","Inventaire actifs","ETAP","Export numérique","Documentation"],
      cta: "Planifier un relevé"
    },
    s8: {
      title: "Gestion des actifs électriques",
      subtitle: "Registre · Maintenance · Conformité",
      badge: null,
      overview: "Registre numérique de votre infrastructure électrique, suivi de santé des équipements, planification des maintenances préventives et rapports de conformité pour maximiser fiabilité et durée de vie de vos actifs.",
      faq: [
        { q: "Qu'est-ce qu'un registre numérique d'actifs ?",
          a: "Une base de données structurée de tous vos équipements incluant caractéristiques techniques, historique de maintenance, prochaines échéances et état de conformité, accessible depuis n'importe quel appareil." },
        { q: "Comment planifiez-vous la maintenance préventive ?",
          a: "En intégrant recommandations fabricants, exigences normatives (NFPA 70B, CSA C22.1) et historique des pannes pour générer un calendrier optimisé avec alertes automatiques." },
        { q: "Quels rapports de conformité fournissez-vous ?",
          a: "Rapports d'état par équipement, tableaux de bord CSA/NFPA, historique des inspections et documentation prête pour les audits et les assureurs." }
      ],
      tags: ["Registre numérique","NFPA 70B","ISO 55001","Maintenance préventive","Dashboard"],
      cta: "Demander une démo"
    },
    s9: {
      title: "Étude GPR — Montée de potentiel de terre",
      subtitle: "IEEE Std 80 · CSA C22.3 · Sous-stations HT",
      badge: null,
      overview: "Calcul de la montée de potentiel de terre (Ground Potential Rise) lors de défauts en sous-station pour protéger le personnel, les équipements de télécommunication et les structures adjacentes, conformément à IEEE Std 80.",
      faq: [
        { q: "Qu'est-ce que la montée de potentiel de terre (GPR) ?",
          a: "Lors d'un défaut phase-terre, le courant de défaut crée une différence de potentiel pouvant atteindre plusieurs milliers de volts entre le point d'injection et la terre lointaine." },
        { q: "Quels risques le GPR crée-t-il ?",
          a: "Tensions de contact et de pas dangereuses pour le personnel, destruction des équipements de télécommunication connectés à distance et risques pour les structures et pipelines adjacents." },
        { q: "Que comprend l'étude NorthTech GPR ?",
          a: "Modélisation de la grille de mise à la terre, calcul des courants de défaut, profils de tension de pas et de contact, vérification IEEE Std 80 et recommandations de mitigation." }
      ],
      tags: ["IEEE Std 80","CSA C22.3","Grille de terre","Tension de contact","Sous-stations"],
      cta: "Demander une étude GPR"
    },
    s10: {
      title: "Étude de surtension transitoire",
      subtitle: "IEEE C62.41 · IEC 62271 · ATP/EMTP",
      badge: null,
      overview: "Simulation des surtensions de manoeuvre et de foudre pour valider la coordination des parafoudres, vérifier la tenue diélectrique des équipements et protéger votre infrastructure contre les transitoires rapides.",
      faq: [
        { q: "Qu'est-ce qu'une surtension transitoire ?",
          a: "Une pointe de tension de très courte durée (microsecondes à millisecondes) pouvant dépasser plusieurs fois la tension nominale. Causée par la foudre, les manoeuvres ou les défauts phase-terre." },
        { q: "Quels équipements sont à risque ?",
          a: "Transformateurs (surtensions d'ouverture à vide), câbles isolés (onde de choc), variateurs de fréquence (VFD) et équipements de protection et de contrôle." },
        { q: "Comment NorthTech protège-t-il votre installation ?",
          a: "Par simulation ATP/EMTP ou ETAP des scénarios critiques, analyse des niveaux de surtension en chaque noeud et recommandations de coordination des parafoudres et filtres RC." }
      ],
      tags: ["IEEE C62.41","IEC 62271","ATP/EMTP","Parafoudres","Onde de choc"],
      cta: "Demander une étude"
    }
  },

  en: {
    s1: {
      title: "Short Circuit Study",
      subtitle: "CSA C22.1 · IEC 60909 · IEEE Std 551",
      badge: null,
      overview: "Calculate maximum fault currents at every node to verify that your protective equipment (breakers, fuses, switchgear) is properly rated to interrupt them safely.",
      faq: [
        { q: "Why conduct a short circuit study?",
          a: "Equipment with an interrupting capacity lower than the fault current can fail catastrophically during a fault. This study ensures every device is properly rated." },
        { q: "When should it be updated?",
          a: "After any significant change: adding a transformer, generator, new power source, or modifying the network topology." },
        { q: "What deliverables are provided?",
          a: "Complete report with fault currents at every node, equipment rating verification, and upgrade recommendations. Delivered in PDF and ETAP/SKM model files." }
      ],
      tags: ["CSA C22.1","IEEE Std 551","IEC 60909","ETAP","SKM PowerTools"],
      cta: "Request a Study"
    },
    s2: {
      title: "Protection Coordination",
      subtitle: "IEEE 242 · ETAP · TCC Curves",
      badge: null,
      overview: "Analyze the selectivity of protective devices so that during a fault, only the device closest to the fault operates — minimizing service interruptions and protecting the network.",
      faq: [
        { q: "What is protection coordination?",
          a: "It is the sequencing of protective devices (breakers, fuses, relays) so that a fault is isolated at its source without shutting down the rest of the facility." },
        { q: "What tools and deliverables are used?",
          a: "ETAP or SKM modelling, time-current curve (TCC) analysis, relay and breaker settings. Primary deliverable: TCC report with recommended settings." },
        { q: "Why is this critical for industrial facilities?",
          a: "Poor coordination leads to unplanned shutdowns, difficulty satisfying insurer requirements, and risk of fault cascades that can damage the entire network." }
      ],
      tags: ["IEEE 242","ETAP","SKM","TCC Curves","Relay Settings"],
      cta: "Request a Study"
    },
    s3: {
      title: "Arc Flash Study",
      subtitle: "CSA Z462 · NFPA 70E · IEEE 1584-2018 · EasyPower",
      badge: "Legal Requirement",
      overview: "Calculate incident energy (cal/cm²) at every point in the network, define arc flash boundaries, determine required PPE categories, and generate regulatory warning labels compliant with CSA Z462 and NFPA 70E.",
      faq: [
        { q: "What is an arc flash?",
          a: "An arc flash is a sudden explosive release of electrical energy through air between two energized conductors. Temperatures can reach 35,000°F, causing severe burns, explosions, and fatalities." },
        { q: "Is this study legally required?",
          a: "Yes. CSA Z462 and the Canada Labour Code require an arc flash hazard assessment for any energized electrical work. Non-compliant employers face criminal and civil liability." },
        { q: "What does a NorthTech arc flash study include?",
          a: "Complete network modelling in EasyPower/ETAP, incident energy calculation for each equipment item, PPE category determination, and regulatory warning labels (see below)." },
        { q: "How often must the study be updated?",
          a: "After any significant system change, or at minimum every 5 years. Studies predating IEEE 1584-2018 should be revised." }
      ],
      tags: ["CSA Z462","NFPA 70E","IEEE 1584-2018","EasyPower","ETAP","PPE Labels"],
      cta: "Request an Arc Flash Study",
      show_label: true
    },
    s4: {
      title: "Single-Line Diagrams (SLD)",
      subtitle: "ANSI/IEEE Std 315 · AutoCAD · SVG",
      badge: null,
      overview: "On-site survey and design of single-line diagrams compliant with ANSI/IEEE Std 315. Delivered in scalable SVG, PDF, and AutoCAD DWG, accurately reflecting the actual state of your installation.",
      faq: [
        { q: "Why update single-line diagrams?",
          a: "Outdated or missing SLDs are a major safety risk. During emergencies, electricians and first responders rely on them to quickly understand the network architecture." },
        { q: "What formats do you deliver?",
          a: "Scalable SVG (lossless zoom), PDF, and AutoCAD DWG, compatible with all document management systems and ready to print at any scale." },
        { q: "Do you conduct field surveys?",
          a: "Yes. NorthTech performs complete field surveys: equipment nameplates, cable configurations, breaker and relay parameters, ensuring the diagram reflects reality." }
      ],
      tags: ["ANSI/IEEE Std 315","AutoCAD DWG","SVG","PDF","Field Survey"],
      cta: "Request an SLD"
    },
    s5: {
      title: "Load Flow Analysis",
      subtitle: "IEEE 399 · ETAP · SKM",
      badge: null,
      overview: "Analyze active (kW) and reactive (kVAR) power distribution to optimize voltage profiles, reduce losses, and improve power factor across your electrical installations.",
      faq: [
        { q: "What does a load flow study accomplish?",
          a: "It verifies that voltages remain within acceptable limits (±5%), identifies overloaded equipment, and optimizes load distribution to reduce losses and energy costs." },
        { q: "When is it required?",
          a: "When adding significant loads (motors, VFDs, data centers), integrating renewables, expanding the network, or when voltage or power factor problems are observed." },
        { q: "What deliverables are provided?",
          a: "Load flow report with voltage profiles, transformer and cable loading rates, power factor per node, and optimization recommendations." }
      ],
      tags: ["IEEE 399","ETAP","Load Flow","Voltage Profile","Power Factor"],
      cta: "Request an Analysis"
    },
    s6: {
      title: "Harmonic Analysis",
      subtitle: "IEEE 519-2022 · IEC 61000 · IEEE 1250",
      badge: null,
      overview: "Evaluate current and voltage harmonic distortion (THD) from variable frequency drives, inverters, and non-linear loads, with filter recommendations compliant with IEEE 519-2022.",
      faq: [
        { q: "What are the consequences of harmonics?",
          a: "Overheating of transformers and cables, nuisance breaker tripping, interference with sensitive electronics, and increased energy losses, directly impacting reliability and operating costs." },
        { q: "How do you measure harmonics?",
          a: "Through field measurement campaigns using power quality analyzers (Fluke 435/1760), combined with ETAP network modelling to simulate different load scenarios." },
        { q: "What solutions can be recommended?",
          a: "Passive harmonic filters, active power filters (APF), line reactors for VFDs, zigzag transformers, or network restructuring to isolate harmonic-generating loads." }
      ],
      tags: ["IEEE 519-2022","THD","VFD","Harmonic Filters","IEC 61000"],
      cta: "Request an Analysis"
    },
    s7: {
      title: "Field Data Collection",
      subtitle: "Audit · Inventory · Digital Survey",
      badge: null,
      overview: "Complete on-site inventory of your electrical assets: nameplate data, configuration parameters, photographic documentation, and digital entry, providing accurate data for your electrical studies.",
      faq: [
        { q: "What is inventoried during the field survey?",
          a: "Transformers (kVA, voltage ratio, connection group), circuit breakers (rating, interrupting capacity, settings), cables (size, length, type), protective relays, and all distribution equipment." },
        { q: "Do you use digital tools?",
          a: "Yes. NorthTech uses tablets and specialized apps for real-time field data entry, with direct export to ETAP and SKM modelling software." },
        { q: "How does this connect to electrical studies?",
          a: "Collected data feeds directly into simulation models. Accurate field data yields reliable studies and relevant recommendations." }
      ],
      tags: ["Field Audit","Asset Inventory","ETAP","Digital Export","Documentation"],
      cta: "Schedule a Survey"
    },
    s8: {
      title: "Electrical Asset Management",
      subtitle: "Registry · Maintenance · Compliance",
      badge: null,
      overview: "Complete digital registry of your electrical infrastructure, equipment health tracking, preventive maintenance scheduling, and compliance reporting to maximize asset reliability and lifespan.",
      faq: [
        { q: "What is a digital asset registry?",
          a: "A structured database of all your electrical equipment including technical specs, maintenance history, upcoming inspection deadlines, and regulatory compliance status, accessible from any device." },
        { q: "How is preventive maintenance scheduled?",
          a: "By integrating manufacturer recommendations, regulatory requirements (NFPA 70B, CSA C22.1), and failure history to generate an optimized schedule with automatic alerts." },
        { q: "What compliance reports do you provide?",
          a: "Equipment status reports, CSA and NFPA compliance dashboards, inspection history, and documentation ready for regulatory audits and insurers." }
      ],
      tags: ["Digital Registry","NFPA 70B","ISO 55001","Preventive Maintenance","Dashboard"],
      cta: "Request a Demo"
    },
    s9: {
      title: "GPR Study — Ground Potential Rise",
      subtitle: "IEEE Std 80 · CSA C22.3 · HV Substations",
      badge: null,
      overview: "Calculate ground potential rise (GPR) during substation faults to protect personnel, telecommunication equipment, and adjacent metallic structures in accordance with IEEE Std 80.",
      faq: [
        { q: "What is ground potential rise (GPR)?",
          a: "During a phase-to-ground fault at a substation, fault current flowing through the grounding grid creates a voltage difference that can reach several thousand volts between the injection point and remote earth." },
        { q: "What risks does GPR create?",
          a: "Dangerous touch and step voltages for personnel, destruction of remotely connected telecommunication equipment, and risks to adjacent structures and pipelines." },
        { q: "What does a NorthTech GPR study include?",
          a: "Grounding grid modelling, fault current calculations, step and touch voltage profiles, IEEE Std 80 compliance verification, and mitigation recommendations." }
      ],
      tags: ["IEEE Std 80","CSA C22.3","Grounding Grid","Touch Voltage","Substations"],
      cta: "Request a GPR Study"
    },
    s10: {
      title: "Transient Voltage Study",
      subtitle: "IEEE C62.41 · IEC 62271 · ATP/EMTP",
      badge: null,
      overview: "Simulate switching and lightning surges to validate surge arrester coordination, verify equipment dielectric withstand, and protect your infrastructure against fast transients.",
      faq: [
        { q: "What is a transient overvoltage?",
          a: "A very short-duration voltage spike (microseconds to milliseconds) that can exceed several times nominal voltage, caused by lightning, switching operations, or phase-to-ground faults." },
        { q: "Which equipment is at risk?",
          a: "Transformers (no-load switching surges), insulated cables (impulse waves), variable frequency drives, and protection and control equipment." },
        { q: "How does NorthTech protect your installation?",
          a: "Through ATP/EMTP or ETAP simulation of critical scenarios, analysis of overvoltage levels at each node, and surge arrester and RC filter coordination recommendations." }
      ],
      tags: ["IEEE C62.41","IEC 62271","ATP/EMTP","Surge Arresters","Impulse Wave"],
      cta: "Request a Study"
    }
  }
};

function buildArcFlashLabel() {
  return '<div class="af-label">'
    + '<div class="af-label__header"><div class="af-label__warn-row">'
    + '<svg class="af-label__hazard" viewBox="0 0 30 28" fill="none" aria-hidden="true"><polygon points="15,1 29,27 1,27" fill="black"/><text x="15" y="23" text-anchor="middle" fill="#F97316" font-size="17" font-weight="900" font-family="Arial,sans-serif">!</text></svg>'
    + '<span class="af-label__warn-text">WARNING</span></div></div>'
    + '<div class="af-label__hazard-sub">Arc Flash and Shock Hazard</div>'
    + '<div class="af-label__body">'
    + '<div class="af-label__col af-label__col--left">'
    + '<div class="af-label__col-head">ARC FLASH PROTECTION</div>'
    + '<div class="af-label__row"><span>Working Distance:</span><b>18 in</b></div>'
    + '<div class="af-label__row"><span>Incident Energy:</span><b>4.02 cal/cm&#178;</b></div>'
    + '<div class="af-label__row"><span>Arc Flash Boundary:</span><b>3&#39;&#8209;2&#34;</b></div>'
    + '<div class="af-label__note">Refer to CSA Z462 for PPE requirements. Any system modifications, adjustment of protective device settings or failure to properly maintain equipment, invalidates all above values.</div>'
    + '</div>'
    + '<div class="af-label__col af-label__col--right">'
    + '<div class="af-label__col-head">SHOCK PROTECTION</div>'
    + '<div class="af-label__row"><span>Shock Hazard when<br>cover is removed:</span><b>208V</b></div>'
    + '<div class="af-label__row"><span>Limited Approach:</span><b>1&#39;&#8209;5&#34;</b></div>'
    + '<div class="af-label__row"><span>Restricted Approach:</span><b>1&#39;&#8209;5&#34;</b></div>'
    + '<div class="af-label__row"><span>Glove class:</span><b>00</b></div>'
    + '</div></div>'
    + '<div class="af-label__footer">'
    + '<div class="af-label__footer-left">'
    + '<div>Equipment Name: _______________________</div>'
    + '<div>Date: ______________</div>'
    + '<div>Flash-Analysis by NorthTech Engineering Inc.</div>'
    + '<div class="af-label__std">std. IEEE 1584-2018</div>'
    + '</div>'
    + '<div class="af-label__logo">'
    + '<div><span class="af-label__logo-north">North</span><span class="af-label__logo-tech">Tech</span></div>'
    + '<div class="af-label__logo-eng">Engineering</div>'
    + '</div></div></div>';
}

function buildModalHTML(serviceKey) {
  var data = MODALS[lang] && MODALS[lang][serviceKey];
  if (!data) return '';
  var html = '';
  if (data.badge) html += '<div class="modal__badge">' + data.badge + '</div>';
  html += '<h2 class="modal__title" id="modal-title">' + data.title + '</h2>';
  html += '<p class="modal__subtitle">' + data.subtitle + '</p>';
  html += '<p class="modal__overview">' + data.overview + '</p>';
  if (data.show_label) html += buildArcFlashLabel();
  if (data.faq && data.faq.length) {
    html += '<div class="modal__faq">';
    data.faq.forEach(function(item) {
      html += '<div class="modal__faq-item"><div class="modal__faq-q">&#8212; ' + item.q + '</div><div class="modal__faq-a">' + item.a + '</div></div>';
    });
    html += '</div>';
  }
  if (data.tags && data.tags.length) {
    html += '<div class="modal__tags">';
    data.tags.forEach(function(tag) { html += '<span class="modal__tag">' + tag + '</span>'; });
    html += '</div>';
  }
  html += '<div class="modal__cta"><a href="#contact" class="btn btn--primary" id="modal-cta-btn">' + data.cta + '</a></div>';
  return html;
}

function openModal(serviceKey) {
  _currentService = serviceKey;
  var content = document.getElementById('modal-content');
  if (content) content.innerHTML = buildModalHTML(serviceKey);
  var overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.add('is-open');
  overlay.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  var ctaBtn = document.getElementById('modal-cta-btn');
  if (ctaBtn) ctaBtn.addEventListener('click', closeModal);
}

function closeModal() {
  _currentService = null;
  var overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModals() {
  var overlay = document.getElementById('modal-overlay');
  var closeBtn = document.getElementById('modal-close');
  if (!overlay) return;
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
  document.querySelectorAll('[data-service]').forEach(function(card) {
    card.addEventListener('click', function() { openModal(card.dataset.service); });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.service); }
    });
  });
}

/* === BOOT === */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      if (_currentService) {
        var mc = document.getElementById('modal-content');
        if (mc) mc.innerHTML = buildModalHTML(_currentService);
      }
    });
  });

  initNav();
  initHeaderScroll();
  initActiveNav();
  initFadeIn();
  initForm();
  initModals();
});
