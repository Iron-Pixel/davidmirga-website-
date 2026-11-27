import React, { useState } from 'react';
import QuizSession from './components/QuizSession';
import ResultsView from './components/ResultsView';
import { STATUS_QUESTIONS } from './data/statusQuestions';
import type { Answer } from './types';

type View = 'start' | 'quiz' | 'result';

const MAX_POINTS = STATUS_QUESTIONS.length * 5;

export default function App() {
  const [view, setView] = useState<View>('start');
  const [answers, setAnswers] = useState<Answer[]>([]);

  const scrollToTop = () => {
    document.getElementById('ki-check-app')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const start = () => {
    setAnswers([]);
    setView('quiz');
    scrollToTop();
  };

  const finish = (result: Answer[]) => {
    setAnswers(result);
    setView('result');
    scrollToTop();
  };

  return (
    <div id="ki-check-app" className="scroll-mt-24 text-[#1F3B3A]">
      {view === 'start' && (
        <div className="bg-[#F2EFE7] rounded-3xl px-6 md:px-14 py-10 md:py-14 text-center">
          <p className="text-lg font-semibold text-[#B4562F] mb-3">
            {STATUS_QUESTIONS.length} Fragen · ca. 2 Minuten
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#245556] mb-5">
            Wo steht dein Unternehmen bei KI?
          </h2>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-[#1F3B3A]">
            Du beantwortest 10 Fragen zu Strategie, Daten, Sicherheit und Team. Am Ende siehst du, auf welcher von fünf Stufen dein Unternehmen steht und was ein sinnvoller nächster Schritt ist. Ohne Anmeldung.
          </p>
          <button
            onClick={start}
            data-umami-event="KI-Check Start"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#B4562F] text-white text-lg font-semibold rounded-xl hover:bg-[#94451F] transition-colors"
          >
            Check starten <span aria-hidden="true">→</span>
          </button>
        </div>
      )}

      {view === 'quiz' && (
        <QuizSession
          questions={STATUS_QUESTIONS}
          onComplete={finish}
          onExit={() => { setView('start'); scrollToTop(); }}
        />
      )}

      {view === 'result' && (
        <ResultsView answers={answers} maxPoints={MAX_POINTS} onRetry={start} />
      )}
    </div>
  );
}
