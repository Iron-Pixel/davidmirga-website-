import type { Question } from "../types";

// KI-Check: 10 Fragen zur Selbsteinschätzung, je 0 bis 5 Punkte (max. 50).
// Gestrichen am 27.11. (Dave: 10 Fragen): Budget, Urheberrecht, Wettbewerb, Produkt, Ethik.
// Alle alten Fragen liegen in docs/ARCHIV-KI-CHECK-FRAGEN-2026-11-27.ts (nicht im Git).

export const STATUS_QUESTIONS: Question[] = [
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
    id: 3,
    category: "Verantwortung",
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
  }
];
