import { GoogleGenAI, Type } from "@google/genai";
import type { Schema } from "@google/genai";
import { FitnessLevel, TOPICS } from "../types";
import type { Question } from "../types";
import { STATUS_QUESTIONS, CHALLENGE_QUESTIONS, AIACT_QUESTIONS, getQuestionsForTopic } from "../data/staticQuestions";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: import.meta.env.PUBLIC_GEMINI_API_KEY || '' });
const MODEL_NAME = 'gemini-2.5-flash';

// Define schema for structured JSON output
const questionSchema: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING },
      options: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "Exactly 4 options"
      },
      correctIndex: { type: Type.INTEGER },
      explanation: { type: Type.STRING },
      category: { type: Type.STRING }
    },
    required: ["question", "options", "correctIndex", "explanation", "category"],
  }
};

// --- HELPER: GENERIC FETCH FUNCTION ---
async function fetchQuestionsFromAI(prompt: string, fallback: Question[]): Promise<Question[]> {
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.7,
      }
    });

    const textResult = response.text;
    if (!textResult) throw new Error("Keine Daten von KI erhalten");

    const parsedData = JSON.parse(textResult);

    if (!Array.isArray(parsedData)) throw new Error("Format Fehler: Kein Array");

    // IDs hinzufügen
    return parsedData.map((q: any, index: number) => ({
      ...q,
      id: Date.now() + index,
      // Fallback falls Felder fehlen
      category: q.category || "Allgemein",
      explanation: q.explanation || "Keine Erklärung verfügbar."
    }));

  } catch (error) {
    console.error("Gemini SDK Error:", error);
    return fallback;
  }
}

// --- 1. STATUS TEST (STATIC) ---
export const generateFitnessQuestions = async (): Promise<Question[]> => {
  return STATUS_QUESTIONS;
};

// --- 2. CHALLENGE (DYNAMIC) ---
export const generateChallengeQuestions = async (): Promise<Question[]> => {
  const prompt = `
    Erstelle 15 sehr anspruchsvolle Multiple-Choice-Fragen für KI-Experten.
    
    NIVEAU: EXPERTE / SENIOR CONSULTANT.
    Sprache: Deutsch.
    
    Themen-Mix:
    1. Advanced Prompting (Chain-of-Thought, Tokens).
    2. LLM Technologie (RAG, Fine-Tuning, Vektordatenbanken).
    3. Recht & Compliance (EU AI Act Hochrisiko).
    4. IT-Security (Prompt Injection).
  `;
  return fetchQuestionsFromAI(prompt, CHALLENGE_QUESTIONS);
};

// --- 3. AI ACT (DYNAMIC) ---
export const generateAIActQuestions = async (): Promise<Question[]> => {
  const prompt = `
    Erstelle 12 Prüfungsfragen zum "EU AI Act".
    
    Fokus: Risikoklassen, Pflichten, Bußgelder, Transparenz.
    Zielgruppe: Compliance Officer.
    Sprache: Deutsch.
  `;
  // Fallback zu statischen Fragen, falls API fehlschlägt
  return fetchQuestionsFromAI(prompt, AIACT_QUESTIONS);
};

// --- 4. TRAINING (DYNAMIC) ---
export const generateTrainingQuestions = async (context: string, topicId?: string): Promise<Question[]> => {
  let contentPart = "";
  
  if (context && context.trim().length > 0) {
    contentPart = `Basierend auf diesem Text: "${context.substring(0, 500)}..."`;
  } else {
    const labels: Record<string, string> = {
      prompting: "Prompting Engineering",
      law: "Recht & AI Act",
      tools: "KI Tools & Workflow",
      security: "Security & Deepfakes",
      ethics: "Ethik",
      management: "Management & Strategie",
      basics: "Grundlagen"
    };
    contentPart = `Zum Thema: ${labels[topicId || 'basics'] || 'KI Grundlagen'}`;
  }

  const prompt = `
    Erstelle 10 Lern-Fragen (Multiple Choice) für Mitarbeiter.
    ${contentPart}
    
    Sprache: Deutsch.
  `;

  return fetchQuestionsFromAI(prompt, getQuestionsForTopic('basics'));
};

// --- 5. ANALYSE (STATIC CALCULATION) ---
export const analyzeFitnessResult = async (score: number, total: number, answers: any[]): Promise<{ level: FitnessLevel, text: string }> => {
  // Berechnung bleibt gleich
  let weightedScore = 0;
  let maxPossible = 0;
  
  const isWeighted = answers.some(a => a.points !== undefined);
  
  if (isWeighted) {
      answers.forEach(a => {
          weightedScore += (a.points || 0);
          maxPossible += 5; 
      });
  } else {
      weightedScore = score;
      maxPossible = total;
  }

  const percentage = maxPossible > 0 ? (weightedScore / maxPossible) * 100 : 0;
  
  let calculatedLevel = FitnessLevel.NOVICE;
  if (percentage >= 85) calculatedLevel = FitnessLevel.STRATEGIST; 
  else if (percentage >= 65) calculatedLevel = FitnessLevel.EXPERT;
  else if (percentage >= 45) calculatedLevel = FitnessLevel.PROFESSIONAL;
  else if (percentage >= 25) calculatedLevel = FitnessLevel.USER;

  const feedbacks = {
      [FitnessLevel.NOVICE]: "Status: KI-Neuling. Empfehlung: Starte mit Grundlagen.",
      [FitnessLevel.USER]: "Status: Anwender. Empfehlung: Identifiziere Workflows.",
      [FitnessLevel.PROFESSIONAL]: "Status: Fortgeschritten. Fokus jetzt: AI Act.",
      [FitnessLevel.EXPERT]: "Status: KI-Experte. Nächster Schritt: Orchestrierung.",
      [FitnessLevel.STRATEGIST]: "Status: KI-Stratege. Exzellent."
  };

  return {
      level: calculatedLevel,
      text: feedbacks[calculatedLevel]
  };
};