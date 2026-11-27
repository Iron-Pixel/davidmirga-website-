import React, { useState } from 'react';
import type { Answer, Question } from '../types';

interface QuizSessionProps {
  questions: Question[];
  onComplete: (answers: Answer[]) => void;
  onExit: () => void;
}

const QuizSession: React.FC<QuizSessionProps> = ({ questions, onComplete, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const question = questions[currentIndex];
  if (!question) return null;

  const isAnswered = selected !== null;
  const isLast = currentIndex === questions.length - 1;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const choose = (index: number) => {
    if (isAnswered) return;
    setSelected(index);
    setAnswers(prev => [
      ...prev,
      { questionId: question.id, selectedIndex: index, points: question.weights?.[index] ?? 0 },
    ]);
  };

  const next = () => {
    if (isLast) {
      onComplete(answers);
      return;
    }
    setCurrentIndex(i => i + 1);
    setSelected(null);
    // Zur neuen Frage nach oben springen, sonst bleibt man unten beim Knopf stehen
    document.getElementById('ki-check-app')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Kopf: Thema und Fortschritt */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-4 text-base">
        <span className="px-3 py-1 rounded-full bg-[#F2EFE7] text-[#245556] font-semibold">
          {question.category}
        </span>
        <span className="text-[#6B7A78] font-medium">
          Frage {currentIndex + 1} von {questions.length}
        </span>
      </div>
      <div className="w-full bg-[#F2EFE7] h-2 rounded-full mb-8 overflow-hidden" aria-hidden="true">
        <div className="bg-[#B4562F] h-full rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      {/* Frage */}
      <div className="bg-white rounded-2xl border border-[#245556]/15 p-6 md:p-10 mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-[#245556] leading-snug mb-8">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            let cls = 'w-full text-left px-5 py-4 rounded-xl border-2 text-lg transition-colors ';
            if (!isAnswered) {
              cls += 'border-[#245556]/20 bg-white hover:border-[#B4562F] hover:bg-[#F2EFE7]';
            } else if (idx === selected) {
              cls += 'border-[#B4562F] bg-[#F2EFE7] font-semibold';
            } else {
              cls += 'border-transparent bg-white text-[#6B7A78]';
            }
            return (
              <button key={idx} onClick={() => choose(idx)} disabled={isAnswered} className={cls}>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered ? (
        <div className="space-y-6">
          <div className="bg-[#F2EFE7] border-l-4 border-[#245556] rounded-r-xl p-6">
            <p className="font-semibold text-[#245556] text-lg mb-2">Hinweis</p>
            <p className="text-lg leading-relaxed">{question.feedback[selected ?? 0]}</p>
          </div>
          <button
            onClick={next}
            {...(isLast ? { 'data-umami-event': 'KI-Check fertig' } : {})}
            className="w-full px-8 py-4 bg-[#B4562F] text-white text-lg font-semibold rounded-xl hover:bg-[#94451F] transition-colors"
          >
            {isLast ? 'Zum Ergebnis →' : 'Nächste Frage →'}
          </button>
        </div>
      ) : (
        <button
          onClick={onExit}
          className="block mx-auto mt-4 text-lg text-[#6B7A78] underline underline-offset-4 hover:text-[#B4562F] transition-colors"
        >
          Abbrechen
        </button>
      )}
    </div>
  );
};

export default QuizSession;
