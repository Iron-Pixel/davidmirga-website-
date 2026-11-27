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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Ausprobieren ist ein guter Anfang. Wenn ihr festhaltet, wofür ihr KI nutzen wollt, wird daraus mehr als Zufall.",
      "Ideen gibt es schon. Bringt sie an einen Tisch, damit nicht jede Abteilung für sich allein anfängt.",
      "Regeln für die Programme sind eine gute Basis. Jetzt fehlt noch der Plan: Was wollt ihr bis wann erreichen?",
      "Sehr gut. Schaut euch den Plan regelmäßig an, denn KI verändert sich schnell.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Wenn jeder seins macht, hat niemand den Überblick. Für den Anfang reicht eine Person, die sich kümmert.",
      "Die IT ist ein guter Anfang. KI betrifft aber auch Datenschutz, Recht und das Team, nicht nur die Technik.",
      "Gut: Verschiedene Abteilungen sehen verschiedene Dinge. Wichtig ist, dass am Ende jemand entscheidet.",
      "Sehr gut. Eine klare Zuständigkeit macht KI im Betrieb planbar.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Hier ist Vorsicht nötig: Bei kostenlosen privaten Konten wisst ihr oft nicht, was mit euren Firmendaten passiert.",
      "Ein Verbot wirkt sicher, aber oft wird KI dann heimlich genutzt. Besser sind erlaubte Programme mit klaren Regeln.",
      "Ein guter Schritt. Prüft in den Einstellungen, ob eure Eingaben zum Training der KI verwendet werden dürfen.",
      "Sehr gut. Mit einer Firmenlösung habt ihr Datenschutz und Zugänge selbst in der Hand.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "So landen schnell vertrauliche Daten in der KI. Eine einfache Regel hilft: Nur eingeben, was auch auf einer Postkarte stehen dürfte.",
      "Gut: Namen und erkennbare Angaben werden vorher ersetzt. Das senkt das Risiko deutlich.",
      "Gut, wenn die Umgebung eure Daten nicht zum Training nutzt. Das sollte schriftlich geklärt sein.",
      "Sehr weit. Wichtig ist dann, genau festzulegen, wer welche Daten sehen darf.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Ein guter Einstieg. Viele merken hier zum ersten Mal, wie viel Zeit KI sparen kann.",
      "Ihr nutzt KI schon gezielt. Schaut, welche Aufgaben sich oft wiederholen, dort bringt KI am meisten.",
      "Gut. Wichtig bleibt: Ein Mensch schaut drüber, bevor etwas beim Kunden ankommt.",
      "Sehr weit. Bei vollautomatischen Abläufen braucht es feste Kontrollen, damit Fehler früh auffallen.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Seit Februar 2025 verlangt der AI Act von Firmen, die KI einsetzen, dass sie sich um das KI-Wissen ihrer Mitarbeiter kümmern.",
      "Abwarten ist riskant: Die Pflicht, für das KI-Wissen der Mitarbeiter zu sorgen, gilt schon seit Februar 2025.",
      "Ein guter Schritt. Wer weiß, welche KI im Betrieb läuft, kann seine Pflichten richtig einschätzen.",
      "Sehr gut. Bleibt dran, denn die Regeln werden laufend genauer ausgearbeitet.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Vertrauen ist gut, aber ohne klare Regeln weiß niemand genau, was erlaubt ist. Schon ein einfaches Blatt mit Regeln hilft.",
      "Ein Anfang. Mündliche Absprachen gehen aber schnell verloren, besonders bei neuen Mitarbeitern.",
      "Gut. Regeln wirken aber nur, wenn alle sie kennen. Erinnert also regelmäßig daran.",
      "Sehr gut. Technik und klare Regeln zusammen schützen am besten.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Viele lernen KI nebenbei. Schon eine kurze Einführung bringt deutlich bessere Ergebnisse.",
      "Ein Anfang. KI ändert sich schnell, darum lohnt es sich, das Wissen aufzufrischen.",
      "Sehr gut. Regelmäßiges Üben ist der beste Weg, sicher mit KI zu arbeiten.",
      "Sehr gut. Eine gemeinsame Sammlung guter Anfragen an die KI spart allen Zeit.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Die Angst ist verständlich. Offen darüber reden und zeigen, was KI kann und was nicht, nimmt viel davon.",
      "Skepsis ist gesund. Kleine Erfolge im Alltag überzeugen mehr als große Versprechen.",
      "Eine gute Voraussetzung. Neugier braucht Zeit zum Ausprobieren und klare Regeln.",
      "Sehr gut. Achtet darauf, dass die Begeisterung nicht an euren Regeln vorbeiläuft.",
    ],
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
    // Hinweis je Antwort (gleiche Reihenfolge wie options), Vorschlag Claude 27.11.
    feedback: [
      "Das ist riskant. KI kann Dinge erfinden, darum gilt: Wichtiges prüfen, bevor es rausgeht.",
      "Dann werden Fehler eher versteckt als gemeldet. Besser ist, offen damit umzugehen und daraus zu lernen.",
      "Gut. So lernt der ganze Betrieb aus jedem Fehler.",
      "Sehr gut. Wer vorher testet, verhindert Fehler, bevor sie beim Kunden ankommen.",
    ],
  }
];
