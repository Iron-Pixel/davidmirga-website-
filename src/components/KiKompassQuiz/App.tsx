import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import QuizSession from './components/QuizSession';
import ResultsView from './components/ResultsView';
import TrainingSetup from './components/TrainingSetup';
import { QuizMode } from './types';
import type { Question } from './types';
import { generateFitnessQuestions, generateChallengeQuestions, generateTrainingQuestions, generateAIActQuestions } from './services/geminiService';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [mode, setMode] = useState<QuizMode>(QuizMode.MENU);
  const [activeQuizMode, setActiveQuizMode] = useState<QuizMode>(QuizMode.TRAINING);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [lastScore, setLastScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastAnswers, setLastAnswers] = useState<any[]>([]);

  const startQuiz = async (targetMode: QuizMode, context: string = "", topicId?: string) => {
    setLoading(true);
    try {
      let qs: Question[] = [];
      
      // STATUS TEST
      if (targetMode === QuizMode.STATUS) {
        qs = await generateFitnessQuestions();
      } 
      // CHALLENGE (General)
      else if (targetMode === QuizMode.CHALLENGE) {
        qs = await generateChallengeQuestions();
      } 
      // TRAINING (General)
      else if (targetMode === QuizMode.TRAINING) {
        qs = await generateTrainingQuestions(context, topicId);
      }
      // AI ACT MODES
      else if (targetMode === QuizMode.AIACT_LEARNING) {
        qs = await generateAIActQuestions();
      }
      else if (targetMode === QuizMode.AIACT_CHALLENGE) {
        qs = await generateAIActQuestions();
      }

      setQuestions(qs);
      setActiveQuizMode(targetMode);
      setMode(targetMode);
    } catch (error) {
      alert("Fehler beim Laden der Fragen. Bitte Seite neu laden.");
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleModeSelection = (selectedMode: QuizMode) => {
    if (selectedMode === QuizMode.STATUS_INTRO) {
      startQuiz(QuizMode.STATUS);
    } else if (selectedMode === QuizMode.CHALLENGE_INTRO) {
      startQuiz(QuizMode.CHALLENGE);
    } else if (selectedMode === QuizMode.TRAINING_SETUP) {
      setMode(QuizMode.TRAINING_SETUP);
    } else if (selectedMode === QuizMode.AIACT_LEARNING) {
      startQuiz(QuizMode.AIACT_LEARNING);
    } else if (selectedMode === QuizMode.AIACT_CHALLENGE) {
      startQuiz(QuizMode.AIACT_CHALLENGE);
    }
  };

  const handleTrainingStart = (context: string, topicId: string) => {
    startQuiz(QuizMode.TRAINING, context, topicId);
  };

  const handleQuizComplete = async (score: number, answers: any[]) => {
    setLastScore(score);
    setLastAnswers(answers);
    setMode(QuizMode.RESULTS);
  };

  return (
    <div className="min-h-screen bg-[#0B1F3F] text-slate-100 flex flex-col font-sans selection:bg-[#DC2626] selection:text-white overflow-x-hidden">
      {/* Background decoration (Subtle Navy Gradient) - Professional & Dark */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#DC2626]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <main className="relative z-10 flex-grow flex flex-col">
        {loading ? (
          <div className="flex-grow flex flex-col items-center justify-center space-y-6">
            <Loader2 className="w-16 h-16 text-[#DC2626] animate-spin" />
            <p className="text-lg text-slate-400 font-medium tracking-wide animate-pulse uppercase">
              Initialisiere System...
            </p>
          </div>
        ) : (
          <>
            {mode === QuizMode.MENU && (
              <MainMenu onSelectMode={handleModeSelection} />
            )}

            {mode === QuizMode.TRAINING_SETUP && (
              <TrainingSetup 
                onStart={handleTrainingStart} 
                onBack={() => setMode(QuizMode.MENU)} 
              />
            )}

            {(mode === QuizMode.STATUS || mode === QuizMode.TRAINING || mode === QuizMode.CHALLENGE || mode === QuizMode.AIACT_LEARNING || mode === QuizMode.AIACT_CHALLENGE) && (
              <QuizSession 
                mode={mode} 
                questions={questions} 
                onComplete={handleQuizComplete}
                onExit={() => setMode(QuizMode.MENU)}
              />
            )}

            {mode === QuizMode.RESULTS && (
              <ResultsView 
                score={lastScore} 
                total={questions.length} 
                mode={activeQuizMode}
                answers={lastAnswers}
                onHome={() => setMode(QuizMode.MENU)}
                onRetry={() => {
                   if (activeQuizMode === QuizMode.TRAINING) {
                      setMode(QuizMode.TRAINING_SETUP);
                   } else {
                      startQuiz(activeQuizMode);
                   }
                }}
              />
            )}
          </>
        )}
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-white/5 mt-auto">
        <p className="text-slate-600 text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} KI Kompass Vienna • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}