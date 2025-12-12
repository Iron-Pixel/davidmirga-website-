
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

// =============================================================================
// 3. EXPERT CHALLENGE (FALLBACK)
// =============================================================================
// Diese Fragen werden genutzt, wenn die KI-Generierung fehlschlägt oder offline ist.
// Sie decken tiefes Expertenwissen ab (Prompting, Tech, Security).
// =============================================================================

export const CHALLENGE_QUESTIONS: Question[] = [
  {
    id: 1001,
    category: "LLM Tech",
    question: "Was ist der Hauptzweck des 'Temperature'-Parameters beim Generieren von Text?",
    options: [
      "Er regelt die Geschwindigkeit der API-Antwort.",
      "Er steuert die 'Zufälligkeit' der Token-Auswahl (0 = deterministisch, 1+ = kreativ).",
      "Er verhindert Überhitzung der GPU im Rechenzentrum.",
      "Er bestimmt die Länge des Context Windows."
    ],
    correctIndex: 1,
    explanation: "Hohe Temperature = mehr Kreativität/Halluzination. Niedrige Temperature = präzise, deterministische Antworten."
  },
  {
    id: 1002,
    category: "Architektur",
    question: "Was ist die Kern-Innovation der Transformer-Architektur (Basis von GPT)?",
    options: [
      "Convolutional Neural Networks (CNNs).",
      "Der 'Self-Attention' Mechanismus, der Beziehungen zwischen Wörtern unabhängig von der Distanz gewichtet.",
      "Reinforcement Learning from Human Feedback (RLHF).",
      "Backpropagation durch die Zeit (BPTT)."
    ],
    correctIndex: 1,
    explanation: "Self-Attention erlaubt dem Modell, den Kontext eines jeden Wortes im Satz zu verstehen, egal wie weit die Wörter auseinander stehen."
  },
  {
    id: 1003,
    category: "Prompting",
    question: "Was versteht man unter 'Chain-of-Thought' (CoT) Prompting?",
    options: [
      "Das Aneinanderketten von mehreren API-Calls.",
      "Eine Technik, bei der das Modell aufgefordert wird, seinen Rechenweg 'Schritt für Schritt' zu erklären.",
      "Das Kopieren von Prompts aus einer Bibliothek.",
      "Eine Blockchain für KI-Prompts."
    ],
    correctIndex: 1,
    explanation: "Durch CoT ('Let's think step by step') verbessert sich die logische Schlussfolgerungsfähigkeit von LLMs massiv."
  },
  {
    id: 1004,
    category: "RAG",
    question: "Wofür steht RAG im Unternehmenskontext?",
    options: [
      "Red Amber Green (Status Reporting).",
      "Retrieval Augmented Generation (Nutzung externer Firmendaten zur Antwortgenerierung).",
      "Real-time Artificial Generation.",
      "Robot Automated Governance."
    ],
    correctIndex: 1,
    explanation: "RAG ist der Standard, um Halluzinationen zu reduzieren und dem Modell Zugriff auf aktuelles, internes Wissen zu geben, ohne es neu zu trainieren."
  },
  {
    id: 1005,
    category: "Security",
    question: "Was ist eine 'Prompt Injection' Attacke?",
    options: [
      "Das Einschleusen von Schadcode in den Server.",
      "Der Versuch, durch manipulierte Eingaben die Sicherheitsrichtlinien des Modells zu umgehen.",
      "Eine SQL-Injection in die Vektordatenbank.",
      "Das schnelle Eintippen von Prompts."
    ],
    correctIndex: 1,
    explanation: "Prompt Injections (z.B. 'Ignore previous instructions') sind die größte Sicherheitslücke bei LLM-Anwendungen."
  },
  {
    id: 1006,
    category: "Training",
    question: "Was ist der Unterschied zwischen 'Pre-Training' und 'Fine-Tuning'?",
    options: [
      "Es gibt keinen.",
      "Pre-Training lehrt Sprache/Wissen (teuer); Fine-Tuning spezialisiert auf Aufgaben (günstiger).",
      "Pre-Training macht der User, Fine-Tuning macht der Anbieter.",
      "Fine-Tuning löscht das Wissen des Modells."
    ],
    correctIndex: 1,
    explanation: "Pre-Training erzeugt das 'Foundation Model' mit Terabytes an Daten. Fine-Tuning (z.B. via RLHF) passt das Verhalten an."
  },
  {
    id: 1007,
    category: "Vektoren",
    question: "Was sind 'Embeddings' in einer Vektordatenbank?",
    options: [
      "HTML-Code zum Einbetten von Videos.",
      "Numerische Repräsentationen von Textbedeutung in einem hochdimensionalen Raum.",
      "Verschlüsselte Passwörter.",
      "Plugins für ChatGPT."
    ],
    correctIndex: 1,
    explanation: "Embeddings verwandeln Text in Zahlenlisten. Texte mit ähnlicher Bedeutung haben mathematisch ähnliche Vektoren (geringe Distanz)."
  },
  {
    id: 1008,
    category: "Limitierungen",
    question: "Was ist ein 'Context Window'?",
    options: [
      "Das Browserfenster der KI.",
      "Die maximale Menge an Text (Tokens), die das Modell im Kurzzeitgedächtnis verarbeiten kann.",
      "Ein Zeitfenster, in dem die KI antwortet.",
      "Der sichtbare Bereich einer Grafikkarte."
    ],
    correctIndex: 1,
    explanation: "Wenn das Context Window voll ist, 'vergisst' das Modell den Anfang des Gesprächs. Moderne Modelle haben bis zu 1 Mio Tokens."
  },
  {
    id: 1009,
    category: "Halluzination",
    question: "Warum 'halluzinieren' LLMs?",
    options: [
      "Weil sie ein Bewusstsein haben.",
      "Weil sie Wahrscheinlichkeitsmaschinen sind, die das nächste Wort raten, ohne Faktenprüfung.",
      "Weil sie aus dem Internet lernen und das Internet lügt.",
      "Das ist ein Software-Bug, der bald behoben wird."
    ],
    correctIndex: 1,
    explanation: "LLMs haben kein Konzept von 'Wahrheit'. Sie optimieren auf plausibel klingende Sätze (Next Token Prediction)."
  },
  {
    id: 1010,
    category: "Agents",
    question: "Was zeichnet einen 'KI-Agenten' gegenüber einem Chatbot aus?",
    options: [
      "Er ist teurer.",
      "Er hat eine Stimme.",
      "Er kann autonom Tools nutzen, Aktionen ausführen und Ziele verfolgen (Reasoning Loop).",
      "Er läuft nur lokal."
    ],
    correctIndex: 2,
    explanation: "Agenten (wie AutoGPT) können selbstständig Aufgaben in Schritte zerlegen und externe Software (Browser, API, Excel) bedienen."
  }
];

export const getQuestionsForTopic = (topicId: string): Question[] => {
  if (topicId === 'law' || topicId === 'ethics') return AIACT_QUESTIONS;
  return STATUS_QUESTIONS; 
};
