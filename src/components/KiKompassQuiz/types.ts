export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  // Punkte je Antwort (0 bis 5)
  weights?: { [key: number]: number };
}

export interface Answer {
  questionId: number;
  selectedIndex: number;
  points: number;
}

export type Stage = 1 | 2 | 3 | 4 | 5;
