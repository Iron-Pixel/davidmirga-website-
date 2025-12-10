export enum QuizMode {
  MENU = 'MENU',
  // Status Test (B2B Qualification)
  STATUS_INTRO = 'STATUS_INTRO',
  STATUS = 'STATUS',
  
  // General Training
  TRAINING_SETUP = 'TRAINING_SETUP',
  TRAINING = 'TRAINING',
  
  // General Challenge
  CHALLENGE_INTRO = 'CHALLENGE_INTRO',
  CHALLENGE = 'CHALLENGE',
  
  // AI Act Special
  AIACT_LEARNING = 'AIACT_LEARNING',
  AIACT_CHALLENGE = 'AIACT_CHALLENGE',
  
  RESULTS = 'RESULTS'
}

export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number; // For knowledge questions
  explanation: string;
  // For Status Test (Behavioral)
  weights?: { [key: number]: number }; // Maps index to points (0-5)
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  mode: QuizMode;
  userAnswers: { questionId: number; selectedIndex: number; correct: boolean }[];
  fitnessLevel?: FitnessLevel;
  feedback?: string;
}

export enum FitnessLevel {
  NOVICE = 1, // KI-Neuling
  USER = 2, // Anwender
  PROFESSIONAL = 3, // Fortgeschritten
  EXPERT = 4, // Experte/Compliance
  STRATEGIST = 5 // KI-Stratege/Orchestrator
}

export const TOPICS = [
  { id: 'basics', label: 'Grundlagen & Mindset', icon: 'Brain' },
  { id: 'prompting', label: 'Prompting & Strategie', icon: 'MessageSquare' },
  { id: 'tools', label: 'Tools & Workflow', icon: 'Wrench' },
  { id: 'law', label: 'Recht & AI Act', icon: 'Scale' },
  { id: 'security', label: 'Security & Deepfakes', icon: 'ShieldAlert' },
  { id: 'ethics', label: 'Ethik & Verantwortung', icon: 'HeartHandshake' },
  { id: 'robotics', label: 'Robotik & Automation', icon: 'Bot' },
  { id: 'management', label: 'Orchestrierung & Führung', icon: 'Briefcase' },
];