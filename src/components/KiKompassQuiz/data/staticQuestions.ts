import type { Question } from "../types";

// =============================================================================
// 1. KI STATUS TEST (Reifegrad-Analyse)
// =============================================================================
// Ziel: Psychologische Einstufung des Unternehmens.
// Skala: 0 Punkte (Gar nichts) bis 5 Punkte (Perfekte Strategie).
// Gesamt: 15 Fragen -> Max 75 Punkte.
// =============================================================================

export const STATUS_QUESTIONS: Question[] = [
  // --- BLOCK A: STRATEGIE & MANAGEMENT ---
  {
    id: 1,
    category: "Strategie",
    question: "Existiert in deinem Unternehmen eine schriftlich fixierte KI-Strategie?",
    options: [
      "Nein, wir experimentieren ohne Plan.",
      "Es gibt erste Ideen in einzelnen Abteilungen.",
      "Wir haben Leitlinien für Tools, aber keine Roadmap.",
      "Ja, mit klaren Zielen, Budget und Zeitplan."
    ],
    correctIndex: 3, 
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "Ohne Roadmap bleibt KI Spielerei. Erfolgreiche Unternehmen definieren klare Use-Cases und Budgets."
  },
  {
    id: 2,
    category: "Budget",
    question: "Wie wird KI aktuell budgetiert?",
    options: [
      "Gar nicht / Kostet ja fast nichts.",
      "Wir nutzen Budgets aus anderen IT-Töpfen.",
      "Es gibt ein explizites Innovations-Budget für KI.",
      "KI ist als Investition (CAPEX) mit ROI-Erwartung fest eingeplant."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 2, 2: 4, 3: 5 },
    explanation: "Wer KI als 'Kostenstelle' sieht, verpasst den Hebel. Wer es als Investition sieht, misst den Ertrag."
  },
  {
    id: 3,
    category: "Orchestrierung",
    question: "Wer verantwortet das Thema KI im Unternehmen?",
    options: [
      "Niemand offiziell / Jeder macht seins.",
      "Die IT-Abteilung (nebenbei).",
      "Eine Taskforce aus verschiedenen Abteilungen.",
      "Ein dedizierter 'Head of AI' oder KI-Orchestrator."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 2, 2: 4, 3: 5 },
    explanation: "KI ist kein reines IT-Thema. Es braucht einen Orchestrator, der Technik, Recht und HR verbindet."
  },

  // --- BLOCK B: TECHNOLOGIE & DATEN ---
  {
    id: 4,
    category: "Tools",
    question: "Welchen Zugang zu KI-Modellen haben Mitarbeiter?",
    options: [
      "Private Accounts (ChatGPT Free).",
      "Verbot von KI-Tools.",
      "Einige kostenpflichtige Accounts (Plus).",
      "Zentrale Enterprise-Lösung (Datenschutzkonform, SSO)."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "Kostenlose Accounts sind oft Datenschutz-Albtraum. Enterprise-Lösungen verhindern, dass Firmendaten zum Training genutzt werden."
  },
  {
    id: 5,
    category: "Daten",
    question: "Wie gelangen Firmendaten in die KI?",
    options: [
      "Copy-Paste in den Chat.",
      "Wir nutzen Pseudonymisierung.",
      "Upload von Dokumenten (RAG) in geschützte Umgebung.",
      "Vollintegration via API in unsere Datenbanken."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 2, 2: 4, 3: 5 },
    explanation: "Copy-Paste ist ineffizient und riskant. APIs und RAG (Retrieval Augmented Generation) sind der Goldstandard."
  },
  {
    id: 6,
    category: "Automation",
    question: "Wie tief ist KI in die Wertschöpfung integriert?",
    options: [
      "Nur zur Inspiration / Texten.",
      "Punktuelle Unterstützung (z.B. Coding, Bilder).",
      "Teilautomatisierte Prozesse (z.B. Kundenservice-Vorfilter).",
      "Vollautomatisierte Kernprozesse (End-to-End)."
    ],
    correctIndex: 3,
    weights: { 0: 1, 1: 2, 2: 4, 3: 5 },
    explanation: "Der echte ROI liegt in der Prozess-Automation, nicht nur in der Content-Erstellung."
  },

  // --- BLOCK C: RECHT & SICHERHEIT ---
  {
    id: 7,
    category: "Compliance",
    question: "Wie bereitet ihr euch auf den EU AI Act vor?",
    options: [
      "Gar nicht / Was ist das?",
      "Wir warten ab.",
      "Bestandsaufnahme der Systeme läuft.",
      "Compliance-Check und Mitarbeiterschulung (Art. 4) sind erfolgt."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "Unwissenheit schützt nicht vor Strafe. Die KI-Kompetenzpflicht gilt ab Februar 2025."
  },
  {
    id: 8,
    category: "Security",
    question: "Gibt es Richtlinien für sensible Daten in Prompts?",
    options: [
      "Nein, wir vertrauen den Mitarbeitern.",
      "Mündliche Absprachen.",
      "Schriftliche Policy (Do's & Don'ts).",
      "Technische Filter (DLP) und strenge Zugriffsrechte."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "Der Faktor Mensch ist das größte Risiko. Technische Hürden sind sicherer als reine Vorschriften."
  },
  {
    id: 9,
    category: "Urheberrecht",
    question: "Wie geht ihr mit dem Output der KI um?",
    options: [
      "Wir nutzen ihn 1:1.",
      "Wir prüfen grob auf Fehler.",
      "Wir kennzeichnen KI-Inhalte intern.",
      "Human-in-the-Loop Prozess & Kennzeichnungspflicht etabliert."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "KI-Inhalte sind oft nicht urheberrechtlich schützbar und können Fehler enthalten. Kontrolle ist Pflicht."
  },

  // --- BLOCK D: MENSCH & KULTUR ---
  {
    id: 10,
    category: "Skills",
    question: "Wie fit sind die Mitarbeiter im Prompting?",
    options: [
      "Keine Ahnung / Autodidakten.",
      "Einmaliges Webinar gehabt.",
      "Regelmäßige Trainings und Workshops.",
      "Zertifizierte Weiterbildung und Prompt-Bibliotheken."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 2, 2: 4, 3: 5 },
    explanation: "Prompting ist die neue Alphabetisierung. Ohne Skill-Aufbau bleiben die Ergebnisse der KI mittelmäßig."
  },
  {
    id: 11,
    category: "Akzeptanz",
    question: "Wie ist die Stimmung im Team gegenüber KI?",
    options: [
      "Angst vor Jobverlust / Ablehnung.",
      "Skeptische Zurückhaltung.",
      "Neugierde überwiegt.",
      "Begeisterung und proaktives Einfordern von Tools."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 2, 2: 3, 3: 5 },
    explanation: "Technologie ist einfach, Change Management ist schwer. Ängste müssen aktiv gemanagt werden."
  },
  {
    id: 12,
    category: "Fehlerkultur",
    question: "Was passiert bei KI-Fehlern (Halluzinationen)?",
    options: [
      "Fallen erst beim Kunden auf.",
      "Mitarbeiter wird verantwortlich gemacht.",
      "Fehler werden gemeldet und analysiert.",
      "Systematische Evaluation (Red-Teaming) vor Rollout."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "Man muss davon ausgehen, dass die KI lügt. Prozesse müssen robust gegen Fehler gebaut sein."
  },

  // --- BLOCK E: ZUKUNFT ---
  {
    id: 13,
    category: "Wettbewerb",
    question: "Nutzt eure Konkurrenz KI?",
    options: [
      "Wissen wir nicht.",
      "Nein, die Branche ist konservativ.",
      "Ja, erste Gehversuche.",
      "Ja, massiv – wir müssen aufholen / vorlegen."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "Der Wettbewerbsvorteil durch KI schmilzt schnell. Geschwindigkeit ist jetzt entscheidend."
  },
  {
    id: 14,
    category: "Produkt",
    question: "Verändert KI euer Produkt / Dienstleistung?",
    options: [
      "Nein, wir nutzen es nur intern für E-Mails.",
      "Wir machen Marketing damit.",
      "Wir ergänzen unsere Produkte um KI-Features.",
      "Wir entwickeln komplett neue Geschäftsmodelle dank KI."
    ],
    correctIndex: 3,
    weights: { 0: 1, 1: 2, 2: 4, 3: 5 },
    explanation: "Interne Effizienz ist gut. Neue, skalierbare Produkte sind besser."
  },
  {
    id: 15,
    category: "Ethik",
    question: "Prüft ihr KI-Entscheidungen auf Bias (Vorurteile)?",
    options: [
      "Nicht relevant für uns.",
      "Wir hoffen, das Modell ist fair.",
      "Stichprobenartige Kontrolle.",
      "Feste Richtlinien für Fairness und Nicht-Diskriminierung."
    ],
    correctIndex: 3,
    weights: { 0: 0, 1: 1, 2: 3, 3: 5 },
    explanation: "KI verstärkt gesellschaftliche Vorurteile in den Trainingsdaten. Unternehmen haften für diskriminierende Ergebnisse."
  }
];

// =============================================================================
// 2. AI ACT SPEZIAL (Rechtssicherheit)
// =============================================================================
// Ziel: Prüfung auf harte Fakten zum EU AI Act.
// Keine Gewichtung, nur Richtig/Falsch.
// =============================================================================

export const AIACT_QUESTIONS: Question[] = [
  {
    id: 201,
    category: "Verbotene Praktiken",
    question: "Welche Anwendung ist nach dem EU AI Act strikt VERBOTEN?",
    options: [
      "KI zur Bewertung der Kreditwürdigkeit.",
      "Social Scoring durch Behörden & Biometrische Echtzeit-Überwachung (mit Ausnahmen).",
      "Chatbots, die sich als Menschen ausgeben.",
      "Deepfakes von Politikern."
    ],
    correctIndex: 1,
    explanation: "Social Scoring (wie in China) und biometrische Massenüberwachung verletzen Grundrechte und sind verboten (Art. 5)."
  },
  {
    id: 202,
    category: "Hochrisiko",
    question: "Was zählt als 'Hochrisiko-KI-System'?",
    options: [
      "Videospiele mit KI-Gegnern.",
      "Spam-Filter.",
      "Systeme zur Auswahl von Bewerbern (HR) oder zur Bewertung der Kreditwürdigkeit.",
      "Bildgeneratoren wie Midjourney."
    ],
    correctIndex: 2,
    explanation: "Hochrisiko-Systeme (Anhang III) greifen massiv in Lebenschancen ein (Job, Kredit, Bildung, Gesundheit) und sind streng reguliert."
  },
  {
    id: 203,
    category: "Transparenz",
    question: "Was müssen Betreiber von Chatbots & Emotionserkennung tun?",
    options: [
      "Die Algorithmen offenlegen.",
      "Nichts, wenn sie unter 50 Mitarbeiter haben.",
      "Offenlegen, dass der Nutzer mit einer KI interagiert (Transparenzpflicht).",
      "Eine Gebühr an die EU zahlen."
    ],
    correctIndex: 2,
    explanation: "Nutzer müssen wissen, wenn sie mit einer Maschine sprechen (Art. 50). Das gilt auch für Deepfakes."
  },
  {
    id: 204,
    category: "Kompetenz",
    question: "Was besagt Artikel 4 des AI Act zur 'KI-Kompetenz'?",
    options: [
      "Dass KI schlau sein muss.",
      "Dass Anbieter und Betreiber sicherstellen müssen, dass ihr Personal über ausreichende KI-Kompetenz verfügt.",
      "Dass nur Informatiker KI nutzen dürfen.",
      "Dass KI-Modelle einen Test bestehen müssen."
    ],
    correctIndex: 1,
    explanation: "Das ist die wichtigste Regel für alle Unternehmen: Wer KI nutzt, muss seine Mitarbeiter schulen!"
  },
  {
    id: 205,
    category: "GPAI",
    question: "Was sind 'Modelle mit allgemeinem Verwendungszweck' (GPAI)?",
    options: [
      "Spezial-KIs für Medizin.",
      "Leistungsstarke Basismodelle wie GPT-4, die für viele verschiedene Aufgaben genutzt werden können.",
      "Kleine Open-Source Modelle.",
      "Excel-Makros."
    ],
    correctIndex: 1,
    explanation: "GPAI (General Purpose AI) Modelle haben besondere Pflichten, besonders wenn sie systemische Risiken bergen."
  },
  {
    id: 206,
    category: "Bußgelder",
    question: "Wie hoch ist die maximale Strafe bei Verstoß gegen verbotene Praktiken?",
    options: [
      "100.000 Euro.",
      "2% des Umsatzes.",
      "Bis zu 35 Mio. Euro oder 7% des weltweiten Jahresumsatzes.",
      "Es gibt nur Verwarnungen."
    ],
    correctIndex: 2,
    explanation: "Die Strafen sind bewusst extrem hoch angesetzt, um Abschreckung zu garantieren (höher als bei der DSGVO)."
  },
  {
    id: 207,
    category: "Urheberrecht",
    question: "Was müssen Anbieter von GPAI-Modellen bezüglich Urheberrecht tun?",
    options: [
      "Alle Künstler bezahlen.",
      "Eine Zusammenfassung der für das Training verwendeten Inhalte veröffentlichen.",
      "Nur Public Domain Daten nutzen.",
      "Nichts, KI ist rechtsfreier Raum."
    ],
    correctIndex: 1,
    explanation: "Transparenz über Trainingsdaten ist Pflicht, damit Urheber ihre Rechte geltend machen können."
  },
  {
    id: 208,
    category: "Deepfakes",
    question: "Wie müssen künstlich erzeugte Bild/Ton/Video-Inhalte (Deepfakes) behandelt werden?",
    options: [
      "Sie sind verboten.",
      "Sie müssen maschinenlesbar und sichtbar als künstlich erzeugt gekennzeichnet werden.",
      "Nur bei politischem Inhalt kennzeichnen.",
      "Man darf sie nur privat nutzen."
    ],
    correctIndex: 1,
    explanation: "Die Kennzeichnungspflicht soll Desinformation verhindern. Wasserzeichen und Metadaten werden Standard."
  },
  {
    id: 209,
    category: "Fristen",
    question: "Wann treten die Verbote für 'inakzeptable Risiken' in Kraft?",
    options: [
      "Erst 2030.",
      "Sofort bei Veröffentlichung.",
      "6 Monate nach Inkrafttreten (also ca. Ende 2024 / Anfang 2025).",
      "Nach 2 Jahren."
    ],
    correctIndex: 2,
    explanation: "Die Verbote greifen als erstes (nach 6 Monaten). Der Rest folgt gestaffelt (12 bis 36 Monate)."
  },
  {
    id: 210,
    category: "Sandboxes",
    question: "Was sind 'Reallabore' (Regulatory Sandboxes)?",
    options: [
      "Spielplätze für KI-Roboter.",
      "Kontrollierte Umgebungen, um innovative KI unter behördlicher Aufsicht zu testen, bevor sie auf den Markt kommt.",
      "Virtuelle Welten im Metaverse.",
      "Bereiche, wo Gesetze nicht gelten."
    ],
    correctIndex: 1,
    explanation: "Die EU will Innovation fördern. Sandboxes erlauben Startups das Testen ohne sofortige volle Bürokratie-Härte."
  },
  {
    id: 211,
    category: "Verantwortung",
    question: "Wer haftet primär, wenn ein Unternehmen (Betreiber) eine Hochrisiko-KI falsch einsetzt?",
    options: [
      "Der US-Hersteller (z.B. OpenAI).",
      "Der einzelne Mitarbeiter.",
      "Das Unternehmen selbst (als 'Deployer').",
      "Der Staat."
    ],
    correctIndex: 2,
    explanation: "Der 'Deployer' (Nutzer) trägt die Verantwortung für den korrekten Einsatz, Datenqualität und menschliche Aufsicht."
  },
  {
    id: 212,
    category: "Emotion",
    question: "Ist Emotionserkennung am Arbeitsplatz erlaubt?",
    options: [
      "Ja, um die Stimmung zu heben.",
      "Ja, aber nur im Vertrieb.",
      "Nein, im Bereich Arbeitsplatz und Bildung ist Emotionserkennung verboten.",
      "Nur mit Zustimmung."
    ],
    correctIndex: 2,
    explanation: "Der AI Act schützt Arbeitnehmer. Der Chef darf nicht per KI überwachen, ob du 'müde' oder 'unzufrieden' aussiehst."
  }
];

// --- 3. DUMMY / FALLBACK FÜR GENERATED ---
// Diese werden nur genutzt, falls die API ausfällt.
export const CHALLENGE_QUESTIONS: Question[] = [
  {
    id: 999,
    category: "Fallback",
    question: "Die KI-Verbindung ist unterbrochen. Was ist RAG?",
    options: ["Retrieval Augmented Generation", "Red AI Green", "Random Access Geometry", "Robot AI Game"],
    correctIndex: 0,
    explanation: "Bitte Internetverbindung prüfen."
  }
];

export const getQuestionsForTopic = (topicId: string): Question[] => {
  if (topicId === 'law' || topicId === 'ethics') return AIACT_QUESTIONS;
  return STATUS_QUESTIONS; 
};