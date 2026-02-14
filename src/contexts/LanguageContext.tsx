import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

const translations = {
  en: {
    // Navigation
    nav_logo_prefix: "THE",
    nav_logo_accent: "CATALYST",
    nav_cta: "Start Program",
    nav_process: "Process",
    nav_results: "Results",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",

    // Hero
    hero_headline_1: "Stop Managing Pain.",
    hero_headline_2: "Start Your Transformation.",
    hero_sub: "A 12-week biomechanical blueprint designed by Dr. Aris Thorne to reclaim your peak performance.",
    hero_cta: "Book Initial Assessment",

    // Specialist
    specialist_title_1: "Who",
    specialist_title_2: "Guides",
    specialist_title_3: "Your Recovery",
    specialist_sub: "A revolutionary approach to biomechanical healing that goes beyond traditional therapy.",
    specialist_name: 'Dr. Aris "The Catalyst" Thorne',
    specialist_bio: "With over a decade of experience in biomechanical physiotherapy, Dr. Thorne has developed a unique methodology that addresses the root cause of pain, not just the symptoms. His approach combines cutting-edge diagnostics with personalized treatment protocols that have helped hundreds of patients—from elite athletes to everyday individuals—achieve lasting recovery and peak performance.",
    specialist_quote: "\"Recovery isn't just about getting back to zero; it's about exceeding your previous peak.\"",
    specialist_cred_1: "Expert Clinical Physiotherapist",
    specialist_cred_2: "Germany",
    specialist_cred_3: "Biomedical Approach",

    // Results Summary
    results_stat_1: "75%",
    results_stat_1_label: "Mobility Improvement",
    results_stat_2: "92%",
    results_stat_2_label: "Pain-Free Rate",
    results_stat_3: "125+",
    results_stat_3_label: "Elite Athletes Treated",

    // Roadmap
    roadmap_title_1: "The 3-Phase",
    roadmap_title_2: "Roadmap",
    roadmap_sub: "A structured 12-week journey designed to take you from pain to peak performance.",
    roadmap_phase1_label: "Phase 1",
    roadmap_phase1_title: "IGNITE",
    roadmap_phase1_subtitle: "Relief & Inflammation Control",
    roadmap_phase1_desc: "Immediate pain relief through targeted interventions. We identify the root cause and eliminate acute inflammation to prepare your body for rebuilding.",
    roadmap_phase2_label: "Phase 2",
    roadmap_phase2_title: "REBUILD",
    roadmap_phase2_subtitle: "Functional Mobility & Strength",
    roadmap_phase2_desc: "Restore your body's natural movement patterns. Progressive exercises designed to rebuild strength while correcting biomechanical imbalances.",
    roadmap_phase3_label: "Phase 3",
    roadmap_phase3_title: "SUSTAIN",
    roadmap_phase3_subtitle: "Performance & Injury Proofing",
    roadmap_phase3_desc: "Lock in your gains with advanced protocols. Build resilience and performance capacity that prevents future injuries and exceeds your baseline.",

    // Case Studies
    cases_title_1: "Real",
    cases_title_2: "Transformations",
    cases_sub: "Success stories from patients who reclaimed their lives through The Catalyst Method.",
    cases_verified: "Verified Patient",
    cases_mobility: "Mobility Restored",
    cases_quote_1: "After years of chronic back pain, I'm now training harder than ever. Dr. Thorne's method changed my life.",
    cases_quote_2: "Professional footballer, ACL recovery. Back on the pitch in record time with better performance than before.",
    cases_quote_3: "At 62, I thought my hiking days were over. Now I've completed three mountain treks this year alone.",

    // FAQ
    faq_title_1: "Frequently Asked",
    faq_title_2: "Questions",
    faq_sub: "Everything you need to know before starting your transformation.",
    faq_q1: "What about health insurance coverage?",
    faq_a1: "Many private health insurance plans in Germany cover physiotherapy treatments. We provide detailed invoices that you can submit to your insurance provider for reimbursement. During your initial consultation, we can discuss your specific coverage and help you understand what expenses may be covered.",
    faq_q2: "How much time does this take daily?",
    faq_a2: "The daily commitment is approximately 15 minutes of prescribed exercises and movement protocols. These are designed to integrate seamlessly into your routine—whether you're at home, in the office, or traveling. Consistency with these short sessions is key to achieving lasting results.",
    faq_q3: "How does the App + Concierge model work?",
    faq_a3: "Upon enrollment, you receive access to a custom video portal featuring your personalized exercise library, progress tracking, and educational content. The Concierge Messaging service provides 24/7 access to Dr. Thorne's team for questions, form checks, and support between sessions. Think of it as having a physiotherapist in your pocket.",
    faq_q4: "Who is this program designed for?",
    faq_a4: "The Catalyst Method is designed for anyone with a body seeking lasting relief and peak performance—elite athletes recovering from injury, professionals dealing with chronic pain from desk work, active individuals wanting to prevent future issues, and anyone who refuses to accept pain as a permanent companion.",
    faq_q5: "What makes this different from traditional physiotherapy?",
    faq_a5: "Traditional therapy often treats symptoms. The Catalyst Method is a comprehensive biomechanical approach that identifies and corrects the root cause of dysfunction. We don't just get you back to baseline—we engineer your body to perform better than before the injury occurred.",

    // Pricing
    pricing_title_1: "Program",
    pricing_title_2: "Investment",
    pricing_sub: "An investment in your health that pays dividends for life.",
    pricing_label: "Complete Program",
    pricing_name: "The 12-Week Catalyst Program",
    pricing_feat_1: "Complete Biomechanical Blueprint",
    pricing_feat_2: "12 Weekly In-Person Sessions",
    pricing_feat_3: "24/7 Concierge Messaging",
    pricing_feat_4: "Custom App Video Portal",
    pricing_feat_5: "Progress Tracking Dashboard",
    pricing_feat_6: "Lifetime Exercise Library Access",
    pricing_cta: "Start Your Transformation",
    pricing_alt_label: "Not ready for the full program?",
    pricing_alt_link: "Initial Diagnostic Assessment – €295",

    // Footer
    footer_headline_1: "Ready for your",
    footer_headline_2: "last first session?",
    footer_cta: "Book Your Session",
    footer_subtitle: "Dr. Aris Thorne · Clinical Physiotherapy",
    footer_location: "Germany · Biomedical Excellence",
    footer_copyright: "The Catalyst Physio. All rights reserved.",

    // Mobile CTA
    mobile_cta: "Start Program",

    // Booking Modal
    booking_title_1: "Book Your",
    booking_title_2: "Session",
    booking_desc: "Fill out the form below and we'll get back to you within 24 hours.",
    booking_name: "Full Name *",
    booking_name_ph: "Your full name",
    booking_email: "Email *",
    booking_email_ph: "your@email.com",
    booking_phone: "Phone Number *",
    booking_phone_ph: "+49 123 456 7890",
    booking_service: "Preferred Service *",
    booking_service_ph: "Select a service",
    booking_service_1: "12-Week Catalyst Program – €2,350",
    booking_service_2: "Initial Diagnostic Assessment – €295",
    booking_message: "Message (Optional)",
    booking_message_ph: "Tell us about your situation...",
    booking_submit: "Submit Inquiry",
    booking_submitting: "Submitting...",
    booking_toast_title: "Thank you!",
    booking_toast_desc: "Dr. Thorne's team will contact you within 24 hours.",

    // Quiz
    quiz_label: "Diagnostic Quiz",
    quiz_title_1: "Is Your Progress",
    quiz_title_2: "Hit-or-Miss?",
    quiz_sub: "Take the 60-second biomechanical health assessment to find out why.",
    quiz_q1: "How often does your pain return after temporary relief?",
    quiz_q1_o1: "Rarely/Never",
    quiz_q1_o2: "Every few months",
    quiz_q1_o3: "Several times a month",
    quiz_q1_o4: "It's constant",
    quiz_q2: "Do you feel like you're 'working around' an injury during exercise?",
    quiz_q2_o1: "No, I move freely",
    quiz_q2_o2: "Sometimes, with heavy loads",
    quiz_q2_o3: "Yes, I often have to modify",
    quiz_q2_o4: "I've stopped most activities",
    quiz_q3: "Has anyone assessed your full biomechanical chain (not just the site of pain)?",
    quiz_q3_o1: "Yes, comprehensive plan in place",
    quiz_q3_o2: "Partially, focus was on the joints",
    quiz_q3_o3: "No, only where it hurts",
    quiz_q3_o4: "Never had an assessment",
    quiz_complete: "Assessment Complete",
    quiz_result_high: "Your biomechanical health shows significant red flags. You are likely stuck in a symptom-management loop.",
    quiz_result_med: "There are clear dysfunctions in your movement chain that will likely lead to future relapses.",
    quiz_result_low: "Your foundation is decent, but there's significant room to optimize for performance and longevity.",
    quiz_cta: "Request Your Blueprint",
    quiz_retake: "Retake Assessment",

    // Methodology
    method_label: "The Methodology",
    method_title_1: "Why We're",
    method_title_2: "Different",
    method_feature: "Features",
    method_traditional: "Traditional",
    method_catalyst: "The Catalyst",
    method_feat1: "Approach",
    method_feat1_trad: "Symptom-focused (where it hurts)",
    method_feat1_cat: "Root-cause (why it hurts)",
    method_feat2: "Plan",
    method_feat2_trad: "Generic exercise templates",
    method_feat2_cat: "Bespoke Biomechanical blueprint",
    method_feat3: "Support",
    method_feat3_trad: "Limited to clinic hours",
    method_feat3_cat: "24/7 Digital Portal & Concierge",
    method_feat4: "Results",
    method_feat4_trad: "Temporary relief / Relapse cycle",
    method_feat4_cat: "Permanent correction / Performance",

    // Problem
    problem_title_1: "Pain isn't a life sentence—it's a",
    problem_title_2: "signal of dysfunction.",
    problem_p1: "Chronic pain that dictates your daily schedule and limits your life.",
    problem_p2: "Traditional 'rehab' that only treats symptoms, leading to relapses.",
    problem_p3: "The frustration of knowing you're capable of more, but your body is holding you back.",
    problem_card_title: "The Cycle Stops Here.",
    problem_card_text: "Most therapy focuses on where it hurts. We focus on why it hurts. By correcting the underlying biomechanical architecture, we don't just fix the pain—we prevent it from ever coming back.",

    // Portal
    portal_label: "The Clinical Command Center",
    portal_title_1: "Your recovery,",
    portal_title_2: "in your pocket.",
    portal_sub: "The Catalyst is more than a clinic—it's a 24/7 digital ecosystem. Access your bespoke biomechanical blueprint and world-class guidance from anywhere in the world.",
    portal_feat_1: "Personalized corrective video database",
    portal_feat_2: "Bio-metric progress dashboard",
    portal_feat_3: "Direct concierge clinical support",
    portal_feat_4: "Available on all your devices",
  },

  de: {
    // Navigation
    nav_logo_prefix: "THE",
    nav_logo_accent: "CATALYST",
    nav_cta: "Programm starten",
    nav_process: "Prozess",
    nav_results: "Ergebnisse",
    nav_pricing: "Preise",
    nav_faq: "FAQ",

    // Hero
    hero_headline_1: "Schluss mit Schmerzmanagement.",
    hero_headline_2: "Starten Sie Ihre Transformation.",
    hero_sub: "Ein 12-wöchiger biomechanischer Plan, entwickelt von Dr. Aris Thorne, um Ihre Höchstleistung zurückzugewinnen.",
    hero_cta: "Erstberatung buchen",

    // Specialist
    specialist_title_1: "Wer",
    specialist_title_2: "Ihre",
    specialist_title_3: "Heilung begleitet",
    specialist_sub: "Ein revolutionärer Ansatz der biomechanischen Heilung, der über die traditionelle Therapie hinausgeht.",
    specialist_name: 'Dr. Aris „The Catalyst" Thorne',
    specialist_bio: "Mit über einem Jahrzehnt Erfahrung in biomechanischer Physiotherapie hat Dr. Thorne eine einzigartige Methodik entwickelt, die die Ursache von Schmerzen angeht – nicht nur die Symptome. Sein Ansatz kombiniert modernste Diagnostik mit personalisierten Behandlungsprotokollen, die Hunderten von Patienten – von Spitzensportlern bis hin zu Alltagsmenschen – geholfen haben, dauerhafte Genesung und Höchstleistung zu erreichen.",
    specialist_quote: "\"Genesung bedeutet nicht nur, auf Null zurückzukommen; es geht darum, Ihren vorherigen Höchststand zu übertreffen.\"",
    specialist_cred_1: "Klinischer Physiotherapeut",
    specialist_cred_2: "Deutschland",
    specialist_cred_3: "Biomedizinischer Ansatz",

    // Results Summary
    results_stat_1: "75%",
    results_stat_1_label: "Verbesserte Mobilität",
    results_stat_2: "92%",
    results_stat_2_label: "Schmerzfrei-Quote",
    results_stat_3: "125+",
    results_stat_3_label: "Behandelte Profisportler",

    // Roadmap
    roadmap_title_1: "Der 3-Phasen",
    roadmap_title_2: "Fahrplan",
    roadmap_sub: "Eine strukturierte 12-wöchige Reise, die Sie von Schmerz zu Höchstleistung führt.",
    roadmap_phase1_label: "Phase 1",
    roadmap_phase1_title: "ZÜNDEN",
    roadmap_phase1_subtitle: "Linderung & Entzündungskontrolle",
    roadmap_phase1_desc: "Sofortige Schmerzlinderung durch gezielte Interventionen. Wir identifizieren die Ursache und beseitigen akute Entzündungen, um Ihren Körper auf den Wiederaufbau vorzubereiten.",
    roadmap_phase2_label: "Phase 2",
    roadmap_phase2_title: "AUFBAUEN",
    roadmap_phase2_subtitle: "Funktionelle Mobilität & Kraft",
    roadmap_phase2_desc: "Stellen Sie die natürlichen Bewegungsmuster Ihres Körpers wieder her. Progressive Übungen zum Kraftaufbau bei gleichzeitiger Korrektur biomechanischer Dysbalancen.",
    roadmap_phase3_label: "Phase 3",
    roadmap_phase3_title: "ERHALTEN",
    roadmap_phase3_subtitle: "Leistung & Verletzungsprävention",
    roadmap_phase3_desc: "Sichern Sie Ihre Fortschritte mit fortgeschrittenen Protokollen. Bauen Sie Belastbarkeit und Leistungskapazität auf, die zukünftige Verletzungen verhindert.",

    // Case Studies
    cases_title_1: "Echte",
    cases_title_2: "Transformationen",
    cases_sub: "Erfolgsgeschichten von Patienten, die ihr Leben durch die Catalyst-Methode zurückgewonnen haben.",
    cases_verified: "Verifizierter Patient",
    cases_mobility: "Mobilität wiederhergestellt",
    cases_quote_1: "Nach Jahren chronischer Rückenschmerzen trainiere ich jetzt härter als je zuvor. Dr. Thornes Methode hat mein Leben verändert.",
    cases_quote_2: "Profifußballer, Kreuzband-Reha. In Rekordzeit zurück auf dem Platz mit besserer Leistung als zuvor.",
    cases_quote_3: "Mit 62 dachte ich, meine Wandertage seien vorbei. Jetzt habe ich dieses Jahr drei Bergwanderungen absolviert.",

    // FAQ
    faq_title_1: "Häufig gestellte",
    faq_title_2: "Fragen",
    faq_sub: "Alles, was Sie wissen müssen, bevor Sie Ihre Transformation beginnen.",
    faq_q1: "Was ist mit der Krankenversicherung?",
    faq_a1: "Viele private Krankenversicherungen in Deutschland übernehmen physiotherapeutische Behandlungen. Wir stellen detaillierte Rechnungen aus, die Sie bei Ihrem Versicherer zur Erstattung einreichen können. Bei Ihrem Erstgespräch besprechen wir Ihre spezifische Deckung.",
    faq_q2: "Wie viel Zeit braucht das täglich?",
    faq_a2: "Der tägliche Aufwand beträgt etwa 15 Minuten verordneter Übungen und Bewegungsprotokolle. Diese sind so gestaltet, dass sie sich nahtlos in Ihren Alltag integrieren – ob zu Hause, im Büro oder auf Reisen.",
    faq_q3: "Wie funktioniert das App + Concierge-Modell?",
    faq_a3: "Nach der Anmeldung erhalten Sie Zugang zu einem individuellen Videoportal mit Ihrer personalisierten Übungsbibliothek, Fortschrittsverfolgung und Schulungsinhalten. Der Concierge-Messaging-Service bietet 24/7-Zugang zu Dr. Thornes Team für Fragen und Unterstützung.",
    faq_q4: "Für wen ist dieses Programm konzipiert?",
    faq_a4: "Die Catalyst-Methode richtet sich an alle, die dauerhafte Linderung und Höchstleistung suchen – Spitzensportler, Berufstätige mit chronischen Schmerzen, aktive Menschen zur Prävention und alle, die Schmerz nicht als Dauerzustand akzeptieren.",
    faq_q5: "Was unterscheidet dies von traditioneller Physiotherapie?",
    faq_a5: "Traditionelle Therapie behandelt oft nur Symptome. Die Catalyst-Methode ist ein umfassender biomechanischer Ansatz, der die Ursache der Dysfunktion identifiziert und korrigiert. Wir bringen Sie nicht nur zur Ausgangslage zurück – wir optimieren Ihren Körper über das Niveau vor der Verletzung hinaus.",

    // Pricing
    pricing_title_1: "Programm-",
    pricing_title_2: "Investition",
    pricing_sub: "Eine Investition in Ihre Gesundheit, die sich ein Leben lang auszahlt.",
    pricing_label: "Komplettes Programm",
    pricing_name: "Das 12-Wochen Catalyst Programm",
    pricing_feat_1: "Kompletter biomechanischer Bauplan",
    pricing_feat_2: "12 wöchentliche Präsenzsitzungen",
    pricing_feat_3: "24/7 Concierge-Messaging",
    pricing_feat_4: "Individuelles App-Videoportal",
    pricing_feat_5: "Fortschrittsverfolgung-Dashboard",
    pricing_feat_6: "Lebenslanger Zugang zur Übungsbibliothek",
    pricing_cta: "Transformation starten",
    pricing_alt_label: "Noch nicht bereit für das volle Programm?",
    pricing_alt_link: "Erstdiagnostik – €295",

    // Footer
    footer_headline_1: "Bereit für Ihre",
    footer_headline_2: "letzte erste Sitzung?",
    footer_cta: "Sitzung buchen",
    footer_subtitle: "Dr. Aris Thorne · Klinische Physiotherapie",
    footer_location: "Deutschland · Biomedizinische Exzellenz",
    footer_copyright: "The Catalyst Physio. Alle Rechte vorbehalten.",

    // Mobile CTA
    mobile_cta: "Programm starten",

    // Booking Modal
    booking_title_1: "Buchen Sie Ihre",
    booking_title_2: "Sitzung",
    booking_desc: "Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.",
    booking_name: "Vollständiger Name *",
    booking_name_ph: "Ihr vollständiger Name",
    booking_email: "E-Mail *",
    booking_email_ph: "ihre@email.com",
    booking_phone: "Telefonnummer *",
    booking_phone_ph: "+49 123 456 7890",
    booking_service: "Bevorzugte Leistung *",
    booking_service_ph: "Leistung auswählen",
    booking_service_1: "12-Wochen Catalyst Programm – €2.350",
    booking_service_2: "Erstdiagnostik – €295",
    booking_message: "Nachricht (Optional)",
    booking_message_ph: "Erzählen Sie uns von Ihrer Situation...",
    booking_submit: "Anfrage senden",
    booking_submitting: "Wird gesendet...",
    booking_toast_title: "Vielen Dank!",
    booking_toast_desc: "Dr. Thornes Team wird Sie innerhalb von 24 Stunden kontaktieren.",

    // Quiz
    quiz_label: "Diagnostik-Quiz",
    quiz_title_1: "Sind Ihre Fortschritte",
    quiz_title_2: "Glückssache?",
    quiz_sub: "Machen Sie die 60-sekündige biomechanische Gesundheitsbewertung, um herauszufinden, warum.",
    quiz_q1: "Wie oft kehren Ihre Schmerzen nach einer vorübergehenden Linderung zurück?",
    quiz_q1_o1: "Selten/Nie",
    quiz_q1_o2: "Alle paar Monate",
    quiz_q1_o3: "Mehrmals im Monat",
    quiz_q1_o4: "Es ist konstant",
    quiz_q2: "Haben Sie das Gefühl, dass Sie beim Sport eine Verletzung 'umgehen'?",
    quiz_q2_o1: "Nein, ich bewege mich frei",
    quiz_q2_o2: "Manchmal, bei schweren Lasten",
    quiz_q2_o3: "Ja, ich muss oft modifizieren",
    quiz_q2_o4: "Ich habe die meisten Aktivitäten eingestellt",
    quiz_q3: "Hat jemand Ihre gesamte biomechanische Kette untersucht (nicht nur die Schmerzstelle)?",
    quiz_q3_o1: "Ja, ein umfassender Plan liegt vor",
    quiz_q3_o2: "Teilweise, der Fokus lag auf den Gelenken",
    quiz_q3_o3: "Nein, nur dort, wo es wehtut",
    quiz_q3_o4: "Habe noch nie eine Untersuchung gehabt",
    quiz_complete: "Untersuchung abgeschlossen",
    quiz_result_high: "Ihre biomechanische Gesundheit zeigt deutliche Warnsignale. Sie stecken wahrscheinlich in einer Symptommanagement-Schleife fest.",
    quiz_result_med: "Es gibt deutliche Funktionsstörungen in Ihrer Bewegungskette, die wahrscheinlich zu künftigen Rückfällen führen werden.",
    quiz_result_low: "Ihre Basis ist anständig, aber es gibt erheblichen Spielraum zur Optimierung von Leistung und Langlebigkeit.",
    quiz_cta: "Plan anfordern",
    quiz_retake: "Test wiederholen",

    // Methodology
    method_label: "Die Methodik",
    method_title_1: "Warum wir",
    method_title_2: "anders sind",
    method_feature: "Merkmale",
    method_traditional: "Traditionell",
    method_catalyst: "The Catalyst",
    method_feat1: "Ansatz",
    method_feat1_trad: "Symptomorientiert (wo es wehtut)",
    method_feat1_cat: "Ursachenorientiert (warum es wehtut)",
    method_feat2: "Plan",
    method_feat2_trad: "Generische Übungsvorlagen",
    method_feat2_cat: "Bespoke Biomechanischer Bauplan",
    method_feat3: "Unterstützung",
    method_feat3_trad: "Limitiert auf Klinikzeiten",
    method_feat3_cat: "24/7 Digitales Portal & Concierge",
    method_feat4: "Ergebnisse",
    method_feat4_trad: "Vorübergehende Linderung / Rückfallzyklus",
    method_feat4_cat: "Permanente Korrektur / Leistung",

    // Problem
    problem_title_1: "Schmerz ist kein Lebensurteil – er ist ein",
    problem_title_2: "Signal für eine Funktionsstörung.",
    problem_p1: "Chronische Schmerzen, die Ihren Tagesablauf diktieren und Ihr Leben einschränken.",
    problem_p2: "Traditionelle 'Reha', die nur Symptome behandelt und zu Rückfällen führt.",
    problem_p3: "Der Frust zu wissen, dass man zu mehr fähig ist, aber der eigene Körper einen zurückhält.",
    problem_card_title: "Der Kreislauf endet hier.",
    problem_card_text: "Die meisten Therapien konzentrieren sich darauf, wo es wehtut. Wir konzentrieren uns darauf, warum es wehtut. Durch die Korrektur der zugrunde liegenden biomechanischen Architektur beheben wir nicht nur den Schmerz – wir verhindern, dass er jemals wiederkommt.",

    // Portal
    portal_label: "Das klinische Kontrollzentrum",
    portal_title_1: "Ihre Genesung,",
    portal_title_2: "in Ihrer Tasche.",
    portal_sub: "The Catalyst ist mehr als eine Klinik – es ist ein digitales 24/7-Ökosystem. Greifen Sie von überall auf der Welt auf Ihren maßgeschneiderten biomechanischen Plan und erstklassige Beratung zu.",
    portal_feat_1: "Personalisierte korrigierende Videodatenbank",
    portal_feat_2: "Biometrisches Fortschritts-Dashboard",
    portal_feat_3: "Direkter Concierge-Support",
    portal_feat_4: "Verfügbar auf all Ihren Geräten",
  },

} as const;

type TranslationKey = keyof typeof translations.en;


interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
